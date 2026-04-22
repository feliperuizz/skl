"use client";

import { SectionReveal } from "./ui/SectionReveal";
import { Mail, Phone, Instagram, Linkedin, Clock, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          
          {/* Brand & Slogan */}
          <SectionReveal className="lg:col-span-1">
            <div className="mb-8">
              <img 
                src="./logo_white.png" 
                alt="SKL" 
                className="h-12 w-auto mb-6 object-contain" 
              />
              <p className="text-sm font-medium italic leading-relaxed text-slate-400 border-l-2 border-[#C8923D] pl-4">
                "Contabilizando sucessos, simplificando negócios e maximizando oportunidades."
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#C8923D] hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#C8923D] hover:text-white transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </SectionReveal>

          {/* Navigation Menu */}
          <SectionReveal delay={0.1} className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Menu de Acesso
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#C8923D]"></span>
            </h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-[#C8923D] transition-colors">Página Inicial</a></li>
              <li><a href="#about" className="hover:text-[#C8923D] transition-colors">Metodologia</a></li>
              <li><a href="#services" className="hover:text-[#C8923D] transition-colors">Serviços</a></li>
              <li><a href="https://sklcontabil.com.br/area-restrita" className="hover:text-[#C8923D] transition-colors">Área Restrita</a></li>
            </ul>
          </SectionReveal>

          {/* Contact Info */}
          <SectionReveal delay={0.2} className="lg:col-span-1">
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Contatos Rápidos
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#C8923D]"></span>
            </h4>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-[#C8923D] shrink-0" />
                <a href="mailto:comercial@sklcontabil.com.br" className="hover:text-white transition-colors">comercial@sklcontabil.com.br</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-[#C8923D] shrink-0" />
                <a href="https://wa.me/551150332810" className="hover:text-white transition-colors">(11) 5033-2810</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-[#C8923D] shrink-0" />
                <span>
                  08:30 - 12:00 / 13:00 - 17:30 <br />
                  Segunda a Sexta
                </span>
              </li>
            </ul>
          </SectionReveal>
        </div>

        {/* Map Section */}
        <SectionReveal className="mb-16">
          <div className="w-full h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/5 grayscale-[0.5] hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.437142476536!2d-46.6666!3d-23.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a9c!2sRua%20Gast%C3%A3o%20da%20Cunha%2C%20265%20-%20Vila%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004361-090!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Localização SKL Contabilidade"
            ></iframe>
          </div>
        </SectionReveal>

        {/* Footer Bottom */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
          <p>© {new Date().getFullYear()} SKL Contabilidade. Todos os direitos reservados.</p>
          <div className="mt-6 md:mt-0 flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
            <a href="https://sitecontabil.com.br" target="_blank" className="hover:text-white transition-colors">Desenvolvido por Sitecontabil</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
