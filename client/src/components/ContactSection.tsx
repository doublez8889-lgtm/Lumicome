/*
 * ATELIER YF — Contact Section Component
 * Style: Dark Editorial Elegance
 * Fields: Name, WeChat, Email, Message
 */

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type FormState = {
  name: string;
  wechat: string;
  email: string;
  message: string;
};

type SubmitStatus = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormState>({
    name: "",
    wechat: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) return;

    setStatus("sending");
    // Simulate network delay (replace with real API call when email service is connected)
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
    setForm({ name: "", wechat: "", email: "", message: "" });
  };

  /* shared input style */
  const inputCls =
    "w-full bg-transparent font-body text-white placeholder-[oklch(0.52_0.006_60)] outline-none border-none focus:outline-none";
  const inputStyle = { fontSize: "clamp(0.9rem, 1.1vw, 1rem)", fontWeight: 300 };

  return (
    <section
      id="contact"
      className="py-28 md:py-40 border-t border-[oklch(0.22_0.004_50)] bg-[oklch(0.06_0.001_50)]"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">

          {/* ── Left: heading + contact info ── */}
          <div className="lg:col-span-4 lg:pr-16">
            <div className="reveal">
              <p className="font-body text-[0.62rem] tracking-[0.22em] uppercase text-[oklch(0.65_0.010_80)] mb-4">
                {t("Contact", "联系我们")}
              </p>
              <h2
                className="font-display text-white leading-tight mb-8"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {t("Let's Work Together", "期待合作")}
              </h2>
              <p
                className="font-body text-[oklch(0.72_0.008_75)] leading-relaxed mb-10"
                style={{ fontSize: "clamp(0.85rem, 1.1vw, 0.95rem)", fontWeight: 300 }}
              >
                {t(
                  "Tell us about your project. We'll get back to you within 48 hours.",
                  "告诉我们您的项目需求，我们将在 48 小时内回复您。"
                )}
              </p>

              {/* Studio contact details — no WeChat number shown */}
              <div className="flex flex-col gap-5">
                <div>
                  <p className="font-body text-[0.58rem] tracking-[0.18em] uppercase text-[oklch(0.52_0.008_60)] mb-1">
                    {t("Email", "邮箱")}
                  </p>
                  <a
                    href="mailto:hello@atelieryf.com"
                    className="font-body text-[oklch(0.88_0.008_75)] hover:text-white transition-colors duration-300"
                    style={{ fontSize: "0.9rem" }}
                  >
                    hello@atelieryf.com
                  </a>
                </div>
                <div>
                  <p className="font-body text-[0.58rem] tracking-[0.18em] uppercase text-[oklch(0.52_0.008_60)] mb-1">
                    {t("Based in", "工作室所在地")}
                  </p>
                  <p className="font-body text-[oklch(0.88_0.008_75)]" style={{ fontSize: "0.9rem" }}>
                    {t("Paris, France", "法国 · 巴黎")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: form / success state ── */}
          <div className="lg:col-span-8">
            {/* ── Success Banner ── */}
            {status === "success" && (
              <div className="reveal flex flex-col justify-center h-full min-h-[320px] border-l border-[oklch(0.28_0.004_50)] pl-10">
                <div className="w-8 h-px bg-[oklch(0.65_0.010_80)] mb-8" />
                <p className="font-body text-[0.62rem] tracking-[0.22em] uppercase text-[oklch(0.65_0.010_80)] mb-5">
                  {t("Message Sent", "消息已发送")}
                </p>
                <h3
                  className="font-display text-white leading-tight mb-6"
                  style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
                >
                  {t("Thank you.", "感谢您的留言。")}
                </h3>
                <p
                  className="font-body text-[oklch(0.72_0.008_75)] leading-relaxed mb-10"
                  style={{ fontSize: "clamp(0.88rem, 1.1vw, 0.95rem)", fontWeight: 300 }}
                >
                  {t(
                    "We've received your message and will get back to you within 48 hours.",
                    "我们已收到您的留言，将在 48 小时内与您联系。"
                  )}
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="self-start font-body text-[0.68rem] tracking-[0.2em] uppercase text-[oklch(0.65_0.010_80)] hover:text-white transition-colors duration-300 border-b border-[oklch(0.35_0.006_60)] hover:border-white pb-0.5"
                >
                  {t("Send another message →", "再次留言 →")}
                </button>
              </div>
            )}

            {/* ── Form ── */}
            {status !== "success" && (
            <form onSubmit={handleSubmit} className="reveal reveal-delay-1 flex flex-col gap-0">

              {/* Row 1: Name + WeChat */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
                {/* Name */}
                <div className="border-b border-[oklch(0.28_0.004_50)] sm:border-r sm:border-r-[oklch(0.28_0.004_50)] py-6 sm:pr-8">
                  <label
                    htmlFor="name"
                    className="block font-body text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.72_0.008_70)] mb-3"
                  >
                    {t("Name", "姓名")}
                    <span className="text-[oklch(0.65_0.022_110)] ml-1">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputCls}
                    style={inputStyle}
                  />
                </div>

                {/* WeChat */}
                <div className="border-b border-[oklch(0.28_0.004_50)] py-6 sm:pl-8">
                  <label
                    htmlFor="wechat"
                    className="block font-body text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.72_0.008_70)] mb-3"
                  >
                    {t("WeChat", "微信")}
                  </label>
                  <input
                    id="wechat"
                    name="wechat"
                    type="text"
                    value={form.wechat}
                    onChange={handleChange}
                    placeholder={t("WeChat ID", "微信号")}
                    className={inputCls}
                    style={inputStyle}
                  />
                </div>
              </div>

              {/* Row 2: Email */}
              <div className="border-b border-[oklch(0.28_0.004_50)] py-6">
                <label
                  htmlFor="email"
                  className="block font-body text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.72_0.008_70)] mb-3"
                >
                  {t("Email", "联系邮箱")}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder={t("your@email.com", "您的邮箱地址")}
                  className={inputCls}
                  style={inputStyle}
                />
              </div>

              {/* Row 3: Message */}
              <div className="border-b border-[oklch(0.28_0.004_50)] py-6">
                <label
                  htmlFor="message"
                  className="block font-body text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.72_0.008_70)] mb-3"
                >
                  {t("Message", "留言")}
                  <span className="text-[oklch(0.65_0.022_110)] ml-1">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t(
                    "Tell us about your project, timeline, and any specific requirements...",
                    "请描述您的项目需求、时间安排及其他具体要求..."
                  )}
                  className={`${inputCls} resize-none leading-relaxed`}
                  style={inputStyle}
                />
              </div>

              {/* Submit row */}
              <div className="pt-8 flex items-center justify-between gap-6 flex-wrap">
                <p
                  className="font-body text-[oklch(0.55_0.006_60)]"
                  style={{ fontSize: "0.72rem", fontWeight: 300 }}
                >
                  {t(
                    "* Required fields. We respond within 48 hours.",
                    "* 为必填项。我们将在 48 小时内回复。"
                  )}
                </p>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="shrink-0 font-body text-[0.72rem] tracking-[0.22em] uppercase text-white border border-[oklch(0.45_0.008_60)] px-10 py-4 hover:bg-white hover:text-[oklch(0.06_0.001_50)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending"
                    ? t("Sending...", "发送中...")
                    : t("Send Message", "发送留言")}
                </button>
              </div>

            </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
