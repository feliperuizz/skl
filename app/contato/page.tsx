"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle, Rocket, ArrowRightLeft, MapPin, Clock } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const fadeIn = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

function ContactButton({ href, icon: Icon, label, color }: { href: string; icon: any; label: string; color: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-sm ${color}`}>
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );
}

export default function Contato() {
  return (
    <main className="min-h-screen bg-white text-foreground flex flex-col pt-[72px] lg:pt-[88px]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative py-24 lg:py-36 bg-white border-b border-neutral-100 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/fotos/foto9.jpg" alt="" className="w-full h-full object-cover opacity-10" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60" />
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">Fale Conosco</span>
            <h1 className="text-4xl md:text-6xl font-black text-neutral-900 mb-6 leading-tight">
              Vamos <span className="text-primary">conversar?</span>
            </h1>
            <p className="text-neutral-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Estamos prontos para entender sua necessidade e oferecer a melhor solução para o seu negócio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── 3 Contact Cards ── */}
      <section id="fale-conosco" className="py-20 lg:py-28 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Fale Conosco */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0 }}
              className="bg-white border-2 border-neutral-100 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6">
                  <MessageCircle className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-3">Fale Conosco</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Entre em contato com a SKL e fale com um de nossos especialistas. Estamos prontos para entender sua necessidade e oferecer a melhor solução.
                </p>
                <div className="space-y-3 mb-8 text-sm text-neutral-700">
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /><span>contato@sklcontabil.com.br</span></div>
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /><span>comercial@sklcontabil.com.br</span></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><span>+55 11 5033-2810</span></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><span>+55 11 97443-7819</span></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ContactButton href="mailto:comercial@sklcontabil.com.br" icon={Mail} label="Enviar e-mail" color="bg-neutral-100 text-neutral-800 hover:bg-neutral-200" />
                  <ContactButton href="tel:+551150332810" icon={Phone} label="Ligar" color="bg-neutral-100 text-neutral-800 hover:bg-neutral-200" />
                  <ContactButton href="https://wa.me/5511974437819?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20especialista%20da%20SKL%20Contabilidade." icon={MessageCircle} label="WhatsApp" color="bg-green-500 text-white hover:bg-green-600" />
                </div>
              </div>
            </motion.div>

            {/* Abrir Empresa */}
            <motion.div id="abrir-empresa" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.1 }}
              className="bg-primary text-white rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden scroll-mt-24">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Rocket className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-black mb-3">Abrir Empresa</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Abra sua empresa com segurança e agilidade. Cuidamos de todo o processo para você começar seu negócio da forma correta.
                </p>
                <div className="space-y-3 mb-8 text-sm text-white/90">
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>mike@sklcontabil.com.br</span></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>+55 11 98057-2539</span></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ContactButton href="mailto:mike@sklcontabil.com.br" icon={Mail} label="Enviar e-mail" color="bg-white/20 text-white hover:bg-white/30" />
                  <ContactButton href="tel:+5511980572539" icon={Phone} label="Ligar" color="bg-white/20 text-white hover:bg-white/30" />
                  <ContactButton href="https://wa.me/5511980572539?text=Ol%C3%A1!%20Tenho%20interesse%20em%20abrir%20uma%20empresa%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es." icon={MessageCircle} label="WhatsApp" color="bg-green-500 text-white hover:bg-green-600" />
                </div>
              </div>
            </motion.div>

            {/* Transferência */}
            <motion.div id="transferencia" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}
              className="bg-white border-2 border-neutral-100 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden scroll-mt-24">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6">
                  <ArrowRightLeft className="w-7 h-7 text-neutral-700" />
                </div>
                <h3 className="text-2xl font-black text-neutral-900 mb-3">Transferência de Contabilidade</h3>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  Traga sua empresa para a SKL e tenha uma contabilidade mais organizada, estratégica e eficiente. Nós cuidamos de toda a transição para você.
                </p>
                <div className="space-y-3 mb-8 text-sm text-neutral-700">
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /><span>comercial@sklcontabil.com.br</span></div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /><span>+55 11 97443-7819</span></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <ContactButton href="mailto:comercial@sklcontabil.com.br" icon={Mail} label="Enviar e-mail" color="bg-neutral-100 text-neutral-800 hover:bg-neutral-200" />
                  <ContactButton href="tel:+5511974437819" icon={Phone} label="Ligar" color="bg-neutral-100 text-neutral-800 hover:bg-neutral-200" />
                  <ContactButton href="https://wa.me/5511974437819?text=Ol%C3%A1!%20Tenho%20interesse%20em%20transferir%20minha%20contabilidade%20para%20a%20SKL.%20Podem%20me%20ajudar%3F" icon={MessageCircle} label="WhatsApp" color="bg-green-500 text-white hover:bg-green-600" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Localização ── */}
      <section id="localizacao" className="py-20 lg:py-28 bg-neutral-50 border-t border-neutral-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div className="text-center mb-16" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-4 tracking-widest uppercase">Onde Estamos</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 mb-4">Contatos e Localização</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Fale conosco pelos nossos canais de atendimento ou visite nosso escritório. Estamos prontos para atender você com agilidade e proximidade.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 items-start bg-white rounded-3xl border border-neutral-100 shadow-sm p-6 sm:p-10">
            <div className="lg:w-1/3 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg mb-1">Endereço</h4>
                  <p className="text-neutral-600 leading-relaxed">Rua Gastão da Cunha, 265<br />Vila Paulista, São Paulo – SP<br />CEP: 04361-090</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg mb-1">Horário de Atendimento</h4>
                  <p className="text-neutral-600 leading-relaxed">Segunda a Sexta<br />08:30 às 12:00 e 13:00 às 17:30</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg mb-1">Telefones</h4>
                  <p className="text-neutral-600 leading-relaxed">+55 11 5033-2810<br />+55 11 97443-7819</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-lg mb-1">E-mail</h4>
                  <p className="text-neutral-600 leading-relaxed">contato@sklcontabil.com.br<br />comercial@sklcontabil.com.br</p>
                </div>
              </div>
              <a href="https://wa.me/message/MKFR5CDMJCQHI1" target="_blank" rel="noopener noreferrer">
                <span className="inline-flex items-center gap-2 bg-green-500 text-white font-bold px-8 py-4 rounded-full text-base hover:bg-green-600 transition-colors cursor-pointer shadow-sm">
                  <MessageCircle className="w-5 h-5" /> Falar pelo WhatsApp
                </span>
              </a>
            </div>
            <div className="lg:w-2/3 w-full h-[420px] rounded-2xl overflow-hidden shadow-lg border border-neutral-100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.437142476536!2d-46.6666!3d-23.6333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a9c!2sRua%20Gast%C3%A3o%20da%20Cunha%2C%20265%20-%20Vila%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004361-090!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" title="Mapa SKL Contabilidade"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
