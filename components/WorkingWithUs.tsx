"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

const BULLETS = [
  "Dashboards com indicadores contábeis atualizados em tempo real, na palma da sua mão",
  "Acompanhamento da folha de pagamento e da gestão de colaboradores",
  "Controle e análise mensal de impostos, com comparativos relevantes",
  "Integração de sistemas",
  "Automação de processos",
  "Envio digital de documentos por meio de plataforma interna",
  "Segurança de dados e compliance",
];

export function WorkingWithUs() {
  return (
    <section className="py-24 overflow-hidden bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left – Video inside red block */}
          <div className="w-full lg:w-1/2 relative flex justify-center py-10 lg:py-0">
            {/* Red background shape */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="absolute left-0 lg:-left-10 top-0 bottom-0 w-[80%] lg:w-3/4 bg-primary rounded-br-[6rem] rounded-tr-[2rem] z-0"
            />

            {/* Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-[260px] sm:w-[300px] lg:w-[330px] mt-6 lg:mt-12 ml-10 lg:ml-20"
            >
              {/* iPhone shell */}
              <div className="relative bg-neutral-900 rounded-[3rem] p-[10px] shadow-2xl border-[2px] border-neutral-700">
                {/* Side buttons */}
                <div className="absolute -left-[3px] top-24 w-[3px] h-8 bg-neutral-700 rounded-l-full" />
                <div className="absolute -left-[3px] top-36 w-[3px] h-12 bg-neutral-700 rounded-l-full" />
                <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-neutral-700 rounded-l-full" />
                <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-neutral-700 rounded-r-full" />

                {/* Screen */}
                <div className="relative rounded-[2.4rem] overflow-hidden bg-black">
                  <video
                    src="/ScreenRecording_04-14-2026 16-29-46_1 (1).mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right – Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4">
                Tecnologia e inovação<br className="hidden lg:block" /> a serviço da sua empresa
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed mb-10">
                Utilizamos sistemas modernos e automações inteligentes para tornar sua contabilidade mais ágil, segura e eficiente, garantindo informações em tempo real para apoiar suas decisões.
              </p>
            </motion.div>

            <div className="space-y-4">
              {BULLETS.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-neutral-700 font-medium">{text}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <a
                href="https://wa.me/message/MKFR5CDMJCQHI1"
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
