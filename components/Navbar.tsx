"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Lock } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { label: "Home", href: "#", submenu: null },
  { 
    label: "Institucional", 
    href: "#about", 
    submenu: [
      { label: "Nossa História", href: "#" },
      { label: "Missão, Visão e Valores", href: "#" },
      { label: "Política de Qualidade", href: "#" },
      { label: "Nossa Estrutura", href: "#" },
      { label: "Nossos Sistemas & Tecnologia", href: "#" },
      { label: "Equipe / Profissionais", href: "#" },
      { label: "Certificações / CRC / Compliance", href: "#" }
    ]
  },
  { 
    label: "Serviços", 
    href: "#services", 
    submenu: [
      { label: "Contabilidade Completa", href: "#" },
      { label: "Fiscal e Tributário", href: "#" },
      { label: "Departamento Pessoal", href: "#" },
      { label: "Reforma Tributária", href: "#" },
      { label: "Imposto de Renda Pessoa Física", href: "#" },
      { label: "Consultoria Empresarial e Treinamentos", href: "#" },
      { label: "Holding e Planejamento Patrimonial", href: "#" },
      { label: "HUB de Soluções Completo", href: "#" }
    ]
  },
  { 
    label: "Segmentos", 
    href: "#segmentos", 
    submenu: [
      { label: "Comércio e Indústrias", href: "#" },
      { label: "Prestadores de Serviços", href: "#" },
      { label: "Outros", href: "#" }
    ]
  },
  { 
    label: "Contato", 
    href: "#contact", 
    submenu: [
      { label: "Fale Conosco", href: "#" },
      { label: "Abrir Empresa", href: "#" },
      { label: "Transferência de Contabilidade", href: "#" },
      { label: "Contatos e Localização", href: "#" }
    ]
  },
  { label: "Conteúdos", href: "#", submenu: null },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
          : "bg-white py-4 lg:py-6 border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <a href="#" className="flex-shrink-0 mr-4">
            <img
              src="./logo_standard.png"
              alt="SKL Contabilidade"
              className="h-10 lg:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center flex-wrap justify-center gap-1 mx-2">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="px-3 2xl:px-4 py-2 text-sm font-semibold text-slate-700 hover:text-primary transition-colors flex items-center gap-1 rounded-md hover:bg-slate-50"
                >
                  {item.label}
                  {item.submenu && <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:rotate-180 transition-transform" />}
                </a>

                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[280px]">
                    <div className="bg-white rounded-md shadow-xl border border-slate-100 p-2 flex flex-col">
                      {item.submenu.map((sub, idx) => (
                        <a
                          key={idx}
                          href={sub.href}
                          className="px-4 py-2.5 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-sm transition-colors border-b border-slate-50 last:border-0"
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            {/* Area Restrita Dropdown Button */}
            <div className="relative group">
              <Button className="rounded-md shadow-md hover:shadow-lg transition-all h-12 px-6 font-bold border border-primary text-base flex items-center gap-2">
                <Lock className="w-4 h-4 text-white" />
                Área Restrita
                <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform" />
              </Button>
              
              <div className="absolute top-full right-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[250px]">
                <div className="bg-white rounded-md shadow-xl border border-slate-100 p-2 flex flex-col">
                  <a href="https://sklcontabil.com.br/area-restrita" className="px-4 py-3 text-sm text-slate-700 hover:text-primary hover:bg-slate-50 rounded-sm transition-colors font-bold border-b border-slate-100 flex items-center gap-2">
                    Acessar Plataforma
                  </a>
                  <a href="#" className="px-4 py-2 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-sm transition-colors mt-1">
                    Agenda e Eventos
                  </a>
                  <a href="#" className="px-4 py-2 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-sm transition-colors">
                    Principais Links
                  </a>
                  <a href="#" className="px-4 py-2 text-sm text-slate-600 hover:text-primary hover:bg-slate-50 rounded-sm transition-colors">
                    Plataformas Acessórias
                  </a>
                </div>
              </div>
            </div>
          </div>

          <button
            className="xl:hidden p-2 text-slate-800 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-slate-800" /> : <Menu className="w-7 h-7 text-slate-800" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute left-0 right-0 top-full bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="flex flex-col px-5 pt-4 pb-8 space-y-1">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-slate-50 last:border-0">
                <button
                  onClick={() => {
                    if (item.submenu) {
                      setActiveMobileSubmenu(activeMobileSubmenu === item.label ? null : item.label);
                    } else {
                      setMobileMenuOpen(false);
                    }
                  }}
                  className="w-full flex items-center justify-between py-4 text-base font-bold text-slate-700"
                >
                  <a href={item.href} className="flex-1 text-left">{item.label}</a>
                  {item.submenu && (
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeMobileSubmenu === item.label ? "rotate-180 text-primary" : "text-slate-400"}`} />
                  )}
                </button>
                
                {item.submenu && activeMobileSubmenu === item.label && (
                  <div className="pl-4 pb-3 flex flex-col space-y-1 border-l-2 border-primary/20 ml-2">
                    {item.submenu.map((sub, idx) => (
                      <a
                        key={idx}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2.5 text-sm font-medium text-slate-500 hover:text-primary"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-6">
              <Button className="w-full flex items-center justify-center gap-2 h-14 text-base font-bold rounded-md shadow-md">
                <Lock className="w-5 h-5" />
                Área Restrita (Serviços)
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
