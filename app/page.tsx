import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { Segments } from "@/components/Segments";
import { Stats } from "@/components/Stats";
import { History } from "@/components/History";
import { HistoryStats } from "@/components/HistoryStats";
import { MainServices } from "@/components/MainServices";
import { PartnerHub } from "@/components/PartnerHub";
import { TaxReform } from "@/components/TaxReform";
import { Clients } from "@/components/Clients";
import { Reviews } from "@/components/Reviews";
import { WorkingWithUs } from "@/components/WorkingWithUs";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Certifications } from "@/components/Certifications";
import { QuickAccess } from "@/components/QuickAccess";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      
      <History />
      <Clients />
      <Reviews />

      <MainServices />
      <PartnerHub />
      <TaxReform />

      <Ecosystem />
      <Segments />
      
      <WorkingWithUs />
      <HowItWorks />

      <CTA />
      
      <Certifications />
      <QuickAccess />
      <Footer />
    </main>
  );
}
