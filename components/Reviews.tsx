"use client";

import { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { SectionReveal } from "./ui/SectionReveal";

const TESTIMONIALS = [
  {
    name: "Ricardo Mendes",
    initials: "RM",
    color: "bg-blue-500",
    role: "Sócio-Diretor, RM Distribuidora",
    text: "A SKL transformou completamente a gestão fiscal da nossa empresa. Em menos de 6 meses identificaram créditos tributários que nunca havíamos aproveitado. Parceria sólida e de altíssimo nível.",
    stars: 5,
  },
  {
    name: "Fernanda Lima",
    initials: "FL",
    color: "bg-rose-500",
    role: "CEO, Clínica Vida Plena",
    text: "Trabalho com a SKL há mais de 4 anos e o diferencial é o atendimento humanizado. Sempre disponíveis, explicam tudo com clareza e me dão segurança nas decisões. Recomendo sem hesitar.",
    stars: 5,
  },
  {
    name: "Carlos Eduardo",
    initials: "CE",
    color: "bg-emerald-500",
    role: "Proprietário, CE Comércio",
    text: "Migrei minha contabilidade para a SKL após muitos problemas com o escritório anterior. A diferença foi imediata: organização, pontualidade e transparência total. Me arrependo de não ter mudado antes.",
    stars: 5,
  },
  {
    name: "Ana Paula Sousa",
    initials: "AP",
    color: "bg-violet-500",
    role: "Sócia, Studio AP Arquitetura",
    text: "A equipe da SKL é extremamente competente. Toda a nossa folha de pagamento e obrigações fiscais são tratadas com precisão impecável. Nunca tivemos uma pendência sequer com a Receita Federal.",
    stars: 5,
  },
  {
    name: "Marcos Oliveira",
    initials: "MO",
    color: "bg-amber-500",
    role: "Empresário, Grupo MO",
    text: "Contratei a SKL para estruturar uma holding familiar e foi a melhor decisão. Planejamento tributário eficiente, economia real e total segurança jurídica. Profissionais de outro nível.",
    stars: 5,
  },
  {
    name: "Juliana Ferreira",
    initials: "JF",
    color: "bg-cyan-500",
    role: "Fundadora, JF Tech Solutions",
    text: "Nossa startup cresceu muito rápido e a SKL nos acompanhou em cada etapa. Desde a abertura da empresa até o planejamento tributário para escalar. Time ágil e extremamente qualificado.",
    stars: 5,
  },
  {
    name: "Paulo Saraiva",
    initials: "PS",
    color: "bg-indigo-500",
    role: "Produtor Rural, Fazenda Saraiva",
    text: "Trabalhar com a SKL no Agronegócio é ter a certeza de estar em conformidade. Conhecimento profundo do ITR, Livro Caixa Rural e planejamento sucessório. Super recomendo para produtores.",
    stars: 5,
  },
  {
    name: "Beatriz Campos",
    initials: "BC",
    color: "bg-pink-500",
    role: "Diretora, BC Moda & Estilo",
    text: "O suporte da SKL é rápido e sempre assertivo. Quando preciso de uma informação urgente, em minutos tenho o retorno. Isso faz toda a diferença no dia a dia de quem empreende.",
    stars: 5,
  },
];

const AVATAR_COLORS = ["bg-blue-400", "bg-rose-400", "bg-emerald-400", "bg-violet-400", "bg-amber-400"];

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
    </svg>
  );
}

function GoogleBadge() {
  return (
    <div className="inline-flex items-center gap-4 bg-white border border-neutral-200 rounded-2xl px-6 py-4 shadow-md">
      {/* Google G */}
      <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>

      {/* Rating */}
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-neutral-900 leading-none">4.9</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
          </div>
        </div>
        <span className="text-xs text-neutral-500 font-medium mt-0.5">Google Reviews</span>
      </div>

      {/* Avatars */}
      <div className="flex items-center">
        <div className="flex -space-x-2">
          {AVATAR_COLORS.map((color, i) => (
            <div key={i} className={`w-8 h-8 ${color} rounded-full border-2 border-white flex items-center justify-center`}>
              <span className="text-white text-[10px] font-bold">{["RM","FL","CE","AP","MO"][i]}</span>
            </div>
          ))}
        </div>
        <span className="ml-3 text-sm font-bold text-neutral-700 whitespace-nowrap">+120 avaliações</span>
      </div>
    </div>
  );
}

export function Reviews() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    align: "start",
  });

  useEffect(() => {
    if (!emblaApi) return;
    let lastTime = 0;
    let animId: number;
    const tick = (time: number) => {
      if (time - lastTime > 3000) {
        emblaApi.scrollNext();
        lastTime = time;
      }
      animId = requestAnimationFrame(tick);
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, [emblaApi]);

  return (
    <section className="py-20 bg-neutral-50 overflow-hidden border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center mb-12">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-4 leading-tight">
            Depoimentos que reforçam<br className="hidden md:block" /> o nosso compromisso!
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto mb-8">
            Nossos clientes são nossa maior referência. Veja o que eles dizem sobre a parceria com a SKL.
          </p>
          <div className="flex justify-center">
            <GoogleBadge />
          </div>
        </SectionReveal>
      </div>

      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex pb-2">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="embla__slide flex-[0_0_320px] md:flex-[0_0_360px] mx-3 bg-white border border-neutral-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between gap-5"
            >
              <div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.stars)].map((_, s) => <StarIcon key={s} />)}
                </div>
                <p className="text-neutral-700 text-sm leading-relaxed">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-neutral-900 text-sm">{t.name}</p>
                  <p className="text-neutral-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
