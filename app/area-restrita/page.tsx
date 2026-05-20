"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MessageCircle, Lock, X, ChevronDown, CalendarDays, Loader2, ExternalLink } from "lucide-react";

// Dynamic import to avoid SSR issues with FullCalendar
const AgendaCalendar = dynamic(() => import("@/components/AgendaCalendar"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96">
      <Loader2 className="w-8 h-8 text-primary animate-spin" />
    </div>
  ),
});

const CATEGORIES = [
  { value: "federal", label: "Agenda Federal" },
  { value: "trabalhista", label: "Agenda Trabalhista" },
  { value: "sp", label: "São Paulo" },
  { value: "rj", label: "Rio de Janeiro" },
  { value: "mg", label: "Minas Gerais" },
  { value: "rs", label: "Rio Grande do Sul" },
  { value: "pr", label: "Paraná" },
  { value: "sc", label: "Santa Catarina" },
  { value: "ba", label: "Bahia" },
  { value: "go", label: "Goiás" },
  { value: "df", label: "Distrito Federal" },
  { value: "es", label: "Espírito Santo" },
  { value: "ce", label: "Ceará" },
  { value: "pe", label: "Pernambuco" },
  { value: "am", label: "Amazonas" },
  { value: "pa", label: "Pará" },
  { value: "mt", label: "Mato Grosso" },
  { value: "ms", label: "Mato Grosso do Sul" },
  { value: "ma", label: "Maranhão" },
  { value: "rn", label: "Rio Grande do Norte" },
  { value: "pi", label: "Piauí" },
  { value: "pb", label: "Paraíba" },
  { value: "al", label: "Alagoas" },
  { value: "se", label: "Sergipe" },
  { value: "to", label: "Tocantins" },
  { value: "ro", label: "Rondônia" },
  { value: "rr", label: "Roraima" },
  { value: "ac", label: "Acre" },
  { value: "ap", label: "Amapá" },
];

export default function AreaRestrita() {
  const [selectedCat, setSelectedCat] = useState("federal");
  const [events, setEvents] = useState<any[]>([]);
  const [loadingEvents, setLoadingEvents] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const fetchEvents = useCallback(async (cat: string) => {
    setLoadingEvents(true);
    try {
      const res = await fetch(`/api/agendas?cat=${cat}`);
      const data = await res.json();
      if (Array.isArray(data)) {
        const mapped = data.map((item: any) => ({
          id: String(item.id),
          title: `${String(item.categoria).toUpperCase()} – ${item.titulo}`,
          start: item.pubdate_start?.slice(0, 10),
          end: item.pubdate_end?.slice(0, 10),
          extendedProps: { categoria: item.categoria, rawId: item.id },
        }));
        setEvents(mapped);
      }
    } catch {
      setEvents([]);
    } finally {
      setLoadingEvents(false);
    }
  }, []);

  useEffect(() => {
    fetchEvents(selectedCat);
  }, [selectedCat, fetchEvents]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setCatOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleEventClick = useCallback(async (id: string, title: string) => {
    setSelectedEvent({ title, texto: null });
    setLoadingDetail(true);
    try {
      const res = await fetch(`/api/agendas?id=${id}`);
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        setSelectedEvent({ title, texto: data[0].texto });
      }
    } catch {
      setSelectedEvent({ title, texto: "<p>Detalhes não disponíveis.</p>" });
    } finally {
      setLoadingDetail(false);
    }
  }, []);

  const selectedLabel = CATEGORIES.find((c) => c.value === selectedCat)?.label || "Selecione";

  function decodeHtml(html: string): string {
    if (typeof document === "undefined") return html;
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  }

  // Parse the raw HTML from the API into structured table data
  const parsedDetail = useMemo(() => {
    if (!selectedEvent?.texto || typeof document === "undefined") return null;

    const decoded = decodeHtml(selectedEvent.texto);
    const wrapper = document.createElement("div");
    wrapper.innerHTML = decoded;

    const table = wrapper.querySelector("table");
    if (!table) return { type: "html" as const, content: decoded };

    const allRows = Array.from(table.querySelectorAll("tr"));
    if (allRows.length < 1) return { type: "html" as const, content: decoded };

    const headerCells = Array.from(allRows[0].querySelectorAll("td, th"));
    const headers = headerCells.map((c) => (c.textContent || "").trim());

    const dataRows = allRows.slice(1).map((row) =>
      Array.from(row.querySelectorAll("td")).map((c) => (c.textContent || "").trim())
    );

    return { type: "table" as const, headers, rows: dataRows.filter((r) => r.some(Boolean)) };
  }, [selectedEvent?.texto]);

  return (
    <main className="min-h-screen bg-neutral-50 flex flex-col pt-[72px] lg:pt-[88px]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 lg:py-10">

          {/* Linha 1: imagem + botão de indicação lado a lado */}
          <div className="flex flex-col lg:flex-row items-stretch gap-5 mb-5">
            {/* Imagem — ocupa a maior parte */}
            <div className="lg:flex-1 rounded-2xl overflow-hidden border border-neutral-100 shadow-md">
              <img
                src="/ganhou.png"
                alt="Indicou, Fechou, Ganhou! – SKL Contabilidade"
                className="w-full h-full object-cover object-center"
                style={{ minHeight: 220 }}
              />
            </div>

            {/* Botão de indicação — lateral direita */}
            <a
              href="https://wa.me/5511974437819?text=Ol%C3%A1!%20Quero%20indicar%20algu%C3%A9m%20para%20a%20SKL%20Contabilidade%20e%20participar%20do%20programa%20de%20indica%C3%A7%C3%A3o."
              target="_blank"
              rel="noopener noreferrer"
              className="group lg:w-72 flex flex-col justify-center items-start gap-3 bg-green-500 hover:bg-green-600 text-white rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Programa de indicação</p>
                <p className="text-xl font-black leading-snug mb-2">Quero indicar<br />alguém</p>
                <p className="text-white/80 text-sm leading-relaxed">Indique nossos serviços, feche conosco e ganhe benefícios exclusivos!</p>
              </div>
            </a>
          </div>

          {/* Linha 2: Plataforma Principal — card largo */}
          <a
            href="https://vip.acessorias.com/sklcontabilidade"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full flex items-center gap-6 bg-primary hover:bg-red-700 text-white rounded-2xl p-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-white/30 transition-colors">
              <Lock className="w-7 h-7" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">Acesso exclusivo</p>
              <p className="text-2xl font-black text-white">Plataforma Principal</p>
              <p className="text-white/80 text-sm mt-1 leading-relaxed">
                Acesse seus documentos, holerites, guias de impostos, contratos e muito mais de forma segura e organizada.
              </p>
            </div>
            <div className="shrink-0 w-11 h-11 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      {/* ── Calendário de Obrigações ── */}
      <section className="py-12 lg:py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-3 tracking-widest uppercase">
                Obrigações Fiscais
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-neutral-900 flex items-center gap-3">
                <CalendarDays className="w-7 h-7 text-primary" />
                Calendário de Obrigações
              </h2>
            </div>

            {/* Category selector */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setCatOpen((o) => !o)}
                className="flex items-center gap-3 bg-white border border-neutral-200 hover:border-primary/40 rounded-xl px-5 py-3 text-sm font-semibold text-neutral-700 shadow-sm hover:shadow transition-all min-w-[220px]"
              >
                <span className="flex-1 text-left">{selectedLabel}</span>
                <ChevronDown className={`w-4 h-4 text-neutral-400 transition-transform ${catOpen ? "rotate-180" : ""}`} />
              </button>
              {catOpen && (
                <div className="absolute right-0 top-full mt-2 z-50 bg-white border border-neutral-100 rounded-xl shadow-xl py-2 min-w-[260px] max-h-80 overflow-y-auto">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => { setSelectedCat(cat.value); setCatOpen(false); }}
                      className={`w-full text-left px-5 py-2.5 text-sm transition-colors hover:bg-neutral-50 hover:text-primary ${
                        selectedCat === cat.value ? "text-primary font-bold bg-primary/5" : "text-neutral-700"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Calendar card */}
          <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-4 sm:p-8">
            {loadingEvents ? (
              <div className="flex items-center justify-center h-96">
                <div className="flex flex-col items-center gap-4">
                  <Loader2 className="w-10 h-10 text-primary animate-spin" />
                  <p className="text-neutral-500 font-medium">Carregando obrigações...</p>
                </div>
              </div>
            ) : (
              <AgendaCalendar events={events} onEventClick={handleEventClick} />
            )}
          </div>

        </div>
      </section>

      {/* ── Links Úteis ── */}
      <section className="py-12 lg:py-16 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-bold mb-3 tracking-widest uppercase">
              Acesso Rápido
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 mb-2">Links Úteis</h2>
            <p className="text-neutral-500 text-sm">Acesse rapidamente os principais portais utilizados na rotina da sua empresa.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {[
              { label: "e-CAC", desc: "Centro Virtual de Atendimento", href: "https://cav.receita.fazenda.gov.br", cat: "Fiscal" },
              { label: "Receita Federal", desc: "Portal oficial da Receita", href: "https://www.gov.br/receitafederal", cat: "Fiscal" },
              { label: "SEFAZ", desc: "Consulta por estado", href: "https://www.confaz.fazenda.gov.br", cat: "Fiscal" },
              { label: "NF-e", desc: "Nota Fiscal Eletrônica", href: "https://www.nfe.fazenda.gov.br", cat: "Fiscal" },
              { label: "NF Paulistana", desc: "Nota Fiscal do município de SP", href: "https://nfe.prefeitura.sp.gov.br", cat: "Fiscal" },
              { label: "DEC (SP)", desc: "Domicílio Eletrônico do Contribuinte", href: "https://dec.fazenda.sp.gov.br", cat: "Fiscal" },
              { label: "INSS", desc: "Previdência Social", href: "https://www.gov.br/inss", cat: "Trabalhista" },
              { label: "eSocial", desc: "Sistema de escrituração digital", href: "https://www.gov.br/esocial", cat: "Trabalhista" },
              { label: "Empregador Web", desc: "Sistema do Seguro-Desemprego", href: "https://sd.maisemprego.mte.gov.br", cat: "Trabalhista" },
              { label: "DET", desc: "Domicílio Eletrônico Trabalhista", href: "https://det.sit.trabalho.gov.br", cat: "Trabalhista" },
              { label: "Gov.br", desc: "Portal do Governo Federal", href: "https://www.gov.br", cat: "Geral" },
              { label: "DEJ", desc: "Domicílio Eletrônico Judicial", href: "https://dej.trf3.jus.br", cat: "Judicial" },
            ].map((link) => {
              const catColor: Record<string, string> = {
                Fiscal: "bg-blue-50 text-blue-700 border-blue-100",
                Trabalhista: "bg-emerald-50 text-emerald-700 border-emerald-100",
                Geral: "bg-neutral-100 text-neutral-600 border-neutral-200",
                Judicial: "bg-violet-50 text-violet-700 border-violet-100",
              };
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 bg-white border border-neutral-100 hover:border-primary/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors">
                    <ExternalLink className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-black text-neutral-900 text-sm group-hover:text-primary transition-colors leading-snug">{link.label}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border shrink-0 ${catColor[link.cat]}`}>{link.cat}</span>
                    </div>
                    <p className="text-neutral-500 text-xs leading-snug">{link.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Event Detail Modal ── */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div className="absolute inset-0 bg-neutral-900/50 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl shadow-2xl w-[95vw] max-w-6xl max-h-[90vh] overflow-y-auto z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white flex items-start justify-between p-6 border-b border-neutral-100 z-10">
              <div className="flex items-start gap-3 pr-4">
                <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                  <CalendarDays className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-base font-black text-neutral-900 leading-snug">{selectedEvent.title}</h3>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="shrink-0 w-8 h-8 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-neutral-600" />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              {loadingDetail ? (
                <div className="flex items-center gap-3 text-neutral-500 py-8 justify-center">
                  <Loader2 className="w-5 h-5 animate-spin text-primary" />
                  <span className="font-medium">Carregando detalhes...</span>
                </div>
              ) : !parsedDetail ? (
                <p className="text-neutral-400 text-center py-8">Sem detalhes disponíveis.</p>
              ) : parsedDetail.type === "html" ? (
                <div className="text-sm text-neutral-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: parsedDetail.content }} />
              ) : (
                <div className="rounded-xl border border-neutral-200 overflow-hidden">
                  <table className="w-full text-sm border-collapse" style={{ tableLayout: "fixed" }}>
                    <colgroup>
                      {(() => {
                        const total = parsedDetail.headers.length;
                        const descIdx = parsedDetail.headers.findIndex(h => h.toLowerCase().includes("descri"));
                        const descPct = 52;
                        const otherPct = (100 - descPct) / (total - (descIdx >= 0 ? 1 : 0));
                        return parsedDetail.headers.map((_, j) => (
                          <col key={j} style={{ width: j === descIdx ? `${descPct}%` : `${otherPct.toFixed(1)}%` }} />
                        ));
                      })()}
                    </colgroup>
                    <thead>
                      <tr className="bg-primary text-white">
                        {parsedDetail.headers.map((header, j) => (
                          <th key={j} className="px-4 py-3 text-left font-bold text-xs uppercase tracking-wide whitespace-normal break-words">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {parsedDetail.rows.map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white hover:bg-neutral-50" : "bg-neutral-50 hover:bg-neutral-100"}>
                          {parsedDetail.headers.map((_h, j) => (
                            <td
                              key={j}
                              className="px-4 py-3 text-neutral-700 align-top border-b border-neutral-100 leading-relaxed"
                              style={{ wordBreak: "break-word", overflowWrap: "break-word", whiteSpace: "normal" }}
                            >
                              {row[j] || <span className="text-neutral-300">—</span>}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
