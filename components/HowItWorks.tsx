"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Diagnóstico Profundo",
    desc: "Analisamos a realidade contábil e fiscal da sua empresa, identificamos riscos e oportunidades e desenvolvemos um plano estratégico totalmente personalizado.",
  },
  {
    number: "02",
    title: "Implantação Inteligente",
    desc: "Implementamos processos, sistemas e automações que dão controle total sobre sua operação, preparando sua empresa para crescer com segurança e conformidade.",
  },
  {
    number: "03",
    title: "Acompanhamento Contínuo",
    desc: "Monitoramos indicadores, ajustamos rotas e garantimos que sua empresa permaneça eficiente, em dia com o fisco e sempre à frente das mudanças tributárias.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-neutral-50 to-primary/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left – Text */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
                Nossa Metodologia
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight mb-12">
                Como a SKL faz isso<br className="hidden md:block" /> por você?
              </h2>
            </motion.div>

            <div className="space-y-10">
              {STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex items-start gap-5"
                >
                  <span className="text-4xl font-black text-primary/30 leading-none select-none w-14 shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-neutral-900 font-bold text-lg mb-1">{step.title}</h3>
                    <p className="text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12"
            >
              <a href="https://wa.me/message/MKFR5CDMJCQHI1" target="_blank" rel="noopener noreferrer">
                <motion.span
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-full shadow-lg hover:bg-red-700 transition-colors cursor-pointer"
                >
                  Quero começar agora
                </motion.span>
              </a>
            </motion.div>
          </div>

          {/* Right – Photo */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-100">
                <img
                  src="/DSCF8771.JPG"
                  alt="Especialista SKL Assessoria Contábil"
                  className="w-full h-[520px] object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent rounded-3xl" />
              </div>
              {/* Decorative glow */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
