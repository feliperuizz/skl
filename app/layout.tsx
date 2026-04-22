import type { Metadata } from 'next';
import './globals.css';
import { WhatsAppWidget } from '@/components/WhatsAppWidget';

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
        <WhatsAppWidget />
      </body>
    </html>
  );
}
