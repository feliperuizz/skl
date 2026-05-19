"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./ui/SectionReveal";
import { CheckCircle2 } from "lucide-react";

export function TaxReform() {
  const points = [
    "Treinamentos práticos para sua equipe",
    "Suporte contínuo com especialistas",
    "Acompanhamento das mudanças na legislação",
    "Planejamento tributário pré e pós reforma"
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#B7042C' }} id="tax-reform">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16">

          {/* Image Container */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="./tax_reform.png"
                alt="Reforma Tributária SKL"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </motion.div>

          {/* Text Container */}
          <div className="lg:w-1/2 w-full text-white">
            <SectionReveal>
              <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
                Reforma Tributária
              </h2>
              <p className="text-xl md:text-2xl font-medium text-white/90 mb-10 leading-snug">
                Sua empresa está preparada para <br className="hidden md:block" />
                o que vai mudar?
              </p>

              <div className="space-y-4">
                {points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/5 hover:bg-white/20 transition-colors"
                  >
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    <span className="font-bold text-sm md:text-base uppercase tracking-wide">{point}</span>
                  </motion.div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>

        {/* Footer Text */}
        <SectionReveal delay={0.6} className="text-center max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl font-bold text-white mb-10 leading-relaxed drop-shadow-md">
            Com compliance, planejamento tributário e suporte especializado, sua empresa se antecipa às mudanças e cresce com segurança!
          </p>

          <motion.a
            href="https://wa.me/message/MKFR5CDMJCQHI1"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-primary font-bold text-base px-10 py-4 rounded-full shadow-lg hover:bg-neutral-100 transition-colors"
          >
            Clique aqui para receber um diagnóstico
          </motion.a>
        </SectionReveal>
      </div>
    </section>
  );
}
