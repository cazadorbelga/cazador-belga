import Breadcrumb from "@/app/components/Breadcrumb";
import GuideHeader from "@/app/components/GuideHeader";
import GuideHeroImage from "@/app/components/GuideHeroImage";
import TableOfContents from "@/app/components/TableOfContents";
import GuideNotice from "@/app/components/GuideNotice";
import GuideSources from "@/app/components/GuideSources";
import GuideRelated from "@/app/components/GuideRelated";
import GuideSection from "@/app/components/GuideSection";
import GuideAdvice from "@/app/components/GuideAdvice";
import Image from "next/image";

export default function GuidePermis() {
  return (
    <main className="mx-auto max-w-5xl px-6 pt-36 pb-20">
      {/* ========================================
          FIL D'ARIANE
          Navigation permettant de revenir vers
          l'accueil ou la liste des guides.
          ======================================== */}
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Permis de chasse" },
        ]}
      />

      {/* ========================================
          EN-TÊTE DU GUIDE
          Titre, description, auteur, date et
          temps de lecture.
          ======================================== */}
      <GuideHeader
        category="Guide"
        title="Comment obtenir son permis de chasse en Espagne"
        description="Toutes les étapes expliquées simplement pour obtenir votre permis de chasse espagnol lorsque vous êtes francophone."
        author="Simon Leroy"
        readingTime="5 min"
        date="Août 2026"
      />

      {/* ========================================
          IMAGE PRINCIPALE
          ======================================== */}
      <GuideHeroImage
        src="/images/articles/permis.jpg"
        alt="Permis de chasse espagnol"
      />

      {/* ========================================
          AVERTISSEMENT / CONTEXTE
          Précise que le guide est basé sur mon
          expérience personnelle en Communauté
          valencienne.
          ======================================== */}
      <GuideNotice>
        Ce guide est basé sur mon expérience personnelle lors de l'obtention de
        mon permis de chasse en Communauté valencienne en 2023. J'y partage les
        démarches que j'ai suivies, les difficultés que j'ai rencontrées et les
        conseils que j'aurais aimé connaître avant de commencer. Les
        informations sont complétées par les sources officielles lorsque cela
        est nécessaire.
      </GuideNotice>

      {/* ========================================
          CONTENU DU GUIDE
          
          Colonne gauche :
          Sommaire sticky

          Colonne droite :
          Contenu de l'article
          ======================================== */}
      <div className="mt-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-16">
        {/* ========================================
            SOMMAIRE
            Reste visible pendant la lecture
            sur ordinateur.
            ======================================== */}
        <TableOfContents
          items={[
            {
              id: "introduction",
              title: "Mon expérience",
            },
            {
              id: "conditions",
              title: "Avant de commencer",
            },
            {
              id: "preparation",
              title: "La préparation",
            },
            {
              id: "examen",
              title: "L'examen",
            },
            {
              id: "apres-examen",
              title: "Après l'examen",
            },
          ]}
        />

        {/* ========================================
            ARTICLE
            Toutes les sections du guide.
            ======================================== */}
        <div className="min-w-0">
          <hr className="my-12 lg:mt-0" />

          {/* ========================================
              SECTION 1 — MON EXPÉRIENCE
              Pourquoi j'ai voulu chasser en Espagne
              et comment j'ai commencé les démarches.
              ======================================== */}
          <GuideSection id="introduction" title="Mon expérience">
            <p className="mt-6 leading-8 text-gray-700">
              La chasse fait partie de moi depuis longtemps. Lorsque je me suis
              installé en Espagne, je ne me voyais pas vivre sans continuer à
              chasser. Il me restait donc deux possibilités : rentrer en
              Belgique pour pratiquer ma passion, ou apprendre à chasser en
              Espagne.
            </p>
            {/* Transition visuelle Belgique → Espagne */}
            <div className="mt-10">
              <p className="mb-5 text-center text-lg font-medium italic text-gray-700">
                Comment passer de ça… à ça ?
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/guides/belgique-neige.jpg"
                    alt="Paysage forestier enneigé en Belgique"
                    width={900}
                    height={1200}
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/guides/valencia-mer.jpg"
                    alt="Paysage méditerranéen de la Communauté valencienne"
                    width={900}
                    height={1200}
                    className="h-[420px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <p className="mt-6 leading-8 text-gray-700">
              J'ai choisi la deuxième option. Et comme j'aime apprendre, je me
              suis lancé dans les démarches pour comprendre comment fonctionne
              la chasse espagnole et obtenir mon permis dans la Communauté
              valencienne.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je n'avais pas de guide tout fait pour m'accompagner. J'ai trouvé
              les informations petit à petit, en cherchant sur Internet, en
              envoyant des mails et en passant des appels. Je me suis parfois
              trompé, j'ai dû recommencer certaines démarches et surtout
              apprendre à comprendre un système différent de celui que je
              connaissais en Belgique.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Pour le permis de chasse, c'est finalement auprès de la Federación
              de Caza de la Comunidad Valenciana que j'ai obtenu les
              informations dont j'avais besoin. J'ai passé mon examen au
              printemps 2023.
            </p>
          </GuideSection>

          {/* ========================================
              SECTION 2 — AVANT DE COMMENCER
              Présente les différences entre les
              communautés autonomes et les principales
              difficultés pour un francophone.
              ======================================== */}
          <GuideSection id="conditions" title="Avant de commencer">
            <p className="mt-6 leading-8 text-gray-700">
              La première chose à comprendre est qu'il n'existe pas un permis de
              chasse unique qui fonctionne exactement de la même manière dans
              toute l'Espagne. La chasse est largement organisée au niveau des
              communautés autonomes, et les démarches peuvent donc varier selon
              l'endroit où vous souhaitez chasser.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Dans mon cas, j'ai effectué toutes les démarches dans la
              Communauté valencienne. C'est également sur cette expérience que
              repose ce guide. Si vous souhaitez chasser dans une autre
              communauté autonome, je vous conseille donc de vérifier les
              conditions applicables localement avant d'entreprendre vos
              démarches.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Pour un francophone, la principale difficulté n'est pas forcément
              la complexité des notions à apprendre, mais plutôt la langue. La
              préparation se fait en espagnol et le vocabulaire utilisé est très
              spécifique au monde de la chasse, de la réglementation et de la
              faune.
            </p>
          </GuideSection>
          {/* ========================================
    SECTION 3 — LA PRÉPARATION
    ======================================== */}
          <GuideSection id="preparation" title="La préparation">
            <p className="mt-6 leading-8 text-gray-700">
              Une fois inscrit, j'ai commencé la préparation à l'examen. Dans
              mon cas, la formation était entièrement en espagnol et demandait
              surtout de se familiariser avec le vocabulaire spécifique à la
              chasse.
            </p>

            {/* Étape 1 */}
            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                1. Suivre la formation
              </h3>

              <div className="mt-1 space-y-2 leading-8 text-gray-700">
                <p>
                  La formation que j'ai suivie coûtait 60 €. Elle donnait accès
                  à une plateforme en ligne regroupant les différents thèmes
                  nécessaires à la préparation de l'examen.
                </p>

                <p>
                  Pour commencer, il faut donc s'inscrire à la formation et
                  accéder à la plateforme depuis laquelle vous pourrez suivre
                  l'ensemble du programme.
                </p>
              </div>
            </div>

            {/* Étape 2 */}
            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                2. Étudier chaque thème
              </h3>

              <div className="mt-1 space-y-2 leading-8 text-gray-700">
                <p>
                  La formation est organisée autour de plusieurs thèmes. Lorsque
                  vous ouvrez un thème, vous retrouvez d'abord la partie
                  théorique à étudier, accompagnée de questions permettant de
                  vous entraîner sur les notions abordées.
                </p>

                <p>
                  Dans mon cas, l'ensemble représentait environ 21 thèmes et
                  plusieurs centaines de pages de contenu. Il faut donc prévoir
                  un peu de temps pour parcourir correctement le programme.
                </p>
              </div>
            </div>

            {/* Étape 3 */}
            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                3. Valider chaque thème
              </h3>

              <div className="mt-1 space-y-2 leading-8 text-gray-700">
                <p>
                  Une fois la théorie étudiée et les questions d'entraînement
                  réalisées, chaque thème doit être validé à travers un petit
                  examen directement accessible depuis la plateforme.
                </p>

                <p>
                  Je conseille de passer ce test après avoir réellement révisé
                  le thème. Il faut atteindre le pourcentage minimum requis pour
                  le valider.
                </p>

                <p>
                  Cette étape doit être réalisée pour chacun des thèmes. Tant
                  que tous les modules ne sont pas validés, vous n'avez pas
                  accès à l'examen final.
                </p>
              </div>
            </div>

            {/* Étape 4 */}
            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                4. Se préparer au vocabulaire espagnol
              </h3>

              <div className="mt-1 space-y-2 leading-8 text-gray-700">
                <p>
                  Pour moi, c'était probablement l'une des parties les plus
                  importantes. Certaines notions sont faciles à comprendre, mais
                  le vocabulaire utilisé pour les espèces, les armes, les modes
                  de chasse ou la réglementation peut rapidement devenir un
                  obstacle lorsque l'espagnol n'est pas votre langue maternelle.
                </p>

                <p>
                  Je conseille donc de ne pas simplement chercher à traduire les
                  cours. Il est beaucoup plus utile de retenir progressivement
                  les termes espagnols utilisés dans le domaine de la chasse.
                </p>
              </div>
            </div>
          </GuideSection>

          {/* Illustration de la préparation */}
          <div className="my-12">
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <Image
                src="/images/guides/genredequestion.png"
                alt="Exemple de question de préparation à l'examen"
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>

            <p className="mt-3 text-center text-sm italic text-gray-500">
              Exemple de question rencontrée pendant la préparation.
            </p>
          </div>

          {/* ========================================
    SECTION 4 — L'EXAMEN
    ======================================== */}
          <GuideSection id="examen" title="L'examen">
            <p className="mt-6 leading-8 text-gray-700">
              Dans mon cas, j'ai passé l'examen dans la Communauté valencienne
              après avoir suivi la formation. J'avais pris rendez-vous par email
              et les 60 € que j'avais payés pour accéder au module de formation
              comprenaient, si je me souviens bien, également le passage de
              l'examen.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Le jour de l'examen, je me suis simplement présenté sur place. Je
              me suis installé à un bureau et on m'a remis une feuille ainsi
              qu'un stylo. L'épreuve comportait 20 questions et je disposais
              d'environ une heure pour répondre.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Je n'ai finalement pas eu besoin de toute la durée prévue. Une
              fois que j'ai estimé avoir terminé, j'ai remis ma feuille à la
              personne présente à l'accueil. Elle a corrigé mon examen
              directement sur place et m'a annoncé que je l'avais réussi avec
              une note de 18/20.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Pour moi, la partie la plus difficile n'était pas forcément la
              logique des questions, mais plutôt le vocabulaire espagnol,
              notamment lorsqu'il fallait reconnaître ou nommer certaines
              espèces.
            </p>
          </GuideSection>
          {/* ========================================
    SECTION 5 — APRÈS L'EXAMEN
    ======================================== */}
          <GuideSection id="apres-examen" title="Après l'examen">
            <p className="mt-6 leading-8 text-gray-700">
              Réussir l'examen est une étape importante, mais cela ne signifie
              pas encore que vous pouvez simplement prendre votre arme et partir
              chasser. Plusieurs démarches restent nécessaires avant votre
              première sortie.
            </p>

            {/* Les trois démarches principales */}
            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                Les trois démarches principales
              </h3>

              <div className="mt-2 space-y-4 leading-8 text-gray-700">
                <p>
                  <strong>1. La licencia de caza</strong> — c'est la licence
                  nécessaire pour pratiquer la chasse dans la Communauté
                  valencienne. Elle est à distinguer du permis ou de l'examen de
                  chasse.
                </p>

                <p>
                  <strong>2. L'assurance</strong> — une assurance adaptée à la
                  pratique de la chasse est également nécessaire avant de
                  commencer à chasser.
                </p>

                <p>
                  <strong>3. La fédération</strong> — j'ai également eu la
                  possibilité d'accéder à la carte de la fédération. Cette
                  démarche est distincte de la licencia de caza.
                </p>
              </div>
            </div>
          </GuideSection>
          {/* ========================================
    MES CONSEILS
    Synthèse personnelle des principaux conseils
    donnés tout au long du guide.
    ======================================== */}
          <GuideAdvice>
            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Ne cherchez pas uniquement à traduire les cours. Prenez le temps
              de comprendre le vocabulaire espagnol utilisé pour les espèces,
              les règles et les différentes modalités de chasse.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Pendant la préparation, essayez de comprendre les notions plutôt
              que de mémoriser simplement les réponses aux questions. C'est
              particulièrement important lorsque l'espagnol n'est pas votre
              langue maternelle.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Accordez également une attention particulière aux noms espagnols
              des espèces. Les reconnaître sur une photographie est une chose ;
              connaître leur nom espagnol en est une autre.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Enfin, gardez en tête que l'obtention de la licencia de caza n'est
              que la première étape. Avant votre première sortie, pensez aux
              autres démarches nécessaires, notamment l'assurance, la licence
              d'armes et la recherche d'un territoire de chasse.
            </li>
          </GuideAdvice>
          {/* ========================================
              GUIDES COMPLÉMENTAIRES
              Oriente le lecteur vers les autres guides
              utiles de Cazador Belga.
              ======================================== */}
          <GuideRelated
            guides={[
              {
                title: "Obtenir une licence d'armes en Espagne",
                href: "/guides/licence-armes",
              },
              {
                title: "Trouver un territoire de chasse",
                href: "/guides/territoire-chasse",
              },
            ]}
          />

          {/* ========================================
              SOURCES
              Sources utilisées pour compléter ou
              vérifier les informations du guide.
              ======================================== */}
          <GuideSources
            sources={[
              {
                title: "Federación de Caza de la Comunidad Valenciana",
                url: "https://www.fccv.es/",
              },
            ]}
          />
        </div>
        {/* Fin de la colonne article */}
      </div>
      {/* Fin de la grille Sommaire + Article */}
    </main>
  );
}
