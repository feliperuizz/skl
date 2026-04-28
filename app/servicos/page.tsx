"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  Calculator, 
  Users, 
  Scale, 
  FileText, 
  Lightbulb, 
  Building, 
  Network,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Servicos() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col pt-[72px] lg:pt-[88px]">
      <Navbar />

      {/* Hero Serviços */}
      <section className="relative py-20 lg:py-32 bg-slate-950 overflow-hidden flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1a1400] via-[#0a0f1a] to-[#2F000A] z-10 opacity-90" />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 blur-[120px] rounded-full pointer-events-none z-0" />
        
        <div className="max-w-5xl mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-sm font-bold mb-6 tracking-wide text-primary">
              <Briefcase className="w-4 h-4" /> Portfólio de Soluções
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Assessoria Especializada <br className="hidden md:block"/>
              <span className="text-primary italic font-serif">Para Cada Fase do Seu Negócio</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium max-w-3xl mx-auto leading-relaxed">
              Mais do que cumprir obrigações fiscais, entregamos inteligência de negócios. Explore nosso portfólio completo de serviços desenvolvidos para blindar e alavancar o seu patrimônio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Contabilidade Completa */}
      <section id="contabilidade" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Briefcase className="w-8 h-8" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
                Contabilidade <span className="text-primary italic font-serif">Completa</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Uma gestão contábil impecável é a base de qualquer empresa de sucesso. Cuidamos de toda a estruturação e escrituração contábil da sua empresa seguindo os mais rigorosos padrões normativos (IFRS).
              </p>
              <ul className="space-y-4">
                {[
                  "Escrituração Contábil Digital (ECD)",
                  "Elaboração de Balanços e Balancetes periódicos",
                  "Demonstrativo de Resultados (DRE)",
                  "Análise de índices de liquidez e rentabilidade"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 relative">
                <img src="/foto.png" alt="Contabilidade Completa" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Fiscal e Tributário */}
      <section id="fiscal" className="py-24 bg-slate-50 border-y border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="w-16 h-16 bg-secondary/10 text-secondary rounded-2xl flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
                Assessoria <span className="text-secondary italic font-serif">Fiscal e Tributária</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                No complexo cenário tributário brasileiro, pagar impostos corretamente e de forma otimizada é uma vantagem competitiva. Realizamos o planejamento tributário contínuo para garantir a menor carga de impostos legalmente possível.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Apuração rigorosa de tributos (Federais, Estaduais e Municipais)",
                  "Revisão de enquadramento tributário anual",
                  "Entrega de todas as obrigações acessórias (SPED, EFD, DCTF)",
                  "Recuperação de créditos tributários"
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm">
                    <span className="text-slate-700 font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-slate-200 relative p-8 flex items-center justify-center">
                <div className="absolute inset-0 bg-[url('https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/financeiro.jpg')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
                <div className="relative z-10 text-white text-center">
                  <div className="text-6xl font-black mb-2">100%</div>
                  <div className="text-xl font-bold uppercase tracking-widest text-primary">Compliance Fiscal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Departamento Pessoal */}
      <section id="dp" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
              Gestão de <span className="text-blue-600 italic font-serif">Departamento Pessoal</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Elimine passivos trabalhistas. Nossa equipe de especialistas em DP garante o cumprimento impecável das legislações trabalhistas (CLT) e previdenciárias da sua equipe.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Rotinas Mensais", desc: "Processamento de folha de pagamento, cálculo de pró-labore, guias de INSS, FGTS e IRRF." },
              { title: "eSocial & Obrigações", desc: "Gestão completa do eSocial, envio de eventos, DCTFWeb, DIRF e acompanhamento de convenções coletivas." },
              { title: "Gestão de Ciclo", desc: "Admissões, rescisões, controle de férias, licenças e suporte técnico a fiscalizações." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-10 h-10 bg-white shadow-sm rounded-lg flex items-center justify-center mb-4 text-blue-600 font-black text-xl">
                  0{i+1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Reforma Tributária */}
      <section id="reforma-tributaria" className="py-24 bg-slate-900 text-white scroll-mt-24 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/2 h-[200%] bg-primary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="lg:w-5/12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="w-full aspect-square bg-gradient-to-tr from-primary to-secondary rounded-full p-1 shadow-[0_0_80px_rgba(181,151,32,0.3)]">
                <div className="w-full h-full bg-slate-900 rounded-full flex flex-col items-center justify-center p-8 text-center border-4 border-slate-900">
                  <Scale className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-black mb-2 text-white">Transição Segura</h3>
                  <p className="text-slate-400 text-sm">Preparação completa para as novas regras de IVA Dual (CBS e IBS).</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-7/12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl lg:text-5xl font-black mb-6">
                Consultoria em <br/>
                <span className="text-primary italic font-serif">Reforma Tributária</span>
              </h2>
              <div className="w-20 h-1 bg-secondary mb-8"></div>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                A maior mudança fiscal das últimas décadas já começou. Sua empresa está pronta? Oferecemos um diagnóstico profundo sobre os impactos da Reforma Tributária no preço do seu produto, na sua margem de lucro e no seu caixa.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-primary" /> <span className="text-slate-200">Simulações de impacto de carga tributária</span></li>
                <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-primary" /> <span className="text-slate-200">Revisão de precificação pós-reforma</span></li>
                <li className="flex items-center gap-3"><ArrowRight className="w-5 h-5 text-primary" /> <span className="text-slate-200">Aproveitamento de créditos no período de transição</span></li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Imposto de Renda Pessoa Física */}
      <section id="irpf" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-slate-50 p-8 lg:p-12 rounded-3xl border border-slate-200">
            <div className="md:w-2/3">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-green-100 text-green-700 rounded-xl">
                  <FileText className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-black text-slate-900">IRPF Especializado</h2>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Cuidamos da Declaração de Imposto de Renda Pessoa Física de sócios, diretores e do público em geral. Uma análise detalhada para evitar malha fina, justificar variação patrimonial e garantir a restituição correta.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">Ganho de Capital</span>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">Renda Variável (Bolsa)</span>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">Ativos no Exterior</span>
                <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-700 shadow-sm">Criptomoedas</span>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img src="/foto.png" alt="IRPF" className="w-48 h-48 object-cover rounded-full border-8 border-white shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Consultoria Empresarial e Treinamentos */}
      <section id="consultoria" className="py-24 bg-[#2F000A] text-white scroll-mt-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst03.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <Lightbulb className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl lg:text-5xl font-black mb-6">
            Consultoria & <span className="text-primary italic font-serif">Treinamentos</span>
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed mb-12">
            Apoiamos gestores e equipes na tomada de decisões estratégicas e na padronização de processos corporativos. Transformamos dados contábeis em inteligência executiva.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              "BPO Financeiro (Terceirização do Financeiro)",
              "Valuation (Avaliação de Empresas)",
              "Treinamentos in-company (Fiscal, RH e Gestão)",
              "Auditoria Preventiva de Processos",
              "Planejamento Estratégico",
              "Implantação de ERP"
            ].map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors text-left">
                <CheckCircle2 className="w-5 h-5 text-primary mb-3" />
                <h4 className="font-bold text-white">{item}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Holding e Planejamento Patrimonial */}
      <section id="holding" className="py-24 bg-slate-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 aspect-square flex flex-col items-center justify-center text-center">
                    <Building className="w-10 h-10 text-primary mb-3" />
                    <span className="font-bold text-slate-800">Proteção Patrimonial</span>
                  </div>
                  <div className="bg-slate-900 p-6 rounded-2xl shadow-sm aspect-square flex flex-col items-center justify-center text-center">
                    <span className="text-4xl font-black text-white mb-2">ITCMD</span>
                    <span className="text-sm font-medium text-slate-400">Redução de Custos</span>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-secondary p-6 rounded-2xl shadow-sm aspect-square flex flex-col items-center justify-center text-center">
                    <span className="text-2xl font-black text-white mb-2">Sucessão</span>
                    <span className="text-sm font-medium text-white/80">Familiar e Empresarial</span>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 aspect-square flex flex-col items-center justify-center text-center">
                    <Scale className="w-10 h-10 text-slate-800 mb-3" />
                    <span className="font-bold text-slate-800">Blindagem Legal</span>
                  </div>
                </div>
              </div>
            </div>
            <motion.div 
              className="lg:w-1/2 order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6">
                Holding & <br/> <span className="text-secondary italic font-serif">Planejamento Patrimonial</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Proteja o patrimônio construído ao longo da vida e organize a sucessão familiar sem conflitos e com a máxima economia tributária. Estruturamos Holdings Familiares e Patrimoniais sob medida para o seu cenário.
              </p>
              <Button className="rounded-full bg-slate-900 text-white hover:bg-primary h-12 px-8 text-base">
                Falar com especialista em Holding
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. HUB de Soluções Completo */}
      <section id="hub-solucoes" className="py-24 bg-white border-t border-slate-100 scroll-mt-24 text-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-8 border border-slate-200">
            <Network className="w-10 h-10 text-slate-800" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6">
            HUB de <span className="text-primary italic font-serif">Soluções Completas</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            Muito além da contabilidade, conectamos sua empresa a um ecossistema de parceiros validados em áreas críticas de gestão.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {["Certificação Digital", "Registro de Marcas", "Abertura de Empresas", "BPO Financeiro", "Seguros Empresariais", "Sistemas de Gestão"].map((item, i) => (
              <span key={i} className="px-6 py-3 bg-slate-50 border border-slate-200 rounded-full text-slate-800 font-bold hover:border-primary hover:text-primary transition-colors cursor-default">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8">Pronto para elevar a gestão da sua empresa?</h2>
          <Button className="rounded-full bg-slate-900 text-white hover:bg-slate-800 h-14 px-10 text-lg font-bold">
            Solicitar uma Proposta Comercial
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
