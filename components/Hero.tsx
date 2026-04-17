"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden w-full">
      {/* Absolute Full Screen Background like Cardeal */}
      <div className="absolute inset-0">
        <img
          src="./foto.png"
          alt="Escritório SKL Contabilidade"
          className="w-full h-full object-cover object-[center_right] lg:object-[80%_center]"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="relative w-full max-w-[1536px] mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 py-24 sm:py-32 lg:py-40 flex justify-start z-10">
        <motion.div
          className="bg-white/95 backdrop-blur-md rounded-[2rem] p-6 sm:p-8 lg:p-10 max-w-xl shadow-2xl w-full sm:w-auto mt-16"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs sm:text-sm font-bold mb-4 tracking-wide uppercase">
              Escritório de Contabilidade
            </span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-display font-extrabold text-slate-900 leading-[1.15] mb-4 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Transforme decisões <br className="hidden sm:block" />
            complexas em gestão <br className="hidden sm:block" />
            <span className="text-primary italic">tributária estratégica.</span>
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Protegemos o seu patrimônio e maximizamos lucros. Auxiliamos negócios a reduzir impostos de maneira legal e sempre orientada por dados precisos.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a
              href="https://sklcontabil.com.br/contato-via-whatsapp/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full sm:w-auto"
            >
              <Button
                size="lg"
                className="rounded-md w-full sm:w-auto h-14 px-8 text-base shadow-lg shadow-primary/30"
              >
                Fale com a SKL
              </Button>
            </a>
            
            <a href="#services" className="text-sm font-bold text-slate-700 hover:text-primary transition-colors cursor-pointer flex items-center justify-center sm:justify-start gap-2 py-4 sm:py-2 group px-4">
              Descubra nossas soluções
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform bg-primary/10 text-primary rounded-full p-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
