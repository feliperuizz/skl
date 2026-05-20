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

const segments = [
  {
    title: "Comércio e Indústria",
    bg: "./commerce.png",
    hoverText: "Gestão contábil e tributária eficiente para controlar custos, otimizar impostos e garantir o crescimento sustentável da sua operação."
  },
  {
    title: "Prestadores de Serviços",
    bg: "./services.png",
    hoverText: "Soluções contábeis estratégicas pensadas para o seu tipo de serviço, com foco na redução da carga tributária e na organização e conformidade da sua empresa."
  },
];

export function Segments() {
  return (
    <section className="pt-4 pb-20 sm:pb-32 bg-white relative overflow-hidden">
      {/* Background Favicon decoration used as a small floating watermark */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
        <img src="./favicongrande.png" alt="FAVICON" className="w-32 rotate-6" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16 sm:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">
            Oferecemos <span className="font-extrabold text-neutral-800">soluções personalizadas</span>
            <br className="hidden sm:block" />
            para diversos setores
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {segments.map((seg, i) => (
            <motion.div
              key={seg.title}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
              className="group relative h-[400px] sm:h-[500px] overflow-hidden cursor-pointer flex flex-col justify-end p-8"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${seg.bg}')` }}
              ></div>
              
              {/* Dark Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Default state – title */}
              <div className="relative z-10 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-4">
                <p className="text-white/80 font-semibold mb-1">Contabilidade para</p>
                <h3 className="text-white">{seg.title}</h3>
              </div>

              {/* Hover state – description */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-10 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-4 group-hover:translate-y-0">
                <h3 className="text-white text-2xl font-black mb-4 text-center">{seg.title}</h3>
                <p className="text-white/90 text-base leading-relaxed text-center">{seg.hoverText}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <a href="/servicos">
            <motion.span
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full text-base shadow-sm hover:bg-red-700 transition-colors cursor-pointer"
            >
              Conhecer todos os serviços
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}
