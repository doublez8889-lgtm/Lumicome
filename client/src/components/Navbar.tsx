/*
 * ATELIER LUMICOME — Navbar Component
 * Style: Cream Editorial — warm ivory base, dark ink typography
 * Aesthetic: High-fashion magazine masthead energy
 */

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Menu, X } from "lucide-react";

const navItems = [
  { en: "Projects", zh: "项目", href: "/projects" },
  { en: "Services", zh: "服务", href: "/services" },
  { en: "Editorial", zh: "编辑室", href: "/editorial" },
  { en: "Team", zh: "团队", href: "/team" },
  { en: "About", zh: "关于", href: "/about" },
  { en: "Network", zh: "协作网络", href: "/network" },
  { en: "Protocol", zh: "工作标准", href: "/protocol" },
  { en: "Contact", zh: "联系", href: "/contact" },
];

export default function Navbar() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isActive = (href: string) => location === href;

  return (
    <>
      {/* ── Top Nav Bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled
            ? "rgba(247, 244, 239, 0.97)"
            : "rgba(247, 244, 239, 0.88)",
          borderBottom: scrolled
            ? "1px solid rgba(30, 25, 20, 0.10)"
            : "1px solid transparent",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div className="container flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            className="block shrink-0 transition-opacity duration-300 hover:opacity-60"
            aria-label="Lumicome"
          >
            <img
              src="/images/lumicome-logo-dark.png"
              alt="Lumicome"
              className="h-auto w-[132px] sm:w-[150px]"
              width="887"
              height="257"
              decoding="async"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-5 lg:gap-8 xl:gap-10">
            {navItems.map((item) => (
              <a
                key={item.en}
                href={item.href}
                className="font-body transition-all duration-300"
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.20em",
                  textTransform: "uppercase",
                  color: isActive(item.href)
                    ? "#1a1510"
                    : "#7a6f65",
                  borderBottom: isActive(item.href) ? "1px solid #1a1510" : "1px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#1a1510";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = isActive(item.href) ? "#1a1510" : "#7a6f65";
                }}
              >
                {lang === "en" ? item.en : item.zh}
              </a>
            ))}
          </div>

          {/* Right side: language toggle + hamburger */}
          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <div
              className="flex items-center gap-2 font-body"
              style={{ fontSize: "0.58rem", letterSpacing: "0.16em" }}
            >
              <button
                onClick={() => setLang("en")}
                className="min-h-11 min-w-10 transition-colors duration-300 px-2"
                style={{
                  color: lang === "en" ? "#1a1510" : "#b0a898",
                  fontWeight: lang === "en" ? 500 : 400,
                }}
              >
                EN
              </button>
              <span style={{ color: "#c8bfb4" }}>/</span>
              <button
                onClick={() => setLang("zh")}
                className="min-h-11 min-w-10 transition-colors duration-300 px-2"
                style={{
                  color: lang === "zh" ? "#1a1510" : "#b0a898",
                  fontWeight: lang === "zh" ? 500 : 400,
                }}
              >
                中文
              </button>
            </div>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden min-h-11 min-w-11 flex items-center justify-center transition-opacity duration-300 hover:opacity-50"
              style={{ color: "#1a1510" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Full-Screen Menu Overlay ── */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden flex flex-col pt-20"
          style={{ backgroundColor: "#F7F4EF" }}
        >
          <div className="container py-10 flex flex-col gap-5">
            {navItems.map((item, i) => (
              <a
                key={item.en}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display py-2 transition-opacity duration-300 hover:opacity-50"
                style={{
                  fontSize: "clamp(1.2rem, 4.5vw, 1.8rem)",
                  letterSpacing: "0.02em",
                  fontWeight: isActive(item.href) ? 500 : 300,
                  fontStyle: "normal",
                  color: isActive(item.href) ? "#1a1510" : "#8a7f74",
                  lineHeight: 1.15,
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {lang === "en" ? item.en : item.zh}
              </a>
            ))}
          </div>
          <div className="container pb-12 mt-auto">
            <p
              className="font-body"
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.20em",
                color: "#b0a898",
                textTransform: "uppercase",
              }}
            >
              Atelier Lumicome — Paris / Shanghai
            </p>
          </div>
        </div>
      )}
    </>
  );
}
