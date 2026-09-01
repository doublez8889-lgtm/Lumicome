/*
 * LUMICOME — Home Page
 * Style: Cream Editorial — ivory canvas, ink typography, magazine rhythm
 * Layout: Asymmetric hero, typographic stats, editorial service grid, contact
 * Aesthetic: System Magazine × 032c × high-fashion atelier
 */

import { useEffect, useState, useRef } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HERO_IMG = "/images/project-stills/golden-hour-film.png";

// ── Validation helpers ──────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateHomeForm(
  fields: { name: string; email: string; message: string },
  lang: string
): FormErrors {
  const errors: FormErrors = {};
  if (!fields.name.trim()) {
    errors.name = lang === 'zh' ? '请输入您的姓名' : 'Name is required';
  } else if (fields.name.trim().length < 2) {
    errors.name = lang === 'zh' ? '姓名至少需要 2 个字符' : 'Name must be at least 2 characters';
  }
  if (!fields.email.trim()) {
    errors.email = lang === 'zh' ? '请输入您的邮箱' : 'Email is required';
  } else if (!EMAIL_REGEX.test(fields.email.trim())) {
    errors.email = lang === 'zh' ? '请输入有效的邮箱格式（如 name@example.com）' : 'Please enter a valid email address (e.g. name@example.com)';
  }
  if (!fields.message.trim()) {
    errors.message = lang === 'zh' ? '请输入留言内容' : 'Message is required';
  } else if (fields.message.trim().length < 10) {
    errors.message = lang === 'zh' ? '留言至少需要 10 个字符' : 'Message must be at least 10 characters';
  }
  return errors;
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1 text-xs flex items-center gap-1" style={{ color: "#b85c4a" }}>
      <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      {message}
    </p>
  );
}

// ── Animated counter hook ──────────────────────────────────────────────────
function useCountUp(target: number, duration = 1200, startOnVisible = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnVisible) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration, startOnVisible]);

  return { count, ref };
}

function ContactFormComponent() {
  const { lang, t } = useLanguage();
  const [state, handleFormspreeSubmit] = useForm('mojbnaqg');
  const [fields, setFields] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: keyof typeof fields) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const fieldErrors = validateHomeForm(fields, lang);
    setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }));
  };

  const handleChange = (field: keyof typeof fields, value: string) => {
    const updated = { ...fields, [field]: value };
    setFields(updated);
    if (touched[field]) {
      const fieldErrors = validateHomeForm(updated, lang);
      setErrors(prev => ({ ...prev, [field]: fieldErrors[field] }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    const fieldErrors = validateHomeForm(fields, lang);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;
    handleFormspreeSubmit(e);
  };

  const inputBase = "w-full px-0 py-3 bg-transparent border-0 border-b text-sm font-light focus:outline-none transition-colors duration-300 placeholder-stone-400";
  const inputClass = (field: keyof FormErrors) =>
    `${inputBase} ${
      touched[field] && errors[field]
        ? 'border-b-red-400 text-stone-800'
        : 'border-b-stone-300 text-stone-800 focus:border-b-stone-800'
    }`;

  if (state.succeeded) {
    return (
      <div className="py-12 text-center">
        <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center" style={{ border: "1px solid #1a1510" }}>
          <svg className="w-5 h-5" fill="none" stroke="#1a1510" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl mb-3" style={{ color: "#1a1510" }}>
          {t("Thank you", "感谢您的留言")}
        </h3>
        <p className="text-sm font-light" style={{ color: "#7a6f65" }}>
          {t(
            "We have received your message and will contact you within 48 hours.",
            "我们已收到您的信息，通常会在两个工作日内回复。"
          )}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <ValidationError errors={state.errors} className="text-sm" style={{ color: "#b85c4a" }} />

      <div>
        <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#7a6f65" }}>
          {t("Name", "姓名")} <span style={{ color: "#b85c4a" }}>*</span>
        </label>
        <input
          type="text"
          name="name"
          value={fields.name}
          onChange={e => handleChange('name', e.target.value)}
          onBlur={() => handleBlur('name')}
          className={inputClass('name')}
          placeholder={t("Your name", "您的名字")}
          autoComplete="name"
        />
        <FieldError message={errors.name} />
        <ValidationError field="name" prefix="Name" errors={state.errors} className="text-xs mt-1" style={{ color: "#b85c4a" }} />
      </div>

      <div>
        <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#7a6f65" }}>
          {t("Email", "邮箱")} <span style={{ color: "#b85c4a" }}>*</span>
        </label>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={e => handleChange('email', e.target.value)}
          onBlur={() => handleBlur('email')}
          className={inputClass('email')}
          placeholder="your@email.com"
          autoComplete="email"
        />
        <FieldError message={errors.email} />
        <ValidationError field="email" prefix="Email" errors={state.errors} className="text-xs mt-1" style={{ color: "#b85c4a" }} />
      </div>

      <div>
        <label className="block text-xs tracking-widest uppercase mb-2 font-light" style={{ color: "#7a6f65" }}>
          {t("Message", "留言")} <span style={{ color: "#b85c4a" }}>*</span>
        </label>
        <textarea
          name="message"
          value={fields.message}
          onChange={e => handleChange('message', e.target.value)}
          onBlur={() => handleBlur('message')}
          rows={5}
          className={inputClass('message')}
          placeholder={t("Tell us about your project", "告诉我们您的项目")}
        />
        <FieldError message={errors.message} />
        <ValidationError field="message" prefix="Message" errors={state.errors} className="text-xs mt-1" style={{ color: "#b85c4a" }} />
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={state.submitting}
          className="text-xs tracking-[0.22em] uppercase font-light transition-opacity duration-300 hover:opacity-50 disabled:opacity-30"
          style={{ color: "#1a1510" }}
        >
          {state.submitting ? t("Sending...", "发送中...") : t("Send →", "发送 →")}
        </button>
      </div>
    </form>
  );
}

// ── Main Page ──────────────────────────────────────────────────────────────
export default function Home() {
  const { lang, t } = useLanguage();
  useScrollReveal();

  const { count: count05, ref: ref05 } = useCountUp(5);
  const { count: count27, ref: ref27 } = useCountUp(50);

  useEffect(() => {
    document.title = "Lumicome — China-Europe Image & Narrative Studio";
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.88) {
        el.classList.add("visible");
      }
    });
  }, [lang]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF" }}>
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative pt-20 overflow-hidden" style={{ minHeight: "100vh" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-16 pb-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">

            {/* Left: Text — spans 6 cols */}
            <div className="lg:col-span-6 pt-12 lg:pt-20 pb-16 z-10 relative">
              {/* Eyebrow */}
              <p
                className="reveal text-xs tracking-[0.28em] uppercase mb-10 font-light"
                style={{ color: "#6b5f54" }}
              >
                {t("EST. 2025 · PARIS / SHANGHAI", "成立于 2025 · 巴黎 / 上海")}
              </p>

              {/* Main headline — large, editorial */}
              <h1
                className="reveal reveal-delay-1 font-display leading-[1.0] mb-10"
                style={{
                  fontSize: "clamp(3.2rem, 5.5vw, 5.6rem)",
                  color: "#1a1510",
                  letterSpacing: "-0.03em",
                  fontWeight: 700,
                }}
              >
                {lang === "en" ? (
                  <>
                    China Europe
                    <br />
                    creative atelier
                  </>
                ) : (
                  <>
                    中欧
                    <br />
                    创意制作事务所
                  </>
                )}
              </h1>

              {/* Body copy */}
              <p
                className="reveal reveal-delay-2 text-base font-light leading-relaxed mb-12 max-w-md"
                style={{ color: "#3a3028" }}
              >
                {t(
                  "Lumicome — A China–Europe Image & Narrative Studio",
                  "Lumicome — 中欧创意制作事务所"
                )}
              </p>

              {/* CTA */}
              <a
                href="/projects"
                className="reveal reveal-delay-3 inline-block text-xs tracking-[0.24em] uppercase font-light transition-opacity duration-300 hover:opacity-50"
                style={{ color: "#1a1510", borderBottom: "1px solid #1a1510", paddingBottom: "3px" }}
              >
                {t("EXPLORE OUR WORK →", "探索我们的作品 →")}
              </a>


            </div>

            {/* Right: Image — spans 6 cols, bleeds to edge */}
            <div
              className="reveal reveal-delay-2 lg:col-span-6 relative mt-8 lg:-mr-16 lg:-mt-20"
              style={{
                height: "clamp(480px, 90vh, 820px)",
              }}
            >
              <img
                src={HERO_IMG}
                alt="Atelier Lumicome editorial"
                className="w-full h-full object-cover object-top"
                style={{}}
              />
              {/* Subtle overlay gradient — left fade into page bg */}
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, #F7F4EF 0%, rgba(247,244,239,0.3) 20%, transparent 40%)",
                }}
              />
              {/* Caption */}
              <p
                className="absolute bottom-6 right-6 text-xs tracking-[0.22em] uppercase font-light"
                style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.50rem" }}
              >
                {t("PARIS · SHANGHAI", "巴黎 · 上海")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ borderTop: "1px solid #e0d9d0", borderBottom: "1px solid #e0d9d0" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {[
              { numRef: ref05, display: `0${count05}`, label: t("REGIONS", "覆盖区域") },
              { numRef: ref27, display: `${count27}+`, label: t("BRANDS SERVED", "合作品牌") },
              { numRef: null, display: "IV", label: t("CORE DISCIPLINES", "核心业务") },
              { numRef: null, display: "II", label: t("ATELIERS", "驻地") },
            ].map((stat, i) => (
              <div
                key={i}
                ref={stat.numRef as React.RefObject<HTMLDivElement>}
                className={`reveal py-8 px-4 lg:px-8 ${i % 2 === 0 ? "border-r border-[#e0d9d0]" : ""} ${i < 2 ? "border-b border-[#e0d9d0] lg:border-b-0" : ""} ${i < 3 ? "lg:border-r" : "lg:border-r-0"}`}
              >
                <p
                  className="font-display mb-2"
                  style={{
                    fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                    color: "#1a1510",
                    letterSpacing: "-0.02em",
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {stat.display}
                </p>
                <p
                  className="text-xs tracking-[0.20em] uppercase font-light"
                  style={{ color: "#9a8f84" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND MANIFESTO ───────────────────────────────────────────────── */}
      <section className="py-24" style={{ borderTop: "1px solid #e0d9d0" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-2">
              <p className="text-xs tracking-[0.28em] uppercase font-light mb-6 lg:mb-0" style={{ color: "#6b5f54" }}>
                {t("WHAT WE DO", "我们做什么")}
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: "#1a1510", fontWeight: 400 }}
              >
                {t(
                  "Behind every brand of spiritual depth lies a unique narrative—one that is either yet to be discovered, or waiting to be fully articulated.",
                  "具备清晰文化资产的品牌，往往已经形成稳定的价值脉络。创意工作的起点，是识别其中尚未被充分表达的部分。"
                )}
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: "#1a1510", fontWeight: 400 }}
              >
                {t(
                  "Our work at Lumicome is to help brands unearth that story, and give it a visual shape.",
                  "Lumicome 通过创意策划、影像制作与传播规划梳理这套脉络，并将其转化为可执行、可发布的视觉内容。"
                )}
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: "#1a1510", fontWeight: 400 }}
              >
                {t(
                  "Our practice operates across both Europe and Greater China. This involves more than just on-the-ground production in Paris; it is about visual translation across cultural contexts. Whether it is bringing a European shoot to Greater China's communication channels, or introducing Asian visual cases to European media resources—we ensure that every brand narrative retains its original texture, no matter how far it travels.",
                  "我们的工作覆盖欧洲与大中华区，包括巴黎属地制片、跨文化内容适配及媒体发布规划。无论项目从欧洲进入中文传播环境，或从亚洲进入欧洲媒体语境，我们都以品牌既有定位为基准，控制内容在不同语境中的表达一致性。"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES THREE LAYERS ───────────────────────────────────────────── */}
      <section className="py-20" style={{ borderTop: "1px solid #e0d9d0" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="reveal flex items-baseline gap-6 mb-14">
            <span className="text-xs tracking-[0.24em] uppercase font-light" style={{ color: "#6b5f54" }}>
              {t("SERVICES", "服务")}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#e0d9d0" }} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                num: "01",
                en: "Creative Direction",
                zh: "创意方向",
                descEn: "Brand story discovery, visual concept development, and strategic direction. We define what a brand should look and feel like before a single frame is shot.",
                descZh: "从品牌定位与传播目标出发，完成创意概念、视觉基调、叙事结构与内容规划。",
              },
              {
                num: "02",
                en: "Production",
                zh: "影像制作",
                descEn: "Photography, film, casting, location scouting, on-set production management, and post-production. From concept to final deliverable.",
                descZh: "统筹摄影、影片、选角、勘景、拍摄管理与后期制作，并按媒介规格完成交付。",
              },
              {
                num: "03",
                en: "China\u2013Europe Distribution",
                zh: "中欧传播",
                descEn: "Connecting creative output to the right channels across both directions — Greater China media, European press, and cross-border platforms.",
                descZh: "根据内容属性配置大中华区媒体、欧洲编辑资源与跨境平台，制定相应发布路径。",
              },
            ].map((svc, i) => (
              <div
                key={svc.num}
                className={`reveal py-10 px-8 border-b border-[#e0d9d0] md:border-b-0 ${i < 2 ? "md:border-r" : ""}`}
              >
                <p className="text-xs tracking-[0.24em] uppercase font-light mb-4" style={{ color: "#9a8f84" }}>
                  {svc.num}
                </p>
                <h3
                  className="font-display mb-4"
                  style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", color: "#1a1510", letterSpacing: "-0.01em", fontWeight: 700, lineHeight: 1.1 }}
                >
                  {lang === "en" ? svc.en : svc.zh}
                </h3>
                <p className="font-body text-sm font-light leading-relaxed" style={{ color: "#4a4038" }}>
                  {lang === "en" ? svc.descEn : svc.descZh}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTS ─────────────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ borderTop: "1px solid #e0d9d0" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="reveal flex items-baseline gap-6 mb-12">
            <span className="text-xs tracking-[0.24em] uppercase font-light" style={{ color: "#6b5f54" }}>
              {t("SELECTED CLIENTS", "部分客户")}
            </span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#e0d9d0" }} />
          </div>
          <div className="reveal flex flex-wrap gap-x-10 gap-y-4">
            {[
              "AIR CHINA",
              "DISCOVERY CHANNEL",
              "TISSOT",
              "LOUIS VUITTON",
              "SHIATZY CHEN",
              "PRINTEMPS",
              "SAINT LAURENT",
            ].map((brand) => (
              <span
                key={brand}
                className="font-display text-sm tracking-[0.12em] uppercase"
                style={{ color: "#3a3028", letterSpacing: "0.08em" }}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLABORATOR RECRUITMENT ──────────────────────────────────────────── */}
      <section className="py-24" style={{ borderTop: "1px solid #e0d9d0", backgroundColor: "#F2EFE9" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-0 items-start">
            <div className="lg:col-span-6">
              <p className="text-xs tracking-[0.28em] uppercase font-light mb-6" style={{ color: "#6b5f54" }}>
                {t("THE NETWORK", "协作网络")}
              </p>
              <h2
                className="font-display mb-6 leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#1a1510", letterSpacing: "-0.02em", fontWeight: 700 }}
              >
                {t(
                  "A curated network of independent creators.",
                  "一份经筛选的协作名录。"
                )}
              </h2>
              <p
                className="font-body text-sm font-light leading-relaxed mb-10 max-w-lg"
                style={{ color: "#4a4038" }}
              >
                {lang === "zh" ? (
                  <>
                    Lumicome 与一群分布在全球的独立创作者长期协作。<br /><br />
                    这不是开放平台，而是一份经过筛选的协作名录。<br />
                    我们不以地域、资历或人脉作为单独标准，作品质量与执行方式始终优先。
                  </>
                ) : (
                  <>
                    Lumicome works with a curated network of independent creators across the globe.<br /><br />
                    This is not an open platform — it is a reviewed roster.<br />
                    We do not assess geography, credentials, or connections. We look at the work.
                  </>
                )}
              </p>
              <a
                href="/network"
                className="inline-block text-xs tracking-[0.22em] uppercase font-light transition-opacity duration-300 hover:opacity-50"
                style={{ color: "#1a1510", borderBottom: "1px solid #1a1510", paddingBottom: "3px" }}
              >
                {t("SUBMIT YOUR WORK →", "提交作品 →")}
              </a>
            </div>
            <div className="hidden lg:block lg:col-span-5 lg:col-start-8">
              <div
                className="py-10 px-10"
                style={{ border: "1px solid #e0d9d0", backgroundColor: "#F7F4EF" }}
              >
                <p className="text-xs tracking-[0.24em] uppercase font-light mb-6" style={{ color: "#9a8f84" }}>
                  {t("CURRENT OPEN DIRECTIONS", "目前开放协作的方向")}
                </p>
                {[
                  { en: "Direction", zh: "导演" },
                  { en: "Photography / Cinematography", zh: "摄影 / 摄像" },
                  { en: "Art Direction", zh: "美术指导" },
                  { en: "Creative Strategy", zh: "创意策划" },
                  { en: "Production / Location", zh: "制片 / 场地协调" },
                ].map((role, i) => (
                  <div
                    key={i}
                    className="py-3 flex items-center gap-3"
                    style={{ borderBottom: i < 4 ? "1px solid #e0d9d0" : "none" }}
                  >
                    <span className="text-xs" style={{ color: "#c8bfb4" }}>—</span>
                    <span className="font-body text-sm font-light" style={{ color: "#3a3028" }}>
                      {lang === "en" ? role.en : role.zh}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <section
        className="py-24"
        style={{ borderTop: "1px solid #e0d9d0", backgroundColor: "#F2EFE9" }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left: heading */}
            <div className="lg:col-span-5 reveal">
              <p className="text-xs tracking-[0.24em] uppercase font-light mb-6" style={{ color: "#9a8f84" }}>
                {t("CONTACT", "联系我们")}
              </p>
              <h2
                className="font-display mb-6"
                style={{
                  fontSize: "clamp(2.4rem, 4vw, 3.6rem)",
                  color: "#1a1510",
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                  lineHeight: 1.1,
                }}
              >
                {t("Get in touch.", "联系 Lumicome")}
              </h2>
              <p className="text-sm font-light leading-relaxed mb-8" style={{ color: "#4a4038" }}>
                {t(
                  "For project enquiries, press, or collaboration, write to us directly.",
                  "项目咨询、媒体合作或其他事宜，欢迎直接来信。"
                )}
              </p>
              <a
                href="mailto:hello@atelieryf.com"
                className="text-sm font-light transition-opacity duration-300 hover:opacity-50"
                style={{ color: "#1a1510", borderBottom: "1px solid #c8bfb4", paddingBottom: "2px" }}
              >
                hello@atelieryf.com
              </a>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-6 lg:col-start-7 reveal reveal-delay-2">
              <ContactFormComponent />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────── */}
      <footer
        className="py-16"
        style={{ borderTop: "1px solid #e0d9d0", backgroundColor: "#F7F4EF" }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Brand */}
            <div>
              <img
                src="/images/lumicome-logo-dark.png"
                alt="Lumicome"
                className="mb-4 h-auto w-[170px]"
                width="887"
                height="257"
                loading="lazy"
                decoding="async"
              />
              <p className="text-xs tracking-widest uppercase font-light mb-1" style={{ color: "#9a8f84" }}>
                {t("PARIS / SHANGHAI", "巴黎 / 上海")}
              </p>
              <p className="text-xs tracking-widest uppercase font-light" style={{ color: "#b0a898" }}>
                {t("A CHINA-EUROPE CREATIVE ATELIER", "中欧创意事务所")}
              </p>
            </div>

            {/* Studios */}
            <div>
              <p className="text-xs tracking-widest uppercase font-light mb-4" style={{ color: "#9a8f84" }}>
                {t("Studios", "驻地")}
              </p>
              <ul className="space-y-2">
                <li className="text-sm font-light" style={{ color: "#3a3028" }}>Paris</li>
                <li className="text-sm font-light" style={{ color: "#3a3028" }}>Shanghai</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs tracking-widest uppercase font-light mb-4" style={{ color: "#9a8f84" }}>
                {t("Contact", "联系")}
              </p>
              <a
                href="mailto:hello@atelieryf.com"
                className="text-sm font-light transition-opacity duration-300 hover:opacity-50"
                style={{ color: "#3a3028" }}
              >
                hello@atelieryf.com
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 gap-4"
            style={{ borderTop: "1px solid #e0d9d0" }}
          >
            <p className="text-xs font-light tracking-widest" style={{ color: "#b0a898" }}>
              © 2026 LUMICOME. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-6">
              {[
                { en: "Legal", zh: "法律", href: "/legal" },
                { en: "Privacy", zh: "隐私", href: "/legal" },
                { en: "Terms", zh: "条款", href: "/legal" },
              ].map(item => (
                <a
                  key={item.en}
                  href={item.href}
                  className="text-xs font-light tracking-widest transition-opacity duration-300 hover:opacity-50"
                  style={{ color: "#b0a898" }}
                >
                  {lang === "en" ? item.en : item.zh}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
