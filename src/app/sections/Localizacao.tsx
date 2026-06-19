import { MapPin, Clock, Phone, Mail } from "lucide-react";

export default function Localizacao() {
  return (
    <section id="localizacao" style={{ background: "#1A2118" }} className="py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="w-full flex flex-col items-start text-left">
          <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#C97B52" }}>
            Como nos encontrar
          </p>
          <h2
            className="text-[2rem] leading-tight lg:text-4xl font-semibold lg:leading-snug mb-8 lg:mb-10"
            style={{ fontFamily: "'Playfair Display', serif", color: "#C8D8C2" }}
          >
            Estamos na
            <br />
            Asa Norte, Brasília — DF
          </h2>

          <div className="space-y-6 w-full">
            {[
              { Icon: MapPin, label: "Endereço", text: "STN Edifício Vital Brazil, Bloco M\n1° andar, Sala 212/214 — Asa Norte\nBrasília — DF, 70770-100" },
              { Icon: Clock, label: "Horário de Funcionamento", text: "Segunda a Sexta: 08h às 17h\nSábado e Domingo: Fechado" },
              { Icon: Phone, label: "Telefone / WhatsApp", text: "(61) 99257-6460" },
              { Icon: Mail, label: "E-mail", text: "contato@ipapsicologia.com.br" },
            ].map(({ Icon, label, text }) => (
              <div key={label} className="flex items-start gap-4 w-full">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "rgba(201,123,82,0.15)" }}>
                  <Icon size={18} color="#C97B52" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold mb-1" style={{ color: "#C8D8C2" }}>{label}</p>
                  <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "rgba(200,216,194,0.6)", fontWeight: 300 }}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full rounded-sm overflow-hidden h-[340px] lg:h-[480px] mt-2 lg:mt-0" style={{ background: "rgba(200,216,194,0.06)", border: "1px solid rgba(200,216,194,0.1)" }}>
          <iframe
            title="Localização IPA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3840.3456343013777!2d-47.89979952403532!3d-15.732844484898932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a39d82ca80417%3A0xdafe33d521fa3da7!2sInstituto%20de%20Psicologia%20Aplicada%20-%20IPA!5e0!3m2!1spt-BR!2sbr!4v1781053146991!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}