"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShoppingCart, Briefcase, Stethoscope, Laptop, LayoutGrid } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Segmentos() {
  return (
    <main className="min-h-screen bg-white text-foreground flex flex-col pt-[72px] lg:pt-[88px]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-36 bg-white border-b border-neutral-100 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/fotos/foto6.jpg" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Especialização Setorial</span>
            <h1 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
              Nossos <span className="text-primary">Segmentos</span>
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Entendemos que cada setor possui particularidades próprias. Por isso, oferecemos uma contabilidade personalizada, alinhada às necessidades do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Comércio e Indústrias ── */}
      <section id="comercio-industrias" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <ShoppingCart className="w-7 h-7 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-neutral-900 mb-4">Comércio e Indústrias</h2>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Atendemos empresas do comércio e da indústria com foco em controle operacional, eficiência tributária e organização financeira, garantindo mais previsibilidade e segurança na gestão.
              </p>
              <p className="text-neutral-700 font-bold mb-4">A contabilidade nesse segmento é essencial para:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Consultoria para controle de estoque e custos",
                  "Consultoria para formação correta de preços",
                  "Consultoria para gestão de margens de lucro",
                  "Apuração de impostos (ICMS, IPI, etc.)",
                  "Planejamento tributário por regime (Simples, Lucro Presumido, Real)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-neutral-500 leading-relaxed">Oferecemos suporte estratégico para melhorar resultados, reduzir custos e manter a empresa em conformidade com as constantes exigências fiscais.</p>
              <a href="https://wa.me/message/MKFR5CDMJCQHI1" target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
                <span className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full text-base hover:bg-red-700 transition-colors cursor-pointer shadow-sm">
                  Falar com especialista
                </span>
              </a>
            </motion.div>
            <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
                <img src="/fotos/foto7.jpg" alt="Comércio e Indústria" className="w-full h-[460px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Prestadores de Serviços ── */}
      <section id="prestadores-servicos" className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-14 lg:gap-20">
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-amber-600" />
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-neutral-900 mb-4">Prestadores de Serviços</h2>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                Para empresas de serviços, a contabilidade tem papel fundamental na redução da carga tributária e na organização financeira do negócio.
              </p>
              <p className="text-neutral-700 font-bold mb-4">Atuamos com foco em:</p>
              <ul className="space-y-3 mb-6">
                {[
                  "Escolha do melhor regime tributário",
                  "Redução de impostos (ISS, IRPJ, CSLL)",
                  "Controle de faturamento",
                  "Consultoria em organização financeira",
                  "Planejamento para crescimento sustentável",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-neutral-500 leading-relaxed">Nosso objetivo é garantir mais lucro, previsibilidade e segurança para prestadores de serviços.</p>
              <a href="https://wa.me/message/MKFR5CDMJCQHI1" target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
                <span className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full text-base hover:bg-red-700 transition-colors cursor-pointer shadow-sm">
                  Falar com especialista
                </span>
              </a>
            </motion.div>
            <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
                <img src="/fotos/foto8.jpg" alt="Prestadores de Serviços" className="w-full h-[460px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Outros Segmentos ── */}
      <section className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">Outros Segmentos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900">Especialistas em diversas áreas</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                id: "saude", icon: Stethoscope, color: "bg-rose-50 text-rose-600",
                title: "Profissionais da Saúde",
                desc: "Atendemos médicos, clínicas e profissionais da área da saúde com soluções específicas para o setor, que exige atenção especial à tributação e à organização financeira.",
                bullets: ["Planejamento tributário personalizado", "Redução de carga tributária", "Estruturação de pessoa jurídica", "Controle de receitas e despesas", "Regularidade fiscal e contábil"],
              },
              {
                id: "tecnologia", icon: Laptop, color: "bg-violet-50 text-violet-600",
                title: "Tecnologia e Negócios Digitais",
                desc: "Atendemos empresas de tecnologia, startups e negócios digitais com soluções modernas e adaptadas à dinâmica do setor.",
                bullets: ["Estruturação societária", "Planejamento tributário para escalabilidade", "Consultoria em controle de receitas recorrentes", "Apoio em crescimento e captação", "Consultoria para organização financeira e contábil"],
              },
              {
                id: "demais", icon: LayoutGrid, color: "bg-emerald-50 text-emerald-600",
                title: "Demais Segmentos",
                desc: "A SKL também atende empresas de diversos outros setores, sempre com uma abordagem personalizada e estratégica.",
                bullets: ["Construção civil", "E-commerce", "Representantes comerciais", "Profissionais liberais", "Pequenas e médias empresas em geral"],
              },
            ].map((seg, i) => (
              <motion.div key={seg.id} id={seg.id} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className="bg-white border border-neutral-100 rounded-2xl p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 scroll-mt-24">
                <div className={`w-12 h-12 ${seg.color} rounded-xl flex items-center justify-center mb-5`}>
                  <seg.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-neutral-900 mb-3">{seg.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-5">{seg.desc}</p>
                <ul className="space-y-2">
                  {seg.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-neutral-700 text-sm font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div className="bg-neutral-50 border border-neutral-100 rounded-3xl p-10 text-center" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <p className="text-neutral-600 text-lg leading-relaxed max-w-3xl mx-auto mb-8">
              Independentemente do segmento, adaptamos nossa atuação à realidade do cliente, garantindo conformidade, organização e suporte para o crescimento do negócio.
            </p>
            <a href="https://wa.me/message/MKFR5CDMJCQHI1" target="_blank" rel="noopener noreferrer">
              <span className="inline-block bg-primary text-white font-bold px-10 py-4 rounded-full text-base hover:bg-red-700 transition-colors cursor-pointer shadow-sm">
                Agendar diagnóstico gratuito
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
