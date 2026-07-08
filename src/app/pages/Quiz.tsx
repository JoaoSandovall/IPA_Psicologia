import { useState, useEffect } from "react";
import { ChevronLeft, RotateCcw, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

// --- TIPAGENS ---
interface Option {
  texto: string;
  peso: number;
}

interface Question {
  categoria: string;
  pergunta: string;
  opcoes: Option[];
}

interface Resultado {
  min: number;
  max: number;
  stamp: string; // Mantido na interface para não alterar os dados, mas não será renderizado
  title: string;
  kicker: string;
  body: string;
}

// --- DADOS (RIGOROSAMENTE INALTERADOS) ---
const questoes: Question[] = [
  {
    categoria: "Descontrole emocional",
    pergunta: "Nos últimos tempos, como você lida com raiva, tristeza ou ansiedade?",
    opcoes: [
      { texto: "Consigo sentir essas emoções e deixá-las passar, sem que tomem conta de mim.", peso: 1 },
      { texto: "Às vezes elas pesam mais do que eu gostaria.", peso: 2 },
      { texto: "Com frequência acabam influenciando minhas decisões e atitudes.", peso: 3 },
      { texto: "Sinto que perco o controle quando essas emoções aparecem.", peso: 4 },
    ]
  },
  {
    categoria: "Desânimo constante",
    pergunta: "Como está seu nível de disposição e ânimo no dia a dia?",
    opcoes: [
      { texto: "Tenho energia e vontade na maior parte do tempo.", peso: 1 },
      { texto: "Tenho dias de cansaço, mas nada muito diferente do normal.", peso: 2 },
      { texto: "Sinto uma apatia ou cansaço emocional que já dura um tempo.", peso: 3 },
      { texto: "Estou estagnado(a), sem vontade, com sono irregular há semanas.", peso: 4 },
    ]
  },
  {
    categoria: "Repetição de padrões",
    pergunta: "Você sente que repete os mesmos ciclos, seja nos relacionamentos ou no trabalho?",
    opcoes: [
      { texto: "Não, sinto que aprendo e sigo em frente.", peso: 1 },
      { texto: "Às vezes reconheço um padrão, mas consigo mudar.", peso: 2 },
      { texto: "Percebo que caio nos mesmos ciclos, mesmo tentando evitar.", peso: 3 },
      { texto: "Sinto que estou preso(a) em padrões que sempre se repetem.", peso: 4 },
    ]
  },
  {
    categoria: "Momentos de transição e conflito",
    pergunta: "Como você está lidando com perdas ou separações recentes na sua vida?",
    opcoes: [
      { texto: "Não tive perdas recentes que ainda pesem.", peso: 1 },
      { texto: "Tive alguma perda, mas sinto que estou processando bem.", peso: 2 },
      { texto: "Ainda sinto dificuldade em elaborar um luto ou uma separação.", peso: 3 },
      { texto: "Sinto que não consegui superar algo doloroso até hoje.", peso: 4 },
    ]
  },
  {
    categoria: "Mudanças drásticas",
    pergunta: "Como anda sua relação com mudanças e incertezas — carreira, relacionamento, rotina?",
    opcoes: [
      { texto: "Lido bem, mesmo quando as coisas mudam rápido.", peso: 1 },
      { texto: "Sinto insegurança às vezes, mas me adapto.", peso: 2 },
      { texto: "Mudanças recentes têm me deixado bastante inseguro(a).", peso: 3 },
      { texto: "Estou em um momento de grande incerteza e não sei como lidar com isso.", peso: 4 },
    ]
  },
  {
    categoria: "Pensamentos limitantes ou intrusivos",
    pergunta: "Com que frequência pensamentos negativos ou de autocrítica aparecem na sua cabeça?",
    opcoes: [
      { texto: "Raramente, e não me incomodam muito.", peso: 1 },
      { texto: "De vez em quando, mas consigo lidar.", peso: 2 },
      { texto: "Com frequência, e às vezes atrapalham meu dia.", peso: 3 },
      { texto: "Quase sempre — é um peso constante.", peso: 4 },
    ]
  },
  {
    categoria: "Autoconhecimento e desenvolvimento pessoal",
    pergunta: "O que mais te motivaria a considerar terapia hoje?",
    opcoes: [
      { texto: "Curiosidade e vontade de me conhecer melhor.", peso: 1 },
      { texto: "Melhorar algo específico na minha vida, mesmo sem urgência.", peso: 2 },
      { texto: "Sinto que algo está travando minha qualidade de vida.", peso: 3 },
      { texto: "Sinto que preciso de ajuda pra lidar com o que estou vivendo.", peso: 4 },
    ]
  },
  {
    categoria: "Percepção de quem está por perto",
    pergunta: "Pessoas próximas já demonstraram preocupação com como você está?",
    opcoes: [
      { texto: "Não, ninguém comentou nada.", peso: 1 },
      { texto: "Uma pessoa ou outra comentou algo, sem muito peso.", peso: 2 },
      { texto: "Mais de uma pessoa já demonstrou preocupação comigo.", peso: 3 },
      { texto: "Sim, e isso tem se repetido nas últimas conversas que tenho tido.", peso: 4 },
    ]
  }
];

const resultados: Resultado[] = [
  {
    min: 8, max: 14,
    stamp: "Tudo em\nordem",
    title: "Você parece estar navegando bem",
    kicker: "resultado 1 de 4",
    body: `
      <p>Pelas suas respostas, você parece estar lidando bem com o que a vida tem colocado no seu caminho. Isso é ótimo — mas não significa que terapia não tenha nada a te oferecer.</p>
      <p>Terapia não é só para momentos de crise: também serve pra fortalecer o que já vai bem, entender melhor seus padrões e ter um espaço só seu pra pensar em voz alta. <strong>Estar bem hoje não tira o valor de se conhecer melhor.</strong></p>
    `,
  },
  {
    min: 15, max: 21,
    stamp: "Vale a\nconversa",
    title: "Uma conversa pode fazer diferença",
    kicker: "resultado 2 de 4",
    body: `
      <p>Suas respostas mostram alguns sinais de sobrecarga — nada alarmante, mas presentes o suficiente pra merecerem atenção. É bem comum viver assim sem perceber o quanto isso pesa no dia a dia.</p>
      <p>Conversar com um psicólogo, mesmo sem uma "crise" definida, pode ajudar a organizar o que você está sentindo antes que vire algo maior. <strong>Cuidar da mente antes que doa também é cuidado.</strong></p>
    `,
  },
  {
    min: 22, max: 27,
    stamp: "Preste\natenção",
    title: "A terapia parece ser um recurso e tanto agora",
    kicker: "resultado 3 de 4",
    body: `
      <p>Suas respostas indicam um nível de desgaste que merece cuidado real. Coisas como sono ruim, isolamento e autocrítica constante tendem a se alimentar umas das outras — e raramente melhoram sozinhas com o tempo.</p>
      <p>Buscar apoio profissional agora, e não quando "piorar de vez", costuma tornar esse processo bem mais leve. <strong>Você não precisa dar conta disso sozinho(a).</strong></p>
    `,
  },
  {
    min: 28, max: 32,
    stamp: "Busque\napoio",
    title: "Este pode ser um bom momento para buscar apoio",
    kicker: "resultado 4 de 4",
    body: `
      <p>Suas respostas apontam um nível de sofrimento que já está pesando bastante no seu dia a dia. Isso não é uma sentença nem um rótulo — é só um sinal de que você está carregando mais do que deveria carregar sozinho(a).</p>
      <p>Considere conversar com um psicólogo ou psiquiatra em breve. <strong>Se em algum momento esse peso ficar difícil demais de segurar, o CVV (188) está disponível 24h, gratuito e sigiloso, para conversar com você agora.</strong></p>
    `,
  },
];

// --- COMPONENTE PRINCIPAL ---
export default function QuizAvaliacao() {
  const [passoAtual, setPassoAtual] = useState(0);
  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [quizFinalizado, setQuizFinalizado] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const questaoAtual = questoes[passoAtual];
  const progresso = (passoAtual / questoes.length) * 100;
  const letrasOpcoes = ["A", "B", "C", "D"];

  const handleResponder = (peso: number) => {
    setRespostas(prev => ({ ...prev, [passoAtual]: peso }));
    
    // Pequeno delay para o usuário ver que clicou
    setTimeout(() => {
      if (passoAtual < questoes.length - 1) {
        setPassoAtual(passoAtual + 1);
      } else {
        setQuizFinalizado(true);
      }
    }, 450);
  };

  const handleVoltar = () => {
    if (passoAtual > 0) {
      setPassoAtual(passoAtual - 1);
    }
  };

  const reiniciarQuiz = () => {
    setPassoAtual(0);
    setRespostas({});
    setQuizFinalizado(false);
  };

  const pontuacaoTotal = Object.values(respostas).reduce((acc, curr) => acc + curr, 0);
  const resultadoAlcancado = resultados.find(
    (r) => pontuacaoTotal >= r.min && pontuacaoTotal <= r.max
  ) || resultados[0];

  return (
    <>
      {/* Remove a barra de rolagem visual, mas permite rolar o conteúdo interno se a tela for minúscula */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* TELA TRAVADA (SEM ROLAGEM EXTERNA) */}
      <div className="fixed inset-0 overflow-hidden bg-[#F4F1EA] text-[#1A2118] font-sans flex flex-col">
        
        {/* BARRA DE PROGRESSO NO TOPO ABSOLUTO DA TELA */}
        <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-[#E6E2D8] z-50">
          <div 
            className="h-full bg-[#C97B52] transition-all duration-700 ease-out" 
            style={{ width: `${quizFinalizado ? 100 : progresso}%` }} 
          />
        </div>

        {/* CABEÇALHO SUPERIOR FIXO (Botão Voltar + Contador) */}
        <header className="flex justify-between items-center w-full px-6 py-6 md:px-12 md:py-8 shrink-0 z-40">
          <Link 
            to="/"
            className="group inline-flex items-center gap-2 text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold text-[#4A7259] hover:text-[#C97B52] transition-colors duration-300"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            <ChevronLeft size={18} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="hidden sm:inline">Voltar ao site</span>
            <span className="sm:hidden">Voltar</span>
          </Link>

          {!quizFinalizado && (
            <div 
              className="text-[10px] md:text-xs tracking-[0.25em] uppercase font-bold text-[#4A5848]" 
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {String(passoAtual + 1).padStart(2, '0')} / {String(questoes.length).padStart(2, '0')}
            </div>
          )}
        </header>

        {/* ÁREA CENTRAL DE CONTEÚDO */}
        <main className="flex-1 flex items-center justify-center overflow-y-auto hide-scrollbar px-4 sm:px-6 w-full">
          <div className="w-full max-w-3xl pb-12">
            
            {!quizFinalizado ? (
              /* ESTADO 1: PERGUNTAS */
              <div className="flex flex-col w-full animate-in fade-in duration-500">
                
                {/* Títulos */}
                <div className="mb-10 md:mb-14 text-center md:text-left px-2">
                  <span 
                    className="text-[10px] md:text-xs uppercase tracking-[0.25em] text-[#C97B52] font-bold block mb-4"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {questaoAtual.categoria}
                  </span>
                  <h2 
                    className="text-3xl md:text-4xl lg:text-5xl font-medium text-[#1A2118] leading-tight md:leading-snug" 
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {questaoAtual.pergunta}
                  </h2>
                </div>

                {/* Opções de Resposta */}
                <div className="flex flex-col gap-3 md:gap-4 w-full">
                  {questaoAtual.opcoes.map((opcao, index) => {
                    const isSelecionada = respostas[passoAtual] === opcao.peso;
                    
                    return (
                      <button
                        key={index}
                        onClick={() => handleResponder(opcao.peso)}
                        className={`group relative w-full text-left p-5 md:p-6 rounded-xl border transition-all duration-300 flex items-center bg-white focus:outline-none ${
                          isSelecionada 
                            ? 'border-[#4A7259] ring-1 ring-[#4A7259]/20 shadow-md' 
                            : 'border-black/5 hover:border-[#4A7259]/30 hover:shadow-lg hover:-translate-y-0.5'
                        }`}
                      >
                        {/* Círculo com a Letra */}
                        <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all duration-300 mr-5 md:mr-6 ${
                          isSelecionada ? 'bg-[#4A7259] text-white shadow-md' : 'bg-[#F4F1EA] text-[#4A5848] group-hover:bg-[#4A7259] group-hover:text-white'
                        }`} style={{ fontFamily: "'Lato', sans-serif" }}>
                          {letrasOpcoes[index]}
                        </div>
                        
                        {/* Texto */}
                        <span 
                          className={`text-base md:text-lg leading-relaxed transition-colors duration-300 pr-4 ${
                            isSelecionada ? 'text-[#1A2118] font-medium' : 'text-[#4A5848] font-light group-hover:text-[#1A2118]'
                          }`} 
                          style={{ fontFamily: "'Lato', sans-serif" }}
                        >
                          {opcao.texto}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Botão Anterior (Só aparece a partir da segunda pergunta) */}
                <div className="mt-8 flex justify-start px-2">
                  <button
                    onClick={handleVoltar}
                    disabled={passoAtual === 0}
                    className={`flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 py-2 ${
                      passoAtual === 0 
                        ? 'opacity-0 pointer-events-none -translate-x-4' 
                        : 'opacity-100 translate-x-0 text-[#C97B52] hover:text-[#B56A42]'
                    }`}
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                    Questão Anterior
                  </button>
                </div>

              </div>
            ) : (
              
              /* ESTADO 2: RESULTADO FINAL */
              <div className="animate-in fade-in zoom-in-95 duration-700 flex flex-col w-full items-center justify-center">
                
                {/* Títulos do Resultado */}
                <div className="mb-10 text-center w-full">
                  <span 
                    className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C97B52] font-bold mb-4 block"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {resultadoAlcancado.kicker}
                  </span>
                  <h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1A2118] leading-tight px-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {resultadoAlcancado.title}
                  </h2>
                </div>

                {/* Cartão de Texto e Botões */}
                <div className="bg-white w-full rounded-2xl p-8 md:p-14 shadow-xl shadow-black/5 border border-black/5 flex flex-col">
                  
                  {/* Corpo de Texto Limpo (Sem a Nota) */}
                  <div 
                    className="text-base md:text-lg text-[#4A5848] font-light leading-relaxed md:leading-loose text-center sm:text-left
                               [&>p]:mb-6 [&>strong]:font-medium [&>strong]:text-[#1A2118]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: resultadoAlcancado.body }}
                  />

                  {/* Botões de Ação */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-8 border-t border-black/5">
                    <a 
                      href="https://wa.me/5561992576460?text=Ol%C3%A1!%20Realizei%20a%20autoavalia%C3%A7%C3%A3o%20no%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
                      style={{ background: "#4A7259", color: "#F7F5F1", fontFamily: "'Lato', sans-serif" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#3A5E47")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7259")}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Agendar uma conversa
                    </a>

                    <button 
                      onClick={reiniciarQuiz}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full border transition-all duration-300"
                      style={{ borderColor: "rgba(74,114,89,0.3)", color: "#4A7259", background: "transparent", fontFamily: "'Lato', sans-serif" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(74,114,89,0.05)"; (e.currentTarget as HTMLElement).style.borderColor = "#4A7259"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,114,89,0.3)"; }}
                    >
                      <RotateCcw className="w-4 h-4" />
                      Refazer o teste
                    </button>
                  </div>

                </div>

              </div>
            )}
          </div>
        </main>

      </div>
    </>
  );
}