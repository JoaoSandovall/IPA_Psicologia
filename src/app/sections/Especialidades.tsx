import { Heart, Shield, Users, Star } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Cada paciente é único. Nossa abordagem valoriza a história, os sentimentos e o ritmo individual de cada pessoa no processo terapêutico.",
  },
  {
    icon: Shield,
    title: "Sigilo Profissional",
    description: "Tudo o que é compartilhado em sessão permanece em total sigilo. Confiança é a base de qualquer processo terapêutico saudável.",
  },
  {
    icon: Users,
    title: "Equipe Multidisciplinar",
    description: "Psicólogos com diferentes especializações que colaboram entre si para oferecer o cuidado mais adequado para cada necessidade.",
  },
  {
    icon: Star,
    title: "Ambiente Acolhedor",
    description: "Nossos espaços foram projetados para transmitir calma, segurança e conforto desde o primeiro momento em que você entra na clínica.",
  },
];

export default function Especialidades() {
  return (
    <section id="especialidades" style={{ background: "#DED9D0" }} className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-2xl mb-16">
          <p className="text-xs tracking-[0.25em] uppercase mb-4 font-semibold" style={{ color: "#4A7259" }}>
            Por que nos escolher
          </p>
          <h2
            className="text-3xl lg:text-4xl font-semibold leading-snug"
            style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}
          >
            Cuidado que vai além da consulta
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => {
            const Icon = f.icon;
            return (
              <div key={f.title} className="bg-card rounded-sm p-8 border border-border/40 transition-shadow duration-300 hover:shadow-md">
                <div className="w-10 h-10 rounded-sm flex items-center justify-center mb-6" style={{ background: "#4A7259" }}>
                  <Icon size={20} color="#C8D8C2" />
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#1A2118" }}>
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#3A4838", fontWeight: 300 }}>
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}