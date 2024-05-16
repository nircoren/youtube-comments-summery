import Hero from '@/components/Hero'
import Features from '@/components/Features';
import { Metadata } from 'next';
import Pricing from '@/components/Pricing2';
import Proccess from '@/components/Proccess';
import Benefits from '@/components/Benefits';
import Cta from '@/components/Cta';
import SocialProof from '@/components/SocialProof';
import FAQ from '@/components/FAQ'
import Contact2 from '@/components/Contact2';

export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
  
    <main >
      <Hero/>
      <Proccess/>
      <Benefits/>
      <Cta/>
      <SocialProof/>
      <Pricing/>
      <FAQ/>
      <Contact2/>
    </main>
  )
}
