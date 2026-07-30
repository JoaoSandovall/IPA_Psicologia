import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ClipboardList } from "lucide-react";
import iconeWhatsapp from "@/assets/icone-whatsapp.svg";
import Hero from "../sections/Hero";
import About from "../sections/About";
import ServiceAccordion from "../sections/ServiceAccordion";
import Specialties from "../sections/Specialties";
import Team from "../sections/Team";
import Testimonials from "../sections/Testimonials";
import Location from "../sections/Location";
import Contact from "../sections/Contact";
import { stats } from "../constants";

interface HomeProps {
  scrollTo: (href: string) => void;
}

export default function Home({ scrollTo }: HomeProps) {
  const [showQuizBalloon, setShowQuizBalloon] = useState(false);

  const location = useLocation();
  const onConvenios = location.pathname === "/insurances";

  useEffect(() => {
    const sectionLocalizacao = document.getElementById("localizacao");
    
    if (!sectionLocalizacao) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setShowQuizBalloon(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    observer.observe(sectionLocalizacao);

    return () => {
      if (sectionLocalizacao) {
        observer.unobserve(sectionLocalizacao);
      }
    };
  }, []);

  return (
    <>
      {!onConvenios && (
        <main>
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

          <Testimonials />
          <About scrollTo={scrollTo} />
          <ServiceAccordion />
          <Specialties />
          <Team />
          <Location />
          <Contact />
        </main>
      )}

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
    </>
  );
}