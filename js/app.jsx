// app.jsx
// (useState / useEffect / useRef already destructured from React in sections.jsx;
// re-declaring here would clash once both files are concatenated into bundle.js.)

function getPageFromHash() {
  const h = (window.location.hash || '#index').replace(/^#\/?/, '');
  const valid = ['index', 'archive', 'journal', 'collaborative', 'protocol', 'vision', 'press', 'team', 'legal', 'contact'];
  return valid.includes(h) ? h : 'index';
}

// =====================================================
// HEADER — sticky, hides on scroll down, shows on scroll up
// =====================================================
function Header({ lang, setLang, page, go }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - lastY.current) < 8) return;
      if (y > 80 && y > lastY.current) setHidden(true);
      else setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${hidden ? 'is-hidden' : ''}`}>
      <a href="#index" onClick={(e) => { e.preventDefault(); go('index'); }} className="brand">Lumicome</a>

      <nav className="nav-mid">
        {LUMI.nav.items.filter(n => n.id !== 'index').map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            onClick={(e) => { e.preventDefault(); go(n.id); }}
            className={`nav-link ${lang === 'zh' ? 'cn' : ''} ${page === n.id ? 'is-active' : ''}`}
          >
            {n[lang === 'zh' ? 'zh' : 'en']}
          </a>
        ))}
      </nav>

      <div className="lang-toggle">
        <button className={lang === 'zh' ? 'is-active' : ''} onClick={() => setLang('zh')}>中文</button>
        <span className="sep">/</span>
        <button className={lang === 'en' ? 'is-active' : ''} onClick={() => setLang('en')}>EN</button>
      </div>
    </header>
  );
}

// =====================================================
// APP
// =====================================================
function App() {
  const defaults = window.LUMI_TWEAKS_DEFAULTS;
  const [t, setTweak] = useTweaks(defaults);
  const [lang, setLang] = useState(() => localStorage.getItem('lumi-lang') || 'zh');
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => { document.body.dataset.palette = t.palette || 'paper'; }, [t.palette]);
  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    localStorage.setItem('lumi-lang', lang);
  }, [lang]);

  useEffect(() => {
    const onHash = () => setPage(getPageFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [page]);

  const go = (id) => {
    window.location.hash = id === 'index' ? '' : '#' + id;
    setPage(id);
  };

  let body;
  switch (page) {
    case 'archive':       body = <ArchivePage       lang={lang} />;        break;
    case 'journal':       body = <JournalPage       lang={lang} />;        break;
    case 'collaborative': body = <CollaborativePage lang={lang} go={go} />;break;
    case 'protocol':      body = <ProtocolPage      lang={lang} />;        break;
    case 'vision':        body = <VisionPage        lang={lang} go={go} />;break;
    case 'press':         body = <PressPage         lang={lang} />;        break;
    case 'team':          body = <TeamPage          lang={lang} />;        break;
    case 'legal':         body = <LegalPage         lang={lang} />;        break;
    case 'contact':       body = <ContactPage       lang={lang} />;        break;
    default:              body = <HomePage          lang={lang} go={go} />;
  }

  return (
    <React.Fragment>
      <Header lang={lang} setLang={setLang} page={page} go={go} />
      <main>{body}</main>
      <FooterBlock lang={lang} go={go} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Palette"
          value={t.palette}
          options={[
            { value: 'paper',   label: 'White' },
            { value: 'atelier', label: 'Cream' },
            { value: 'night',   label: 'Night' },
          ]}
          onChange={(v) => setTweak('palette', v)}
        />
        <TweakSection label="Language" />
        <TweakRadio
          label="Language"
          value={lang}
          options={[
            { value: 'zh', label: '中文' },
            { value: 'en', label: 'EN' },
          ]}
          onChange={setLang}
        />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
