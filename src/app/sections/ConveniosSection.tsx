import { useState } from "react";
import { ChevronRight, Search, Phone } from "lucide-react";

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
  onGoContact: () => void;
}

export default function ConveniosSection({ onBack, onGoContact }: ConveniosSectionProps) {
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
    <div className="flex flex-col lg:flex-row" style={{ fontFamily: "'Lato', sans-serif", minHeight: "100vh" }}>
      <aside className="w-full lg:w-[360px] xl:w-[400px] lg:sticky lg:top-0 lg:h-screen flex flex-col justify-between px-8 py-10 lg:px-10 lg:py-14 lg:overflow-y-auto" style={{ background: "#4A7259", flexShrink: 0, paddingTop: "5.5rem" }}>
        <div className="lg:hidden" style={{ paddingTop: "4rem" }} />
        <div>
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

          <p className="text-xs tracking-[0.28em] uppercase mb-5 font-semibold" style={{ color: "#4A7259" }}>
            Instituto de Psicologia Aplicada
          </p>

          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.25rem, 4vw, 3.25rem)", fontWeight: 700, color: "#F0EDE8", lineHeight: 1.1, marginBottom: "0.5rem" }}>
            Convênios
          </h1>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.125rem", fontStyle: "italic", color: "rgba(240,237,232,0.4)", marginBottom: "2.5rem" }}>
            & planos de saúde
          </p>

          <div className="inline-flex items-center gap-3 px-4 py-2.5 mb-8" style={{ background: "rgba(240,237,232,0.08)", border: "1px solid rgba(240,237,232,0.14)", borderRadius: "2px" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.75rem", fontWeight: 700, color: "#C97B52", lineHeight: 1 }}>
              {allItems.length}
            </span>
            <span className="text-xs leading-tight" style={{ color: "rgba(240,237,232,0.55)", fontWeight: 300 }}>
              planos<br />aceitos
            </span>
          </div>

          <div className="relative mb-10">
            <Search size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" style={{ color: "rgba(240,237,232,0.3)" }} />
            <input
              type="text"
              placeholder="Buscar convênio..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-3 text-sm outline-none transition-all"
              style={{ background: "rgba(240,237,232,0.08)", border: "1px solid rgba(240,237,232,0.15)", borderRadius: "2px", color: "#F0EDE8", fontFamily: "'Lato', sans-serif", letterSpacing: "0.01em" }}
              onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(240,237,232,0.45)")}
              onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "rgba(240,237,232,0.15)")}
            />
          </div>

          {!query.trim() && (
            <div className="hidden lg:flex flex-wrap gap-1.5 mb-10">
              {convenioGroups.map((g) => (
                <button
                  key={g.letter}
                  onClick={() => document.getElementById(`grp-${g.letter}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
                  className="w-7 h-7 flex items-center justify-center text-xs font-semibold transition-all duration-150 rounded-sm"
                  style={{ fontFamily: "'Playfair Display', serif", background: "rgba(240,237,232,0.07)", color: "rgba(240,237,232,0.45)", border: "1px solid rgba(240,237,232,0.1)" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(240,237,232,0.15)"; (e.currentTarget as HTMLElement).style.color = "#F0EDE8"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(240,237,232,0.07)"; (e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.45)"; }}
                >
                  {g.letter}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pt-8" style={{ borderTop: "1px solid rgba(240,237,232,0.1)" }}>
          <p className="text-sm font-semibold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: "#F0EDE8" }}>
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
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,232,0.5)"; (e.currentTarget as HTMLElement).style.color = "#F0EDE8"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(240,237,232,0.22)"; (e.currentTarget as HTMLElement).style.color = "rgba(240,237,232,0.7)"; }}
            >
              Agendar consulta
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-1 px-8 py-14 lg:px-16 lg:py-20" style={{ background: "#F7F3EE", paddingTop: "5.5rem", minHeight: "100vh" }}>
        {noResults && (
          <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "6rem", fontWeight: 700, color: "rgba(74,114,89,0.1)", lineHeight: 1 }}>?</span>
            <p className="mt-4 text-base" style={{ color: "#6A7368" }}>Nenhum resultado para <em style={{ color: "#C97B52" }}>"{query}"</em></p>
            <p className="mt-1 text-sm" style={{ color: "#AAA5A0", fontWeight: 300 }}>Ligue para verificar cobertura.</p>
          </div>
        )}

        {!noResults && (
          <div>
            {filteredGroups.map((group, gi) => (
              <div key={group.letter} id={`grp-${group.letter}`} style={{ scrollMarginTop: "5rem", borderBottom: gi < filteredGroups.length - 1 ? "1px solid rgba(26,33,24,0.07)" : "none", paddingBottom: "2.5rem", marginBottom: "2.5rem" }}>
                <div className="flex items-baseline gap-4 mb-5">
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, color: "rgba(74,114,89,0.18)", lineHeight: 1, userSelect: "none" }}>{group.letter}</span>
                  <span className="text-xs" style={{ color: "#B0ABA6", fontWeight: 300 }}>{group.items.length} {group.items.length === 1 ? "plano" : "planos"}</span>
                </div>

                <div>
                  {group.items.map((item, i) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-3.5 px-4 transition-all duration-150 cursor-default rounded-sm"
                      style={{ borderBottom: i < group.items.length - 1 ? "1px solid rgba(26,33,24,0.05)" : "none" }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(74,114,89,0.06)"; (e.currentTarget as HTMLElement).style.paddingLeft = "1.25rem"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.paddingLeft = "1rem"; }}
                    >
                      <div className="flex items-center gap-3">
                        <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#4A7259", opacity: 0.35, flexShrink: 0, display: "block" }} />
                        <span className="text-sm" style={{ color: "#2A3528", fontWeight: 400, letterSpacing: "0.01em" }}>{item}</span>
                      </div>
                      <ChevronRight size={13} style={{ color: "#C8D0C6", flexShrink: 0 }} />
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-8 p-6 rounded-sm" style={{ background: "rgba(74,114,89,0.06)", border: "1px solid rgba(74,114,89,0.12)" }}>
              <p className="text-sm font-semibold mb-1" style={{ color: "#2A3528" }}>Lista atualizada — {allItems.length} convênios aceitos</p>
              <p className="text-xs" style={{ color: "#6A7368", fontWeight: 300, lineHeight: 1.7 }}>
                Caso seu plano não esteja listado, entre em contato pelo <a href="tel:+5561992576460" style={{ color: "#4A7259", fontWeight: 500 }}>(61) 99257-6460</a> — verificamos a cobertura individualmente e sem compromisso.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}