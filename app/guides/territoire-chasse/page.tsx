import Breadcrumb from "@/app/components/Breadcrumb";
import GuideHeader from "@/app/components/GuideHeader";
import GuideHeroImage from "@/app/components/GuideHeroImage";
import TableOfContents from "@/app/components/TableOfContents";
import GuideNotice from "@/app/components/GuideNotice";
import GuideSources from "@/app/components/GuideSources";
import GuideRelated from "@/app/components/GuideRelated";
import GuideSection from "@/app/components/GuideSection";
import GuideAdvice from "@/app/components/GuideAdvice";
import { guides } from "@/app/data/guides";
import Image from "next/image";
import ZoomableImage from "@/app/components/ZoomableImage";

export default function GuideTerritoireChasse() {
  const guide = guides.find((guide) => guide.slug === "territoire-chasse");

  if (!guide) {
    return null;
  }

  return (
    <main className="mx-auto max-w-5xl px-6 pt-36 pb-20">
      {/* ========================================
          FIL D'ARIANE
          ======================================== */}
      <Breadcrumb
        items={[
          { label: "Accueil", href: "/" },
          { label: "Guides", href: "/guides" },
          { label: "Trouver un territoire de chasse" },
        ]}
      />

      {/* ========================================
          EN-TÊTE DU GUIDE
          ======================================== */}
      <GuideHeader
        category="Guide"
        title="Comment trouver un territoire de chasse en Espagne"
        description="Découvrez comment rechercher un territoire de chasse en Espagne, identifier les bonnes personnes à contacter et trouver des possibilités adaptées à votre pratique."
        author="Simon Leroy"
        readingTime="12 min"
        date="Août 2026"
        tags={guide.tags}
      />

      {/* ========================================
          IMAGE PRINCIPALE
          ======================================== */}
      <GuideHeroImage
        src="/images/articles/territoire.jpg"
        alt="Territoire de chasse en Espagne"
      />

      {/* ========================================
          AVERTISSEMENT / CONTEXTE
          ======================================== */}
      <GuideNotice>
        Ce guide est principalement basé sur mon expérience dans la Communauté
        valencienne. Je vous explique comment j'ai personnellement recherché mes
        premiers territoires de chasse autour de Valencia, les méthodes que j'ai
        utilisées et les personnes que j'ai contactées. Le fonctionnement
        pouvant varier d'une communauté autonome à l'autre, les démarches
        présentées ici ne doivent pas être considérées comme identiques dans
        toute l'Espagne.
      </GuideNotice>

      {/* ========================================
          CONTENU DU GUIDE
          ======================================== */}
      <div className="mt-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-16">
        {/* ========================================
            SOMMAIRE
            ======================================== */}
        <TableOfContents
          items={[
            {
              id: "introduction",
              title: "Mon expérience",
            },
            {
              id: "type-de-chasse",
              title: "Choisir sa chasse",
            },
            {
              id: "chercher-territoires",
              title: "Chercher autour de chez soi",
            },
            {
              id: "cartographie",
              title: "Utiliser la cartographie",
            },
            {
              id: "contacts",
              title: "Trouver le bon contact",
            },
            {
              id: "chiva",
              title: "Mon expérience à Chiva",
            },
            {
              id: "alcala",
              title: "Mon expérience à Alcalà de Xivert",
            },
            {
              id: "grand-coto",
              title: "Comprendre les grands cotos",
            },
            {
              id: "socio-invite",
              title: "Socio et cartes invité",
            },
            {
              id: "hunty",
              title: "Hunty",
            },
            {
              id: "autres-possibilites",
              title: "Autres possibilités",
            },
            {
              id: "budget",
              title: "Quel budget prévoir ?",
            },
            {
              id: "ma-methode",
              title: "Ma méthode",
            },
          ]}
        />

        {/* ========================================
            ARTICLE
            ======================================== */}
        <div className="min-w-0">
          <hr className="my-12 lg:mt-0" />

          {/* ========================================
              SECTION 1 — MON EXPÉRIENCE
              ======================================== */}
          <GuideSection id="introduction" title="Mon expérience">
            <p className="mt-6 leading-8 text-gray-700">
              Trouver un territoire de chasse en Espagne peut sembler compliqué
              lorsque l'on arrive de l'étranger et que l'on ne dispose pas
              encore d'un réseau de chasseurs sur place. C'était justement mon
              cas lorsque je me suis installé à Valencia.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              La première chose que j'ai rapidement comprise, c'est qu'il
              n'existe pas vraiment un seul type de territoire de chasse. Le
              territoire que l'on va rechercher dépend avant tout de la manière
              dont on souhaite chasser.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Une montería dans une sierra, une chasse au lapin à la botte dans
              des zones agricoles, une espera au sanglier, une chasse du
              chevreuil ou du cerf pendant le brâme (la berrea), ou encore une
              approche au bouquetin ou au chamois (rececho de cabra montés ou de
              rebeco) en montagne ne se pratiquent évidemment pas dans les mêmes
              environnements.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Il y a donc presque autant de territoires que de façons de
              chasser.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Dans ce guide, je vais surtout vous raconter{" "}
              <strong>
                comment je m'y suis pris personnellement pour trouver mes
                premiers territoires autour de Valencia
              </strong>
              , comment j'ai utilisé les cartes et les contacts locaux, et
              surtout comment j'ai réussi à trouver des possibilités de chasse
              sans forcément dépenser des sommes importantes.
            </p>
          </GuideSection>

          {/* ========================================
              SECTION 2 — CHOISIR LE TYPE DE CHASSE
              ======================================== */}
          <GuideSection
            id="type-de-chasse"
            title="Choisir le type de chasse que l'on souhaite pratiquer"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Avant même de chercher un territoire, il faut commencer par se
              poser une question simple :
            </p>

            <p className="mt-6 text-lg font-semibold italic text-gray-900">
              Quelle chasse est-ce que je veux pratiquer ?
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est cette réponse qui va déterminer le type de territoire à
              rechercher.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Une personne qui souhaite participer à des monterías recherchera
              plutôt de grands massifs forestiers et des territoires adaptés au
              grand gibier.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Quelqu'un qui souhaite chasser le lapin à la botte recherchera
              plutôt des zones agricoles et des secteurs où le petit gibier est
              présent.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Pour l'affût du sanglier, du chevreuil ou du cerf, la recherche
              sera encore différente, tout comme pour une approche en montagne.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Il faut également garder en tête qu'un même territoire peut
              proposer plusieurs modalités de chasse. C'est d'ailleurs une
              différence importante avec ce que je connaissais en Belgique. Je
              veux dire par là que sur un même térritoire, tu peux très bien
              chasser la caille et avoir des monterias.
            </p>
          </GuideSection>

          {/* ========================================
              SECTION 3 — CHERCHER AUTOUR DE CHEZ SOI
              ======================================== */}
          <GuideSection
            id="chercher-territoires"
            title="Chercher les territoires autour de chez soi"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Lorsque j'ai commencé à chercher, j'aurais pu me contenter de
              trouver ponctuellement une journée de chasse.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est notamment ce que j'ai fait au début, mais mon objectif était
              différent :{" "}
              <strong>
                je voulais pouvoir chasser régulièrement et, si possible, avoir
                une relation plus durable avec un territoire ou une société de
                chasse.
              </strong>
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est à partir de là que ma manière de chercher a changé.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Au lieu de simplement chercher une journée disponible, j'ai
              commencé à chercher directement{" "}
              <strong>les territoires qui existaient autour de chez moi</strong>{" "}
              et les personnes qui les géraient.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Vivant en ville à Valencia, trouver un territoire n'était pas
              forcément évident. Je n'avais pas, au départ, un réseau de
              chasseurs locaux capable de me dire immédiatement où aller.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'ai donc commencé à utiliser les outils disponibles autour de moi
              : Internet, les réseaux sociaux, les clubs de chasse et surtout la
              cartographie.
            </p>

            <GuideNotice>
              Mon objectif n'était pas seulement de trouver une journée de
              chasse de temps en temps. Je cherchais progressivement à
              comprendre les territoires proches de chez moi et à rencontrer les
              personnes qui les connaissaient.
            </GuideNotice>
          </GuideSection>

          {/* ========================================
              SECTION 4 — CARTOGRAPHIE
              ======================================== */}
          <GuideSection
            id="cartographie"
            title="Utiliser la cartographie pour repérer les cotos"
          >
            <p className="mt-6 leading-8 text-gray-700">
              L'un des outils qui m'a été le plus utile dans cette démarche est
              le{" "}
              <strong>
                visor de cartographie de l'Institut Cartographique Valencien
              </strong>
              .
            </p>
            <figure className="my-10">
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <ZoomableImage
                  src="/images/guides/icv.jpg"
                  alt="Visor cartographique de l'Institut Cartographique Valencien"
                  width={1600}
                  height={900}
                />
              </div>

              <figcaption className="mt-3 text-center text-sm italic leading-6 text-gray-500">
                Le visor cartographique de l'Institut Cartographique Valencien
                permet notamment de repérer les différents territoires de chasse
                de la Communauté valencienne.
              </figcaption>
            </figure>
            <p className="mt-6 leading-8 text-gray-700">
              Il permet notamment de visualiser les territoires de chasse de la
              Communauté valencienne. Dans mon cas, j'ai commencé par regarder
              les territoires situés à proximité de Valencia.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Cette approche est particulièrement intéressante parce qu'elle
              change complètement la façon de chercher.
            </p>

            <p className="mt-6 text-lg font-semibold italic text-gray-900">
              Au lieu de partir de « Où est-ce que je peux chasser ? », je suis
              parti de « Quels sont les territoires de chasse qui existent près
              de chez moi ? »
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Une fois le territoire identifié, je pouvais ensuite chercher les
              informations permettant de savoir qui détenait ou exerçait le
              droit de chasse et surtout <strong>qui contacter</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est cette étape qui m'a ensuite conduit vers les sociétés de
              chasse locales, les associations et parfois les mairies.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <p className="font-semibold text-gray-900">
                Le réflexe que je vous conseille
              </p>

              <p className="mt-2 leading-7 text-gray-700">
                Commencez par regarder ce qui existe dans un rayon raisonnable
                autour de chez vous. Une fois quelques territoires identifiés,
                cherchez ensuite les personnes qui peuvent vous renseigner sur
                leur fonctionnement.
              </p>
            </div>
          </GuideSection>

          {/* ========================================
              SECTION 5 — CONTACTS
              ======================================== */}
          <GuideSection id="contacts" title="Trouver le bon contact">
            <p className="mt-6 leading-8 text-gray-700">
              Une fois qu'un territoire est identifié, il faut arriver jusqu'à
              la personne capable de vous renseigner.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Cela peut être, selon les cas, une société locale de chasseurs,
              son président, un responsable du territoire, une mairie ou une
              autre structure.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                Ne sous-estimez pas le téléphone
              </h3>

              <div className="mt-2 space-y-3 leading-8 text-gray-700">
                <p>
                  Une méthode qui a bien fonctionné pour moi a été de rechercher
                  directement les sociétés de chasse locales.
                </p>

                <p>
                  J'ai notamment contacté le club de chasseurs de Sagunto. J'ai
                  réussi à obtenir le numéro du président, qui pouvait me
                  proposer une carte à l'année.
                </p>

                <p>
                  Je n'ai finalement pas choisi cette solution parce que j'avais
                  trouvé d'autres territoires entre-temps, mais cette expérience
                  m'a montré quelque chose d'important :
                  <strong>
                    un simple coup de téléphone peut parfois être beaucoup plus
                    efficace que de longues recherches sur Internet.
                  </strong>
                </p>

                <p>
                  Il ne faut donc pas hésiter à rechercher les clubs, les
                  associations et les personnes de référence, puis simplement
                  les contacter pour expliquer ce que vous cherchez.
                </p>
              </div>
            </div>
          </GuideSection>

          {/* ========================================
              SECTION 6 — CHIVA
              ======================================== */}
          <GuideSection id="chiva" title="Mon expérience à Chiva">
            <p className="mt-6 leading-8 text-gray-700">
              C'est notamment en utilisant cette méthode que j'ai commencé à
              m'intéresser à différents territoires autour de Valencia.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je recherchais des cotos accessibles depuis chez moi et je
              cherchais ensuite à entrer en contact avec les personnes qui
              pouvaient m'expliquer les possibilités de chasse.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              L'objectif n'était pas simplement de trouver une journée
              ponctuelle, mais de comprendre comment fonctionnait le territoire
              et quelles possibilités existaient pour un chasseur extérieur.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Cette démarche m'a notamment conduit vers le{" "}
              <strong>coto de Chiva</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Ce territoire représente lui aussi environ{" "}
              <strong>12 000 hectares</strong>. C'est aussi ce qui m'a permis de
              comprendre qu'il fallait parfois prendre le temps de rencontrer
              les personnes localement plutôt que de chercher uniquement une
              offre en ligne.
            </p>
          </GuideSection>

          {/* ========================================
              SECTION 7 — ALCALÀ DE XIVERT
              ======================================== */}
          <GuideSection id="alcala" title="Mon expérience à Alcalà de Xivert">
            <p className="mt-6 leading-8 text-gray-700">
              Pour Alcalà de Xivert, l'histoire a été un peu différente.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'ai découvert qu'il y avait notamment des actions de chasse
              destinées au contrôle des populations de sangliers.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'ai donc contacté directement la mairie pour expliquer que je
              souhaitais découvrir le fonctionnement local et participer comme
              visiteur à une chasse.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              La mairie m'a mis en contact avec le président du club de chasse.
              Et finalement, les choses ont été très simples : il m'a expliqué
              qu'une chasse était organisée le week-end suivant et m'a donné le
              contact d'un chasseur avec qui je pouvais prendre contact.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est comme cela que j'ai découvert ce territoire.
            </p>

            <GuideNotice>
              Cette expérience m'a surtout appris qu'il ne faut pas forcément
              chercher le contact parfait sur Internet. Une mairie, un club de
              chasse ou un chasseur local peut parfois suffire à ouvrir la
              première porte.
            </GuideNotice>
          </GuideSection>

          {/* ========================================
              SECTION 8 — GRAND COTO
              ======================================== */}
          <GuideSection
            id="grand-coto"
            title="Comprendre ce qu'un grand coto peut offrir"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Le coto d'Alcalà de Xivert représente environ{" "}
              <strong>12 000 hectares</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est une superficie qui peut sembler énorme lorsqu'on vient de
              Belgique, et le fonctionnement est assez différent de ce que je
              connaissais.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Sur un même grand territoire, plusieurs modalités de chasse
              peuvent coexister.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                Quelques exemples
              </h3>

              <ul className="mt-3 space-y-3">
                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Chasse à la botte au petit gibier
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Chasse en poste fixe pour la media veda (période anticipée),
                  chasse aux étourneau, pie bavarde, renard etc
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Passages de migrateurs comme les pigeons ramiers et les grives
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Affût du sanglier
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Possibilités de chasse du chevreuil, notamment à travers des
                  bracelets
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Certaines battues organisées localement
                </li>
              </ul>
            </div>

            <p className="mt-6 leading-8 text-gray-700">
              C'est quelque chose qu'il faut comprendre lorsqu'on cherche un
              territoire en Espagne :
              <strong>
                {" "}
                un grand coto ne correspond pas forcément à une seule espèce ou
                à une seule manière de chasser.
              </strong>
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              L'autre coto que j'ai découvert, à Chiva, représente lui aussi
              environ <strong>12 000 hectares</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Ces grandes superficies permettent donc potentiellement plusieurs
              pratiques différentes sur un même territoire.
            </p>
          </GuideSection>

          {/* ========================================
              SECTION 9 — SOCIO / INVITÉ
              ======================================== */}
          <GuideSection
            id="socio-invite"
            title="Socio, carte invité et accès aux territoires"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Une autre chose importante à comprendre est le fonctionnement des
              sociétés locales.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Dans certains cas, pour pouvoir chasser régulièrement sur un
              territoire, il faut être <strong>socio</strong> de la société de
              chasse.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Cela peut notamment être lié à des conditions locales, comme l'
              <strong>empadronamiento</strong>, c'est-à-dire le fait de résider
              officiellement dans la commune concernée.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Pour quelqu'un qui arrive d'une autre région ou d'un autre pays,
              cela peut donc compliquer l'accès à certains territoires.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Mais il ne faut pas s'arrêter là.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Certaines sociétés disposent également de{" "}
              <strong>cartes d'invité</strong> qui permettent à des chasseurs
              extérieurs de venir participer à certaines chasses.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="font-semibold text-gray-900">
                Les questions à poser
              </p>

              <ul className="mt-3 space-y-2 leading-8 text-gray-700">
                <li>Est-il possible de venir comme invité ?</li>
                <li>Existe-t-il une carte annuelle ?</li>
                <li>Est-il possible d'acheter une journée ?</li>
                <li>Quelles sont les conditions pour devenir socio ?</li>
              </ul>
            </div>

            <p className="mt-6 leading-8 text-gray-700">
              Encore une fois, il n'y a pas forcément une réponse unique. Cela
              dépend du territoire et de son organisation.
            </p>
          </GuideSection>

          {/* ========================================
              SECTION 10 — HUNTY
              ======================================== */}
          <GuideSection
            id="hunty"
            title="Hunty : une porte d'entrée pour découvrir la chasse en Espagne"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Même si mon objectif était finalement de trouver des possibilités
              plus régulières,{" "}
              <strong>Hunty a été une vraie porte d'entrée pour moi</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              La plateforme permet de trouver des journées de chasse dans
              différentes régions d'Espagne, notamment des monterías, des
              esperas ou encore des possibilités de chasse individuelles comme
              certains bracelets pour le chevreuil ou le cerf.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je l'ai aussi trouvée intéressante pour une autre raison : elle
              permet de découvrir ce qui existe réellement sur le terrain et de
              voir différents territoires d'Espagne.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est notamment grâce à Hunty que j'ai trouvé ma première
              montería, à Adobes, dans la province de Guadalajara.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <p className="font-semibold text-gray-900">À découvrir</p>

              <p className="mt-2 leading-7 text-gray-700">
                J'ai raconté cette première expérience dans un article consacré
                à ma première montería en Espagne.
              </p>

              <a
                href="/articles/ma-premiere-monteria-en-espagne"
                className="mt-3 inline-block font-medium text-green-700 underline decoration-green-200 underline-offset-4 hover:decoration-green-700"
              >
                Lire « Ma première montería en Espagne »
              </a>
            </div>

            <p className="mt-6 leading-8 text-gray-700">
              Pour quelqu'un qui arrive en Espagne et ne connaît encore
              personne, je trouve donc que Hunty peut constituer une très bonne
              première étape pour découvrir le monde de la chasse espagnol et
              comprendre les possibilités qui existent.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              En revanche, dans mon cas, je ne voulais pas m'arrêter à des
              journées ponctuelles. Je cherchais surtout à construire quelque
              chose de plus régulier.
            </p>
          </GuideSection>

          {/* ========================================
              SECTION 11 — AUTRES POSSIBILITÉS
              ======================================== */}
          <GuideSection
            id="autres-possibilites"
            title="Les réserves et autres possibilités"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Il existe également d'autres formes d'accès à la chasse que les
              cotos gérés localement.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                Les réserves valenciennes de chasse
              </h3>

              <div className="mt-2 space-y-3 leading-8 text-gray-700">
                <p>
                  La Communauté valencienne possède notamment des{" "}
                  <strong>réserves valenciennes de chasse</strong>, comme la{" "}
                  <strong>
                    Reserva Valenciana de Caza de la Muela de Cortes
                  </strong>
                  .
                </p>

                <p>
                  C'est un fonctionnement encore différent, avec de très grands
                  territoires et des possibilités de chasse attribuées selon des
                  modalités spécifiques.
                </p>

                <p>
                  Dans mon cas, j'ai moi-même participé au processus permettant
                  d'obtenir une possibilité de chasse sur cette réserve.
                </p>
              </div>

              <div className="mt-5 rounded-2xl border border-green-100 bg-green-50 p-5">
                <p className="font-semibold text-gray-900">
                  Un article dédié est prévu
                </p>

                <p className="mt-2 leading-7 text-gray-700">
                  Je consacrerai un article séparé à cette expérience afin
                  d'expliquer précisément les démarches et le fonctionnement de
                  l'attribution des possibilités de chasse.
                </p>

                <a
                  href="/articles/reserve-muela-de-cortes"
                  className="mt-3 inline-block font-medium text-green-700 underline decoration-green-200 underline-offset-4 hover:decoration-green-700"
                >
                  Voir l'article sur la réserve de la Muela de Cortes
                </a>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                Les zonas comunes de caza
              </h3>

              <p className="mt-2 leading-8 text-gray-700">
                Il existe également les <strong>zonas comunes de caza</strong>,
                dont le fonctionnement mérite d'être étudié plus précisément.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je préfère donc ne pas présenter cette possibilité comme une
                solution simple tant que je n'ai pas suffisamment approfondi le
                sujet.
              </p>
            </div>
          </GuideSection>

          {/* ========================================
              SECTION 12 — BUDGET
              ======================================== */}
          <GuideSection id="budget" title="Quel budget prévoir ?">
            <p className="mt-6 leading-8 text-gray-700">
              Le prix peut énormément varier selon le territoire, la modalité de
              chasse, le gibier et le type d'accès.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Pour donner simplement quelques ordres de grandeur correspondant à
              ce que j'ai rencontré dans mes recherches :
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <div className="grid grid-cols-[1fr_auto] bg-gray-50 px-5 py-4 text-sm font-semibold text-gray-900">
                <span>Type de chasse</span>
                <span>Ordre de grandeur</span>
              </div>

              <div className="grid grid-cols-[1fr_auto] border-t border-gray-100 px-5 py-4 text-sm text-gray-700">
                <span>Montería classique</span>
                <span className="font-medium">200 à 500 € / jour</span>
              </div>

              <div className="grid grid-cols-[1fr_auto] border-t border-gray-100 px-5 py-4 text-sm text-gray-700">
                <span>Carte invité annuelle</span>
                <span className="font-medium">700 à 800 € / an</span>
              </div>

              <div className="grid grid-cols-[1fr_auto] border-t border-gray-100 px-5 py-4 text-sm text-gray-700">
                <span>Battue sur petit territoire</span>
                <span className="font-medium">50 à 70 € / jour</span>
              </div>

              <div className="grid grid-cols-[1fr_auto] border-t border-gray-100 px-5 py-4 text-sm text-gray-700">
                <span>Chasse à la botte</span>
                <span className="font-medium">≈ 70 € / jour</span>
              </div>
            </div>

            <p className="mt-6 text-sm italic leading-7 text-gray-500">
              Ces montants ne sont pas des tarifs officiels : ils correspondent
              aux possibilités et aux prix que j'ai rencontrés personnellement.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Et surtout, il ne faut pas forcément avoir un énorme budget pour
              commencer à chasser régulièrement en Espagne.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              On peut trouver des formules très différentes selon les
              territoires et les sociétés.
            </p>

            <p className="mt-6 text-lg font-semibold italic text-gray-900">
              Après, tout est une question de budget et de volonté. Il faut
              savoir se mettre des limites 😂
            </p>
          </GuideSection>

          {/* ========================================
              SECTION 13 — MA MÉTHODE
              ======================================== */}
          <GuideSection id="ma-methode" title="Ma méthode aujourd'hui">
            <p className="mt-6 leading-8 text-gray-700">
              Avec le recul, la méthode que j'utilise est finalement assez
              simple.
            </p>

            <div className="mt-8 space-y-8">
              <div>
                <h3 className="text-lg font-semibold italic text-gray-900">
                  1. Définir le type de chasse
                </h3>

                <p className="mt-2 leading-8 text-gray-700">
                  Commencez par savoir ce que vous recherchez réellement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold italic text-gray-900">
                  2. Regarder ce qui existe autour de chez vous
                </h3>

                <p className="mt-2 leading-8 text-gray-700">
                  Cherchez les cotos et les territoires accessibles depuis votre
                  lieu de résidence.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold italic text-gray-900">
                  3. Utiliser la cartographie
                </h3>

                <p className="mt-2 leading-8 text-gray-700">
                  La cartographie permet d'identifier les territoires qui vous
                  intéressent.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold italic text-gray-900">
                  4. Trouver le titulaire ou le gestionnaire
                </h3>

                <p className="mt-2 leading-8 text-gray-700">
                  Cherchez ensuite la société de chasse, le responsable ou la
                  structure capable de vous renseigner.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold italic text-gray-900">
                  5. Contacter les bonnes personnes
                </h3>

                <p className="mt-2 leading-8 text-gray-700">
                  Un mail, un message Facebook ou Instagram, ou tout simplement
                  un appel téléphonique peuvent suffire.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold italic text-gray-900">
                  6. Demander les possibilités pour les chasseurs extérieurs
                </h3>

                <p className="mt-2 leading-8 text-gray-700">
                  Carte invité, journée, abonnement, statut de socio… posez
                  directement la question.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold italic text-gray-900">
                  7. Commencer petit
                </h3>

                <p className="mt-2 leading-8 text-gray-700">
                  Une première journée peut être une excellente manière de
                  découvrir un territoire avant de décider si vous souhaitez y
                  revenir régulièrement.
                </p>
              </div>
            </div>
          </GuideSection>

          {/* ========================================
              MES CONSEILS
              ======================================== */}
          <GuideAdvice>
            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              N'ayez pas peur de contacter directement les sociétés de chasse,
              les mairies ou les personnes de référence. Un simple coup de
              téléphone peut parfois ouvrir une porte.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Ne cherchez pas uniquement des journées de chasse : cherchez
              également les territoires et les personnes qui les gèrent.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Essayez de parler la langue locale. Même quelques mots d'espagnol
              peuvent faciliter énormément le premier contact.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Respectez les habitudes locales, les règles de la région et les
              consignes données sur le terrain. La sécurité doit toujours rester
              une priorité.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Enfin, n'ayez pas peur de pousser les portes. La passion de la
              chasse dépasse souvent les différences de langue ou d'origine. Une
              fois la première porte ouverte, les suivantes deviennent beaucoup
              plus faciles.
            </li>
          </GuideAdvice>

          {/* ========================================
              GUIDES / ARTICLES COMPLÉMENTAIRES
              ======================================== */}
          <GuideRelated
            guides={[
              {
                title: "Obtenir son permis de chasse en Espagne",
                href: "/guides/permis-chasse-espagne",
              },
              {
                title: "Réussir un affût au sanglier en Espagne",
                href: "/guides/affut-sanglier",
              },
              {
                title: "Ma première montería en Espagne",
                href: "/articles/ma-premiere-monteria-en-espagne",
              },
              {
                title:
                  "Les démarches pour chasser dans la réserve de la Muela de Cortes",
                href: "/articles/reserve-muela-de-cortes",
              },
            ]}
          />

          {/* ========================================
              SOURCES
              ======================================== */}
          <GuideSources
            sources={[
              {
                title:
                  "Visor cartographique de la Generalitat / Institut Cartogràfic Valencià",
                url: "https://visor.gva.es/visor/",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
