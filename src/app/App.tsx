import React, { useState, useEffect, useRef } from "react";
import clinicaPhoto from "@/imports/image.png";
import ipaLogo from "@/imports/marca-ipa_sem_fundo.png";
import ipaLogoSimple from "@/imports/logo.png";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Star, Heart, Shield, Users, Camera, ChevronRight, Search, X, Menu } from 'lucide-react';
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
    quote: "Meu objetivo é oferecer um espaço seguro e acolhedor, ajudando você a compreender suas emoções e desenvolver formas mais leves e saudáveis de lidar com os desafios da vida.",
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
    quote: "Meu objetivo é oferecer um espaço seguro e acolhedor, ajudando cada pessoa a compreender suas emoções e desenvolver formas mais leves e saudáveis de lidar com os desafios da vida.",
  },
  {
    name: "Samara Pires",
    image: fotoSamara,
    title: "Psicóloga Clínica",
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

const convenioGroups = [
  { letter: "A", items: ["AFEB BRASAL", "AFFEGO", "ASETE (ASTE)"] },
  { letter: "C", items: ["CAESAN", "CARE PLUS", "CASEC (CODEVASF)", "CASEMBRAPA", "CASSI", "CNTI"] },
  { letter: "E", items: ["EMBRATEL (TELOS)"] },
  { letter: "F", items: ["FAPES (BNDES)", "FASCAL"] },
  { letter: "G", items: ["GDF SAÚDE"] },
  { letter: "L", items: ["LIFE EMPRESARIAL"] },
  { letter: "O", items: ["OMINT SAÚDE"] },
  {
    letter: "P",
    items: [
      "PF SAÚDE (POLÍCIA FEDERAL)",
      "PLAN ASSISTE (MPU)",
      "PLAS/JMU (STM)",
      "PROASA",
      "PRÓ-SAÚDE (CÂMARA DOS DEP)",
      "PRÓ-SAÚDE (TJDFT)",
      "PRÓ-SOCIAL (TRF)",
    ],
  },
  { letter: "R", items: ["REAL GRANDEZA (DEMAIS PLANOS)", "REAL GRANDEZA (SALVUS E SALUTEM)"] },
  { letter: "S", items: ["SAÚDE CAIXA", "SERPRO", "SIS SENADO", "STF-MED (STF)"] },
  { letter: "T", items: ["TRE SAÚDE", "TRT SAÚDE", "TST SAÚDE"] },
  { letter: "U", items: ["UNAFISCO (SINDIFISCO)"] },
];

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Nossa Equipe", href: "#equipe" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const features = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada paciente é único. Nossa abordagem valoriza a história, os sentimentos e o ritmo individual de cada pessoa no processo terapêutico.",
  },
  {
    icon: Shield,
    title: "Sigilo Profissional",
    description: "Tudo o que é compartilhado em sessão permanece em total sigilo. Confiança é a base de qualquer processo terapêutico saudável.",
  },
  {
    icon: Users,
    title: "Equipe Multidisciplinar",
    description: "Psicólogos com diferentes especializações que colaboram entre si para oferecer o cuidado mais adequado para cada necessidade.",
  },
  {
    icon: Star,
    title: "Ambiente Acolhedor",
    description: "Nossos espaços foram projetados para transmitir calma, segurança e conforto desde o primeiro momento em que você entra na clínica.",
  },
];

const stats = [
  { value: "7", label: "Psicólogos especialistas" },
  { value: "32", label: "Convênios aceitos" },
  { value: "4.9 ★", label: "Avaliação no Google" },
  { value: "Online", label: "e presencial" },
];

// ── Photo placeholder ──────────────────────────────────────────
function PhotoPlaceholder({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  return (
    <div
      className="flex flex-col items-center justify-center gap-3"
      style={{
        height: 260,
        background: "linear-gradient(160deg, #C8DDD4 0%, #B8CFC4 100%)",
      }}
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: "rgba(255,255,255,0.35)", backdropFilter: "blur(4px)" }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.75rem",
            fontWeight: 700,
            color: "#4A7259",
            lineHeight: 1,
          }}
        >
          {initials}
        </span>
      </div>
      <div className="flex items-center gap-1.5">
        <Camera size={12} style={{ color: "rgba(74,114,89,0.5)" }} />
        <span
          className="text-xs tracking-wide"
          style={{ color: "rgba(74,114,89,0.5)", letterSpacing: "0.08em" }}
        >
          Foto em breve
        </span>
      </div>
    </div>
  );
}


// ── Convênios page ─────────────────────────────────────────────
function ConveniosSection({
  onBack,
  onGoContact,
}: {
  onBack: () => void;
  onGoContact: () => void;
}) {
  const [query, setQuery] = useState("");
  const allItems = convenioGroups.flatMap((g) => g.items);

  const filteredGroups = query.trim()
    ? convenioGroups
        .map((g) => ({
          ...g,
          items: g.items.filter((item) =>
            item.toLowerCase().includes(query.toLowerCase())
          ),
        }))
        .filter((g) => g.items.length > 0)
    : convenioGroups;

  const noResults = query.trim() && filteredGroups.length === 0;

  return (
    <div
      className="flex flex-col lg:flex-row"
      style={{ fontFamily: "'Lato', sans-serif", minHeight: "100vh" }}
    >
      {/* ══ PAINEL ESQUERDO (sticky) ══════════════════════════════ */}
      <aside
        className="w-full lg:w-[360px] xl:w-[400px] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between px-8 py-10 lg:px-10 lg:py-14 lg:overflow-y-auto"
        style={{ background: "#4A7259", flexShrink: 0, paddingTop: "5.5rem" }}
      >
        {/* Top block */}
        <div className="lg:hidden" style={{ paddingTop: "4rem" }} />
        <div>
          {/* Back */}
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-10 text-xs tracking-[0.22em] uppercase transition-colors duration-200"
            style={{ color: "rgba(200,216,194,0.45)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#C8D8C2")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(200,216,194,0.45)")}
          >
            <ChevronRight size={11} style={{ transform: "rotate(180deg)" }} />
            Voltar ao site
          </button>

          <p
            className="text-xs tracking-[0.28em] uppercase mb-5 font-semibold"
            style={{ color: "#4A7259" }}
          >
            Instituto de Psicologia Aplicada
          </p>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              fontWeight: 700,
              color: "#F0EDE8",
              lineHeight: 1.1,
              marginBottom: "0.5rem",
            }}
          >
            Convênios
          </h1>
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.125rem",
              fontStyle: "italic",
              color: "rgba(240,237,232,0.4)",
              marginBottom: "2.5rem",
            }}
          >
            & planos de saúde
          </p>

          {/* Count pill */}
          <div
            className="inline-flex items-center gap-3 px-4 py-2.5 mb-8"
            style={{
              background: "rgba(240,237,232,0.08)",
              border: "1px solid rgba(240,237,232,0.14)",
              borderRadius: "2px",
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.75rem",
                fontWeight: 700,
                color: "#C97B52",
                lineHeight: 1,
              }}
            >
              {allItems.length}
            </span>
            <span className="text-xs leading-tight" style={{ color: "rgba(240,237,232,0.55)", fontWeight: 300 }}>
              planos<br />aceitos
            </span>
          </div>

          {/* Search */}
          <div className="relative mb-10">
            <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(240,237,232,0.3)" }} />
            <input
              type="text"
              placeholder="Buscar convênio..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-3 text-sm outline-none transition-all"
              style={{
                background: "rgba(240,237,232,0.08)",
                border: "1px solid rgba(240,237,232,0.15)",
                borderRadius: "2px",
                color: "#F0EDE8",
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.01em",
              }}
              onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(240,237,232,0.45)")}
              onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(240,237,232,0.15)")}
            />
          </div>

          {/* Letter index (desktop only, hidden when filtering) */}
          {!query.trim() && (
            <div className="hidden lg:flex flex-wrap gap-1.5 mb-10">
              {convenioGroups.map((g) => (
                <button
                  key={g.letter}
                  onClick={() =>
                    document
                      .getElementById(`grp-${g.letter}`)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  className="w-7 h-7 flex items-center justify-center text-xs font-semibold transition-all duration-150 rounded-sm"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "rgba(240,237,232,0.07)",
                    color: "rgba(240,237,232,0.45)",
                    border: "1px solid rgba(240,237,232,0.1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(240,237,232,0.15)";
                    (e.currentTarget as HTMLElement).style.color = "#F0EDE8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(240,237,232,0.07)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.45)";
                  }}
                >
                  {g.letter}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom CTA block */}
        <div
          className="pt-8"
          style={{ borderTop: "1px solid rgba(240,237,232,0.1)" }}
        >
          <p
            className="text-sm font-semibold mb-1"
            style={{ fontFamily: "'Playfair Display', serif", color: "#F0EDE8" }}
          >
            Não encontrou seu plano?
          </p>
          <p className="text-xs mb-5" style={{ color: "rgba(240,237,232,0.5)", fontWeight: 300, lineHeight: 1.6 }}>
            Atendemos particular com valores acessíveis. Entre em contato.
          </p>
          <div className="flex flex-col gap-2">
            <a
              href="tel:+5561992576460"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold rounded-sm transition-all duration-200"
              style={{ background: "#C97B52", color: "#F0EDE8", letterSpacing: "0.04em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#B56A42")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#C97B52")}
            >
              <Phone size={14} />
              (61) 99257-6460
            </a>
            <button
              onClick={() => { onBack(); setTimeout(onGoContact, 80); }}
              className="py-3 text-sm font-semibold rounded-sm border transition-all duration-200"
              style={{ borderColor: "rgba(240,237,232,0.22)", color: "rgba(240,237,232,0.7)", background: "transparent" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,232,0.5)";
                (e.currentTarget as HTMLElement).style.color = "#F0EDE8";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,232,0.22)";
                (e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.7)";
              }}
            >
              Agendar consulta
            </button>
          </div>
        </div>
      </aside>

      {/* ══ PAINEL DIREITO (scrollável) ═══════════════════════════ */}
      <main
        className="flex-1 px-8 py-14 lg:px-16 lg:py-20"
        style={{ background: "#F7F3EE", paddingTop: "5.5rem", minHeight: "100vh" }}
      >
        {/* No results */}
        {noResults && (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "6rem",
                fontWeight: 700,
                color: "rgba(74,114,89,0.1)",
                lineHeight: 1,
              }}
            >
              ?
            </span>
            <p className="mt-4 text-base" style={{ color: "#6A7368" }}>
              Nenhum resultado para{" "}
              <em style={{ color: "#C97B52" }}>"{query}"</em>
            </p>
            <p className="mt-1 text-sm" style={{ color: "#AAA5A0", fontWeight: 300 }}>
              Ligue para verificar cobertura.
            </p>
          </div>
        )}

        {/* Groups */}
        {!noResults && (
          <div>
            {filteredGroups.map((group, gi) => (
              <div
                key={group.letter}
                id={`grp-${group.letter}`}
                style={{
                  scrollMarginTop: "5rem",
                  borderBottom: gi < filteredGroups.length - 1 ? "1px solid rgba(26,33,24,0.07)" : "none",
                  paddingBottom: "2.5rem",
                  marginBottom: "2.5rem",
                }}
              >
                {/* Letter row */}
                <div className="flex items-baseline gap-4 mb-5">
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "3.5rem",
                      fontWeight: 700,
                      color: "rgba(74,114,89,0.18)",
                      lineHeight: 1,
                      userSelect: "none",
                    }}
                  >
                    {group.letter}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "#B0ABA6", fontWeight: 300 }}
                  >
                    {group.items.length} {group.items.length === 1 ? "plano" : "planos"}
                  </span>
                </div>

                {/* Items — clean list rows */}
                <div>
                  {group.items.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-3.5 px-4 transition-all duration-150 cursor-default rounded-sm"
                      style={{
                        borderBottom:
                          i < group.items.length - 1
                            ? "1px solid rgba(26,33,24,0.05)"
                            : "none",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "rgba(74,114,89,0.06)";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "1.25rem";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = "transparent";
                        (e.currentTarget as HTMLElement).style.paddingLeft = "1rem";
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          style={{
                            width: 5,
                            height: 5,
                            borderRadius: "50%",
                            background: "#4A7259",
                            opacity: 0.35,
                            flexShrink: 0,
                            display: "block",
                          }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: "#2A3528", fontWeight: 400, letterSpacing: "0.01em" }}
                        >
                          {item}
                        </span>
                      </div>
                      <ChevronRight size={13} style={{ color: "#C8D0C6", flexShrink: 0 }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Footer note */}
            <div
              className="mt-8 p-6 rounded-sm"
              style={{ background: "rgba(74,114,89,0.06)", border: "1px solid rgba(74,114,89,0.12)" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#2A3528" }}>
                Lista atualizada — {allItems.length} convênios aceitos
              </p>
              <p className="text-xs" style={{ color: "#6A7368", fontWeight: 300, lineHeight: 1.7 }}>
                Caso seu plano não esteja listado, entre em contato pelo{" "}
                <a href="tel:+5561992576460" style={{ color: "#4A7259", fontWeight: 500 }}>
                  (61) 99257-6460
                </a>{" "}
                — verificamos a cobertura individualmente e sem compromisso.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function Depoimentos() {
  const linkGoogleMaps = "https://www.google.com/maps/search/Instituto+de+Psicologia+Aplicada+Brasilia/";

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
      texto: "Ambiente acolhedor e profissionalismo excepcional. Foi essencial na busca para que eu me encontrasse novamente e resolvesse minhas questões. Recomendo demais!",
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
      
      {/* Estilos CSS embutidos para a animação infinita */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            /* 40s é a velocidade. Se achar rápido, aumente para 50s. Se achar devagar, diminua para 30s */
            animation: marquee 40s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-10 lg:mb-14">
        {/* Cabeçalho */}
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
            
            {/* Nota Geral Google */}
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

      {/* Container do Carrossel Infinito */}
      <div className="relative w-full flex overflow-hidden py-4">
        
        {/* Sombras laterais (Fade-out) para um visual mais premium */}
        <div className="absolute left-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-r from-[#F4F1EA] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 lg:w-32 bg-gradient-to-l from-[#F4F1EA] to-transparent z-10 pointer-events-none" />

        {/* Trilha Animada */}
        <div className="flex w-max animate-marquee">
          
          {/* Grupo 1 (Lista Original) */}
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

          {/* Grupo 2 (Cópia exata para criar a ilusão de loop infinito) */}
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

// ── Main App ───────────────────────────────────────────────────
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [page, setPage] = useState<"home" | "convenios">("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goHome = () => {
    setPage("home");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goConvenios = () => {
    setPage("convenios");
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  };

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    if (page === "convenios") {
      setPage("home");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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

  // Drag-to-scroll
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

  const onConvenios = page === "convenios";
  const navBg = onConvenios
    ? "bg-[#161E1F] border-b border-white/5"
    : scrolled
    ? "bg-[#F4F1EA]/95 backdrop-blur-md shadow-sm border-b border-[#1A2118]/5"
    : "bg-transparent";

  return (

    <div className="relative w-full overflow-x-hidden bg-[#F4F1EA]">

      {/* ── NAV ── */}
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 will-change-transform ${navBg}`}
        style={{
          boxShadow: scrolled ? "0 1px 3px 0 rgba(0, 0, 0, 0.05)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex h-20 w-full">

          {/* ── BLOCO ESQUERDO (Alinhado com os 52% do painel creme) ── */}
          <div className="hidden lg:flex items-center justify-between lg:w-[52%] pr-12">
            <button onClick={goHome} className="flex items-center transition-transform active:scale-98">
              <img
                src={ipaLogoSimple}
                alt="IPA — Instituto de Psicologia Aplicada"
                style={{
                  height: 48,
                  width: "auto",
                  objectFit: "contain",
                  filter: onConvenios ? "brightness(0) invert(1)" : "none",
                  opacity: onConvenios ? 0.88 : 1,
                }}
              />
            </button>
            
            {/* Links posicionados sobre o lado esquerdo (Creme -> Texto Verde no topo) */}
            <div className="flex items-center gap-8">
              {navLinks.slice(0, 3).map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 ${
                    onConvenios
                      ? "text-[#C8D8C2] hover:text-[#8BBDA0]"
                      : scrolled 
                      ? "text-[#1A2118] hover:text-[#C97B52]" 
                      : "text-[#4A7259] hover:text-[#C97B52]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── BLOCO DIREITO (Alinhado com os 48% do painel verde) ── */}
          <div className="hidden lg:flex items-center justify-end lg:w-[48%] gap-8">
            {/* Links posicionados sobre o lado direito (Verde -> Texto Branco no topo) */}
            {navLinks.slice(3).map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 ${
                  onConvenios
                    ? "text-[#C8D8C2] hover:text-[#8BBDA0]"
                    : scrolled 
                    ? "text-[#1A2118] hover:text-[#C97B52]" 
                    : "text-[#F7F5F1] hover:text-[#C97B52]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={goConvenios}
              className={`text-xs tracking-[0.15em] uppercase transition-colors duration-200 ${
                onConvenios
                  ? "text-[#8BBDA0] font-semibold"
                  : scrolled
                  ? "text-[#1A2118] font-medium hover:text-[#C97B52]"
                  : "text-[#F7F5F1] font-medium hover:text-[#C97B52]"
              }`}
            >
              Convênios
            </button>
            <button
              onClick={() => scrollTo("#contato")}
              className={`px-6 py-3 text-xs font-semibold rounded-sm transition-all duration-200 uppercase tracking-wider ${
                onConvenios || scrolled
                  ? "bg-[#4A7259] text-[#F7F5F1] hover:bg-[#3A5E47]"
                  : "bg-[#F7F5F1] text-[#4A7259] hover:bg-[#E5E1D9]"
              }`}
              style={{ letterSpacing: "0.06em" }}
            >
              Agendar Consulta
            </button>
          </div>

          {/* ── ESTRUTURA MOBILE (Mantém o fluxo padrão de largura total) ── */}
          <div className="lg:hidden flex items-center justify-between w-full">
            <button onClick={goHome} className="flex items-center">
              <img
                src={ipaLogoSimple}
                alt="IPA"
                style={{
                  height: 48,
                  width: "auto",
                  objectFit: "contain",
                  filter: onConvenios ? "brightness(0) invert(1)" : "none",
                }}
              />
            </button>
            <button
              className="p-2 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{ color: onConvenios ? "#C8D8C2" : "#1A2118" }}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="lg:hidden bg-[#F7F5F1] border-t border-border/40 py-6 px-6 flex flex-col gap-3 shadow-inner">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left text-sm text-[#1A2118] py-2.5 border-b border-border/30 tracking-wide"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={goConvenios}
              className="text-left text-sm py-2.5 border-b border-border/30 font-semibold"
              style={{ color: "#4A7259" }}
            >
              Convênios
            </button>
            <button
              onClick={() => scrollTo("#contato")}
              className="mt-3 px-5 py-3.5 text-xs font-semibold text-center rounded-sm uppercase tracking-wider bg-[#4A7259] text-[#F7F5F1]"
            >
              Agendar Consulta
            </button>
          </div>
        )}
      </header>

      {/* ── CONVENIOS PAGE ── */}
      {page === "convenios" && (
        <ConveniosSection
          onBack={goHome}
          onGoContact={() => {
            goHome();
            setTimeout(() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" }), 120);
          }}
        />
      )}

      {page === "home" && <>
      
      

      {/* ── HERO ── */}
      
      <section id="topo" className="relative min-h-screen flex overflow-hidden">

        <div className="flex lg:hidden flex-col w-full min-h-screen bg-[#3D5447]">
          
          {/* ── TOPO VERDE ESCURO ── */}
          <div className="relative flex-1 flex flex-col items-center justify-center py-10 px-4 overflow-hidden">
            {/* Círculos Concêntricos */}
            <div className="absolute w-[260px] h-[260px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Badge de Localização */}
            <div className="relative z-10 border border-[#C97B52]/60 rounded-full px-5 py-2 mb-6">
              <p className="text-[10px] tracking-[0.15em] uppercase font-semibold text-[#C97B52]">
                • BRASÍLIA, DF
              </p>
            </div>

            {/* Logo IPA em Texto */}
            <div className="relative z-10 text-center text-[#F7F5F1]">
              <h2 className="text-7xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>IPA</h2>
              <p className="text-[9px] uppercase tracking-[0.25em] opacity-80">Instituto de Psicologia Aplicada</p>
            </div>

            {/* Divisória Decorativa */}
            <div className="relative z-10 mt-8 flex items-center gap-4 opacity-50">
              <div className="w-12 h-[1px] bg-[#C97B52]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C97B52]" />
              <div className="w-12 h-[1px] bg-[#C97B52]" />
            </div>
          </div>

          {/* ── CARD CREME INFERIOR ── */}
          <div className="relative z-20 bg-[#F4F1EA] rounded-t-[32px] px-6 pt-6 pb-12 flex flex-col items-center text-center shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
            
            {/* Indicador de "Puxar" (Tracejado no topo) */}
            <div className="w-10 h-1 bg-black/10 rounded-full mb-8" />

            {/* Headline */}
            <h1 className="font-semibold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118", fontSize: "2.3rem", lineHeight: 1.1 }}>
              Cuidar da mente<br/>
              <em style={{ color: "#4A7259" }}>é cuidar da vida.</em>
            </h1>

            {/* Descrição */}
            <p className="text-sm leading-relaxed mb-8 px-2" style={{ color: "#4A5848", fontWeight: 300 }}>
              Há mais de 2 décadas a ser referência no cuidado psicológico e acolhimento humano.
            </p>

            {/* Botões */}
            <div className="flex flex-col gap-3 w-full">
              <button
                onClick={() => scrollTo("#contato")}
                className="w-full py-4 text-sm font-semibold rounded-md transition-all duration-200"
                style={{ background: "#4A7259", color: "#F7F5F1" }}
              >
                Agendar Consulta
              </button>
              <button
                onClick={() => scrollTo("#equipe")}
                className="w-full py-4 text-sm font-semibold rounded-md border transition-all duration-200"
                style={{ borderColor: "rgba(74,114,89,0.3)", color: "#4A7259", background: "transparent" }}
              >
                Conheça a Nossa Equipe
              </button>
            </div>
          </div>
        </div>

        {/* ── LEFT PANEL — cream content ── */}
        <div
          className="relative z-10 hidden lg:flex flex-col justify-center w-full lg:w-[52%] px-8 sm:px-14 lg:px-24 py-32"
          style={{ background: "#F4F1EA" }}
        >
          {/* Badge de Localização */}
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: 36, height: 1, background: "#C97B52" }} />
            <p className="text-xs tracking-[0.32em] uppercase font-semibold" style={{ color: "#C97B52" }}>
              Brasília, DF
            </p>
          </div>

          {/* Headline redimensionada */}
          <h1
            className="font-semibold mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1A2118",
              fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
              lineHeight: 1.1,
            }}
          >
            Cuidar da mente
            <br />
            <em style={{ color: "#4A7259" }}>é cuidar da vida.</em>
          </h1>

          {/* Descrição ajustada */}
          <p
            className="text-base sm:text-lg leading-relaxed mb-10"
            style={{ color: "#4A5848", fontWeight: 300, maxWidth: 480 }}
          >
            Há mais de 2 décadas sendo referência em cuidado psicológico e acolhimento humano.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo("#contato")}
              className="px-8 py-4 text-sm font-semibold rounded-sm transition-all duration-200"
              style={{ background: "#4A7259", color: "#F7F5F1", letterSpacing: "0.07em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#3A5E47")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7259")}
            >
              Agendar Consulta
            </button>
            <button
              onClick={() => scrollTo("#equipe")}
              className="px-8 py-4 text-sm font-semibold rounded-sm border transition-all duration-200"
              style={{ borderColor: "rgba(74,114,89,0.35)", color: "#4A7259", letterSpacing: "0.07em", background: "transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(74,114,89,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "#4A7259"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,114,89,0.35)"; }}
            >
              Conheça Nossa Equipe
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-8 sm:left-14 lg:left-24 flex items-center gap-3">
            <div className="w-8 h-px animate-pulse" style={{ background: "rgba(26,33,24,0.2)" }} />
            <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(26,33,24,0.3)" }}>Role para baixo</span>
          </div>
        </div>

        {/* ── RIGHT PANEL — sage green with large tree ── */}
        <div
          className="hidden lg:flex flex-col items-center justify-center relative flex-1 overflow-hidden"
          style={{ background: "#3D5447" }}
        >
          {/* Outer decorative ring */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 560, height: 560,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.07)",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* Inner glow circle */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 400, height: 400,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />

          {/* Logo — large, white */}
          <img
            src={ipaLogo}
            alt="IPA — Instituto de Psicologia Aplicada"
            style={{
              width: "82%",
              maxWidth: 480,
              height: "auto",
              objectFit: "contain",
              filter: "brightness(0) invert(1)",
              opacity: 0.82,
              position: "relative",
              zIndex: 1,
            }}
          />

          {/* Bottom label */}
          <div className="absolute bottom-10 flex flex-col items-center gap-2">
            <p
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: "rgba(255,255,255,0.3)", fontWeight: 500 }}
            >
              Instituto de Psicologia Aplicada
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
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

      {/* ── AVALIAÇÕES (GOOGLE REVIEWS) ── */}
      <Depoimentos />

      {/* ── SOBRE ── */}
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
                Em nosso ambiente de trabalho apoiado na valorização da pessoa e com base científica, levamos nossos clientes a possibilidade de viverem a experiência de cura, de bem-estar e de consciência do seu estado atual e do estado desejado, conferindo ações, produtividade e realização. 
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

      {/* ── ESPECIALIDADES ── */}
      <section id="especialidades" style={{ background: "#DED9D0" }} className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mb-16">
            <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#4A7259" }}>
              Por que nos escolher
            </p>
            <h2
              className="text-3xl lg:text-4xl font-semibold leading-snug"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}
            >
              Cuidado que vai além da consulta
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-card rounded-sm p-8 border border-border/40 transition-shadow duration-300 hover:shadow-md">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-6" style={{ background: "#4A7259" }}>
                    <Icon size={20} color="#C8D8C2" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}>
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#3A4838", fontWeight: 300 }}>
                    {f.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── EQUIPE ── */}
      <section id="equipe" className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12">
          <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#4A7259" }}>
            Nossa Equipe
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2
              className="text-3xl lg:text-4xl font-semibold"
              style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}
            >
              Conheça os profissionais
              <br />
              <em style={{ color: "#C97B52" }}>que cuidam de você</em>
            </h2>
            <p className="text-sm max-w-xs hidden sm:block" style={{ color: "#6A7368", fontWeight: 300 }}>
              Todos os nossos psicólogos são registrados no CRP e possuem especialização reconhecida.
            </p>
          </div>
        </div>

        <div className="relative">
          
          {/* Left arrow */}
          <button
            onClick={() => scrollTeam("left")}
            aria-label="Anterior"
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center shadow-md transition-all duration-200"
            style={{
              background: "#fff",
              color: "#4A7259",
              border: "1px solid rgba(26,33,24,0.12)",
              opacity: teamScrollLeft ? 1 : 0,
              pointerEvents: teamScrollLeft ? "auto" : "none",
              transition: "opacity 0.2s ease",
            }}
          >
            <ChevronRight size={18} style={{ transform: "rotate(180deg)" }} />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scrollTeam("right")}
            aria-label="Próximo"
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full items-center justify-center shadow-md transition-all duration-200"
            style={{
              background: "#fff",
              color: "#4A7259",
              border: "1px solid rgba(26,33,24,0.12)",
              opacity: teamScrollRight ? 1 : 0,
              pointerEvents: teamScrollRight ? "auto" : "none",
              transition: "opacity 0.2s ease",
            }}
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
              <div
                key={p.name}
                className="flex-shrink-0 flex flex-col rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                style={{ width: 268, background: "#fff", border: "1px solid rgba(26,33,24,0.09)", cursor: "grab" }}
              >
                {/* Renderização condicional da foto */}
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    draggable={false}
                    className="w-full object-cover select-none"
                    style={{ height: 260 }}
                  />
                ) : (
                  <PhotoPlaceholder name={p.name} />
                )}

                {/* ── Detalhe de Separação ── */}
                <div className="w-full flex justify-center -mt-[2px] relative z-10">
                  <div 
                    className="w-1/2 h-[3px] rounded-full shadow-sm" 
                    style={{ background: "#4A7259" }} 
                  />
                </div>

      <div className="flex flex-col flex-1 p-5">

                  {/* Identity */}
                  <div className="mb-4">
                    <h3
                      className="text-base font-semibold leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: "#8A9688", fontWeight: 400 }}>
                      {p.title} · <span style={{ color: "#B0BEB0" }}>{p.crp}</span>
                    </p>
                  </div>

                  {/* Specialty */}
                  <div className="mb-4 pb-4" style={{ borderBottom: "1px solid rgba(26,33,24,0.07)" }}>
                    <span
                      className="inline-block px-2.5 py-1 text-xs font-semibold rounded-sm leading-snug"
                      style={{ background: "#EAF2EA", color: "#2A4E39" }}
                    >
                      {p.specialty}
                    </span>
                  </div>

                  {/* Atende + Tags — flex-1 so this zone grows and pushes quote to bottom */}
                  <div className="flex-1">
                    <p className="text-xs leading-relaxed mb-3" style={{ color: "#6A7368" }}>
                      <span className="font-semibold" style={{ color: "#3A4838" }}>Atende: </span>
                      {p.atende}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {p.areas.map((a) => (
                        <span
                          key={a}
                          className="px-2 py-0.5 text-xs rounded-sm"
                          style={{ background: "#F3F1ED", color: "#4A5848" }}
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Quote — always at bottom */}
                  <p
                    className="text-xs leading-relaxed italic pt-4 mt-4"
                    style={{
                      color: "#9AA89A",
                      borderTop: "1px solid rgba(26,33,24,0.07)",
                      fontWeight: 300,
                    }}
                  >
                    "{p.quote}"
                  </p>

                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ── LOCALIZAÇÃO ── */}
      <section id="localizacao" style={{ background: "#1A2118" }} className="py-16 lg:py-32">
        
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* BLOCO DE TEXTO */}
          <div className="w-full flex flex-col items-start text-left">
            <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#C97B52" }}>
              Como nos encontrar
            </p>
            <h2
              className="text-[2rem] leading-tight lg:text-4xl font-semibold lg:leading-snug mb-8 lg:mb-10"
              style={{ fontFamily: "'Playfair Display', serif", color: "#C8D8C2" }}
            >
              Estamos na
              <br />
              Asa Norte, Brasília — DF
            </h2>

            <div className="space-y-6 w-full">
              {[
                { Icon: MapPin, label: "Endereço", text: "STN Edifício Vital Brazil, Bloco M\n1° andar, Sala 220 — Asa Norte\nBrasília — DF, 70770-100" },
                { Icon: Clock, label: "Horário de Funcionamento", text: "Segunda a Sexta: 08h às 17h\nSábado e Domingo: Fechado" },
                { Icon: Phone, label: "Telefone / WhatsApp", text: "(61) 99257-6460" },
                { Icon: Mail, label: "E-mail", text: "contato@ipapsicologia.com.br" },
              ].map(({ Icon, label, text }) => (
                <div key={label} className="flex items-start gap-4 w-full">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,123,82,0.15)" }}>
                    <Icon size={18} color="#C97B52" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold mb-1" style={{ color: "#C8D8C2" }}>{label}</p>
                    <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "rgba(200,216,194,0.6)", fontWeight: 300 }}>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BLOCO DO MAPA */}
          <div 
            className="w-full rounded-sm overflow-hidden h-[340px] lg:h-[480px] mt-2 lg:mt-0" 
            style={{ background: "rgba(200,216,194,0.06)", border: "1px solid rgba(200,216,194,0.1)" }}
          >
            <iframe
              title="Localização IPA"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d939.0!2d-47.8972246!3d-15.7328445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39d82ca80417%3A0xdafe33d521fa3da7!2sInstituto%20de%20Psicologia%20Aplicada%20-%20IPA!5e0!3m2!1spt-BR!2sbr!4v1716307200000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" style={{ background: "#EDEAE3" }} className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center mb-14">
          <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#4A7259" }}>
            Agende sua consulta
          </p>
          <h2
            className="text-3xl lg:text-4xl font-semibold leading-snug"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}
          >
            O primeiro passo é o mais importante.
            <br />
            <em style={{ color: "#C97B52" }}>Estamos aqui para você.</em>
          </h2>
        </div>

        <div className="max-w-2xl mx-auto px-6 lg:px-10 bg-card rounded-sm border border-border/40 p-8 lg:p-12">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { label: "Nome completo", type: "text", placeholder: "Seu nome" },
                { label: "Telefone", type: "tel", placeholder: "(61) 99999-9999" },
              ].map(({ label, type, placeholder }) => (
                <div key={label} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#6A7368" }}>{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    className="px-4 py-3 rounded-sm text-sm outline-none transition-colors"
                    style={{ background: "#E5E1D9", border: "1px solid rgba(26,33,24,0.1)", color: "#1A2118", fontFamily: "'Lato', sans-serif" }}
                    onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#4A7259")}
                    onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(26,33,24,0.1)")}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#6A7368" }}>Profissional de interesse</label>
              <select
                className="px-4 py-3 rounded-sm text-sm outline-none transition-colors appearance-none"
                style={{ background: "#E5E1D9", border: "1px solid rgba(26,33,24,0.1)", color: "#1A2118", fontFamily: "'Lato', sans-serif" }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#4A7259")}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(26,33,24,0.1)")}
              >
                <option value="">Sem preferência — quero indicação</option>
                {psychologists.map((p) => (
                  <option key={p.name}>{p.name} — {p.specialty}</option>
                ))}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#6A7368" }}>Mensagem (opcional)</label>
              <textarea
                rows={3}
                placeholder="Conte um pouco sobre o que busca no atendimento..."
                className="px-4 py-3 rounded-sm text-sm outline-none transition-colors resize-none"
                style={{ background: "#E5E1D9", border: "1px solid rgba(26,33,24,0.1)", color: "#1A2118", fontFamily: "'Lato', sans-serif" }}
                onFocus={(e) => ((e.target as HTMLElement).style.borderColor = "#4A7259")}
                onBlur={(e) => ((e.target as HTMLElement).style.borderColor = "rgba(26,33,24,0.1)")}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-200"
              style={{ background: "#4A7259", color: "#C8D8C2" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#3A5E47")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#4A7259")}
            >
              Enviar solicitação
            </button>

            <p className="text-center text-xs" style={{ color: "#6A7368", fontWeight: 300 }}>
              Entraremos em contato em até 24h úteis para confirmar seu agendamento.
            </p>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#111816" }} className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center lg:text-left">
            
            {/* Bloco 1: Logo e Redes Sociais */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
              <div className="mb-5">
                <img
                  src={ipaLogoSimple}
                  alt="IPA — Instituto de Psicologia Aplicada"
                  style={{
                    height: 76,
                    width: "auto",
                    objectFit: "contain",
                    filter: "brightness(0) invert(1)",
                    opacity: 0.65,
                  }}
                />
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(200,216,194,0.45)", fontWeight: 300 }}>
                Cuidado psicológico humanizado em Brasília, DF.
              </p>
              <div className="flex gap-4 mt-6 justify-center lg:justify-start w-full">
                <div className="flex gap-4">
                  <a 
                    href="https://www.instagram.com/psicologia_ipa/"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#C97B52] transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://www.facebook.com/ipapsicologia/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#C97B52] transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bloco 2: Navegação */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,194,0.35)" }}>
                Navegação
              </p>
              <ul className="space-y-2 flex flex-col items-center lg:items-start">
                {[...navLinks, { label: "Convênios", href: "#" }].map((l) => (
                  <li key={l.label}>
                    <button
                      onClick={() => l.label === "Convênios" ? goConvenios() : scrollTo(l.href)}
                      className="text-sm transition-colors"
                      style={{ color: "rgba(200,216,194,0.5)", fontWeight: 300 }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#C97B52")}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(200,216,194,0.5)")}
                    >
                      {l.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bloco 3: Contato */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: "rgba(200,216,194,0.35)" }}>
                Contato
              </p>
              <ul className="space-y-2 text-sm flex flex-col items-center lg:items-start text-center lg:text-left" style={{ color: "rgba(200,216,194,0.5)", fontWeight: 300 }}>
                <li>(61) 99257-6460</li>
                <li>contato@ipapsicologia.com.br</li>
                <li>STN Ed. Vital Brazil, Bl. M, Sala 220</li>
                <li>Asa Norte — Brasília, DF</li>
              </ul>
            </div>
          </div>

          {/* Bloco Inferior: Direitos Autorais */}
          <div className="border-t pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-center lg:text-left" style={{ borderColor: "rgba(200,216,194,0.07)" }}>
            <p className="text-xs" style={{ color: "rgba(200,216,194,0.22)", fontWeight: 300 }}>
              © 2026 IPA — Instituto de Psicologia Aplicada. Todos os direitos reservados.
            </p>
            <p className="text-xs" style={{ color: "rgba(200,216,194,0.22)", fontWeight: 300 }}>
              CFP — Conselho Federal de Psicologia
            </p>
          </div>
        </div>
      </footer>

      </>}
    </div>
  );
}