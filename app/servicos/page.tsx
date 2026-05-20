"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, Calculator, Users, Scale, FileText, Lightbulb, Building, Network } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

const SERVICES = [
  {
    id: "contabilidade", icon: Briefcase, color: "bg-blue-50 text-blue-600",
    title: "Contabilidade Completa",
    intro: "Oferecemos uma gestão contábil completa, indo além das obrigações legais para gerar informações estratégicas que apoiam a tomada de decisão.",
    bullets: ["Escrituração contábil completa", "Elaboração de demonstrações financeiras", "Análise de resultados e indicadores", "Suporte à gestão e planejamento empresarial"],
    closing: "Nosso objetivo é transformar a contabilidade em uma ferramenta de gestão para o crescimento do seu negócio.",
    photo: "/fotos/foto7.jpg",
  },
  {
    id: "fiscal", icon: Calculator, color: "bg-amber-50 text-amber-600",
    title: "Fiscal e Tributário",
    intro: "Realizamos o planejamento e a gestão tributária de forma estratégica, buscando reduzir a carga fiscal dentro da legalidade e evitar riscos.",
    bullets: ["Apuração de impostos", "Entrega de obrigações acessórias", "Planejamento tributário", "Análises comparativas e revisões fiscais"],
    closing: "Trabalhamos com foco em economia tributária, segurança e conformidade.",
    photo: "/fotos/foto8.jpg",
  },
  {
    id: "dp", icon: Users, color: "bg-emerald-50 text-emerald-600",
    title: "Departamento Pessoal",
    intro: "Cuidamos de toda a gestão trabalhista da sua empresa com precisão e segurança, garantindo o cumprimento das obrigações legais.",
    bullets: ["Processamento da folha de pagamento", "Admissões, rescisões e férias", "eSocial e obrigações trabalhistas", "Gestão e acompanhamento de colaboradores"],
    closing: "Proporcionamos tranquilidade e organização na gestão de pessoas.",
    photo: "/fotos/foto9.jpg",
  },
  {
    id: "reforma-tributaria", icon: Scale, color: "bg-violet-50 text-violet-600",
    title: "Reforma Tributária",
    intro: "Acompanhamos de perto as mudanças da legislação e seus impactos no seu negócio.",
    bullets: ["Análise dos impactos da reforma tributária", "Planejamento para adequação", "Simulações e comparativos", "Orientação estratégica para tomada de decisão"],
    closing: "Preparamos sua empresa para o futuro tributário com segurança.",
    photo: "/fotos/foto10.jpg",
  },
  {
    id: "irpf", icon: FileText, color: "bg-green-50 text-green-600",
    title: "Imposto de Renda Pessoa Física",
    intro: "Elaboramos e revisamos declarações com foco em segurança e otimização fiscal.",
    bullets: ["Declaração completa do IRPF", "Revisão de informações", "Planejamento para redução de carga tributária", "Regularização de pendências"],
    closing: "Garantimos conformidade e aproveitamento de benefícios legais.",
    photo: "/fotos/foto1.jpg",
  },
  {
    id: "consultoria", icon: Lightbulb, color: "bg-orange-50 text-orange-600",
    title: "Consultoria Empresarial e Treinamentos",
    intro: "Atuamos de forma consultiva, ajudando sua empresa a evoluir com organização e estratégia.",
    bullets: ["Diagnóstico empresarial", "Planejamento financeiro e tributário", "Treinamentos para equipe", "Orientação para melhoria de processos"],
    closing: "Ajudamos você a tomar decisões mais seguras e eficientes.",
    photo: "/fotos/foto2.jpg",
  },
  {
    id: "holding", icon: Building, color: "bg-rose-50 text-rose-600",
    title: "Holding e Planejamento Patrimonial",
    intro: "Estruturamos soluções para proteção patrimonial e organização sucessória.",
    bullets: ["Constituição de holdings", "Planejamento sucessório", "Estruturação societária", "Otimização tributária"],
    closing: "Mais segurança, organização e eficiência para seu patrimônio.",
    photo: "/fotos/foto3.jpg",
  },
];

export default function Servicos() {
  return (
    <main className="min-h-screen bg-white text-foreground flex flex-col pt-[72px] lg:pt-[88px]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-36 bg-white border-b border-neutral-100 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/fotos/foto4.jpg" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Portfólio de Soluções</span>
            <h1 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">Nossos <span className="text-primary">Serviços</span></h1>
            <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Soluções contábeis completas e estratégicas, pensadas para cada fase e realidade do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      {SERVICES.map((svc, i) => (
        <section key={svc.id} id={svc.id} scroll-mt="96"
          className={`py-20 scroll-mt-24 ${i % 2 === 0 ? "bg-white" : "bg-neutral-50 border-y border-neutral-100"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-14 lg:gap-20 ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
              <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
                <div className={`w-14 h-14 ${svc.color} rounded-xl flex items-center justify-center mb-6`}>
                  <svc.icon className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-neutral-900 mb-4">{svc.title}</h2>
                <div className="w-12 h-1 bg-primary mb-6" />
                <p className="text-neutral-600 text-lg leading-relaxed mb-6">{svc.intro}</p>
                <ul className="space-y-3 mb-6">
                  {svc.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-neutral-700 font-medium">{b}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-neutral-500 leading-relaxed">{svc.closing}</p>
                <a href="https://wa.me/message/MKFR5CDMJCQHI1" target="_blank" rel="noopener noreferrer" className="inline-block mt-8">
                  <span className="inline-block bg-primary text-white font-bold px-8 py-4 rounded-full text-base hover:bg-red-700 transition-colors cursor-pointer shadow-sm">
                    Falar com especialista
                  </span>
                </a>
              </motion.div>
              <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
                  <img src={svc.photo} alt={svc.title} className="w-full h-[400px] object-cover" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* ── HUB de Soluções ── */}
      <section id="hub-solucoes" className="py-20 lg:py-28 bg-white border-t border-neutral-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Ecossistema Integrado</span>
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-8 h-8 text-primary" />
                <h2 className="text-2xl md:text-4xl font-black text-neutral-900">HUB de Soluções Completo</h2>
              </div>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                A SKL oferece um ecossistema completo de soluções integradas, centralizando todas as necessidades da sua empresa em um único parceiro. Trabalhamos com um modelo de fluxo integrado entre áreas contábil, fiscal, trabalhista e financeira.
              </p>
              <p className="text-neutral-700 font-bold mb-4">Parceiros estratégicos:</p>
              <div className="space-y-4 mb-6">
                {[
                  { name: "Stathen BPO Financeiro", desc: "Gestão financeira completa, incluindo contas a pagar e receber, conciliação bancária, fluxo de caixa e relatórios gerenciais." },
                  { name: "VAP Legalização Empresarial", desc: "Suporte ágil e especializado em abertura, alteração e regularização de empresas." },
                ].map((p, i) => (
                  <div key={i} className="bg-neutral-50 border border-neutral-100 rounded-xl p-5">
                    <p className="font-bold text-neutral-900 mb-1">{p.name}</p>
                    <p className="text-neutral-600 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-neutral-700 font-bold mb-3">Essa integração permite:</p>
              <ul className="space-y-2">
                {["Maior organização financeira e contábil", "Redução de retrabalho e falhas operacionais", "Informações mais rápidas e confiáveis", "Visão completa do negócio em um só lugar"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-neutral-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
                <img src="/fotos/foto5.jpg" alt="HUB de Soluções SKL" className="w-full h-[460px] object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Pronto para começar?</h2>
          <p className="text-white/80 text-lg mb-8">Fale com um especialista e descubra qual solução é ideal para o seu negócio.</p>
          <a href="https://wa.me/message/MKFR5CDMJCQHI1" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full text-base hover:bg-neutral-100 transition-colors cursor-pointer shadow-lg">
              Solicitar proposta
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
