import { Link } from "react-router-dom";
import { Twirl as Hamburger } from 'hamburger-react';
import ipaLogoSimple from "@/assets/logo.png";
import { Dispatch, SetStateAction } from "react"; 

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  scrolled: boolean;
  onConvenios: boolean;
  goHome: () => void;
  goConvenios: () => void;
  scrollTo: (href: string) => void;
  navLinks: Array<{ label: string; href: string }>;
}

export default function Header({
  menuOpen, setMenuOpen, scrolled, onConvenios, goHome, goConvenios, scrollTo, navLinks
}: HeaderProps) {
  
  const navBg = onConvenios
    ? "bg-[#161E1F] border-b border-white/5"
    : scrolled
    ? "bg-[#F4F1EA]/95 backdrop-blur-md shadow-sm border-b border-[#1A2118]/5"
    : "bg-transparent";

  return (
    <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 will-change-transform ${menuOpen ? "bg-[#F7F5F1]" : navBg}`}
        style={{ boxShadow: scrolled || menuOpen ? "0 1px 3px 0 rgba(0, 0, 0, 0.05)" : "none" }}
      >
        <div className="flex h-20 w-full relative z-20">
          
          <div className={`hidden lg:flex items-center justify-end w-1/2 pl-8 transition-all duration-700 ease-in-out ${
            onConvenios ? "pr-2 xl:pr-4" : "pr-[clamp(10px,3vw,40px)]"
          }`}>
            <button onClick={goHome} className="flex items-center transition-transform active:scale-98 shrink-0 cursor-pointer">
              <img
                src={ipaLogoSimple}
                alt="IPA"
                className="h-10 xl:h-12 w-auto object-contain transition-all duration-700"
                style={{ filter: onConvenios ? "brightness(0) invert(1)" : "none", opacity: onConvenios ? 0.88 : 1 }}
              />
            </button>
            
            <div className={`transition-all duration-700 ease-in-out ${onConvenios ? "w-full" : "w-[40px] xl:w-[140px]"}`} />

            <div className="flex items-center gap-4 xl:gap-8 shrink-0">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                    onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#4A7259] hover:text-[#C97B52]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/quiz"
                className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#4A7259] hover:text-[#C97B52]"
                }`}
              >
                Autoavaliação
              </Link>
            </div>
          </div>

          <div className={`hidden lg:flex items-center justify-start w-1/2 pr-8 transition-all duration-700 ease-in-out ${
            onConvenios ? "pl-2 xl:pl-4" : "pl-[clamp(10px,3vw,40px)]"
          }`}>
            <div className="flex items-center gap-4 xl:gap-8 shrink-0">
              {navLinks.slice(3).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase font-semibold transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                    onConvenios ? "text-[#C8D8C2] hover:text-[#8BBDA0]" : scrolled ? "text-[#1A2118] hover:text-[#C97B52]" : "text-[#F7F5F1] hover:text-[#C97B52]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={goConvenios}
                className={`text-[10px] xl:text-xs tracking-[0.15em] uppercase transition-colors duration-300 whitespace-nowrap cursor-pointer ${
                  onConvenios ? "text-[#8BBDA0] font-bold" : scrolled ? "text-[#1A2118] font-semibold hover:text-[#C97B52]" : "text-[#F7F5F1] font-semibold hover:text-[#C97B52]"
                }`}
              >
                Convênios
              </button>
            </div>

            <div className={`transition-all duration-700 ease-in-out ${onConvenios ? "w-full" : "w-[40px] xl:w-[140px]"}`} />

            <button
              onClick={() => scrollTo("#contato")}
              className={`px-5 xl:px-7 py-2.5 xl:py-3 text-[10px] xl:text-xs font-bold rounded-sm transition-all duration-300 uppercase tracking-widest whitespace-nowrap shrink-0 cursor-pointer ${
                onConvenios || scrolled ? "bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47]" : "bg-[#F7F5F1] text-[#4A7259] hover:bg-[#E5E1D9]"
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
                <a 
                  key={link.href} 
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }} 
                  className="text-left text-sm text-[#1A2118] py-3.5 border-b border-border/30 tracking-wide font-medium cursor-pointer block"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/quiz"
                onClick={() => setMenuOpen(false)}
                className="text-left text-sm text-[#1A2118] py-3.5 border-b border-border/30 tracking-wide font-medium cursor-pointer block"
              >
                Autoavaliação
              </Link>
              <Link 
                to="/convenios"
                onClick={() => setMenuOpen(false)}
                className="text-left text-sm py-3.5 border-b border-border/30 font-bold cursor-pointer block" 
                style={{ color: "#4A7259" }}
              >
                Convênios
              </Link>
              <a 
                href="#contato"
                onClick={(e) => { e.preventDefault(); scrollTo("#contato"); }} 
                className="mt-6 px-5 py-4 text-xs font-bold text-center rounded-sm uppercase tracking-widest transition-colors bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47] cursor-pointer block"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </header>
  );
}


