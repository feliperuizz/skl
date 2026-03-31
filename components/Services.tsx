import { SectionReveal } from "./ui/SectionReveal";
import { Calculator, FileText, Briefcase, FileSignature } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Cálculos de Impostos",
      description: "Planejamento tributário estratégico focado em reduzir a carga tributária da sua empresa de forma totalmente legal.",
      icon: <Calculator size={32} className="text-primary group-hover:text-white transition-colors duration-300 relative z-10 block mb-6" />
    },
    {
      title: "Modelos de Documentos",
      description: "Disponibilizamos modelos padronizados, contratos e atas para agilizar as operações diárias dos nossos clientes.",
      icon: <FileText size={32} className="text-primary group-hover:text-white transition-colors duration-300 relative z-10 block mb-6" />
    },
    {
      title: "Facilitador Contábil",
      description: "Ferramentas acessíveis e soluções online para controle financeiro e documentação ágil em tempo real.",
      icon: <Briefcase size={32} className="text-primary group-hover:text-white transition-colors duration-300 relative z-10 block mb-6" />
    },
    {
      title: "Certidões Negativas",
      description: "Emissão e controle contínuo das CNDs da sua empresa, garantindo sua regularidade fiscal irretocável.",
      icon: <FileSignature size={32} className="text-primary group-hover:text-white transition-colors duration-300 relative z-10 block mb-6" />
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
                Nossa Expertise
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
                Soluções estratégicas para o seu negócio.
              </h2>
            </div>
            <p className="text-slate-600 font-medium max-w-md">
              Atendemos aos mais variados ramos de atividade com excelência técnica e agilidade no suporte diário.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <div className="group h-full p-8 border border-slate-200 bg-background hover:bg-foreground transition-all duration-500 rounded-2xl relative overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-2">
                
                {/* Background Favicongrande effect on hover! */}
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transition-all duration-700 translate-y-full group-hover:translate-y-0 bg-cover bg-no-repeat bg-bottom" 
                     style={{ backgroundImage: 'url("/favicongrande.png")' }}>
                </div>
                
                {/* Dark gradient to ensure readability when hovered over the background */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  {service.icon}
                  <h3 className="text-xl font-display font-bold mb-4 transition-colors duration-300 group-hover:text-white">{service.title}</h3>
                  <p className="text-slate-600 group-hover:text-slate-300 transition-colors duration-300 relative z-10">
                    {service.description}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
