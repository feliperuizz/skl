"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function useCountUp(target: number, duration: number = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return { count, ref };
}

const stats = [
  { target: 28, suffix: "+", label: "Anos de Experiência" },
  { target: 800, suffix: "+", label: "Clientes Fidelizados" },
  { target: 50, suffix: "+", label: "Tipos de Serviços" },
  { target: 40, suffix: "+", label: "Especialistas" },
];

function StatItem({ target, suffix, label }: (typeof stats)[number]) {
  const { count, ref } = useCountUp(target);

  return (
    <div ref={ref} className="flex flex-col items-center gap-2 flex-1 min-w-[140px]">
      <span className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary leading-none tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-sm sm:text-base font-bold text-neutral-700 uppercase tracking-widest text-center leading-tight">
        {label}
      </span>
    </div>
  );
}

export function Stats() {
  return (
    <section className="py-16 sm:py-20 bg-background border-t border-neutral-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-12 sm:gap-8 lg:gap-16">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
