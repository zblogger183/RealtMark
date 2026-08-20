import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ToolsStrip from "@/components/sections/ToolsStrip";
import WhoWeAre from "@/components/sections/WhoWeAre";
import ServicesIntro from "@/components/sections/ServicesIntro";
import Services from "@/components/sections/Services";
import StatsBand from "@/components/sections/StatsBand";
import RealStats from "@/components/sections/RealStats";
import Process from "@/components/sections/Process";
import PortfolioTeaser from "@/components/sections/PortfolioTeaser";
import WhyUsComparison from "@/components/sections/WhyUsComparison";
import ContractTerms from "@/components/sections/ContractTerms";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import GlobalReach from "@/components/sections/GlobalReach";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import BlogTeaser from "@/components/sections/BlogTeaser";
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
        <ToolsStrip />
        <WhoWeAre />
        <ServicesIntro />
        <Services />
        <StatsBand />
        <RealStats />
        <Process />
        <PortfolioTeaser />
        <WhyUsComparison />
        <ContractTerms />
        <WhoWeWorkWith />
        <GlobalReach />
        <Team />
        <Testimonials />
        <BlogTeaser />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
