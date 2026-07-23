import ipaLogo from "@/assets/marca-ipa-sem-fundo.png";

interface HeroProps {
  scrollTo: (href: string) => void;
}

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section id="topo" className="relative min-h-screen flex overflow-hidden">
      
      {/* ── MOBILE E TABLET (< 1024px) ── */}
      <div className="flex lg:hidden flex-col w-full min-h-screen bg-[#3D5447]">
        <div className="relative flex-1 flex flex-col items-center justify-center py-10 px-4 overflow-hidden">
          <div className="absolute w-[260px] md:w-[360px] h-[260px] md:h-[360px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute w-[380px] md:w-[500px] h-[380px] md:h-[500px] rounded-full border border-white/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 border border-[#C97B52]/60 rounded-full px-5 py-2 mb-6">
            <p className="text-[10px] tracking-[0.15em] uppercase font-semibold text-[#C97B52]">
              • BRASÍLIA, DF
            </p>
          </div>

          <div className="relative z-10 text-center text-[#F7F5F1]">
            <h2 className="text-7xl md:text-8xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>IPA</h2>
            <p className="text-[9px] md:text-xs uppercase tracking-[0.25em] opacity-80">Instituto de Psicologia Aplicada</p>
          </div>

          <div className="relative z-10 mt-8 md:mt-12 flex items-center gap-4 opacity-50">
            <div className="w-12 h-[1px] bg-[#C97B52]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#C97B52]" />
            <div className="w-12 h-[1px] bg-[#C97B52]" />
          </div>
        </div>

        <div className="relative z-20 bg-[#F4F1EA] rounded-t-[32px] px-6 pt-6 pb-12 flex flex-col items-center text-center shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
          <div className="w-10 h-1 bg-black/10 rounded-full mb-8" />
          <div className="w-full max-w-md mx-auto">
            <h1 className="font-semibold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118", fontSize: "clamp(2.2rem, 8vw, 3rem)", lineHeight: 1.1 }}>
              Cuidar da mente<br/>
              <em style={{ color: "#4A7259" }}>é cuidar da vida.</em>
            </h1>
            <p className="text-sm md:text-base leading-relaxed mb-8 px-2" style={{ color: "#4A5848", fontWeight: 300 }}>
              Há mais de 2 décadas sendo referência em cuidado psicológico e acolhimento humano.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
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
                Nossa Equipe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="relative z-10 hidden lg:flex flex-col justify-center w-1/2 px-10 xl:px-20 py-32"
        style={{ background: "#F4F1EA" }}
      >
        <div className="max-w-xl w-full ml-auto mr-0 xl:mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div style={{ width: 36, height: 1, background: "#C97B52" }} />
            <p className="text-xs tracking-[0.32em] uppercase font-semibold whitespace-nowrap" style={{ color: "#C97B52" }}>
              Brasília, DF
            </p>
          </div>

          <h1
            className="font-semibold mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1A2118",
              fontSize: "clamp(2.8rem, 4vw, 4.5rem)",
              lineHeight: 1.1,
            }}
          >
            Cuidar da mente
            <br />
            <em style={{ color: "#4A7259" }}>é cuidar da vida.</em>
          </h1>

          <p
            className="text-lg leading-relaxed mb-10 max-w-[460px]"
            style={{ color: "#4A5848", fontWeight: 300 }}
          >
            Há mais de 2 décadas sendo referência em cuidado psicológico e acolhimento humano.
          </p>

          <div className="flex flex-col xl:flex-row gap-4">
            <button
              onClick={() => scrollTo("#contato")}
              className="px-8 py-4 text-sm font-semibold rounded-sm transition-all duration-200 text-center whitespace-nowrap"
              style={{ background: "#4A7259", color: "#F7F5F1", letterSpacing: "0.07em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#3A5E47")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#4A7259")}
            >
              Agendar Consulta
            </button>
            <button
              onClick={() => scrollTo("#equipe")}
              className="px-8 py-4 text-sm font-semibold rounded-sm border transition-all duration-200 text-center whitespace-nowrap"
              style={{ borderColor: "rgba(74,114,89,0.35)", color: "#4A7259", letterSpacing: "0.07em", background: "transparent" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(74,114,89,0.07)"; (e.currentTarget as HTMLElement).style.borderColor = "#4A7259"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,114,89,0.35)"; }}
            >
              Conheça Nossa Equipe
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 left-10 xl:left-20 flex items-center gap-3">
          <div className="w-8 h-px animate-pulse" style={{ background: "rgba(26,33,24,0.2)" }} />
          <span className="text-xs tracking-widest uppercase" style={{ color: "rgba(0, 0, 0, 0.3)" }}>Role para baixo</span>
        </div>
      </div>

      <div
        className="hidden lg:flex flex-col items-center justify-center relative w-1/2 overflow-hidden"
        style={{ background: "#3D5447" }}
      >
        <div
          className="absolute pointer-events-none"
          style={{
            width: "clamp(400px, 40vw, 600px)", height: "clamp(400px, 40vw, 600px)",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.07)",
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            width: "clamp(280px, 30vw, 420px)", height: "clamp(280px, 30vw, 420px)",
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
            className="text-xs tracking-[0.3em] uppercase text-center"
            style={{ color: "rgba(255,255,255,0.3)", fontWeight: 500 }}
          >
            Instituto de Psicologia Aplicada
          </p>
        </div>
      </div>
    </section>
  );
}