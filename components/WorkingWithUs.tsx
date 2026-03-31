"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function WorkingWithUs() {
  const benefits = [
    {
      title: "Prestativos e consultivos",
      desc: "Oferecemos um atendimento consultivo dedicado, sempre à disposição para orientar sua empresa nas melhores decisões financeiras e tributárias."
    },
    {
      title: "Proximidade com o cliente",
      desc: "Construímos relações de confiança com nossos clientes, estando sempre próximos para entender suas necessidades e entregar soluções personalizadas."
    },
    {
      title: "Tecnologia em todos os sistemas",
      desc: "Utilizamos tecnologia de ponta para garantir que sua contabilidade esteja sempre atualizada, com sistemas eficientes que proporcionam maior controle e precisão."
    },
    {
      title: "Processos automatizados",
      desc: "Nossos processos são automatizados para otimizar o tempo e reduzir erros, oferecendo um serviço mais ágil, preciso e sem burocracia."
    },
    {
      title: "Emissão de certificado digital",
      desc: "Criamos o certificado digital para todos os clientes que desejem, oferecendo mais segurança e autenticidade nas operações contábeis e fiscais."
    }
  ];

  return (
    <section className="py-24 overflow-hidden bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Mockup Image perfectly matching reference 1 */}
          <div className="w-full lg:w-1/2 relative flex justify-center py-10 lg:py-0">
            {/* The Solid Red background box */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="absolute left-0 lg:-left-10 top-0 bottom-0 w-[80%] lg:w-3/4 bg-primary rounded-br-[6rem] rounded-tr-[2rem] z-0"
            ></motion.div>
            
            {/* iPhone Mockup built via CSS relative to the box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 
                         w-[280px] sm:w-[320px] lg:w-[340px] aspect-[9/19.5] 
                         bg-black rounded-[3rem] shadow-2xl border-[12px] border-slate-900 
                         overflow-hidden mt-6 lg:mt-12 ml-10 lg:ml-20"
            >
              {/* iPhone Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20"></div>
              
              {/* Screen Image (SKL Office) */}
              <img 
                src="./equipe-skl.jpg" 
                alt="Equipe SKL" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
          </div>

          {/* Right Side: Content and Vertical List matching Reference 1 */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-12">
                A contabilidade que <br className="hidden lg:block"/>trabalha ao seu lado
              </h2>
            </motion.div>

            <div className="space-y-8">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  {/* Vertical solid red pill marker */}
                  <div className="mt-1 flex-shrink-0">
                    <div className="w-2.5 h-10 bg-primary rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg sm:text-xl">
                      {benefit.title}:
                    </h4>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-1">
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-10"
            >
              <a 
                href="https://sklcontabil.com.br/contato-via-whatsapp/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-[#900018] group transition-colors"
              >
                Clique aqui e fale conosco
                <ArrowUpRight strokeWidth={3} className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
