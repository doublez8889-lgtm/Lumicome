import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

const VISION_PARAGRAPHS = [
  {
    zh: 'Lumicome 建立面向中欧项目的创意与制作协作体系，以明确的职责划分、沟通机制和交付标准连接不同市场的专业人员。',
    en: "Lumicome's vision is to build a global creative ecosystem connecting high-end creative talents between China and Europe. We believe that collaboration across geographic and cultural boundaries produces more innovative and profound creative work.",
  },
  {
    zh: '跨境创意并非文字翻译或形式替换。我们从品牌定位、受众语境和媒介习惯出发，判断哪些内容需要保留、转译或重新组织。',
    en: 'We are committed to providing truly cross-cultural creative services for brands. Not simple translation or localization, but creating internationally competitive visual languages and narrative approaches by deeply understanding the essence of both cultures.',
  },
  {
    zh: '我们以创意文件、制作流程、版权边界和交付规格作为质量控制依据，同时保留项目所在市场的文化细节与表达习惯。',
    en: "In the digital and globalized era, we believe high-quality creative production remains the core competitive advantage for brand differentiation. Lumicome's mission is to ensure every project meets international production standards while respecting local cultural nuances.",
  },
];

export default function Vision() {
  const { lang } = useLanguage();
  const t = (en: string, zh: string) => (lang === 'zh' ? zh : en);

  useEffect(() => {
    document.title = 'Vision — LUMICOME';
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F4EF' }}>
      <Navbar />

      <main className="pt-32 pb-32">
        {/* ── PAGE HEADER ── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-20">
          <p
            className="text-xs tracking-[0.28em] uppercase mb-6 font-light"
            style={{ color: '#3a3028' }}
          >
            {t('VISION', '愿景')}
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
            {t('Vision.', '愿景。')}
          </h1>
        </div>

        {/* ── CONTENT ── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16"
          style={{ borderTop: '1px solid #e0d9d0' }}
        >
          <div className="max-w-3xl pt-12 space-y-10">
            {VISION_PARAGRAPHS.map((para, idx) => (
              <p
                key={idx}
                className="text-base font-light leading-relaxed"
                style={{ color: '#3a3028' }}
              >
                {t(para.en, para.zh)}
              </p>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
