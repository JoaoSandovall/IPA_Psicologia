import { ChevronRight } from "lucide-react";

interface ConveniosCTAProps {
  goConvenios: () => void;
}

export default function ConveniosCTA({ goConvenios }: ConveniosCTAProps) {
  return (
    <section 
      className="py-24 lg:py-32 relative overflow-hidden flex flex-col items-center border-t border-b"
      style={{ background: "#F4F1EA", borderColor: "rgba(26,33,24,0.06)" }}
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center relative z-10">
        
        {/* Subtítulo no padrão do site */}
        <p className="text-xs tracking-[0.25em] uppercase mb-6 font-semibold" style={{ color: "#4A7259" }}>
          Facilidade e Acesso
        </p>
        
        <h2 
          className="font-semibold leading-tight mb-2" 
          style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118", fontSize: "clamp(2rem, 4vw, 2.5rem)" }}
        >
          Você sabia que também aceitamos
        </h2>
        
        {/* Palavra Aclamada */}
        <div className="mb-10 relative">
          <em 
            className="block font-bold italic"
            style={{ 
              fontFamily: "'Playfair Display', serif", 
              color: "#C97B52", 
              fontSize: "clamp(4rem, 10vw, 7rem)", 
              lineHeight: 1.1,
              textShadow: "0 10px 30px rgba(201,123,82,0.15)"
            }}
          >
            Convênios?
          </em>
        </div>

        <p className="text-sm lg:text-base leading-relaxed mb-10 max-w-2xl" style={{ color: "#4A5848", fontWeight: 300 }}>
          Atendemos dezenas de planos de saúde, incluindo CASSI, TRT, Polícia Federal, Saúde Caixa, STF e muitos outros. Nosso objetivo é garantir que o seu cuidado psicológico seja acessível e contínuo.
        </p>
        
        {/* Botão no padrão principal */}
        <button
          onClick={goConvenios}
          className="inline-flex items-center justify-center gap-3 px-10 py-5 text-sm font-semibold uppercase tracking-widest rounded-sm transition-all duration-300"
          style={{ background: "#4A7259", color: "#F7F5F1" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#3A5E47";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 25px -5px rgba(74, 114, 89, 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#4A7259";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          Ver lista completa de planos
          <ChevronRight size={18} />
        </button>
      </div>

      <div 
        className="absolute w-[600px] h-[600px] rounded-full border border-black/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" 
      />
    </section>
  );
}