import Hero from '@/components/Hero'
import Features from '@/components/Features';
import { Metadata } from 'next';
import Pricing from '@/components/Pricing';


export const metadata: Metadata = {
  title: "Free Next.js Template for Startup and SaaS",
  description: "This is Home for Startup Nextjs Template",
  // other metadata
};

export default function Home() {
  return (
  
    <main >
      <Hero/>
      <Features />
      <Pricing/>
    </main>
  )
}
