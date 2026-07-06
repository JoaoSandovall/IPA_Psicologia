import { useState, useEffect } from "react";
import ipaLogoSimple from "@/imports/logo.png";
import iconeWhatsapp from "@/imports/iconewhatsapp.svg";
import { Twirl as Hamburger } from 'hamburger-react';
import Hero from "./sections/Hero";
import Sobre from "./sections/Sobre";
import ServicoAccordion from "./sections/ServicoAccordion";
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
        // LÓGICA CORRIGIDA: Se o menu abrir, força o fundo a ficar Creme para o texto não sumir
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 will-change-transform ${menuOpen ? "bg-[#F7F5F1]" : navBg}`}
        style={{ boxShadow: scrolled || menuOpen ? "0 1px 3px 0 rgba(0, 0, 0, 0.05)" : "none" }}
      >
        <div className="flex h-20 w-full relative z-20">
          
          {/* LADO ESQUERDO DESKTOP */}
          <div className="hidden lg:flex items-center justify-end w-1/2 pl-8 pr-[clamp(10px,3vw,40px)] gap-10 xl:gap-35">
            <button onClick={goHome} className="flex items-center transition-transform active:scale-98 shrink-0">
              <img
                src={ipaLogoSimple}
                alt="IPA"
                className="h-10 xl:h-12 w-auto object-contain"
                style={{ filter: onConvenios ? "brightness(0) invert(1)" : "none", opacity: onConvenios ? 0.88 : 1 }}
              />
            </button>
            
            <div className="flex items-center gap-4 xl:gap-8 shrink-0">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-200 whitespace-nowrap ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#4A7259] hover:text-[#C97B52]"}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* LADO DIREITO DESKTOP */}
          <div className="hidden lg:flex items-center justify-start w-1/2 pl-[clamp(10px,3vw,40px)] pr-8 gap-10 xl:gap-35">
            <div className="flex items-center gap-4 xl:gap-8 shrink-0">
              {navLinks.slice(3).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-200 whitespace-nowrap ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#F7F5F1] hover:text-[#C97B52]"}`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={goConvenios}
                className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase transition-colors duration-200 whitespace-nowrap ${onConvenios ? "text-[#8BBDA0] font-bold" : scrolled ? "text-[#1A2118] font-semibold hover:text-[#C97B52]" : "text-[#F7F5F1] font-semibold hover:text-[#C97B52]"}`}
              >
                Convênios
              </button>
            </div>
            
            <button
              onClick={() => scrollTo("#contato")}
              className={`px-5 xl:px-7 py-2.5 xl:py-3 text-[10px] xl:text-xs font-bold rounded-sm transition-all duration-200 uppercase tracking-widest whitespace-nowrap shrink-0 ${onConvenios || scrolled ? "bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47]" : "bg-[#F7F5F1] text-[#4A7259] hover:bg-[#E5E1D9]"}`}
            >
              Agendar Consulta
            </button>
          </div>

          <div className="lg:hidden flex items-center justify-between w-full px-6">
            <button onClick={goHome} className="flex items-center">
              <img 
                src={ipaLogoSimple} 
                alt="IPA" 
                className="h-10 w-auto object-contain transition-all duration-300" 
                style={{ 
                  filter: !menuOpen && (!scrolled || onConvenios) ? "brightness(0) invert(1)" : "none",
                  opacity: !menuOpen && (!scrolled || onConvenios) ? 0.9 : 1
                }} 
              />
            </button>
            <div className="relative z-20 -mr-3">
              <Hamburger 
                toggled={menuOpen} 
                toggle={setMenuOpen} 
                size={26} 
                duration={0.4}
                color={menuOpen || (scrolled && !onConvenios) ? "#1A2118" : "#F7F5F1"} 
              />
            </div>
          </div>
        </div>

        {/* ── MENU MOBILE EXPANDIDO (GAVETA) ── */}
        {menuOpen && (
          <div className="lg:hidden w-full bg-[#F7F5F1] shadow-2xl border-t border-black/5 flex flex-col">
            <div className="py-4 px-6 flex flex-col gap-1 pb-8">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)} className="text-left text-sm text-[#1A2118] py-3.5 border-b border-border/30 tracking-wide font-medium">
                  {link.label}
                </button>
              ))}
              <button onClick={goConvenios} className="text-left text-sm py-3.5 border-b border-border/30 font-bold" style={{ color: "#4A7259" }}>
                Convênios
              </button>
              <button onClick={() => scrollTo("#contato")} className="mt-6 px-5 py-4 text-xs font-bold text-center rounded-sm uppercase tracking-widest transition-colors bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47]">
                Agendar Consulta
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ── SEÇÃO CONVÊNIOS COMPLETA ── */}
      {page === "convenios" && (
        <ConveniosSection onBack={goHome} />
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

          <Depoimentos />

          <Sobre scrollTo={scrollTo} />

          <ServicoAccordion />

          <Especialidades />
        
          <Equipe />

          <Localizacao />

          <Contato />

          <Footer navLinks={navLinks} goConvenios={goConvenios} scrollTo={scrollTo} />
        </>
      )}
      <a
        href="https://wa.me/5561992576460?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
        target="_blank"
        rel="noopener noreferrer"

        className="lg:hidden fixed bottom-8 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.4)] transition-transform active:scale-90 animate-fade-in-up"
        aria-label="Agendar pelo WhatsApp"
      >
        <img 
          src={iconeWhatsapp} 
          alt="WhatsApp" 
          className="w-8 h-8"
          style={{ filter: "brightness(0) invert(1)" }} // Força o SVG a ficar 100% branco para contrastar com o fundo verde
        />
      </a>
    </div>
  );
}