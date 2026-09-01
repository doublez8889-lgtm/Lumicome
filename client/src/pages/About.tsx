import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { lang, t } = useLanguage();

  useEffect(() => {
    document.title = "About Lumicome — China-Europe Creative Atelier";
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F4EF' }}>
      <Navbar />

      <main className="pt-32 pb-32">
        {/* ── PAGE HEADER ── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-20">
          <p
            className="text-xs tracking-[0.28em] uppercase mb-6 font-light"
            style={{ color: '#6b5f54' }}
          >
            {t('ABOUT', '关于我们')}
          </p>
          <h1
            className="font-display mb-8 leading-[1.0]"
            style={{
              fontSize: 'clamp(3rem, 5.5vw, 5.2rem)',
              fontWeight: 700,
              color: '#1a1510',
              letterSpacing: '-0.03em',
            }}
          >
            {lang === 'en' ? 'About Lumicome.' : '关于 Lumicome。'}
          </h1>
        </div>

        {/* ── ORIGIN SECTION ── */}
        <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24" style={{ borderTop: '1px solid #e0d9d0', paddingTop: '3rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.28em] uppercase font-light" style={{ color: '#6b5f54' }}>
                {t('ORIGIN', '起源')}
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}
              >
                {lang === 'en'
                  ? 'Lumicome\'s creative practice began in 2016. We spent nearly a decade exploring the intersection of visual storytelling, brand narrative, and cross-cultural communication. In 2025, we formalized this into a structured team operating across Shanghai and Paris.'
                  : 'Lumicome 的创意实践始于 2016 年，工作范围逐步从时尚编辑与视觉内容延伸至品牌叙事、影像制作和跨境传播。2025 年，团队以巴黎与上海为双城工作节点，形成稳定的项目协作结构。'}              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}
              >
                {lang === 'en'
                  ? 'This journey taught us that the most compelling creative work happens not when we follow templates, but when we listen deeply to a brand\'s unique essence and translate it across cultural boundaries.'
                  : '长期的编辑与制作经验使我们形成一项基本判断：创意方案必须建立在品牌定位、传播目标与具体市场语境之上，不能以通用模板替代前期研究。'}
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO SECTION ── */}
        <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24" style={{ borderTop: '1px solid #e0d9d0', paddingTop: '3rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.28em] uppercase font-light" style={{ color: '#6b5f54' }}>
                {t('WHAT WE DO', '我们的工作')}
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}
              >
                {lang === 'en'
                  ? 'We are a hybrid creative atelier combining image production, narrative strategy, cross-border distribution, and resource integration. Rather than operating as a single-discipline studio, we orchestrate a full spectrum of capabilities to bring brands to life across multiple dimensions.'
                  : 'Lumicome 是一间结合影像制作、叙事策略、中欧传播与项目资源管理的创意事务所。团队根据项目需求组织导演、摄影、美术、制片、媒体与艺人合作等专业环节。'}
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}
              >
                {lang === 'en'
                  ? 'Every project is custom-built. We don\'t believe in one-size-fits-all solutions. Instead, we develop tailored strategies that honor each brand\'s distinct voice while ensuring international production quality.'
                  : '每个项目均从独立 Brief 开始，明确受众、预算、使用渠道、版权范围与交付规格，再据此制定创意方案和制作路径。'}
              </p>
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES MATRIX ── */}
        <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24" style={{ borderTop: '1px solid #e0d9d0', paddingTop: '3rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.28em] uppercase font-light" style={{ color: '#6b5f54' }}>
                {t('CAPABILITIES', '能力矩阵')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                en: 'International Creative Strategy',
                zh: '国际创意策略',
                descEn: 'Cross-cultural brand positioning, visual concept development, and strategic direction that bridges European and Greater China markets.',
                descZh: '围绕品牌定位、受众语境与传播目标，完成视觉概念及 Campaign 策略开发。',
              },
              {
                en: 'Media & Distribution',
                zh: '媒体与传播',
                descEn: 'Access to premium media channels across both regions. We connect creative output to the right platforms, ensuring maximum cultural resonance.',
                descZh: '根据内容属性与受众结构，配置欧洲及大中华区的编辑媒体与社交平台。',
              },
              {
                en: 'Commercial Integration',
                zh: '商务对接与资源整合',
                descEn: 'Connecting brands, talent, and platforms. We orchestrate complex partnerships that create sustainable value across multiple stakeholders.',
                descZh: '统筹品牌、艺人、创作者、媒体与平台之间的商务沟通、档期及合作条件。',
              },
              {
                en: 'Visual & Brand Narrative',
                zh: '视觉策略与品牌叙事',
                descEn: 'From concept to final visual language. We develop comprehensive visual systems that tell a brand\'s story across all touchpoints.',
                descZh: '将品牌策略转化为影像基调、叙事结构及适配不同媒介的内容系统。',
              },
            ].map((cap: any, i: number) => (
              <div
                key={i}
                className={`py-8 px-6 border-b border-[#e0d9d0] ${i % 2 === 1 ? 'md:border-l' : ''}`}
              >
                <h3
                  className="font-display mb-3"
                  style={{
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                    color: '#1a1510',
                    letterSpacing: '-0.01em',
                    fontWeight: 700,
                    lineHeight: 1.1,
                  }}
                >
                  {lang === 'en' ? cap.en : cap.zh}
                </h3>
                <p className="font-body text-sm font-light leading-relaxed" style={{ color: '#4a4038' }}>
                  {lang === 'en' ? cap.descEn : cap.descZh}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CITIES SECTION ── */}
        <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24" style={{ borderTop: '1px solid #e0d9d0', paddingTop: '3rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.28em] uppercase font-light" style={{ color: '#6b5f54' }}>
                {t('CITIES', '双城')}
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}
              >
                {lang === 'en'
                  ? 'Shanghai and Paris are not just office locations—they are the cultural anchors of our practice. Shanghai connects us to the dynamism and scale of Greater China\'s creative market. Paris grounds us in European design heritage and international production standards.'
                  : '巴黎与上海分别连接欧洲制作体系和大中华区品牌与媒体市场。双城工作机制使创意开发、属地执行与内容发布能够在同一项目框架内推进。'}
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}
              >
                {lang === 'en'
                  ? 'This dual presence allows us to operate as true cultural translators—not simply adapting content for different markets, but creating work that retains its original texture and intention across borders.'
                  : '跨市场项目并非简单复制同一版本。我们依据当地受众、媒介习惯和行业规范调整表达，同时保持品牌核心信息与视觉识别的一致性。'}
              </p>
            </div>
          </div>
        </section>

        {/* ── PHILOSOPHY SECTION ── */}
        <section className="max-w-[1200px] mx-auto px-8 lg:px-16" style={{ borderTop: '1px solid #e0d9d0', paddingTop: '3rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.28em] uppercase font-light" style={{ color: '#6b5f54' }}>
                {t('PHILOSOPHY', '方法论')}
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}
              >
                {lang === 'en'
                  ? 'We believe in deep listening over quick solutions. Every brand has a story worth telling—our role is to unearth it, refine it, and give it a visual shape that resonates across cultures.'
                  : '我们的工作方法从研究与访谈开始。通过梳理品牌资料、市场背景和传播任务，确定叙事重点，再进入视觉概念与制作方案。'}
              </p>
              <p
                className="font-body leading-relaxed"
                style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}
              >
                {lang === 'en'
                  ? 'We measure success not by immediate metrics, but by long-term value creation. The work we do today should strengthen a brand\'s position and cultural relevance for years to come.'
                  : '项目评估同时考虑创意完成度、制作质量、传播适配与资产复用价值，而不以单一平台的短期数据作为唯一标准。'}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
