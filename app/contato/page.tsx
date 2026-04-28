"use client";

import { motion } from "framer-motion";
import { 
  MessageCircle, 
  MapPin, 
  PhoneCall, 
  Mail, 
  Rocket, 
  ArrowRightLeft, 
  Clock,
  Sparkles,
  Coffee
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Contato() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-slate-50 text-foreground flex flex-col pt-[72px] lg:pt-[88px]">
      <Navbar />

      {/* Hero & Fale Conosco (Layout Divertido e Direto) */}
      <section id="fale-conosco" className="relative py-20 lg:py-28 bg-white overflow-hidden scroll-mt-24">
        {/* Background Patterns */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-[100px] z-0" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-bold mb-6 text-slate-800 shadow-sm border border-slate-200">
                <Coffee className="w-4 h-4 text-primary" /> Vamos tomar um café?
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight">
                Fale com a <span className="text-primary italic font-serif">SKL</span> <br/>
                <span className="text-secondary">sem burocracia.</span>
              </h1>
              <p className="text-slate-600 text-lg md:text-xl font-medium max-w-lg mb-8 leading-relaxed">
                Nossa equipe está pronta para te atender com um sorriso no rosto e a solução exata para o seu negócio. Escolha o canal de sua preferência!
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/551150332810" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button className="w-full h-14 px-8 rounded-full bg-green-500 hover:bg-green-600 text-white text-lg font-bold shadow-lg shadow-green-500/30 flex items-center justify-center gap-2 transition-transform hover:scale-105">
                    <MessageCircle className="w-5 h-5" /> WhatsApp Direto
                  </Button>
                </a>
                <a href="tel:+551150332810" className="inline-block">
                  <Button className="w-full h-14 px-8 rounded-full bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 text-lg font-bold flex items-center justify-center gap-2">
                    <PhoneCall className="w-5 h-5 text-secondary" /> (11) 5033-2810
                  </Button>
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <div className="relative">
                <img 
                  src="/contato-realista.png" 
                  alt="Atendimento Real SKL" 
                  className="w-full h-auto max-w-md mx-auto rounded-3xl shadow-2xl hover:-translate-y-2 transition-transform duration-500 object-cover aspect-[4/5]" 
                />
                
                {/* Floating Cards */}
                <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">E-mail</p>
                    <p className="text-sm font-bold text-slate-900">comercial@sklcontabil.com.br</p>
                  </div>
                </div>

                <div className="absolute bottom-10 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}>
                  <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Resposta em</p>
                    <p className="text-sm font-bold text-slate-900">Até 10 min</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Soluções Específicas (Abrir Empresa / Transferência) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Abrir Empresa */}
            <motion.div 
              id="abrir-empresa"
              className="bg-white rounded-3xl p-10 border-2 border-slate-100 hover:border-primary transition-colors shadow-lg scroll-mt-24 group relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full group-hover:scale-150 transition-transform duration-500 z-0" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary text-slate-900 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform">
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Quero <span className="italic font-serif text-primary">Abrir Empresa</span></h3>
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Tire sua ideia do papel com a estrutura certa desde o dia zero. Cuidamos de todo o processo legal, escolha do regime tributário e emissão do seu CNPJ rápido!
                </p>
                <a href="https://wa.me/551150332810?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20como%20abrir%20minha%20empresa." target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto rounded-xl bg-slate-900 hover:bg-primary hover:text-slate-900 h-12 px-8 font-bold transition-colors">
                    Iniciar Abertura
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Transferência de Contabilidade */}
            <motion.div 
              id="transferencia"
              className="bg-slate-900 text-white rounded-3xl p-10 border-2 border-slate-800 hover:border-secondary transition-colors shadow-lg shadow-slate-900/20 scroll-mt-24 group relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/20 rounded-full group-hover:scale-150 transition-transform duration-500 z-0" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-secondary text-white rounded-2xl flex items-center justify-center mb-8 -rotate-3 group-hover:rotate-0 transition-transform">
                  <ArrowRightLeft className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-black mb-4">Mudar de <span className="italic font-serif text-secondary">Contabilidade</span></h3>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  Insatisfeito com seu contador atual? A transição para a SKL é 100% digital, sem atritos e sem interrupções na sua rotina. Nós fazemos todo o trabalho chato por você.
                </p>
                <a href="https://wa.me/551150332810?text=Olá!%20Gostaria%20de%20falar%20sobre%20a%20transferência%20da%20minha%20contabilidade." target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto rounded-xl bg-secondary hover:bg-white hover:text-slate-900 h-12 px-8 font-bold transition-colors">
                    Falar com Consultor
                  </Button>
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contatos e Localização */}
      <section id="localizacao" className="py-20 bg-white border-t border-slate-200 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-4">
              Nossa <span className="text-primary italic font-serif">Localização</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-xl mx-auto">
              Venha tomar um café conosco ou agende uma reunião presencial em nosso escritório.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center bg-slate-50 p-4 sm:p-8 rounded-3xl border border-slate-100">
            <div className="lg:w-1/3 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Endereço</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Rua Gastão da Cunha, 265 <br />
                    Vila Paulista, São Paulo - SP <br />
                    CEP: 04361-090
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg mb-1">Horário de Atendimento</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Segunda a Sexta <br />
                    08:30 às 12:00 e 13:00 às 17:30
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:w-2/3 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.437142476536!2d-46.6666!3d-23.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a9c!2sRua%20Gast%C3%A3o%20da%20Cunha%2C%20265%20-%20Vila%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004361-090!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Mapa SKL Contabilidade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
