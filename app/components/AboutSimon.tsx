import Image from "next/image";
import Link from "next/link";

export default function AboutSimon() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl">
          <Image
            src="/images/simon/simon.jpg"
            alt="Simon Leroy"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <span className="font-semibold uppercase tracking-widest text-green-700">
            À propos
          </span>

          <h2 className="mt-4 text-4xl font-extrabold text-gray-900">
            Derrière Cazador Belga
          </h2>

          <p className="mt-8 leading-8 text-gray-700">
            Je m'appelle Simon, je suis belge et je vis en Espagne depuis
            plusieurs années. Comme beaucoup de francophones, j'ai dû repartir
            de zéro pour comprendre le fonctionnement de la chasse espagnole :
            permis, réglementation, licence d'armes, territoires de chasse...
          </p>

          <p className="mt-6 leading-8 text-gray-700">
            J'ai créé Cazador Belga pour partager tout ce que j'aurais aimé
            trouver lorsque j'ai commencé. Mon objectif est simple : vous faire
            gagner du temps et vous aider à préparer votre chasse en Espagne
            grâce à des informations fiables et une véritable expérience de
            terrain.
          </p>

          <Link
            href="/a-propos"
            className="mt-10 inline-flex rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Découvrir mon histoire
          </Link>
        </div>
      </div>
    </section>
  );
}
