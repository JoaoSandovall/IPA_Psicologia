import ipaLogoSimple from "@/imports/logo.png";
import { Instagram, Facebook } from "lucide-react";

interface FooterProps {
  navLinks: Array<{ label: string; href: string }>;
  goConvenios: () => void;
  scrollTo: (href: string) => void;
}

export default function Footer({ navLinks, goConvenios, scrollTo }: FooterProps) {
  return (
    <footer style={{ background: "#111816" }} className="py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 text-center lg:text-left">
          
          {/* Bloco 1: Logo e Redes Sociais */}
          <div className="lg:col-span-2 flex flex-col items-center lg:items-start">
            <div className="mb-5">
              <img
                src={ipaLogoSimple}
                alt="IPA — Instituto de Psicologia Aplicada"
                style={{ height: 76, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.65 }}
              />
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "rgba(200,216,194,0.45)", fontWeight: 300 }}>
              Cuidado psicológico humanizado em Brasília, DF.
            </p>
            <div className="flex gap-4 mt-6 justify-center lg:justify-start w-full">
              <div className="flex gap-4">
                <a href="https://www.instagram.com/psicologia_ipa/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#C97B52] transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://www.facebook.com/ipapsicologia/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#C97B52] transition-colors">
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
              <li>STN Ed. Vital Brazil, Bl. M, Sala 212/214</li>
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
  );
}