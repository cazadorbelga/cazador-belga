import Image from "next/image";
import Breadcrumb from "../../components/Breadcrumb";
import GuideHeader from "../../components/GuideHeader";

export default function ArticlePage() {
  return (
    <main className="bg-[#f1f7f1] pb-20">
      <article className="mx-auto max-w-5xl px-6 pt-36">
        {/* ========================================
            FIL D'ARIANE
            ======================================== */}
        <Breadcrumb
          items={[
            { label: "Accueil", href: "/" },
            { label: "Articles", href: "/articles" },
            { label: "Pas en mon nom !" },
          ]}
        />

        {/* ========================================
            EN-TÊTE
            ======================================== */}
        <div className="[&>header]:mb-0 rounded-2xl bg-white px-8 py-7 shadow-sm md:px-12 md:py-8">
          <GuideHeader
            category="Opinion & analyse"
            title="Pas en mon nom !"
            description="Peste porcine africaine, sangliers et gestion de la faune sauvage : il est temps de sortir de la logique de destruction."
            author="Simon Leroy"
            readingTime="15 min"
            date="Août 2026"
            tags={[
              "Peste porcine africaine",
              "Sanglier",
              "Administratif",
              "Politique",
            ]}
          />
        </div>

        {/* ========================================
            IMAGE PRINCIPALE
            ======================================== */}
        <figure className="mt-8">
          <div className="relative overflow-hidden rounded-2xl shadow-md">
            <Image
              src="/images/articles/pas-en-mon-nom.png"
              alt="Pas en mon nom — PPA, sangliers et gestion de la faune sauvage"
              width={1024}
              height={1536}
              className="h-auto w-full lg:max-w-4xl lg:mx-auto"
              priority
            />
          </div>

          <figcaption className="mt-3 px-2 text-center text-sm leading-6 text-gray-500">
            La gestion de la faune sauvage ne peut pas se résumer à une logique
            de destruction.
          </figcaption>
        </figure>

        {/* ========================================
            CHAPÔ
            ======================================== */}
        <section className="mx-auto mt-10 max-w-4xl">
          <p className="font-serif text-xl font-bold italic leading-8 text-gray-700 md:text-2xl md:leading-9">
            Je m'exprime ici avec une double casquette : celle d'ingénieur
            agronome spécialisé en environnement et en gestion du milieu
            naturel, et celle de chasseur depuis plus de 20 ans.
          </p>
        </section>

        {/* ========================================
            POSITIONNEMENT
            ======================================== */}
        <section className="mx-auto mt-8 max-w-4xl rounded-2xl border border-green-100 bg-white px-6 py-6 shadow-sm md:px-8">
          <p className="leading-8 text-gray-700">
            Cette double expérience m'amène à regarder la situation actuelle
            avec deux exigences qui, à mes yeux, ne sont absolument pas
            incompatibles : <strong>la rigueur scientifique</strong> et{" "}
            <strong>le respect du vivant</strong>.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Je ne nie ni la gravité de la peste porcine africaine (PPA), ni la
            nécessité de réduire certaines populations de sangliers lorsque leur
            densité devient problématique.
          </p>

          <p className="mt-5 leading-8 text-gray-700">
            Mais je refuse que l'urgence sanitaire serve de justification à une
            politique de destruction généralisée, menée dans la précipitation et
            sans véritable réflexion sur ce que nous voulons faire de notre
            faune sauvage à long terme.
          </p>

          <p className="mt-5 font-semibold leading-8 text-gray-900">
            Gérer n'est pas détruire. Réguler n'est pas exterminer. Et un
            sanglier n'est pas une simple cible.
          </p>
        </section>

        {/* ========================================
            SOMMAIRE
            ======================================== */}
        <nav className="mx-auto mt-10 max-w-4xl rounded-2xl border border-green-100 bg-white px-6 py-7 shadow-sm md:px-8">
          <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-green-700">
            Dans cet article
          </p>

          <div className="grid gap-3 text-gray-700 md:grid-cols-2">
            <a
              href="#ppa"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">01</span>
              <span>La PPA : un problème plus complexe</span>
            </a>

            <a
              href="#belgique-suede"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">02</span>
              <span>Ce que nous apprennent la Belgique et la Suède</span>
            </a>

            <a
              href="#prime"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">03</span>
              <span>Et c'est précisément là que ma critique commence</span>
            </a>

            <a
              href="#surveillance"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">04</span>
              <span>Mieux surveiller plutôt que tuer davantage</span>
            </a>

            <a
              href="#viande"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">05</span>
              <span>Et la viande dans tout cela ?</span>
            </a>

            <a
              href="#sanglier"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">06</span>
              <span>Le sanglier n'est pas une simple cible</span>
            </a>

            <a
              href="#surpopulation"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">07</span>
              <span>PPA et surpopulation : deux problèmes différents</span>
            </a>

            <a
              href="#cellule"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">08</span>
              <span>Une véritable cellule européenne de crise</span>
            </a>

            <a
              href="#prime-strategie"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">09</span>
              <span>Arrêtons de croire que la prime est une stratégie</span>
            </a>

            <a
              href="#apres"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">10</span>
              <span>Et après le 15 septembre 2026 ?</span>
            </a>

            <a
              href="#chasseurs"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">11</span>
              <span>Les chasseurs sont-ils vraiment le problème ?</span>
            </a>

            <a
              href="#image-chasseur"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">12</span>
              <span>Il faut changer l'image du chasseur</span>
            </a>

            <a
              href="#panique"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">13</span>
              <span>Arrêter de céder à la panique politique</span>
            </a>

            <a
              href="#terrain"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">14</span>
              <span>Redonner une place aux gens de terrain</span>
            </a>

            <a
              href="#position"
              className="group flex items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-green-50 hover:text-green-800"
            >
              <span className="text-sm font-semibold text-green-700">15</span>
              <span>Ma position</span>
            </a>
          </div>
        </nav>

        {/* ========================================
            ARTICLE
            ======================================== */}
        <div className="mx-auto mt-10 max-w-4xl rounded-2xl bg-white px-7 py-10 shadow-sm md:px-12 md:py-14">
          <div className="max-w-none">
            {/* ========================================
                01 — PPA
                ======================================== */}
            <section id="ppa" className="scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                La PPA est une menace réelle. Mais le problème est plus complexe
                qu'un simple nombre de sangliers
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Commençons par reconnaître ce qui est incontestable.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La peste porcine africaine est une maladie extrêmement sérieuse
                pour les populations de suidés domestiques et sauvages. Elle ne
                constitue pas un danger pour l'être humain, mais elle peut avoir
                des conséquences sanitaires et économiques considérables pour
                l'élevage porcin.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                L'Espagne a d'ailleurs retrouvé la PPA fin novembre 2025, après
                plus de 30 ans sans détection. Les premiers cas ont été
                identifiés chez des sangliers sauvages en Catalogne.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                À l'échelle européenne, la situation reste préoccupante. En
                2025, le nombre de foyers de PPA a augmenté de 44 % chez les
                sangliers et de 76 % chez les porcs domestiques par rapport à
                2024. L'Espagne faisait partie des pays nouvellement touchés
                après 31 années sans détection <em>(EFSA, 2026)</em>.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Il existe également un lien réel entre la dynamique des
                populations de sangliers et la PPA. Une forte densité peut
                favoriser les contacts entre animaux et donc la circulation du
                virus. Des analyses épidémiologiques européennes ont notamment
                identifié une association entre la densité de sangliers et la
                présence de la maladie dans plusieurs pays baltes{" "}
                <em>(EFSA, 2017)</em>.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais il faut être précis : la densité de sangliers n'est pas un
                interrupteur qui ferait automatiquement passer une population de
                « saine » à « malade ».
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La PPA peut également se propager par d'autres voies :
                déplacements humains, produits contaminés, carcasses infectées,
                mouvements d'animaux ou de matériel.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                L'EFSA souligne d'ailleurs l'importance de la surveillance
                passive : en 2025, la recherche des animaux morts a permis de
                détecter 73 % des foyers de PPA chez les sangliers dans l'Union
                européenne. L'autorité recommande donc de continuer à donner une
                priorité importante à cette surveillance <em>(EFSA, 2026)</em>.
              </p>

              <div className="my-10 rounded-2xl border border-green-100 bg-green-50 px-6 py-6">
                <p className="m-0 font-semibold leading-8 text-gray-900">
                  La densité de sangliers est un facteur de risque parmi
                  d'autres. Elle n'est pas l'intégralité du problème.
                </p>
              </div>
            </section>

            {/* ========================================
                02 — BELGIQUE / SUÈDE
                ======================================== */}
            <section id="belgique-suede" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Ce que nous apprennent la Belgique et la Suède
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Nous avons aujourd'hui quelque chose de précieux : des retours
                d'expérience européens concrets.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La Belgique a connu une introduction de la PPA chez le sanglier
                en septembre 2018.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Les autorités ont mis en place un ensemble de mesures comprenant
                notamment le zonage, les restrictions des déplacements et de
                certaines activités, la surveillance, la biosécurité, la
                recherche des carcasses et une réduction importante de la
                population dans les zones concernées.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La zone concernée représentait environ 620 km². Près de 300 km
                de clôtures ont été installés et plus de 1 400 carcasses ont été
                retrouvées lors des opérations de recherche. Entre septembre
                2018 et septembre 2020, environ 4 936 sangliers ont été éliminés
                dans les zones concernées <em>(FASFC, 2020)</em>.
              </p>

              <p className="mt-6 font-semibold leading-8 text-gray-900">
                La Belgique n'a pas simplement « tué des sangliers ». Elle a mis
                en place un dispositif sanitaire complet.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Le dernier sanglier fraîchement retrouvé positif remontait à
                août 2019. La Belgique a ensuite récupéré son statut indemne au
                niveau européen en novembre 2020 et au niveau mondial en
                décembre 2020 <em>(FASFC, 2020)</em>.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La Suède offre un autre exemple particulièrement intéressant.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Le premier cas y a été détecté le 6 septembre 2023. Une zone de
                restriction d'environ 1 000 km² a été mise en place, avec un
                cœur de zone beaucoup plus restreint.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Les autorités ont combiné surveillance, recherche intensive des
                carcasses, clôtures, mesures de biosécurité et réduction ciblée
                des populations.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Les chasseurs ont également participé activement aux recherches.
                La Suède a retrouvé son statut indemne le 25 septembre 2024,
                soit environ un an après la détection du premier cas{" "}
                <em>(WOAH, 2024)</em>.
              </p>

              <blockquote className="my-8 rounded-r-xl border-l-4 border-green-600 bg-green-50 px-6 py-5 italic leading-8 text-gray-700">
                Ces deux exemples ne démontrent donc pas qu'il suffit de « tuer
                beaucoup de sangliers ».
              </blockquote>

              <p className="mt-6 leading-8 text-gray-700">
                Ils démontrent quelque chose de beaucoup plus intéressant :
                l'éradication repose sur une combinaison de mesures coordonnées,
                territorialisées et adaptées à l'épidémiologie locale.
              </p>
            </section>

            {/* ========================================
                03 — PRIME
                ======================================== */}
            <section id="prime" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Et c'est précisément là que ma critique commence
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Je comprends parfaitement que la Generalitat veuille agir face
                au risque.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais je trouve extrêmement discutable de présenter la solution
                sous la forme d'une prime de 40 € par sanglier abattu et retiré
                du milieu naturel.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La Generalitat Valenciana prévoit effectivement une aide directe
                de 40 € par sanglier chassé et retiré, pour les animaux abattus
                entre le 1er janvier et le 15 septembre 2026. La demande et la
                justification de l'aide sont prévues du 16 au 30 septembre 2026{" "}
                <em>(Generalitat Valenciana, 2026)</em>.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Le problème n'est pas uniquement le montant.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                C'est surtout la philosophie du dispositif.
              </p>

              <div className="my-10 rounded-2xl border border-red-100 bg-red-50 px-6 py-7">
                <p className="m-0 font-semibold leading-8 text-gray-900">
                  Payer à la pièce donne le sentiment que le problème peut être
                  résumé par une équation très simple :
                </p>

                <p className="mt-4 mb-0 text-center text-xl font-bold text-gray-900">
                  plus de sangliers tués → moins de sangliers → moins de PPA.
                </p>
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Or la réalité biologique n'est pas aussi simple.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Une étude scientifique consacrée aux stratégies de gestion du
                sanglier face à la PPA conclut notamment qu'une réduction de
                plus de 60 % de la population par la chasse conventionnelle n'a
                pas été documentée en Europe. Les modèles montrent que des
                réductions supérieures à 70 % pourraient théoriquement être
                efficaces, mais seraient en pratique impossibles à atteindre en
                une seule saison de chasse <em>(EFSA, 2015)</em>.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Une autre étude montre également qu'après l'apparition de la
                PPA, la mortalité provoquée par la maladie peut largement
                dépasser celle provoquée par la chasse : dans la zone étudiée,
                la densité de sangliers a chuté de 84 à 95 % en un an, alors que
                la chasse ne représentait qu'une fraction supplémentaire de la
                mortalité <em>(Probst et al., 2020)</em>.
              </p>

              <p className="mt-6 font-semibold leading-8 text-gray-900">
                Autrement dit : payer davantage ne crée pas mécaniquement la
                régulation recherchée.
              </p>
            </section>

            {/* ========================================
                04 — SURVEILLANCE
                ======================================== */}
            <section id="surveillance" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Le plus important n'est peut-être même pas de tuer davantage,
                mais de mieux surveiller
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                C'est un point qui me paraît fondamental.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Les carcasses de sangliers morts de PPA constituent un réservoir
                environnemental important du virus. Leur localisation et leur
                retrait sont donc essentiels.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La surveillance passive est justement extrêmement efficace pour
                détecter la circulation du virus chez les sangliers. En 2025,
                elle a permis de détecter 73 % des foyers de PPA chez les
                sangliers dans l'Union européenne <em>(EFSA, 2026)</em>.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Et c'est ici que les chasseurs peuvent jouer un rôle absolument
                essentiel.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Un chasseur qui connaît son territoire, qui sait où les animaux
                se déplacent, où ils se nourrissent, où ils se couchent et qui
                remarque rapidement une mortalité inhabituelle constitue une
                véritable source d'information sanitaire.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La surveillance et le contrôle de la PPA nécessitent d'ailleurs
                une coopération étroite avec les chasseurs et les acteurs
                locaux. Des études consacrées à la gestion de la PPA en Europe
                soulignent que cette coopération est essentielle à la mise en
                œuvre des mesures sur le terrain <em>(Koch et al., 2023)</em>.
              </p>

              <div className="my-10 rounded-2xl border border-green-100 bg-green-50 px-6 py-7">
                <p className="m-0 text-lg font-semibold leading-8 text-gray-900">
                  Pourquoi ne pas investir davantage dans cette compétence
                  humaine plutôt que de réduire le chasseur à celui qui doit
                  simplement tirer davantage ?
                </p>
              </div>
            </section>

            {/* ========================================
                05 — VIANDE
                ======================================== */}
            <section id="viande" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Et la viande dans tout cela ?
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                C'est probablement l'un des aspects qui me dérange le plus.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je comprends parfaitement qu'un animal suspect ou provenant
                d'une zone contaminée puisse devoir être éliminé selon des
                procédures sanitaires strictes. La PPA impose évidemment des
                précautions particulières.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais je trouve profondément regrettable de développer une
                logique où l'animal devient simplement :
              </p>

              <blockquote className="my-8 rounded-r-xl border-l-4 border-green-600 bg-green-50 px-6 py-5 italic leading-8 text-gray-700">
                un sanglier = 40 € = une carcasse à retirer.
              </blockquote>

              <p className="mt-6 leading-8 text-gray-700">
                La réglementation valencienne prévoit que les animaux concernés
                soient retirés et gérés conformément aux règles sanitaires et
                aux dispositions applicables aux sous-produits animaux non
                destinés à la consommation humaine{" "}
                <em>(Generalitat Valenciana, 2025)</em>.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Dans le contexte sanitaire, certaines destructions peuvent donc
                être parfaitement justifiées.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais cela ne devrait pas nous empêcher de poser une question :
                pourquoi ne pas développer, lorsque la situation sanitaire le
                permet, les infrastructures permettant de valoriser la venaison
                issue des prélèvements ?
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La viande de gibier constitue une ressource alimentaire réelle.
                En Espagne, la consommation de viande de sanglier est déjà
                encadrée par des dispositifs sanitaires spécifiques, notamment
                pour la recherche de la trichine.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je ne dis donc pas que tous les sangliers abattus pendant une
                crise de PPA doivent finir dans nos assiettes.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je dis qu'une politique durable devrait réfléchir sérieusement à
                la valorisation alimentaire des animaux qui peuvent légalement
                et sanitairement l'être.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Jeter systématiquement une ressource alimentaire alors que la
                précarité alimentaire existe serait, à mes yeux, un terrible
                paradoxe.
              </p>
            </section>

            {/* ========================================
                06 — SANGLIER
                ======================================== */}
            <section id="sanglier" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Le sanglier n'est pas une simple cible
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                C'est peut-être le point qui me tient le plus à cœur.
              </p>

              <p className="mt-6 leading-8 text-gray-700">Je suis chasseur.</p>

              <p className="mt-6 leading-8 text-gray-700">
                Je prélève des animaux.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je sais donc parfaitement ce que signifie mettre fin à la vie
                d'un animal sauvage.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais justement pour cette raison, je refuse que le sanglier soit
                réduit à un chiffre dans un tableau administratif.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Le sanglier est un animal sauvage, intelligent, social,
                extrêmement adaptable et parfaitement intégré à nos écosystèmes.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Lorsqu'une régulation est nécessaire, elle doit être faite avec
                sérieux.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Cela signifie rechercher l'efficacité, mais aussi respecter
                l'animal : dans la manière de le chasser, dans la manière de
                gérer les populations et dans la manière de traiter sa
                dépouille.
              </p>

              <div className="my-10 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-7">
                <p className="m-0 text-center text-xl font-bold leading-9 text-gray-900">
                  Réguler une population ne signifie pas cesser de respecter les
                  individus qui la composent.
                </p>
              </div>
            </section>

            {/* ========================================
                07 — SURPOPULATION
                ======================================== */}
            <section id="surpopulation" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                PPA et surpopulation : deux problèmes liés, mais deux stratégies
                différentes
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                C'est probablement la première chose que je changerais.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Il faut séparer clairement la lutte contre la PPA et la gestion
                à long terme de la surpopulation de sangliers.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Les deux problèmes sont liés, mais ils ne sont pas identiques.
              </p>

              <div className="my-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-red-700">
                    PPA
                  </p>

                  <p className="mt-3 leading-8 text-gray-700">
                    Une crise sanitaire nécessitant surveillance
                    épidémiologique, recherche des carcasses, biosécurité,
                    restrictions de mouvements, barrières physiques et
                    interventions rapides dans les zones à risque.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-green-700">
                    Surpopulation
                  </p>

                  <p className="mt-3 leading-8 text-gray-700">
                    Une problématique écologique et territoriale nécessitant des
                    données démographiques, des plans de gestion, une
                    connaissance du milieu et une régulation adaptée.
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                L'EFSA souligne d'ailleurs que la gestion du sanglier ne peut
                pas être réduite à une seule mesure : les stratégies doivent
                combiner plusieurs outils et être adaptées au contexte local{" "}
                <em>(EFSA, 2026)</em>.
              </p>

              <p className="mt-6 font-semibold leading-8 text-gray-900">
                Voilà précisément le type de politique que j'aimerais voir.
              </p>
            </section>

            {/* ========================================
                08 — CELLULE EUROPÉENNE
                ======================================== */}
            <section id="cellule" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Il faut une véritable cellule européenne de crise
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Nous avons aujourd'hui suffisamment d'expérience en Europe pour
                ne plus avoir à improviser.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La Belgique a connu la PPA.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La Suède l'a connue.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                L'Allemagne, la Pologne, les pays baltes et de nombreux autres
                États ont accumulé des années d'expérience.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Pourquoi ne pas créer une cellule européenne permanente
                consacrée à la PPA, réunissant vétérinaires, épidémiologistes,
                écologues, gestionnaires de territoires, agriculteurs et
                représentants des chasseurs ?
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Cette cellule pourrait centraliser les retours d'expérience,
                comparer les méthodes, identifier ce qui fonctionne et ce qui
                échoue, et aider les régions à adapter leurs stratégies.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Les expériences belge et suédoise montrent justement l'intérêt
                d'une réponse coordonnée associant autorités, scientifiques et
                acteurs du terrain <em>(FASFC, 2020 ; WOAH, 2024)</em>.
              </p>
            </section>

            {/* ========================================
                09 — PRIME STRATÉGIE
                ======================================== */}
            <section id="prime-strategie" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Arrêtons de croire que la prime est une stratégie
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Je suis également favorable à l'arrêt des primes à l'abattage
                comme outil central de politique publique.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je ne prétends pas qu'une incitation financière ne puisse jamais
                avoir aucun effet.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais je ne vois aucune raison scientifique de considérer qu'une
                prime par animal constitue, à elle seule, une stratégie efficace
                d'éradication de la PPA.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Pire encore, elle donne une image déplorable de la chasse :
              </p>

              <blockquote className="my-8 rounded-r-xl border-l-4 border-red-500 bg-red-50 px-6 py-5 italic leading-8 text-gray-700">
                « On vous paie 40 € pour tuer un sanglier. »
              </blockquote>

              <p className="mt-6 leading-8 text-gray-700">
                La chasse n'est pas cela.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La chasse, lorsqu'elle est correctement pratiquée, est aussi une
                connaissance du territoire, une gestion des populations, une
                observation de la faune, une responsabilité sanitaire et une
                relation particulière avec le milieu naturel.
              </p>
            </section>

            {/* ========================================
                10 — APRÈS LE 15 SEPTEMBRE
                ======================================== */}
            <section id="apres" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Et après le 15 septembre 2026 ?
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Cette question mérite également d'être posée.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                La prime de 40 € concerne les animaux abattus entre le 1er
                janvier et le 15 septembre 2026. La demande et la justification
                de l'aide sont ensuite prévues du 16 au 30 septembre{" "}
                <em>(Generalitat Valenciana, 2026)</em>.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais le problème, lui, ne disparaît pas le 16 septembre.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Si la surpopulation est réellement un problème structurel,
                quelle est la stratégie prévue pour les années suivantes ?
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Si la PPA représente une menace durable, comment sera organisée
                la surveillance ?
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Comment les populations seront-elles suivies ?
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Quels objectifs de densité seront fixés ?
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Quels moyens seront accordés aux fédérations et aux sociétés de
                chasse ?
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Quels moyens seront consacrés à la recherche des carcasses ?
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Quelle place sera donnée à la valorisation de la venaison ?
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Une politique de quelques mois ne peut pas être la réponse à un
                problème écologique qui s'est construit sur plusieurs décennies.
              </p>
            </section>

            {/* ========================================
                11 — CHASSEURS
                ======================================== */}
            <section id="chasseurs" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Les chasseurs sont-ils vraiment le problème ?
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                C'est une autre contradiction que je trouve difficile à
                accepter.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Depuis des années, les chasseurs font l'objet de critiques
                constantes. Des organisations structurées militent ouvertement
                contre certaines formes de chasse et ont participé à des
                campagnes politiques ayant contribué à des changements
                législatifs.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Le Royaume-Uni fournit un exemple particulièrement documenté.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Des organisations de protection animale ont mené la campagne
                Deadline 2000, avec pour objectif d'obtenir une législation
                mettant fin à certaines formes de chasse de mammifères sauvages
                avec des chiens.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Le résultat fut notamment le Hunting Act 2004, qui interdit
                certaines formes de chasse de mammifères sauvages avec des
                chiens en Angleterre et au pays de Galles.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je ne dis pas que les groupes anti-chasse sont responsables à
                eux seuls de cette loi.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je dis quelque chose de beaucoup plus simple :
              </p>

              <blockquote className="my-8 rounded-r-xl border-l-4 border-green-600 bg-green-50 px-6 py-5 italic leading-8 text-gray-700">
                Les mouvements militants ont le droit d'influencer le débat
                public, et ils le font.
              </blockquote>

              <p className="mt-6 leading-8 text-gray-700">
                Le monde cynégétique doit donc également être capable de
                communiquer.
              </p>
            </section>

            {/* ========================================
                12 — IMAGE DU CHASSEUR
                ======================================== */}
            <section id="image-chasseur" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Il faut changer l'image du chasseur
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Si nous voulons que la population comprenne notre rôle, nous
                devons aussi prendre notre part de responsabilité.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Il faut montrer davantage ce que fait réellement un chasseur sur
                le terrain.
              </p>

              <ul className="my-8 space-y-3 leading-8 text-gray-700">
                <li>Le suivi des populations.</li>
                <li>La connaissance des territoires.</li>
                <li>La surveillance sanitaire.</li>
                <li>La recherche des animaux morts.</li>
                <li>La prévention des dégâts agricoles.</li>
                <li>La collaboration avec les agriculteurs.</li>
                <li>La gestion des habitats.</li>
                <li>La collecte de données.</li>
                <li>Le respect des règles.</li>
                <li>Et surtout, le respect de l'animal.</li>
              </ul>

              <p className="mt-6 leading-8 text-gray-700">
                Les chasseurs suédois ont notamment été intégrés aux opérations
                de surveillance et de recherche dans le cadre de la réponse à la
                PPA <em>(WOAH, 2024)</em>.
              </p>

              <p className="mt-6 font-semibold leading-8 text-gray-900">
                Pourquoi ne pas faire davantage la même chose ici ?
              </p>
            </section>

            {/* ========================================
                13 — PANIQUE POLITIQUE
                ======================================== */}
            <section id="panique" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Il faut surtout arrêter de céder à la panique politique
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Une crise sanitaire exige de la rapidité.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais rapidité ne signifie pas précipitation.
              </p>

              <div className="my-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                  <p className="text-lg font-semibold text-gray-900">
                    Agir vite
                  </p>

                  <p className="mt-3 leading-8 text-gray-700">
                    lorsqu'un virus apparaît.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-100 bg-green-50 p-6">
                  <p className="text-lg font-semibold text-gray-900">
                    Agir méthodiquement
                  </p>

                  <p className="mt-3 leading-8 text-gray-700">
                    lorsqu'on gère une population animale.
                  </p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Et surtout, il faut éviter de confondre les deux.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je préfère une politique moins spectaculaire mais construite sur
                dix ans qu'une politique spectaculaire pendant six mois suivie
                d'un retour au même problème.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Il faut également simplifier les procédures administratives qui
                pèsent sur les sociétés et fédérations de chasse.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Les personnes qui connaissent réellement le terrain doivent
                pouvoir consacrer leur temps à la gestion de celui-ci, plutôt
                qu'à remplir toujours davantage de formulaires.
              </p>
            </section>

            {/* ========================================
                14 — TERRAIN
                ======================================== */}
            <section id="terrain" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Redonner une place aux gens de terrain
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Je ne suis pas contre les scientifiques.
              </p>

              <p className="mt-6 leading-8 text-gray-700">Bien au contraire.</p>

              <p className="mt-6 leading-8 text-gray-700">
                En tant qu'ingénieur agronome, je considère la donnée
                scientifique comme indispensable.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais je suis convaincu qu'une bonne politique de gestion de la
                faune ne peut pas être conçue uniquement derrière un bureau.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Elle doit associer :
              </p>

              <div className="my-8 rounded-2xl bg-gray-50 px-6 py-7">
                <p className="m-0 text-center text-lg font-semibold leading-9 text-gray-900">
                  scientifiques + vétérinaires + gestionnaires + agriculteurs +
                  chasseurs + administrations
                </p>
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                L'expertise scientifique apporte la méthode.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                L'administration apporte le cadre.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Les vétérinaires apportent l'expertise sanitaire.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Les agriculteurs connaissent leurs problématiques.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Et les chasseurs possèdent une connaissance quotidienne du
                terrain et des populations animales.
              </p>

              <p className="mt-6 font-semibold leading-8 text-gray-900">
                Il faut mettre ces compétences autour de la même table.
              </p>

              <p className="mt-4 font-semibold leading-8 text-gray-900">
                Pas les opposer.
              </p>
            </section>

            {/* ========================================
                15 — MA POSITION
                ======================================== */}
            <section id="position" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Ma position
              </h2>

              <p className="mt-8 leading-8 text-gray-700">
                Je ne demande pas de laisser les populations de sangliers
                augmenter sans contrôle.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je ne demande pas d'ignorer la PPA.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je ne demande pas de supprimer la chasse.
              </p>

              <p className="mt-6 font-semibold leading-8 text-gray-900">
                Je demande exactement l'inverse : une gestion beaucoup plus
                sérieuse de la faune sauvage.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Oui, la densité de sangliers peut favoriser la circulation de la
                PPA.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Oui, certaines populations doivent être réduites.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Oui, dans un foyer actif, des mesures extrêmement fortes peuvent
                être nécessaires.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Mais ces mesures doivent être localisées, proportionnées,
                scientifiquement pilotées et adaptées à l'évolution de la
                maladie.
              </p>

              <div className="my-10 rounded-2xl border border-green-200 bg-green-50 px-6 py-7">
                <p className="m-0 font-semibold leading-8 text-gray-900">
                  La PPA doit être combattue par la surveillance, la
                  biosécurité, la recherche des carcasses, les barrières, la
                  réduction ciblée des populations et la coopération européenne.
                </p>

                <p className="mt-5 mb-0 leading-8 text-gray-700">
                  La surpopulation doit être traitée par une politique de
                  gestion durable des populations et des habitats.
                </p>
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Et la chasse doit être considérée comme un outil de gestion, pas
                comme une simple machine à produire des cadavres contre 40 €.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je veux également que l'on se souvienne d'une chose essentielle
                :
              </p>

              <blockquote className="my-8 rounded-r-xl border-l-4 border-green-600 bg-green-50 px-6 py-5 text-lg font-semibold italic leading-8 text-gray-700">
                Le sanglier n'est pas un ennemi.
              </blockquote>

              <p className="mt-6 leading-8 text-gray-700">
                C'est un animal sauvage dont les populations doivent parfois
                être régulées, mais qui mérite malgré tout notre respect.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je suis chasseur depuis plus de vingt ans.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je suis ingénieur agronome spécialisé en environnement et
                gestion du milieu naturel.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Je suis donc parfaitement conscient des responsabilités que
                représente la gestion d'une population animale.
              </p>

              <p className="mt-6 leading-8 text-gray-700">
                Et c'est précisément pour cela que je refuse une vision
                simpliste du problème.
              </p>

              {/* ========================================
                  CONCLUSION
                  ======================================== */}
              <div className="my-12 rounded-2xl bg-[#071b3a] px-7 py-9 md:px-10 md:py-10">
                <p className="m-0 text-lg font-semibold leading-8 text-white">
                  Nous pouvons réduire les risques sans détruire aveuglément.
                </p>

                <p className="mt-4 text-lg font-semibold leading-8 text-white">
                  Nous pouvons réguler sans mépriser.
                </p>

                <p className="mt-4 text-lg font-semibold leading-8 text-white">
                  Nous pouvons protéger l'élevage sans oublier la faune sauvage.
                </p>

                <p className="mt-4 text-lg font-semibold leading-8 text-white">
                  Nous pouvons lutter contre la PPA sans transformer chaque
                  sanglier en simple unité comptable.
                </p>

                <div className="my-8 border-t border-white/20" />

                <p className="m-0 text-center text-2xl font-bold leading-10 text-white md:text-3xl">
                  Gérer intelligemment, oui.
                  <br />
                  Détruire sans vision, non.
                </p>

                <p className="mt-6 text-center text-3xl font-bold text-red-400 md:text-4xl">
                  Pas en mon nom.
                </p>
              </div>
            </section>

            {/* ========================================
                À PROPOS DE L'ARTICLE
                ======================================== */}
            <div className="mt-12 rounded-2xl border border-green-100 bg-green-50 px-6 py-7">
              <p className="m-0 font-semibold text-gray-900">
                À propos de cet article
              </p>

              <p className="mt-3 leading-8 text-gray-700">
                Cet article constitue une prise de position personnelle,
                construite à partir de données scientifiques, de sources
                institutionnelles et de mon expérience de chasseur et
                d'ingénieur agronome spécialisé en environnement et gestion du
                milieu naturel.
              </p>

              <p className="mt-4 mb-0 leading-8 text-gray-700">
                Les références scientifiques et institutionnelles sont citées
                dans le texte afin de distinguer les données disponibles de mon
                analyse personnelle.
              </p>
            </div>

            {/* ========================================
                SOURCES
                ======================================== */}
            <section id="sources" className="mt-16 scroll-mt-32">
              <h2 className="border-l-4 border-green-600 pl-4 text-2xl font-bold leading-tight text-[#071b3a] md:text-3xl">
                Sources et références
              </h2>

              <div className="mt-8 space-y-5">
                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">
                    EFSA — European Food Safety Authority
                  </p>

                  <p className="mt-2 leading-7 text-gray-700">
                    EFSA (2026).{" "}
                    <em>
                      African swine fever outbreaks increase in pigs and wild
                      boar across the EU
                    </em>
                    . 21 mai 2026.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">EFSA (2026)</p>

                  <p className="mt-2 leading-7 text-gray-700">
                    <em>
                      Epidemiological analysis of African swine fever in the
                      European Union during 2025
                    </em>
                    . EFSA Journal, 2026.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">EFSA (2017)</p>

                  <p className="mt-2 leading-7 text-gray-700">
                    Analyses épidémiologiques concernant la peste porcine
                    africaine dans les pays baltes.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">EFSA (2015)</p>

                  <p className="mt-2 leading-7 text-gray-700">
                    Analyse des stratégies de gestion des populations de
                    sangliers dans le contexte de la peste porcine africaine.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">
                    FASFC — Belgique (2020)
                  </p>

                  <p className="mt-2 leading-7 text-gray-700">
                    Retour d'expérience et déclaration relative à l'éradication
                    de la peste porcine africaine en Belgique.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">
                    WOAH — Suède (2024)
                  </p>

                  <p className="mt-2 leading-7 text-gray-700">
                    Retour d'expérience sur l'épisode de PPA en Suède et
                    récupération du statut indemne.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">
                    Generalitat Valenciana (2025–2026)
                  </p>

                  <p className="mt-2 leading-7 text-gray-700">
                    Réglementation et mesures relatives à la gestion des
                    sangliers et à la lutte contre la peste porcine africaine
                    dans la Communauté valencienne.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">
                    Probst et al. (2020)
                  </p>

                  <p className="mt-2 leading-7 text-gray-700">
                    Étude consacrée à la dynamique des populations de sangliers
                    après apparition de la peste porcine africaine.
                  </p>
                </div>

                <div className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">
                    Koch et al. (2023)
                  </p>

                  <p className="mt-2 leading-7 text-gray-700">
                    Travaux consacrés à la gestion de la peste porcine africaine
                    en Europe et à la coopération avec les acteurs de terrain.
                  </p>
                </div>
              </div>
            </section>

            {/* ========================================
                SIGNATURE
                ======================================== */}
            <p className="mt-14 text-center text-xl font-bold italic leading-9 text-gray-900 md:text-2xl">
              Gérer intelligemment, oui.
              <br />
              Détruire sans vision, non.
              <br />
              <span className="text-red-600">Pas en mon nom.</span>
            </p>
          </div>
        </div>
      </article>
    </main>
  );
}
