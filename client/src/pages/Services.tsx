import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    id: "commercial",
    en_tag: "01",
    zh_tag: "01",
    en_title: "Commercial Production",
    zh_title: "商业拍摄",
    en_desc:
      "Product visualization and packaging, advertising campaigns, corporate promotional films, fashion photography, architectural and spatial photography, short-form video integration, and sustainable photography.",
    zh_desc:
      "覆盖产品视觉、广告 Campaign、企业形象片、时尚摄影、建筑与空间摄影，以及适配社交平台的短视频内容。",
    en_items: [
      "Product Visualization & Packaging",
      "Advertising Campaigns",
      "Corporate Promotional Films",
      "Fashion Photography",
      "Architectural & Spatial Photography",
      "Short-form Video Integration",
      "Sustainable Photography",
    ],
    zh_items: [
      "产品视觉与包装影像",
      "广告 Campaign",
      "企业形象片",
      "时尚摄影",
      "建筑与空间摄影",
      "短视频内容适配",
      "可持续摄影",
    ],
  },
  {
    id: "documentary",
    en_tag: "02",
    zh_tag: "02",
    en_title: "Documentary & Film",
    zh_title: "纪录片与影像",
    en_desc:
      "Portrait documentaries, observational filmmaking, production, feature films, short films, international conference documentation, and film production.",
    zh_desc:
      "人物纪录片、观察式拍摄、专题片、短片、国际会议记录及影像制作统筹。",
    en_items: [
      "Portrait Documentaries",
      "Observational Filmmaking",
      "Feature & Short Films",
      "International Conference Documentation",
      "Film Production Coordination",
      "Narrative Short Films",
      "Micro-cinema",
    ],
    zh_items: [
      "人物纪录片",
      "观察式拍摄",
      "专题片 / 短片",
      "国际会议记录",
      "影视制作统筹",
      "叙事短片",
      "影像制作管理",
    ],
  },
  {
    id: "brand",
    en_tag: "03",
    zh_tag: "03",
    en_title: "Brand Services",
    zh_title: "品牌服务",
    en_desc:
      "Overseas commercial partnerships, mainstream media exposure, new media operations and promotion, long-term talent/KOL collaborations, China/European Fashion Week partnerships, brand event planning, and PR support.",
    zh_desc:
      "覆盖海外商务合作、媒体关系、社交平台内容运营、艺人与 KOL 合作、时装周项目、品牌活动及发布支持。",
    en_items: [
      "Overseas Commercial Partnerships",
      "Mainstream Media Exposure",
      "New Media Operations & Promotion",
      "Long-term Talent / KOL Collaborations",
      "China & European Fashion Week",
      "Brand Event Planning",
      "PR & Distribution Support",
    ],
    zh_items: [
      "海外商业合作",
      "主流媒体露出",
      "社交平台内容运营",
      "长期艺人 / KOL 合作",
      "中欧时装周合作",
      "品牌活动策划",
      "公关与发布支持",
    ],
  },
  {
    id: "media",
    en_tag: "04",
    zh_tag: "04",
    en_title: "Media Matrix",
    zh_title: "媒体与出版",
    en_desc:
      "Our editorial and media assets include C33 and ModeZine, connecting French-led Franco-Chinese publishing with Chinese-language fashion media across WeChat, Weibo, Xiaohongshu, Instagram, and independent publishing.",
    zh_desc:
      "编辑与媒体资产包括 C33 与 ModeZine，连接法语主导的中法独立出版与中文时尚媒体，覆盖微信公众号、微博、小红书、Instagram 及独立出版。",
    en_items: [
      "C33 French-led Franco-Chinese Quarterly",
      "ModeZine Chinese Fashion Media",
      "WeChat / Weibo / Xiaohongshu",
      "Instagram & Independent Publishing",
      "Fashion Week & Red Carpet Coverage",
      "Talent Interviews & Features",
      "Brand Narrative Writing",
    ],
    zh_items: [
      "C33 法语主导的中法独立季刊",
      "ModeZine 中文时尚媒体",
      "微信公众号 / 微博 / 小红书",
      "Instagram 与独立出版",
      "时装周与红毯报道",
      "人物采访与专题内容",
      "品牌文本与专题写作",
    ],
  },
];

const specials = [
  {
    en: "International multi-cultural visual presentation + brand commercial production support, customized by budget",
    zh: "跨文化视觉方案与商业拍摄，依据项目目标、媒介规格与预算配置制作体量",
  },
  {
    en: "Overseas media platform exposure + 1v1 platform building + consignment",
    zh: "海外媒体关系、品牌自有平台运营与内容发布规划",
  },
  {
    en: "Access to renowned artists and top art school emerging fashion art resources, facilitating artist-brand collaborations",
    zh: "艺术家及国际艺术院校创作者资源，支持品牌联名、内容共创与视觉项目开发",
  },
  {
    en: "Support for overseas offline events, saving brand manpower costs",
    zh: "海外线下活动的属地策划、供应商管理与现场执行",
  },
  {
    en: "Assist brands in realizing their own concepts, fulfilling PR service needs with extensive resource background",
    zh: "围绕品牌传播目标配置公关、媒体、艺人与内容制作资源",
  },
];

const capabilityPillars = [
  {
    num: "01",
    en: "Brand Strategy & Creative",
    zh: "品牌策略与创意内容",
    descEn: "Market positioning, campaign concept, and content planning built for brands crossing Europe and Greater China.",
    descZh: "从市场定位、Campaign 概念到内容规划，建立适用于欧洲与大中华区传播环境的品牌表达框架。",
  },
  {
    num: "02",
    en: "Visual Production",
    zh: "影像制作",
    descEn: "Fashion editorials, brand films, documentary content, event capture, and image production with international standards.",
    descZh: "制作时尚大片、品牌短片、纪录片与活动影像，并依照既定媒介规格完成后期与交付。",
  },
  {
    num: "03",
    en: "Creator & Talent Network",
    zh: "海外达人与艺人资源",
    descEn: "Creator, model, artist, and talent matching across France, Europe, and Asian audiences, selected by tone and audience fit.",
    descZh: "依据品牌定位、受众结构与内容形式，筛选法国、欧洲及亚洲市场的创作者、模特、艺人与人物资源。",
  },
  {
    num: "04",
    en: "On-Ground Production",
    zh: "属地制片与现场统筹",
    descEn: "From Paris to Cannes, Milan to Shanghai: outreach, schedule coordination, locations, crew, and on-site execution.",
    descZh: "在巴黎、戛纳、米兰及上海等地统筹邀约、档期、场地、制作团队与拍摄现场执行。",
  },
];

const partnerLines = [
  {
    en: "Fashion & Luxury",
    zh: "时装与奢侈品",
    names: "Louis Vuitton · CHANEL · Giorgio Armani · CELINE · Balenciaga · Loewe · BVLGARI · Roger Vivier · Maison Kitsuné",
  },
  {
    en: "Lifestyle & Commercial",
    zh: "生活方式与商业品牌",
    names: "The Macallan · Discovery · Air China · Tissot · Urban Revivo · Xiaomi · OPPO · CHANDO",
  },
  {
    en: "China & Digital",
    zh: "中国品牌与数字传播",
    names: "Bosideng · PEACEBIRD · JNBY · Belle · HONOR · Nongfu Spring · Mengniu",
  },
];

export default function Services() {
  const { lang, t } = useLanguage();
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services — Lumicome Creative Studio";
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

      {/* ─── HERO ─── */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="max-w-3xl reveal">
            <p
              className="font-body text-xs tracking-[0.28em] uppercase mb-6 font-light"
              style={{ color: "#3a3028" }}
            >
              {t("Our Services", "服务范围")}
            </p>
            <h1
              className="font-display leading-[1.0] mb-8"
              style={{
                fontSize: "clamp(3rem, 5.5vw, 5.2rem)",
                fontWeight: 700,
                color: "#1a1510",
                letterSpacing: "-0.03em",
              }}
            >
                {t("What We Offer", "服务内容")}
            </h1>
            <p
              className="font-body text-base font-light leading-relaxed max-w-2xl"
              style={{ color: "#3a3028" }}
            >
              {t(
                "From commercial production to cultural storytelling — we offer end-to-end creative services tailored to brands seeking cultural resonance.",
                "从创意开发、影像制作到媒体发布，我们为中欧两地的品牌项目提供从策划到落地的执行支持。"
              )}
            </p>
          </div>
        </div>
      </section>

      {/* ─── CORE CAPABILITIES ─── */}
      <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24">
        <div className="reveal" style={{ borderTop: "1px solid #e0d9d0", paddingTop: "3rem" }}>
          <p className="font-body text-xs tracking-[0.24em] uppercase font-light mb-10" style={{ color: "#3a3028" }}>
              {t("End-to-end capability", "核心能力")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-0">
              {capabilityPillars.map((pillar, i) => (
                <div
                  key={pillar.num}
                  className={`px-4 py-8 md:px-6 border-b border-[#e0d9d0] ${i % 2 === 1 ? "md:border-l" : ""} ${i > 0 ? "xl:border-l" : ""}`}
                >
                  <p className="font-body text-xs tracking-[0.18em] uppercase font-light mb-5" style={{ color: "#b0a898" }}>
                    {pillar.num}
                  </p>
                  <h2
                    className="font-display leading-tight mb-4"
                    style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)", color: "#1a1510", fontWeight: 700 }}
                  >
                    {t(pillar.en, pillar.zh)}
                  </h2>
                  <p
                    className="font-body text-sm font-light leading-relaxed"
                    style={{ color: "#3a3028" }}
                  >
                    {t(pillar.descEn, pillar.descZh)}
                  </p>
                </div>
              ))}
            </div>
        </div>
      </section>

      {/* ─── SERVICES LIST ─── */}
      <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24">
        <div>
          <div className="flex flex-col gap-0">
            {services.map((svc, i) => (
              <div
                key={svc.id}
                className={`reveal reveal-delay-${(i % 3) + 1} py-14 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0`}
                style={{ borderTop: "1px solid #e0d9d0" }}
              >
                {/* Left: number + title */}
                <div className="lg:col-span-4 lg:pr-12">
                  <p
                    className="font-body text-xs tracking-[0.22em] uppercase font-light mb-4"
                    style={{ color: "#b0a898" }}
                  >
                    {t(svc.en_tag, svc.zh_tag)}
                  </p>
                  <h2
                    className="font-display leading-tight mb-6"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", color: "#1a1510", fontWeight: 700 }}
                  >
                    {t(svc.en_title, svc.zh_title)}
                  </h2>
                  <p
                    className="font-body text-sm font-light leading-relaxed"
                    style={{ color: "#3a3028" }}
                  >
                    {t(svc.en_desc, svc.zh_desc)}
                  </p>
                </div>

                {/* Right: items */}
                <div className="lg:col-span-8 lg:pl-16 flex flex-col justify-center">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-0">
                    {(lang === "zh" ? svc.zh_items : svc.en_items).map((item, j) => (
                      <div
                        key={j}
                        className="py-4 flex items-center gap-3"
                        style={{ borderBottom: "1px solid #e0d9d0" }}
                      >
                        <span
                          className="w-1 h-1 rounded-full shrink-0"
                          style={{ backgroundColor: "#9a8f84" }}
                        />
                        <span
                          className="font-body font-light"
                          style={{ fontSize: "clamp(0.78rem, 1vw, 0.88rem)", color: "#3a3028" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PARTNER INDEX ─── */}
      <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24">
        <div style={{ borderTop: "1px solid #e0d9d0", paddingTop: "3rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
            <div className="lg:col-span-4 lg:pr-12 reveal">
              <p className="font-body text-xs tracking-[0.24em] uppercase font-light mb-5" style={{ color: "#3a3028" }}>
              {t("Selected references", "合作资源")}
              </p>
              <h2
                className="font-display leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1a1510", fontWeight: 700 }}
              >
                {t("Brands, media, talent.", "品牌、媒体与人物资源")}
              </h2>
            </div>
            <div className="lg:col-span-8">
              {partnerLines.map((line, i) => (
                <div
                  key={line.en}
                  className={`reveal reveal-delay-${(i % 3) + 1} py-7`}
                  style={{ borderBottom: "1px solid #e0d9d0" }}
                >
                  <p className="font-body text-xs tracking-[0.18em] uppercase font-light mb-3" style={{ color: "#b0a898" }}>
                    {t(line.en, line.zh)}
                  </p>
                  <p className="font-body font-light leading-relaxed" style={{ fontSize: "clamp(0.86rem, 1.1vw, 0.96rem)", color: "#3a3028" }}>
                    {line.names}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPECIAL OFFERINGS ─── */}
      <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24">
        <div style={{ borderTop: "1px solid #e0d9d0", paddingTop: "3rem" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0">
            <div className="lg:col-span-4 lg:pr-12 reveal">
              <p
                className="font-body text-xs tracking-[0.24em] uppercase font-light mb-5"
                style={{ color: "#3a3028" }}
              >
                {t("Special", "专项服务")}
              </p>
              <h2
                className="font-display leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "#1a1510", fontWeight: 700 }}
              >
                {t("Unique Advantages", "资源与执行方式")}
              </h2>
            </div>
            <div className="lg:col-span-8 flex flex-col gap-0">
              {specials.map((item, i) => (
                <div
                  key={i}
                  className={`reveal reveal-delay-${(i % 3) + 1} py-7 flex gap-6 items-start`}
                  style={{ borderBottom: "1px solid #e0d9d0" }}
                >
                  <span
                    className="font-body text-xs tracking-[0.15em] shrink-0 mt-1"
                    style={{ color: "#b0a898" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="font-body font-light leading-relaxed"
                    style={{ fontSize: "clamp(0.82rem, 1.1vw, 0.92rem)", color: "#3a3028" }}
                  >
                    {t(item.en, item.zh)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="py-24 md:py-32" style={{ borderTop: "1px solid #e0d9d0", backgroundColor: "#F2EFE9" }}>
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 text-center reveal">
          <p
            className="font-body text-xs tracking-[0.24em] uppercase font-light mb-6"
            style={{ color: "#6b5f54" }}
          >
            {t("Collaborate", "合作")}
          </p>
          <h2
            className="font-display leading-tight mb-8 mx-auto"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", maxWidth: "700px", color: "#1a1510", fontWeight: 700 }}
          >
            {t("Ready to discuss your project?", "与我们讨论您的项目。")}
          </h2>
          <a
            href="mailto:hello@atelieryf.com"
            className="inline-block font-body text-xs tracking-[0.22em] uppercase px-10 py-4 transition-all duration-300 hover:opacity-60"
            style={{ color: "#1a1510", border: "1px solid #1a1510" }}
          >
            {t("Get in Touch", "联系我们")}
          </a>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="py-10" style={{ borderTop: "1px solid #e0d9d0" }}>
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p
            className="font-body text-xs tracking-[0.18em] uppercase font-light"
            style={{ color: "#9a8f84" }}
          >
            © 2026 Atelier Lumicome
          </p>
          <a
            href="mailto:hello@atelieryf.com"
            className="font-body text-xs tracking-[0.18em] uppercase font-light transition-opacity hover:opacity-60"
            style={{ color: "#9a8f84" }}
          >
            hello@atelieryf.com
          </a>
        </div>
      </footer>
    </div>
  );
}
