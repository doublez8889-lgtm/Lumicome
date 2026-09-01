import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';
import { useLocation } from 'wouter';

const ARCHIVE_DATA = {
  headline: {
    zh: '项目档案',
    en: 'Projects.',
  },
  intro: {
    zh: '近年影像与品牌合作项目，按品牌内容、编辑影像与幕后纪实整理。',
    en: 'Recent project archive. Organised by campaign, editorial, and behind-the-scenes.',
  },
  filters: [
    { id: 'all', zh: '全部', en: 'All' },
    { id: 'campaigns', zh: '品牌内容', en: 'Campaigns' },
    { id: 'editorials', zh: '编辑影像', en: 'Editorials' },
    { id: 'bts', zh: '幕后纪实', en: 'Behind the Scenes' },
  ],
  items: [
    {
      category: 'campaigns',
      client: 'SHIATZY CHEN',
      title: { zh: '舞玉', en: 'Dance of Jade' },
      sub: { zh: '品牌短片系列', en: 'Brand film series' },
      year: '2026',
      location: { zh: '巴黎', en: 'Paris' },
      format: { zh: '三集短片', en: 'Series of three films' },
      desc: {
        zh: '',
        en: '',
      },
    },
    {
      category: 'campaigns',
      client: 'MAOGEPING',
      title: { zh: '香迹', en: 'Xiang Ji' },
      sub: { zh: '品牌香水纪录片', en: 'Perfume brand documentary' },
      year: '2026',
      location: { zh: '中国 · 法国', en: 'China · France' },
      format: { zh: '纪录片制作', en: 'Documentary production' },
      credit: { zh: '制片统筹：Kairos Zhang；法国当地执行：Xiao Zhuo', en: 'Production Lead: Kairos Zhang; France Local Production: Xiao Zhuo' },
      desc: {
        zh: '为毛戈平品牌香水项目《香迹》提供纪录片制作支持，Kairos Zhang 负责整体制片，Xiao Zhuo 负责法国当地执行。',
        en: 'Documentary production coordination for MAOGEPING perfume project Xiang Ji, with production led by Kairos Zhang and France local production handled by Xiao Zhuo.',
      },
    },
    {
      category: 'campaigns',
      client: 'Selected Work',
      title: { zh: '26 years old', en: '26 years old' },
      sub: { zh: '品牌短片', en: 'Brand film' },
      year: '2026',
      location: { zh: '西班牙 · 塞维利亚', en: 'Seville, Spain' },
      format: { zh: '短片', en: 'Short film' },
      desc: {
        zh: '围绕人物状态与空间氛围完成的品牌短片。',
        en: 'Selected moving image work.',
      },
      image: '/images/project-stills/selected-film-01.png',
      video: '/videos/selected-film-01.mp4',
      orientation: 'landscape',
    },
    {
      category: 'campaigns',
      client: 'Selected Work',
      title: { zh: '26 years old', en: '26 years old' },
      sub: { zh: '竖屏品牌短片', en: 'Brand film' },
      year: '2026',
      location: { zh: '巴黎', en: 'Paris' },
      format: { zh: '短片', en: 'Short film' },
      desc: {
        zh: '巴黎拍摄的竖屏影像，以人物、服装与城市节奏构成视觉叙事。',
        en: 'Selected moving image work.',
      },
      image: '/images/project-stills/selected-film-02.png',
      video: '/videos/selected-film-02.mp4',
      orientation: 'portrait',
    },
    {
      category: 'campaigns',
      client: 'Selected Work',
      title: { zh: '创意概念片', en: 'Creative Concept Film' },
      sub: { zh: '创意概念短片', en: 'Brand film' },
      year: '2026',
      location: { zh: '法国', en: 'France' },
      format: { zh: '短片', en: 'Short film' },
      desc: {
        zh: '以概念设定、人物动作与视觉节奏为核心的短片创作。',
        en: 'Selected moving image work.',
      },
      image: '/images/project-stills/selected-film-03.png',
      video: '/videos/selected-film-03.mp4',
      orientation: 'portrait',
    },
    {
      category: 'campaigns',
      client: 'Selected Work',
      title: { zh: '杨紫琼和 POP MART', en: 'Michelle Yeoh and POP MART' },
      sub: { zh: '品牌人物影像', en: 'Brand film' },
      year: '2026',
      location: { zh: '法国', en: 'France' },
      format: { zh: '短片', en: 'Short film' },
      desc: {
        zh: '围绕人物出镜与品牌语境完成的短片内容。',
        en: 'Selected moving image work.',
      },
      image: '/images/project-stills/selected-film-04.png',
      video: '/videos/selected-film-04.mp4',
      orientation: 'portrait',
    },
    {
      category: 'campaigns',
      client: 'CHANEL HIGH JEWELRY',
      title: { zh: '自由、勇敢与优雅，定格在黄金时刻', en: 'Freedom, Courage and Elegance' },
      sub: { zh: '高级珠宝合作影像', en: 'High jewelry collaboration film' },
      year: '2026',
      location: { zh: '法国', en: 'France' },
      format: { zh: '高级珠宝短片', en: 'High jewelry film' },
      desc: {
        zh: '与 CHANEL 高级珠宝合作的影像内容，以人物、珠宝与光线关系呈现自由、勇敢与优雅的视觉主题。',
        en: 'A film collaboration with CHANEL High Jewelry, capturing freedom, courage, and elegance through light and movement.',
      },
      image: '/images/project-stills/golden-hour-film.png',
      video: '/videos/golden-hour-film.mp4',
      orientation: 'landscape',
    },
    {
      category: 'editorials',
      client: 'DIOR / ELLE',
      title: { zh: 'DIOR Bouquet Challenge with Karry Wang', en: 'DIOR Bouquet Challenge with Karry Wang' },
      sub: { zh: '品牌媒体短片', en: 'Brand media feature' },
      year: '2026',
      location: { zh: '现场', en: 'On location' },
      format: { zh: '横屏短片', en: 'Landscape film' },
      desc: {
        zh: '围绕 DIOR 香氛与人物互动展开的媒体短片内容，以花束、色彩与细节镜头完成品牌主题表达。',
        en: 'A media feature built around DIOR fragrance and talent interaction, using bouquet details, colour, and close-up imagery to frame the brand story.',
      },
      image: '/images/project-stills/dior-bouquet-karry-wang.png',
      video: '/videos/dior-bouquet-karry-wang.mp4',
      orientation: 'landscape',
    },
    {
      category: 'editorials',
      client: 'WONDERLAND',
      title: { zh: '吉娜 Wonderland 美容封面大片', en: 'Gina Wonderland Beauty Cover' },
      sub: { zh: '美容封面影像', en: 'Beauty cover film' },
      year: '2026',
      location: { zh: '巴黎', en: 'Paris' },
      format: { zh: '横屏短片', en: 'Landscape film' },
      desc: {
        zh: '为 Wonderland 美容封面内容完成的影像短片，围绕人物状态、妆发细节与巴黎空间关系展开。',
        en: 'A moving-image piece for Wonderland beauty cover content, developed around portrait presence, beauty details, and the atmosphere of Paris.',
      },
      image: '/images/project-stills/gina-wonderland-beauty-cover.png',
      video: '/videos/gina-wonderland-beauty-cover.mp4',
      orientation: 'landscape',
    },
    {
      category: 'editorials',
      client: 'W MAGAZINE',
      title: { zh: 'Angelina Kendall：好学生与坏学生', en: 'Angelina Kendall: Good Student / Bad Student' },
      sub: { zh: '编辑影像短片', en: 'Editorial film' },
      year: '2026',
      location: { zh: '现场', en: 'On location' },
      format: { zh: '横屏短片', en: 'Landscape film' },
      desc: {
        zh: '围绕 Angelina Kendall 的人物设定与造型转换完成的编辑影像，呈现两种角色状态之间的张力。',
        en: 'An editorial film built around Angelina Kendall, styling shifts, and the tension between two character states.',
      },
      image: '/images/project-stills/w-angelina-good-bad-student.png',
      video: '/videos/w-angelina-good-bad-student.mp4',
      orientation: 'landscape',
    },
    {
      category: 'bts',
      client: 'W MAGAZINE',
      title: { zh: 'Angelina Kendall：多面缪斯的诞生', en: 'Angelina Kendall: Making of a Many-sided Muse' },
      sub: { zh: '幕后纪实影像', en: 'Behind-the-scenes film' },
      year: '2026',
      location: { zh: '现场', en: 'On location' },
      format: { zh: '横屏幕后短片', en: 'Landscape BTS film' },
      desc: {
        zh: '记录 Angelina Kendall 拍摄现场的妆发、造型与影像生成过程，作为编辑项目的幕后内容呈现。',
        en: 'Behind-the-scenes documentation of Angelina Kendall on set, following beauty, styling, and the making of the editorial image.',
      },
      image: '/images/project-stills/w-angelina-kendall-bts.png',
      video: '/videos/w-angelina-kendall-bts.mp4',
      orientation: 'landscape',
    },
    {
      category: 'editorials',
      client: 'WU XUANYI',
      title: { zh: '吴宣仪编辑影像', en: 'Wu Xuanyi Editorial Film' },
      sub: { zh: '人物编辑短片', en: 'Talent editorial film' },
      year: '2026',
      location: { zh: '巴黎', en: 'Paris' },
      format: { zh: '横屏短片', en: 'Landscape film' },
      desc: {
        zh: '围绕吴宣仪的巴黎人物拍摄完成的编辑影像，记录人物、造型与城市空间之间的关系。',
        en: 'An editorial film featuring Wu Xuanyi in Paris, framing the relationship between talent, styling, and urban space.',
      },
      image: '/images/project-stills/wu-xuanyi-editorial-film.png',
      video: '/videos/wu-xuanyi-editorial-film.mp4',
      orientation: 'landscape',
    },
    {
      category: 'campaigns',
      client: 'CANON',
      title: { zh: '工作室过程', en: 'Atelier Process' },
      sub: { zh: '品牌合作纪实影像', en: 'Brand collaboration documentary' },
      year: '2026',
      location: { zh: '工作室', en: 'Atelier' },
      format: { zh: '合作纪录片', en: 'Collaboration documentary' },
      desc: {
        zh: '与 CANON 合作的纪实内容，记录工作室中的创意研究、材料选择与视觉发展过程。',
        en: 'A documentary collaboration with CANON, recording creative research, material selection, and visual development inside the atelier.',
      },
      image: '/images/project-stills/atelier-process.jpg',
      video: '/videos/atelier-process.mp4',
      orientation: 'landscape',
    },
    {
      category: 'editorials',
      client: 'MAX MARA',
      title: { zh: '空间与光', en: 'Space and Light' },
      sub: { zh: '空间影像', en: 'Spatial moving-image study' },
      year: '2026',
      location: { zh: '现场', en: 'On location' },
      format: { zh: '竖屏短片', en: 'Portrait film' },
      desc: {
        zh: '与 MAX MARA 相关的空间影像内容，围绕景观、建筑轮廓与夜间光线展开。',
        en: 'An atmospheric study of landscape, spatial rhythm, and reflected light.',
      },
      image: '/images/project-stills/space-and-light.jpg',
      video: '/videos/space-and-light.mp4',
      orientation: 'portrait',
      aspectRatio: '367 / 459',
    },
    {
      category: 'bts',
      client: 'Lumicome',
      title: { zh: '形体研究', en: 'Form Study' },
      sub: { zh: '纪录片', en: 'Documentary' },
      year: '2026',
      location: { zh: '工作室', en: 'Atelier' },
      format: { zh: '纪录片', en: 'Documentary film' },
      desc: {
        zh: '围绕材料、结构与手工制作过程展开的纪录片，记录形体逐步生成的过程。',
        en: 'A documentary following material, structure, and handcraft as the form gradually takes shape.',
      },
      image: '/images/project-stills/form-study.jpg',
      video: '/videos/form-study.mp4',
      orientation: 'landscape',
      aspectRatio: '4 / 3',
    },
    {
      category: 'campaigns',
      client: 'HERMÈS',
      title: { zh: '装置记录', en: 'Installation Film' },
      sub: { zh: '品牌空间与细节记录', en: 'Brand space and detail documentation' },
      year: '2026',
      location: { zh: '现场', en: 'On location' },
      format: { zh: '装置纪实影像', en: 'Installation documentation' },
      desc: {
        zh: '以影像记录 Hermès 装置的空间节奏、材料细节与观看动线。',
        en: 'Moving-image documentation of an Hermès installation, its spatial rhythm, material details, and viewing sequence.',
      },
      image: '/images/project-stills/hermes-installation.jpg',
      video: '/videos/hermes-installation.mp4',
      orientation: 'landscape',
    },
    {
      category: 'editorials',
      client: 'ROGER VIVIER',
      title: { zh: '蝶影', en: 'Shadow of the Butterfly' },
      sub: { zh: '诗意影像短片', en: 'Poetic moving-image film' },
      year: '2026',
      location: { zh: '现场', en: 'On location' },
      format: { zh: '短片', en: 'Short film' },
      desc: {
        zh: 'Roger Vivier 相关影像内容，以光影、运动与虚实变化构成诗意的视觉片段。',
        en: 'A poetic moving-image work shaped by shadow, movement, and changing light.',
      },
      image: '/images/project-stills/shadow-of-the-butterfly.jpg',
      video: '/videos/shadow-of-the-butterfly.mp4',
      orientation: 'landscape',
    },
    {
      category: 'editorials',
      client: 'ROGER VIVIER',
      title: { zh: 'Roger Vivier 陈列影像', en: 'Roger Vivier Display Film' },
      sub: { zh: '产品与橱窗影像', en: 'Product and display film' },
      year: '2026',
      location: { zh: '现场', en: 'On location' },
      format: { zh: '横屏短片', en: 'Landscape film' },
      desc: {
        zh: '围绕 Roger Vivier 产品陈列与空间细节完成的短片内容，突出鞋履、包袋与展示场景的视觉关系。',
        en: 'A short film documenting Roger Vivier product display and spatial details, focusing on footwear, bags, and the visual structure of the presentation.',
      },
      image: '/images/project-stills/roger-vivier-display.png',
      video: '/videos/roger-vivier-display.mp4',
      orientation: 'landscape',
    },
    {
      category: 'campaigns',
      client: 'Printemps',
      title: { zh: '巴黎春天 · 大中华区', en: 'Printemps · Greater China' },
      sub: { zh: '大中华区艺人合作', en: 'International Marketing Department mandate' },
      year: '2026',
      location: { zh: '巴黎 · 大中华区', en: 'Paris · Greater China' },
      format: { zh: '艺人合作统筹', en: 'Talent Affairs Coordination' },
      desc: {
        zh: '参与 Printemps 大中华区艺人合作框架搭建，围绕品牌挚友、大使与代言人层级，推进华语艺人的沟通、邀约与长期合作。',
        en: 'Contributed to Printemps Greater China talent partnership framework, coordinating Chinese-language talent outreach, invitations, and long-term collaboration across friend, ambassador, and spokesperson tiers.',
      },
    },
    {
      category: 'campaigns',
      client: 'Printemps',
      title: { zh: '时装秀企划', en: 'Fashion Runway Show' },
      sub: { zh: '亚洲市场时装秀项目', en: 'Asia-targeted runway presentation' },
      year: '2025',
      location: { zh: '巴黎', en: 'Paris' },
      format: { zh: '艺人与 KOL 邀约、现场统筹', en: 'Talent & KOL coordination & on-ground execution' },
      desc: {
        zh: '参与 Printemps 面向亚洲市场的时装秀项目，负责部分 KOL 与艺人的商务沟通、邀约确认及现场到场统筹。',
        en: 'Supported Printemps runway presentation for the Asian market, handling selected KOL and talent business liaison, invitations, and on-site attendance coordination.',
      },
    },
    {
      category: 'campaigns',
      client: 'Cannes',
      title: { zh: '戛纳品牌影像', en: 'Cannes Brand Film' },
      sub: { zh: '电影节品牌内容制作', en: 'Film festival brand content production' },
      year: '2026',
      location: { zh: '戛纳', en: 'Cannes' },
      format: { zh: '多支品牌短片与时尚影像', en: 'Multiple brand films & fashion content' },
      credit: { zh: '制片统筹：Kairos Zhang；法国当地执行：Xiao Zhuo', en: 'Production Lead: Kairos Zhang; France Local Production: Xiao Zhuo' },
      desc: {
        zh: '2026 年戛纳电影节期间，在当地统筹多个品牌影像内容拍摄，覆盖创意推进、团队组织、场地与档期协调、现场执行及艺人沟通。',
        en: 'During the 2026 Cannes Film Festival, coordinated multi-brand film production locally, from creative planning, crew, locations, and scheduling to on-site execution and talent coordination.',
      },
      image: '/images/project-stills/cannes-brand-film.png',
      video: '/videos/cannes-brand-film.mp4',
    },
    {
      category: 'campaigns',
      client: 'Maison Kitsuné',
      title: { zh: '新店开幕项目', en: 'Grand Opening Event' },
      sub: { zh: '深圳新店开幕', en: 'Shenzhen flagship store opening' },
      year: '2026',
      location: { zh: '深圳', en: 'Shenzhen' },
      format: { zh: '嘉宾邀约、红毯与现场接待', en: 'Guest invitation, red carpet coordination, on-site reception' },
      desc: {
        zh: '围绕 Maison Kitsuné 深圳新店开幕提供活动传播与现场执行支持，覆盖嘉宾邀约、到场统筹、内容产出与后续复盘。',
        en: 'Provided event communication and on-ground execution support for Maison Kitsuné Shenzhen opening, covering guest invitation, attendance coordination, content output, and post-event review.',
      },
    },
  ],
};

const CLIENT_PRIORITY = new Map([
  ['DIOR / ELLE', -4],
  ['CHANEL HIGH JEWELRY', -3],
  ['HERMÈS', -2],
  ['MAX MARA', -1],
  ['ROGER VIVIER', 0],
  ['CANON', 2],
  ['WONDERLAND', 3],
  ['W MAGAZINE', 4],
  ['MAOGEPING', 5],
  ['WU XUANYI', 5.5],
  ['Printemps', 6],
  ['Maison Kitsuné', 7],
  ['SHIATZY CHEN', 8],
  ['Cannes', 9],
  ['Selected Work', 20],
  ['Lumicome', 30],
]);

const FEATURED_TITLE_PRIORITY = new Map([
  ['Michelle Yeoh and POP MART', 4],
]);

const getProjectPriority = (item: (typeof ARCHIVE_DATA.items)[number]) =>
  FEATURED_TITLE_PRIORITY.get(item.title.en) ?? CLIENT_PRIORITY.get(item.client) ?? 15;

function ProjectVideo({ src, poster }: { src: string; poster: string }) {
  return (
    <video
      src={src}
      className="h-full w-full object-contain"
      controls
      playsInline
      preload="none"
      poster={poster}
    />
  );
}

export default function Archive() {
  const { lang } = useLanguage();
  const [, navigate] = useLocation();
  const [activeFilter, setActiveFilter] = useState('all');
  const t = (en: string, zh: string) => (lang === 'zh' ? zh : en);

  useEffect(() => {
    document.title = 'Projects — Lumicome Creative Studio';
  }, []);

  const filteredEntries = ARCHIVE_DATA.items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => activeFilter === 'all' || item.category === activeFilter)
    .sort((a, b) => getProjectPriority(a.item) - getProjectPriority(b.item) || a.index - b.index);
  const landscapeEntries = filteredEntries.filter(({ item }) => item.orientation === 'landscape');
  const portraitEntries = filteredEntries.filter(({ item }) => item.orientation === 'portrait');
  const otherEntries = filteredEntries.filter(({ item }) => !item.orientation);

  const renderProjectCard = ({ item, index }: (typeof filteredEntries)[number]) => (
    <div
      key={index}
      className="group min-w-0"
    >
      {/* Image, video, or text-led collaboration slate */}
      <div
        className={`mb-6 overflow-hidden ${item.video ? '' : 'cursor-pointer'}`}
        onClick={() => {
          if (!item.video) navigate(`/project/${index}`);
        }}
        style={{
          backgroundColor: item.video ? '#111' : '#e8e3dc',
          width: '100%',
          maxWidth: item.orientation === 'portrait' ? '400px' : '560px',
          margin: '0 auto 24px',
          aspectRatio: item.orientation === 'portrait' ? '9 / 16' : '16 / 9',
        }}
      >
        {item.video ? (
          <ProjectVideo
            src={item.video}
            poster={item.image ?? ''}
          />
        ) : item.image ? (
          <img
            src={item.image}
            alt={t(item.title.en, item.title.zh)}
            className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
          />
        ) : (
          <div className="flex h-full w-full flex-col justify-between p-8" style={{ backgroundColor: '#eee8df' }}>
            <div className="text-xs font-light uppercase tracking-[0.24em]" style={{ color: '#8a7f74' }}>
              {item.client}
            </div>
            <div>
              <p className="mb-4 text-xs font-light uppercase tracking-[0.22em]" style={{ color: '#8a7f74' }}>
                {t(item.sub.en, item.sub.zh)}
              </p>
              <p
                className="font-display leading-tight"
                style={{ color: '#1a1510', fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)', fontWeight: 700 }}
              >
                {t(item.title.en, item.title.zh)}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="cursor-pointer" onClick={() => navigate(`/project/${index}`)}>
        {/* Meta */}
        <div className="flex items-center gap-4 mb-4">
        <span
          className="text-xs tracking-[0.20em] uppercase font-light"
          style={{ color: '#3a3028' }}
        >
          {item.client}
        </span>
        <span style={{ color: '#c8bfb4', fontSize: '0.6rem' }}>—</span>
        <span
          className="text-xs tracking-[0.16em] font-light"
          style={{ color: '#8a7f74' }}
        >
          {item.year}
        </span>
        </div>

        <h3
        className="font-display mb-2 leading-tight"
        style={{
          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
          fontWeight: 700,
          color: '#1a1510',
          letterSpacing: '-0.02em',
        }}
      >
        {t(item.title.en, item.title.zh)}
        </h3>

        <p
        className="text-sm font-light mb-4"
        style={{ color: '#8a7f74' }}
      >
        {t(item.sub.en, item.sub.zh)}
        </p>

        <div
        className="text-xs font-light mb-5 space-y-1"
        style={{ color: '#3a3028' }}
      >
        <p>{t('Location', '拍摄地')}: {t(item.location.en, item.location.zh)}</p>
        <p>{t('Format', '形式')}: {t(item.format.en, item.format.zh)}</p>
        {item.credit && <p>{t('Credit', '制作')}: {t(item.credit.en, item.credit.zh)}</p>}
        </div>

        <p
        className="text-sm font-light leading-relaxed mb-6"
        style={{ color: '#3a3028' }}
      >
        {t(item.desc.en, item.desc.zh)}
        </p>

        <div
        className="text-xs tracking-[0.20em] uppercase font-light transition-opacity hover:opacity-50"
        style={{ color: '#1a1510' }}
      >
        {t('View Details →', '查看详情 →')}
        </div>
      </div>
    </div>
  );

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
            {t('PROJECTS', '项目')}
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
            {t(ARCHIVE_DATA.headline.en, ARCHIVE_DATA.headline.zh)}
          </h1>
          <p
            className="text-base font-light leading-relaxed max-w-2xl"
            style={{ color: '#3a3028' }}
          >
            {t(ARCHIVE_DATA.intro.en, ARCHIVE_DATA.intro.zh)}
          </p>
        </div>

        {/* ── FILTERS ── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16"
          style={{ borderTop: '1px solid #e0d9d0' }}
        >
          <div className="flex flex-wrap gap-x-7 gap-y-3 pt-8 pb-9">
            {ARCHIVE_DATA.filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className="min-h-10 text-xs tracking-[0.20em] uppercase font-light transition-all whitespace-nowrap"
                style={{
                  color: activeFilter === filter.id ? '#1a1510' : '#8a7f74',
                  borderBottom: activeFilter === filter.id ? '1px solid #1a1510' : '1px solid transparent',
                  paddingBottom: '3px',
                }}
              >
                {t(filter.en, filter.zh)}
              </button>
            ))}
          </div>
        </div>

        {/* ── PROJECTS GRID ── */}
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          {filteredEntries.length === 0 ? (
            <div className="py-24 text-center">
              <p
                className="text-base font-light"
                style={{ color: '#3a3028' }}
              >
                {t('No projects in this category', '暂无该分类的项目')}
              </p>
            </div>
          ) : (
            <div className="space-y-24">
              {landscapeEntries.length > 0 && (
                <section>
                  <p className="mb-12 text-xs font-light uppercase tracking-[0.24em]" style={{ color: '#6b5f54' }}>
                    {t('Landscape Films', '横屏作品')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {landscapeEntries.map(renderProjectCard)}
                  </div>
                </section>
              )}

              {portraitEntries.length > 0 && (
                <section className="border-t border-[#e0d9d0] pt-12">
                  <p className="mb-12 text-xs font-light uppercase tracking-[0.24em]" style={{ color: '#6b5f54' }}>
                    {t('Portrait Films', '竖屏作品')}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
                    {portraitEntries.map(renderProjectCard)}
                  </div>
                </section>
              )}

              {otherEntries.length > 0 && (
                <section className="border-t border-[#e0d9d0] pt-12">
                  <p className="mb-12 text-xs font-light uppercase tracking-[0.24em]" style={{ color: '#6b5f54' }}>
                    {t('Projects & Collaborations', '品牌项目与合作')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {otherEntries.map(renderProjectCard)}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>

      </main>
    </div>
  );
}

export { ARCHIVE_DATA };
