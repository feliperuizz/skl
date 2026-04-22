"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./ui/SectionReveal";

export function History() {
  return (
    <section className="pt-8 pb-24 sm:pt-12 sm:pb-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image/Video Container */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="./equipe-real.jpg" 
                alt="Equipe SKL Assessoria Contábil" 
                className="w-full h-[500px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Content Container */}
          <div className="lg:w-1/2">
            <SectionReveal>
              <div className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6 tracking-wide uppercase">
                Nossa Trajetória
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-8">
                Conheça a nossa história: <br />
                <span className="text-primary italic font-serif">Há mais de 28 anos</span> impulsionando empresas com estratégia, segurança e resultados!
              </h2>
              
              <div className="space-y-6">
                <p className="text-slate-600 text-lg leading-relaxed">
                  Desde a sua fundação, a SKL Assessoria Contábil constrói uma história de excelência, inovação e confiança. Com o passar dos anos, evoluímos constantemente, unindo tecnologia, especialização e atendimento personalizado para transformar a contabilidade em uma ferramenta estratégica de crescimento.
                </p>
                
                <div className="pt-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-primary transition-colors duration-300 flex items-center gap-3"
                  >
                    Falar com um especialista
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.16663 10H15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 4.16663L15.8333 9.99996L10 15.8333" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </div>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
