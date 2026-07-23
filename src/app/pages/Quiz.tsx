import { useState, useEffect, useRef, useMemo } from "react";
import { ChevronLeft, RotateCcw, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
// Importando as novas tipagens estritas
import { questoes, resultados, QuizOption, QuizResult, QuizWeight } from "./quizData";

export default function Quiz() {
  const [passoAtual, setPassoAtual] = useState(0);
  // Estado agora é tipado estritamente com o peso permitido
  const [respostas, setRespostas] = useState<Record<number, QuizWeight>>({});
  const [quizFinalizado, setQuizFinalizado] = useState(false);
  
  // Ref para armazenar o ID do timeout e evitar memory leaks
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
    
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    
    // Cleanup function: garante que o scroll volta ao normal se o componente for desmontado
    return () => {
      document.body.style.overflow = '';
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const questaoAtual = questoes[passoAtual];
  const progresso = (passoAtual / questoes.length) * 100;
  const letrasOpcoes = ["A", "B", "C", "D"];

  const handleResponder = (peso: QuizWeight) => {
    // 1. Limpa qualquer timeout pendente se o usuário clicar duas vezes rápido
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 2. Salva a resposta
    setRespostas(prev => ({ ...prev, [passoAtual]: peso }));
    
    // 3. Define o novo timeout com segurança
    timeoutRef.current = setTimeout(() => {
      if (passoAtual < questoes.length - 1) {
        setPassoAtual(prev => prev + 1);
      } else {
        setQuizFinalizado(true);
      }
    }, 450);
  };

  const handleVoltar = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    if (passoAtual > 0) {
      setPassoAtual(prev => prev - 1);
    }
  };

  const reiniciarQuiz = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setPassoAtual(0);
    setRespostas({});
    setQuizFinalizado(false);
  };

  const {resultadoAlcancado } = useMemo(() => {
    if (!quizFinalizado) return { pontuacaoTotal: 0, resultadoAlcancado: resultados[0] };

    const total = Object.values(respostas).reduce((acc, curr) => acc + curr, 0);
    const resultado = resultados.find(
      (r: QuizResult) => total >= r.min && total <= r.max
    ) || resultados[0];

    return { pontuacaoTotal: total, resultadoAlcancado: resultado };
  }, [quizFinalizado, respostas]);

  return (
    <div className="fixed inset-0 z-[9999] h-screen h-[100dvh] w-screen overflow-hidden bg-[#F4F1EA] text-[#1A2118] font-sans flex flex-col">
      
      {/* BARRA DE PROGRESSO */}
      <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-[#E6E2D8] z-50">
        <div 
          className="h-full bg-[#C97B52] transition-all duration-700 ease-out" 
          style={{ width: `${quizFinalizado ? 100 : progresso}%` }} 
        />
      </div>

      {/* CABEÇALHO SUPERIOR FIXO */}
      <header className="flex justify-between items-center w-full px-6 py-5 md:px-12 md:py-8 shrink-0 z-40 mt-1 md:mt-0">
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
      <main className="flex-1 overflow-y-auto overscroll-contain hide-scrollbar w-full">
        <div className="flex flex-col min-h-full w-full">
          
          <div className="flex-grow"></div>
          
          <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-4 md:py-8 shrink-0">
          
            {!quizFinalizado ? (
              /* ESTADO 1: PERGUNTAS */
              <div className="flex flex-col w-full animate-in fade-in duration-500">
                
                {/* Títulos */}
                <div className="mb-8 md:mb-12 text-center md:text-left px-2">
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
                  {questaoAtual.opcoes.map((opcao: QuizOption, index: number) => {
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
                        <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm md:text-base font-bold transition-all duration-300 mr-5 md:mr-6 ${
                          isSelecionada ? 'bg-[#4A7259] text-white shadow-md' : 'bg-[#F4F1EA] text-[#4A5848] group-hover:bg-[#4A7259] group-hover:text-white'
                        }`} style={{ fontFamily: "'Lato', sans-serif" }}>
                          {letrasOpcoes[index]}
                        </div>
                        
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

                {/* Botão Anterior */}
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
                            
              <div className="animate-in fade-in zoom-in-95 duration-700 flex flex-col w-full items-center justify-center">
                
                {/* Títulos do Resultado */}
                <div className="mb-8 md:mb-10 text-center w-full">
                  <span 
                    className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-[#C97B52] font-bold mb-4 block"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                  >
                    {resultadoAlcancado.kicker}
                  </span>
                  <h2 
                    className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#1A2118] leading-tight px-2 md:px-4"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {resultadoAlcancado.title}
                  </h2>
                </div>

                {/* Cartão de Texto e Botões */}
                <div className="bg-white w-full rounded-2xl p-6 sm:p-8 md:p-14 shadow-xl shadow-black/5 border border-black/5 flex flex-col">
                  
                  <div 
                    className="text-base md:text-lg text-[#4A5848] font-light leading-relaxed md:leading-loose text-center sm:text-left
                               [&>p]:mb-6 [&>strong]:font-medium [&>strong]:text-[#1A2118]"
                    style={{ fontFamily: "'Lato', sans-serif" }}
                    dangerouslySetInnerHTML={{ __html: resultadoAlcancado.body }}
                  />

                  <div className="mt-4 md:mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4 pt-6 md:pt-8 border-t border-black/5">
                    <a 
                      href="https://wa.me/5561992576460?text=Ol%C3%A1!%20Realizei%20a%20autoavalia%C3%A7%C3%A3o%20no%20site%20e%20gostaria%20de%20agendar%20uma%20conversa."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 shadow-md hover:shadow-lg bg-[#4A7259] hover:bg-[#3A5E47] text-[#F7F5F1]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      <MessageCircle className="w-4 h-4 shrink-0" />
                      Agendar uma conversa
                    </a>

                    <button 
                      onClick={reiniciarQuiz}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 md:px-8 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] rounded-full border transition-all duration-300 bg-transparent text-[#4A7259] border-[rgba(74,114,89,0.3)] hover:bg-[rgba(74,114,89,0.05)] hover:border-[#4A7259]"
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      <RotateCcw className="w-4 h-4 shrink-0" />
                      Refazer o teste
                    </button>
                  </div>

                </div>

              </div>
            )}
          </div>

          {/* Espaçador inferior */}
          <div className="flex-grow"></div>
        </div>
      </main>

    </div>
  );
}