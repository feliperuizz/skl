import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SKL Contabilidade - Assessoria com Excelência',
  description: 'Com uma equipe qualificada, a SKL presta serviços contábeis com excelência para diversas áreas.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans bg-background text-foreground antialiased`}>
        {children}
        
        {/* Floating WhatsApp Widget */}
        <div className="fixed bottom-6 right-6 z-[100] flex items-end gap-3 pointer-events-none group">
          
          {/* Chat Bubble Message */}
          <div className="bg-white p-4 rounded-2xl rounded-br-sm shadow-2xl border border-slate-100 max-w-[280px] pointer-events-auto transition-all duration-500 translate-y-0 opacity-100 hidden sm:block">
            <p className="text-sm text-slate-700 font-semibold leading-snug">
              Descubra a melhor solução para o seu negócio falando com um de nossos especialistas!
            </p>
          </div>

          <a 
            href="https://sklcontabil.com.br/contato-via-whatsapp/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-shrink-0 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1EBE59] hover:scale-110 transition-all duration-300 pointer-events-auto flex items-center justify-center relative"
            aria-label="Atendimento via WhatsApp"
          >
            {/* Ping notification dot */}
            <span className="absolute top-0 right-0 flex border-2 border-white rounded-full">
               <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
