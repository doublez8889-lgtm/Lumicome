/*
 * ATELIER YF — Team Page
 * Style: Cream Editorial — Typographic-first, consistent with Network page
 * Layout: Header + member rows (label left / content right), no photos
 */

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const TEAM_MEMBERS = [
  {
    id: "kairos",
    name: "Kairos Zhang",
    role: "Founder & Creative Director",
    roleZh: "创始人 / 创意总监",
    roleLabel: "01",
    bio: "Founder of Lumicome. Senior media professional with over a decade based in Paris, working across fashion editorial, creative direction, and cross-border production.",
    bioZh: "Lumicome 创始人，旅法逾十年。长期从事时尚编辑、创意方向与跨境制片工作。",
    background: "BA in Photography, China Media University. MA in Public Relations, Université de Paris. Previously fashion editor and stylist; founder of MODEZINE and C33 Zine.",
    backgroundZh: "中国传媒大学摄影专业学士，巴黎公共传媒关系研究生。曾任时尚编辑与造型师，创办 MODEZINE 与 C33 Zine。",
    recognition: "Known as a fashion voice on Weibo with a long-standing readership. Brings editorial sensibility and operational discipline into every production.",
    recognitionZh: "长期从事中文时尚内容与媒体运营，并将编辑判断、品牌沟通和制作管理结合于跨境项目。",
    expertise: ["Brand Strategy", "Creative Direction", "Fashion Styling", "Production Management", "Media Operations"],
  },
  {
    id: "dong",
    name: "Dong",
    role: "DP / Director of Photography",
    roleZh: "摄影指导",
    roleLabel: "02",
    bio: "Senior cinematographer based in Paris for 15 years. Works at the intersection of technical precision and aesthetic intuition, building imagery that holds both commercial weight and conceptual depth.",
    bioZh: "常驻法国十五年的摄影指导，主要从事时装、品牌与概念影像制作，负责摄影方案、灯光设计及现场视觉控制。",
    background: "Specializes in high-concept visual projects that carry both academic rigour and market relevance. Brings philosophical nuance to motion work without sacrificing clarity of execution.",
    backgroundZh: "长期参与高概念视觉项目，工作覆盖前期视觉研究、摄影测试、拍摄执行与后期影像衔接。",
    recognition: "Long-term collaborator on cross-border campaigns requiring both European sensibility and Chinese market understanding.",
    recognitionZh: "长期参与中欧跨境广告制作，熟悉欧洲制作环境与中文市场的品牌沟通方式。",
    expertise: ["Cinematography", "Visual Storytelling", "Conceptual Imagery", "Film Production", "Aesthetic Direction"],
  },
  {
    id: "steve",
    name: "Steve",
    role: "Senior Photographer",
    roleZh: "资深摄影师",
    roleLabel: "03",
    bio: "Senior photographer with extensive experience across commercial, documentary, and institutional production. Based in Paris, working internationally.",
    bioZh: "常驻巴黎的资深摄影师，工作范围涵盖商业广告、纪录片及机构委托项目。",
    background: "Has worked on major productions including Air China, Discovery Channel, and projects commissioned by China's Central Propaganda Department and the Bureau of Foreign Language Publications. Collaborates with fashion brands on artistic campaign imagery and with cultural institutions on documentary-level visual records.",
    backgroundZh: "曾参与中国国航、Discovery 频道及政府机构委托制作，也为时尚品牌和文化机构提供广告摄影与纪实影像。",
    recognition: "Brings the discipline of large-scale institutional production into the precision of high-fashion visual work.",
    recognitionZh: "具备大型制作流程经验，能够在商业与机构项目中执行稳定的技术和交付标准。",
    expertise: ["Campaign Photography", "Documentary Production", "Institutional Projects", "Visual Direction", "Cross-border Production"],
  },
  {
    id: "zhenyu",
    name: "Zhenyu",
    role: "Artist / Documentary Filmmaker",
    roleZh: "艺术家 / 纪录片创作者",
    roleLabel: "04",
    bio: "Artist and documentary filmmaker working across cinema and moving-image installation. His autobiographical practice focuses on overlooked landscapes and figures within China's process of social modernization.",
    bioZh: "从事电影与影像装置创作的艺术家、纪录片制作者。他的自传式作品聚焦于中国社会现代化进程中那些被遗忘的景观与人。",
    background: "Working between the positions of participant and observer, he continues to examine the complex relationship between the self and the subject being filmed.",
    backgroundZh: "在既作为参与者、又作为观察者的双重身份下，他持续探索自我与拍摄对象之间复杂的关系维度。",
    recognition: "His work brings together documentary attention, autobiographical perspective, and an inquiry into social memory.",
    recognitionZh: "他的创作结合纪录片式观看、自传性视角与对社会记忆的持续追问。",
    expertise: ["Documentary Film", "Moving-image Installation", "Autobiographical Practice", "Social Memory", "Visual Research"],
  },
  {
    id: "xiao-zhuo",
    name: "Xiao Zhuo",
    role: "France Local Producer",
    roleZh: "法国当地执行制片",
    roleLabel: "05",
    bio: "France-based local producer for branded documentaries, fashion film, and festival-based content production. Focuses on local execution, crew coordination, schedules, and on-ground logistics.",
    bioZh: "法国当地执行制片，参与品牌纪录片、时尚影像与电影节现场内容制作，负责当地执行、团队协调、档期推进与现场管理。",
    background: "Handled France-based local production for the MAOGEPING perfume documentary Xiang Ji and Cannes brand film projects, including crew, schedule, location, and on-site coordination.",
    backgroundZh: "在毛戈平品牌香水纪录片《香迹》及戛纳品牌影像项目中负责法国当地执行制片，包括团队、档期、场地与现场协调。",
    recognition: "Brings reliable local production support to projects that require brand sensitivity, precise coordination, and France-based execution.",
    recognitionZh: "熟悉法国当地团队、场地与拍摄流程，负责将项目方案转化为可执行的属地制片计划。",
    expertise: ["France Local Production", "Local Execution", "Crew Coordination", "On-site Logistics", "Festival Production"],
  },
  {
    id: "bian",
    name: "Bian",
    role: "Creative Strategist",
    roleZh: "创意策略师",
    roleLabel: "06",
    bio: "Senior creative strategist with over a decade in fashion media, specialising in full-campaign creative planning and styling.",
    bioZh: "拥有十余年时尚媒体经验的创意策略师，主要负责 Campaign 策划、编辑制作与造型方向。",
    background: "MA in Media Studies, University of Bonn. Previously at Hearst Media and CHAO Media. Co-founder of MODEZINE, responsible for editorial direction, production, and styling.",
    backgroundZh: "德国波恩大学媒体研究学硕士。曾任职于赫斯特传媒、CHAO Media。MODEZINE 联合创始人，负责编辑方向、制作与造型。",
    recognition: "Brings structural rigour to creative campaigns — from concept through to final delivery.",
    recognitionZh: "负责将品牌需求整理为创意框架，并协调概念开发、内容制作与最终交付。",
    expertise: ["Campaign Strategy", "Editorial Production", "Styling Direction", "Media Coordination", "Content Curation"],
  },
];

export default function Team() {
  const { lang, t } = useLanguage();
  useScrollReveal();

  useEffect(() => {
    document.title = "Team — Lumicome Creative Studio";
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F4EF", color: "#1a1510" }}>
      <Navbar />

      {/* ── Page Header ── */}
      <section className="pt-40 pb-16" style={{ borderBottom: "1px solid #e0d9d0" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-2">
              <p className="text-xs tracking-[0.28em] uppercase font-light mb-6 lg:mb-0" style={{ color: "#6b5f54" }}>
                {t("The Studio", "工作室")}
              </p>
            </div>
            <div className="lg:col-span-8">
              <h1
                className="font-display leading-[1.05] mb-8"
                style={{ fontSize: "clamp(3rem, 5.5vw, 5.2rem)", color: "#1a1510", letterSpacing: "-0.02em", fontWeight: 700 }}
              >
                {t("The people behind the work.", "项目背后的团队")}
              </h1>
              <p
                className="font-body leading-relaxed max-w-xl"
                style={{ fontSize: "clamp(0.9rem, 1.1vw, 1rem)", color: "#4a4038" }}
              >
                {t(
                  "A small, deliberate collective. We work at the intersection of fashion, image, and narrative — across Paris and beyond.",
                  "一支精简而专注的创意与制作团队，工作覆盖时装、影像、叙事与跨境项目执行。"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team Members ── */}
      <section className="py-0">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.id} style={{ borderBottom: "1px solid #e0d9d0" }}>
            <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
              <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-0 py-16 lg:py-20">

                {/* Left: number + role label */}
                <div className="lg:col-span-2 mb-6 lg:mb-0">
                  <p className="text-xs tracking-[0.28em] uppercase font-light" style={{ color: "#6b5f54" }}>
                    {member.roleLabel}
                  </p>
                </div>

                {/* Center: name + bio + background */}
                <div className={`${member.expertise.length || member.recognition || member.recognitionZh ? "lg:col-span-5" : "lg:col-span-8"} space-y-5 mb-10 lg:mb-0`}>
                  <div>
                    <p className="text-xs tracking-[0.22em] uppercase font-light mb-3" style={{ color: "#9a8f84" }}>
                      {lang === "en" ? member.role : member.roleZh}
                    </p>
                    <h2
                      className="font-display leading-tight mb-5"
style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#1a1510", letterSpacing: "-0.01em", fontWeight: 700 }}
                      >
                      {member.name}
                    </h2>
                  </div>
                  {(lang === "en" ? member.bio : member.bioZh) && (
                    <p className="font-body leading-relaxed" style={{ fontSize: "clamp(0.88rem, 1vw, 0.96rem)", color: "#2a2018" }}>
                      {lang === "en" ? member.bio : member.bioZh}
                    </p>
                  )}
                  {(lang === "en" ? member.background : member.backgroundZh) && (
                    <p className="font-body leading-relaxed" style={{ fontSize: "clamp(0.82rem, 0.9vw, 0.9rem)", color: "#5a4f45" }}>
                      {lang === "en" ? member.background : member.backgroundZh}
                    </p>
                  )}
                </div>

                {/* Right: expertise tags + recognition */}
                {(member.expertise.length > 0 || member.recognition || member.recognitionZh) && (
                <div className="lg:col-span-4 lg:col-start-9 space-y-8">
                  {member.expertise.length > 0 && <div>
                    <p className="text-xs tracking-[0.22em] uppercase font-light mb-4" style={{ color: "#9a8f84" }}>
                      {t("Expertise", "专业方向")}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="font-body text-[0.65rem] tracking-[0.08em] px-3 py-1.5 uppercase"
                          style={{ border: "1px solid #c8bfb4", color: "#4a4038" }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>}
                  {(lang === "en" ? member.recognition : member.recognitionZh) && <div style={{ borderTop: "1px solid #e0d9d0", paddingTop: "1.5rem" }}>
                    <p className="text-xs tracking-[0.22em] uppercase font-light mb-3" style={{ color: "#9a8f84" }}>
                      {t("Recognition", "项目经验")}
                    </p>
                    <p
                      className="font-body italic leading-relaxed"
                      style={{ fontSize: "clamp(0.8rem, 0.88vw, 0.88rem)", color: "#5a4f45" }}
                    >
                      {lang === "en" ? member.recognition : member.recognitionZh}
                    </p>
                  </div>}
                </div>
                )}

              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ── Vision ── */}
      <section className="py-20 lg:py-28" style={{ borderTop: "1px solid #e0d9d0" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-0">
            <div className="lg:col-span-2 mb-6 lg:mb-0">
              <p className="text-xs tracking-[0.28em] uppercase font-light" style={{ color: "#6b5f54" }}>
                {t("Vision", "工作方式")}
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: "#1a1510", fontWeight: 400 }}
              >
                {t(
                  "We believe the most powerful images are those that carry cultural memory — images that speak across borders without losing their origin.",
                  "我们关注影像中的文化语境：人物、空间、材料与观看方式，都会影响内容在不同市场中的被理解方式。"
                )}
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)", color: "#1a1510", fontWeight: 400 }}
              >
                {t(
                  "Lumicome exists at the intersection of two visual cultures. Our work is not translation — it is synthesis.",
                  "Lumicome 在欧洲与中文市场之间工作，通过前期研究、创意开发与属地制作，使品牌叙事适配不同传播环境。"
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Join CTA ── */}
      <section className="py-20" style={{ borderTop: "1px solid #e0d9d0", backgroundColor: "#F2EFE9" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="reveal grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
            <div className="lg:col-span-7 mb-8 lg:mb-0">
              <p className="text-xs tracking-[0.28em] uppercase font-light mb-6" style={{ color: "#6b5f54" }}>
                {t("The Network", "协作网络")}
              </p>
              <h2
                className="font-display leading-tight mb-4"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "#1a1510", letterSpacing: "-0.01em", fontWeight: 700 }}
              >
                {t("A curated roster, not an open call.", "一份经过筛选的协作名录")}
              </h2>
              <p className="font-body leading-relaxed" style={{ fontSize: "clamp(0.88rem, 1vw, 0.96rem)", color: "#4a4038", maxWidth: "480px" }}>
                {t(
                  "We do not evaluate geography, seniority, or connections. We only look at the work.",
                  "我们不以地域、资历或人脉作为单独标准，作品质量与执行方式始终优先。"
                )}
              </p>
            </div>
            <div className="lg:col-span-3 lg:col-start-10">
              <a
                href="/network"
                className="inline-block font-body text-xs tracking-[0.22em] uppercase transition-opacity duration-300 hover:opacity-50"
                style={{ color: "#1a1510", borderBottom: "1px solid #1a1510", paddingBottom: "3px" }}
              >
                {t("Submit Your Work →", "提交作品 →")}
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
