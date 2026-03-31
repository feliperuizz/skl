import Image from "next/image";
import { SectionReveal } from "./ui/SectionReveal";

// Using the local images provided by the user in public/referencias
const IMAGES = [
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst07-1024x650.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst01.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst02.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst03.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst04.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst06.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst08-1024x650.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/financeiro.jpg"
];

export function Facilities() {
  return (
    <section className="py-24 bg-background border-t border-slate-200 relative">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionReveal className="mb-16">
          <div className="w-20 h-1 bg-primary mb-8" />
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            A Estrutura SKL
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl font-medium">
            Um ambiente preparado e moderno para receber você e sua empresa com o conforto e a tecnologia necessários para o seu sucesso.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {IMAGES.map((img, idx) => (
            <SectionReveal 
              key={idx} 
              delay={idx * 0.1} 
              className={`relative bg-slate-200 rounded-sm overflow-hidden group ${
                idx === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <Image 
                src={img} 
                alt="Instalação SKL" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
