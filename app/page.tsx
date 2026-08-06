import Hero from "./components/Hero";
import FeaturedGuides from "./components/FeaturedGuides";
import WhyUs from "./components/WhyUs";
import AboutSimon from "./components/AboutSimon";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />

      <FeaturedGuides
        title="Nos guides incontournables"
        description="Commencez par les guides les plus consultés par les chasseurs souhaitant découvrir la chasse en Espagne."
      />

      <WhyUs />

      <AboutSimon />
    </main>
  );
}
