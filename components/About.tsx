import { SectionReveal } from "./ui/SectionReveal";

export function About() {
  const pillars = [
    {
      title: "Nossa Missão",
      description: "Oferecer e entregar soluções contábeis de elevado padrão e qualidade, proporcionando plena satisfação de nossos clientes."
    },
    {
      title: "Nossa Visão",
      description: "Estar entre os grandes escritórios de contabilidade do Brasil, visando o constante crescimento e desenvolvimento dos clientes e da equipe."
    },
    {
      title: "Nossos Valores",
      description: "Ética e transparência, respeito profundo aos clientes, fornecedores e colegas, sempre focando na superação de expectativas."
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-gradient-to-t from-slate-950 via-[#4A0012] to-slate-950 text-white relative overflow-hidden">
      {/* Premium Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none w-full max-w-sm">
        <img 
          src="./favicongrande.png" 
          alt="Watermark" 
          className="w-full h-auto object-contain drop-shadow-[0_0_15px_rgba(183,4,44,0.5)]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <SectionReveal className="lg:w-5/12">
            <div className="inline-block px-4 py-1.5 bg-secondary/10 text-secondary border border-secondary/30 rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
              Trajetória de Sucesso
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
              A base forte para o <br />
              <span className="text-primary italic">crescimento corporativo.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Nossa história é pautada por levar inovação e extrema segurança técnica aos negócios de nossos clientes. Cada CNPJ que atendemos recebe nossa assinatura de qualidade inegociável.
            </p>
          </SectionReveal>
          
          <div className="lg:w-7/12 flex flex-col justify-center border-l border-white/10 lg:pl-16">
            <div className="space-y-12">
              {pillars.map((pillar, index) => (
                <SectionReveal key={index} delay={0.2 + (index * 0.1)}>
                  <div className="flex gap-6">
                     <span className="text-6xl font-black text-white/5 font-display leading-none mt-1">0{index + 1}</span>
                     <div>
                       <h3 className="text-xl font-bold uppercase tracking-wider mb-2 text-secondary">{pillar.title}</h3>
                       <p className="text-slate-300 font-medium leading-relaxed text-lg">{pillar.description}</p>
                     </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
