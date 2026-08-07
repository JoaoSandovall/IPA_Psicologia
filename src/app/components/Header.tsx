import { Link } from "react-router-dom";
import { Twirl as Hamburger } from 'hamburger-react';
import ipaLogoSimple from "@/assets/logo-ipa.png";
import { Dispatch, SetStateAction } from "react"; 

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  scrolled: boolean;
  onConvenios: boolean;
  goHome: () => void;
  scrollTo: (href: string) => void;
  navLinks: Array<{ label: string; href: string; isPage: boolean; position: string }>;
}

export default function Header({
  menuOpen, setMenuOpen, scrolled, onConvenios, goHome, scrollTo, navLinks 
}: HeaderProps) {

  const isCentered = onConvenios || scrolled;

  const bgColor = menuOpen
    ? "#F7F5F1"
    : onConvenios
    ? "#161E1F"
    : scrolled
    ? "rgba(244, 241, 234, 0.95)"
    : "rgba(244, 241, 234, 0)";

  const borderColor = menuOpen
    ? "rgba(0, 0, 0, 0.05)"
    : onConvenios
    ? "rgba(255, 255, 255, 0.05)"
    : scrolled
    ? "rgba(26, 33, 24, 0.05)"
    : "rgba(26, 33, 24, 0)";

  const boxShadowValue =
    scrolled || menuOpen
      ? "0 1px 3px 0 rgba(0, 0, 0, 0.05)"
      : "0 1px 3px 0 rgba(0, 0, 0, 0)";

  const blurValue = scrolled && !onConvenios && !menuOpen ? "blur(8px)" : "blur(0px)";

  return (
    <header
        className="fixed inset-x-0 top-0 z-50 border-b will-change-transform transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-out"
        style={{
          backgroundColor: bgColor,
          borderColor: borderColor,
          boxShadow: boxShadowValue,
          backdropFilter: blurValue,
          WebkitBackdropFilter: blurValue,
        }}
      >
        <div className="flex h-20 w-full relative z-20">
          
          {/* LADO ESQUERDO DO HEADER */}
          <div className={`hidden lg:flex items-center justify-end w-1/2 pl-8 transition-all duration-700 ease-in-out ${
            isCentered ? "pr-2 xl:pr-4" : "pr-[clamp(10px,3vw,40px)]"
          }`}>
            <button onClick={goHome} className="flex items-center transition-transform active:scale-98 shrink-0 cursor-pointer">
              <img
                src={ipaLogoSimple}
                alt="IPA"
                className="h-10 xl:h-12 w-auto object-contain transition-all duration-700"
                style={{ filter: onConvenios ? "brightness(0) invert(1)" : "none", opacity: onConvenios ? 0.88 : 1 }}
              />
            </button>
            
            {/* Espaçador Dinâmico */}
            <div className="flex-1 transition-[max-width] duration-700 ease-in-out" style={{ maxWidth: isCentered ? "600px" : "clamp(40px, 4vw, 140px)" }} />

            <div className="flex items-center gap-4 xl:gap-8 shrink-0">
              {navLinks.filter(link => link.position === "left").map((link) => (
                link.isPage ? (
                  <Link key={link.href} to={link.href} className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#4A7259] hover:text-[#C97B52]"}`}>
                    {link.label}
                  </Link>
                ) : (
                  <button key={link.href} onClick={() => scrollTo(link.href)} className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#4A7259] hover:text-[#C97B52]"}`}>
                    {link.label}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* LADO DIREITO DO HEADER */}
          <div className={`hidden lg:flex items-center justify-start w-1/2 pr-8 transition-all duration-700 ease-in-out ${
            isCentered ? "pl-2 xl:pl-4" : "pl-[clamp(10px,3vw,40px)]"
          }`}>
            
            <div className="flex items-center gap-4 xl:gap-8 shrink-0">
              {navLinks.filter(link => link.position === "right").map((link) => (
                link.isPage ? (
                  <Link key={link.href} to={link.href} className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#F7F5F1] hover:text-[#C97B52]"}`}>
                    {link.label}
                  </Link>
                ) : (
                  <button key={link.href} onClick={() => scrollTo(link.href)} className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#F7F5F1] hover:text-[#C97B52]"}`}>
                    {link.label}
                  </button>
                )
              ))}
            </div>

            {/* Espaçador Dinâmico */}
            <div className="flex-1 transition-[max-width] duration-700 ease-in-out" style={{ maxWidth: isCentered ? "600px" : "clamp(40px, 4vw, 140px)" }} />

            <button
              onClick={() => scrollTo("#contato")}
              className={`px-5 xl:px-7 py-2.5 xl:py-3 text-[10px] xl:text-xs font-bold rounded-sm transition-all duration-300 uppercase tracking-widest whitespace-nowrap shrink-0 cursor-pointer ${
                isCentered ? "bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47]" : "bg-[#F7F5F1] text-[#4A7259] hover:bg-[#E5E1D9]"
              }`}
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

        {menuOpen && (
          <div className="lg:hidden w-full bg-[#F7F5F1] shadow-2xl border-t border-black/5 flex flex-col">
            <div className="py-4 px-6 flex flex-col gap-1 pb-8">
              {navLinks.map((link) => (
                link.isPage ? (
                  <Link 
                    key={link.href} 
                    to={link.href} 
                    onClick={() => setMenuOpen(false)} 
                    className={`text-left text-sm py-3.5 border-b border-border/30 tracking-wide cursor-pointer block ${
                      onConvenios && link.label === 'Convênios' ? 'font-bold text-[#4A7259]' : 'font-medium text-[#1A2118]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} 
                    className="text-left text-sm text-[#1A2118] py-3.5 border-b border-border/30 tracking-wide font-medium cursor-pointer block"
                  >
                    {link.label}
                  </a>
                )
              ))}
              <a href="#contato" onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }} className="mt-6 px-5 py-4 text-xs font-bold text-center rounded-sm uppercase tracking-widest transition-colors bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47] cursor-pointer block">
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
        
      </header>
  );
}