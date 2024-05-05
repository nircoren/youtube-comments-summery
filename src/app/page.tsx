'use client'

import { SessionProvider } from 'next-auth/react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';

export default function Home() {
  return (
  
    <main>
      <Navbar/>
      <Hero/>
    </main>
  )
}
