import Image from "next/image";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/hero/hero-home.jpg"
        alt="Chasse en Espagne"
        fill
        priority
        className="object-cover"
      />

      {/* Voile sombre */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Contenu */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-24 text-center text-white">
        <h1 className="text-5xl font-extrabold md:text-7xl">
          La chasse en Espagne,
          <br />
          expliquée simplement.
        </h1>

        <p className="mt-8 max-w-3xl text-xl">
          Vous souhaitez chasser en Espagne mais les démarches, la langue ou la
          réglementation vous semblent compliquées ?
          <br />
          <br />
          Vous êtes au bon endroit.
        </p>

        <Button href="/guides">Découvrir les guides</Button>
      </div>
    </section>
  );
}
