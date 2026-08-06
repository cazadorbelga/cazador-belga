import FeaturedGuides from "../components/FeaturedGuides";
import Breadcrumb from "../components/Breadcrumb";
export default function GuidesPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto max-w-7xl px-6 pt-36 pb-4">
        <Breadcrumb
          items={[{ label: "Accueil", href: "/" }, { label: "Guides" }]}
        />
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 lg:text-5xl">
          Tous nos guides de chasse en Espagne
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
          Préparez votre chasse en Espagne grâce à nos guides pratiques :
          permis, réglementation, territoires de chasse, techniques, matériel et
          conseils issus du terrain.
        </p>
      </section>

      <FeaturedGuides />
    </main>
  );
}
