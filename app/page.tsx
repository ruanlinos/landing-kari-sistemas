import { FooterCta } from "@/components/landing/footer-cta";
import { HeroSection } from "@/components/landing/hero-section";
import { ProcessSection } from "@/components/landing/process-section";
import { ServicesSection } from "@/components/landing/services-section";
import { SiteHeader } from "@/components/landing/site-header";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <FooterCta />
      </main>
    </div>
  );
}
