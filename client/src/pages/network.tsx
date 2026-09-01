import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { trpc } from "@/lib/trpc";

const ROLES_EN = [
  { value: "direction", label: "Direction", desc: "Focused on moving image creation across brand features, fashion films, and independent documentaries." },
  { value: "cinematography", label: "Cinematography", desc: "Possessing a sharp sensibility in cinematography, lighting design, fashion campaigns, and print visuals." },
  { value: "art", label: "Art Direction", desc: "Responsible for establishing the visual tone, as well as the execution of set design and spatial installations." },
  { value: "production", label: "Global Production", desc: "Based overseas across major international territories and cities, possessing robust capabilities in local on-the-ground production, resource alignment, and location scouting." },
  { value: "creative", label: "Creative & Strategy", desc: "Capable of clarifying brand strategy, developing campaign concepts, and framing narrative structures." },
];

const ROLES_ZH = [
  { value: "direction", label: "导演", desc: "专注于品牌影像、时装短片与独立纪录片创作。" },
  { value: "cinematography", label: "摄影指导", desc: "具备电影摄影、灯光设计、时装影像与平面视觉的专业经验。" },
  { value: "art", label: "美术指导", desc: "负责视觉基调设定、置景设计及空间装置执行。" },
  { value: "production", label: "属地制片", desc: "常驻主要国际市场，具备当地制作管理、供应商协调、团队组织与场地统筹能力。" },
  { value: "creative", label: "创意策划", desc: "负责品牌策略梳理、Campaign 概念开发与叙事结构搭建。" },
];

const NETWORK_RESOURCES = [
  {
    en: "Creators & KOLs",
    zh: "创作者与 KOL",
    descEn: "Paris-based Chinese creators, European fashion voices, lifestyle storytellers, models, and social-first profiles selected by tone, audience, and engagement quality.",
    descZh: "长期关注旅欧华语创作者、欧洲时尚内容人、生活方式博主与社交平台创作者。合作人选不只看量级，更看受众结构、内容气质与品牌调性的适配度。",
  },
  {
    en: "Talent & Artist Affairs",
    zh: "艺人与人物合作",
    descEn: "Talent outreach and project coordination for fashion shows, red carpet moments, campaign appearances, interviews, and long-term brand partnerships.",
    descZh: "围绕时装秀、红毯、品牌活动、Campaign 出镜、人物采访与长期合作，协助品牌完成人物沟通、档期推进与现场协调。",
  },
  {
    en: "Media & Press",
    zh: "媒体与内容发布",
    descEn: "Long-term media allies across fashion, culture, imagery, and entertainment, with distribution thinking across Xiaohongshu, Weibo, Douyin, Instagram, and editorial press.",
    descZh: "与时尚、文化、影像和娱乐方向的媒体保持合作关系，并根据项目内容选择小红书、微博、抖音、Instagram 或编辑媒体作为发布路径。",
  },
];

const MEDIA_ALLIES = "ELLE · Harper's Bazaar · Marie Claire · Madame Figaro · Wallpaper* · Man About Town · Getty Images · ModeZine";

const ACCEPTED_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/webp"];
const MAX_MB = 16;

export default function Network() {
  const { lang } = useLanguage();
  const roles = lang === "zh" ? ROLES_ZH : ROLES_EN;

  const [step, setStep] = useState<"form" | "success">("form");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [portfolioUrl, setPortfolioUrl] = useState("");

  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadMutation = trpc.network.uploadPortfolio.useMutation();
  const submitMutation = trpc.network.submitApplication.useMutation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    document.title = "Network — LUMICOME";
  }, []);

  function validateFile(f: File): string {
    if (!ACCEPTED_TYPES.includes(f.type)) {
      return lang === "zh"
        ? "仅支持 PDF、JPG、PNG、WEBP 格式"
        : "Only PDF, JPG, PNG, WEBP files are accepted.";
    }
    if (f.size > MAX_MB * 1024 * 1024) {
      return lang === "zh" ? `文件不得超过 ${MAX_MB} MB` : `File must be under ${MAX_MB} MB.`;
    }
    return "";
  }

  function handleFileSelect(f: File) {
    const err = validateFile(f);
    if (err) {
      setFileError(err);
      setFile(null);
    } else {
      setFileError("");
      setFile(f);
    }
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) handleFileSelect(dropped);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!role) return;
    setIsSubmitting(true);
    setSubmitError("");

    try {
      let portfolioFileKey: string | undefined;
      let portfolioFileUrl: string | undefined;
      let portfolioFileName: string | undefined;

      if (file) {
        const base64Data = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => {
            const result = reader.result as string;
            resolve(result.split(",")[1]);
          };
          reader.onerror = reject;
          reader.readAsDataURL(file);
        });

        const uploaded = await uploadMutation.mutateAsync({
          base64Data,
          fileName: file.name,
          mimeType: file.type,
        });

        portfolioFileKey = uploaded.key;
        portfolioFileUrl = uploaded.url;
        portfolioFileName = uploaded.fileName;
      }

      await submitMutation.mutateAsync({
        name,
        email,
        role,
        location,
        bio: bio || undefined,
        portfolioUrl: portfolioUrl || undefined,
        portfolioFileKey,
        portfolioFileUrl,
        portfolioFileName,
      });

      setStep("success");
    } catch (err: any) {
      setSubmitError(
        lang === "zh"
          ? "提交失败，请稍后重试。"
          : "Submission failed. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
      <Navbar />

      <main className="pt-32 pb-32">
        {/* ── PAGE HEADER ─────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-20">
          <p
            className="text-xs tracking-[0.28em] uppercase mb-6 font-light"
            style={{ color: "#3a3028" }}
          >
            {t("LUMICOME NETWORK / NETWORK", "LUMICOME 协作网络")}
          </p>
          <h1
            className="font-display mb-10 leading-[1.0]"
            style={{
              fontSize: "clamp(3rem, 5.5vw, 5.2rem)",
              fontWeight: 700,
              color: "#1a1510",
              letterSpacing: "-0.03em",
            }}
          >
            {t("The Network.", "协作网络")}
          </h1>

          {/* 引言段落 */}
          {lang === "zh" ? (
            <div className="max-w-2xl space-y-5">
              <p className="text-base font-light leading-relaxed" style={{ color: "#3a3028" }}>
                Lumicome 与常驻不同市场的导演、摄影、美术、制片及创意人员保持项目制合作。协作网络采用定向遴选与持续更新机制，不作为公开招聘渠道。
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: "#3a3028" }}>
                遴选依据包括作品质量、专业方法、沟通能力与执行标准，并结合具体项目的地域、预算与制作条件进行匹配。
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: "#1a1510" }}>
                地域与资历不是单独的评判标准；作品及其背后的专业判断始终优先。
              </p>
            </div>
          ) : (
            <div className="max-w-2xl space-y-5">
              <p className="text-base font-light leading-relaxed" style={{ color: "#3a3028" }}>
                We maintain long-term collaborations with independent creators based all over the world. This is not an open recruitment platform, but a carefully curated roster of global talent.
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: "#3a3028" }}>
                The prerequisite for working together is entirely pure: a mutual alignment and willingness to follow the same standards of execution.
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: "#1a1510" }}>
                On this roster, we do not evaluate geography, seniority, or personal connections. We only look at the work.
              </p>
            </div>
          )}
        </div>

        {/* ── CREATOR & MEDIA NETWORK ───────────────────────── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24"
          style={{ borderTop: "1px solid #e0d9d0" }}
        >
          <p
            className="text-xs tracking-[0.24em] uppercase font-light mt-12 mb-10"
            style={{ color: "#3a3028" }}
          >
            {t("CREATOR, TALENT & MEDIA RESOURCES", "创作者、人物与媒体资源")}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {NETWORK_RESOURCES.map((resource, i) => (
              <div
                key={resource.en}
                className={`px-4 py-8 lg:px-7 border-b border-[#e0d9d0] ${i > 0 ? "lg:border-l" : ""}`}
              >
                <h3
                  className="font-display mb-4"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1a1510",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t(resource.en, resource.zh)}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#3a3028" }}>
                  {t(resource.descEn, resource.descZh)}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <p
              className="lg:col-span-3 text-xs tracking-[0.22em] uppercase font-light"
              style={{ color: "#9a8f84" }}
            >
              {t("Long-term media allies", "长期合作媒体")}
            </p>
            <p className="lg:col-span-8 text-sm font-light leading-relaxed" style={{ color: "#3a3028" }}>
              {MEDIA_ALLIES}
            </p>
          </div>
        </div>

        {/* ── DISCIPLINES GRID ────────────────────────────────── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24"
          style={{ borderTop: "1px solid #e0d9d0" }}
        >
          <p
            className="text-xs tracking-[0.24em] uppercase font-light mt-12 mb-10"
            style={{ color: "#3a3028" }}
          >
                {t("DISCIPLINES WE CONTINUOUSLY FOCUS ON", "我们长期关注的专业方向")}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {roles.map((r, i) => (
              <div
                key={r.value}
                className={`py-8 pr-8 ${i < roles.length - 1 ? "border-b border-[#e0d9d0]" : ""} ${i < roles.length - 1 && (i + 1) % 2 !== 0 ? "md:border-r" : ""}${i === roles.length - 1 ? " md:col-span-2" : ""}`}
              >
                <h3
                  className="font-display mb-3"
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#1a1510",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {r.label}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#3a3028" }}>
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── REVIEW NOTES ──────────────────────────────────── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24"
          style={{ borderTop: "1px solid #e0d9d0" }}
        >
          <p
            className="text-xs tracking-[0.24em] uppercase font-light mt-12 mb-10"
            style={{ color: "#3a3028" }}
          >
            {t("A FEW NOTES ON COLLABORATION", "关于协作的几点说明")}
          </p>

          {lang === "zh" ? (
            <div className="max-w-2xl space-y-10">
              <div>
                <p className="text-sm font-light mb-3" style={{ color: "#9a8f84", letterSpacing: "0.08em" }}>
                  作品标准
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#3a3028" }}>
                  我们对创作者的判断，不取决于过往项目体量或行业名气。更重要的是作品呈现出的审美判断、方法意识与执行完成度。
                </p>
              </div>
              <div>
                <p className="text-sm font-light mb-3" style={{ color: "#9a8f84", letterSpacing: "0.08em" }}>
                  联系方式
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#3a3028" }}>
                  如果作品与我们的项目方向契合，我们会主动发出合作邀请。由于日常制作工作排期较满，无法对每一份提交逐一回复，敬请理解。
                </p>
              </div>
              <div>
                <p className="text-sm font-light mb-3" style={{ color: "#9a8f84", letterSpacing: "0.08em" }}>
                  项目匹配
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#3a3028" }}>
                  当具体跨境项目启动时，我们会根据创意方向、地域条件与技术要求，从名录中匹配合适的创作者共同参与。
                </p>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl space-y-10">
              <div>
                <p className="text-sm font-light mb-3" style={{ color: "#9a8f84", letterSpacing: "0.08em" }}>
                  On the Work Itself
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#3a3028" }}>
                  Our onboarding of a creator never depends on the scale of past projects or industry status. We care far more about the aesthetic judgment shown within the work itself, and the final execution quality.
                </p>
              </div>
              <div>
                <p className="text-sm font-light mb-3" style={{ color: "#9a8f84", letterSpacing: "0.08em" }}>
                  On Reaching Out
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#3a3028" }}>
                  If your work aligns with our aesthetic context, we will reach out to you directly with a formal invitation. Because our day-to-day production schedule on set is intensely demanding, we genuinely cannot provide individual responses to every single inquiry. We appreciate the understanding of our fellow peers.
                </p>
              </div>
              <div>
                <p className="text-sm font-light mb-3" style={{ color: "#9a8f84", letterSpacing: "0.08em" }}>
                  On Project Execution
                </p>
                <p className="text-sm font-light leading-relaxed" style={{ color: "#3a3028" }}>
                  Whenever a specific cross-border project launches, we will look directly to this roster, select the creators whose aesthetic style and technical standards best fit the brief, and invite them to co-create with us.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ── APPLICATION FORM / SUCCESS ───────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          {step === "success" ? (
            <div
              className="py-24 text-center"
              style={{ borderTop: "1px solid #e0d9d0" }}
            >
              <p
                className="text-xs tracking-[0.28em] uppercase mb-6 font-light"
                style={{ color: "#3a3028" }}
              >
                {t("SUBMISSION RECEIVED", "作品已收到")}
              </p>
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.6rem)",
                  fontWeight: 700,
                  color: "#1a1510",
                  letterSpacing: "-0.025em",
                }}
              >
                {t("Thank you.", "感谢您的提交。")}
              </h2>
              <p
                className="text-base font-light leading-relaxed max-w-md mx-auto"
                style={{ color: "#3a3028" }}
              >
                {t(
                  "We review all submissions internally. If your work is a match, we will reach out directly.",
                  "我们会定期查看提交内容。如作品与后续项目方向匹配，我们会主动联系。"
                )}
              </p>
            </div>
          ) : (
            <div style={{ borderTop: "1px solid #e0d9d0" }}>
              <p
                className="text-xs tracking-[0.24em] uppercase font-light mt-12 mb-12"
                style={{ color: "#3a3028" }}
              >
                {t("SUBMIT YOUR WORK", "提交作品")}
              </p>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  {/* Left: personal info */}
                  <div className="lg:col-span-5 space-y-8">
                    {/* Name */}
                    <div>
                      <label
                        className="block text-xs tracking-[0.20em] uppercase font-light mb-3"
                        style={{ color: "#3a3028" }}
                      >
                        {t("NAME", "姓名")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent text-sm font-light py-3 outline-none transition-colors"
                        style={{
                          borderBottom: "1px solid #c8bfb4",
                          color: "#1a1510",
                        }}
                        placeholder={t("Full name", "姓名")}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        className="block text-xs tracking-[0.20em] uppercase font-light mb-3"
                        style={{ color: "#3a3028" }}
                      >
                        {t("EMAIL", "邮箱")} *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent text-sm font-light py-3 outline-none"
                        style={{
                          borderBottom: "1px solid #c8bfb4",
                          color: "#1a1510",
                        }}
                        placeholder="your@email.com"
                      />
                    </div>

                    {/* Location */}
                    <div>
                      <label
                        className="block text-xs tracking-[0.20em] uppercase font-light mb-3"
                        style={{ color: "#3a3028" }}
                      >
                        {t("CITY OF RESIDENCE", "常驻城市")} *
                      </label>
                      <input
                        type="text"
                        required
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full bg-transparent text-sm font-light py-3 outline-none"
                        style={{
                          borderBottom: "1px solid #c8bfb4",
                          color: "#1a1510",
                        }}
                        placeholder={t("Paris, Shanghai, Tokyo…", "巴黎、上海、东京…")}
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label
                        className="block text-xs tracking-[0.20em] uppercase font-light mb-3"
                        style={{ color: "#3a3028" }}
                      >
                        {t("CREATIVE DISCIPLINE", "创作方向")} *
                      </label>
                      <div className="space-y-2">
                        {roles.map((r) => (
                          <label
                            key={r.value}
                            className="flex items-center gap-3 cursor-pointer group"
                          >
                            <span
                              className="w-4 h-4 flex-shrink-0 border transition-colors"
                              style={{
                                borderColor: role === r.value ? "#1a1510" : "#c8bfb4",
                                backgroundColor: role === r.value ? "#1a1510" : "transparent",
                              }}
                            />
                            <input
                              type="radio"
                              name="role"
                              value={r.value}
                              checked={role === r.value}
                              onChange={() => setRole(r.value)}
                              className="sr-only"
                            />
                            <span
                              className="text-sm font-light"
                              style={{ color: role === r.value ? "#1a1510" : "#6b5f54" }}
                            >
                              {r.label}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <label
                        className="block text-xs tracking-[0.20em] uppercase font-light mb-3"
                        style={{ color: "#3a3028" }}
                      >
                        {t("BRIEF INTRODUCTION", "简要介绍")}
                      </label>
                      <textarea
                        rows={4}
                        value={bio}
                        onChange={(e) => setBio(e.target.value)}
                        className="w-full bg-transparent text-sm font-light py-3 outline-none resize-none"
                        style={{
                          borderBottom: "1px solid #c8bfb4",
                          color: "#1a1510",
                        }}
                        placeholder={t(
                          "A few lines about your practice and background.",
                          "简要介绍您的创作方向与背景。"
                        )}
                      />
                    </div>
                  </div>

                  {/* Right: portfolio */}
                  <div className="lg:col-span-7 space-y-8">
                    {/* Portfolio URL */}
                    <div>
                      <label
                        className="block text-xs tracking-[0.20em] uppercase font-light mb-3"
                        style={{ color: "#3a3028" }}
                      >
                        {t("PORTFOLIO LINK", "作品集链接")}
                      </label>
                      <input
                        type="url"
                        value={portfolioUrl}
                        onChange={(e) => setPortfolioUrl(e.target.value)}
                        className="w-full bg-transparent text-sm font-light py-3 outline-none"
                        style={{
                          borderBottom: "1px solid #c8bfb4",
                          color: "#1a1510",
                        }}
                        placeholder="https://yourportfolio.com"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label
                        className="block text-xs tracking-[0.20em] uppercase font-light mb-3"
                        style={{ color: "#3a3028" }}
                      >
                        {t("UPLOAD PORTFOLIO FILE", "上传作品集文件")}
                      </label>
                      <p
                        className="text-xs font-light mb-4"
                        style={{ color: "#4a3f35" }}
                      >
                        {t(
                          "PDF, JPG, PNG or WEBP · Max 16 MB",
                          "支持 PDF、JPG、PNG、WEBP · 最大 16 MB"
                        )}
                      </p>

                      <div
                        onClick={() => fileInputRef.current?.click()}
                        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                        onDragLeave={() => setIsDragging(false)}
                        onDrop={handleDrop}
                        className="cursor-pointer transition-all duration-200 flex flex-col items-center justify-center py-16"
                        style={{
                          border: `1px dashed ${isDragging ? "#1a1510" : "#c8bfb4"}`,
                          backgroundColor: isDragging ? "rgba(26,21,16,0.03)" : "transparent",
                        }}
                      >
                        {file ? (
                          <>
                            <p className="text-sm font-light mb-1" style={{ color: "#1a1510" }}>
                              {file.name}
                            </p>
                            <p className="text-xs font-light" style={{ color: "#4a3f35" }}>
                              {(file.size / 1024 / 1024).toFixed(1)} MB ·{" "}
                              <span
                                className="underline cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setFile(null);
                                  setFileError("");
                                }}
                              >
                                {t("Remove", "移除")}
                              </span>
                            </p>
                          </>
                        ) : (
                          <>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#9a8f84"
                              strokeWidth="1.5"
                              className="mb-4"
                            >
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="17 8 12 3 7 8" />
                              <line x1="12" y1="3" x2="12" y2="15" />
                            </svg>
                            <p className="text-sm font-light mb-1" style={{ color: "#3a3028" }}>
                              {t("Drag & drop or click to upload", "拖拽文件至此，或点击上传")}
                            </p>
                          </>
                        )}
                      </div>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.webp"
                        className="hidden"
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) handleFileSelect(f);
                        }}
                      />

                      {fileError && (
                        <p className="mt-2 text-xs font-light" style={{ color: "#c0392b" }}>
                          {fileError}
                        </p>
                      )}
                    </div>

                    <p className="text-xs font-light leading-relaxed" style={{ color: "#4a3f35" }}>
                      {t(
                        "At least one of the above — portfolio link or file — is recommended.",
                        "建议至少提供一项作品集链接或文件。"
                      )}
                    </p>

                    {submitError && (
                      <p className="text-xs font-light" style={{ color: "#c0392b" }}>
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting || !role}
                      className="inline-block text-xs tracking-[0.24em] uppercase font-light transition-opacity duration-300 disabled:opacity-40"
                      style={{
                        color: "#1a1510",
                        borderBottom: "1px solid #1a1510",
                        paddingBottom: "3px",
                      }}
                    >
                      {isSubmitting
                        ? t("SUBMITTING…", "提交中…")
                        : t("SUBMIT →", "提交作品 →")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
