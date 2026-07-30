import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "../sections/Footer";
import { navLinks } from "../constants";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  const onConvenios = location.pathname === "/insurances";
  const isQuiz = location.pathname === "/quiz";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
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
      <Header 
        menuOpen={menuOpen} 
        setMenuOpen={setMenuOpen} 
        scrolled={scrolled} 
        onConvenios={onConvenios}
        goHome={goHome}
        scrollTo={scrollTo}
        navLinks={navLinks}
      />

      <main>
        {children}
      </main>

      {!onConvenios && (
        <Footer navLinks={navLinks} scrollTo={scrollTo} />
      )}
    </div>
  );
}