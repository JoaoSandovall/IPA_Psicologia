export default function Contato() {
  const listPsychologists = [
    "Camila Rodrigues",
    "Giovani Tápia",
    "Maira Muniz",
    "Matheus Leon",
    "Samara Pires",
    "Vitória Shalders",
    "Yan Ribeiro"
  ];

  return (
    <section id="contato" style={{ background: "#EDEAE3" }} className="py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center mb-14">
        <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#4A7259" }}>
          Agende sua consulta
        </p>
        <h2 className="text-3xl lg:text-4xl font-semibold leading-snug" style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}>
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
              {listPsychologists.map((name) => (
                <option key={name}>{name}</option>
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
  );
}