"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  TrendingUp,
  Users,
  ShieldCheck,
  ArrowRight,
  Calculator,
  Briefcase
} from "lucide-react";

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

export function Ecosystem() {
  return (
    <section className="py-16 sm:py-24 bg-white overflow-hidden relative" id="ecosystem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-neutral-900 mb-5">
            Mais do que contabilidade,{" "}
            <span className="text-primary italic">um ecossistema de gestão</span>{" "}
            que inspira crescimento.
          </h2>
          <p className="text-neutral-600">
            Com abordagens contábeis avançadas, criamos uma rede de suporte estratégico para dar convicção às decisões do seu negócio.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col items-center gap-6 sm:gap-0">
            {/* Top row */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0 w-full sm:items-end sm:justify-items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
            >
              {[
                { icon: Calculator, label: "Contábil & Fiscal", desc: "Obrigações em dia, sem estresse" },
                { icon: TrendingUp, label: "Planejamento Tributário", desc: "Menos impostos, lucro real" },
                { icon: Briefcase, label: "Abertura de Empresa", desc: "Processo rápido e descomplicado" },
                { icon: Users, label: "Gestão RH", desc: "Folha de pagamento simplificada" },
              ].map((node, i) => (
                <motion.div
                  key={node.label}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex flex-col items-center gap-3 group cursor-default"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-neutral-100 border border-neutral-200 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all duration-300 shadow-sm">
                    <node.icon className="w-7 h-7 sm:w-9 sm:h-9 text-neutral-700 group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs sm:text-sm font-semibold text-neutral-800 group-hover:text-primary transition-colors duration-300 leading-tight">{node.label}</p>
                    <p className="text-xs text-neutral-500 mt-0.5 hidden sm:block">{node.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Connecting lines */}
            <div className="hidden sm:flex w-full items-center justify-center my-4 relative px-[10%]">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            </div>

            {/* Center card */}
            <motion.div
              className="relative z-10 w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-neutral-50 border border-neutral-200 rounded-2xl sm:rounded-3xl p-6 sm:p-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-10 shadow-md">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-white rounded-2xl flex items-center justify-center p-4 sm:p-5 shadow-inner border-b-4 border-primary">
                     <img src="./logo_standard.png" alt="SKL" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="text-center sm:text-left flex-1">
                  <p className="text-neutral-500 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">O seu Hub Estratégico</p>
                  <h3 className="text-neutral-900 mb-2">SKL Assessoria Contábil</h3>
                  <p className="text-neutral-600 max-w-xl">
                    Mais de 28 anos unificando todas as demandas contábeis e fiscais da sua empresa em um único ponto de contato altamente estratégico.
                  </p>
                </div>
                <div className="hidden lg:flex flex-shrink-0 flex-col gap-3 ml-auto">
                  {["28+ Anos de Mercado", "Atendimento Premium", "Visão Estratégica"].map((tag) => (
                    <span key={tag} className="bg-neutral-100 text-neutral-700 text-xs font-semibold px-4 py-2 rounded-full whitespace-nowrap border border-neutral-200 uppercase tracking-wider">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Connecting lines */}
            <div className="hidden sm:flex w-full items-center justify-center my-4 relative px-[10%]">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
            </div>

            {/* Bottom row */}
            <motion.div
              className="grid grid-cols-3 gap-4 sm:gap-0 w-full sm:justify-items-center sm:px-[5%]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={staggerContainer}
            >
              {[
                { icon: ShieldCheck, label: "Segurança Jurídica", desc: "Conformidade garantida 100%" },
                { icon: Lightbulb, label: "Visão Estratégica", desc: "Dados que geram decisões acertadas" },
                { icon: ArrowRight, label: "Crescimento Real", desc: "Resultado mensurável em faturamento" },
              ].map((result, i) => (
                <motion.div
                  key={result.label}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="flex flex-col items-center gap-2 group cursor-default"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neutral-100 border border-neutral-200 rounded-xl flex items-center justify-center group-hover:bg-primary/10 transition-all duration-300">
                    <result.icon className="w-5 h-5 sm:w-7 sm:h-7 text-neutral-700 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="text-center">
                    <p className="text-xs sm:text-sm font-semibold text-neutral-800 leading-tight">{result.label}</p>
                    <p className="text-xs text-neutral-500 hidden sm:block mt-1">{result.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
