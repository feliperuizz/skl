"use client";

import { motion } from "framer-motion";
import { Target, Eye, Gem, ShieldCheck, Laptop, Cloud, Database, Users, GraduationCap, Building2, ChevronRight, Award, Lock, BookOpen } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const FACILITY_IMAGES = [
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst07-1024x650.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst01.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst02.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst03.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst04.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst06.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/inst08-1024x650.jpg",
  "https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/financeiro.jpg"
];

const CERTS = [
  { title: "SEGURANÇA DA INFORMAÇÃO", image: "/selo.jpg", desc: "Protocolos rígidos de proteção de dados" },
  { title: "QUALIDADE SESCON-SP", image: "/PQECSescon.png", desc: "Certificação de excelência PQEC" },
  { title: "REGISTRO PROFISSIONAL", image: "/CRCSP.jfif", desc: "Conselho Regional de Contabilidade" },
  { title: "RESPONSABILIDADE SOCIAL", image: "/graacc.png", desc: "Empresa parceira do GRAACC" }
];

export default function Institucional() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col pt-[72px] lg:pt-[88px]">
      <Navbar />

      {/* Hero Institucional Customizado */}
      <section className="relative py-24 lg:py-40 bg-[#0a0f1a] overflow-hidden flex items-center justify-center text-center border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a]/80 via-[#0a0f1a]/95 to-[#0a0f1a] z-10" />
          <div className="absolute inset-0 bg-[url('/equipe-real.jpg')] bg-cover bg-center opacity-20" />
        </div>
        
        {/* Decorative Lines */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">Perfil Corporativo</span>
              <div className="h-[1px] w-12 bg-primary"></div>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Excelência <span className="text-secondary italic font-serif">Absoluta</span> <br/>
              em Gestão Contábil
            </h1>
            <p className="text-slate-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Descubra a infraestrutura, os valores e a tecnologia que fazem da SKL o parceiro definitivo para a segurança e o crescimento do seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nossa História - Layout Institucional */}
      <section id="historia" className="py-24 bg-white scroll-mt-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Nossa História</h2>
              <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Mais de 28 anos <br/> <span className="text-primary italic font-serif">construindo confiança.</span>
              </h3>
              <div className="w-16 h-1.5 bg-secondary mb-8"></div>
              
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  A trajetória da SKL Assessoria Contábil começou com um propósito claro: transcender a contabilidade tradicional. Desde nossa fundação, entendemos que nossos clientes não buscam apenas conformidade legal, mas sim uma bússola para decisões estratégicas.
                </p>
                <p>
                  Ao longo de quase três décadas, evoluímos nossa infraestrutura, adotamos tecnologias de ponta e montamos um corpo técnico de elite. Hoje, somos reconhecidos pela solidez das nossas entregas e pela parceria verdadeira que estabelecemos com cada empresa que confia em nosso trabalho.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-4xl font-black text-primary mb-1">+28</div>
                  <div className="text-sm font-bold text-slate-500 uppercase">Anos de Mercado</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-primary mb-1">100%</div>
                  <div className="text-sm font-bold text-slate-500 uppercase">Comprometimento</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden relative shadow-2xl">
                <img src="/equipe-real.jpg" alt="História SKL" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/10"></div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - Layout Institucional */}
      <section id="missao-visao-valores" className="py-24 bg-slate-50 scroll-mt-24 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">DNA Corporativo</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
              Pilares que <span className="text-primary italic font-serif">sustentam</span> nosso trabalho
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: "Missão",
                desc: "Fornecer serviços contábeis e assessoria empresarial de altíssima qualidade, fornecendo informações seguras e precisas para a tomada de decisão, contribuindo diretamente para o crescimento sustentável de nossos clientes."
              },
              {
                icon: Eye,
                title: "Visão",
                desc: "Ser reconhecida como a mais eficiente e confiável parceira estratégica de negócios em nossa região, destacando-se pela inovação tecnológica, excelência no atendimento e resultados reais gerados aos clientes."
              },
              {
                icon: Gem,
                title: "Valores",
                desc: "Ética inegociável, transparência absoluta, comprometimento com o resultado do cliente, valorização humana, atualização contínua e a inovação como ferramenta principal de solução."
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-none border-t-4 border-primary shadow-lg relative group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-24 h-24 text-primary" />
                </div>
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-8 border border-slate-100 relative z-10">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Política de Qualidade - Layout Institucional */}
      <section id="politica-qualidade" className="py-24 bg-slate-950 text-white scroll-mt-24 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/equipe-real.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Compliance & Segurança</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Política de Qualidade</h2>
            
            <div className="w-20 h-1 bg-secondary mb-10"></div>
            
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
              A SKL Contabilidade compromete-se rigorosamente com a melhoria contínua de seus processos e a satisfação absoluta de seus clientes. Nossa política de qualidade é inegociável e baseia-se em quatro fundamentos técnicos.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: BookOpen, text: "Conformidade rigorosa com normas contábeis vigentes" },
                { icon: Eye, text: "Auditoria interna periódica de processos e rotinas" },
                { icon: Lock, text: "Segurança e confidencialidade total da informação" },
                { icon: ChevronRight, text: "Atendimento monitorado com SLA definido" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <item.icon className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-slate-200 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Estrutura - Grid Fotográfico Institucional */}
      <section id="estrutura" className="py-24 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Infraestrutura</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
                Nossa <span className="text-primary italic font-serif">Estrutura</span>
              </h3>
            </div>
            <p className="text-slate-600 max-w-lg text-lg">
              Um ambiente corporativo moderno, projetado para garantir o conforto da nossa equipe, a segurança das informações e a melhor recepção para os nossos clientes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {FACILITY_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-xl overflow-hidden group bg-slate-100 ${
                  idx === 0 ? "col-span-2 row-span-2 md:aspect-auto aspect-square" : "aspect-square"
                }`}
              >
                <Image 
                  src={img} 
                  alt={`Estrutura SKL ${idx + 1}`} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Sistemas e Tecnologia - Layout Corporativo */}
      <section id="sistemas-tecnologia" className="py-24 bg-slate-50 scroll-mt-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Vanguarda Digital</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
              Sistemas & <span className="text-primary italic font-serif">Tecnologia</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Software ERP de Ponta",
                desc: "Processamento contábil e fiscal impecável utilizando os sistemas mais robustos e validados do mercado nacional."
              },
              {
                icon: Cloud,
                title: "Arquitetura 100% em Nuvem",
                desc: "Documentos, guias e relatórios acessíveis a qualquer momento em portais seguros, criptografados e com backup redundante."
              },
              {
                icon: Laptop,
                title: "Integração B2B nativa",
                desc: "Integração direta com o seu software financeiro. Eliminamos a digitação manual, mitigando severamente riscos de falha humana."
              }
            ].map((tech, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 border border-slate-200 hover:border-primary transition-colors flex flex-col h-full"
              >
                <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center mb-6">
                  <tech.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{tech.title}</h3>
                <p className="text-slate-600 leading-relaxed mt-auto">{tech.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe / Profissionais - Layout Institucional */}
      <section id="equipe" className="py-24 bg-white scroll-mt-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 order-2 lg:order-1 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden shadow-2xl">
                <img src="/foto.png" alt="Corpo Diretivo e Equipe SKL" className="w-full h-auto object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
                <div className="absolute inset-0 border-4 border-white/20 m-4 pointer-events-none"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10"></div>
            </motion.div>
            
            <div className="lg:w-1/2 order-1 lg:order-2">
              <h2 className="text-sm font-bold text-slate-400 tracking-widest uppercase mb-3">Capital Humano</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
                Intelecto e <br/>
                <span className="text-secondary italic font-serif">Alta Performance</span>
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Nosso maior patrimônio não são as máquinas, são as mentes. A SKL conta com um corpo técnico formado por contadores seniores, especialistas tributários, auditores e analistas em constante atualização.
              </p>
              
              <div className="bg-slate-50 p-6 border-l-4 border-secondary">
                <p className="text-slate-700 italic font-medium">
                  "Não somos apenas processadores de guias. Somos consultores de negócios focados em otimizar a carga tributária e garantir a paz de espírito dos nossos clientes."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificações / CRC / Compliance - Layout Customizado */}
      <section id="certificacoes" className="py-24 bg-slate-900 text-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <Award className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black mb-16">
            Certificações & <span className="text-secondary italic font-serif">Compliance</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {CERTS.map((cert, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center group"
              >
                <div className="h-32 w-full bg-white rounded-lg p-4 mb-6 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(181,151,32,0.2)]">
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h4 className="font-bold text-sm tracking-wider uppercase mb-2 text-slate-200">{cert.title}</h4>
                <p className="text-slate-400 text-sm">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
