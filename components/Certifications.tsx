"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./ui/SectionReveal";

export function Certifications() {
  const certs = [
    {
      title: "SEGURANÇA",
      image: "./selo.jpg",
      alt: "Selo de Segurança",
      url: null
    },
    {
      title: "CERTIFICAÇÃO",
      image: "./PQECSescon.png",
      alt: "PQEC Sescon-SP",
      url: null
    },
    {
      title: "QUALIFICAÇÃO",
      image: "./CRCSP.jfif",
      alt: "CRCSP",
      url: "https://www.crcsp.org.br/"
    },
    {
      title: "RESPONSABILIDADE",
      image: "./graacc.png",
      alt: "GRAACC",
      url: "https://graacc.org.br/"
    }
  ];

  return (
    <section className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certs.map((cert, index) => (
            <SectionReveal key={index} delay={index * 0.1} className="flex flex-col items-center">
              <span className="text-[10px] font-bold text-slate-400 tracking-[0.2em] mb-4 uppercase">
                {cert.title}
              </span>
              <div className="h-24 flex items-center justify-center">
                {cert.url ? (
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="h-full flex items-center justify-center hover:scale-105 transition-transform duration-300"
                  >
                    <img 
                      src={cert.image} 
                      alt={cert.alt} 
                      className="max-h-full max-w-full object-contain"
                    />
                  </a>
                ) : (
                  <img 
                    src={cert.image} 
                    alt={cert.alt} 
                    className="max-h-full max-w-full object-contain"
                  />
                )}
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
