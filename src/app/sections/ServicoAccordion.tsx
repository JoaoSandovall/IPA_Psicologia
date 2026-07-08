import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import FotoUm from "../../imports/FotoUm.jpg";

interface Servico {
  titulo: string;
  descricao: React.ReactNode;
  destaque?: boolean;
}

const servicos: Servico[] = [
  { 
    titulo: "Avaliação Neuropsicológica", 
    destaque: true,
    descricao: (
      <div className="space-y-5 md:space-y-6">
        <p>
          A Avaliação neuropsicológica irá rastrear onde está sendo o real problema, para criar estratégias eficazes e diretivas e fazer os direcionamentos que trará resultados eficazes para o real problema em questão.
        </p>
        <p>
          Essa avaliação o profissional deve ter habilidades especificas. Uma especialização em um curso que realmente forma bons profissionais. Ele deve ter uma bateria de testes que sejam nível padrão ouro. Uma avaliação consiste de 6 a 8 sessões, podendo variar mais ou menos. Vários testes, de memória, atenção, personalidade, QI entre outros são selecionados. O Neuropsicólogo irá fazer as correções e se debruçar e confeccionar um laudo que pode durar até 20 horas fora do consultório. É um trabalho que quando é bem feito, o caso da nossa clínica, irá auxiliar nos próximos passos e medidas que devem ser adotadas.
        </p>
        <p>
          A finalidade da avaliação neuropsicológica é criar estratégias realmente que irão produzir resultados reais, aumentando disparadamente a qualidade de vida e minimizando as angustias oriundas do que não sabemos de fato o que está acontecendo conosco.
        </p>
        <p>
          Nem toda Avaliação neuropsicológica lhe trará os resultados esperados. Procure profissionais qualificados. Não é um trabalho barato, pois envolve uma bateria de testes caros e muitas horas trabalhadas. Mas uma Avaliação Psicológica bem-feita trará direcionamento e um planejamento eficaz para uma guinada na vida. O que realmente está acontecendo com você? Quanto você valoriza seu bem estar e qualidade de vida?
        </p>
        <p>
          Uma boa avaliação também te trará clareza de saber onde está seus pontos mais fortes, os que precisam ser desenvolvidos. Sua performance no trabalho, nas atividades diárias, na convivência familiar e social só tendem a desenvolver positivamente.
        </p>
        <p>
          Nossa mente é o que direciona toda nossa vida, deveria ser o metro quadrado mais valorizado por todos nós. Quando ela não está bem, nada mais vai bem e tardar cuidar desse aspecto é tardar e ampliar os problemas de não se olhar com mais atenção e carinho. Estamos aqui para te auxiliar nessa virada de chave.
        </p>
        <p className="pt-6 mt-4 border-t border-[#1A2118]/10 italic text-base md:text-lg">
          "Sou Tatiana Kliamch, 18 anos como psicóloga clínica, 13 anos especializada em neuropsicologia e com formação em testes de personalidade, entre outras áreas que me dediquei com muito entusiasmo para uma entrega de um serviço que presto com devoção. Realizo Orientação profissional, sou gestora de projetos e diretora do Instituto de Psicologia Aplicada. Minha Avaliação Psicológica é diferenciada."
        </p>
      </div>
    )
  },
  { titulo: "Psicoterapia Individual", descricao: "Psicoterapia individual presencial em Brasília para ansiedade, depressão, estresse, burnout, autoestima, dificuldades emocionais e desenvolvimento pessoal. Atendimento humanizado com plano terapêutico personalizado para promover bem-estar e qualidade de vida." },
  { titulo: "Atendimento Infantil", descricao: "Psicoterapia infantil presencial em Brasília para dificuldades emocionais, problemas escolares, ansiedade, timidez, alterações de comportamento e desenvolvimento socioemocional. Atendimento lúdico com orientação aos pais e acompanhamento individualizado." },
  { titulo: "Psicoterapia de Casais", descricao: "Psicoterapia de casais presencial em Brasília para melhorar a comunicação, resolver conflitos, fortalecer vínculos e reconstruir relacionamentos. Atendimento voltado ao desenvolvimento do diálogo, da confiança e da parceria." },
  { titulo: "Orientação Profissional", descricao: "Orientação profissional presencial em Brasília para adolescentes e adultos que desejam escolher a profissão ou faculdade com mais segurança. Processo estruturado para identificar habilidades, interesses e construir um planejamento de carreira." },
  { titulo: "Avaliação Psicológica", descricao: "Avaliação psicológica presencial em Brasília com aplicação de testes reconhecidos pelo Conselho Federal de Psicologia. Indicada para diagnósticos clínicos, investigação de habilidades cognitivas, personalidade e emissão de laudos psicológicos." },
  { titulo: "Atendimento ao Espectro Autista (TEA)", descricao: "Atendimento especializado em Brasília para crianças, adolescentes e adultos com Transtorno do Espectro Autista (TEA). Avaliação, acompanhamento psicológico e orientação familiar com foco no desenvolvimento e na qualidade de vida." },
  { titulo: "Recursos para Concursos", descricao: "Avaliação psicológica e elaboração de recursos técnicos para candidatos reprovados em exames psicológicos de concursos públicos. Análise especializada da aplicação dos testes e emissão de parecer fundamentado em instrumentos científicos." },
  { titulo: "Psicologia Organizacional e RH", descricao: "Serviços de psicologia organizacional em Brasília para recrutamento, seleção, avaliação comportamental, desenvolvimento de equipes e melhoria do desempenho organizacional. Soluções personalizadas para empresas." },
  { titulo: "Saúde Mental nas Empresas (NR-1)", descricao: "Consultoria em saúde mental corporativa para adequação à NR-1, diagnóstico organizacional e implementação de ações voltadas à prevenção de riscos psicossociais e promoção do bem-estar no ambiente de trabalho." },
  { titulo: "Supervisão Acadêmica", descricao: "Supervisão especializada para estudantes e profissionais de Psicologia em TCC, artigos científicos, pesquisas e desenvolvimento clínico. Acompanhamento técnico voltado ao aperfeiçoamento acadêmico e profissional." }
];

export default function ServicoAccordion() {
  const [aberto, setAberto] = useState<number | null>(0);

  return (
    <section id="servicos" className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-[#F4F1EA] text-[#1A2118] overflow-hidden">

      {/* Container Principal */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="hidden md:block" style={{ width: 36, height: 1, background: "#C97B52" }} />
            <p 
              className="text-xs tracking-[0.32em] uppercase font-semibold text-[#C97B52]"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              Cuidado e Especialidade
            </p>
            <div className="hidden md:block" style={{ width: 36, height: 1, background: "#C97B52" }} />
          </div>
          
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#1A2118] mb-6" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nossas Especialidades
          </h2>
          <p 
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed px-2 text-[#4A5848]"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
          >
            Conheça nossos serviços desenhados para promover seu bem-estar, 
            desenvolvimento pessoal e qualidade de vida.
          </p>
        </div>

        {/* Serviço Destaque (Correção da Imagem) */}
        <div className="mb-6 md:mb-12 max-w-7xl mx-auto">
          <div className="group rounded-sm bg-[#4A7259] shadow-md transition-all duration-300 overflow-hidden relative flex flex-col">
            
            {/* Bloco 1: CABEÇALHO COM A FOTO FIXA */}
            <div className="relative w-full flex flex-col md:flex-row">
              <button
                onClick={() => setAberto(aberto === 0 ? null : 0)}
                className="relative z-20 w-full md:w-[60%] flex flex-col justify-center py-8 px-6 md:py-16 md:px-12 lg:px-16 text-left focus:outline-none cursor-pointer"
              >
                <div className="flex flex-col gap-3 md:gap-5 pr-4">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[#F4F1EA]/40 text-3xl md:text-4xl font-light italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                      01
                    </span>
                    <span 
                      className="inline-flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-widest bg-[#F4F1EA] text-[#4A7259] px-4 py-1.5 rounded-sm font-bold w-fit"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      <Star className="w-3.5 h-3.5 fill-[#4A7259]" />
                      Destaque
                    </span>
                  </div>
                  <span 
                    className="text-3xl md:text-4xl lg:text-5xl text-[#F4F1EA] leading-[1.15] font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {servicos[0].titulo}
                  </span>
                </div>
                
                {/* Botão Chevron */}
                <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-sm flex items-center justify-center transition-colors bg-[#F4F1EA]/10 hover:bg-[#F4F1EA]/20 border border-[#F4F1EA]/20 mt-8 backdrop-blur-sm shadow-sm">
                  <ChevronDown 
                    className={`w-6 h-6 md:w-7 md:h-7 transition-transform duration-500 text-[#F4F1EA] ${aberto === 0 ? "rotate-180" : ""}`} 
                  />
                </div>
              </button>

              {/* A FOTO */}
              <div className="relative w-full h-[250px] md:absolute md:top-0 md:right-0 md:w-[40%] md:h-full overflow-hidden pointer-events-none z-0 bg-[#4A7259]">
                <img 
                  src={FotoUm} 
                  alt="Avaliação Neuropsicológica" 
                  className="absolute inset-0 w-full h-full object-cover" 
                />
                <div className="hidden md:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#4A7259] to-transparent"></div>
                <div className="md:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#4A7259] to-transparent"></div>
              </div>
            </div>
            
            {/* Bloco 2: CORPO DO ACORDEÃO */}
            <div className={`relative z-10 grid transition-all duration-500 ease-in-out ${aberto === 0 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
              <div className="overflow-hidden">
                <div 
                  className="px-6 md:px-12 lg:px-16 pb-10 md:pb-16 pt-2 leading-relaxed text-sm md:text-base text-[#F4F1EA]/90"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  {servicos[0].descricao}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Restante dos Serviços */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start max-w-7xl mx-auto">
          {servicos.slice(1).map((s, idx) => {
            const i = idx + 1;
            const isActive = aberto === i;
            
            return (
              <div 
                key={i} 
                className={`group transition-all duration-300 rounded-sm border overflow-hidden ${
                  isActive 
                    ? 'bg-white border-[#4A7259]/30 shadow-md' 
                    : 'bg-white/60 border-[#1A2118]/5 hover:border-[#4A7259]/30 hover:bg-white hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => setAberto(isActive ? null : i)}
                  className="w-full flex justify-between items-center py-6 px-6 md:py-8 md:px-8 text-left transition-colors focus:outline-none cursor-pointer"
                >
                  <div className="flex items-center gap-4 md:gap-6">
                    <span className={`text-xl md:text-3xl font-light italic transition-colors ${isActive ? 'text-[#C97B52]' : 'text-[#4A7259]/30'}`} style={{ fontFamily: "'Playfair Display', serif" }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span 
                      className={`text-lg md:text-xl pr-4 transition-colors font-semibold ${isActive ? 'text-[#C97B52]' : 'text-[#1A2118]'}`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {s.titulo}
                    </span>
                  </div>
                  
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-sm flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-[#4A7259]/10' : 'bg-[#EAE6DF]/60 group-hover:bg-[#EAE6DF]'
                  }`}>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${isActive ? "text-[#C97B52] rotate-180" : "text-[#4A5848]"}`} />
                  </div>
                </button>
                
                <div className={`grid transition-all duration-300 ease-in-out ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="overflow-hidden">
                    <div 
                      className="px-6 md:px-8 pb-8 pt-0 leading-relaxed text-[#4A5848] text-sm md:text-base pl-[64px] md:pl-[84px]"
                      style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                    >
                      {s.descricao}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}