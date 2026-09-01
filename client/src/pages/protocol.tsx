import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useLanguage } from '@/contexts/LanguageContext';

const PROTOCOL_ITEMS = [
  {
    num: '01',
    titleZh: '项目确认与档期锁定',
    titleEn: 'Work Authorization & Booking',
    descZh: '项目进入制作前，双方须签署服务确认文件并按约支付首期款。确认文件用于锁定制作档期、资源投入与服务范围；未经书面授权的提案、Treatment 及创意文件，其知识产权仍归 Lumicome 所有。',
    descEn: 'Before entering full production, a formal Work Authorization or Letter of Intent must be executed alongside an initial deposit. Cross-border campaigns require intensive local resource allocation and upfront creative investment; this step secures the service window and protects the intellectual property of preliminary concepts. All unexecuted pitches and treatments remain the exclusive property of Lumicome.',
  },
  {
    num: '02',
    titleZh: '单一项目接口',
    titleEn: 'Single Point of Contact',
    descZh: '双方各指定一名项目负责人，统一汇总意见、确认节点并分发有效信息，以减少跨语言、跨时区协作中的版本偏差。',
    descEn: 'We assign a single designated contact for each project. In cross-language and cross-time-zone collaborations, elongated communication chains inevitably cause information misalignment. Single-point onboarding ensures that creative intent is transmitted precisely and that accountability remains absolute.',
  },
  {
    num: '03',
    titleZh: '变更书面确认',
    titleEn: 'Change Order Protocol',
    descZh: '任何影响预算、周期、交付范围或创意方向的变更，均须在执行前完成书面确认，并同步更新相应报价与排期。',
    descEn: 'On-set verbal agreements frequently compromise a project\'s trajectory. Any adjustment involving budget, timeline, or creative direction must be documented in a brief written confirmation before execution. This is not a measure of friction, but a mutual safeguard for both parties\' interests.',
  },
  {
    num: '04',
    titleZh: '属地合规审核',
    titleEn: 'Local Compliance Pre-requisites',
    descZh: '制作团队在开机前核查拍摄许可、劳动关系、保险、肖像权、音乐及素材版权等属地要求，并将必要文件纳入制作档案。',
    descEn: 'From French labour regulations and Italian filming permits to regional copyright structures, all administrative and legal clearances are secured prior to production. Within our practice, local compliance is our operational baseline, not an extra effort.',
  },
  {
    num: '05',
    titleZh: '财务与结算确认',
    titleEn: 'Structural Financial Alignment',
    descZh: '合同中明确付款节点、税费、跨境汇款成本、币种与汇率计算方式，避免财务条件影响资源预订和制作进度。',
    descEn: 'Payment milestones, international transfer mechanics, and currency handlings are fully defined before contract signing. Cross-border financial workflows are genuinely complex; aligning these details early prevents any disruption to the ongoing production pipeline.',
  },
  {
    num: '06',
    titleZh: '资产移交与结项',
    titleEn: 'Asset Handover Closure',
    descZh: '项目收尾阶段按约定清单、文件格式和传输方式移交成片及素材，并由双方确认交付状态与后续存档责任。',
    descEn: 'Every project concludes with a formal asset handover closure. All digital files and master deliverables must be completely organized, transferred in the agreed format, and formally acknowledged by both sides to ensure a clean operational completion.',
  },
  {
    num: '07',
    titleZh: '保密义务',
    titleEn: 'Absolute Confidentiality',
    descZh: '未公开的品牌信息、创意文件、制作素材与内部沟通均纳入保密范围。未经书面授权，Lumicome 不对外展示、引用或用于案例发布。',
    descEn: 'A brand\'s creative direction, unreleased visual assets, and internal communications are strictly protected under confidentiality. Without explicit written authorization, Lumicome will never reference, quote, or showcase any project material as a public case study.',
  },
  {
    num: '08',
    titleZh: '风险与责任划分',
    titleEn: 'Insurance & Liability Boundaries',
    descZh: '筹备期明确演职人员、器材、场地与第三方供应商的保险安排及责任边界，并在通告与制作文件中记录相关风险。',
    descEn: 'Insurance coverage and liability boundaries for cast, crew, equipment, and locations are clearly demarcated during the pre-production phase. Risks are mapped early to ensure the creative set is never compromised by unforeseen liabilities on the ground.',
  },
  {
    num: '09',
    titleZh: '不可抗力应对',
    titleEn: 'Contingency & Force Majeure Plan',
    descZh: '针对天气、罢工、交通中断或政策变化等不可控因素，合同将约定延期、取消、替代方案及已发生成本的承担方式。',
    descEn: 'For uncontrollable disruption — such as weather extremities, labor strikes, or sudden regulatory shifts — every contract outlines a pre-defined contingency protocol. This functions not as an escape clause, but as a shared strategy to actively mitigate impact and loss.',
  },
  {
    num: '10',
    titleZh: '版权约定与争议解决',
    titleEn: 'Intellectual Property & Dispute Resolution',
    descZh: '合同逐项约定素材的使用主体、地域、期限、媒介与二次使用范围；争议解决方式、适用法律及管辖地以双方签署文件为准。',
    descEn: 'Usage rights, durations, geographical territories, and media channels are explicitly defined per asset to eliminate late-stage friction. Should a disagreement arise, we prioritize professional consultation first, and legal recourse second. Governing law defaults to the primary jurisdiction of the project\'s execution, as explicitly specified in the contract.',
  },
];

const PROCESS_STEPS = [
  {
    num: 'i',
    titleZh: '需求确认',
    titleEn: 'Brief',
    descZh: '明确品牌目标、受众、预算、调性与交付范围。',
    descEn: 'Clarify brand objectives, audience, budget, tone, and delivery scope.',
  },
  {
    num: 'ii',
    titleZh: '资源筛选与匹配',
    titleEn: 'Match',
    descZh: '按品牌调性、受众画像、内容质量与互动表现筛选合适人选与资源。',
    descEn: 'Shortlist talent, creators, and resources by tone, audience profile, scale, and engagement quality.',
  },
  {
    num: 'iii',
    titleZh: '方案提报',
    titleEn: 'Proposal',
    descZh: '提供候选名单、推荐理由、内容方向与合作建议。',
    descEn: 'Present candidate lists, rationale, content direction, and collaboration recommendations.',
  },
  {
    num: 'iv',
    titleZh: '商务连结与邀约',
    titleEn: 'Outreach',
    descZh: '完成沟通、报价确认、档期协调与当地邀约。',
    descEn: 'Handle communication, quotation negotiation, schedule coordination, and local invitations.',
  },
  {
    num: 'v',
    titleZh: '执行落地',
    titleEn: 'Execution',
    descZh: '推进内容产出、现场统筹、投放协作与素材交付。',
    descEn: 'Execute content production, on-site coordination, distribution collaboration, and asset delivery.',
  },
  {
    num: 'vi',
    titleZh: '复盘交付',
    titleEn: 'Review',
    descZh: '整理数据、素材与复盘结果，作为下一轮合作依据。',
    descEn: 'Collect performance data, assets, and review notes as the basis for the next collaboration.',
  },
];

export default function Protocol() {
  const { lang } = useLanguage();
  const t = (en: string, zh: string) => (lang === 'zh' ? zh : en);

  useEffect(() => {
    document.title = 'Protocol — LUMICOME';
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
            {t('PROTOCOL', '工作标准')}
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
            {t('How We Work.', '工作标准')}
          </h1>
          <p
            className="text-base font-light leading-relaxed max-w-2xl"
            style={{ color: '#3a3028' }}
          >
            {t(
              'Ten operative principles across geographies and languages. Established to build a definitive workflow, allowing our absolute focus to remain on creation.',
              '适用于跨地区、跨语言项目的十项执行标准，覆盖授权、沟通、变更、合规、财务、交付与版权管理。'
            )}
          </p>
        </div>

        {/* ── PROCESS STEPS ── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16 mb-24"
          style={{ borderTop: '1px solid #e0d9d0' }}
        >
          <div className="pt-12 mb-10">
            <p
              className="text-xs tracking-[0.28em] uppercase mb-5 font-light"
              style={{ color: '#3a3028' }}
            >
              {t('PROJECT FLOW', '合作流程')}
            </p>
            <h2
              className="font-display leading-tight"
              style={{
                fontSize: 'clamp(1.8rem, 3.4vw, 3rem)',
                fontWeight: 700,
                color: '#1a1510',
                letterSpacing: '-0.02em',
              }}
            >
              {t('From brief to debrief.', '从需求到复盘')}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.num}
                className={`px-4 py-8 md:px-6 border-b border-[#e0d9d0] ${idx < 2 ? 'md:border-t' : ''} ${idx % 2 === 1 ? 'md:border-l' : ''} ${idx < 3 ? 'lg:border-t' : 'lg:border-t-0'} ${idx % 3 !== 0 ? 'lg:border-l' : 'lg:border-l-0'}`}
              >
                <span
                  className="text-xs tracking-[0.18em] uppercase font-light block mb-5"
                  style={{ color: '#b0a898' }}
                >
                  {step.num}
                </span>
                <h3
                  className="font-display mb-3 leading-tight"
                  style={{
                    fontSize: 'clamp(1.05rem, 1.5vw, 1.25rem)',
                    fontWeight: 700,
                    color: '#1a1510',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {t(step.titleEn, step.titleZh)}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#3a3028' }}>
                  {t(step.descEn, step.descZh)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PROTOCOL ITEMS ── */}
        <div
          className="max-w-[1200px] mx-auto px-8 lg:px-16"
          style={{ borderTop: '1px solid #e0d9d0' }}
        >
          <div className="space-y-0">
            {PROTOCOL_ITEMS.map((item, idx) => (
              <div
                key={idx}
                className="py-10 flex items-start gap-8"
                style={{ borderBottom: '1px solid #e0d9d0' }}
              >
                <span
                  className="font-display font-light shrink-0 w-10 text-right"
                  style={{
                    fontSize: '1rem',
                    color: '#b0a898',
                    letterSpacing: '0.04em',
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <h3
                    className="font-display mb-3 leading-tight"
                    style={{
                      fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)',
                      fontWeight: 700,
                      color: '#1a1510',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {lang === 'zh'
                      ? `${item.titleZh}`
                      : item.titleEn}
                  </h3>
                  <p
                    className="text-base font-light leading-relaxed"
                    style={{ color: '#3a3028' }}
                  >
                    {t(item.descEn, item.descZh)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
