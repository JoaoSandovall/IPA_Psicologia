// src/app/pages/Home.tsx
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Twirl as Hamburger } from 'hamburger-react';
import { ClipboardList } from "lucide-react";

import ipaLogoSimple from "@/imports/logo.png";
import iconeWhatsapp from "@/imports/iconewhatsapp.svg";

import Hero from "../sections/Hero";
import Sobre from "../sections/Sobre";
import ServicoAccordion from "../sections/ServicoAccordion";
import Especialidades from "../sections/Especialidades";
import Equipe from "../sections/Equipe";
import Depoimentos from "../sections/Depoimentos";
import Localizacao from "../sections/Localizacao";
import Contato from "../sections/Contato";
import ConveniosSection from "../sections/ConveniosSection";
import Footer from "../sections/Footer";

// Importando os dados que separamos
import { navLinks, stats } from "../constants";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQuizBalloon] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const onConvenios = location.pathname === "/convenios";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => {
    setMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goConvenios = () => {
    setMenuOpen(false);
    navigate("/convenios");
    window.scrollTo({ top: 0 });
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (onConvenios) {
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const navBg = onConvenios
    ? "bg-[#161E1F] border-b border-white/5"
    : scrolled
    ? "bg-[#F4F1EA]/95 backdrop-blur-md shadow-sm border-b border-[#1A2118]/5"
    : "bg-transparent";

  return (
    <div className="relative w-full overflow-x-hidden bg-[#F4F1EA]">
      {/* NAV BAR HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 will-change-transform ${menuOpen ? "bg-[#F7F5F1]" : navBg}`}
        style={{ boxShadow: scrolled || menuOpen ? "0 1px 3px 0 rgba(0, 0, 0, 0.05)" : "none" }}
      >
        <div className="flex h-20 w-full relative z-20">
          
          {/* LADO ESQUERDO DESKTOP */}
          <div className="hidden lg:flex items-center justify-end w-1/2 pl-8 pr-[clamp(10px,3vw,40px)] gap-10 xl:gap-35">
            <button onClick={goHome} className="flex items-center transition-transform active:scale-98 shrink-0 cursor-pointer">
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
                  className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#4A7259] hover:text-[#C97B52]"}`}
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/quiz"
                className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#4A7259] hover:text-[#C97B52]"}`}
              >
                Autoavaliação
              </Link>
            </div>
          </div>

          {/* LADO DIREITO DESKTOP */}
          <div className="hidden lg:flex items-center justify-start w-1/2 pl-[clamp(10px,3vw,40px)] pr-8 gap-10 xl:gap-35">
            <div className="flex items-center gap-4 xl:gap-8 shrink-0">
              {navLinks.slice(3).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-200 whitespace-nowrap cursor-pointer ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#F7F5F1] hover:text-[#C97B52]"}`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={goConvenios}
                className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase transition-colors duration-200 whitespace-nowrap cursor-pointer ${onConvenios ? "text-[#8BBDA0] font-bold" : scrolled ? "text-[#1A2118] font-semibold hover:text-[#C97B52]" : "text-[#F7F5F1] font-semibold hover:text-[#C97B52]"}`}
              >
                Convênios
              </button>
            </div>
            <button
              onClick={() => scrollTo("#contato")}
              className={`px-5 xl:px-7 py-2.5 xl:py-3 text-[10px] xl:text-xs font-bold rounded-sm transition-all duration-200 uppercase tracking-widest whitespace-nowrap shrink-0 cursor-pointer ${onConvenios || scrolled ? "bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47]" : "bg-[#F7F5F1] text-[#4A7259] hover:bg-[#E5E1D9]"}`}
            >
              Agendar Consulta
            </button>
          </div>

          {/* MOBILE HEADER */}
          <div className="lg:hidden flex items-center justify-between w-full px-6">
            <button onClick={goHome} className="flex items-center cursor-pointer">
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

        {/* MENU MOBILE EXPANDIDO (GAVETA) */}
        {menuOpen && (
          <div className="lg:hidden w-full bg-[#F7F5F1] shadow-2xl border-t border-black/5 flex flex-col">
            <div className="py-4 px-6 flex flex-col gap-1 pb-8">
              {navLinks.map((link) => (
                <button key={link.href} onClick={() => scrollTo(link.href)} className="text-left text-sm text-[#1A2118] py-3.5 border-b border-border/30 tracking-wide font-medium cursor-pointer">
                  {link.label}
                </button>
              ))}
              <Link
                to="/quiz"
                onClick={() => setMenuOpen(false)}
                className="text-left text-sm text-[#1A2118] py-3.5 border-b border-border/30 tracking-wide font-medium cursor-pointer"
              >
                Autoavaliação
              </Link>
              <button onClick={goConvenios} className="text-left text-sm py-3.5 border-b border-border/30 font-bold cursor-pointer" style={{ color: "#4A7259" }}>
                Convênios
              </button>
              <button onClick={() => scrollTo("#contato")} className="mt-6 px-5 py-4 text-xs font-bold text-center rounded-sm uppercase tracking-widest transition-colors bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47] cursor-pointer">
                Agendar Consulta
              </button>
            </div>
          </div>
        )}
      </header>

      {/* CONVÊNIOS OU HOME */}
      {onConvenios && (
        <ConveniosSection onBack={goHome} />
      )}
      {!onConvenios && (
        <>
          <Hero scrollTo={scrollTo} />
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

      {/* BOTÕES FLUTUANTES */}
      <Link
        to="/quiz"
        className={`flex fixed bottom-6 left-4 md:bottom-8 md:left-6 z-50 items-center gap-3 bg-white border border-[#E6E2D8] shadow-xl shadow-[#4A7259]/10 px-3.5 py-2.5 md:px-4 md:py-3 rounded-2xl rounded-bl-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#4A7259]/20 group cursor-pointer ${
          showQuizBalloon ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C97B52] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#C97B52]"></span>
        </span>
        <div className="bg-[#4A7259] p-2 md:p-2.5 rounded-full text-[#F7F5F1] group-hover:scale-110 transition-transform duration-300">
          <ClipboardList className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        <div className="flex flex-col pr-1 md:pr-2">
          <span
            className="text-[9px] md:text-[10px] uppercase tracking-wider text-[#4A7259] font-bold leading-none mb-1"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Autoavaliação
          </span>
          <span
            className="text-xs md:text-sm text-[#1A2118] font-medium leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Como você está?
          </span>
        </div>
      </Link>
      
      <a
        href="https://wa.me/5561992576460?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-8 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-[0_8px_20px_rgba(37,211,102,0.4)] transition-transform active:scale-90 animate-fade-in-up cursor-pointer"
        aria-label="Agendar pelo WhatsApp"
      >
        <img
          src={iconeWhatsapp}
          alt="WhatsApp"
          className="w-8 h-8"
          style={{ filter: "brightness(0) invert(1)" }}
        />
      </a>
    </div>
  );
}