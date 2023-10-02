import Header from "@/Components/Header/Header";
import { Hero } from "@/Sections/Hero/Hero";
import { Universal } from "@/Sections/Universal/Universal";
import { sectionsData } from "@/Assets/Data/MockData";
import { Mobil } from "@/Sections/Mobile/Mobile";
import { Problem } from "@/Sections/Problem/Problem";
import { Footer } from "@/Components/Footer/Footer";
import { NextIntlClientProvider } from "next-intl";
import { useLocale, useMessages } from "next-intl";

export default function Home() {
  const locale = useLocale();
  const messages = useMessages();
  return (
    <main className="">
      <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        <Hero />
        {sectionsData.map((el, i) => (
          <Universal mainClass="page__sections" key={i} {...el} />
        ))}
        <Mobil />
        <Problem />
      </NextIntlClientProvider>
      <Footer />
    </main>
  );
}
