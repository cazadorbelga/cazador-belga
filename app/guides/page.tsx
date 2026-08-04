import Header from "../components/Header";
import FeaturedGuides from "../components/FeaturedGuides";

export default function GuidesPage() {
  return (
    <>
      <Header />

      <main className="pt-32 pb-20">
        <FeaturedGuides />
      </main>
    </>
  );
}
