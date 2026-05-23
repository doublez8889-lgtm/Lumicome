// content.jsx — Lumicome 4-module ecosystem
const LUMI = {
  nav: {
    items: [
      { id: 'index',        zh: '首页',     en: 'Index' },
      { id: 'archive',      zh: '视觉档案', en: 'Archive' },
      { id: 'journal',      zh: '编辑室',   en: 'Journal' },
      { id: 'collaborative',zh: '协作院',   en: 'Collaborative' },
      { id: 'protocol',     zh: '协作公约', en: 'Protocol' },
      { id: 'contact',      zh: '联系',     en: 'Contact' },
    ],
  },

  // ====== HOME ======
  home: {
    eyebrow: {
      zh: '成立于 2025 · 巴黎 / 上海',
      en: 'Established 2025 · Paris / Shanghai',
    },
    banner: {
      zh: ['中欧跨境', '创意生态平台。'],
      en: ['A China–Europe', 'creative ecosystem.'],
    },
    sub: {
      zh: '十年间,我们在国际高端品牌项目里做过的事、写下的研究,以及与品牌、与创作者一起达成的工作方式——都收拢在这里。',
      en: 'A decade of work on international premium-brand projects. What we made, what we wrote, and the way we agreed to work with brands and creators — gathered here.',
    },
    ticker: ['PARIS', 'SHANGHAI', 'MILAN', 'NEW YORK', 'TOKYO', 'LONDON', 'SEOUL'],
    stats: [
      { v: '05',  k: { zh: '执行属地',     en: 'Jurisdictions' } },
      { v: '30+', k: { zh: '服务品牌',     en: 'Brands served' } },
      { v: 'IV',  k: { zh: '创作方向',     en: 'Practice areas' } },
      { v: 'II',  k: { zh: '常驻工作室',   en: 'Studios' } },
    ],
    modules: [
      {
        id: 'archive', n: 'I',
        title:    { zh: '视觉档案',           en: 'The Archive' },
        sub:      { zh: '高定影像项目档案',   en: 'Visual project archive' },
        body:     { zh: '近年完成的国际高定项目档案——每一项附完整 crew,让每一位现场创作者都被记下来。', en: 'A recent archive of international couture projects — each with a full crew list, so every name on set is recorded.' },
      },
      {
        id: 'journal', n: 'II',
        title:    { zh: '编辑室',             en: 'The Journal' },
        sub:      { zh: '跨境项目研究与方法论', en: 'Cross-border practice & method' },
        body:     { zh: '关于国际制作流程、跨地法务合规、跨文化叙事美学的研究笔记。每月一篇。', en: 'Notes on international production process, jurisdictional compliance, and cross-cultural narrative aesthetics. Monthly.' },
      },
      {
        id: 'collaborative', n: 'III',
        title:    { zh: '协作院',             en: 'The Collaborative' },
        sub:      { zh: '面向全球的独立创作者准入', en: 'Open intake for independent creators' },
        body:     { zh: '面向全球独立华人创作者开放的协作入口——摄影、导演、美术、属地制片。', en: 'An open intake for independent Chinese creators worldwide — photographers, directors, art directors, field producers.' },
      },
      {
        id: 'protocol', n: 'IV',
        title:    { zh: '协作公约',           en: 'The Protocol' },
        sub:      { zh: '全球跨境协作公约',   en: 'Global cross-border charter' },
        body:     { zh: '我们怎么工作,明文写在这里——一份在三种语言、五个属地都成立的协作公约。', en: 'How we work, written out here — a charter that holds across three languages and five jurisdictions.' },
      },
    ],
    partners: ['SHIATZY CHEN', 'Printemps', 'Forbes Global Alliance', 'Business of Fashion', 'Numéro', 'ModeZine'],
  },

  // ====== ARCHIVE (Portfolio) ======
  archive: {
    headline: {
      zh: '视觉档案。',
      en: 'The Archive.',
    },
    intro: {
      zh: '近年项目档案。每一项均按国际项目元数据标准建档——附完整 crew list、属地团队与创作分工,公开发布。',
      en: 'Recent project archive. Each entry is documented to international project-metadata standard — published with full crew list, local team, and creative attribution.',
    },
    filters: [
      { id: 'all',         zh: '全部',     en: 'All' },
      { id: 'campaigns',   zh: '品牌广告', en: 'Campaigns' },
      { id: 'editorials',  zh: '编辑作品', en: 'Editorials' },
      { id: 'bts',         zh: '幕后',     en: 'Behind the Scenes' },
    ],
    items: [
      {
        category: 'campaigns',
        client: 'SHIATZY CHEN',
        title: { zh: '舞玉', en: 'Dance of Jade' },
        sub:   { zh: '品牌短片系列', en: 'Brand film series' },
        meta: {
          brand:    'SHIATZY CHEN',
          year:     '2025',
          location: { zh: '巴黎 · 上海', en: 'Paris · Shanghai' },
          format:   { zh: '短片系列 · 五支', en: 'Series of five films' },
          crew: [
            { role: { zh: '创意统筹', en: 'Creative Direction' }, name: 'Lumicome' },
            { role: { zh: '导演',     en: 'Director' },           name: 'NDA' },
            { role: { zh: '摄影指导', en: 'Director of Photography' }, name: 'NDA' },
            { role: { zh: '造型',     en: 'Stylist' },           name: 'NDA' },
            { role: { zh: '现场制片', en: 'Field Production' },  name: 'Lumicome Atelier' },
            { role: { zh: '后期',     en: 'Post-production' },   name: 'NDA' },
          ],
        },
        desc: {
          zh: '王陈彩霞女士 1990 年于巴黎开设第一间工作室,为法国时尚协会唯一的大中华区品牌创办人。本系列以五支短片重新整理这一精神在当下语境中的视觉表达。',
          en: 'Founded in 1990 in Paris by Madame Wang Chen Tsai-Hsia — at the time the only founder from Greater China admitted to the Chambre Syndicale. The series re-articulates that practice for the present, across five films.',
        },
        plate: { line1: 'SHIATZY CHEN', line2: 'Dance of Jade', line3: 'Paris × Shanghai', tag: '01', year: 'MMXXV' },
      },
      {
        category: 'campaigns',
        client: 'Printemps',
        title: { zh: '巴黎春天 · 大中华区', en: 'Printemps · Greater China' },
        sub:   { zh: '总部 Asian Marketing 委任', en: 'HQ Asian Marketing mandate' },
        meta: {
          brand:    'Printemps',
          year:     '2024 — ongoing',
          location: { zh: '巴黎 HQ · 大中华区', en: 'Paris HQ · Greater China' },
          format:   { zh: '艺人事务 · 跨境项目', en: 'Talent affairs · cross-border production' },
          crew: [
            { role: { zh: '战略统筹',     en: 'Strategy Lead' },         name: 'Lumicome' },
            { role: { zh: '艺人事务',     en: 'Talent Affairs' },        name: 'Lumicome × Printemps' },
            { role: { zh: '现场制片',     en: 'Field Production' },     name: 'Lumicome Atelier' },
            { role: { zh: '属地资源对接', en: 'Local Resources' },       name: 'Lumicome' },
          ],
        },
        desc: {
          zh: '为 Printemps 总部对接的高端合作品牌提供大中华区艺人合作与跨境影像项目的统筹支持。日常工作涵盖品牌策略、艺人事务、属地资源与现场制片。',
          en: 'Talent affairs and cross-border production support for Printemps\' premium brand partners across Greater China. Ongoing work covers brand strategy, talent management, local resources, and on-the-ground production.',
        },
        plate: { line1: 'PRINTEMPS', line2: 'Greater China', line3: 'Asian Marketing HQ', tag: '02', year: 'MMXXIV — ' },
      },
    ],
  },

  // ====== JOURNAL (Editorial) ======
  journal: {
    headline: {
      zh: '编辑室。',
      en: 'The Journal.',
    },
    intro: {
      zh: '一份关于跨境创意制作的独立研究专栏。每月一篇,脱敏发布。所写皆为现场反复出现的真实问题——以公开、克制、可被引用的方式说出来。',
      en: 'An independent research column on cross-border creative production. Monthly, with identifying material redacted. Each entry addresses a problem we keep encountering on set — written here in a form that is public, restrained, and citable.',
    },
    items: [
      {
        vol:   'No. 01',
        date:  { zh: '2026 · 01', en: 'January 2026' },
        tag:   { zh: '治理 · 风控', en: 'Governance · Risk' },
        title: { zh: '跨境影像制作中的不确定性管理:单点治理的力量',
                 en: 'Managing uncertainty in cross-border visual production: the power of single-point governance' },
        deck:  { zh: '基于近年法国、意大利属地拍摄的项目数据,讨论高定影像制作中临场决策与流程留痕的实务张力,提出 SPOC 与 Change Order 框架在跨境环境下的应用。',
                 en: 'Drawing on recent shoots across France and Italy, the paper examines the practical tension between on-set creative latitude and schedule discipline, and applies the SPOC + Change Order framework to the cross-border context.' },
        read:  { zh: '12 分钟', en: '12 min read' },
        status:{ zh: '已发表', en: 'Published' },
      },
      {
        vol:   'No. 02',
        date:  { zh: '2026 · 02', en: 'February 2026' },
        tag:   { zh: '法务 · 合规', en: 'Compliance' },
        title: { zh: '欧洲属地法务合规与全球品牌资产保障:从劳工法到版权移交',
                 en: 'Compliance and labour laws in European locations: safeguarding global brand assets' },
        deck:  { zh: '梳理法国属地拍摄涉及的劳动法、未成年人保护、保险、影像版权与素材移交规范,与意大利、英国对照,供跨境制片实务参考。',
                 en: 'A working overview of French labour law, minor protection, insurance, image rights, and footage handover — set against Italian and British practice, intended for cross-border production reference.' },
        read:  { zh: '15 分钟', en: '15 min read' },
        status:{ zh: '即将发表', en: 'Forthcoming' },
      },
      {
        vol:   'No. 03',
        date:  { zh: '2026 · 03', en: 'March 2026' },
        tag:   { zh: '美学 · 叙事', en: 'Aesthetics · Narrative' },
        title: { zh: '中欧高端品牌叙事的差异:跨文化语境下的视觉翻译',
                 en: 'Differences in Sino-European premium brand narrative: visual translation across cultures' },
        deck:  { zh: '以 SHIATZY CHEN「舞玉」短片系列为案例,讨论中欧高端品牌在叙事结构、视觉密度与文化引用上的差异,以及跨文化语境下「品牌精神」的可翻译性。',
                 en: 'Using the Dance of Jade series as a case, the paper examines differences in narrative structure, visual density, and cultural reference between Chinese and European premium brands — and the translatability of brand spirit across contexts.' },
        read:  { zh: '8 分钟', en: '8 min read' },
        status:{ zh: '即将发表', en: 'Forthcoming' },
      },
    ],
    sampleEssay: {
      body: {
        zh: [
          '王陈彩霞女士 1990 年在巴黎开设第一间工作室,是法国时尚协会当时唯一的大中华区品牌创办人。她生产的是中式服装,但工作方式完全在欧洲高定体系内成立。',
          '这是一个值得长期回看的样本——它指向一个被忽视的事实:跨文化叙事的成立,并非在于元素的拼贴,而在于工作方式的迁移与翻译。',
          '中国高端品牌过去二十年的国际化实践,大多停留在符号层面的精致化。两种文化间的工作方法、决策习惯、对客户的态度——这些更底层的部分,长期缺乏系统性的研究和实践。',
        ],
        en: [
          'Madame Wang Chen Tsai-Hsia opened her first Paris atelier in 1990, at the time the only founder from Greater China admitted to the Chambre Syndicale. She made Chinese clothing — but her practice was fully constituted within the European haute couture tradition.',
          'This is a sample worth revisiting at length. It points to an under-acknowledged fact: cross-cultural narrative does not arise from collage, but from the migration and translation of working methods.',
          'Most premium-brand internationalisation from China in the past two decades has remained at the level of refined surface signs. The deeper layers — working methods, decision habits, posture toward clients — have lacked systematic study and practice.',
        ],
      },
      pull: {
        zh: '跨文化叙事的核心,不在符号,而在方法。',
        en: 'The core of cross-cultural narrative lies not in signs, but in method.',
      },
    },
  },

  // ====== COLLABORATIVE (Network) ======
  collaborative: {
    headline: {
      zh: '协作院。',
      en: 'The Collaborative.',
    },
    intro: {
      zh: '一份面向全球独立华人创作者的开放名录。共同的工作标准——而非地缘、资历或人脉——是入选的唯一前提。',
      en: 'An open roster of independent Chinese creators worldwide. Shared working standards — not geography, seniority, or connections — are the sole criterion for admission.',
    },
    disciplines: [
      { n: 'I',   en: 'Direction',           cn: '导演',           bodyEn: 'Commercials, brand films, short films, documentary.', bodyZh: '广告、品牌片、短片、纪录片。' },
      { n: 'II',  en: 'Cinematography',      cn: '摄影 / 灯光',    bodyEn: 'DoP, lighting, fashion photography, editorial.',       bodyZh: '摄影指导、灯光、时尚摄影、刊物。' },
      { n: 'III', en: 'Art & Styling',       cn: '美术 / 造型',    bodyEn: 'Art direction, styling, installation, set design.',    bodyZh: '美术指导、造型、装置、置景。' },
      { n: 'IV',  en: 'Field Production',    cn: '属地制片',       bodyEn: 'On-the-ground producers in major jurisdictions.',      bodyZh: '主要属地的现场制片团队。' },
    ],
    charterAcknowledge: {
      zh: '准入申请人需阅读并承诺共同遵守《Lumicome 全球跨境协作公约》——这是协作的前提,也是对每一位创作者的尊重。',
      en: 'Applicants are required to read and undertake to observe the Lumicome Global Cross-Border Collaboration Charter — the precondition of collaboration, and a baseline of mutual respect.',
    },
    formIntro: {
      zh: '请按下述项目提交基础资料。我们将在两周内对符合协作基础的申请人作出回复。',
      en: 'Please provide the items below. We respond within two weeks to applicants meeting the basic working criteria.',
    },
    mail: 'network@atelieryf.com',
  },

  // ====== PROTOCOL (Conduct & SLA) ======
  protocol: {
    headline: {
      zh: '全球跨境协作公约。',
      en: 'The Global Cross-Border Collaboration Charter.',
    },
    intro: {
      zh: '以下为 Lumicome 在所有跨境创意项目中执行的协作框架。十节条款,涵盖筹备、执行、版权与争议解决——以国际商法的通用语言公开发布,为合作品牌、独立创作者、属地团队共同提供可预期、可对照的工作基础。',
      en: 'The following is the collaboration framework Lumicome applies to every cross-border creative project. Ten clauses, covering preparation, execution, image rights, and dispute resolution — published in standard international commercial language, as a predictable and citable basis of work for partner brands, independent creators, and field teams.',
    },
    sections: [
      {
        n: 'I',
        title: { zh: 'SPOC — 单点接口人制度', en: 'SPOC — Single Point of Contact' },
        body: { zh: '为提升沟通效能、避免多头对接造成的信息损耗,双方各指定一位项目唯一对接人(SPOC)。执行期内的策划调整、脚本变更、现场追加事项与费用确认,由双方 SPOC 之间沟通并以书面形式留痕。',
                en: 'To preserve communication clarity and avoid losses from multi-channel input, each party designates one Single Point of Contact for the project. Adjustments, script changes, on-set additions and fee confirmations during execution flow through the two SPOCs and are recorded in writing.' },
        bullets: [
          { zh: '书面留痕首选电子邮件;经双方认可的即时通讯记录可作为补充。', en: 'Email is the primary trace; agreed instant-messaging records may supplement.' },
          { zh: '任一方 SPOC 变更须提前以书面形式通知对方。',                   en: 'Any change of SPOC is notified in writing in advance.' },
          { zh: '非 SPOC 渠道传达的意见,在被对应 SPOC 正式确认前,不构成项目变更的执行依据。', en: 'Instructions arriving outside the SPOC channel do not constitute a basis for execution prior to formal SPOC confirmation.' },
        ],
      },
      {
        n: 'II',
        title: { zh: 'Change Order — 变更订单流程', en: 'Change Order — change protocol' },
        body: { zh: '执行期内的范围调整——包括新增场景、调整方案、现场追加事项——由现场制片填写《变更确认单》,经双方 SPOC 书面确认后生效。「事后补单」适用于现场紧急情形,应在当日收工前完成补填,属于流程内的正常情形。',
                en: 'Any in-flight scope change — new scenes, revised plans, on-set additions — is documented on a Change Order and takes effect upon written confirmation by both SPOCs. Same-day post-event filing applies to urgent on-set cases, completed before wrap on the same day, and is treated as a routine in-protocol occurrence.' },
        bullets: [
          { zh: '记录变更内容、对工期与供应链的影响、追加费用。', en: 'Records change content, schedule and supply-chain impact, and additional cost.' },
          { zh: '追加费用并入项目尾款一并结算。',                 en: 'Additional cost is consolidated into the final invoice.' },
        ],
      },
      {
        n: 'III',
        title: { zh: '属地合规承诺', en: 'Local Compliance Pledge' },
        body: { zh: '所有项目严格遵循执行属地的劳动法规与行业规范,包括工时安排、法定休息、未成年人保护、加班合规、保险与现场许可。对属地劳工权益、休息时间与职业尊严的尊重——本身就是对最终影像资产品质的保障。',
                en: 'Every project strictly observes the labour laws and industry standards of the jurisdiction of execution — working hours, statutory rest, minor protection, overtime, insurance, and permits. Respect for local labour, rest periods, and professional dignity is itself a guarantee of the quality of the final visual asset.' },
        bullets: [
          { zh: '工时调整须经双方 SPOC 提前确认,并依《变更订单》流程处理。', en: 'Adjustments to working hours require prior SPOC confirmation and follow the Change Order protocol.' },
          { zh: '现场作业以人员安全为最高优先级。',                            en: 'Personnel safety has the highest priority on set.' },
        ],
      },
      {
        n: 'IV',
        title: { zh: '资产移交闭环', en: 'Asset Handover Closure' },
        body: { zh: '完工后,执行方先提供带水印样片供品牌方确认;项目尾款结清后,释放高清原始素材并通过双方约定方式交付。原始素材的完整与清晰为本次移交的交付标准;成片剪辑与创意属于后期环节,不在本次资产移交范围内。',
                en: 'On completion, watermarked previews are provided for client review. Upon final payment, the high-resolution original footage is released and delivered per the agreed method. Integrity and clarity of the originals constitute the delivery standard; edited films and creative outputs sit downstream and are not within this handover.' },
        bullets: [
          { zh: '《资产移交确认单》经双方签署后,视为本项目交付完成。', en: 'A signed Asset Handover Confirmation closes project delivery.' },
        ],
      },
      {
        n: 'V',
        title: { zh: '保密义务', en: 'Confidentiality' },
        body: { zh: '项目筹备、执行与后期全程涉及的品牌创意资料、未公开影像、商业策略与第三方信息,均属保密范围。Lumicome、各属地创作者与现场协作者就所接触的非公开材料承担同等保密义务,直至该等材料经品牌方书面授权公开。',
                en: 'All brand creative materials, unreleased imagery, commercial strategy and third-party information encountered during preparation, execution and post-production are confidential. Lumicome, local creators and on-set collaborators bear equal obligations of confidentiality until such materials are publicly released with the brand\'s written authorisation.' },
        bullets: [
          { zh: '保密义务在项目结束后继续存续 · 一般为五年。',                en: 'Confidentiality obligations survive project completion · typically for five years.' },
          { zh: '不得在个人作品集中公开未释放素材,样片须经品牌方书面同意。',  en: 'Unreleased material may not appear in personal portfolios; preview footage requires written brand consent.' },
        ],
      },
      {
        n: 'VI',
        title: { zh: '付款与跨境结算', en: 'Payment & Cross-border Settlement' },
        body: { zh: '项目以欧元或人民币结算,以双方在《项目服务说明》中确认的币种与节点为准。一般执行节点为:签署后定金、阶段性款项、资产移交前尾款。跨境汇款产生的银行费用、汇率差额及对应税务责任,由付款方承担,除非另有书面约定。',
                en: 'Projects are settled in EUR or RMB, per the currency and milestones agreed in the Project Service Statement. Standard milestones are: deposit on signature, interim instalments, and balance prior to asset handover. Cross-border banking fees, FX differentials and the corresponding tax obligations are borne by the remitting party, unless otherwise agreed in writing.' },
        bullets: [
          { zh: '逾期付款超过 15 个工作日 · Lumicome 有权暂停执行直至款项到账。', en: 'Payments delayed beyond 15 business days · Lumicome may suspend execution until receipt.' },
          { zh: '增值税(VAT)与发票形式按欧盟与中国大陆现行税法处理。',           en: 'VAT and invoicing follow current EU and PRC tax law.' },
        ],
      },
      {
        n: 'VII',
        title: { zh: '保险与责任划分', en: 'Insurance & Liability Allocation' },
        body: { zh: 'Lumicome 为承接的每一个跨境项目购买相应的制作责任险、设备险与第三方公众责任险。属地法规要求的其他强制保险——含艺人健康险、未成年人保护险、特殊场景险——由现场制片在筹备阶段完成投保。各方仅就自身行为造成的损失承担直接责任,间接损失与利润损失不在赔偿范围内。',
                en: 'Lumicome carries production liability, equipment, and third-party public liability insurance for every cross-border project undertaken. Any additional mandatory cover required by local regulation — talent health, minor protection, special-scene coverage — is arranged by the field producer during preparation. Each party is liable only for direct losses caused by its own acts; indirect or profit losses fall outside the scope of indemnification.' },
        bullets: [
          { zh: '保单凭证可应品牌方书面要求提供。', en: 'Certificates of insurance are available on written request from the brand.' },
        ],
      },
      {
        n: 'VIII',
        title: { zh: '不可抗力', en: 'Force Majeure' },
        body: { zh: '签证拒签或延误、属地罢工与公共安全事件、自然灾害、流行病疫情、突发性出入境限制——遇此类无法预见、无法避免、无法克服的情形,双方在书面通知后协商调整工期、属地或形式,不视为违约。若情形持续超过 30 日,任一方有权终止项目,并就已完成工作部分按比例结算。',
                en: 'Visa refusals or delays, jurisdictional strikes and public-safety events, natural disasters, pandemics, sudden travel restrictions — in such events, unforeseeable, unavoidable and insurmountable, the parties will renegotiate schedule, jurisdiction or format in writing, without breach. Should the situation persist beyond 30 days, either party may terminate the project, with completed work settled pro-rata.' },
        bullets: [
          { zh: '签证、出入境与防疫合规由属地团队提前评估,纳入筹备阶段。', en: 'Visa, entry/exit and public-health compliance are pre-assessed by local teams during preparation.' },
        ],
      },
      {
        n: 'IX',
        title: { zh: '影像版权与使用范围', en: 'Image Rights & Usage' },
        body: { zh: '项目尾款结清并完成资产移交后,品牌方依《项目服务说明》中约定的范围获得影像使用权——含地域、媒介、年限。超出原约定范围的使用(含未约定地域、媒介、二次创作、再剪辑、再授权),需另行书面授权,并按行业惯例补付相应费用。Lumicome 与现场创作者保留作品署名权与作品集展示权(在公开后)。',
                en: 'On settlement of the final invoice and completion of asset handover, the brand acquires usage rights to the imagery as defined in the Project Service Statement — including territory, media and term. Use beyond the agreed scope (additional territories, media, derivative works, re-edits, re-licensing) requires separate written authorisation and a corresponding industry-standard fee. Lumicome and on-set creators retain the right of attribution and the right to display in their portfolios upon public release.' },
        bullets: [
          { zh: '默认授权范围 · 全球品牌官方渠道,2 年。超出部分另议。',         en: 'Default scope · brand\'s global official channels, 2 years. Beyond this, by separate agreement.' },
          { zh: '现场创作者作品集使用 · 公开后 30 日,Lumicome 协助协调。',     en: 'Creator portfolio use · permitted 30 days after public release, with Lumicome\'s coordination.' },
        ],
      },
      {
        n: 'X',
        title: { zh: '争议解决与适用法律', en: 'Dispute Resolution & Governing Law' },
        body: { zh: '本公约及由其衍生的具体合同,适用法国法律。双方就项目执行产生的争议,首先通过双方 SPOC 协商解决;协商不成的,提交巴黎国际商会仲裁院(ICC · Paris)依其规则进行仲裁,仲裁语言为英语,仲裁裁决为终局并对双方有约束力。',
                en: 'This Charter and any contract derived from it are governed by French law. Disputes arising from project execution shall first be resolved by the two SPOCs in good-faith consultation. Failing resolution, the dispute shall be submitted to the ICC International Court of Arbitration (Paris) for arbitration under its rules; the language of arbitration shall be English; the award shall be final and binding on both parties.' },
        bullets: [
          { zh: '双方可在《项目服务说明》中另行约定上海仲裁委员会(SHIAC)作为替代仲裁机构。', en: 'The parties may alternatively designate the Shanghai International Arbitration Centre (SHIAC) in the Project Service Statement.' },
        ],
      },
    ],
    footnote: {
      zh: '本公约的具体法律效力以双方正式合同为准。建议合作方在签署前由熟悉相关法域商法的法律顾问审阅。',
      en: 'The binding legal effect of this Charter is determined by the parties\' formal contract. Counterparties are advised to have it reviewed by counsel familiar with the relevant jurisdiction prior to signature.',
    },
  },

  // ====== VISION (founder letter — accessible from footer) ======
  vision: {
    eyebrow: { zh: '愿景 · 创始人手记', en: 'Vision · A note from the founder' },
    headline: {
      zh: '我们想做的,不是一家工作室。',
      en: 'What we are building is not a studio.',
    },
    body: {
      zh: [
        '过去十年,我在巴黎和上海之间走。我看到欧洲品牌进入中国时,把品牌叙事交给了不理解他们的代理商;也看到中国品牌走向欧洲时,被本地 PR 公司讲成了「另一个东方风情」。',
        '中间真正缺少的,从来不是渠道、不是预算——是一种角色:能同时读懂两种文化的创作者。',
        '更进一步说——这种角色无法靠一个人完成。需要一个生态:有摄影师、有导演、有美术、有属地制片;每个人都在自己的文化里长期生活、严肃创作;并且——共同遵循一套尊重彼此的工作方式。',
        'Lumicome 想做的就是这件事。',
        '我们以巴黎与上海为两端,以国际行业标准为骨架,把分散在全球的华人创作者组织起来。我们用 Archive 公开作品、用 Journal 公开方法、用 Protocol 公开承诺——这三件事加在一起,就是「身份」。',
        '我们相信,在中欧高端品牌走向相互理解的这十年里,这样一个生态是必需的。我们不是在做一门好生意,我们是在补一个行业空缺。',
      ],
      en: [
        'Over the past decade I have been walking between Paris and Shanghai. I watched European brands hand their narrative over to Chinese agencies that did not understand them. I watched Chinese brands go to Paris and be reduced by local PR to "another oriental story."',
        'What is missing between the two markets has never been channels, never been budget. What is missing is a role — someone who can read both cultures at once.',
        'And more than that: no single person can carry the role. It takes an ecosystem. Photographers, directors, art directors, field producers — each living seriously in their own culture, each making serious work, and all operating under a shared, mutually respectful way of working.',
        'That is what Lumicome is.',
        'We hold Paris and Shanghai as our two ends. We use international industry standards as the spine. And we organise scattered Chinese creators worldwide into something they can rely on. We publish our work as Archive, our method as Journal, our commitments as Protocol — together, these are identity.',
        'In the decade ahead, as premium brands in China and Europe move toward each other, an ecosystem of this kind will be necessary. We are not building a profitable business. We are filling a gap in the industry.',
      ],
    },
    sign: {
      zh: 'Lumicome 创始团队 · 2026',
      en: 'The Lumicome founding team · 2026',
    },
    pillars: [
      { k: { zh: '问题',     en: 'Problem' }, v: { zh: '中欧两端缺少一种「跨文化创作者」角色,品牌叙事在迁移中持续失真。', en: 'A missing cross-cultural-creator role between China and Europe; premium brand narratives degrade in transit.' } },
      { k: { zh: '机会',     en: 'Opportunity' }, v: { zh: '中欧高端品牌相互进入的十年,以及全球华人创作者的觉醒——两条曲线交汇。', en: 'A decade of premium-brand exchange between China and Europe, meeting the rise of Chinese creators globally.' } },
      { k: { zh: '我们的位置', en: 'Our position' }, v: { zh: '不做代理、不做单点服务——做平台:档案 / 编辑室 / 协作院 / 公约。', en: 'Neither agency nor single-service vendor. A platform: Archive / Journal / Collaborative / Protocol.' } },
      { k: { zh: '量化目标',   en: 'Three-year goal' }, v: { zh: '建立 50+ 高端品牌项目档案、200+ 创作者协作名录、跨 5 个执行属地的标准化协作能力。', en: '50+ premium project archive, 200+ creators in the roster, standardised execution across 5 jurisdictions.' } },
    ],
    ctaPress: { zh: 'Press · 媒体报道',          en: 'Press & Recognition' },
    ctaInvest:{ zh: '投资人 · 索取 Brief',       en: 'For investors · request brief' },
  },

  // ====== PRESS / RECOGNITION ======
  press: {
    eyebrow: { zh: '媒体与背书', en: 'Press & Recognition' },
    headline: {
      zh: '这几年,被人这样写过。',
      en: 'A few things people have written about us.',
    },
    intro: {
      zh: '我们不太花精力做公关,但有些时刻还是被人记住了——下面这几条,放在这里供你参考。',
      en: 'We do not spend much energy on press. But a few moments got noticed anyway — the ones below, for context.',
    },
    items: [
      {
        src: 'Forbes Global Alliance',
        date: { zh: '2025 · 入选',  en: '2025 · Inducted' },
        kind: { zh: '成员入选',     en: 'Member induction' },
        quote: { zh: '在中欧之间持续输出原创战略视角的少数声音之一。', en: 'One of few sustained voices contributing original strategic perspective between China and Europe.' },
        link: null,
      },
      {
        src: 'Business of Fashion',
        date: { zh: '伦敦总部 · 受访',   en: 'London HQ · interview' },
        kind: { zh: '专访',              en: 'Feature interview' },
        quote: { zh: '一种新的角色——能同时读懂两种文化的创作者。', en: 'A new kind of role — a maker who can read both cultures at once.' },
        link: null,
      },
      {
        src: 'Numéro',
        date: { zh: '巴黎 · 撰稿',     en: 'Paris · Contribution' },
        kind: { zh: '撰稿',            en: 'Contribution' },
        quote: { zh: '把一个品牌的精神,从一种文化里取出来,放到另一种文化里——让它在那里依然成立。', en: 'To take a brand\'s spirit out of one culture and place it into another — and have it still stand.' },
        link: null,
      },
      {
        src: 'Chambre Syndicale de la Haute Couture',
        date: { zh: '历史性合作',    en: 'Historic collaboration' },
        kind: { zh: '品牌伙伴',      en: 'Brand partnership' },
        quote: { zh: '与法国时尚协会唯一大中华区品牌创办人合作,完成「舞玉」短片系列。', en: 'Collaboration with the only Chambre Syndicale founder from Greater China on the Dance of Jade film series.' },
        link: null,
      },
      {
        src: 'Printemps Greater China',
        date: { zh: '2024 — 持续',   en: '2024 — ongoing' },
        kind: { zh: '总部委任',      en: 'HQ mandate' },
        quote: { zh: '由 Printemps 总部 Asian Marketing 委任,统筹大中华区艺人事务与跨境项目。', en: 'Mandated by Printemps HQ Asian Marketing to coordinate talent affairs and cross-border production across Greater China.' },
        link: null,
      },
    ],
    inquiriesTitle: { zh: '媒体与投资人垂询', en: 'Press & investor enquiries' },
    inquiriesBody: {
      zh: '欢迎媒体记者、行业研究者与投资人来信。我们提供一份 1 页 Investor Brief 与一份完整品牌资料包(脱敏版),来信请说明用途与所属机构。',
      en: 'Journalists, industry researchers, and investors are welcome to write. A one-page investor brief and a redacted brand pack are available — please indicate use and affiliation.',
    },
    inquiryMail: 'press@atelieryf.com',
  },

  // ====== NEWSLETTER ======
  newsletter: {
    eyebrow: { zh: 'Field Notes · 每两周一封', en: 'Field Notes · fortnightly' },
    headline: {
      zh: '我们写的,你会先看到。',
      en: 'Read it before anyone else.',
    },
    body: {
      zh: '每两周一封 Field Notes。涵盖跨境制作流程、属地法务合规、跨文化叙事方法论的研究观察。短篇,可被引用,无营销内容。',
      en: 'A fortnightly Field Notes — research and observation on cross-border production process, jurisdictional compliance, and cross-cultural narrative method. Brief. Citable. No marketing.',
    },
    placeholder: { zh: '邮箱地址', en: 'name@studio.com' },
    cta: { zh: '订阅',   en: 'Subscribe' },
    thanks: {
      zh: '已收到。第一封将在两周内送达。',
      en: 'Received. Your first issue will arrive within two weeks.',
    },
  },

  // ====== TEAM ======
  team: {
    eyebrow: { zh: '团队', en: 'The Team' },
    headline: {
      zh: '一个由跨文化创作者组成的团队。',
      en: 'A team of cross-cultural practitioners.',
    },
    intro: {
      zh: 'Lumicome 由长期在巴黎与上海工作、跨语言协作的创作者组成。我们相信,跨文化项目的最终质量,来自于团队成员各自在两个文化里的真实经历——而非仅靠流程。',
      en: 'Lumicome is built by practitioners with long working experience between Paris and Shanghai. We believe the ultimate quality of a cross-cultural project comes from real lived experience in both cultures, not protocol alone.',
    },
    members: [
      {
        role:  { zh: '创始人 · 创意总监',         en: 'Founder & Creative Director' },
        name:  { zh: 'Kairos',                     en: 'Kairos' },
        based: { zh: '常驻巴黎 · 十余年',          en: 'Based in Paris · over a decade' },
        bio:   {
          zh: '资深媒体人、时装编辑、造型师、艺术指导与制作总监。中国传媒大学摄影学士,巴黎大学公共关系硕士。微博知名时尚博主与意见领袖,MODEZINE 创办人。',
          en: 'Senior media professional · fashion editor · stylist · art director · production director. BA in Photography, Communication University of China; MA in Public Relations, University of Paris. Renowned fashion blogger and opinion leader on Weibo; founder of MODEZINE.',
        },
        expertise: {
          zh: ['品牌战略', '创意指导', '时装造型', '制作管理', '媒体运营'],
          en: ['Brand Strategy', 'Creative Direction', 'Fashion Styling', 'Production Management', 'Media Operations'],
        },
        plate: { line1: 'KAIROS', line2: 'Founder', line3: 'Paris', tag: '01' },
      },
      {
        role:  { zh: '联合创始人 · 创意策略总监', en: 'Co-founder & Creative Strategist' },
        name:  { zh: 'Bian',                       en: 'Bian' },
        based: { zh: '常驻上海',                   en: 'Based in Shanghai' },
        bio:   {
          zh: '资深时装行业从业者,创意总监,综合 campaign 策略与造型总监。德国波恩大学媒介学硕士。逾十年时装媒体行业经验,曾任职于 Hearst Media 与 CHAO Media。MODEZINE 联合创办人,负责编辑、制作与造型。',
          en: 'Senior fashion industry professional · creative director · comprehensive campaign strategist · styling director. MA in Media Studies, University of Bonn (Germany). Over a decade in the fashion media industry; previously at Hearst Media and CHAO Media. Co-founder of MODEZINE — editorial, production, styling.',
        },
        expertise: {
          zh: ['Campaign 策略', '编辑制作', '造型指导', '媒体协同', '内容策展'],
          en: ['Campaign Strategy', 'Editorial Production', 'Styling Direction', 'Media Coordination', 'Content Curation'],
        },
        plate: { line1: 'BIAN', line2: 'Co-founder', line3: 'Shanghai', tag: '02' },
      },
      {
        role:  { zh: '资深摄影指导',         en: 'Senior Cinematographer' },
        name:  { zh: 'Dong',                  en: 'Dong' },
        based: { zh: '常驻巴黎 · 15 年',      en: 'Based in Paris · 15 years' },
        bio:   {
          zh: '资深摄影师,以镜头为棱镜,解构时空的诗意。擅长将理性的技术逻辑与感性的美学直觉融入动态影像,把哲思放进每秒 24 帧。专注高概念、兼具学术价值与市场影响力的视觉项目。',
          en: 'Senior photographer using the lens as a prism to deconstruct the poetry of time and space. Specialises in infusing rational technical logic with sensual aesthetic intuition into dynamic imagery — placing philosophical nuance into every 24 frames per second. High-concept visual projects with academic value and market impact.',
        },
        expertise: {
          zh: ['摄影', '视觉叙事', '概念影像', '影片制作', '美学指导'],
          en: ['Cinematography', 'Visual Storytelling', 'Conceptual Imagery', 'Film Production', 'Aesthetic Direction'],
        },
        plate: { line1: 'DONG', line2: 'Cinematographer', line3: 'Paris · 15 yrs', tag: '03' },
      },
      {
        role:  { zh: '视觉艺术家 · 摄影师',   en: 'Visual Artist & Photographer' },
        name:  { zh: 'Steve',                  en: 'Steve' },
        based: { zh: '常驻巴黎',               en: 'Based in Paris' },
        bio:   {
          zh: '常驻巴黎的视觉创作者与新锐摄影师。求学期间深耕视觉艺术与欧洲先锋视觉语言。为时装品牌创作艺术性 campaign 影像,协助文化机构完成纪录级的视觉记录;同时与先锋艺术家合作实验性多媒体作品。在商业与艺术性视觉创作之间搭桥。',
          en: 'Visual creator and emerging photographer based in Paris. Deeply engaged with visual arts and European avant-garde visual language during studies. Creates artistic campaign imagery for fashion brands and assists cultural institutions in producing documentary-level visual records; collaborates with avant-garde artists on experimental multimedia work. Bridges commercial and artistic visual creation.',
        },
        expertise: {
          zh: ['Campaign 摄影', '艺术指导', '纪录影像', '多媒体艺术', '文化项目'],
          en: ['Campaign Photography', 'Artistic Direction', 'Documentary Imagery', 'Multimedia Art', 'Cultural Projects'],
        },
        plate: { line1: 'STEVE', line2: 'Visual Artist', line3: 'Paris', tag: '04' },
      },
    ],
    advisors: {
      title: { zh: '机构与顾问', en: 'Affiliations & Advisors' },
      items: [
        { k: 'Forbes Global Alliance',                       v: { zh: '成员',           en: 'Member' } },
        { k: 'Printemps Greater China',                      v: { zh: '艺人事务委任',   en: 'Talent affairs mandate' } },
        { k: 'Chambre Syndicale de la Haute Couture',        v: { zh: '品牌合作伙伴',   en: 'Brand collaboration' } },
        { k: 'ModeZine',                                     v: { zh: '联合创办',       en: 'Co-founded' } },
      ],
    },
    join: {
      headline: { zh: '加入我们。',                          en: 'Work with us.' },
      body:     { zh: '当前开放招募的方向见上文。如认同 Lumicome 的工作方式,欢迎来信。',
                  en: 'Open positions are listed above. If our way of working resonates with you, please write.' },
      mail: 'hello@atelieryf.com',
    },
  },

  // ====== LEGAL (Mentions légales · Privacy · Cookies) ======
  legal: {
    eyebrow: { zh: '法务信息', en: 'Legal information' },
    headline: {
      zh: '法务信息 · Mentions légales · Privacy.',
      en: 'Mentions Légales · Privacy · Cookies.',
    },
    intro: {
      zh: 'Lumicome 的跨境业务由位于法国与中国大陆的两家独立法律主体共同承接。本页依据法国 LCEN(loi n° 2004-575)、欧盟 GDPR 与中国《个人信息保护法》(PIPL)公开下列法务条款。',
      en: 'Lumicome\'s cross-border operations are conducted through two independent legal entities — one in France, one in Mainland China. The following information is published in accordance with French LCEN (n° 2004-575), the EU GDPR, and the PRC Personal Information Protection Law (PIPL).',
    },
    sections: [
      {
        n: 'I',
        title: { zh: 'Mentions Légales · 欧洲实体', en: 'Mentions Légales · European Entity' },
        body: { zh: '欧洲业务由以下法国实体承接,负责欧洲属地拍摄、跨境合规与品牌战略统筹。',
                en: 'European operations are conducted through the following French entity, responsible for European on-set production, cross-border compliance, and brand strategy coordination.' },
        rows: [
          { k: { zh: '运营实体',         en: 'Publisher' },           v: { zh: 'Atelier Lumicome SAS', en: 'Atelier Lumicome SAS' } },
          { k: { zh: '法律形式',         en: 'Legal form' },          v: { zh: 'SAS · 法国巴黎注册(注册中,2026 Q1 完成)',   en: 'SAS · registered in Paris (incorporation in progress, completion 2026 Q1)' } },
          { k: { zh: '注册地址',         en: 'Registered address' },  v: { zh: '巴黎 · Île-de-France · 法国',  en: 'Paris · Île-de-France · France' } },
          { k: { zh: 'SIREN',           en: 'SIREN' },                v: { zh: '注册完成后公布',         en: 'To be published upon completion' } },
          { k: { zh: 'RCS',             en: 'RCS' },                  v: { zh: 'Paris',                   en: 'Paris' } },
          { k: { zh: 'VAT (欧盟增值税号)', en: 'VAT (EU)' },           v: { zh: '注册完成后公布',         en: 'To be published upon completion' } },
          { k: { zh: '出版责任人',       en: 'Director of publication' }, v: { zh: 'Lumicome 创始人',     en: 'Founder · Lumicome' } },
          { k: { zh: '联系邮箱',         en: 'Contact email' },       v: { zh: 'hello@atelieryf.com',     en: 'hello@atelieryf.com' } },
          { k: { zh: '网站托管',         en: 'Hosting' },             v: { zh: '由第三方服务提供商托管 · 详情应要求提供', en: 'Provided by a third-party hosting service · details on request' } },
        ],
      },
      {
        n: 'II',
        title: { zh: '中国主体备案 · Chinese Entity', en: 'Chinese Entity · 中国主体' },
        body: { zh: '中国大陆境内业务由以下实体承接,负责大中华区项目执行、本土资源对接、艺人事务与现场制片。',
                en: 'Mainland China operations are conducted through the following entity, responsible for project execution, local resource coordination, talent affairs, and on-the-ground production across Greater China.' },
        rows: [
          { k: { zh: '工商登记名称',     en: 'Registered name' },      v: { zh: '帧汐映社(沈阳)文化传媒有限公司', en: 'Zhenxi Yingshe (Shenyang) Cultural Media Co., Ltd.' } },
          { k: { zh: '法律形式',         en: 'Legal form' },           v: { zh: '有限责任公司',                   en: 'Limited Liability Company' } },
          { k: { zh: '注册地址',         en: 'Registered address' },   v: { zh: '辽宁省 · 沈阳市',                en: 'Shenyang · Liaoning Province · China' } },
          { k: { zh: '统一社会信用代码', en: 'Unified Social Credit Code' }, v: { zh: '应要求提供 · 18 位',       en: 'Available on request · 18 digits' } },
          { k: { zh: '法定代表人',       en: 'Legal representative' }, v: { zh: '应要求提供',                     en: 'Available on request' } },
          { k: { zh: '运营办公地址',     en: 'Operating office' },     v: { zh: '上海 · 静安区',                  en: 'Shanghai · Jing\'an District' } },
          { k: { zh: '联系邮箱',         en: 'Contact email' },        v: { zh: 'hello@atelieryf.com',           en: 'hello@atelieryf.com' } },
        ],
      },
      {
        n: 'III',
        title: { zh: '两地实体的协作分工', en: 'Inter-entity Coordination' },
        body: { zh: '两家实体在各自属地内独立承担法律责任与税务义务。跨境项目由两端 SPOC(单点接口人)协调,执行属地以项目主要拍摄地为准——欧洲属地项目由 Atelier Lumicome SAS 主导;大中华区项目由帧汐映社主导;两地共同参与的项目按《项目服务说明》中约定的主导方为执行主体。',
                en: 'Each entity bears legal and tax responsibility independently within its own jurisdiction. Cross-border projects are coordinated through SPOCs on both sides; the entity of execution follows the primary shooting jurisdiction — European projects are led by Atelier Lumicome SAS; Greater China projects are led by Zhenxi Yingshe; joint projects follow the lead entity defined in the Project Service Statement.' },
        bullets: [
          { zh: '客户合同分别与对应执行实体签署。',                en: 'Client contracts are executed by the corresponding lead entity.' },
          { zh: '跨境结算可使用 EUR 或 RMB,以执行实体所在地为准。', en: 'Cross-border settlement may be in EUR or RMB, per the lead entity\'s jurisdiction.' },
        ],
      },
      {
        n: 'IV',
        title: { zh: 'Politique de confidentialité · 隐私政策', en: 'Privacy · GDPR & PIPL' },
        body: { zh: '本站尊重访客的个人数据权利,严格依据欧盟《通用数据保护条例》(GDPR · 2016/679)、法国《数据保护法》(loi Informatique et Libertés)与中国《个人信息保护法》(PIPL · 2021)处理个人信息。',
                en: 'The site respects the personal data rights of all visitors and processes personal data in strict accordance with the EU General Data Protection Regulation (GDPR · 2016/679), the French Data Protection Act (Loi Informatique et Libertés), and the PRC Personal Information Protection Law (PIPL · 2021).' },
        bullets: [
          { zh: '收集的数据 · 仅限通过联系表单、协作者准入表单、Newsletter 订阅自愿提交的姓名、邮箱、城市、专业背景、附言。',
            en: 'Data collected · only the name, email, city, professional details and notes that you voluntarily submit through the contact form, collaborator intake form, or newsletter signup.' },
          { zh: '使用目的 · 项目沟通、协作者匹配、Field Notes 邮件订阅与 Lumicome 业务记录。不用于第三方营销转售。',
            en: 'Purpose · project communication, collaborator matching, Field Notes delivery, and internal business records. Data is never resold for third-party marketing.' },
          { zh: '跨境传输 · 涉及欧盟与中国大陆之间的个人数据传输时,依据 GDPR Art. 46 标准合同条款(SCC)与 PIPL 第 38-40 条规定的合规路径进行。',
            en: 'Cross-border transfer · personal data flows between the EU and Mainland China are handled under GDPR Art. 46 Standard Contractual Clauses (SCC) and PIPL Art. 38-40 compliance pathways.' },
          { zh: '保留期限 · 联系数据保存 3 年;Newsletter 订阅至退订;协作者准入资料应申请人要求可随时删除。',
            en: 'Retention · contact data is retained for 3 years; newsletter subscriptions until you unsubscribe; collaborator intake data is deleted at applicant\'s request.' },
          { zh: '访问 / 更正 / 删除 · 您可随时来信 privacy@atelieryf.com 行使 GDPR Art. 15-22 / PIPL 第 44-50 条规定的访问、更正、删除、可携、反对处理等权利。',
            en: 'Access / correction / deletion · you may write to privacy@atelieryf.com at any time to exercise your GDPR Art. 15-22 / PIPL Art. 44-50 rights (access, rectification, erasure, portability, objection).' },
          { zh: '投诉渠道 · 欧盟用户可向法国 CNIL(www.cnil.fr)申诉;中国大陆用户可向国家网信办申诉。',
            en: 'Complaint channel · EU users may lodge complaints with France\'s CNIL (www.cnil.fr); PRC users may lodge complaints with the Cyberspace Administration of China.' },
        ],
      },
      {
        n: 'V',
        title: { zh: 'Cookies · 关于本站的 Cookie 使用', en: 'Cookies' },
        body: { zh: '本站使用最低限度的技术性 Cookies 用于会话、语言偏好、表单状态记录;不使用第三方广告 / 行为追踪 Cookies。',
                en: 'The site uses a minimum set of strictly technical cookies for session continuity, language preference, and form state retention. No third-party advertising or behavioural tracking cookies are used.' },
        bullets: [
          { zh: '语言偏好 · 记录您选择的中文 / 英文界面。',           en: 'Language preference · stores your choice of Chinese or English interface.' },
          { zh: '表单状态 · 临时保存填写中的内容,关闭页面即清除。',  en: 'Form state · temporarily retains in-progress form input; cleared when you close the page.' },
          { zh: '可在浏览器设置中随时清除本站 Cookies。',              en: 'You may clear cookies for this site in your browser settings at any time.' },
        ],
      },
      {
        n: 'VI',
        title: { zh: '知识产权与内容版权', en: 'Intellectual Property' },
        body: { zh: '本站所有内容——包括但不限于文字、影像、设计、视觉档案——均为 Atelier Lumicome SAS、帧汐映社(沈阳)文化传媒有限公司或对应权利人共同所有。未经书面授权不得复制、转载、分发或用于商业用途。',
                en: 'All content on the site — including text, imagery, design, and visual archive — is jointly owned by Atelier Lumicome SAS, Zhenxi Yingshe (Shenyang) Cultural Media Co., Ltd., or the respective rights holders. No reproduction, redistribution, or commercial use is permitted without prior written authorisation.' },
        bullets: [],
      },
    ],
    footnote: {
      zh: '本页内容以法语版本与中文版本同时作为法律依据,各自适用于对应的法律辖区(法国 / 欧盟、中国大陆)。英文版本仅供参考。最新更新:2026 · 01。',
      en: 'The French and Chinese versions of this page each constitute authoritative legal text within their respective jurisdictions (France / EU; Mainland China). The English version is for reference only. Last updated: January 2026.',
    },
  },

  // ====== CONTACT ======
  contact: {
    headline: {
      zh: '联系。',
      en: 'Contact.',
    },
    mail: 'hello@atelieryf.com',
    fields: [
      { k: { zh: '欧洲',     en: 'Europe' },  v: { zh: '巴黎 · Île-de-France', en: 'Paris · Île-de-France' } },
      { k: { zh: '中国',     en: 'China' },   v: { zh: '上海 · 静安',          en: 'Shanghai · Jing\'an' } },
      { k: { zh: '协作来信', en: 'Network' }, v: { zh: 'network@atelieryf.com', en: 'network@atelieryf.com' } },
      { k: { zh: '网站',     en: 'Site' },    v: { zh: 'www.atelieryf.com',     en: 'www.atelieryf.com' } },
    ],
  },
};

window.LUMI = LUMI;
