import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

const METRICS = [
  { value: '1M+', labelZh: '全平台累计', labelEn: 'All platforms' },
  { value: '890K', labelZh: '微博粉丝', labelEn: 'Weibo followers' },
  { value: '164K+', labelZh: '公众号订阅', labelEn: 'WeChat subscribers' },
  { value: '100K+', labelZh: '单篇最高阅读', labelEn: 'Top article reads' },
];

const COVERAGE = [
  {
    zh: '秀场、后台与发布会报道',
    en: 'Runway, backstage, and presentation reportage',
  },
  {
    zh: '红毯、高定与品牌活动内容',
    en: 'Red carpet, couture, and brand event coverage',
  },
  {
    zh: '人物采访、设计师专访与行业观察',
    en: 'Talent interviews, designer conversations, and industry analysis',
  },
  {
    zh: 'C33 法语主刊与 ModeZine 中文发布',
    en: 'French-led C33 publishing with Chinese distribution on ModeZine',
  },
];

const BRANDS = [
  'Louis Vuitton',
  'Hermes',
  'CHANEL',
  'DIOR',
  'Giorgio Armani',
  'CELINE',
  'Schiaparelli',
  'BVLGARI',
  'Roger Vivier',
  'Balenciaga',
  'Loewe',
  'Maison Kitsune',
  'Carven',
  'AMI Paris',
  'CANALI',
  'Shuting Qiu',
  'The Macallan',
  'Discovery',
  'Air China',
  'Tissot',
  'Urban Revivo',
  'Xiaomi',
  'OPPO',
  'HONOR',
];

export default function Press() {
  const { lang } = useLanguage();
  const t = (en: string, zh: string) => (lang === 'zh' ? zh : en);

  useEffect(() => {
    document.title = lang === 'en'
      ? 'C33 × ModeZine Media Kit — Lumicome'
      : 'C33 × ModeZine 媒体资料 — Lumicome';
  }, [lang]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F7F4EF' }}>
      <Navbar />

      <main className="pt-32 pb-32">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-20">
          <p className="text-xs tracking-[0.28em] uppercase mb-6 font-light" style={{ color: '#3a3028' }}>
            {t('PRESS / RSVP', '媒体资料 / 邀约')}
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
            C33 × ModeZine.
          </h1>
          <p className="text-base font-light leading-relaxed max-w-2xl" style={{ color: '#3a3028' }}>
            {t(
              'Two titles, one editorial view: a French-led Franco-Chinese quarterly and a Chinese-language fashion media platform edited from Paris.',
              '两本刊物，一种视角：从巴黎编辑与出版的法语主导中法独立季刊，以及面向中文受众的时尚媒体。'
            )}
          </p>
        </div>

        <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24" style={{ borderTop: '1px solid #e0d9d0' }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
            {METRICS.map((metric, idx) => (
              <div
                key={metric.value}
                className={`px-4 py-10 lg:px-8 ${idx % 2 === 1 ? 'border-l border-[#e0d9d0]' : ''} ${idx > 0 ? 'lg:border-l' : 'lg:border-l-0'}`}
              >
                <p className="font-display mb-3" style={{ fontSize: 'clamp(2rem, 3.6vw, 3.2rem)', color: '#1a1510', lineHeight: 1 }}>
                  {metric.value}
                </p>
                <p className="text-xs tracking-[0.18em] uppercase font-light" style={{ color: '#9a8f84' }}>
                  {t(metric.labelEn, metric.labelZh)}
                </p>
              </div>
            ))}
          </div>
          <p className="text-xs font-light leading-relaxed pt-4" style={{ color: '#9a8f84' }}>
            {t(
              'Public platform counters, recorded in June 2026.',
              '以上为各平台公开计数，统计于 2026 年 6 月。'
            )}
          </p>
        </section>

        <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24" style={{ borderTop: '1px solid #e0d9d0', paddingTop: '3rem' }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-3">
              <p className="text-xs tracking-[0.28em] uppercase font-light" style={{ color: '#6b5f54' }}>
                {t('ABOUT', '关于刊物')}
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="font-body leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}>
                {t(
                  'C33 is a French-led independent Franco-Chinese quarterly written between Paris and Shanghai, observing taste, brand narratives, lifestyle, and cultural industries. It is a Lumicome publication, officially assigned ISSN 2981-2844 by Centre ISSN France at the Bibliothèque nationale de France.',
                  'C33 是以法语为主要写作语言的中法独立季刊，写作于巴黎与上海之间，关注品味、品牌叙事、生活方式与文化产业。它是 Lumicome 出版物，由法国国家图书馆 Centre ISSN France 正式授予 ISSN 2981-2844。'
                )}
              </p>
              <p className="font-body leading-relaxed" style={{ fontSize: 'clamp(1rem, 1.4vw, 1.15rem)', color: '#1a1510', fontWeight: 400 }}>
                {t(
                  'ModeZine is an independent Chinese-language fashion media title across WeChat, Weibo, and Xiaohongshu, covering events, interviews, and industry analysis for Chinese audiences.',
                  'ModeZine 是面向中国受众的独立时尚媒体，覆盖微信公众号、微博与小红书，内容包括活动报道、人物采访与行业观察。'
                )}
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24" style={{ borderTop: '1px solid #e0d9d0' }}>
          <p className="text-xs tracking-[0.24em] uppercase font-light mt-12 mb-10" style={{ color: '#3a3028' }}>
            {t('COVERAGE', '报道方向')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {COVERAGE.map((item, idx) => (
              <div
                key={item.en}
                className={`px-4 py-8 md:px-7 border-b border-[#e0d9d0] ${idx < 2 ? 'md:border-t' : ''} ${idx % 2 === 1 ? 'md:border-l' : ''}`}
              >
                <span className="text-xs tracking-[0.18em] uppercase font-light block mb-4" style={{ color: '#b0a898' }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-base font-light leading-relaxed" style={{ color: '#3a3028' }}>
                  {t(item.en, item.zh)}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-[1200px] mx-auto px-8 lg:px-16" style={{ borderTop: '1px solid #e0d9d0' }}>
          <p className="text-xs tracking-[0.24em] uppercase font-light mt-12 mb-10" style={{ color: '#3a3028' }}>
            {t('BRANDS COVERED & WITHIN REACH', '已报道及可连结品牌')}
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            {BRANDS.map((brand) => (
              <span key={brand} className="font-display text-sm tracking-[0.10em] uppercase" style={{ color: '#3a3028' }}>
                {brand}
              </span>
            ))}
          </div>
          <div className="mt-16 pt-10" style={{ borderTop: '1px solid #e0d9d0' }}>
            <p className="text-xs tracking-[0.24em] uppercase font-light mb-5" style={{ color: '#9a8f84' }}>
              {t('CONTACT', '联系')}
            </p>
            <a className="font-display transition-opacity hover:opacity-60" style={{ color: '#1a1510', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }} href="mailto:contact@c33zine.com">
              contact@c33zine.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
