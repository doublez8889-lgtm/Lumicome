import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

const EDITORIAL_DATA = {
  headline: {
    zh: '编辑与出版',
    en: 'The Editorial.',
  },
  intro: {
    zh: 'Lumicome 的编辑与媒体实践，连接法语主导的中法出版、中文时尚媒体与跨境品牌叙事。',
    en: 'Lumicome’s editorial and media practice, connecting French-led Franco-Chinese publishing, Chinese-language fashion media, and cross-border brand narrative.',
  },
  articles: [
    {
      vol: 'No. 01',
      date: '2026 · 01',
      tags: ['制作管理', '跨境协作'],
      tagsEn: ['Governance', 'Risk'],
      titleZh: '两种时区，一个画面',
      titleEn: 'Two Time Zones, One Frame',
      descZh: '跨境拍摄同时涉及不同的沟通习惯、决策路径与制作规范。本期讨论中欧团队共同工作时，如何设定清晰的决策权限与现场接口。',
      descEn: 'In cross-border production, what is hardest to manage is never the budget — it is the unforeseeable moments. This issue focuses on a recurring question: when two working cultures share the same set, who makes the final call?',
    },
  ],
};

const EDITORIAL_PLATFORMS = [
  {
    title: 'C33',
    tagZh: '法语主导的中法独立季刊',
    tagEn: 'French-led Franco-Chinese quarterly',
    descZh: '以法语为主要写作语言的中法独立季刊，写作于巴黎与上海之间，关注品味、品牌叙事、生活方式与文化产业的流动。Lumicome 出版物，由法国国家图书馆 Centre ISSN France 正式授予 ISSN 2981-2844。',
    descEn: 'A French-led independent Franco-Chinese quarterly written between Paris and Shanghai, observing taste, brand narratives, lifestyle, and cultural industries. A Lumicome publication, officially assigned ISSN 2981-2844 by Centre ISSN France at the BnF.',
    link: 'https://c33zine.com',
  },
  {
    title: 'ModeZine',
    tagZh: '中文时尚媒体',
    tagEn: 'Chinese-language fashion media',
    descZh: '面向中文受众的独立时尚媒体，覆盖微信公众号、微博与小红书，内容包括活动报道、人物采访与行业观察。',
    descEn: 'An independent Chinese-language fashion media title across WeChat, Weibo, and Xiaohongshu, covering events, interviews, and fashion industry analysis for Chinese audiences.',
    link: '',
  },
];

const MEDIA_CAPABILITIES = [
  {
    zh: '时装周与发布会报道',
    en: 'Fashion week and show reportage',
  },
  {
    zh: '红毯、高定与品牌活动内容',
    en: 'Red carpet, couture, and brand event coverage',
  },
  {
    zh: '人物采访、设计师专访与专题写作',
    en: 'Talent interviews, designer conversations, and feature writing',
  },
  {
    zh: '法语主刊与中文传播协作',
    en: 'French-led publishing with Chinese-language distribution',
  },
];

export default function Editorial() {
  const { lang } = useLanguage();
  const t = (en: string, zh: string) => (lang === 'zh' ? zh : en);

  useEffect(() => {
    document.title = 'Editorial — LUMICOME';
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
            {t('EDITORIAL', '编辑室')}
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
            {t(EDITORIAL_DATA.headline.en, EDITORIAL_DATA.headline.zh)}
          </h1>
          <p
            className="text-base font-light leading-relaxed max-w-2xl"
            style={{ color: '#3a3028' }}
          >
            {t(EDITORIAL_DATA.intro.en, EDITORIAL_DATA.intro.zh)}
          </p>
        </div>

        {/* ── C33 × MODEZINE ── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24"
          style={{ borderTop: '1px solid #e0d9d0' }}
        >
          <p
            className="text-xs tracking-[0.24em] uppercase font-light mt-12 mb-10"
            style={{ color: '#3a3028' }}
          >
            {t('C33 × MODEZINE', 'C33 × MODEZINE')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {EDITORIAL_PLATFORMS.map((item, idx) => (
              <div
                key={item.title}
                className={`px-4 py-8 lg:px-8 border-b border-[#e0d9d0] ${idx > 0 ? 'lg:border-l' : ''}`}
              >
                <p className="text-xs tracking-[0.20em] uppercase font-light mb-4" style={{ color: '#9a8f84' }}>
                  {t(item.tagEn, item.tagZh)}
                </p>
                <h2
                  className="font-display mb-5 leading-tight"
                  style={{
                    fontSize: 'clamp(1.6rem, 2.8vw, 2.3rem)',
                    fontWeight: 700,
                    color: '#1a1510',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {item.title}
                </h2>
                <p className="text-base font-light leading-relaxed mb-7" style={{ color: '#3a3028' }}>
                  {t(item.descEn, item.descZh)}
                </p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs tracking-[0.20em] uppercase font-light transition-opacity hover:opacity-50"
                    style={{ color: '#1a1510' }}
                  >
                    {t('Visit publication →', '前往刊物 →')}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {MEDIA_CAPABILITIES.map((item, idx) => (
              <div
                key={item.en}
                className={`px-4 py-5 md:px-5 border-b border-[#e0d9d0] md:border-b-0 ${idx % 2 === 1 ? 'md:border-l' : ''} ${idx > 0 ? 'lg:border-l' : ''}`}
              >
                <span className="text-xs tracking-[0.18em] uppercase font-light block mb-3" style={{ color: '#b0a898' }}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#3a3028' }}>
                  {t(item.en, item.zh)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ARTICLES ── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16"
          style={{ borderTop: '1px solid #e0d9d0' }}
        >
          <p
            className="text-xs tracking-[0.24em] uppercase font-light mt-12 mb-10"
            style={{ color: '#3a3028' }}
          >
            {t('ARTICLES', '文章')}
          </p>

          <div className="space-y-0">
            {EDITORIAL_DATA.articles.map((article, idx) => (
              <article
                key={idx}
                className="py-12"
                style={{ borderBottom: '1px solid #e0d9d0' }}
              >
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <span
                    className="text-xs tracking-[0.20em] uppercase font-light"
                    style={{ color: '#3a3028' }}
                  >
                    {article.vol}
                  </span>
                  <span
                    className="text-xs tracking-[0.16em] font-light"
                    style={{ color: '#3a3028' }}
                  >
                    {article.date}
                  </span>
                  <div className="flex gap-2">
                    {(lang === 'zh' ? article.tags : article.tagsEn).map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 font-light tracking-[0.10em]"
                        style={{
                          border: '1px solid #c8bfb4',
                          color: '#3a3028',
                          backgroundColor: 'transparent',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2
                  className="font-display mb-5 leading-tight"
                  style={{
                    fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                    fontWeight: 700,
                    color: '#1a1510',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {t(article.titleEn, article.titleZh)}
                </h2>

                <p
                  className="text-base font-light leading-relaxed max-w-3xl mb-8"
                  style={{ color: '#3a3028' }}
                >
                  {t(article.descEn, article.descZh)}
                </p>

                <button
                  className="text-xs tracking-[0.20em] uppercase font-light transition-opacity hover:opacity-50"
                  style={{ color: '#1a1510' }}
                >
                  {t('Read Full Article →', '阅读全文 →')}
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* ── PRESS (merged) ── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16 mt-24"
          style={{ borderTop: '1px solid #e0d9d0' }}
        >
          <p
            className="text-xs tracking-[0.24em] uppercase font-light mt-12 mb-10"
            style={{ color: '#3a3028' }}
          >
            {t('PRESS', '媒体')}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-4">
            <div>
              <h2
                className="font-display mb-5 leading-tight"
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  color: '#1a1510',
                  letterSpacing: '-0.02em',
                }}
              >
                {t('C33 Zine', 'C33 Zine')}
              </h2>
              <p
                className="text-base font-light leading-relaxed mb-8"
                style={{ color: '#3a3028' }}
              >
                {t(
                  'A French-led Franco-Chinese quarterly published from Paris, observing taste, brand narrative, lifestyle, and cultural industries between France and China.',
                  '一本从巴黎出版、以法语为主的中法独立季刊，关注法中之间的品味、品牌叙事、生活方式与文化产业。'
                )}
              </p>
              <a
                href="https://c33zine.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.20em] uppercase font-light transition-opacity hover:opacity-50"
                style={{ color: '#1a1510' }}
              >
                {t('Visit C33 Zine →', '前往 C33 Zine →')}
              </a>
            </div>

            <div>
              <h2
                className="font-display mb-5 leading-tight"
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 700,
                  color: '#1a1510',
                  letterSpacing: '-0.02em',
                }}
              >
                {t('Media Enquiries', '媒体联系')}
              </h2>
              <p
                className="text-base font-light leading-relaxed mb-8"
                style={{ color: '#3a3028' }}
              >
                {t(
                  'For press and media enquiries, please write to us directly.',
                  '如有媒体合作或报道意向，欢迎直接来信。'
                )}
              </p>
              <a
                href="mailto:hello@atelieryf.com"
                className="text-xs tracking-[0.20em] uppercase font-light transition-opacity hover:opacity-50"
                style={{ color: '#1a1510' }}
              >
                hello@atelieryf.com →
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
