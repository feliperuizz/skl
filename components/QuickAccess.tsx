"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./ui/SectionReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function QuickAccess() {
  const links = [
    { name: "e-CAC", image: "./ecac.png", url: "https://cav.receita.fazenda.gov.br/" },
    { name: "NF-e", image: "./nfeelogo.jpg", url: "http://www.nfe.fazenda.gov.br/" },
    { name: "Receita Federal", image: "./rflogo.jpg", url: "https://www.gov.br/receitafederal/" },
    { name: "Previdência", image: "./previdencialogo.png", url: "https://www.gov.br/previdência/" },
    { name: "NF Paulistana", image: "./notafiscalpaulistanalogo.jfif", url: "https://nfe.prefeitura.sp.gov.br/" },
    { name: "SEFAZ-SP", image: "./sefazsplogo.png", url: "https://portal.fazenda.sp.gov.br/" },
  ];

  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-10">
          <h2 className="text-2xl font-bold text-slate-700">Acesso Rápido</h2>
        </SectionReveal>

        <div className="relative flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 items-center">
            {links.map((link, index) => (
              <SectionReveal key={index} delay={index * 0.05}>
                <a 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-24 h-24 md:w-32 md:h-32 bg-white p-4 border border-slate-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
                >
                  <img 
                    src={link.image} 
                    alt={link.name} 
                    className="max-h-full max-w-full object-contain transition-all duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://via.placeholder.com/80?text=" + link.name;
                    }}
                  />
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
