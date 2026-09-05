import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { navLinks } from "../constants";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const onConvenios = location.pathname === "/insurances";
  const isQuiz = location.pathname === "/quiz";

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goHome = () => {
    setMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };  

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const targetId = href.replace("#", "");
    
    if (onConvenios || isQuiz) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
      return;
    }
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (isQuiz) {
    return <>{children}</>;
  }

  return (
    <div className="relative w-full overflow-x-hidden bg-[#F4F1EA]">
      {/* Link de pular para o conteúdo escondido visualmente, visível apenas no foco do teclado */}
      <a 
        href="#conteudo-principal" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-5 focus:py-3 focus:bg-[#4A7259] focus:text-[#F7F5F1] focus:rounded-sm focus:font-bold focus:outline-none focus:ring-2 focus:ring-[#C97B52] focus:ring-offset-2 focus:tracking-widest focus:uppercase focus:text-xs"
      >
        Pular para o conteúdo principal
      </a>

      <Header
         menuOpen={menuOpen}
         setMenuOpen={setMenuOpen}
         scrolled={scrolled}
         onConvenios={onConvenios}
        goHome={goHome}
        scrollTo={scrollTo}
        navLinks={navLinks}
      />
      
      <main id="conteudo-principal">
        {children}
      </main>
      
      {!onConvenios && (
        <Footer navLinks={navLinks} scrollTo={scrollTo} />
      )}
    </div>
  );
}