import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import StatsBand from "@/components/sections/StatsBand";
import Services from "@/components/sections/Services";
import PortfolioTeaser from "@/components/sections/PortfolioTeaser";
import Locations from "@/components/sections/Locations";
import WhyRealtMark from "@/components/sections/WhyRealtMark";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <StatsBand />
        <Services />
        <PortfolioTeaser />
        <Locations />
        <WhyRealtMark />
        <Process />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
