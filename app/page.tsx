import Hero from "./components/Hero";

import WhyUs from "./components/WhyUs";
import FeaturedGuides from "./components/FeaturedGuides";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Breadcrumb currentPage="Accueil" />
      <WhyUs />
      <FeaturedGuides />
    </main>
  );
}
