import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { GoogleAnalytics } from '@next/third-parties/google'
import ToastProvider from "@/toastifyProvider"
import { Suspense } from 'react'
import { NavigationEvents } from '../components/navigation-events'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Summarize YouTube Comments",
  description: "Summerize Comments with ai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`flex flex-col bg-[#FCFCFC] dark:bg-black min-h-screen	`}>
        <Providers>
          <Header />
          <ToastProvider>
          {children}
        </ToastProvider>
        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
          <Footer />
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-NSEM8E8QYE" />
    </html>
  );
}

import { Providers } from "./providers";
