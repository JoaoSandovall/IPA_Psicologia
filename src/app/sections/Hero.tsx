import ipaLogo from "@/imports/marca-ipa_sem_fundo.png";

interface HeroProps {
  scrollTo: (href: string) => void;
}

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="topo" className="relative min-h-screen flex overflow-hidden">
      <div className="flex lg:hidden flex-col w-full min-h-screen bg-[#3D5447]">
        {/* TOPO VERDE ESCURO MOBILE */}
        <div className="relative flex-1 flex flex-col items-center justify-center py-10 px-4 overflow-hidden">
          <div className="absolute w-[260px] h-[260px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute w-[380px] h-[380px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 border border-[#C97B52]/60 rounded-full px-5 py-2 mb-6">
            <p className="text-[10px] tracking-[0.15em] uppercase font-semibold text-[#C97B52]">
              • BRASÍLIA, DF
            </p>
          </div>

          <div className="relative z-10 text-center text-[#F7F5F1]">
            <h2 className="text-7xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>IPA</h2>
            <p className="text-[9px] uppercase tracking-[0.25em] opacity-80">Instituto de Psicologia Aplicada</p>
          </div>

          <div className="relative z-10 mt-8 flex items-center gap-4 opacity-50">
            <div className="w-12 h-[1px] bg-[#C97B52]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C97B52]" />
            <div className="w-12 h-[1px] bg-[#C97B52]" />
          </div>
        </div>

        {/* CARD CREME INFERIOR MOBILE */}
        <div className="relative z-20 bg-[#F4F1EA] rounded-t-[32px] px-6 pt-6 pb-12 flex flex-col items-center text-center shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
          <div className="w-10 h-1 bg-black/10 rounded-full mb-8" />
          <h1 className="font-semibold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118", fontSize: "2.3rem", lineHeight: 1.1 }}>
            Cuidar da mente<br/>
            <em style={{ color: "#4A7259" }}>é cuidar da vida.</em>
          </h1>
          <p className="text-sm leading-relaxed mb-8 px-2" style={{ color: "#4A5848", fontWeight: 300 }}>
            Há mais de 2 décadas a ser referência no cuidado psicológico e acolhimento humano.
          </p>
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

      {/* LEFT PANEL DESKTOP */}
      <div
        className="relative z-10 hidden lg:flex flex-col justify-center w-full lg:w-[52%] px-8 sm:px-14 lg:px-24 py-32"
        style={{ background: "#F4F1EA" }}
      >
        <div className="flex items-center gap-3 mb-8">
          <div style={{ width: 36, height: 1, background: "#C97B52" }} />
          <p className="text-xs tracking-[0.32em] uppercase font-semibold" style={{ color: "#C97B52" }}>
            Brasília, DF
          </p>
        </div>

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

        <p
          className="text-base sm:text-lg leading-relaxed mb-10"
          style={{ color: "#4A5848", fontWeight: 300, maxWidth: 480 }}
        >
          Há mais de 2 décadas sendo referência em cuidado psicológico e acolhimento humano.
        </p>

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

        <div className="absolute bottom-10 left-8 sm:left-14 lg:left-24 flex items-center gap-3">
          <div className="w-8 h-px animate-pulse" style={{ background: "rgba(26,33,24,0.2)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(26,33,24,0.3)" }}>Role para baixo</span>
        </div>
      </div>

      {/* RIGHT PANEL DESKTOP */}
      <div
        className="hidden lg:flex flex-col items-center justify-center relative flex-1 overflow-hidden"
        style={{ background: "#3D5447" }}
      >
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
  );
}