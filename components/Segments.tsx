"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

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
    title: "Comércio",
    bg: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80",
    buttonText: "Conheça mais"
  },
  {
    title: "Prestadores de serviços",
    bg: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80",
    buttonText: "Conheça mais"
  },
  {
    title: "Indústria",
    bg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1024&q=80",
    buttonText: "Conheça mais"
  },
];

export function Segments() {
  return (
    <section className="py-20 sm:py-32 bg-slate-50 relative overflow-hidden">
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
          {/* Top Logo Mark */}
          <div className="flex justify-center mb-6">
             <img src="./logoSKL.png" alt="SKL" className="h-10 sm:h-12 w-auto object-contain" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Oferecemos <span className="font-extrabold text-slate-800">soluções personalizadas</span>
            <br className="hidden sm:block" />
            para diversos setores
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
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

              {/* Content */}
              <div className="relative z-10">
                <p className="text-white/80 font-semibold text-sm sm:text-base mb-1">
                  Contabilidade para
                </p>
                <h3 className="font-bold text-3xl sm:text-4xl text-white mb-6 leading-tight">
                  {seg.title}
                </h3>
                
                {/* Red CTA Button mimicking Desuó reference */}
                <div className="flex items-center">
                  <span className="bg-primary group-hover:bg-[#900018] text-white px-5 py-2.5 rounded-full flex items-center font-bold text-sm transition-colors shadow-lg">
                    {i === 0 && (
                       <span className="mr-2">|</span> 
                    )}
                    {seg.buttonText}
                    <ChevronRight size={18} className="ml-2" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
