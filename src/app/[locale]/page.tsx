import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { Metadata } from "next";
import Pricing from "@/components/Pricing2";
import Process from "@/components/Process";
import Benefits from "@/components/Benefits";
import Cta from "@/components/Cta";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import TranslationsProvider from "@/components/i18/TranslationsProvider";
import initTranslations from "@/i18n";
import { I18Props } from "@/types/i18Props";
export const metadata: Metadata = {
  title: "Summarize YouTube Comments",
  description: "",
  // other metadata
};

const i18nNamespaces = ["common", "hero", "features_objections", "faq","cta"];

const Home: React.FC<I18Props> = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <main>
      <TranslationsProvider
        namespaces={i18nNamespaces}
        locale={locale}
        resources={resources}
      >
        <Hero />
        <Process />
        <SocialProof locale={locale}/>
        <FAQ locale={locale}/>
        <Cta />
        <Benefits />
        {/* <Pricing /> */}
        <Contact />
      </TranslationsProvider>
    </main>
  );
};

export default Home;
