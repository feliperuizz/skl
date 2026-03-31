import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Ecosystem } from "@/components/Ecosystem";
import { Segments } from "@/components/Segments";
import { Pillars } from "@/components/Pillars";
import { Stats } from "@/components/Stats";
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
      
      <Ecosystem />
      <Segments />
      
      <WorkingWithUs />
      <Pillars />
      
      <Services />
      <About />
      <Facilities />
      <Clients />
      <CTA />
      <Footer />
    </main>
  );
}
