import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

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
        <p className="pt-6 mt-4 border-t border-[#F7F5F1]/20 italic text-base md:text-lg">
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
    <section className="relative py-20 md:py-32 bg-[#F7F5F1] text-[#1A2118] overflow-hidden">
      
      {/* Elementos decorativos de fundo com responsividade no tamanho */}
      <div className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#4A7259] opacity-[0.03] rounded-full blur-[80px] md:blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[#4A7259] opacity-[0.03] rounded-full blur-[80px] md:blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 md:px-8 z-10">
        
        {/* Cabeçalho */}
        <div className="text-center mb-14 md:mb-24">
          <h3 
            className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#4A7259] font-bold mb-4"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Cuidado e Especialidade
          </h3>
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#4A7259] mb-6" 
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Nossas Especialidades
          </h2>
          <p 
            className="text-[#6A7368] text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-2"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            Conheça nossos serviços desenhados para promover seu bem-estar, 
            desenvolvimento pessoal e qualidade de vida.
          </p>
        </div>

        {/* 1. Serviço Destaque (Card Principal) */}
        <div className="mb-8 md:mb-12">
          <div 
            className="group rounded-2xl md:rounded-3xl border border-[#4A7259] bg-[#4A7259] shadow-xl transition-all duration-300 overflow-hidden"
          >
            <button
              onClick={() => setAberto(aberto === 0 ? null : 0)}
              className="w-full flex justify-between items-center py-6 px-5 md:py-8 md:px-10 text-left focus:outline-none"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 pr-4">
                <span 
                  className="text-2xl md:text-3xl text-[#F7F5F1] leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                >
                  {servicos[0].titulo}
                </span>
                <span 
                  className="inline-flex items-center gap-1.5 text-[10px] md:text-xs uppercase tracking-widest bg-[#F7F5F1] text-[#4A7259] px-4 py-1.5 rounded-full font-bold w-fit mt-1 md:mt-0"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <Star className="w-3.5 h-3.5 fill-[#4A7259]" />
                  Especialidade Principal
                </span>
              </div>
              
              <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors bg-[#F7F5F1]/10 hover:bg-[#F7F5F1]/25">
                <ChevronDown 
                  className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-500 text-[#F7F5F1] ${aberto === 0 ? "rotate-180" : ""}`} 
                />
              </div>
            </button>
            
            <div 
              className={`grid transition-all duration-500 ease-in-out ${
                aberto === 0 ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div 
                  className="px-5 md:px-10 pb-8 md:pb-10 pt-2 md:pt-4 leading-loose text-base md:text-[1.1rem] text-[#F7F5F1]/90"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {servicos[0].descricao}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Restante dos Serviços em Grid de 2 Colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start">
          {servicos.slice(1).map((s, idx) => {
            const i = idx + 1; 
            const isActive = aberto === i;
            
            return (
              <div 
                key={i} 
                className={`group transition-all duration-300 rounded-xl md:rounded-2xl border overflow-hidden ${
                  isActive 
                    ? 'bg-white border-[#4A7259]/30 shadow-md' 
                    : 'bg-white/40 border-[#E6E2D8] hover:border-[#4A7259]/20 hover:bg-white/80 hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => setAberto(isActive ? null : i)}
                  className="w-full flex justify-between items-center py-5 px-5 md:py-7 md:px-8 text-left transition-colors focus:outline-none"
                >
                  <span 
                    className={`text-lg md:text-xl pr-4 transition-colors ${isActive ? 'text-[#4A7259]' : 'text-[#1A2118]'}`}
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500 }}
                  >
                    {s.titulo}
                  </span>
                  
                  <div className={`flex-shrink-0 w-9 h-9 md:w-11 md:h-11 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive ? 'bg-[#4A7259]/10' : 'bg-[#EAE6DF]/60 group-hover:bg-[#EAE6DF]'
                  }`}>
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform duration-500 ${isActive ? "text-[#4A7259] rotate-180" : "text-[#6A7368]"}`} 
                    />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${
                    isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div 
                      className="px-5 md:px-8 pb-6 md:pb-8 pt-1 leading-relaxed text-[#6A7368] text-base"
                      style={{ fontFamily: "'Lato', sans-serif" }}
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