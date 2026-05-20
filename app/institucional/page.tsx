"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Gem, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Institucional() {
  return (
    <main className="min-h-screen bg-white text-foreground flex flex-col pt-[72px] lg:pt-[88px]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-36 overflow-hidden bg-white border-b border-neutral-100">
        <div className="absolute inset-0">
          <img src="/fotos/foto1.jpg" alt="" className="w-full h-full object-cover object-center opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              Perfil Corporativo
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
              Sobre a <span className="text-primary">SKL</span>
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Desde 1997, construindo relações sólidas e entregando excelência contábil para empresas de todos os segmentos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Nossa História ── */}
      <section id="historia" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Nossa Trajetória</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-6 leading-tight">Nossa História</h2>
              <div className="w-16 h-1.5 bg-primary mb-8" />
              <div className="space-y-5 text-neutral-600 text-lg leading-relaxed">
                <p>Fundada em 1997 pelo sócio fundador <strong className="text-neutral-900">André Corrêa Lima</strong>, a SKL Assessoria Contábil nasceu com o propósito de oferecer um atendimento contábil diferenciado, baseado na proximidade com o cliente, na confiança e na excelência técnica.</p>
                <p>Ao lado do fundador, a sócia administrativa <strong className="text-neutral-900">Ana Paula de Almeida Lima</strong> desempenha um papel fundamental na gestão e no desenvolvimento da empresa, contribuindo para a organização interna, a padronização dos processos e a qualidade no atendimento aos clientes.</p>
                <p>Com o passar dos anos, a SKL evoluiu de um modelo tradicional para uma assessoria contábil moderna e estratégica, ampliando sua atuação e incorporando tecnologia, automação e soluções consultivas.</p>
                <p>Hoje, a empresa atende clientes de diversos segmentos, oferecendo suporte completo nas áreas contábil, fiscal e trabalhista. Mais do que cumprir obrigações, a SKL atua como <strong className="text-neutral-900">parceira estratégica</strong>, contribuindo para a tomada de decisões e o crescimento sustentável dos negócios.</p>
              </div>
            </motion.div>
            <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-100">
                  <img src="/diretores.jpg" alt="Fundadores SKL" className="w-full h-[500px] object-cover object-center" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
                  <div className="text-4xl font-black">+28</div>
                  <div className="text-sm font-bold uppercase tracking-wider opacity-90">Anos de Mercado</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Missão, Visão e Valores ── */}
      <section id="missao-visao-valores" className="py-20 lg:py-28 bg-neutral-50 border-y border-neutral-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">DNA Corporativo</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900">Missão, Visão e Valores</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target, title: "Missão",
                text: "Oferecer soluções contábeis estratégicas que contribuam para o crescimento sustentável dos nossos clientes, com excelência, segurança e proximidade no atendimento."
              },
              {
                icon: Eye, title: "Visão",
                text: "Ser referência em contabilidade consultiva, reconhecida pela qualidade dos serviços, inovação constante e relacionamento próximo com os clientes."
              },
              {
                icon: Gem, title: "Valores",
                items: [
                  "Ética e transparência em todas as relações",
                  "Compromisso com resultados e com o sucesso dos clientes",
                  "Atendimento próximo, personalizado e humanizado",
                  "Inovação e melhoria contínua dos processos",
                  "Responsabilidade, confiança e credibilidade",
                ]
              },
            ].map((card, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-black text-neutral-900 mb-4">{card.title}</h3>
                {card.text && <p className="text-neutral-600 leading-relaxed">{card.text}</p>}
                {card.items && (
                  <ul className="space-y-2">
                    {card.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-neutral-600 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Política de Qualidade ── */}
      <section id="politica-qualidade" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <motion.div className="lg:w-1/2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-100">
                <img src="/fotos/foto2.jpg" alt="Política de Qualidade SKL" className="w-full h-[460px] object-cover" />
              </div>
            </motion.div>
            <motion.div className="lg:w-1/2" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Excelência Operacional</span>
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-6 leading-tight">Política de Qualidade</h2>
              <div className="w-16 h-1.5 bg-primary mb-8" />
              <div className="space-y-4 text-neutral-600 text-lg leading-relaxed">
                <p>A SKL Assessoria Contábil tem como compromisso oferecer serviços contábeis com excelência, atuando com ética, transparência e responsabilidade em todas as suas operações.</p>
                <p>Buscamos garantir a plena conformidade com a legislação vigente, a segurança das informações e a confiabilidade dos dados, por meio de processos bem definidos, tecnologia adequada e constante atualização técnica da equipe.</p>
                <p>Nossa atuação é orientada pela melhoria contínua dos processos internos, visando maior eficiência, agilidade no atendimento e geração de valor para nossos clientes.</p>
                <p>A SKL reforça seu compromisso com a excelência por meio do desenvolvimento contínuo de seus profissionais, da inovação em seus serviços e da busca constante por melhores práticas no mercado contábil.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Nossa Estrutura ── */}
      <section id="estrutura" className="py-20 lg:py-28 bg-neutral-50 border-t border-neutral-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">Infraestrutura</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-6">Nossa Estrutura</h2>
            <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
              Contamos com uma estrutura organizada e preparada para atender empresas de diversos portes e segmentos, garantindo eficiência, segurança e qualidade em todos os processos.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {["/fotos/foto3.jpg", "/fotos/foto4.jpg", "/fotos/foto5.jpg", "/fotos/foto6.jpg"].map((src, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className={`relative rounded-2xl overflow-hidden group ${i === 0 ? "col-span-2 row-span-2" : ""}`} style={{ minHeight: i === 0 ? 380 : 180 }}>
                <img src={src} alt={`Estrutura SKL ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/10 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Nossa equipe atua de forma integrada entre os setores contábil, fiscal e trabalhista, proporcionando maior agilidade na execução das atividades e precisão nas informações entregues.",
              "Dispomos de processos bem definidos, tecnologia de apoio e um ambiente estruturado para oferecer suporte completo à gestão do seu negócio.",
              "Investimos continuamente na melhoria da nossa estrutura e na capacitação da equipe, assegurando um atendimento ágil, próximo e alinhado às necessidades de cada cliente.",
              "Nosso ambiente é pensado para receber você com conforto e profissionalismo, garantindo a melhor experiência no atendimento."
            ].map((text, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm border border-neutral-100">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-neutral-600 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Conheça a SKL de perto</h2>
          <p className="text-white/80 text-lg mb-8">Entre em contato e descubra como podemos ser o parceiro estratégico do seu negócio.</p>
          <a href="https://wa.me/message/MKFR5CDMJCQHI1" target="_blank" rel="noopener noreferrer">
            <span className="inline-block bg-white text-primary font-bold px-10 py-4 rounded-full text-base hover:bg-neutral-100 transition-colors cursor-pointer shadow-lg">
              Falar com um especialista
            </span>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
