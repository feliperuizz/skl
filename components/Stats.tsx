"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-background border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          className="flex flex-col sm:flex-row flex-wrap justify-between items-center gap-8 sm:gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          {[
            { number: "15+", label: "Anos de experiência", sub: "entregando resultados contábeis" },
            { number: "300+", label: "Empresas ativas", sub: "carteira sólida e fidelizada" },
            { number: "100%", label: "Digital & Seguro", sub: "tecnologia e precisão máxima" },
            { number: "24h", label: "Suporte Especializado", sub: "resposta rápida e resolutiva" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="border-l-4 border-primary/50 pl-6 text-center sm:text-left flex-1 min-w-[200px]"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary leading-none mb-3">
                {stat.number}
              </div>
              <div className="text-base sm:text-lg font-bold text-slate-800 mt-2 leading-tight uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
