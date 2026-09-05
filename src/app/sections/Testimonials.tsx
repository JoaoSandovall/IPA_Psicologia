import { useState } from "react";
import { Star, Pause, Play } from "lucide-react";
import SectionTitle from '../components/SectionTitle';
import { avaliacoesGoogle, linkGoogleMaps } from './testimonialsData';

export default function Depoimentos() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="depoimentos" style={{ background: "#F4F1EA" }} className="py-12 lg:py-16 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10 lg:mb-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 lg:mb-0">
          <SectionTitle subtitle="Avaliações do Google">
            O que dizem sobre <br />
            o nosso <em className="italic text-[#C97B52]">acolhimento</em>
          </SectionTitle>
            
          <div className="flex items-center justify-center lg:justify-end gap-3 mb-2">
            <span className="text-2xl font-bold" style={{ color: "#1A2118" }}>4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#FBBC04" color="#FBBC04" />
              ))}
            </div>
            <span className="text-sm" style={{ color: "#4A5848", fontWeight: 400 }}>
              (+30 Avaliações 5 Estrelas)
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-r from-[#F4F1EA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-l from-[#F4F1EA] to-transparent z-10 pointer-events-none" />

        <div 
  className="flex w-max animate-marquee justify-center"
  style={{ animationPlayState: isPaused ? 'paused' : undefined }}
        >
          <div className="flex gap-5 pr-5">
            {avaliacoesGoogle.map((item) => (
              <a
                key={`grp1-${item.id}`}
                href={linkGoogleMaps}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                className="flex flex-col shrink-0 w-[85vw] max-w-[340px] bg-white p-7 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                <div className="flex items-center gap-3.5 mb-4 pointer-events-none">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#4A7259" }}>
                    <span className="text-white font-medium text-lg">{item.nome.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">{item.nome}</p>
                    <p className="text-[13px] text-gray-500 mt-0.5 font-medium">{item.tempo}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4 pointer-events-none">
                  {[...Array(item.nota)].map((_, i) => <Star key={i} size={15} fill="#FBBC04" color="#FBBC04" />)}
                </div>
                <p className="text-sm leading-relaxed text-gray-700 pointer-events-none">{item.texto}</p>
              </a>
            ))}
          </div>

          <div className="flex gap-5 pr-5" aria-hidden="true">
            {avaliacoesGoogle.map((item) => (
              <a
                key={`grp2-${item.id}`}
                href={linkGoogleMaps}
                target="_blank"
                rel="noopener noreferrer"
                draggable={false}
                tabIndex={-1}
                className="flex flex-col shrink-0 w-[85vw] max-w-[340px] bg-white p-7 rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-black/5 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] cursor-pointer"
              >
                <div className="flex items-center gap-3.5 mb-4 pointer-events-none">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#4A7259" }}>
                    <span className="text-white font-medium text-lg">{item.nome.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-tight">{item.nome}</p>
                    <p className="text-[13px] text-gray-500 mt-0.5 font-medium">{item.tempo}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-4 pointer-events-none">
                  {[...Array(item.nota)].map((_, i) => <Star key={i} size={15} fill="#FBBC04" color="#FBBC04" />)}
                </div>
                <p className="text-sm leading-relaxed text-gray-700 pointer-events-none">{item.texto}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Controles de Acessibilidade do Marquee */}
      <div className="flex justify-center mt-6 lg:mt-8 relative z-20">
        <button
          onClick={() => setIsPaused(!isPaused)}
          aria-label={isPaused ? "Retomar rolagem dos depoimentos" : "Pausar rolagem dos depoimentos"}
          className="flex items-center gap-2 px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-widest rounded-full border transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4A7259]"
          style={{ borderColor: "rgba(26,33,24,0.1)", color: "#4A5848" }}
        >
          {isPaused ? <Play size={14} /> : <Pause size={14} />}
          <span className="mt-0.5">{isPaused ? "Retomar" : "Pausar"}</span>
        </button>
      </div>

    </section>
  );
}