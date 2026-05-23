// app.jsx — Lumicome root: header, navigation, language, page routing

function Header({ lang, setLang, page, go }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current && y > 80;
      setHidden(goingDown);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${hidden ? 'is-hidden' : ''}`}>
      <a className="brand" href="#index" onClick={(e) => { e.preventDefault(); go('index'); }}>
        Lumicome <span style={{ color: 'var(--mute)', fontSize: 11, letterSpacing: '0.18em', marginLeft: 8 }}>®</span>
      </a>

      <nav className="nav-mid">
        {LUMI.nav.items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            onClick={(e) => { e.preventDefault(); go(it.id); }}
            className={`nav-link ${lang === 'zh' ? 'cn' : ''} ${page === it.id ? 'is-active' : ''}`}
          >
            {L(it, lang)}
          </a>
        ))}
      </nav>

      <div className="lang-toggle">
        <button
          type="button"
          onClick={() => setLang('zh')}
          className={lang === 'zh' ? 'is-active' : ''}
        >中</button>
        <span className="sep">/</span>
        <button
          type="button"
          onClick={() => setLang('en')}
          className={lang === 'en' ? 'is-active' : ''}
        >EN</button>
      </div>
    </header>
  );
}

function App() {
  const [lang, setLang] = useState('zh');
  const [page, setPage] = useState('index');

  const go = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  }, [lang]);

  let body;
  switch (page) {
    case 'archive':       body = <ArchivePage lang={lang} />; break;
    case 'journal':       body = <JournalPage lang={lang} />; break;
    case 'collaborative': body = <CollaborativePage lang={lang} go={go} />; break;
    case 'protocol':      body = <ProtocolPage lang={lang} />; break;
    case 'vision':        body = <VisionPage lang={lang} go={go} />; break;
    case 'press':         body = <PressPage lang={lang} />; break;
    case 'team':          body = <TeamPage lang={lang} />; break;
    case 'legal':         body = <LegalPage lang={lang} />; break;
    case 'contact':       body = <ContactPage lang={lang} />; break;
    case 'index':
    default:              body = <HomePage lang={lang} go={go} />;
  }

  return (
    <React.Fragment>
      <Header lang={lang} setLang={setLang} page={page} go={go} />
      <main>{body}</main>
      <FooterBlock lang={lang} go={go} />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
