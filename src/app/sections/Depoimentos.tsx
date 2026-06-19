import { Star } from "lucide-react";

export default function Depoimentos() {
  const linkGoogleMaps = "https://www.google.com/maps/place/Instituto+de+Psicologia+Aplicada+-+IPA/@-15.7328445,-47.8997995,17z/data=!3m1!5s0x935a39926d1aaacb:0x5b42fe4c59fe1305!4m8!3m7!1s0x935a39d82ca80417:0xdafe33d521fa3da7!8m2!3d-15.7328445!4d-47.8972246!9m1!1b1!16s%2Fg%2F11h_446cjk?entry=ttu&g_ep=EgoyMDI2MDYxNi4wIKXMDSoASAFQAw%3D%3D";

  const avaliacoesGoogle = [
    {
      id: 1,
      nome: "Daniel e Samantha Adv",
      tempo: "Há 1 mês",
      texto: "Ótimos profissionais, estou me sentindo muito bem com meu tratamento, minha saúde mental melhorou muito, obrigado.",
      nota: 5,
    },
    {
      id: 2,
      nome: "Rogeis Santos",
      tempo: "Há 7 meses",
      texto: "Nestes 3 anos que faço acompanhamento no IPA só tenho a agradecer pela experiência que tenho na clínica.",
      nota: 5,
    },
    {
      id: 3,
      nome: "Glai Eres",
      tempo: "Há 1 ano",
      texto: "Eu tinha um pé atrás em fazer terapia.. até conhecer o Instituto de Psicologia Aplicada - IPA... de primeira já me conectei com o ambiente, que é leve, limpo, tranquilo, temperatura agradável.",
      nota: 5,
    },
    {
      id: 4,
      nome: "Ana Carolina Vargas",
      tempo: "Há 1 ano",
      texto: "Sou atendida há quase dois anos e não troco por outra. Meu quadro tem melhorado muito. A clínica também tem uma estrutura ótima e é bem localizada. Recomendo!",
      nota: 5,
    },
    {
      id: 5,
      nome: "Paula Mendonca",
      tempo: "Há 1 ano",
      texto: "A minha experiência foi e é maravilhosa. O trabalho é excepcional! Muito humana, sensata, inteligente e dedicada. Recomendo muito a profissional e a instituição!",
      nota: 5,
    },
    {
      id: 6,
      nome: "Iago Carvalho",
      tempo: "Há 1 ano",
      texto: "Ambiente acolhedor e profissionalismo exceptional. Foi essencial na busca para que eu me encontrasse novamente e resolvesse minhas questões. Recomendo demais!",
      nota: 5,
    },
    {
      id: 7,
      nome: "Arialba Siufi",
      tempo: "Há 1 ano",
      texto: "Gostei muito do local e recomendo. É um ambiente acolhedor e a profissional que me atende é ótima! Super atenciosa e pontual! Está me ajudando muito no meu processo de evolução.",
      nota: 5,
    },
    {
      id: 8,
      nome: "Dark Ane Mendes",
      tempo: "Há 1 ano",
      texto: "Excelente clínica, com profissionais gabaritados no mercado e bem humanos nos atendimentos. Recomendo.",
      nota: 5,
    }
  ];

  return (
    <section id="depoimentos" style={{ background: "#F4F1EA" }} className="py-16 lg:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10 lg:mb-14">
        <div className="text-center lg:text-left">
          <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#C97B52" }}>
            Avaliações do Google
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              className="text-[2rem] leading-tight lg:text-4xl font-semibold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}
            >
              O que dizem sobre
              <br />
              o nosso acolhimento
            </h2>
            
            <div className="flex items-center justify-center lg:justify-end gap-3 mt-2 lg:mt-0">
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
      </div>

      <div className="relative w-full flex overflow-hidden py-4">
        <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-r from-[#F4F1EA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-l from-[#F4F1EA] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee">
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

          <div className="flex gap-5 pr-5">
            {avaliacoesGoogle.map((item) => (
              <a
                key={`grp2-${item.id}`}
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
        </div>
      </div>
    </section>
  );
}