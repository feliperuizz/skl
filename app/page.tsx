import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { Segments } from "@/components/Segments";
import { Pillars } from "@/components/Pillars";
import { Stats } from "@/components/Stats";
import { History } from "@/components/History";
import { HistoryStats } from "@/components/HistoryStats";
import { MainServices } from "@/components/MainServices";
import { PartnerHub } from "@/components/PartnerHub";
import { TaxReform } from "@/components/TaxReform";
import { Services } from "@/components/Services";
import { Facilities } from "@/components/Facilities";
import { Clients } from "@/components/Clients";
import { WorkingWithUs } from "@/components/WorkingWithUs";
import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <Stats />
      
      <History />
      <HistoryStats />
      <Clients />
      
      <MainServices />
      <PartnerHub />
      <TaxReform />
      
      <Ecosystem />
      <Segments />
      
      <WorkingWithUs />
      <Pillars />
      
      <Services />
      <About />
      <Facilities />
      <CTA />
      <Footer />
    </main>
  );
}
