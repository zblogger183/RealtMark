import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import RealStats from "@/components/sections/RealStats";
import StatsBand from "@/components/sections/StatsBand";
import Services from "@/components/sections/Services";
import PortfolioTeaser from "@/components/sections/PortfolioTeaser";
import Locations from "@/components/sections/Locations";
import WhyRealtMark from "@/components/sections/WhyRealtMark";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import FinalCta from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "RealtMark — Real Estate Digital Marketing Across Dubai & the GCC",
  description:
    "Digital growth partner for real estate developers, brokerages, and agents across Dubai, Abu Dhabi, and the wider GCC. SEO, paid media, content, and CRM systems built for qualified buyer and investor leads.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <RealStats />
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
