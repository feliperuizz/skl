"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Pronto para economizar e crescer com a parceira certa?
          </h2>
          <p className="text-white/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto font-medium">
            Solicite uma análise tributária do seu negócio. Nossos especialistas mostrarão exatamente onde você pode lucrar mais.
          </p>
          <a
            href="https://sklcontabil.com.br/contato-via-whatsapp/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-slate-100 rounded-md h-16 px-10 text-lg font-bold shadow-xl shadow-black/20"
            >
              Falar com um Consultor
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
