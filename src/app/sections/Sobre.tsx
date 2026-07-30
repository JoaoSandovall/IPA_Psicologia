import clinicaPhoto from "@/assets/foto-clinica.png";
import { ChevronRight } from "lucide-react";
import SectionTitle from '../components/SectionTitle';

interface SobreProps {
  scrollTo: (href: string) => void;
}

export default function Sobre({ scrollTo }: SobreProps) {
  return (
    <section id="sobre" className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>

          <SectionTitle subtitle="Sobre o IPA" className="mb-8 md:mb-10">
            Um lugar onde você <br />
            <em className="italic text-[#C97B52]">se sente seguro</em> para <br />
            ser quem você é.
          </SectionTitle>

          <div 
            className="space-y-6 text-base md:text-lg leading-relaxed md:leading-loose text-justify sm:text-left" 
            style={{ color: "#4A5848", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            <p>
              O IPA nasceu de um sonho de mulheres empreendedoras, estudiosas e que sempre tiveram em sua história a valorização do ser humano. O IPA trata-se de um instituto diferenciado, pois a justificativa de nossa existência é o ser humano em sua totalidade. Tanto valorizamos os nossos clientes como nossos profissionais, e temos um ambiente que entrega resultados.
            </p>
            <p>
              Em nosso ambiente de trabalho, apoiado na valorização da pessoa e com base científica, levamos nossos clientes à possibilidade de viverem a experiência de cura, de bem-estar e de consciência do seu estado atual e do estado desejado, conferindo ações, produtividade e realização.
            </p>
            <p>
              Atendemos a partir de 2 anos de idade, oferecemos palestras, treinamentos e encontros com os mais diversos grupos.
            </p>
          </div>

          <button
            onClick={() => scrollTo("#equipe")}
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-200"
            style={{ color: "#4A7259" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C97B52")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#4A7259")}
          >
            Conheça nossa equipe <ChevronRight size={16} />
          </button>
        </div>

        <div className="relative mt-8 lg:mt-0">
          
          {/* BALÃO FLUTUANTE DE EXPERIÊNCIA (AGORA MAIS COMPACTO E ELEGANTE) */}
          <div className="absolute bottom-10 md:bottom-12 -left-3 md:-left-8 lg:-left-12 z-20 bg-white py-3 px-5 md:py-4 md:px-6 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-black/5 flex items-center gap-4 md:gap-5">
            
            {/* Número com o "+" estilizado no topo */}
            <div className="flex items-start text-[#4A7259]">
              <span className="text-lg md:text-xl font-medium mt-0.5 md:mt-1 mr-0.5">+</span>
              <span 
                className="text-4xl md:text-5xl font-bold tracking-tight" 
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: 0.9 }}
              >
                20
              </span>
            </div>
            
            <div className="w-px h-10 md:h-12 bg-gradient-to-b from-transparent via-[#4A7259]/30 to-transparent"></div>
          
            <div className="flex flex-col justify-center">
              <span 
                className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-[#C97B52] mb-1.5" 
                style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1 }}
              >
                Anos de
              </span>
              <span 
                className="text-sm md:text-base font-semibold text-[#1A2118]" 
                style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1 }}
              >
                Experiência Clínica
              </span>
            </div>
            
          </div>

          <div className="absolute -top-4 -left-4 w-full h-full rounded-sm" style={{ background: "#D2CEC6" }} />
          
          <div className="relative rounded-sm overflow-hidden border border-black/5">
            <img
              src={clinicaPhoto}
              alt="Sala de atendimento do Instituto de Psicologia Aplicada — IPA"
              className="w-full h-[520px] md:h-[680px] object-cover object-[center_75%]"
            />
            <div
              className="absolute top-0 left-0 right-0 px-6 py-8 md:px-8 md:py-10"
              style={{ background: "linear-gradient(to bottom, rgba(26,33,24,0.85), transparent)" }}
            >
              <p className="text-sm md:text-base lg:text-[1.05rem] font-medium italic text-[#E8EDE6] drop-shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                "O primeiro passo para mudar é decidir que não ficará igual."
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}