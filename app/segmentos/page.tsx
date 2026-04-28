"use client";

import { motion } from "framer-motion";
import { 
  Factory, 
  ShoppingCart, 
  Store, 
  Laptop, 
  Stethoscope, 
  Briefcase,
  Building2,
  Tractor,
  HeartHandshake,
  CheckCircle2,
  ArrowRight,
  Target
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Segmentos() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col pt-[72px] lg:pt-[88px]">
      <Navbar />

      {/* Hero Segmentos */}
      <section className="relative py-20 lg:py-32 bg-[#020817] overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a]/90 via-[#020817] to-[#0f172a]/90 z-10" />
          <div className="absolute inset-0 bg-[url('/industria.png')] bg-cover bg-center opacity-10" />
        </div>
        
        {/* Abstract Shapes */}
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none z-0" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm font-bold mb-6 tracking-wide text-primary uppercase">
              <Target className="w-4 h-4" /> Especialização Setorial
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Dominamos a <br className="hidden md:block"/>
              <span className="text-primary italic font-serif">Linguagem do seu Negócio</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Cada setor possui suas próprias complexidades tributárias e trabalhistas. Nossa equipe é dividida em células de especialidade para entregar resultados precisos para a sua realidade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Comércio e Indústrias */}
      <section id="comercio-industrias" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center gap-3 hover:border-primary/50 transition-colors">
                  <Factory className="w-10 h-10 text-primary" />
                  <span className="font-bold text-slate-800">Indústrias de Transformação</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center gap-3 hover:border-primary/50 transition-colors">
                  <ShoppingCart className="w-10 h-10 text-primary" />
                  <span className="font-bold text-slate-800">Atacado & Distribuição</span>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-center gap-3 hover:border-primary/50 transition-colors col-span-2">
                  <Store className="w-10 h-10 text-primary" />
                  <span className="font-bold text-slate-800">Varejo & Franquias</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Complexidade Resolvida</h2>
              <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6">
                Comércio & <span className="text-primary italic font-serif">Indústrias</span>
              </h3>
              <div className="w-16 h-1.5 bg-secondary mb-8"></div>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Indústrias e grandes comércios operam em um campo minado de regras fiscais. Dominamos a legislação de IPI, ICMS, Substituição Tributária (ICMS-ST) e o bloco K, garantindo que sua produção e estoque não gerem passivos milionários.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Recuperação de créditos de PIS/COFINS",
                  "Classificação fiscal de produtos (NCM) afiada",
                  "Gestão de custos industriais e Bloco K do SPED",
                  "Mapeamento de incentivos fiscais estaduais"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <ArrowRight className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Prestadores de Serviços */}
      <section id="prestadores-servicos" className="py-24 bg-slate-900 text-white scroll-mt-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/prestadores.png')] bg-cover bg-center opacity-5" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-slate-900 z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Carga Tributária Otimizada</h2>
            <h3 className="text-3xl lg:text-5xl font-black mb-6">
              Prestadores de <span className="text-secondary italic font-serif">Serviços</span>
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Seu maior custo é a folha de pagamento e o ISS. Atuamos com inteligência para enquadrar sua empresa no melhor cenário tributário (Simples, Presumido ou Real).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Laptop,
                title: "Empresas de Tecnologia",
                desc: "Softwares, Startups e Agências Digitais. Entendemos a dinâmica ágil do seu negócio e aplicamos incentivos voltados para inovação."
              },
              {
                icon: Stethoscope,
                title: "Área da Saúde",
                desc: "Clínicas médicas, odontológicas e profissionais liberais. Aplicação de equiparação hospitalar para redução severa de impostos (IRPJ/CSLL)."
              },
              {
                icon: Briefcase,
                title: "Serviços B2B Corporativos",
                desc: "Consultorias, engenharias e arquitetura. Protegemos seus contratos e otimizamos a retenção de impostos na fonte."
              }
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="text-xl font-bold mb-4">{card.title}</h4>
                <p className="text-slate-400 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Outros (Nichos Específicos) */}
      <section id="outros" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6">
                Outros Segmentos & <br/>
                <span className="text-primary italic font-serif">Casos Específicos</span>
              </h2>
              <div className="w-16 h-1.5 bg-primary mb-8"></div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Nossa robustez técnica nos permite atender com segurança jurídica entidades e organizações que possuem legislações extremamente singulares e específicas.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    icon: HeartHandshake,
                    title: "Terceiro Setor (ONGs e Associações)",
                    desc: "Garantia de isenções, imunidades tributárias e prestação de contas rigorosa para captação de recursos."
                  },
                  {
                    icon: Tractor,
                    title: "Produtor Rural e Agronegócio",
                    desc: "Livro Caixa Digital do Produtor Rural (LCDPR), ITR e planejamento sucessório de terras."
                  },
                  {
                    icon: Building2,
                    title: "Condomínios e Imobiliárias",
                    desc: "Gestão de folha complexa, retenções de síndicos e tributação sobre aluguéis."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="p-3 bg-slate-100 rounded-lg text-slate-700">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl">
                <img src="/agronegocio.png" alt="Especialistas em Nichos Específicos" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="text-3xl font-black mb-2">Não encontrou seu setor?</div>
                  <p className="text-white/80">Temos capacidade técnica para avaliar e assumir a contabilidade de operações de qualquer complexidade.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-950 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black mb-6">Traga a realidade da sua empresa para nós</h2>
          <p className="text-slate-400 text-lg mb-10">
            Nossos especialistas estão prontos para traçar um diagnóstico da sua operação e apresentar uma proposta de valor real.
          </p>
          <Button className="rounded-full bg-primary text-slate-900 hover:bg-white h-14 px-10 text-lg font-bold transition-colors">
            Agendar Reunião de Diagnóstico
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
