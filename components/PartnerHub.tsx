"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./ui/SectionReveal";
import { ArrowRight, ExternalLink } from "lucide-react";

export function PartnerHub() {
  const partners = [
    {
      name: "VAP",
      fullName: "Hub de Soluções",
      description: "Consultoria estratégica focada em Valuation, Fusões e Aquisições (M&A) e estruturação de negócios de alto impacto.",
      image: "./partner_vap.png",
      link: "#"
    },
    {
      name: "Stathen BPO",
      fullName: "Gestão Financeira & BPO",
      description: "Terceirização financeira inteligente para que você tenha controle total do seu fluxo de caixa sem burocracia.",
      image: "./partner_stathen.png",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-white text-neutral-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <SectionReveal className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold mb-4 tracking-wide uppercase">
              Hub de Soluções
            </span>
            <h2 className="text-3xl md:text-5xl font-black leading-tight mb-6">
              Apresentamos nosso <br />
              <span className="text-primary">Ecossistema de Parcerias</span>
            </h2>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Para entregar uma experiência 360°, a SKL se une a empresas especialistas que complementam nossa excelência técnica.
            </p>
          </SectionReveal>
          
          <SectionReveal delay={0.2}>
             <motion.a 
               href="https://wa.me/message/MKFR5CDMJCQHI1"
               target="_blank"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-base shadow-sm flex items-center gap-3 transition-colors"
             >
               Conhecer Hub Completo
               <ArrowRight className="w-5 h-5" />
             </motion.a>
          </SectionReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {partners.map((partner, index) => (
            <SectionReveal key={index} delay={index * 0.2} className="h-full">
              <div className="group relative bg-white border border-neutral-200 shadow-xl rounded-[2rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start h-full hover:shadow-2xl hover:-tranneutral-y-1 transition-all duration-500">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden flex-shrink-0">
                  <img 
                    src={partner.image} 
                    alt={partner.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-black text-neutral-900 leading-tight">{partner.name}</h3>
                    <div className="h-px w-8 bg-primary/30" />
                  </div>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">
                    {partner.fullName}
                  </p>
                  <p className="text-neutral-600 text-sm mb-6 leading-relaxed flex-grow">
                    {partner.description}
                  </p>
                  <a 
                    href={partner.link} 
                    className="inline-flex items-center gap-2 text-neutral-900 font-bold text-sm hover:text-primary transition-colors group/link"
                  >
                    Ver detalhes do parceiro
                    <ExternalLink className="w-4 h-4 group-hover/link:tranneutral-x-1 group-hover/link:-tranneutral-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
