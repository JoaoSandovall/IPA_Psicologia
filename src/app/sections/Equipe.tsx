import React, { useRef, useState } from "react";
import { Camera, ChevronRight } from "lucide-react";
import fotoCamila from "@/imports/Camila Rodrigues.jpeg";
import fotoGiovane from "@/imports/Giovane Tapia.jpeg";
import fotoMaira from "@/imports/Maira Muniz.png";
import fotoMatheus from "@/imports/Matheus Leon.jpeg";
import fotoSamara from "@/imports/Samara Pires.jpeg";
import fotoVitoria from "@/imports/Vitoria Shalders.jpeg";
import fotoYan from "@/imports/Yan Ribeiro.jpeg";

const psychologists = [
  {
    name: "Camila Rodrigues",
    image: fotoCamila,
    title: "Psicóloga Clínica",
    crp: "CRP 01/26973",
    specialty: "Psicoterapia Infantil e do Adolescente",
    atende: "Crianças (a partir dos 2 anos), adolescentes e adultos",
    areas: ["Psicoterapia Infantil e do Adolescente", "Psicanálise", "Saúde Mental de Jovens"],
    sobre: "Psicóloga com pós-graduação em Direitos Humanos e Políticas Públicas das Infâncias e Juventudes, e pós-graduanda em Psicoterapia Infantil e do Adolescente.",
    quote: "Acredito no poder da escuta e do acolhimento como caminhos para o autoconhecimento e para uma vida mais leve e significativa.",
  },
  {
    name: "Giovani Tápia",
    image: fotoGiovane,
    title: "Psicólogo Clínico",
    crp: "CRP 01/29959",
    specialty: "Gestalt-terapia",
    atende: "Adolescentes, adultos e casais",
    areas: ["Gestalt-terapia", "Ansiedade", "Depressão", "Questões Existenciais", "Consultoria Organizacional"],
    sobre: "Psicólogo com mais de 10 anos de experiência nas áreas clínica e organizacional, com formação em Gestalt-terapia.",
    quote: "Acredito que o autoconhecimento e a ampliação da consciência são caminhos fundamentais para relações mais saudáveis e uma vida com mais equilíbrio e sentido.",
  },
  {
    name: "Maira Muniz",
    image: fotoMaira,
    title: "Psicóloga Clínica",
    crp: "CRP 01/31337",
    specialty: "Psicodinâmica",
    atende: "A partir dos 18 anos",
    areas: ["Perspectiva Psicodinâmica", "Processos inconscientes", "Consciência emocional", "Qualidade de vida"],
    sobre: "Psicóloga clínica com atuação em Psicologia Psicodinâmica e conflitos inconscientes e suas manifestações no cotidiano.",
    quote: "Meu objetivo é oferecer um space seguro e acolhedor, ajudando você a compreender suas emoções e desenvolver formas mais leves e saudáveis de lidar com os desafios da vida.",
  },
  {
    name: "Matheus Leon",
    image: fotoMatheus,
    title: "Psicólogo Clínico",
    crp: "CRP 01/22177",
    specialty: "Neuropsicologia",
    atende: "Crianças, adolescentes, adultos e idosos",
    areas: ["Neuropsicologia", "EMDR", "Brainspotting", "ABA", "Espectro Autista (TEA)"],
    sobre: "Psicólogo clínico com atuação em Psicologia humanista e Terapia Cognitivo-Comportamental.",
    quote: "Meu objetivo é oferecer um space seguro e acolhedor, ajudando cada pessoa a compreender suas emoções e desenvolver formas mais leves e saudáveis de lidar com os desafios da vida.",
  },
  {
    name: "Samara Pires",
    image: fotoSamara,
    title: "Psicólogo Clínico",
    crp: "CRP 01/20921",
    specialty: "Terapia Cognitivo-Comportamental",
    atende: "Adultos",
    areas: ["TCC", "Ansiedade", "Depressão", "Síndrome do Pânico", "TDAH"],
    sobre: "Psicóloga clínica pós-graduada em Terapia Cognitivo-Comportamental (TCC), com experiência no atendimento de adultos e no tratamento de comportamentos disfuncionais.",
    quote: "Meu objetivo é ajudar cada paciente a desenvolver estratégias que promovam equilíbrio emocional, bem-estar e uma vida mais saudável e significativa.",
  },
  {
    name: "Vitória Shalders",
    image: fotoVitoria,
    title: "Psicóloga Clínica",
    crp: "CRP 01/25620",
    specialty: "Psicanálise Clínica",
    atende: "Adolescentes, adultos e casais",
    areas: ["Psicanálise Clínica", "Neuropsicologia", "Transtornos de Personalidade", "Educação Sexual", "Violência de Gênero"],
    sobre: "Psicóloga com pós-graduação em Psicanálise Clínica e Neuropsicologia, além de formação em Psicopatologia, Transtornos de Personalidade e Educação Sexual.",
    quote: "Meu objetivo é ajudar cada pessoa a compreender sua história, seus sentimentos e seus processos internos, promovendo mais autoconhecimento e equilíbrio emocional.",
  },
  {
    name: "Yan Ribeiro",
    image: fotoYan,
    title: "Psicólogo Clínico",
    crp: "CRP 01/22881",
    specialty: "Psicologia Analítica Junguiana",
    atende: "Adolescentes e adultos",
    areas: ["Psicologia Analítica Junguiana", "Ansiedade", "Autoconhecimento", "Bem-estar emocional", "Técnicas integrativas"],
    sobre: "Psicólogo Analítico Junguiano com foco clínico em ansiedade e promoção do bem-estar emocional.",
    quote: "Meu objetivo é ajudar cada pessoa a compreender sua ansiedade, fortalecendo o autoconhecimento e promovendo uma vida mais equilibrada e saudável.",
  },
];

function PhotoPlaceholder({ name }: { name: string }) {
  const initials = name.split(" ").slice(0, 2).map((n) => n[0]).join("");
  return (
    <div className="flex flex-col items-center justify-center gap-3" style={{ height: 260, background: "linear-gradient(160deg, #C8DDD4 0%, #B8CFC4 100%)" }}>
      <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(4px)" }}>
        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "#4A7259", lineHeight: 1 }}>
          {initials}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <Camera size={12} style={{ color: "rgba(74,114,89,0.5)" }} />
        <span className="text-xs tracking-wide" style={{ color: "rgba(74,114,89,0.5)", letterSpacing: "0.08em" }}>
          Foto em breve
        </span>
      </div>
    </div>
  );
}

export default function Equipe() {
  const teamRef = useRef<HTMLDivElement>(null);
  const [teamScrollLeft, setTeamScrollLeft] = useState(false);
  const [teamScrollRight, setTeamScrollRight] = useState(true);

  const updateTeamScroll = () => {
    const el = teamRef.current;
    if (!el) return;
    setTeamScrollLeft(el.scrollLeft > 4);
    setTeamScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  };

  const scrollTeam = (dir: "left" | "right") => {
    if (!teamRef.current) return;
    teamRef.current.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  const teamDrag = useRef({ active: false, startX: 0, scrollLeft: 0 });
  
  const onTeamMouseDown = (e: React.MouseEvent) => {
    const el = teamRef.current;
    if (!el) return;
    teamDrag.current = { active: true, startX: e.pageX - el.offsetLeft, scrollLeft: el.scrollLeft };
    el.style.cursor = "grabbing";
    el.style.userSelect = "none";
  };
  
  const onTeamMouseMove = (e: React.MouseEvent) => {
    if (!teamDrag.current.active || !teamRef.current) return;
    const el = teamRef.current;
    const x = e.pageX - el.offsetLeft;
    el.scrollLeft = teamDrag.current.scrollLeft - (x - teamDrag.current.startX);
  };
  
  const onTeamMouseUp = () => {
    teamDrag.current.active = false;
    if (teamRef.current) { teamRef.current.style.cursor = "default"; teamRef.current.style.userSelect = ""; }
  };

  return (
    <section id="equipe" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
        <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#4A7259" }}>
          Nossa Equipe
        </p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl lg:text-4xl font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}>
            Conheça os profissionais<br />
            <em style={{ color: "#C97B52" }}>que cuidam de você</em>
          </h2>
          <p className="text-sm max-w-xs hidden sm:block" style={{ color: "#6A7368", fontWeight: 300 }}>
            Todos os nossos psicólogos são registrados no CRP e possuem especialização reconhecida.
          </p>
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => scrollTeam("left")}
          aria-label="Anterior"
          className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center shadow-md transition-all duration-200"
          style={{ background: "#fff", color: "#4A7259", border: "1px solid rgba(26,33,24,0.12)", opacity: teamScrollLeft ? 1 : 0, pointerEvents: teamScrollLeft ? "auto" : "none", transition: "opacity 0.2s ease" }}
        >
          <ChevronRight size={18} style={{ transform: "rotate(180deg)" }} />
        </button>

        <button
          onClick={() => scrollTeam("right")}
          aria-label="Próximo"
          className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center shadow-md transition-all duration-200"
          style={{ background: "#fff", color: "#4A7259", border: "1px solid rgba(26,33,24,0.12)", opacity: teamScrollRight ? 1 : 0, pointerEvents: teamScrollRight ? "auto" : "none", transition: "opacity 0.2s ease" }}
        >
          <ChevronRight size={18} />
        </button>

        <div
          ref={teamRef}
          className="overflow-x-auto pb-6"
          style={{ scrollbarWidth: "none" }}
          onScroll={updateTeamScroll}
          onMouseDown={onTeamMouseDown}
          onMouseMove={onTeamMouseMove}
          onMouseUp={onTeamMouseUp}
          onMouseLeave={onTeamMouseUp}
        >
          <div className="flex gap-4 px-6 lg:px-10 min-w-max items-stretch">
            {psychologists.map((p) => (
              <div key={p.name} className="flex-shrink-0 flex flex-col rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ width: 268, background: "#fff", border: "1px solid rgba(26,33,24,0.09)", cursor: "grab" }}>
                {p.image ? (
                  <img src={p.image} alt={p.name} draggable={false} className="w-full object-cover select-none" style={{ height: 260 }} />
                ) : (
                  <PhotoPlaceholder name={p.name} />
                )}

                <div className="w-full flex justify-center -mt-[2px] relative z-10">
                  <div className="w-1/2 h-[3px] rounded-full shadow-sm" style={{ background: "#4A7259" }} />
                </div>

                <div className="flex flex-col flex-1 p-5">
                  <div className="mb-4">
                    <h3 className="text-base font-semibold leading-snug" style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}>{p.name}</h3>
                    <p className="text-xs mt-0.5" style={{ color: "#8A9688", fontWeight: 400 }}>{p.title} · <span style={{ color: "#B0BEB0" }}>{p.crp}</span></p>
                  </div>

                  <div className="mb-4 pb-4" style={{ borderBottom: "1px solid rgba(26,33,24,0.07)" }}>
                    <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-sm leading-snug" style={{ background: "#EAF2EA", color: "#2A4E39" }}>{p.specialty}</span>
                  </div>

                  <div className="flex-1">
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#6A7368" }}>
                      <span className="font-semibold" style={{ color: "#3A4838" }}>Atende: </span>{p.atende}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {p.areas.map((a) => (
                        <span key={a} className="px-2 py-0.5 text-xs rounded-sm" style={{ background: "#F3F1ED", color: "#4A5848" }}>{a}</span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed italic pt-4 mt-4" style={{ color: "#9AA89A", borderTop: "1px solid rgba(26,33,24,0.07)", fontWeight: 300 }}>
                    "{p.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}