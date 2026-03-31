"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect } from "react";
import { SectionReveal } from "./ui/SectionReveal";

// Sample of logos from SKL
const CLENT_LOGOS = [
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo1.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo2.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo3.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo4.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo5.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo7.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo8.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo9.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo10.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo11.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo12.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo13.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo14.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo15.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo16.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/05/logo17.jpg",
];

export function Clients() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
    align: "start"
  });

  // Auto-scroll loop
  useEffect(() => {
    if (!emblaApi) return;
    
    let animationId: number;
    const play = () => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      }
      animationId = window.requestAnimationFrame(play);
    };
    
    // Slow down the request animation frame slightly
    let lastTime = 0;
    const smoothPlay = (time: number) => {
      if (time - lastTime > 30) { 
        emblaApi.scrollNext();
        lastTime = time;
      }
      animationId = window.requestAnimationFrame(smoothPlay);
    };

    animationId = window.requestAnimationFrame(smoothPlay);

    return () => window.cancelAnimationFrame(animationId);
  }, [emblaApi]);

  return (
    <section className="py-24 bg-slate-50 overflow-hidden border-y border-slate-200">
      <SectionReveal className="text-center mb-12">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em]">
          Conheça quem confia em nosso trabalho
        </h2>
      </SectionReveal>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {CLENT_LOGOS.map((url, index) => (
            <div 
              key={index} 
              className="embla__slide flex-[0_0_150px] md:flex-[0_0_200px] mx-4 relative h-24 bg-white border border-slate-100 shadow-sm rounded-sm flex items-center justify-center p-4"
            >
              <Image 
                src={url} 
                alt={`Cliente SKL ${index + 1}`} 
                fill 
                className="object-contain p-2 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
