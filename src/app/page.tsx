import Header from "@/Components/Header/Header";
import { Hero } from "@/Sections/Hero/Hero";
import { Universal } from "@/Sections/Universal/Universal";
import { sectionsData } from "@/Assets/Data/MockData";
import { Mobil } from "@/Sections/Mobile/Mobile";
import { Problem } from "@/Sections/Problem/Problem";
import { Footer } from "@/Components/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      {sectionsData.map((el, i) => (
        <Universal mainClass="page__sections" key={i} {...el} />
      ))}
      <Mobil />
      <Problem />
      <Footer />
    </main>
  );
}
