import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Lock, Calendar, Link as LinkIcon, Blocks, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Área Restrita | SKL Contabilidade',
};

const accessLinks = [
  {
    title: "Plataforma Principal",
    description: "Acesse seus documentos, holerites e guias de impostos de forma segura.",
    icon: Lock,
    href: "https://vip.acessorias.com/sklcontabilidade",
    primary: true
  },
  {
    title: "Agenda e Eventos",
    description: "Fique por dentro das obrigações fiscais e nossos próximos treinamentos.",
    icon: Calendar,
    href: "#",
    primary: false
  },
  {
    title: "Principais Links",
    description: "Acesso rápido aos principais portais governamentais e certidões.",
    icon: LinkIcon,
    href: "#",
    primary: false
  },
  {
    title: "Plataformas Acessórias",
    description: "Sistemas parceiros e ferramentas integradas para a gestão do seu negócio.",
    icon: Blocks,
    href: "#",
    primary: false
  }
];

export default function AreaRestrita() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      {/* Header */}
      <section className="bg-primary pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/20 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-6 shadow-inner border border-white/20">
            <Lock className="w-8 h-8 text-secondary" />
          </div>
          <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Portal do Cliente</h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg sm:text-xl font-medium">
            Acesso exclusivo e seguro a todos os sistemas, documentos e serviços digitais da sua empresa.
          </p>
        </div>
      </section>

      {/* Grid of Buttons/Cards */}
      <section className="py-20 px-4 flex-grow relative">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accessLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group relative p-8 sm:p-10 rounded-2xl border transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center cursor-pointer ${
                  item.primary 
                    ? "bg-primary border-primary hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-1" 
                    : "bg-white border-slate-200 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1"
                }`}
              >
                <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center transition-colors shadow-sm ${
                  item.primary ? "bg-white/20 text-white" : "bg-slate-100 text-slate-700 group-hover:bg-primary/10 group-hover:text-primary"
                }`}>
                  <item.icon className="w-8 h-8" />
                </div>
                
                <div className="flex-grow">
                  <h3 className={`text-2xl font-bold mb-2 ${item.primary ? "text-white" : "text-neutral-900"}`}>
                    {item.title}
                  </h3>
                  <p className={`font-medium text-sm sm:text-base leading-relaxed ${item.primary ? "text-white/80" : "text-slate-500"}`}>
                    {item.description}
                  </p>
                </div>
                
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-2 ${
                  item.primary ? "bg-white/20 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary"
                }`}>
                  <ArrowRight className="w-6 h-6" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
