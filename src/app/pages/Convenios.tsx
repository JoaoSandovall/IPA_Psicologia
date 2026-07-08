import { useState } from "react";
import { ChevronRight, ChevronLeft, Search, MessageCircle } from "lucide-react";

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

interface ConveniosSectionProps {
  onBack: () => void;
}

export default function ConveniosSection({ onBack }: ConveniosSectionProps) {
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
    <>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="flex flex-col lg:flex-row bg-[#F7F3EE] min-h-screen font-sans">
        
        <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 bg-[#4A7259] z-10 border-r border-[#3A5E47] lg:pt-20">
          
          <aside className="lg:sticky lg:top-20 flex flex-col px-8 py-12 lg:px-10 lg:py-8 h-auto lg:h-[calc(100vh-5rem)] overflow-y-auto hide-scrollbar pt-28">
            
            <div className="flex-1">
              <button
                onClick={onBack}
                className="group flex items-center gap-2 mb-10 text-[10px] xl:text-xs tracking-[0.2em] uppercase font-bold text-[#C8D8C2]/70 hover:text-[#F7F5F1] transition-colors duration-300"
              >
                <ChevronLeft size={16} className="transform group-hover:-translate-x-1 transition-transform duration-300" />
                Voltar ao site
              </button>

              {/* Títulos */}
              <p className="text-[10px] tracking-[0.28em] uppercase mb-3 font-semibold text-[#C8D8C2]">
                Instituto de Psicologia Aplicada
              </p>

              <h1 className="text-4xl xl:text-5xl font-bold text-[#F0EDE8] leading-tight mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                Convênios
              </h1>
              <p className="text-lg xl:text-xl italic text-[#F0EDE8]/50 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                & planos de saúde
              </p>

              {/* Box Contador */}
              <div className="inline-flex items-center gap-4 px-5 py-3 mb-8 bg-[#F0EDE8]/5 border border-[#F0EDE8]/10 rounded-sm shadow-sm">
                <span className="text-3xl font-bold text-[#C97B52]" style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>
                  {allItems.length}
                </span>
                <span className="text-[10px] leading-tight uppercase tracking-widest text-[#F0EDE8]/60 font-medium">
                  planos<br />aceitos
                </span>
              </div>

              {/* Input Busca Tailwind */}
              <div className="relative mb-8 group">
                <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#F0EDE8]/40 group-focus-within:text-[#F0EDE8] transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Buscar convênio..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3.5 text-sm bg-[#F0EDE8]/5 border border-[#F0EDE8]/15 rounded-sm text-[#F0EDE8] placeholder:text-[#F0EDE8]/40 outline-none focus:border-[#F0EDE8]/50 focus:bg-[#F0EDE8]/10 transition-all shadow-inner tracking-wide"
                />
              </div>

              {/* Letras Atalhos */}
              {!query.trim() && (
                <div className="hidden lg:flex flex-wrap gap-2 mb-8">
                  {convenioGroups.map((g) => (
                    <button
                      key={g.letter}
                      onClick={() => {
                        const el = document.getElementById(`grp-${g.letter}`);
                        if (el) {
                          const y = el.getBoundingClientRect().top + window.scrollY - 100;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className="w-8 h-8 flex items-center justify-center text-xs font-bold rounded-sm bg-[#F0EDE8]/5 border border-[#F0EDE8]/10 text-[#C8D8C2]/80 hover:bg-[#F0EDE8]/15 hover:text-[#F0EDE8] transition-all duration-200"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {g.letter}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Rodapé da Sidebar */}
            <div className="pt-8 mt-auto border-t border-[#F0EDE8]/10">
              <p className="text-sm font-semibold mb-1 text-[#F0EDE8]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Não encontrou seu plano?
              </p>
              <p className="text-xs text-[#F0EDE8]/60 font-light leading-relaxed mb-5">
                Atendemos particular com valores acessíveis. Entre em contato.
              </p>
              
              <a
                href="https://wa.me/5561992576460?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20as%20consultas%20particulares."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-3.5 text-[11px] font-bold uppercase tracking-widest rounded-sm bg-[#C97B52] text-[#F7F5F1] hover:bg-[#B56A42] transition-colors shadow-lg"
              >
                <MessageCircle size={16} />
                Falar no WhatsApp
              </a>
            </div>
          </aside>
        </div>

        {/* ── 2. LADO DIREITO: ÁREA DE CONTEÚDO (LISTA) ── */}
        <main className="flex-1 flex justify-center px-6 py-12 lg:px-16 xl:px-24 lg:py-24 w-full lg:pt-36">
          
          <div className="w-full max-w-4xl">
            {noResults ? (
              <div className="flex flex-col items-center justify-center min-h-[50vh] text-center bg-white/40 rounded-sm border border-black/5 p-12 shadow-sm">
                <span className="text-[#4A7259]/15 text-8xl font-bold mb-6" style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1 }}>?</span>
                <p className="text-lg text-[#2A3528] mb-2 font-medium">
                  Nenhum resultado para <em className="text-[#C97B52] not-italic">"{query}"</em>
                </p>
                <p className="text-sm text-[#6A7368] font-light">Tente buscar por outro nome ou verifique a cobertura no WhatsApp.</p>
              </div>
            ) : (
              <div className="flex flex-col gap-14">
                {filteredGroups.map((group) => (
                  <div key={group.letter} id={`grp-${group.letter}`} className="scroll-mt-28">
                    
                    {/* Cabeçalho da Letra (Estilo moderno com linha gradiente) */}
                    <div className="flex items-center gap-6 mb-6">
                      <h2 className="text-6xl lg:text-7xl font-bold text-[#4A7259]/15 select-none" style={{ fontFamily: "'Playfair Display', serif" }}>
                        {group.letter}
                      </h2>
                      <div className="flex-1 h-px bg-gradient-to-r from-[#4A7259]/15 to-transparent"></div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#9AA89A]">
                        {group.items.length} {group.items.length === 1 ? "plano" : "planos"}
                      </span>
                    </div>

                    {/* Container elegante dos itens da lista */}
                    <div className="bg-white/50 border border-black/5 rounded-sm p-2 lg:p-6 shadow-sm">
                      {group.items.map((item, i) => (
                        <div
                          key={item}
                          className={`group flex items-center justify-between py-4 px-4 transition-all duration-300 cursor-default rounded-sm hover:bg-[#4A7259]/5 hover:pl-6 ${i < group.items.length - 1 ? 'border-b border-black/5' : ''}`}
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#4A7259]/30 group-hover:bg-[#C97B52] transition-colors duration-300 shrink-0" />
                            <span className="text-sm lg:text-base text-[#2A3528] font-medium tracking-wide group-hover:text-[#4A7259] transition-colors duration-300">
                              {item}
                            </span>
                          </div>
                          <ChevronRight size={16} className="text-[#C8D0C6] group-hover:text-[#4A7259] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                        </div>
                      ))}
                    </div>

                  </div>
                ))}

                {/* Banner de Aviso no Final */}
                <div className="mt-6 p-8 rounded-sm bg-[#4A7259]/5 border border-[#4A7259]/15">
                  <p className="text-base font-semibold mb-2 text-[#2A3528]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Lista atualizada — {allItems.length} convênios
                  </p>
                  <p className="text-sm text-[#4A5848] font-light leading-relaxed">
                    Caso seu plano não esteja listado acima, entre em contato pelo número <a href="https://wa.me/5561992576460" target="_blank" rel="noopener noreferrer" className="text-[#C97B52] font-semibold hover:underline">(61) 99257-6460</a>. Verificamos a cobertura individualmente e sem compromisso.
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}