import { Star, Heart, Shield, Users } from "lucide-react";
import imgcerebro from "../../imports/cerebro.jpg";

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
    <section className="w-full bg-[#3D5447] pt-20 pb-24 md:pt-32 md:pb-32 px-6 lg:px-10 relative z-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-5 flex flex-col text-center lg:text-left">
            <div className="mb-8 md:mb-10">
              <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <div className="hidden lg:block" style={{ width: 36, height: 1, background: "#C97B52" }} />
                <p 
                  className="text-xs tracking-[0.32em] uppercase font-semibold text-[#C97B52]" 
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  Nossos Diferenciais
                </p>
                <div className="lg:hidden" style={{ width: 36, height: 1, background: "#C97B52" }} />
              </div>
              
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#F7F5F1]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Cuidado que vai além <br className="hidden lg:block"/> da consulta.
              </h2>
            </div>
            
            <div className="flex-1 relative rounded-sm overflow-hidden shadow-lg w-full bg-[#EAE6DF] min-h-[300px] lg:min-h-0">
              <img 
                src={imgcerebro} 
                alt="Atendimento humanizado na IPA" 
                className="absolute inset-0 w-full h-full object-cover transition-transform hover:scale-105 duration-700" 
              />
            </div>
          </div>
          
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div 
                  key={f.title} 
                  className="bg-[#F4F1EA] rounded-sm p-8 border border-[#1A2118]/10 transition-shadow duration-300 hover:shadow-lg relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 p-6 opacity-[0.10] transition-opacity duration-300 group-hover:opacity-[0.20] pointer-events-none">
                    <Icon size={120} className="text-[#4A7259]" />
                  </div>
                  
                  <div className="relative z-10 pointer-events-none">
                    <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 bg-[#4A7259]">
                      <Icon size={22} color="#F4F1EA" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-[#1A2118]" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {f.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#4A5848]" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
                      {f.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}