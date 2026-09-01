import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { getDb } from "./db";
import { networkApplications } from "../drizzle/schema";
import { storagePut } from "./storage";
import { notifyOwner } from "./_core/notification";

// Generate a random suffix to prevent file enumeration
function randomSuffix(len = 8): string {
  return Math.random().toString(36).substring(2, 2 + len);
}

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  network: router({
    // Upload portfolio file to S3
    // Accepts base64-encoded file data from the client
    uploadPortfolio: publicProcedure
      .input(
        z.object({
          base64Data: z.string().min(1),
          fileName: z.string().min(1).max(255),
          mimeType: z.string().min(1),
        })
      )
      .mutation(async ({ input }) => {
        const { base64Data, fileName, mimeType } = input;

        // Decode base64 to buffer
        const buffer = Buffer.from(base64Data, "base64");

        // Enforce 16 MB limit
        const MAX_BYTES = 16 * 1024 * 1024;
        if (buffer.byteLength > MAX_BYTES) {
          throw new Error("File exceeds 16 MB limit");
        }

        // Build a non-enumerable S3 key
        const ext = fileName.split(".").pop() ?? "bin";
        const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 80);
        const key = `network-portfolios/${randomSuffix()}-${safeName}`;

        const { url } = await storagePut(key, buffer, mimeType);

        return { key, url, fileName };
      }),

    // Submit a network application (with optional portfolio file metadata)
    submitApplication: publicProcedure
      .input(
        z.object({
          name: z.string().min(1).max(255),
          email: z.string().email().max(320),
          role: z.string().min(1).max(100),
          location: z.string().min(1).max(255),
          bio: z.string().optional(),
          portfolioUrl: z.string().optional(),
          portfolioFileKey: z.string().optional(),
          portfolioFileUrl: z.string().optional(),
          portfolioFileName: z.string().optional(),
        })
      )
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        await db.insert(networkApplications).values({
          name: input.name,
          email: input.email,
          role: input.role,
          location: input.location,
          bio: input.bio ?? null,
          portfolioUrl: input.portfolioUrl || null,
          portfolioFileKey: input.portfolioFileKey ?? null,
          portfolioFileUrl: input.portfolioFileUrl ?? null,
          portfolioFileName: input.portfolioFileName ?? null,
          status: "pending",
        });

        // Notify studio owner
        try {
          await notifyOwner({
            title: "New Network Application",
            content: `${input.name} (${input.email}) applied as ${input.role} from ${input.location}.`,
          });
        } catch {
          // Non-critical — don't fail the request if notification fails
        }

        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
