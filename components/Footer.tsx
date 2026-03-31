import { SectionReveal } from "./ui/SectionReveal";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-slate-300 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          
          {/* Brand */}
          <SectionReveal className="lg:col-span-1">
            <img src="./logoSKL.png" alt="SKL" className="h-10 w-auto mb-6 object-contain brightness-0 invert" />
            <p className="text-sm border-l-2 border-primary pl-4 font-medium mb-6">
              Assessoria e Serviços Contábeis de excelência.
            </p>
          </SectionReveal>

          {/* Links */}
          <SectionReveal delay={0.1} className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">Menu de Acesso</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Página Inicial</a></li>
              <li><a href="#about" className="hover:text-primary-foreground transition-colors">Metodologia</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Serviços</a></li>
              <li><a href="https://sklcontabil.com.br/area-restrita" className="hover:text-primary-foreground transition-colors">Área Restrita</a></li>
            </ul>
          </SectionReveal>

          {/* Contact */}
          <SectionReveal delay={0.2} className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">Contatos Rápidos</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li><a href="https://sklcontabil.com.br/contato-via-whatsapp/" className="hover:text-primary-foreground transition-colors">Atendimento via WhatsApp</a></li>
              <li><a href="https://sklcontabil.com.br/orcamento/" className="hover:text-primary-foreground transition-colors">Peça seu Orçamento</a></li>
              <li><a href="https://sklcontabil.com.br/abra-sua-empresa/" className="hover:text-primary-foreground transition-colors">Traga sua contabilidade</a></li>
            </ul>
          </SectionReveal>

          {/* Newsletter */}
          <SectionReveal delay={0.3} className="lg:col-span-1">
            <h4 className="text-white font-bold mb-6">Receba Nossas Notícias</h4>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-primary-foreground w-full rounded-sm"
              />
              <button 
                type="button" 
                className="bg-primary text-white font-bold px-4 hover:bg-primary/90 transition-colors uppercase text-sm tracking-widest rounded-r-sm"
              >
                Enviar
              </button>
            </form>
          </SectionReveal>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-medium opacity-60">
          <p>© {new Date().getFullYear()} SKL Contabilidade. Todos os direitos reservados.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
