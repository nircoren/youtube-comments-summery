import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Metadata } from "next";
import Pricing from "@/components/Pricing2";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Cta from "@/components/Cta";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Contact2 from "@/components/Contact2";

export const metadata: Metadata = {
  title: "Summarize YouTube Comments",
  description: "",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Process />
      <Benefits />
      <Pricing />
      <FAQ />
      <Cta />
      <SocialProof />
      <Contact2 />
    </main>
  );
}
