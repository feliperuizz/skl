"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Menu, X, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Início", href: "#" },
  { label: "A Empresa", href: "#about" },
  { label: "Serviços", href: "#services" },
  { label: "Fale Conosco", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 to-[#7A001B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between gap-4 text-sm">
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:+5511999999999" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 text-secondary" />
              <span>(11) 9999-9999</span>
            </a>
            <a href="mailto:contato@sklcontabil.com.br" className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 text-secondary" />
              <span>contato@sklcontabil.com.br</span>
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-wider opacity-80">
            Atendimento Especializado
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-white py-4 lg:py-6 relative z-10 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 lg:h-16">
            <a href="#">
              <img
                src="https://sklcontabil.com.br/wordpress/wp-content/uploads/2020/04/logo.png"
                alt="SKL Contabilidade"
                className="h-10 lg:h-12 w-auto object-contain"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-primary transition-colors hover:bg-slate-50 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://sklcontabil.com.br/area-restrita"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-full shadow-md hover:shadow-lg transition-all h-12 px-8 font-bold border border-primary text-base">
                  Área Restrita
                </Button>
              </a>
            </div>

            <button
              className="lg:hidden p-2 text-slate-800 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-xl" style={{ height: "calc(100vh - 4rem)" }}>
            <div className="flex flex-col h-full overflow-y-auto px-5 pt-6 pb-8">
              <nav className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex flex-row items-center justify-between px-4 py-4 rounded-xl text-lg font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    {item.label}
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </a>
                ))}
              </nav>

              <div className="mt-8 space-y-4">
                <a
                  href="https://sklcontabil.com.br/area-restrita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full h-14 text-base font-bold rounded-2xl shadow-xl">
                    Acessar Área Restrita
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
