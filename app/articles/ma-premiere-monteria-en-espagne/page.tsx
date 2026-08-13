import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import GuideHeader from "../../components/GuideHeader";
import { articles } from "../../data/articles";

export default function ArticlePage() {
  const article = articles.find(
    (article) => article.slug === "ma-premiere-monteria-en-espagne",
  );

  if (!article) {
    return null;
  }

  return (
    <main className="bg-[#f1f7f1] pb-20">
      <article className="mx-auto max-w-5xl px-6 pt-36">
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Articles", href: "/articles" },
            { label: "Ma première montería en Espagne" },
          ]}
        />

        {/* En-tête */}
        <div className="[&>header]:mb-0 rounded-2xl bg-white px-8 py-7 shadow-sm md:px-12 md:py-8">
          <GuideHeader
            category="Retour d'expérience"
            title="Ma première montería en Espagne"
            description="Retour sur ma première montería, le 8 novembre 2025 à Adobes, dans la province de Guadalajara."
            author="Simon Leroy"
            readingTime="8 min"
            date="Août 2026"
            tags={article.tags}
          />
        </div>

        {/* Grande image d'ouverture */}
        <figure className="mt-8">
          <div className="relative aspect-[16/8] overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/articles/monteria1.jpeg"
              alt="Paysage du territoire de chasse à Adobes"
              fill
              className="object-cover"
              priority
            />
          </div>

          <figcaption className="mt-3 px-2 text-center text-sm text-gray-500">
            Le territoire de la montería, dans la province de Guadalajara.
          </figcaption>
        </figure>

        {/* Chapô */}
        <section className="mx-auto mt-10 max-w-4xl">
          <p className="font-serif text-xl font-bold italic leading-8 text-gray-700 md:text-2xl md:leading-9">
            Le 8 novembre 2025, je participais à ma toute première montería en
            Espagne. Une découverte qui allait rapidement me faire comprendre
            que la chasse espagnole pouvait changer complètement d'échelle.
          </p>
        </section>

        {/* Sommaire */}
        <nav className="mx-auto mt-10 max-w-4xl rounded-2xl border border-green-100 bg-white px-6 py-7 shadow-sm md:px-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-green-700">
            Dans cet article
          </p>

          <div className="grid gap-3 text-gray-700 md:grid-cols-2">
            <a
              href="#decouverte"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">01</span>
              <span>Une première découverte</span>
            </a>

            <a
              href="#organisation"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">02</span>
              <span>Une organisation impressionnante</span>
            </a>

            <a
              href="#poste"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">03</span>
              <span>Enfin au poste</span>
            </a>

            <a
              href="#belgique"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">04</span>
              <span>Une journée différente de la Belgique</span>
            </a>

            <a
              href="#bilan"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">05</span>
              <span>Une première montería réussie</span>
            </a>

            <a
              href="#retenir"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">06</span>
              <span>Ce que je retiens</span>
            </a>
          </div>
        </nav>

        {/* Corps de l'article */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white px-7 py-10 shadow-sm md:px-12 md:py-14">
          <div
            className="
              prose prose-lg max-w-none
              prose-headings:font-bold
              prose-headings:text-[#071b3a]
              prose-p:leading-8
              prose-p:text-gray-700
              prose-h2:mb-6
              prose-h2:mt-14
              prose-h2:text-2xl
              md:prose-h2:text-3xl
            "
          >
            <p>
              La journée se déroulait à{" "}
              <strong>Adobes, dans la province de Guadalajara</strong>, sur un
              territoire de près de <strong>13 000 hectares</strong>. J'avais
              trouvé cette journée grâce à <strong>Hunty</strong>, une
              plateforme permettant de trouver et de réserver des journées de
              chasse.
            </p>

            <p>
              Avant cette journée, je connaissais finalement assez peu la
              montería. Je savais qu'il s'agissait principalement de chasse au
              grand gibier et que les territoires espagnols pouvaient être
              beaucoup plus vastes que ceux que je connaissais en Belgique. Mais
              je n'avais encore jamais vécu une journée de chasse à cette
              échelle.
            </p>
            <p className="mt-8"></p>
            <h2
              id="decouverte"
              className="scroll-mt-32 border-l-4 border-green-600 pl-4"
            >
              Une première découverte
            </h2>
            <p className="mt-8"></p>
            <p>
              Dès notre arrivée, j'ai rapidement compris que cette journée
              allait être différente de ce que je connaissais.
            </p>

            <p>
              Le rendez-vous était fixé à <strong>9 h 00</strong>. Les premières
              heures étaient consacrées au petit déjeuner, au tirage au sort et
              à toute l'organisation nécessaire avant le départ.
            </p>

            {/* Migas */}
            <figure className="my-10">
              <div className="relative mx-auto aspect-[4/3] max-w-2xl overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/articles/migas.jpeg"
                  alt="Migas servies lors de la montería"
                  fill
                  className="object-cover"
                />
              </div>

              <figcaption className="mt-3 text-center text-sm leading-6 text-gray-500">
                Les migas, un petit-déjeuner pour le moins particulier ! Il
                s'agit de mie de pain frite avec du chorizo et de l'ail. Autant
                dire que commencer la journée avec ça change un peu du
                traditionnel café-croissant 😅
              </figcaption>
            </figure>

            <h2
              id="organisation"
              className="scroll-mt-32 border-l-4 border-green-600 pl-4"
            >
              Une organisation impressionnante
            </h2>
            <p className="mt-8"></p>
            <p>
              Nous avons finalement rejoint nos postes vers{" "}
              <strong>11 h 30</strong>.
            </p>

            <p>
              Mais ce qui m'a le plus marqué, c'est l'arrivée des meutes. Il y
              avait environ <strong>400 chiens</strong>, répartis sur les
              différentes lignes. Chaque ligne était organisée avec un{" "}
              <strong>posteur</strong> chargé de nous guider et de coordonner le
              déroulement de la chasse.
            </p>

            <figure className="my-10">
              <div className="overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/articles/carte_du_coto.jpeg"
                  alt="Carte du coto avec les différentes lignes de postes"
                  width={1600}
                  height={1000}
                  className="h-auto w-full"
                />
              </div>

              <figcaption className="mt-3 text-center text-sm leading-6 text-gray-500">
                La carte du coto et les différentes lignes de postes utilisées
                pour organiser la montería.
              </figcaption>
            </figure>

            <p>
              Une seule battue allait ainsi couvrir un territoire de{" "}
              <strong>13 000 hectares</strong>, avec plusieurs centaines de
              chiens.
            </p>

            <p>
              Pour donner une idée de la différence d'échelle, en Belgique, les
              chasses que je connais se déroulent plutôt sur des territoires
              d'environ{" "}
              <strong>30 hectares avec une quinzaine de chiens</strong>.
            </p>

            <p>
              La comparaison est assez frappante. Ici, la difficulté n'est donc
              pas seulement de chasser : c'est aussi de réussir à coordonner une
              véritable opération sur un territoire immense.
            </p>
            <p className="mt-8"></p>
            <h2
              id="poste"
              className="scroll-mt-32 border-l-4 border-green-600 pl-4"
            >
              Enfin au poste
            </h2>
            <p className="mt-8"></p>
            <p>
              Nous avons rejoint notre poste vers <strong>11 h 30</strong>,
              situé sur une crête et particulièrement exposé au vent. Nous
              sommes restés environ{" "}
              <strong>trois heures à trois heures et demie</strong> au poste.
            </p>

            <p>Et même sans tirer, je n'ai pas eu le temps de m'ennuyer.</p>

            <figure className="my-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
                <Image
                  src="/images/articles/monteria2.jpeg"
                  alt="Paysage du territoire de montería"
                  fill
                  className="object-cover"
                />
              </div>

              <figcaption className="mt-3 text-center text-sm leading-6 text-gray-500">
                Le paysage autour de notre poste.
              </figcaption>
            </figure>

            <p>
              J'ai eu l'occasion d'observer plusieurs animaux au cours de la
              journée, notamment des <strong>daines</strong>, deux beaux{" "}
              <strong>daguets</strong> que nous ne pouvions pas tirer, ainsi
              qu'une dizaine de <strong>chevreuils</strong>. Je n'ai finalement
              pas tiré un seul coup de carabine.
            </p>

            <p>
              Et pourtant, je considère cette journée comme une très belle
              expérience.
            </p>
            <p className="mt-8"></p>
            <h2
              id="belgique"
              className="scroll-mt-32 border-l-4 border-green-600 pl-4"
            >
              Une journée bien différente de la Belgique
            </h2>
            <p className="mt-8"></p>
            <p>
              Au-delà de la chasse elle-même, c'est aussi toute l'organisation
              de la journée qui m'a marqué.
            </p>

            <p>
              En Belgique, j'ai davantage l'habitude d'une journée qui commence
              tôt, avec la chasse le matin, puis un repas autour de midi et un
              moment plus convivial en fin de journée.
            </p>

            <p>
              En Espagne, j'ai découvert un fonctionnement assez différent. Le{" "}
              <strong>petit déjeuner est pris en début de journée</strong>,
              avant de partir chasser. Après la montería, les animaux sont
              ensuite regroupés au même endroit afin d'être présentés et pris en
              charge. Le rythme et l'organisation sont donc très différents de
              ce que je connaissais.
            </p>

            <p>
              C'est justement ce genre de différence qui m'intéresse lorsque je
              chasse en Espagne : on ne découvre pas seulement de nouveaux
              territoires et de nouvelles espèces, mais aussi une autre manière
              de vivre la chasse.
            </p>
            <p className="mt-8"></p>
            <h2
              id="bilan"
              className="scroll-mt-32 border-l-4 border-green-600 pl-4"
            >
              Une première montería réussie
            </h2>
            <p className="mt-8"></p>
            <p>
              Au total, la journée aura permis de prélever{" "}
              <strong>une soixantaine d'animaux</strong>.
            </p>

            <p>
              De mon côté, aucun animal n'a été abattu. Mais ce n'était
              finalement pas ce que je retiens de cette première expérience.
              J'avais quelques appréhensions avant de partir. Je ne connaissais
              pas encore bien le fonctionnement d'une montería et j'avais peur
              de ne pas comprendre toutes les consignes ou de faire une erreur.
            </p>
            <p className="mt-8"></p>
            <p>Cette première expérience m'a surtout montré une chose :</p>

            <blockquote>
              Il faut écouter attentivement les consignes données avant et
              pendant la chasse, et accorder une importance absolue à la
              sécurité.
            </blockquote>
            <p className="mt-8"></p>
            <p>
              Pour le reste, il faut observer, apprendre et savoir s'adapter.
            </p>

            <p>
              Je n'avais même pas encore de 4x4 à cette époque. On m'avait
              simplement proposé de monter dans le véhicule de quelqu'un d'autre
              pour rejoindre le poste, et tout s'est finalement très bien passé.
              L'organisation était bonne, les personnes rencontrées étaient
              sympathiques et l'ambiance m'a vraiment plu.
            </p>

            <p>
              La journée m'a coûté environ <strong>220 €</strong>, et surtout,
              elle m'a donné une réelle envie de recommencer.
            </p>
            <p className="mt-8"></p>
            <h2
              id="retenir"
              className="scroll-mt-32 border-l-4 border-green-600 pl-4"
            >
              Ce que je retiens
            </h2>
            <p className="mt-8"></p>
            <p>
              Cette première montería restera pour moi une étape importante dans
              ma découverte de la chasse espagnole.
            </p>

            <p>
              Je suis arrivé avec peu de connaissances sur cette forme de chasse
              et quelques appréhensions. Je suis reparti avec une expérience
              complètement différente de ce que je connaissais en Belgique,
              beaucoup de nouvelles choses à observer et surtout l'envie de
              découvrir davantage la chasse en Espagne.
            </p>

            <p className="mt-8">
              <strong>
                Je n'avais pas tiré, mais j'avais clairement réussi ma journée.
              </strong>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
