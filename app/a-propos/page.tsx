import Link from "next/link";
import Header from "../components/Header";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        {/* Introduction */}
        <section className="bg-gray-50 px-6 pb-20 pt-50">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Une passion née en Belgique,
              <br />
              poursuivie en Espagne
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              Derrière Cazador Belga, il y a avant tout une histoire
              personnelle, une passion pour la nature et l'envie de partager mon
              expérience de chasseur belge installé en Espagne.
            </p>
          </div>
        </section>

        {/* Qui je suis */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Qui suis-je ?
                </h2>

                <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
                  <p>
                    Je m'appelle <strong>Simon</strong>. Je suis belge, installé
                    à Valencia depuis plusieurs années, et la nature fait partie
                    de ma vie depuis toujours.
                  </p>

                  <p>
                    J'ai découvert très jeune la pêche et les activités de plein
                    air avec mon père. Puis, au fil des années, la pêche, la
                    découverte de la nature et finalement la chasse sont
                    devenues de véritables passions.
                  </p>

                  <p>
                    Une rencontre avec un chasseur expérimenté, David, m'a
                    ensuite permis de découvrir la chasse et d'en apprendre
                    progressivement les différentes facettes.
                  </p>

                  <p>
                    La chasse occupe aujourd'hui une place importante dans ma
                    vie, mais elle représente pour moi bien plus que le simple
                    fait de prélever un animal. J'aime être dehors, observer,
                    apprendre, comprendre un territoire et partager des moments
                    avec les autres. Et même une journée sans tirer peut être
                    une excellente journée de chasse.
                  </p>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <Image
                  src="/images/simon/premier-perdreau.jpg"
                  alt="Simon avec son premier perdreau"
                  width={700}
                  height={950}
                  className="w-full max-w-md rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Belgique → Espagne */}
        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              De la Belgique à l'Espagne
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
              <p>
                Lorsque je me suis installé en Espagne, j'ai dû repartir de zéro
                dans un environnement que je connaissais peu : nouvelle langue,
                nouvelle réglementation et nouvelle façon de pratiquer la
                chasse.
              </p>

              <p>
                Plutôt que de simplement faire reconnaître mon permis belge,
                j'ai choisi de <strong>passer le permis espagnol</strong> afin
                de comprendre réellement le fonctionnement de la chasse en
                Espagne et de m'intégrer dans ce nouvel environnement.
              </p>

              <p>
                Depuis, j'ai découvert différentes formes de chasse en Espagne
                et notamment dans la Communauté valencienne. Cette expérience
                m'a également permis de comprendre à quel point il peut être
                difficile, lorsque l'on est francophone, de trouver des
                informations claires et pratiques pour commencer.
              </p>

              <p className="font-medium text-gray-900">
                C'est de cette expérience qu'est né Cazador Belga.
              </p>
            </div>
          </div>
        </section>

        {/* Profil */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Un ingénieur agronome passionné par la nature
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
              <p>
                Je suis{" "}
                <strong>
                  ingénieur industriel agronome, spécialisé en gestion de
                  l'environnement
                </strong>
                . Mon parcours professionnel et ma passion pour la chasse ont
                naturellement renforcé mon intérêt pour les milieux naturels, la
                faune et la compréhension des territoires.
              </p>

              <p>
                Cette formation m'a également appris à regarder les milieux
                naturels avec une approche différente : comprendre leur
                fonctionnement, les espèces qui les composent et les
                interactions qui s'y déroulent.
              </p>

              <p>
                Je suis également un <strong>épicurien</strong>. J'aime les bons
                produits, cuisiner et surtout partager un bon repas. Pour moi,
                cette dimension fait aussi partie de la chasse : le respect de
                l'animal prélevé passe notamment par la volonté de valoriser ce
                que l'on prélève, de prendre plaisir à le cuisiner et à le
                partager.
              </p>
            </div>
          </div>
        </section>

        {/* Pourquoi Cazador Belga */}
        <section className="bg-gray-50 px-6 py-20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Pourquoi Cazador Belga ?
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-700">
              <p>
                Cazador Belga est avant tout un{" "}
                <strong>projet personnel et un partage d'expérience</strong>.
              </p>

              <p>
                L'objectif est d'aider les chasseurs francophones qui souhaitent
                découvrir la chasse en Espagne à mieux comprendre les démarches,
                les particularités locales et les différentes possibilités qui
                s'offrent à eux.
              </p>

              <p>
                Vous trouverez ici des guides pratiques, des articles, des
                retours d'expérience et progressivement davantage de contenu
                consacré à la chasse en Espagne, au matériel utilisé sur le
                terrain et aux différentes expériences que je peux partager avec
                la communauté.
              </p>

              <p>
                Je fais également la distinction entre ce qui relève de mon
                expérience personnelle et les informations issues des sources
                officielles, car la réglementation peut varier selon les
                communautés autonomes et évoluer dans le temps.
              </p>
            </div>

            <div className="mt-12 border-l-4 border-gray-900 pl-6">
              <p className="text-xl font-medium leading-8 text-gray-900">
                « L'idée est simple : partager ce que j'aurais aimé trouver
                lorsque j'ai moi-même commencé à découvrir la chasse en Espagne.
                »
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Bienvenue sur Cazador Belga
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Que vous soyez déjà chasseur, que vous découvriez la chasse en
              Espagne ou que vous soyez simplement curieux de cette pratique,
              j'espère que vous trouverez ici des informations utiles, des
              expériences à partager et peut-être quelques idées pour partir à
              la découverte de nouveaux territoires.
            </p>

            <p className="mt-6 text-lg font-medium text-gray-900">
              Bonne découverte et bonne chasse !
            </p>

            <Link
              href="/guides"
              className="mt-8 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Découvrir les guides
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
