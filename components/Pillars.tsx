"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Building2, Handshake, Lightbulb, Clock } from "lucide-react";

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

const pilares = [
  {
    icon: Building2,
    title: "Centralização Absoluta",
    desc: "Chega de lidar com dezenas de fornecedores. Centralizamos toda a gestão contábil, fiscal e pessoal.",
  },
  {
    icon: Handshake,
    title: "Parceria de Verdade",
    desc: "Você ganha uma equipe aliada. Aqui cada cliente possui acompanhamento dedicado e consultoria constante.",
  },
  {
    icon: Lightbulb,
    title: "Tecnologia e Inovação",
    desc: "Sistemas em nuvem, integrações nativas e inteligência que elimina erros e retrabalho humano.",
  },
  {
    icon: Clock,
    title: "Experiência Comprovada",
    desc: "Décadas de bagagem técnica blindando o seu CNPJ. Confiança estabelecida com resultados.",
  },
];

export function Pillars() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-950 to-[#2F000A] relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B59720]/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block px-4 py-1 mb-6 rounded-full border border-secondary/30 bg-secondary/10">
             <span className="text-secondary text-xs font-bold uppercase tracking-widest">Excelência Comprovada</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Por Que Escolher a <br className="hidden sm:block"/> <span className="text-secondary italic">SKL</span>?
          </h2>
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto font-medium">
            A estrutura de alto padrão exata que sua empresa sempre precisou, mas nunca teve acesso.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {pilares.map((pilar, i) => (
            <motion.div
              key={pilar.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 shadow-inner">
                <pilar.icon className="w-7 h-7 sm:w-8 sm:h-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-3 text-white">
                {pilar.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                {pilar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
