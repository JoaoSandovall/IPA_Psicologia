import clinicaPhoto from "@/imports/image.png";
import { ChevronRight } from "lucide-react";

interface SobreProps {
  scrollTo: (href: string) => void;
}

export default function Sobre({ scrollTo }: SobreProps) {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#4A7259" }}>
            Sobre o IPA
          </p>
          <h2
            className="text-3xl lg:text-5xl font-semibold leading-tight mb-8"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}
          >
            Um lugar onde você
            <br />
            <em style={{ color: "#C97B52" }}>se sente seguro</em> para
            <br />
            ser quem você é.
          </h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "#3A4838", fontWeight: 300 }}>
            <p className="indent-8">
              O IPA está no mercado há mais de 2 décadas, nasceu de um sonho de mulheres empreendedoras, estudiosas e que sempre tiveram em sua história a valorização do ser humano. O IPA, trata-se de um instituto diferenciado, pois, a justificativa de nossa existência é o ser humano em sua totalidade, tanto valorizamos os nossos clientes como nossos profissionais e temos um ambiente que entrega resultados.
            </p>
            <p className="indent-8">
              Em nosso ambiente de trabalho apoiado na valorização da pessoa e com base científica, levamos nossos clientes a possibilidade de viverem a experiência de cura, de bem-estar e de consciência do seu state atual e do state desejado, conferindo ações, produtividade e realização.
            </p>
            <p className="indent-8">
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

        <div className="relative">
          <div className="absolute -top-4 -left-4 w-full h-full rounded-sm" style={{ background: "#D2CEC6" }} />
          <div className="relative rounded-sm overflow-hidden">
            <img
              src={clinicaPhoto}
              alt="Sala de atendimento do Instituto de Psicologia Aplicada — IPA"
              className="w-full h-[480px] object-cover object-[center_75%]"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-8"
              style={{ background: "linear-gradient(to top, rgba(26,33,24,0.82), transparent)" }}
            >
              <p className="text-lg font-medium italic" style={{ fontFamily: "'Playfair Display', serif", color: "#E8EDE6" }}>
                "O primeiro passo para mudar é decidir que não ficará igual."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}