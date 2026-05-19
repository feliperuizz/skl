"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export function CTA() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", empresa: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Gostaria de solicitar um contato especializado.\n\nNome: ${form.nome}\nE-mail: ${form.email}\nTelefone: ${form.telefone}\nEmpresa: ${form.empresa}`
    );
    window.open(`https://wa.me/5511503328010?text=${msg}`, "_blank");
    setSent(true);
  }

  return (
    <section className="py-20 lg:py-28 bg-neutral-50 border-t border-neutral-100 relative overflow-hidden">
      {/* Subtle red glow top-right */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left – headline */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              Fale conosco
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight mb-6">
              Solicite um contato <span className="text-primary">especializado</span> para sua empresa.
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed max-w-md mx-auto lg:mx-0">
              Preencha o formulário e um dos nossos especialistas entrará em contato para entender a realidade do seu negócio e apresentar a melhor solução.
            </p>

            <div className="mt-10 hidden lg:flex flex-col gap-4">
              {[
                "Análise tributária sem compromisso",
                "Retorno em até 1 hora útil",
                "Atendimento 100% personalizado",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-neutral-600 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8 md:p-10">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle2 className="w-16 h-16 text-primary" />
                  <h3 className="text-2xl font-black text-neutral-900">Mensagem enviada!</h3>
                  <p className="text-neutral-500">Em breve um especialista SKL entrará em contato.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-1.5">Nome completo</label>
                    <input
                      name="nome"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-1.5">E-mail</label>
                      <input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-neutral-700 mb-1.5">Telefone / WhatsApp</label>
                      <input
                        name="telefone"
                        type="tel"
                        required
                        value={form.telefone}
                        onChange={handleChange}
                        placeholder="(11) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-neutral-700 mb-1.5">Conte um pouco sobre a sua empresa</label>
                    <textarea
                      name="empresa"
                      rows={4}
                      value={form.empresa}
                      onChange={handleChange}
                      placeholder="Segmento, número de funcionários, principais desafios..."
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary/20 text-base"
                  >
                    Solicitar contato especializado
                    <Send className="w-4 h-4" />
                  </button>

                  <p className="text-center text-xs text-neutral-400">
                    Ao enviar, você concorda com nossa política de privacidade. Não enviamos spam.
                  </p>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
