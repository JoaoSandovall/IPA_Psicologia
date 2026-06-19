import { useState, useEffect } from "react";
import ipaLogoSimple from "@/imports/logo.png";
import { X, Menu } from 'lucide-react';
import Hero from "./sections/Hero";
import Sobre from "./sections/Sobre";
import Especialidades from "./sections/Especialidades";
import Equipe from "./sections/Equipe";
import Depoimentos from "./sections/Depoimentos";
import Localizacao from "./sections/Localizacao";
import Contato from "./sections/Contato";
import ConveniosSection from "./sections/ConveniosSection";
import Footer from "./sections/Footer";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const stats = [
  { value: "7", label: "Psicólogos especialistas" },
  { value: "32", label: "Convênios aceitos" },
  { value: "4.9 ★", label: "Avaliação no Google" },
  { value: "Online", label: "e presencial" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState<"home" | "convenios">("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => {
    setPage("home");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goConvenios = () => {
    setPage("convenios");
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (page === "convenios") {
      setPage("home");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onConvenios = page === "convenios";
  const navBg = onConvenios
    ? "bg-[#161E1F] border-b border-white/5"
    : scrolled
    ? "bg-[#F4F1EA]/95 backdrop-blur-md shadow-sm border-b border-[#1A2118]/5"
    : "bg-transparent";

  return (
    <div className="relative w-full overflow-x-hidden bg-[#F4F1EA]">
      {/* ── NAV BAR HEADER ── */}
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 will-change-transform ${navBg}`}
        style={{ boxShadow: scrolled ? "0 1px 3px 0 rgba(0, 0, 0, 0.05)" : "none" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex h-20 w-full">
          <div className="hidden lg:flex items-center justify-between lg:w-[52%] pr-12">
            <button onClick={goHome} className="flex items-center transition-transform active:scale-98">
              <img
                src={ipaLogoSimple}
                alt="IPA — Instituto de Psicologia Aplicada"
                style={{ height: 48, width: "auto", objectFit: "contain", filter: onConvenios ? "brightness(0) invert(1)" : "none", opacity: onConvenios ? 0.88 : 1 }}
              />
            </button>
            <div className="flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#4A7259] hover:text-[#C97B52]"}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-end lg:w-[48%] gap-8">
            {navLinks.slice(3).map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#F7F5F1] hover:text-[#C97B52]"}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={goConvenios}
              className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${onConvenios ? "text-[#8BBDA0] font-semibold" : scrolled ? "text-[#1A2118] font-medium hover:text-[#C97B52]" : "text-[#F7F5F1] font-medium hover:text-[#C97B52]"}`}
            >
              Convênios
            </button>
            <button
              onClick={() => scrollTo("#contato")}
              className={`px-6 py-3 text-xs font-semibold rounded-sm transition-all duration-200 uppercase tracking-wider ${onConvenios || scrolled ? "bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47]" : "bg-[#F7F5F1] text-[#4A7259] hover:bg-[#E5E1D9]"}`}
              style={{ letterSpacing: "0.06em" }}
            >
              Agendar Consulta
            </button>
          </div>

          <div className="lg:hidden flex items-center justify-between w-full">
            <button onClick={goHome} className="flex items-center">
              <img src={ipaLogoSimple} alt="IPA" style={{ height: 48, width: "auto", objectFit: "contain", filter: onConvenios ? "brightness(0) invert(1)" : "none" }} />
            </button>
            <button className="p-2 transition-colors" onClick={() => setMenuOpen(!menuOpen)} style={{ color: onConvenios ? "#C8D8C2" : "#1A2118" }}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-[#F7F5F1] border-t border-border/40 py-6 px-6 flex flex-col gap-3 shadow-inner">
            {navLinks.map((link) => (
              <button key={link.href} onClick={() => scrollTo(link.href)} className="text-left text-sm text-[#1A2118] py-2.5 border-b border-border/30 tracking-wide">
                {link.label}
              </button>
            ))}
            <button onClick={goConvenios} className="text-left text-sm py-2.5 border-b border-border/30 font-semibold" style={{ color: "#4A7259" }}>
              Convênios
            </button>
            <button onClick={() => scrollTo("#contato")} className="mt-3 px-5 py-3.5 text-xs font-semibold text-center rounded-sm uppercase tracking-wider bg-[#4A7259] text-[#F7F5F1]">
              Agendar Consulta
            </button>
          </div>
        )}
      </header>

      {/* ── SEÇÃO CONVÊNIOS COMPLETA ── */}
      {page === "convenios" && (
        <ConveniosSection
          onBack={goHome}
          onGoContact={() => {
            goHome();
            setTimeout(() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" }), 120);
          }}
        />
      )}

      {page === "home" && (
        <>
          {/* ── 1. HERO/TOPO ── */}
          <Hero scrollTo={scrollTo} />

          {/* ── 2. PAINEL DE MÉTRICAS (STATS) ── */}
          <div style={{ background: "#4A7259" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/20">
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center text-center px-6">
                  <span className="text-3xl lg:text-4xl font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#C8D8C2" }}>
                    {s.value}
                  </span>
                  <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(200,216,194,0.6)" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── 3. AVALIAÇÕES CARROSSEL INFINITO ── */}
          <Depoimentos />

          {/* ── 4. SOBRE O IPA ── */}
          <Sobre scrollTo={scrollTo} />

          {/* ── 5. POR QUE NOS ESCOLHER (ESPECIALIDADES) ── */}
          <Especialidades />

          {/* ── 6. EQUIPE DE PSICÓLOGOS ── */}
          <Equipe />

          {/* ── 7. MAPA E CONTATOS (LOCALIZAÇÃO) ── */}
          <Localizacao />

          {/* ── 8. FORMULÁRIO DE AGENDAMENTO ── */}
          <Contato />

          {/* ── 9. RODAPÉ DE PÁGINA (FOOTER) ── */}
          <Footer navLinks={navLinks} goConvenios={goConvenios} scrollTo={scrollTo} />
        </>
      )}
    </div>
  );
}