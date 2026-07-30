import iconewhatsapp from "@/assets/icone-whatsapp.svg"
import SectionTitle from '../components/SectionTitle';

export default function Contato() {
  const whatsappNumber = "5561992576460";
  const mensagem = "Olá! Gostaria de agendar uma consulta.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;

  return (
    <section id="contato" style={{ background: "#EDEAE3" }} className="py-16 lg:py-20 flex flex-col items-center">
      <SectionTitle subtitle="Agende sua consulta" align="center" className="max-w-3xl px-6 lg:px-10 mb-10 md:mb-14">
        O primeiro passo é o mais importante.<br />
        <em className="italic text-[#C97B52]">Estamos aqui para você.</em>
      </SectionTitle>

      <div className="max-w-lg w-full mx-auto px-6 text-center bg-card rounded-sm border border-border/40 p-8 lg:p-12 shadow-sm bg-white">
        <p className="text-sm leading-relaxed mb-8" style={{ color: "#6A7368", fontWeight: 300 }}>
          Para sua maior comodidade e para um atendimento mais ágil, realizamos todos os nossos agendamentos diretamente pelo WhatsApp.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-3 w-full py-4 px-8 text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300"
          style={{ background: "#4A7259", color: "#C8D8C2" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#3A5E47";
            (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 25px -5px rgba(74, 114, 89, 0.4)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = "#4A7259";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            (e.currentTarget as HTMLElement).style.boxShadow = "none";
          }}
        >
          <img src={iconewhatsapp} alt="Ícone WhatsApp" className="w-5 h-5" />
          Agende pelo WhatsApp
        </a>

        <p className="mt-6 text-xs" style={{ color: "#9AA89A", fontWeight: 300 }}>
          Nossa equipe responderá o mais breve possível.
        </p>
      </div>
    </section>
  );
}