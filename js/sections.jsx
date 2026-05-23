// sections.jsx — Lumicome 4-module pages
const { useState, useEffect, useRef } = React;
const L = (v, lang) => (v && typeof v === 'object' ? v[lang] : v);

// =====================================================
// HOME
// =====================================================
function HomePage({ lang, go }) {
  const h = LUMI.home;
  return (
    <React.Fragment>
      <section className="hero-banner" data-screen-label="01 Hero">
        <div className="wrap">
          <div className={`hero-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>
            <span>{L(h.eyebrow, lang)}</span>
            <span>Lumicome</span>
          </div>

          <h1 className={`hero-banner-h ${lang === 'zh' ? 'cn' : ''}`}>
            {h.banner[lang].map((line, i) => (
              <span className="line" key={i}>{line}</span>
            ))}
          </h1>

          <p className={`hero-banner-sub ${lang === 'zh' ? 'cn' : ''}`}>{L(h.sub, lang)}</p>
        </div>

        <div className="wrap">
          <div className="stat-row">
            {h.stats.map((s, i) => (
              <div className="stat" key={i}>
                <span className="v">{s.v}</span>
                <span className={`k ${lang === 'zh' ? 'cn' : ''}`}>{L(s.k, lang)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR MODULES */}
      <section className="section wrap" data-screen-label="02 Modules">
        <div className="sec-head">
          <span className={`sec-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{lang === 'zh' ? '架构' : 'Structure'}</span>
          <h2 className={`sec-h2 ${lang === 'zh' ? 'cn' : ''}`}>
            {lang === 'zh' ? '四个独立的分支,一个共同的工作方式。' : 'Four distinct branches, one shared way of working.'}
          </h2>
          <span></span>
        </div>

        <div className="modules">
          {h.modules.map((m) => (
            <a key={m.id} className="module" href={'#' + m.id} onClick={(e) => { e.preventDefault(); go(m.id); }}>
              <span className="module-n">{m.n}</span>
              <h3 className={`module-t ${lang === 'zh' ? 'cn' : ''}`}>{L(m.title, lang)}</h3>
              <span className={`module-sub ${lang === 'zh' ? 'cn' : ''}`}>{L(m.sub, lang)}</span>
              <p className={`module-b ${lang === 'zh' ? 'cn' : ''}`}>{L(m.body, lang)}</p>
              <span className={`module-cta ${lang === 'zh' ? 'cn' : ''}`}>
                {lang === 'zh' ? '展开' : 'Enter'} →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ARCHIVE teaser */}
      <section className="section wrap" data-screen-label="03 Archive">
        <div className="sec-head">
          <span className={`sec-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{lang === 'zh' ? '档案 · 近期' : 'Archive · Recent'}</span>
          <h2 className={`sec-h2 ${lang === 'zh' ? 'cn' : ''}`}>
            {lang === 'zh' ? '近期做完的几件事。' : 'Recent work, from the archive.'}
          </h2>
          <a href="#archive" onClick={(e) => { e.preventDefault(); go('archive'); }} className={`sec-cta ${lang === 'zh' ? 'cn' : ''}`}>
            {lang === 'zh' ? '完整档案' : 'Full archive'} →
          </a>
        </div>

        <div className="work-grid">
          {LUMI.archive.items.map((item, i) => (
            <a className="work-card" href="#archive" key={i} onClick={(e) => { e.preventDefault(); go('archive'); }}>
              <div className="plate">
                <div className="plate-meta">
                  <div className="t"><span>{item.plate.line1}</span><span>{item.plate.tag}</span></div>
                  <div className="b"><span>{item.plate.line3}</span><span>{item.plate.year}</span></div>
                </div>
              </div>
              <div className={`work-meta-row ${lang === 'zh' ? 'cn' : ''}`}>
                <span>{item.client}</span><span>{item.meta.year}</span>
              </div>
              <h3 className={`work-title ${lang === 'zh' ? 'cn' : ''}`}>{L(item.title, lang)}</h3>
              <p className={`work-sub ${lang === 'zh' ? 'cn' : ''}`}>{L(item.sub, lang)}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="wrap">
        <div className="partners">
          <div className={`partners-label ${lang === 'zh' ? 'cn' : ''}`}>{lang === 'zh' ? '合作与背书' : 'Partners & Affiliations'}</div>
          <div className="partners-list">
            {h.partners.map((p, i) => <span className="item" key={i}>{p}</span>)}
          </div>
        </div>
      </section>

      <ContactBlock lang={lang} />
    </React.Fragment>
  );
}

// =====================================================
// ARCHIVE page — Portfolio with filter + hover overlay
// =====================================================
function ArchivePage({ lang }) {
  const a = LUMI.archive;
  const [filter, setFilter] = useState('all');
  const items = filter === 'all' ? a.items : a.items.filter(i => i.category === filter);

  return (
    <section className="page wrap" data-screen-label="Archive">
      <div className={`page-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>I — {lang === 'zh' ? '视觉档案' : 'The Archive'}</div>
      <h1 className={`page-title ${lang === 'zh' ? 'cn' : ''}`}>{L(a.headline, lang)}</h1>
      <p className={`lead ${lang === 'zh' ? 'cn' : ''}`}>{L(a.intro, lang)}</p>

      {/* filter */}
      <div className="archive-filter" style={{ marginTop: 'clamp(40px, 6vh, 64px)' }}>
        {a.filters.map((f) => (
          <button
            key={f.id}
            className={`af-btn ${lang === 'zh' ? 'cn' : ''} ${filter === f.id ? 'is-active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            {L(f, lang)}
          </button>
        ))}
        <span className={`af-count ${lang === 'zh' ? 'cn' : ''}`}>
          {items.length} {lang === 'zh' ? '个项目' : items.length === 1 ? 'project' : 'projects'}
        </span>
      </div>

      {/* grid with hover overlay */}
      <div className="archive-grid" style={{ marginTop: 'clamp(32px, 5vh, 48px)' }}>
        {items.map((item, i) => (
          <article className="ar-card" key={i}>
            <div className="plate plate--wide">
              <div className="plate-meta">
                <div className="t"><span>{item.plate.line1}</span><span>{item.plate.tag}</span></div>
                <div className="b"><span>{item.plate.line3}</span><span>{item.plate.year}</span></div>
              </div>

              {/* hover overlay reveals crew */}
              <div className="ar-overlay">
                <div className={`ar-ov-h ${lang === 'zh' ? 'cn' : ''}`}>
                  <div className="ar-ov-meta">
                    <span>{item.meta.brand}</span>
                    <span>{item.meta.year}</span>
                    <span>{L(item.meta.location, lang)}</span>
                  </div>
                  <h4 className={`ar-ov-title ${lang === 'zh' ? 'cn' : ''}`}>{L(item.title, lang)}</h4>
                </div>
                <div className={`ar-ov-crew ${lang === 'zh' ? 'cn' : ''}`}>
                  <span className="ar-ov-label">{lang === 'zh' ? '主创' : 'Crew'}</span>
                  {item.meta.crew.map((c, j) => (
                    <div className="ar-ov-row" key={j}>
                      <span className="role">{L(c.role, lang)}</span>
                      <span className="name">{c.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="ar-info">
              <div className={`ar-info-meta ${lang === 'zh' ? 'cn' : ''}`}>
                <span>{item.client}</span><span>{item.meta.year}</span>
                <span className="ar-cat">{a.filters.find(f => f.id === item.category) ? L(a.filters.find(f => f.id === item.category), lang) : ''}</span>
              </div>
              <h3 className={`work-title ${lang === 'zh' ? 'cn' : ''}`}>{L(item.title, lang)}</h3>
              <p className={`work-sub ${lang === 'zh' ? 'cn' : ''}`}>{L(item.sub, lang)}</p>
              <p className={`ar-desc ${lang === 'zh' ? 'cn' : ''}`}>{L(item.desc, lang)}</p>
            </div>
          </article>
        ))}
      </div>

      <p className={`page-note ${lang === 'zh' ? 'cn' : ''}`} style={{ marginTop: 'clamp(56px, 9vh, 100px)' }}>
        {lang === 'zh' ? '更多近期项目与未公开资料可应要求提供。' : 'Additional recent work and unreleased material available on request.'}
      </p>
    </section>
  );
}

// =====================================================
// JOURNAL page
// =====================================================
function JournalPage({ lang }) {
  const e = LUMI.journal;
  const [open, setOpen] = useState(null);

  return (
    <section className="page wrap" data-screen-label="Journal">
      <div className={`page-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>II — {lang === 'zh' ? '编辑室' : 'The Editorial'}</div>
      <h1 className={`page-title ${lang === 'zh' ? 'cn' : ''}`}>{L(e.headline, lang)}</h1>
      <p className={`lead ${lang === 'zh' ? 'cn' : ''}`}>{L(e.intro, lang)}</p>

      <div className="journal-list" style={{ marginTop: 'clamp(48px, 8vh, 80px)' }}>
        {e.items.map((it, i) => {
          const isOpen = open === i;
          const canOpen = it.status.en === 'Published';
          return (
            <article key={i} className={`jr-item ${isOpen ? 'is-open' : ''}`}>
              <button className="jr-head" onClick={() => canOpen && setOpen(isOpen ? null : i)} style={{ cursor: canOpen ? 'pointer' : 'default' }}>
                <div className="jr-meta">
                  <span>{it.vol}</span>
                  <span>{L(it.date, lang)}</span>
                  <span>{L(it.tag, lang)}</span>
                  <span>{L(it.read, lang)}</span>
                  <span className={canOpen ? 'st-published' : 'st-forth'}>{L(it.status, lang)}</span>
                </div>
                <h3 className={`jr-title ${lang === 'zh' ? 'cn' : ''}`}>{L(it.title, lang)}</h3>
                <p className={`jr-deck ${lang === 'zh' ? 'cn' : ''}`}>{L(it.deck, lang)}</p>
                {canOpen && (
                  <span className={`jr-cta ${lang === 'zh' ? 'cn' : ''}`}>
                    {isOpen ? (lang === 'zh' ? '收起 ↑' : 'Close ↑') : (lang === 'zh' ? '阅读全文 →' : 'Read in full →')}
                  </span>
                )}
              </button>

              {canOpen && isOpen && (
                <div className="jr-body">
                  <div className={`essay-body ${lang === 'zh' ? 'cn' : ''}`}>
                    {e.sampleEssay.body[lang].slice(0, 2).map((p, k) => <p key={k}>{p}</p>)}
                  </div>
                  <div className={`essay-pull ${lang === 'zh' ? 'cn' : ''}`}>{L(e.sampleEssay.pull, lang)}</div>
                  <div className={`essay-body ${lang === 'zh' ? 'cn' : ''}`}>
                    {e.sampleEssay.body[lang].slice(2).map((p, k) => <p key={k}>{p}</p>)}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

// =====================================================
// COLLABORATIVE page — Network + intake
// =====================================================
function CollaborativePage({ lang, go }) {
  const n = LUMI.collaborative;
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section className="page wrap" data-screen-label="Collaborative">
      <div className={`page-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>III — {lang === 'zh' ? '协作网络' : 'The Network'}</div>
      <h1 className={`page-title ${lang === 'zh' ? 'cn' : ''}`}>{L(n.headline, lang)}</h1>
      <p className={`lead ${lang === 'zh' ? 'cn' : ''}`}>{L(n.intro, lang)}</p>

      <div className="disc-grid" style={{ marginTop: 'clamp(48px, 8vh, 80px)' }}>
        {n.disciplines.map((d, i) => (
          <div className="disc-item" key={i}>
            <span className="n">{d.n}</span>
            <h4 className={lang === 'zh' ? 'cn' : ''}>{lang === 'zh' ? d.cn : d.en}</h4>
            <span className={`alt ${lang === 'zh' ? 'cn' : ''}`}>{lang === 'zh' ? d.en : d.cn}</span>
            <p className={lang === 'zh' ? 'cn' : ''}>{lang === 'zh' ? d.bodyZh : d.bodyEn}</p>
          </div>
        ))}
      </div>

      <div className="standards-ack" style={{ marginTop: 'clamp(48px, 8vh, 80px)' }}>
        <span className={`partners-label ${lang === 'zh' ? 'cn' : ''}`} style={{ marginBottom: 12 }}>
          {lang === 'zh' ? '准入前提' : 'Precondition'}
        </span>
        <p className={lang === 'zh' ? 'cn' : ''}>{L(n.charterAcknowledge, lang)}</p>
      </div>

      <div className="intake" id="join">
        <div className="sec-head" style={{ marginBottom: 32 }}>
          <span className={`sec-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{lang === 'zh' ? '准入通道' : 'Open Intake'}</span>
          <h2 className={`sec-h2 ${lang === 'zh' ? 'cn' : ''}`}>{lang === 'zh' ? '加入协作名录。' : 'Join the roster.'}</h2>
          <span></span>
        </div>

        <p className={`lead ${lang === 'zh' ? 'cn' : ''}`} style={{ marginBottom: 40, fontSize: 'clamp(17px, 1.5vw, 20px)' }}>
          {L(n.formIntro, lang)}
        </p>

        {!sent ? (
          <form className="form intake-form" onSubmit={submit}>
            <div className="form-double">
              <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
                <label>{lang === 'zh' ? '姓名 / 工作室 *' : 'Full name / Studio *'}</label>
                <input required type="text" placeholder={lang === 'zh' ? '中文 / 英文 / 法文皆可' : 'CN / EN / FR all accepted'} />
              </div>
              <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
                <label>{lang === 'zh' ? '邮箱 *' : 'Email *'}</label>
                <input required type="email" placeholder="name@studio.com" />
              </div>
            </div>
            <div className="form-double">
              <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
                <label>{lang === 'zh' ? '常驻属地 *' : 'Base · city, country *'}</label>
                <input required type="text" placeholder={lang === 'zh' ? '巴黎 / 米兰 / 纽约 / ...' : 'Paris / Milan / NY / ...'} />
              </div>
              <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
                <label>{lang === 'zh' ? '专业方向 *' : 'Creative discipline *'}</label>
                <select required defaultValue="">
                  <option value="" disabled>{lang === 'zh' ? '请选择' : 'Select'}</option>
                  <option>{lang === 'zh' ? '导演 / Director' : 'Director'}</option>
                  <option>{lang === 'zh' ? '摄影 / DoP' : 'DoP'}</option>
                  <option>{lang === 'zh' ? '美术 / Art Director' : 'Art Director'}</option>
                  <option>{lang === 'zh' ? '制片 / Producer' : 'Producer'}</option>
                  <option>{lang === 'zh' ? '造型 / Stylist' : 'Stylist'}</option>
                  <option>{lang === 'zh' ? '其他' : 'Other'}</option>
                </select>
              </div>
            </div>
            <div className="form-double">
              <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
                <label>{lang === 'zh' ? '执业年限' : 'Years practising'}</label>
                <input type="text" placeholder={lang === 'zh' ? '例:6 年' : 'e.g. 6 years'} />
              </div>
              <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
                <label>{lang === 'zh' ? '作品集 / 网站 *' : 'Portfolio / website *'}</label>
                <input required type="url" placeholder="https://" />
              </div>
            </div>
            <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
              <label>{lang === 'zh' ? '主要合作品牌 / 客户' : 'Selected clients'}</label>
              <input type="text" placeholder={lang === 'zh' ? '例:Hermès, Vogue, Wallpaper*…' : 'e.g. Hermès, Vogue, Wallpaper*…'} />
            </div>
            <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
              <label>{lang === 'zh' ? '工作语言' : 'Working languages'}</label>
              <input type="text" placeholder={lang === 'zh' ? '例:中文 · 英文 · 法文' : 'e.g. Mandarin · English · French'} />
            </div>
            <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
              <label>{lang === 'zh' ? '附言' : 'Notes'}</label>
              <textarea placeholder={lang === 'zh' ? '关于你的实践、希望承接的项目类型,或任何想让我们知道的事' : 'About your practice, the kind of work you want to take on, anything you want us to know'} />
            </div>
            <div className={`form-checkbox ${lang === 'zh' ? 'cn' : ''}`}>
              <input type="checkbox" required id="ack" />
              <label htmlFor="ack">
                {lang === 'zh' ? '我已阅读并承诺共同遵守 ' : 'I agree to uphold '}
                <a href="#protocol" className="inline-link" style={{ fontSize: 'inherit' }} onClick={(e) => { e.preventDefault(); go('protocol'); }}>
                  {lang === 'zh' ? '《Lumicome 全球跨境协作规范》' : 'the Lumicome Global Cross-Border Collaboration Protocol'}
                </a>。
              </label>
            </div>
            <button className={`form-submit ${lang === 'zh' ? 'cn' : ''}`} type="submit">
              {lang === 'zh' ? '提交申请' : 'Submit application'} →
            </button>
          </form>
        ) : (
          <div style={{ paddingTop: 30 }}>
            <p className={lang === 'zh' ? 'cn' : ''} style={{ fontSize: 20, color: 'var(--ink)', marginBottom: 12 }}>
              {lang === 'zh' ? '已收到。我们将在两周内对符合协作基础的申请人作出回复。' : 'Received. We respond within two weeks to applicants meeting the basic working criteria.'}
            </p>
            <p className={lang === 'zh' ? 'cn' : ''} style={{ fontSize: 15, color: 'var(--mute)' }}>— Lumicome</p>
          </div>
        )}
      </div>

      <div style={{ marginTop: 40 }}>
        <span style={{ fontSize: 13, color: 'var(--mute)' }} className={lang === 'zh' ? 'cn' : ''}>
          {lang === 'zh' ? '或直接来信:' : 'Or write directly: '}
        </span>
        <a className="inline-link" href={`mailto:${n.mail}`} style={{ fontSize: 16 }}>{n.mail} →</a>
      </div>
    </section>
  );
}

// =====================================================
// PROTOCOL page — Conduct & SLA Protocol
// =====================================================
function ProtocolPage({ lang }) {
  const s = LUMI.protocol;
  return (
    <section className="page wrap" data-screen-label="Protocol">
      <div className={`page-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>IV — {lang === 'zh' ? '规范' : 'The Protocol'}</div>
      <h1 className={`page-title ${lang === 'zh' ? 'cn' : ''}`}>{L(s.headline, lang)}</h1>
      <p className={`lead ${lang === 'zh' ? 'cn' : ''}`}>{L(s.intro, lang)}</p>

      <div className="std-list" style={{ marginTop: 'clamp(56px, 9vh, 100px)' }}>
        {s.sections.map((sec, i) => (
          <div className="std-section" key={i}>
            <div className="std-side">
              <span className="std-n">§ {sec.n}</span>
            </div>
            <div className="std-main">
              <h3 className={`std-title ${lang === 'zh' ? 'cn' : ''}`}>{L(sec.title, lang)}</h3>
              <p className={`std-body ${lang === 'zh' ? 'cn' : ''}`}>{L(sec.body, lang)}</p>
              <ul className="std-bullets">
                {sec.bullets.map((b, j) => (
                  <li key={j} className={lang === 'zh' ? 'cn' : ''}>{L(b, lang)}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p className={`std-foot ${lang === 'zh' ? 'cn' : ''}`}>{L(s.footnote, lang)}</p>
    </section>
  );
}

// =====================================================
// CONTACT block + page
// =====================================================
function ContactBlock({ lang }) {
  const c = LUMI.contact;
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <section id="contact" className="section wrap" data-screen-label="Contact">
      <div className="sec-head">
        <span className={`sec-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{lang === 'zh' ? '联系' : 'Contact'}</span>
        <h2 className={`sec-h2 ${lang === 'zh' ? 'cn' : ''}`}>{L(c.headline, lang)}</h2>
        <span></span>
      </div>

      <div className="contact-grid">
        <div>
          <h3 className={`contact-h ${lang === 'zh' ? 'cn' : ''}`}>
            {lang === 'zh' ? '告诉我们项目的事。' : 'Tell us about the project.'}
          </h3>
          <p className={`contact-blurb ${lang === 'zh' ? 'cn' : ''}`}>
            {lang === 'zh' ? '我们在 48 小时内回复。或直接来信。' : 'We respond within 48 hours. Or write directly.'}
          </p>
          <a className="inline-link" href={`mailto:${c.mail}`}>{c.mail} →</a>
          <dl className="contact-info" style={{ marginTop: 40 }}>
            {c.fields.map((f, i) => (
              <React.Fragment key={i}>
                <dt className={lang === 'zh' ? 'cn' : ''}>{L(f.k, lang)}</dt>
                <dd className={lang === 'zh' ? 'cn' : ''}>{L(f.v, lang)}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>

        {!sent ? (
          <form className="form" onSubmit={submit}>
            <div className="form-double">
              <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
                <label>{lang === 'zh' ? '姓名 *' : 'Name *'}</label>
                <input required type="text" placeholder={lang === 'zh' ? '您的姓名' : 'Your name'} />
              </div>
              <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
                <label>{lang === 'zh' ? '邮箱 *' : 'Email *'}</label>
                <input required type="email" placeholder={lang === 'zh' ? '邮箱地址' : 'name@company.com'} />
              </div>
            </div>
            <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
              <label>{lang === 'zh' ? '品牌 / 公司' : 'Brand / Company'}</label>
              <input type="text" placeholder={lang === 'zh' ? '品牌名称' : 'Brand or company name'} />
            </div>
            <div className={`form-row ${lang === 'zh' ? 'cn' : ''}`}>
              <label>{lang === 'zh' ? '项目方向 *' : 'About the project *'}</label>
              <textarea required placeholder={lang === 'zh' ? '简单说几句你想做的事' : 'A few lines about what you have in mind'} />
            </div>
            <button className={`form-submit ${lang === 'zh' ? 'cn' : ''}`} type="submit">
              {lang === 'zh' ? '发送' : 'Send'} →
            </button>
          </form>
        ) : (
          <div style={{ paddingTop: 30 }}>
            <p className={lang === 'zh' ? 'cn' : ''} style={{ fontSize: 18, color: 'var(--ink)', marginBottom: 12 }}>
              {lang === 'zh' ? '已收到。我们尽快回复。' : 'Received. We will respond shortly.'}
            </p>
            <p className={lang === 'zh' ? 'cn' : ''} style={{ fontSize: 15, color: 'var(--mute)' }}>— Lumicome</p>
          </div>
        )}
      </div>
    </section>
  );
}

// =====================================================
// TEAM page
// =====================================================
function TeamPage({ lang }) {
  const t = LUMI.team;
  return (
    <section className="page wrap" data-screen-label="Team">
      <div className={`page-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{L(t.eyebrow, lang)}</div>
      <h1 className={`page-title ${lang === 'zh' ? 'cn' : ''}`}>{L(t.headline, lang)}</h1>
      <p className={`lead ${lang === 'zh' ? 'cn' : ''}`}>{L(t.intro, lang)}</p>

      <div className="team-grid" style={{ marginTop: 'clamp(48px, 8vh, 80px)' }}>
        {t.members.map((m, i) => (
          <article className="tm-card" key={i}>
            <div className="plate plate--square">
              <div className="plate-meta">
                <div className="t"><span>{m.plate.line1}</span><span>{m.plate.tag}</span></div>
                <div className="b"><span>{m.plate.line2}</span><span>{m.plate.line3}</span></div>
              </div>
            </div>
            <div className="tm-info">
              <span className={`tm-role ${lang === 'zh' ? 'cn' : ''}`}>{L(m.role, lang)}</span>
              <h3 className={`tm-name ${lang === 'zh' ? 'cn' : ''}`}>{L(m.name, lang)}</h3>
              <span className={`tm-based ${lang === 'zh' ? 'cn' : ''}`}>{L(m.based, lang)}</span>
              <p className={`tm-bio ${lang === 'zh' ? 'cn' : ''}`}>{L(m.bio, lang)}</p>
              {m.expertise && (
                <ul className={`expertise-tags ${lang === 'zh' ? 'cn' : ''}`}>
                  {m.expertise[lang].map((x, j) => <li key={j}>{x}</li>)}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Advisors */}
      <div className="advisors" style={{ marginTop: 'clamp(64px, 10vh, 100px)' }}>
        <h3 className={`adv-title ${lang === 'zh' ? 'cn' : ''}`}>{L(t.advisors.title, lang)}</h3>
        <dl className="adv-list">
          {t.advisors.items.map((it, i) => (
            <React.Fragment key={i}>
              <dt>{it.k}</dt>
              <dd className={lang === 'zh' ? 'cn' : ''}>{L(it.v, lang)}</dd>
            </React.Fragment>
          ))}
        </dl>
      </div>

      {/* Join us */}
      <div className="join-block" style={{ marginTop: 'clamp(80px, 12vh, 140px)' }}>
        <h3 className={`join-h ${lang === 'zh' ? 'cn' : ''}`}>{L(t.join.headline, lang)}</h3>
        <p className={`join-body ${lang === 'zh' ? 'cn' : ''}`}>{L(t.join.body, lang)}</p>
        <a className="contact-mail" href={`mailto:${t.join.mail}`}>{t.join.mail} →</a>
      </div>
    </section>
  );
}

// =====================================================
// LEGAL page (Mentions légales · Privacy · Cookies)
// =====================================================
function LegalPage({ lang }) {
  const lg = LUMI.legal;
  return (
    <section className="page wrap" data-screen-label="Legal">
      <div className={`page-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{L(lg.eyebrow, lang)}</div>
      <h1 className={`page-title ${lang === 'zh' ? 'cn' : ''}`}>{L(lg.headline, lang)}</h1>
      <p className={`lead ${lang === 'zh' ? 'cn' : ''}`}>{L(lg.intro, lang)}</p>

      <div className="legal-list" style={{ marginTop: 'clamp(56px, 9vh, 100px)' }}>
        {lg.sections.map((sec, i) => (
          <div className="legal-section" key={i}>
            <div className="legal-side"><span className="legal-n">§ {sec.n}</span></div>
            <div className="legal-main">
              <h3 className={`legal-title ${lang === 'zh' ? 'cn' : ''}`}>{L(sec.title, lang)}</h3>
              <p className={`legal-body ${lang === 'zh' ? 'cn' : ''}`}>{L(sec.body, lang)}</p>

              {sec.rows && (
                <dl className="legal-rows">
                  {sec.rows.map((r, j) => (
                    <React.Fragment key={j}>
                      <dt className={lang === 'zh' ? 'cn' : ''}>{L(r.k, lang)}</dt>
                      <dd className={lang === 'zh' ? 'cn' : ''}>{L(r.v, lang)}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              )}

              {sec.bullets && sec.bullets.length > 0 && (
                <ul className="std-bullets" style={{ marginTop: 20 }}>
                  {sec.bullets.map((b, j) => (
                    <li key={j} className={lang === 'zh' ? 'cn' : ''}>{L(b, lang)}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>

      <p className={`std-foot ${lang === 'zh' ? 'cn' : ''}`}>{L(lg.footnote, lang)}</p>
    </section>
  );
}

function ContactPage({ lang }) {
  return (
    <section className="page wrap" data-screen-label="Contact">
      <div className={`page-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{lang === 'zh' ? '联系' : 'Contact'}</div>
      <h1 className={`page-title ${lang === 'zh' ? 'cn' : ''}`}>{lang === 'zh' ? '联系。' : 'Contact.'}</h1>
      <ContactBlock lang={lang} />
    </section>
  );
}

// =====================================================
// VISION page — founder letter
// =====================================================
function VisionPage({ lang, go }) {
  const v = LUMI.vision;
  return (
    <section className="page wrap" data-screen-label="Vision">
      <div className={`page-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{L(v.eyebrow, lang)}</div>
      <h1 className={`page-title ${lang === 'zh' ? 'cn' : ''}`}>{L(v.headline, lang)}</h1>

      <div className={`vision-body ${lang === 'zh' ? 'cn' : ''}`}>
        {v.body[lang].map((p, i) => <p key={i}>{p}</p>)}
      </div>

      <p className={`vision-sign ${lang === 'zh' ? 'cn' : ''}`}>— {L(v.sign, lang)}</p>

      <div className="vision-pillars" id="thesis">
        {v.pillars.map((p, i) => (
          <div className="vp-item" key={i}>
            <span className={`vp-k ${lang === 'zh' ? 'cn' : ''}`}>{L(p.k, lang)}</span>
            <p className={`vp-v ${lang === 'zh' ? 'cn' : ''}`}>{L(p.v, lang)}</p>
          </div>
        ))}
      </div>

      <div className="vision-cta">
        <a className="inline-link" onClick={(e) => { e.preventDefault(); go('press'); }} href="#press">
          {L(v.ctaPress, lang)} →
        </a>
        <a className="inline-link" href={`mailto:press@atelieryf.com?subject=Investor%20Brief%20Request`}>
          {L(v.ctaInvest, lang)} →
        </a>
      </div>
    </section>
  );
}

// =====================================================
// PRESS page
// =====================================================
function PressPage({ lang }) {
  const p = LUMI.press;
  return (
    <section className="page wrap" data-screen-label="Press">
      <div className={`page-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{L(p.eyebrow, lang)}</div>
      <h1 className={`page-title ${lang === 'zh' ? 'cn' : ''}`}>{L(p.headline, lang)}</h1>
      <p className={`lead ${lang === 'zh' ? 'cn' : ''}`}>{L(p.intro, lang)}</p>

      <div className="press-list" style={{ marginTop: 'clamp(48px, 8vh, 80px)' }}>
        {p.items.map((it, i) => (
          <article className="press-item" key={i}>
            <div className="press-meta">
              <div className="press-src">{it.src}</div>
              <div className={`press-kind ${lang === 'zh' ? 'cn' : ''}`}>{L(it.kind, lang)}</div>
              <div className={`press-date ${lang === 'zh' ? 'cn' : ''}`}>{L(it.date, lang)}</div>
            </div>
            <blockquote className={`press-quote ${lang === 'zh' ? 'cn' : ''}`}>{L(it.quote, lang)}</blockquote>
          </article>
        ))}
      </div>

      <div className="press-inq" id="inquiries">
        <h3 className={`press-inq-title ${lang === 'zh' ? 'cn' : ''}`}>{L(p.inquiriesTitle, lang)}</h3>
        <p className={`press-inq-body ${lang === 'zh' ? 'cn' : ''}`}>{L(p.inquiriesBody, lang)}</p>
        <a className="contact-mail" href={`mailto:${p.inquiryMail}`}>{p.inquiryMail} →</a>
      </div>
    </section>
  );
}

// =====================================================
// NEWSLETTER block (used in footer)
// =====================================================
function NewsletterBlock({ lang }) {
  const n = LUMI.newsletter;
  const [sent, setSent] = useState(false);
  const submit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <div className="newsletter wrap">
      <div className="nl-grid">
        <div>
          <div className={`nl-eyebrow ${lang === 'zh' ? 'cn' : ''}`}>{L(n.eyebrow, lang)}</div>
          <h3 className={`nl-h ${lang === 'zh' ? 'cn' : ''}`}>{L(n.headline, lang)}</h3>
          <p className={`nl-body ${lang === 'zh' ? 'cn' : ''}`}>{L(n.body, lang)}</p>
        </div>
        <div>
          {!sent ? (
            <form className="nl-form" onSubmit={submit}>
              <input
                required
                type="email"
                className={lang === 'zh' ? 'cn' : ''}
                placeholder={L(n.placeholder, lang)}
              />
              <button type="submit" className={lang === 'zh' ? 'cn' : ''}>
                {L(n.cta, lang)} →
              </button>
            </form>
          ) : (
            <p className={`nl-thanks ${lang === 'zh' ? 'cn' : ''}`}>{L(n.thanks, lang)}</p>
          )}
        </div>
      </div>
    </div>
  );
}

// =====================================================
// FOOTER
// =====================================================
function FooterBlock({ lang, go }) {
  return (
    <div className="foot-wrap">
      <NewsletterBlock lang={lang} />

      <footer className={`foot ${lang === 'zh' ? 'cn' : ''}`}>
        <div>
          <strong>Lumicome</strong>
          <p>{lang === 'zh' ? '中欧跨境创意事务所。' : 'A China–Europe cross-border creative atelier.'}</p>
          <p style={{ marginTop: 8, color: 'var(--mute)' }}>{lang === 'zh' ? '成立于 2025 · 巴黎 / 上海' : 'Established 2025 · Paris / Shanghai'}</p>
        </div>
        <div className="foot-col">
          <label className={lang === 'zh' ? 'cn' : ''}>{lang === 'zh' ? '四大分支' : 'Four Branches'}</label>
          {LUMI.nav.items.filter(it => it.id !== 'index' && it.id !== 'contact').map((it) => (
            <a key={it.id} href={`#${it.id}`} onClick={(e) => { e.preventDefault(); go(it.id); }}>
              {L(it, lang)}
            </a>
          ))}
        </div>
        <div className="foot-col">
          <label className={lang === 'zh' ? 'cn' : ''}>{lang === 'zh' ? '工作室' : 'The Studio'}</label>
          <a href="#team"   onClick={(e) => { e.preventDefault(); go('team'); }}>{lang === 'zh' ? '团队' : 'Team'}</a>
          <a href="#vision" onClick={(e) => { e.preventDefault(); go('vision'); }}>{lang === 'zh' ? '愿景 · 创始人手记' : 'Vision · Founder note'}</a>
          <a href="#press"  onClick={(e) => { e.preventDefault(); go('press'); }}>{lang === 'zh' ? '媒体与背书' : 'Press & Recognition'}</a>
          <a href="mailto:press@atelieryf.com?subject=Investor%20Brief%20Request">{lang === 'zh' ? '投资人 · 索取 Brief' : 'Investors · request brief'}</a>
        </div>
        <div className="foot-col">
          <label className={lang === 'zh' ? 'cn' : ''}>{lang === 'zh' ? '联系' : 'Get in touch'}</label>
          <a href="mailto:hello@atelieryf.com">hello@atelieryf.com</a>
          <a href="mailto:network@atelieryf.com">network@atelieryf.com</a>
          <a href="mailto:press@atelieryf.com">press@atelieryf.com</a>
          <a href="https://www.atelieryf.com" target="_blank" rel="noopener">www.atelieryf.com</a>
        </div>
      </footer>
      <div className={`foot-bottom ${lang === 'zh' ? 'cn' : ''}`}>
        <span>© 2026 Lumicome. {lang === 'zh' ? '保留所有权利。' : 'All rights reserved.'}</span>
        <span className="foot-legal">
          <a href="#legal" onClick={(e) => { e.preventDefault(); go('legal'); }}>{lang === 'zh' ? '法务信息 · Mentions légales' : 'Mentions Légales · Privacy'}</a>
          <span style={{ opacity: 0.4, margin: '0 12px' }}>·</span>
          <span>{lang === 'zh' ? '巴黎 · Île-de-France · 上海 · 静安' : 'Paris · Île-de-France · Shanghai · Jing\'an'}</span>
        </span>
      </div>
    </div>
  );
}

Object.assign(window, {
  HomePage, ArchivePage, JournalPage, CollaborativePage, ProtocolPage,
  VisionPage, PressPage, TeamPage, LegalPage,
  NewsletterBlock, ContactPage,
  ContactBlock, FooterBlock,
});
