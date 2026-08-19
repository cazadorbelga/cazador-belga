import Image from "next/image";
import Breadcrumb from "@/app/components/Breadcrumb";
import GuideHeader from "@/app/components/GuideHeader";
import GuideHeroImage from "@/app/components/GuideHeroImage";
import TableOfContents from "@/app/components/TableOfContents";
import GuideNotice from "@/app/components/GuideNotice";
import GuideSources from "@/app/components/GuideSources";
import GuideRelated from "@/app/components/GuideRelated";
import GuideSection from "@/app/components/GuideSection";
import GuideAdvice from "@/app/components/GuideAdvice";
import ZoomableImage from "@/app/components/ZoomableImage";
import { guides } from "@/app/data/guides";

export default function GuideAffutSanglier() {
  const guide = guides.find((guide) => guide.slug === "affut-sanglier");

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
          { label: "Réussir un affût au sanglier en Espagne" },
        ]}
      />

      {/* ========================================
          EN-TÊTE
          ======================================== */}
      <GuideHeader
        category="Guide"
        title="Réussir un affût au sanglier en Espagne"
        description="Retour d'expérience sur mes premiers affûts au sanglier dans la Communauté valencienne : préparation, choix du poste, matériel, observation et sécurité."
        author="Simon Leroy"
        readingTime="15 min"
        date="Août 2026"
        tags={guide.tags}
      />

      {/* ========================================
          IMAGE PRINCIPALE
          À REMPLACER PAR TA PHOTO
          ======================================== */}
      <GuideHeroImage
        src="/images/articles/affut-sanglier.jpg"
        alt="Affût au sanglier en Espagne"
      />

      {/* ========================================
          CONTEXTE
          ======================================== */}
      <GuideNotice>
        Ce guide est avant tout un retour d'expérience. Je débute moi-même
        l'affût au sanglier dans la Communauté valencienne et je ne prétends
        donc pas être un expert de cette pratique. Je partage ici les méthodes
        que j'expérimente, ce que j'observe sur le terrain et ce que mes
        différentes sorties m'apprennent.
      </GuideNotice>

      {/* ========================================
          CONTENU
          ======================================== */}
      <div className="mt-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-16">
        {/* ========================================
            SOMMAIRE
            ======================================== */}
        <TableOfContents
          items={[
            {
              id: "experience",
              title: "Mon expérience",
            },
            {
              id: "pourquoi-affut",
              title: "Pourquoi l'affût ?",
            },
            {
              id: "choisir-territoire",
              title: "Choisir son territoire",
            },
            {
              id: "analyser-terrain",
              title: "Analyser le terrain",
            },
            {
              id: "choisir-poste",
              title: "Choisir son poste",
            },
            {
              id: "installation",
              title: "Mon installation",
            },
            {
              id: "chaleur",
              title: "Affûter en été",
            },
            {
              id: "discretion",
              title: "Discrétion et odeurs",
            },
            {
              id: "materiel",
              title: "Mon matériel",
            },
            {
              id: "preparation",
              title: "Préparer les distances",
            },
            {
              id: "quand-sanglier",
              title: "Quand un sanglier apparaît",
            },
            {
              id: "renoncer",
              title: "Savoir renoncer",
            },
            {
              id: "retour",
              title: "Le retour à la voiture",
            },
            {
              id: "sortie-reussie",
              title: "Une sortie réussie",
            },
            {
              id: "conclusion",
              title: "Ce que j'apprends",
            },
          ]}
        />

        {/* ========================================
            ARTICLE
            ======================================== */}
        <div className="min-w-0">
          <hr className="my-12 lg:mt-0" />

          {/* ========================================
              1 — MON EXPÉRIENCE
              ======================================== */}
          <GuideSection id="experience" title="Mon expérience">
            <p className="mt-6 leading-8 text-gray-700">
              Pour moi, l'affût au sanglier est quelque chose de tout à fait
              nouveau, en tout cas dans la Communauté valencienne.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je ne suis donc pas un expert, loin de là. J'essaie simplement de
              me débrouiller seul, de trouver les meilleures techniques,
              d'apprendre au fil de mes sorties, d'analyser ce qui fonctionne et
              de m'adapter.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est justement l'objectif de ce guide : partager{" "}
              <strong>mon expérience personnelle</strong> et la manière dont je
              suis progressivement en train d'apprendre cette chasse en Espagne.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Il ne s'agit donc pas d'une méthode universelle. Il existe
              probablement autant de façons de pratiquer l'affût qu'il existe de
              chasseurs.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Voici simplement ce que j'ai appris jusqu'à présent.
            </p>

            {/* IMAGE — à ajouter */}
            {/*
            <figure className="my-10">
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <ZoomableImage
                  src="/images/guides/affut/..."
                  alt="..."
                  width={1600}
                  height={900}
                />
              </div>
              <figcaption className="mt-3 text-center text-sm italic leading-6 text-gray-500">
                ...
              </figcaption>
            </figure>
            */}
          </GuideSection>

          {/* ========================================
              2 — POURQUOI L'AFFÛT
              ======================================== */}
          <GuideSection id="pourquoi-affut" title="Pourquoi j'aime l'affût">
            <p className="mt-6 leading-8 text-gray-700">
              Je ne connaissais pas spécialement cette manière de chasser avant
              de commencer à la pratiquer en Espagne.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Ce qui me plaît particulièrement, c'est le fait que le gibier
              puisse arriver de <strong>360 degrés</strong>. Rien n'est vraiment
              annoncé comme dans une battue avec les chiens.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Il faut donc rester attentif en permanence : regarder, écouter,
              observer le vent et essayer de comprendre ce qui se passe autour
              de soi.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              L'ambiance est également complètement différente. C'est très
              silencieux, parfois presque un silence absolu.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Et finalement, c'est aussi un moment où je peux simplement être
              seul dans la nature, observer les animaux, écouter les oiseaux,
              réfléchir et me vider la tête.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Même lorsqu'une branche craque dans le silence, il y a toujours
              cette petite montée de stress qui rappelle qu'on est là pour
              observer ce qui va arriver.
            </p>
          </GuideSection>

          {/* ========================================
              3 — CHOISIR SON TERRITOIRE
              ======================================== */}
          <GuideSection
            id="choisir-territoire"
            title="Choisir son territoire sur la carte"
          >
            <p className="mt-6 leading-8 text-gray-700">
              La première chose que je conseille est de{" "}
              <strong>
                partir léger et de préparer son affût avant d'arriver sur place
              </strong>
              .
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Les territoires que je fréquente peuvent être immenses. Sur un
              coto de plusieurs milliers d'hectares, il serait évidemment très
              compliqué de tout parcourir à pied pour chercher le bon endroit.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'utilise donc d'abord les cartes pour scanner le territoire et
              identifier les endroits qui pourraient être intéressants.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je recherche notamment les{" "}
              <strong>zones de transition entre plusieurs milieux</strong>.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <p className="font-semibold text-gray-900">
                Ce que je recherche sur la carte
              </p>

              <ul className="mt-3 space-y-2 leading-8 text-gray-700">
                <li>Forêt et cultures</li>
                <li>Barranco et cultures</li>
                <li>Sorties de forêt</li>
                <li>Vignes</li>
                <li>Amandiers</li>
                <li>Points d'eau ou fontaines</li>
                <li>Zones où plusieurs biotopes se rencontrent</li>
              </ul>
            </div>

            <p className="mt-6 leading-8 text-gray-700">
              Je ne recherche donc pas forcément un seul biotope. Au contraire,
              j'aime les endroits où deux environnements se rencontrent.
            </p>

            {/* IMAGE CARTE — à ajouter */}
          </GuideSection>

          {/* ========================================
              4 — ANALYSER LE TERRAIN
              ======================================== */}
          <GuideSection
            id="analyser-terrain"
            title="La carte donne une hypothèse, le terrain donne la réponse"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Une fois sur place, je ne considère jamais la carte comme une
              vérité absolue.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je regarde d'abord le{" "}
              <strong>vent, la visibilité, les maisons et les chemins</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Ensuite, j'observe le terrain lui-même : les empreintes, les
              passages potentiels et les endroits qui semblent réellement
              utilisés par les animaux.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est à ce moment que je peux modifier légèrement le choix de mon
              poste.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Parfois, il suffit de faire deux ou trois mètres pour obtenir une
              ligne de vue complètement différente. Par exemple, se placer dans
              le bon sillon entre les amandiers ou les vignes peut permettre
              d'obtenir de meilleurs angles.
            </p>

            {/* IMAGE TERRAIN — à ajouter */}
          </GuideSection>

          {/* ========================================
              5 — CHOISIR SON POSTE
              ======================================== */}
          <GuideSection
            id="choisir-poste"
            title="Choisir et conserver son poste"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Une fois que j'ai fait mon tour et choisi mon emplacement, je n'en
              change plus pendant l'affût.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Il y a d'abord une raison de <strong>sécurité</strong> : une fois
              installé, je préfère rester à mon poste.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Mais il y a aussi une raison liée à la discrétion. Une fois que
              tout est installé, recommencer à bouger réduit forcément les
              chances de rester discret.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je privilégie également un endroit relativement plat afin d'être
              confortablement installé.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Le choix du vent est également essentiel. J'essaie de me placer de
              manière à avoir le vent qui vient vers moi depuis la zone que je
              souhaite observer.
            </p>
          </GuideSection>

          {/* ========================================
              6 — INSTALLATION
              ======================================== */}
          <GuideSection id="installation" title="Mon installation">
            <p className="mt-6 leading-8 text-gray-700">
              Une fois le poste choisi, il me faut environ{" "}
              <strong>un quart d'heure</strong> pour tout installer et être
              réellement prêt.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je place mon siège et mon trépied à l'endroit où je suis le plus à
              l'aise, en évitant autant que possible les pentes.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je positionne ensuite la carabine sur le trépied avec sa dragonne.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'essaie également de supprimer les petites sources de bruit qui
              pourraient me gêner. Par exemple, je retire les pierres situées
              entre mon siège et la zone où je manipule la carabine.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Les premières minutes d'attente sont consacrées à analyser à
              nouveau la situation.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'imagine les différents scénarios possibles, les endroits par
              lesquels les animaux pourraient arriver et les distances
              correspondantes.
            </p>

            {/* IMAGE INSTALLATION — à ajouter */}
          </GuideSection>

          {/* ========================================
              7 — CHALEUR
              ======================================== */}
          <GuideSection id="chaleur" title="Affûter en pleine chaleur">
            <p className="mt-6 leading-8 text-gray-700">
              La chasse au sanglier que je pratique se déroule de{" "}
              <strong>fin juin au 20 septembre</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Cela signifie qu'une grande partie des affûts se déroulent en
              pleine période de chaleur.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Dans la Communauté valencienne, il peut facilement faire{" "}
              <strong>30 à 35 °C</strong>. Il faut donc vraiment adapter son
              équipement et penser à l'hydratation.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              La sécheresse rend également les traces plus difficiles à lire. Le
              terrain sec ne permet pas toujours d'obtenir des empreintes aussi
              facilement visibles.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je pars généralement en fin de journée et j'essaie d'être sur
              place vers <strong>19 h ou 19 h 30</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Cela me laisse le temps de me garer, marcher jusqu'au poste,
              m'installer et être prêt vers <strong>20 h–20 h 15</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je reste généralement jusqu'au coucher du soleil et environ une
              heure après.
            </p>

            <GuideNotice>
              Il faut impérativement surveiller les annonces et niveaux d'alerte
              de la Communauté valencienne. Dans les situations d'alerte où
              l'accès aux espaces forestiers est interdit, il faut respecter les
              restrictions et rester dans les zones autorisées.
            </GuideNotice>

            <p className="mt-6 leading-8 text-gray-700">
              Personnellement, je prends beaucoup d'eau et je privilégie des
              vêtements longs mais légers et respirants.
            </p>

            {/* IMAGE — vêtements / conditions estivales */}
          </GuideSection>

          {/* ========================================
              8 — DISCRÉTION
              ======================================== */}
          <GuideSection id="discretion" title="Discrétion, mouvement et odeurs">
            <p className="mt-6 leading-8 text-gray-700">
              Je ne cherche pas particulièrement à utiliser un camouflage
              sophistiqué.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Pour moi, le plus important est surtout{" "}
              <strong>de rester immobile et silencieux</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je porte principalement des vêtements bruns et j'essaie de masquer
              un peu mon visage, même si ce n'est pas toujours facile avec les
              températures estivales.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'évite également de sortir mon téléphone pendant l'attente.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Le vent joue évidemment un rôle important. J'essaie donc de
              toujours l'avoir en tête et de me positionner en conséquence.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je fais également attention aux odeurs. J'utilise notamment des
              produits sans parfum pour mes vêtements et j'évite autant que
              possible de faire mes besoins directement dans la zone où je
              chasse.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Ce sont simplement mes habitudes personnelles, mais elles
              participent à ma volonté de rester le plus discret possible.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'ai notamment déjà pu observer deux renards à environ{" "}
              <strong>10 mètres</strong> et un chevreuil à environ{" "}
              <strong>20 mètres</strong> sans qu'ils me détectent.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Pour moi, cela confirme surtout l'importance de rester immobile et
              de bien gérer le vent.
            </p>
          </GuideSection>

          {/* ========================================
              9 — MATÉRIEL
              ======================================== */}
          <GuideSection id="materiel" title="Le matériel que j'utilise">
            <p className="mt-6 leading-8 text-gray-700">
              Mon équipement évolue encore, puisque je débute cette pratique.
              Voici néanmoins ce que j'emporte actuellement lors de mes affûts.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                Carabine et optique
              </h3>

              <ul className="mt-3 space-y-3">
                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Tikka T3X en .300 Winchester Magnum
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Lunette B-Vision 2-16×50 avec point lumineux
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Trépied
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Housse de carabine
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Munitions
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                Observation et éclairage
              </h3>

              <ul className="mt-3 space-y-3">
                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Jumelles Soloniaq 10×42
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Lampe TrustFire T40R
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Lampe frontale Petzl
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  GoPro Hero 13 Black
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                Équipement de terrain
              </h3>

              <ul className="mt-3 space-y-3">
                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Casque Browning anti-bruit avec amplification
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Bottines Chiruca
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Siège d'affût
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Sac à viande
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Couteau et affûteur
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Cordes
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  CamelBak
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Brassard fluorescent
                </li>

                <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
                  Briquet de secours
                </li>
              </ul>
            </div>

            <p className="mt-8 leading-8 text-gray-700">
              J'ai également personnalisé ma carabine avec un support pour ma
              lampe et de petits repères sur la tourelle balistique afin de
              retrouver rapidement mes corrections personnelles.
            </p>

            <GuideNotice>
              Les réglages et corrections balistiques sont propres à chaque
              configuration arme, optique et munition. Les repères présentés ici
              correspondent à mon matériel et ne doivent pas être reproduits
              sans vérification.
            </GuideNotice>

            {/* IMAGE — photo de ton équipement */}
            {/*
            <figure className="my-10">
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <ZoomableImage
                  src="/images/guides/affut/materiel.jpg"
                  alt="Mon matériel d'affût"
                  width={1600}
                  height={900}
                />
              </div>
              <figcaption className="mt-3 text-center text-sm italic leading-6 text-gray-500">
                Une partie du matériel que j'emporte lors de mes affûts.
              </figcaption>
            </figure>
            */}

            <p className="mt-6 leading-8 text-gray-700">
              Cette partie du guide évoluera progressivement. Certains de ces
              équipements feront à terme l'objet de tests plus détaillés.
            </p>
          </GuideSection>

          {/* ========================================
              10 — PRÉPARER LES DISTANCES
              ======================================== */}
          <GuideSection
            id="preparation"
            title="Préparer les distances et les scénarios"
          >
            <p className="mt-6 leading-8 text-gray-700">
              N'ayant pas de télémètre et voulant limiter mes coûts cette année,
              j'utilise Google Maps pour préparer les distances.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              En effet, Google Maps permet de mesurer les distances entre
              différents points du terrain. Il suffit de placer un repère sur la
              carte et de mesurer la distance avec les éléments que l'on voit
              sur la carte.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Ça me permet de me faire une idée des distances et de préparer mes
              scénarios. Ces distances me permettent également de connaître les
              réglages nécessaires pour ma lunette.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Une fois mes repères placés, je peux utiliser la fonction de
              mesure de distance afin d'estimer les distances entre mon futur
              poste et différents points du terrain.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'essaie ensuite d'imaginer différents scénarios.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <p className="font-semibold text-gray-900">
                Avant même que l'animal arrive
              </p>

              <p className="mt-2 leading-7 text-gray-700">
                S'il arrive ici, quelle est la distance ? S'il apparaît de
                l'autre côté, quelle est la distance ? Jusqu'où puis-je
                envisager un tir en conservant un environnement parfaitement sûr
                ?
              </p>
            </div>

            <p className="mt-6 leading-8 text-gray-700">
              Je regarde notamment la présence de routes, de maisons, de petites
              constructions ou d'autres éléments qui pourraient rendre une
              direction dangereuse.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'essaie également de trouver une position permettant d'avoir des
              situations de tir fichant et de toujours connaître ce qui se
              trouve derrière la zone visée.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Le vent fait également partie de cette préparation. Il peut
              changer, donc je ne considère jamais sa direction comme acquise.
            </p>

            {/* IMAGE — capture Google Maps à ajouter */}
          </GuideSection>

          {/* ========================================
              11 — QUAND UN SANGLIER APPARAÎT
              ======================================== */}
          <GuideSection id="quand-sanglier" title="Quand un sanglier apparaît">
            <p className="mt-6 leading-8 text-gray-700">
              Lorsque j'aperçois un animal, je commence par l'observer et
              l'identifier.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Si ce n'est pas un sanglier, je continue simplement à observer. Si
              c'est bien un sanglier, je passe à l'étape suivante.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je regarde alors où il se trouve s'il est seul, si c'est une laie
              suitée etc. J'estime la distance et surtout je vérifie à nouveau
              tout l'environnement.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              La question principale reste toujours la même :
            </p>

            <p className="mt-6 text-lg font-semibold italic text-gray-900">
              Est-ce que la situation permet réellement un tir sûr ?
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je vérifie notamment ce qu'il y a derrière l'animal et si la
              trajectoire est compatible avec les règles de sécurité que je me
              suis fixées.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Ce n'est qu'après cette analyse que je décide de tirer ou non.
            </p>
          </GuideSection>

          {/* ========================================
              12 — SAVOIR RENONCER
              ======================================== */}
          <GuideSection id="renoncer" title="Savoir renoncer à un tir">
            <p className="mt-6 leading-8 text-gray-700">
              Une de mes expériences les plus parlantes s'est produite lorsqu'un
              sanglier est sorti à environ <strong>280 mètres</strong>.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je ne m'attendais pas à ce qu'il apparaisse à cet endroit et j'ai
              hésité un instant.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Le problème principal n'était pas simplement la distance. Je
              n'avais pas une vision suffisamment claire de ce qui se trouvait
              derrière. Je savais qu'il y avait une sorte de trou, mais je ne
              savais pas réellement ce qu'il y avait au-delà.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'ai donc décidé de ne pas tirer.
            </p>

            <div className="mt-8 rounded-2xl border border-green-100 bg-green-50 p-5">
              <p className="text-lg font-semibold text-gray-900">
                Un tir dont on n'est pas sûr est un tir qu'on ne doit pas
                prendre.
              </p>

              <p className="mt-2 leading-7 text-gray-700">
                Pour moi, cette expérience montre surtout l'importance de
                préparer les scénarios avant l'affût et d'accepter de renoncer
                lorsque les conditions ne sont pas suffisamment claires.
              </p>
            </div>

            <p className="mt-6 leading-8 text-gray-700">
              Finalement, ne pas tirer dans cette situation n'est pas un échec.
              C'était simplement la bonne décision compte tenu des informations
              dont je disposais.
            </p>
          </GuideSection>

          {/* ========================================
              13 — RETOUR À LA VOITURE
              ======================================== */}
          <GuideSection
            id="retour"
            title="L'affût ne se termine pas quand le soleil se couche"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Le retour à la voiture est une partie de l'affût à laquelle je
              n'avais pas forcément pensé avant de commencer.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Lorsque je quitte le poste, il fait souvent complètement noir.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              L'arme doit alors être déchargée et rangée dans sa housse avant de
              rejoindre la voiture.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              On se retrouve donc parfois seul au milieu d'une forêt, dans le
              noir, avec simplement une lampe pour voir où l'on marche.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              C'est aussi pour cette raison que j'utilise un{" "}
              <strong>brassard ou un élément fluorescent</strong> lorsque je
              retourne vers la voiture.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              La visibilité est réduite, les yeux se sont habitués à l'obscurité
              et l'utilisation de la lampe attire forcément l'attention. C'est
              un moment où je reste donc particulièrement prudent.
            </p>

            {/* IMAGE — retour à la voiture / lampe */}
          </GuideSection>

          {/* ========================================
              14 — UNE SORTIE RÉUSSIE
              ======================================== */}
          <GuideSection
            id="sortie-reussie"
            title="Une sortie réussie ne signifie pas forcément tirer"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Je considère rarement une sortie comme réellement « bredouille ».
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Pour moi, être bredouille signifie surtout ne pas avoir tiré. Mais
              cela ne signifie pas ne rien avoir vécu.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'aime avant tout la nature. J'aime observer les animaux, regarder
              le biotope, écouter les oiseaux et essayer de comprendre ce qui se
              passe autour de moi.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Lors d'une sortie récente, j'ai notamment observé un grand oiseau
              que je n'ai pas réussi à identifier. Son passage a provoqué une
              réaction dans une falaise et m'a permis d'apercevoir plusieurs
              jeunes bouquetins qui s'y trouvaient.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Je n'étais évidemment pas parti pour observer cela, mais c'est
              précisément ce genre de moment qui rend une sortie intéressante.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Une sortie peut donc être réussie simplement parce qu'elle m'a
              permis d'apprendre quelque chose.
            </p>

            {/* IMAGE — bouquetins / paysage */}
          </GuideSection>

          {/* ========================================
              15 — CE QUE J'APPRENDS
              ======================================== */}
          <GuideSection
            id="conclusion"
            title="Ce que j'apprends sortie après sortie"
          >
            <p className="mt-6 leading-8 text-gray-700">
              Je viens seulement de commencer l'affût au sanglier dans la
              Communauté valencienne.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              J'ai donc encore énormément de choses à apprendre auprès de
              chasseurs qui pratiquent cette technique depuis beaucoup plus
              longtemps que moi.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Ce guide raconte simplement mon expérience actuelle : les
              territoires que je découvre, les méthodes que j'essaie, les
              observations que je fais et les décisions que je prends.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Et justement, c'est ce que j'aime dans cette chasse : chaque
              sortie permet d'apprendre quelque chose de nouveau.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Ici, en Espagne, les conditions sont également particulièrement
              agréables pour pratiquer cette chasse en soirée. Il ne pleut pas
              en permanence et les longues soirées permettent de vraiment
              profiter du moment.
            </p>

            <p className="mt-8 text-lg font-semibold italic leading-8 text-gray-900">
              Chaque sortie est donc une bonne sortie, à partir du moment où
              l'on revient en ayant appris quelque chose.
            </p>
          </GuideSection>

          {/* ========================================
              MES CONSEILS
              ======================================== */}
          <GuideAdvice>
            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Préparez votre territoire sur une carte avant de vous déplacer.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Recherchez particulièrement les zones de transition entre
              plusieurs milieux.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Arrivez suffisamment tôt pour pouvoir observer le terrain et vous
              installer sans précipitation.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Prenez suffisamment d'eau : les affûts estivaux valencians se
              déroulent dans des conditions parfois très chaudes.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Surveillez toujours les alertes et restrictions locales avant de
              partir.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Restez immobile et silencieux une fois installé.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Préparez à l'avance les distances, les angles et les zones
              dangereuses.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Si quelque chose vous semble incertain, abstenez-vous.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Ne mesurez pas la réussite d'une sortie uniquement au nombre
              d'animaux prélevés.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Gardez une trace de vos sorties et adaptez votre méthode au fil du
              temps.
            </li>
          </GuideAdvice>

          {/* ========================================
              CONTENUS ASSOCIÉS
              ======================================== */}
          <GuideRelated
            guides={[
              {
                title: "Comment trouver un territoire de chasse en Espagne",
                href: "/guides/territoire-chasse",
              },
              {
                title: "Obtenir son permis de chasse en Espagne",
                href: "/guides/permis-chasse-espagne",
              },
              {
                title: "Ma première montería en Espagne",
                href: "/articles/ma-premiere-monteria-en-espagne",
              },
            ]}
          />

          {/* ========================================
              SOURCES
              À COMPLÉTER AVEC LES SOURCES OFFICIELLES
              ======================================== */}
          <GuideSources
            sources={[
              {
                title:
                  "Generalitat Valenciana — informations et réglementation de la chasse",
                url: "https://mediambient.gva.es/",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
