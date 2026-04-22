"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "./ui/SectionReveal";
import { ArrowRight } from "lucide-react";

export function MainServices() {
  const mainServices = [
    {
      title: "Assessoria Contábil",
      description: "Gestão completa das obrigações contábeis, ideal para empresas que buscam compliance e precisão.",
      image: "./service_contabil.png",
    },
    {
      title: "Assessoria Tributária",
      description: "Apuração tributária estratégica e acompanhamento das regras fiscais vigentes.",
      image: "./service_tributaria.png",
    },
    {
      title: "Departamento Pessoal",
      description: "Gestão eficiente de folha de pagamento, admissões, rescisões e demais obrigações trabalhistas.",
      image: "./service_rh.png",
    },
  ];

  const otherServices = [
    "Imposto de Renda",
    "Consultoria Empresarial e Treinamentos",
    "Holding e Planejamento Patrimonial",
  ];

  return (
    <section className="py-24 bg-white" id="main-services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-4">
            Nossos Serviços <span className="text-primary italic">Especializados</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Soluções completas para a gestão do seu negócio, unindo tecnologia e expertise técnica.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {mainServices.map((service, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <div className="group bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <a 
                    href="https://sklcontabil.com.br/contato-via-whatsapp/" 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group/link"
                  >
                    Saiba Mais 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Other Services Section */}
        <SectionReveal className="bg-slate-50 rounded-[2rem] p-8 md:p-12 border border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Conheça outros serviços:</h3>
            <p className="text-slate-500">Soluções complementares para sua segurança patrimonial e empresarial.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center md:justify-end">
            {otherServices.map((service, i) => (
              <span 
                key={i} 
                className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-bold shadow-sm hover:border-primary hover:text-primary transition-all cursor-default"
              >
                {service}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
