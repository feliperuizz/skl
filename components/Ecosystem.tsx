"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, TrendingUp } from "lucide-react";
import { SectionReveal } from "./ui/SectionReveal";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const PILLARS = [
  { icon: ShieldCheck, label: "Precisão Técnica" },
  { icon: Target,      label: "Visão Estratégica" },
  { icon: TrendingUp,  label: "Resultados Reais" },
];


export function Ecosystem() {
  return (
    <section className="bg-white overflow-hidden" id="ecosystem">

      {/* ── Section Title ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12 text-center">
        <SectionReveal>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">
            Por que escolher a SKL
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight">
            As vantagens de ser <span className="text-primary">cliente SKL</span>
          </h2>
        </SectionReveal>
      </div>

      {/* ── Statement Banner ── */}
      <div className="bg-neutral-50 border-y border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <SectionReveal>
            <p className="text-xl md:text-2xl lg:text-3xl font-black text-neutral-900 text-center max-w-4xl mx-auto leading-snug mb-12">
              Impulsionamos sua empresa com{" "}
              <span className="text-primary">compliance</span>,{" "}
              <span className="text-primary">governança sólida</span> e{" "}
              <span className="text-primary">decisões estratégicas inteligentes</span>.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-20">
              {PILLARS.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="w-20 h-20 bg-white border-2 border-neutral-200 rounded-2xl flex items-center justify-center shadow-sm">
                    <Icon className="w-9 h-9 text-primary" />
                  </div>
                  <span className="text-sm font-bold text-neutral-800 uppercase tracking-wider">{label}</span>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* ── Two-column: Diferenciais + Photo ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left – Text */}
          <SectionReveal className="lg:w-1/2">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              Nossos Diferenciais
            </span>
            <div className="space-y-1 mb-8">
              <p className="text-3xl md:text-4xl font-black text-neutral-900">
                <span className="text-primary">Precisão</span> técnica.
              </p>
              <p className="text-3xl md:text-4xl font-black text-neutral-900">
                <span className="text-primary">Visão</span> estratégica.
              </p>
              <p className="text-3xl md:text-4xl font-black text-neutral-900">
                <span className="text-primary">Resultados</span> reais.
              </p>
            </div>
            <p className="text-neutral-600 text-lg leading-relaxed mb-10 max-w-md">
              Há mais de 28 anos entregamos muito mais do que contabilidade: entregamos segurança, estratégia e crescimento para cada cliente.
            </p>
            <a href="https://wa.me/message/MKFR5CDMJCQHI1" target="_blank" rel="noopener noreferrer">
              <motion.span
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
              >
                Quero um diagnóstico!
              </motion.span>
            </a>
          </SectionReveal>

          {/* Right – Photo */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-neutral-100 aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto">
              <img
                src="./diretores.jpg"
                alt="Diretores SKL Assessoria Contábil"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/30 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
