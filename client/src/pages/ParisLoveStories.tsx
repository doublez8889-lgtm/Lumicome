/*
 * PARIS LOVE STORIES — Dedicated Brand Page
 * Style: Minimalist Elegance with Warm Tones
 * Layout: Clean, asymmetric, cream background, dark typography
 * Sections: Hero, Services, Philosophy, Audience, Process, Archive, Contact
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const HERO_BG = "/images/project-stills/golden-hour-film.png";
const ARCHIVE_1 = "/images/project-stills/gina-wonderland-beauty-cover.png";
const ARCHIVE_2 = "/images/project-stills/w-angelina-good-bad-student.png";
const CONTEXT_BG = "/images/project-stills/dior-bouquet-karry-wang.png";

export default function ParisLoveStories() {
  const { lang, t } = useLanguage();
  const zh = lang === "zh";
  useScrollReveal();

  // Re-trigger scroll reveal when language changes
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
    <div className="min-h-screen bg-[oklch(0.96_0.003_70)] text-[oklch(0.15_0.005_50)]">
      <Navbar />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO
      ───────────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col justify-end overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.96 0.003 70 / 0.1) 0%, oklch(0.96 0.003 70 / 0.2) 40%, oklch(0.96 0.003 70 / 0.4) 72%, oklch(0.96 0.003 70 / 0.6) 100%)",
          }}
        />

        {/* Hero content */}
        <div className="relative container pb-20 md:pb-28 lg:pb-36">
          <div className="max-w-2xl">
            {/* Studio label */}
            <p className="animate-hero-body font-body text-[0.65rem] tracking-[0.22em] uppercase text-[oklch(0.25_0.008_50)] mb-6 md:mb-8">
              {t("Paris, France", "法国 · 巴黎")}
            </p>

            {/* Main headline */}
            <h1
              className="animate-hero-title font-display text-[oklch(0.15_0.005_50)] leading-[0.95] mb-6 md:mb-8"
              style={{
                fontSize: "clamp(3.5rem, 9vw, 9rem)",
                letterSpacing: "-0.03em",
              }}
            >
              {t("Paris Love Stories", "巴黎爱情故事")}
            </h1>

            {/* Hairline */}
            <div className="animate-hero-sub w-12 h-px bg-[oklch(0.35_0.008_50)] mb-6 md:mb-8" />

            {/* Subheadline */}
            <h2
              className="animate-hero-sub font-body text-[oklch(0.35_0.008_50)] leading-relaxed mb-5"
              style={{ fontSize: "clamp(0.9rem, 1.6vw, 1.15rem)", fontWeight: 300 }}
            >
              {t(
                "Minimalist wedding cinematography. Refined moments. Timeless elegance.",
                "极简婚礼电影。精致时刻。永恒优雅。"
              )}
            </h2>

            {/* Body */}
            <p
              className="animate-hero-body font-body text-[oklch(0.45_0.008_50)] leading-loose"
              style={{ fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)", fontWeight: 300, maxWidth: "48ch" }}
            >
              {t(
                "We capture authentic moments between two people in Paris. No clichés. No excess. Just the quiet beauty of genuine connection.",
                "我们在巴黎捕捉两个人之间的真实时刻。没有陈词滥调。没有过度装饰。只有真挚连接的静谧之美。"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: WHAT WE OFFER
      ───────────────────────────────────────────────────────────── */}
      <section id="services" className="py-28 md:py-40 bg-[oklch(0.96_0.003_70)]">
        <div className="container">
          {/* Section header */}
          <div className="reveal mb-16 md:mb-24">
            <p className="font-body text-[0.62rem] tracking-[0.22em] uppercase text-[oklch(0.45_0.008_50)] mb-4">
              {t("Services", "服务")}
            </p>
            <h2
              className="font-display text-[oklch(0.15_0.005_50)] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              {t("What We Create", "我们的服务")}
            </h2>
          </div>

          {/* Services grid */}
          <div className="space-y-12 md:space-y-16">
            {[
              {
                num: "01",
                en_title: "Wedding Film",
                zh_title: "婚礼电影",
                en_desc: "A cinematic narrative of your wedding day. Refined editing, sophisticated grading, timeless storytelling.",
                zh_desc: "你们婚礼日的电影叙事。精致剪辑、高级调色、永恒故事线。",
                icon: "🎬",
              },
              {
                num: "02",
                en_title: "Engagement Film",
                zh_title: "订婚短片",
                en_desc: "Before the ceremony. A private love story filmed across Paris. Intimate, authentic, poetic.",
                zh_desc: "婚礼前的故事。在巴黎拍摄的私人爱情短片。亲密、真实、诗意。",
                icon: "💕",
              },
              {
                num: "03",
                en_title: "Ceremony Film",
                zh_title: "仪式开场片",
                en_desc: "A short, elegant film to open your ceremony. Minimal, impactful, sets the emotional tone.",
                zh_desc: "为你们的仪式开场的短片。极简、有力、定调情绪。",
                icon: "✨",
              },
            ].map((item, i) => (
              <div key={i} className="reveal reveal-delay-1 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                <div className="md:col-span-2">
                  <div className="flex flex-col gap-3">
                    <p className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.45_0.008_50)]">
                      {item.num}
                    </p>
                    <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
                  </div>
                </div>
                <div className="md:col-span-10">
                  <h3
                    className="font-display text-[oklch(0.15_0.005_50)] leading-tight mb-3"
                    style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                  >
                    {zh ? item.zh_title : item.en_title}
                  </h3>
                  <p
                    className="font-body text-[oklch(0.45_0.008_50)] leading-relaxed"
                    style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)", fontWeight: 300, maxWidth: "65ch" }}
                  >
                    {zh ? item.zh_desc : item.en_desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: PHILOSOPHY
      ───────────────────────────────────────────────────────────── */}
      <section id="philosophy" className="py-28 md:py-40 bg-[oklch(0.93_0.002_70)]">
        <div className="container">
          <div className="max-w-3xl">
            <div className="reveal mb-12 md:mb-16">
              <p className="font-body text-[0.62rem] tracking-[0.22em] uppercase text-[oklch(0.45_0.008_50)] mb-4">
                {t("Philosophy", "理念")}
              </p>
              <h2
                className="font-display text-[oklch(0.15_0.005_50)] leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                {t("What We Believe", "我们的信念")}
              </h2>
            </div>

            {/* Philosophy points */}
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  en: "Real chemistry matters more than perfect posing.",
                  zh: "真实的化学反应胜过完美的摆拍。",
                },
                {
                  en: "Minimalism is a choice, not a limitation.",
                  zh: "极简是选择，不是限制。",
                },
                {
                  en: "Your story deserves to be told with precision and care.",
                  zh: "你们的故事值得被认真而细腻地讲述。",
                },
                {
                  en: "What lasts is what moves you years later, not what performs well today.",
                  zh: "真正永恒的是多年后仍能打动你的东西，而非当下的热度。",
                },
              ].map((item, i) => (
                <div key={i} className="reveal reveal-delay-1">
                  <p
                    className="font-body text-[oklch(0.35_0.008_50)] leading-relaxed"
                    style={{ fontSize: "clamp(1rem, 1.8vw, 1.3rem)", fontWeight: 300 }}
                  >
                    {zh ? item.zh : item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: PROCESS
      ───────────────────────────────────────────────────────────── */}
      <section id="process" className="py-28 md:py-40 bg-[oklch(0.96_0.003_70)]">
        <div className="container">
          {/* Section header */}
          <div className="reveal mb-16 md:mb-24">
            <p className="font-body text-[0.62rem] tracking-[0.22em] uppercase text-[oklch(0.45_0.008_50)] mb-4">
              {t("Process", "流程")}
            </p>
            <h2
              className="font-display text-[oklch(0.15_0.005_50)] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              {t("How We Work", "我们的工作流程")}
            </h2>
          </div>

          {/* Process steps */}
          <div className="space-y-0">
            {[
              {
                num: "01",
                en_title: "Deep Conversation",
                zh_title: "前期沟通",
                en_desc: "Understanding your relationship, aesthetic preferences, and vision for the film.",
                zh_desc: "了解你们的关系、审美偏好和对影像的期待。",
                icon: "💬",
              },
              {
                num: "02",
                en_title: "Visual Direction",
                zh_title: "视觉定调",
                en_desc: "Defining the emotional tone, suggesting locations, light, and styling that align with your vision.",
                zh_desc: "定调情绪基调，建议符合你们风格的场景、光线和造型。",
                icon: "🎨",
              },
              {
                num: "03",
                en_title: "Authentic Capture",
                zh_title: "真实捕捉",
                en_desc: "No posing, no direction. We follow your natural rhythm and capture genuine moments.",
                zh_desc: "不摆拍，不指令。跟随你们的真实节奏，捕捉真挚时刻。",
                icon: "📹",
              },
              {
                num: "04",
                en_title: "Narrative Edit",
                zh_title: "叙事剪辑",
                en_desc: "Refined editing, sophisticated color grading, and minimal yet powerful storytelling.",
                zh_desc: "精致剪辑、高级调色、极简而有力的故事重构。",
                icon: "✂️",
              },
            ].map((item, i, arr) => (
              <div key={i} className="reveal reveal-delay-1">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pb-8 md:pb-12">
                  <div className="md:col-span-2">
                    <div className="flex flex-col gap-3">
                      <p className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.45_0.008_50)]">
                        {item.num}
                      </p>
                      <span style={{ fontSize: "1.6rem" }}>{item.icon}</span>
                    </div>
                  </div>
                  <div className="md:col-span-10">
                    <h3
                      className="font-display text-[oklch(0.15_0.005_50)] leading-tight mb-2"
                      style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                    >
                      {zh ? item.zh_title : item.en_title}
                    </h3>
                    <p
                      className="font-body text-[oklch(0.45_0.008_50)] leading-relaxed"
                      style={{ fontSize: "clamp(0.85rem, 1vw, 0.95rem)", fontWeight: 300 }}
                    >
                      {zh ? item.zh_desc : item.en_desc}
                    </p>
                  </div>
                </div>
                {/* Visual separator line */}
                {i < arr.length - 1 && (
                  <div className="mt-8 md:mt-12 flex items-center justify-center">
                    <div className="w-12 h-px bg-[oklch(0.80_0.003_70)]" />
                    <span className="mx-3 text-[oklch(0.45_0.008_50)] text-[0.7rem]">↓</span>
                    <div className="w-12 h-px bg-[oklch(0.80_0.003_70)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: SELECTED ARCHIVES
      ───────────────────────────────────────────────────────────── */}
      <section id="archive" className="py-28 md:py-40 bg-[oklch(0.93_0.002_70)]">
        <div className="container">
          {/* Section header */}
          <div className="reveal mb-16 md:mb-24">
            <p className="font-body text-[0.62rem] tracking-[0.22em] uppercase text-[oklch(0.45_0.008_50)] mb-4">
              {t("Archive", "档案")}
            </p>
            <h2
              className="font-display text-[oklch(0.15_0.005_50)] leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              {t("Selected Works", "精选作品")}
            </h2>
          </div>

          {/* Archive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                img: HERO_BG,
                en_title: "A & C / Paris",
                zh_title: "A & C / 巴黎",
                en_desc: "An intimate record of two people moving through Paris. Quiet, refined, authentic.",
                zh_desc: "两个人在巴黎的亲密记录。静谧、精致、真实。",
              },
              {
                img: ARCHIVE_1,
                en_title: "L & Y / Wedding Day",
                zh_title: "L & Y / 婚礼日",
                en_desc: "A cinematic narrative of their wedding. Emotion, light, and timeless moments.",
                zh_desc: "他们婚礼日的电影叙事。情感、光线、永恒时刻。",
              },
              {
                img: ARCHIVE_2,
                en_title: "M & J / Love Story",
                zh_title: "M & J / 爱情故事",
                en_desc: "Private moments before the ceremony. Genuine, unposed, deeply personal.",
                zh_desc: "仪式前的私人时刻。真挚、自然，也足够私人。",
              },
              {
                img: CONTEXT_BG,
                en_title: "K & S / Engagement",
                zh_title: "K & S / 订婚",
                en_desc: "An engagement film across Paris. Minimal, poetic, timeless.",
                zh_desc: "在巴黎拍摄的订婚短片。极简、诗意、永恒。",
              },
            ].map((item, i) => (
              <div key={i} className="reveal reveal-delay-1">
                <div className="overflow-hidden aspect-[3/4] bg-[oklch(0.85_0.003_70)] mb-6">
                  <img
                    src={item.img}
                    alt={item.en_title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </div>
                <div>
                  <p className="font-body text-[0.6rem] tracking-[0.18em] uppercase text-[oklch(0.45_0.008_50)] mb-2">
                    {zh ? item.zh_title : item.en_title}
                  </p>
                  <p
                    className="font-body text-[oklch(0.35_0.008_50)] leading-relaxed"
                    style={{ fontSize: "0.9rem", fontWeight: 300 }}
                  >
                    {zh ? item.zh_desc : item.en_desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: CONTACT
      ───────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-28 md:py-40 bg-[oklch(0.96_0.003_70)]">
        <div className="container">
          <div className="max-w-2xl">
            <div className="reveal mb-12 md:mb-16">
              <p className="font-body text-[0.62rem] tracking-[0.22em] uppercase text-[oklch(0.45_0.008_50)] mb-4">
                {t("Let's Connect", "联系我们")}
              </p>
              <h2
                className="font-display text-[oklch(0.15_0.005_50)] leading-tight"
                style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
              >
                {t("Ready to Tell Your Story?", "准备讲述你们的故事？")}
              </h2>
            </div>

            <div className="reveal space-y-6">
              <p
                className="font-body text-[oklch(0.45_0.008_50)] leading-relaxed"
                style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)", fontWeight: 300 }}
              >
                {t(
                  "Get in touch to discuss your wedding film. We're based in Paris and available for projects worldwide.",
                  "联系我们讨论你们的婚礼电影。我们位于巴黎，全球接单。"
                )}
              </p>
              <a
                href="mailto:hello@parislove.stories"
                className="inline-flex items-center gap-3 font-body text-[0.85rem] tracking-[0.12em] uppercase text-[oklch(0.15_0.005_50)] hover:text-[oklch(0.45_0.008_50)] transition-colors duration-300 border-b-2 border-[oklch(0.15_0.005_50)] hover:border-[oklch(0.45_0.008_50)] pb-1"
              >
                {t("hello@parislove.stories", "hello@parislove.stories")}
                <span style={{ fontSize: "0.7rem" }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOOTER
      ───────────────────────────────────────────────────────────── */}
      <footer className="py-12 md:py-16 bg-[oklch(0.93_0.002_70)] border-t border-[oklch(0.85_0.003_70)]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-[oklch(0.45_0.008_50)]">
              {t("Paris Love Stories © 2026", "巴黎爱情故事 © 2026")}
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://atelieryf.com"
                className="font-body text-[0.65rem] tracking-[0.15em] uppercase text-[oklch(0.45_0.008_50)] hover:text-[oklch(0.15_0.005_50)] transition-colors duration-300"
              >
                {t("Atelier Lumicome", "Atelier Lumicome")}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
