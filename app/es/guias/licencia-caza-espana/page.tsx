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
import { guides } from "@/app/data/guides";

export default function GuiaLicenciaCaza() {
  const guide = guides.find((guide) => guide.slug === "permis-chasse-espagne");

  if (!guide) {
    return null;
  }

  return (
    <main className="mx-auto max-w-5xl px-6 pt-36 pb-20">
      <Breadcrumb
        items={[
          { label: "Inicio", href: "/es" },
          { label: "Guías", href: "/es/guias" },
          { label: "Licencia de caza" },
        ]}
      />

      <GuideHeader
        locale="es"
        category="Administración"
        title="Cómo obtener la licencia de caza en España"
        description="Todos los pasos explicados de forma sencilla para obtener tu licencia de caza española, seas francófono o no."
        author="Simon Leroy"
        readingTime="5 min"
        date="Agosto de 2026"
        updatedLabel="Última actualización"
        readingLabel="de lectura"
        tags={["administratif", "permis-chasse", "communaute-valencienne"]}
      />

      <GuideHeroImage
        src="/images/articles/permis.jpg"
        alt="Licencia de caza española"
      />

      <GuideNotice title="Sobre esta guía">
        Esta guía se basa en mi experiencia personal al obtener mi licencia de
        caza en la Comunidad Valenciana en 2023. Comparto los trámites que
        seguí, las dificultades que encontré y los consejos que me habría
        gustado conocer antes de empezar. La información se completa con fuentes
        oficiales cuando es necesario.
      </GuideNotice>

      <div className="mt-12 lg:grid lg:grid-cols-[220px_minmax(0,1fr)] lg:items-start lg:gap-16">
        <TableOfContents
          title="Índice"
          items={[
            {
              id: "introduction",
              title: "Mi experiencia",
            },
            {
              id: "conditions",
              title: "Antes de empezar",
            },
            {
              id: "preparation",
              title: "La preparación",
            },
            {
              id: "examen",
              title: "El examen",
            },
            {
              id: "apres-examen",
              title: "Después del examen",
            },
          ]}
        />
        <div className="min-w-0">
          <hr className="my-12 lg:mt-0" />

          <GuideSection id="introduction" title="Mi experiencia">
            <p className="mt-6 leading-8 text-gray-700">
              La caza forma parte de mí desde hace mucho tiempo. Cuando me
              instalé en España, no me imaginaba viviendo sin seguir practicando
              mi pasión. Por lo tanto, tenía dos posibilidades: volver a Bélgica
              para cazar o aprender a cazar en España.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Elegí la segunda opción. Y como me gusta aprender, empecé los
              trámites para entender cómo funciona la caza española y obtener mi
              licencia en la Comunidad Valenciana.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              No tenía una guía preparada que me acompañara durante el proceso.
              Fui encontrando la información poco a poco, buscando en Internet,
              enviando correos electrónicos y haciendo llamadas. En algunas
              ocasiones me equivoqué, tuve que repetir ciertos trámites y, sobre
              todo, tuve que aprender a entender un sistema diferente al que
              conocía en Bélgica.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Finalmente, obtuve la información que necesitaba a través de la
              Federación de Caza de la Comunidad Valenciana. Realicé mi examen
              en la primavera de 2023.
            </p>

            <div className="mt-10">
              <p className="mb-5 text-center text-lg font-medium italic text-gray-700">
                ¿Cómo pasar de esto… a esto?
              </p>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/guides/belgique-neige.jpg"
                    alt="Paisaje forestal nevado en Bélgica"
                    width={900}
                    height={1200}
                    className="h-[420px] w-full object-cover"
                  />
                </div>

                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src="/images/guides/valencia-mer.jpg"
                    alt="Paisaje mediterráneo de la Comunidad Valenciana"
                    width={900}
                    height={1200}
                    className="h-[420px] w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </GuideSection>

          <GuideSection id="conditions" title="Antes de empezar">
            <p className="mt-6 leading-8 text-gray-700">
              Lo primero que hay que entender es que no existe una licencia de
              caza única que funcione exactamente de la misma manera en toda
              España. La caza está organizada en gran medida a nivel de las
              comunidades autónomas, por lo que los trámites pueden variar según
              el lugar donde quieras cazar.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              En mi caso, realicé todos los trámites en la Comunidad Valenciana.
              Esta experiencia es también la base de esta guía. Si quieres cazar
              en otra comunidad autónoma, te recomiendo comprobar las
              condiciones aplicables localmente antes de iniciar los trámites.
            </p>

            <p className="mt-6 leading-8 text-gray-700">
              Para un francófono, la principal dificultad no es necesariamente
              la complejidad de los conceptos que hay que aprender, sino el
              idioma. La preparación se realiza en español y el vocabulario
              utilizado es muy específico del mundo de la caza, la normativa y
              la fauna.
            </p>

            <div className="my-10">
              <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                <Image
                  src="/images/guides/parcours-chasse-espagne.png"
                  alt="Esquema de los principales trámites para poder cazar en España"
                  width={1200}
                  height={900}
                  className="mx-auto w-full max-w-5xl"
                />
              </div>

              <p className="mt-3 text-center text-sm italic text-gray-500">
                Vista general de los principales trámites antes de poder cazar.
              </p>
            </div>
          </GuideSection>

          <GuideSection id="preparation" title="La preparación">
            <p className="mt-6 leading-8 text-gray-700">
              En mi caso, la formación era completamente en español y requería
              sobre todo familiarizarse con el vocabulario específico de la
              caza.
            </p>

            <div>
              <h3 className="text-lg font-semibold italic text-gray-900">
                1. Realizar la formación
              </h3>

              <div className="mt-2 space-y-3 leading-8 text-gray-700">
                <p>
                  El primer paso consiste en realizar la formación oficial que
                  permite preparar la prueba de aptitud para la caza de la
                  Comunidad Valenciana. La formación que hice costaba 60 € y
                  daba acceso a una plataforma en línea con los diferentes temas
                  necesarios para preparar el examen.
                </p>

                <p>
                  Para acceder a la formación, visita la página de la{" "}
                  <a
                    href="https://federacioncazacv.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-900"
                  >
                    Federación de Caza de la Comunidad Valenciana
                  </a>
                  .
                </p>

                <p>Desde la página, sigue los siguientes pasos:</p>

                <ol className="ml-5 list-decimal space-y-1">
                  <li>
                    Abre la sección <strong>Tienda</strong>.
                  </li>
                  <li>
                    Selecciona <strong>Cursos Escola de Caça</strong>.
                  </li>
                  <li>
                    Busca <strong>Curso de Licencia de Caza</strong>.
                  </li>
                  <li>
                    Haz clic en <strong>Añadir al carrito</strong>.
                  </li>
                  <li>
                    Comprueba tu carrito y haz clic en{" "}
                    <strong>Finalizar compra</strong>.
                  </li>
                  <li>
                    Sigue los pasos para realizar el pago y completar la
                    inscripción.
                  </li>
                </ol>

                <p>
                  Una vez realizada la inscripción, podrás acceder a la
                  plataforma de formación y comenzar a estudiar los diferentes
                  temas.
                </p>

                <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-5">
                  <p className="font-semibold text-gray-900">
                    Formación gratuita para los federados
                  </p>

                  <p className="mt-2 leading-7 text-gray-700">
                    La formación es gratuita para los cazadores federados en la
                    Federación de Caza de la Comunidad Valenciana. Para
                    beneficiarte de ello, debes contactar con la delegación
                    correspondiente a tu provincia.
                  </p>
                </div>

                <p>
                  Si realmente tienes previsto cazar en la Comunidad Valenciana,
                  te recomiendo federarte en lugar de pagar por separado los 60
                  € de formación. En mi caso, la cuota federativa y el seguro
                  suponían un importe anual de <strong>76,50 €</strong>.
                </p>

                <div className="mt-4">
                  <Image
                    src="/images/guides/cotizacion-federacion.jpg"
                    alt="Ejemplo de cuota federativa y seguro"
                    width={300}
                    height={195}
                    className="mx-auto rounded-xl shadow-md"
                  />

                  <p className="mt-2 text-center text-sm italic text-gray-500">
                    Ejemplo de cuota federativa y seguro: 76,50 € al año.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                2. Estudiar cada tema
              </h3>

              <div className="mt-1 space-y-2 leading-8 text-gray-700">
                <p>
                  La formación está organizada en varios temas. Al abrir un
                  tema, primero encontrarás la parte teórica que debes estudiar,
                  acompañada de preguntas que permiten practicar los conceptos
                  tratados.
                </p>

                <p>
                  En mi caso, el programa completo incluía aproximadamente 21
                  temas y varios cientos de páginas de contenido. Por lo tanto,
                  hay que reservar algo de tiempo para recorrer correctamente
                  todo el programa.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                3. Validar cada tema
              </h3>

              <div className="mt-1 space-y-2 leading-8 text-gray-700">
                <p>
                  Una vez estudiada la teoría y realizadas las preguntas de
                  entrenamiento, cada tema debe validarse mediante un pequeño
                  examen directamente accesible desde la plataforma.
                </p>

                <p>
                  Te recomiendo realizar esta prueba después de haber repasado
                  realmente el tema. Hay que alcanzar el porcentaje mínimo
                  requerido para validarlo.
                </p>

                <p>
                  Este paso debe realizarse para cada uno de los temas. Mientras
                  no estén validados todos los módulos, no tendrás acceso al
                  examen final.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                4. Prepararse para el vocabulario español
              </h3>

              <div className="mt-1 space-y-2 leading-8 text-gray-700">
                <p>
                  Para mí, probablemente fue una de las partes más importantes.
                  Algunos conceptos son fáciles de entender, pero el vocabulario
                  utilizado para las especies, las armas, las modalidades de
                  caza o la normativa puede convertirse rápidamente en un
                  obstáculo cuando el español no es tu lengua materna.
                </p>

                <p>
                  Por eso recomiendo no limitarse a traducir los cursos. Es
                  mucho más útil ir memorizando progresivamente los términos
                  españoles utilizados en el ámbito de la caza.
                </p>
              </div>
            </div>
          </GuideSection>

          <div className="my-12">
            <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              <Image
                src="/images/guides/genredequestion.png"
                alt="Ejemplos de preguntas encontradas durante la preparación"
                width={1200}
                height={750}
                className="h-auto w-full"
              />
            </div>

            <p className="mt-3 text-center text-sm italic text-gray-500">
              Ejemplos de preguntas encontradas durante la preparación.
            </p>
          </div>

          <GuideSection id="examen" title="El examen">
            <p className="mt-6 leading-8 text-gray-700">
              En mi caso, realicé el examen en la Comunidad Valenciana después
              de completar la formación. Pedí cita por correo electrónico. Los
              60 € que había pagado para acceder a la formación incluían, si no
              recuerdo mal, también la realización del examen. Cabe señalar que,
              si ya estás federado en la Federación de Caza de la Comunidad
              Valenciana, la formación puede ser gratuita.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              El día del examen simplemente me presenté en el lugar indicado. Me
              senté en una mesa y me entregaron una hoja y un bolígrafo. La
              prueba constaba de 20 preguntas y disponía de aproximadamente una
              hora para responder.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Finalmente no necesité todo el tiempo previsto. Cuando consideré
              que había terminado, entregué mi hoja a la persona que estaba en
              recepción. Corrigió el examen directamente allí y me comunicó que
              lo había aprobado con una nota de 18/20.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Para mí, la parte más difícil no fue necesariamente la lógica de
              las preguntas, sino el vocabulario español, especialmente cuando
              había que reconocer o nombrar determinadas especies.
            </p>
          </GuideSection>

          <GuideSection id="apres-examen" title="Después del examen">
            <p className="mt-6 leading-8 text-gray-700">
              Aprobar el examen es un paso importante, pero no significa que
              simplemente puedas coger tu arma y salir a cazar. Todavía quedan
              varios trámites antes de tu primera salida.
            </p>

            <div className="mt-8">
              <h3 className="text-lg font-medium italic leading-6 text-gray-900">
                Los 4 trámites principales:
              </h3>

              <div className="mt-2 space-y-4 leading-8 text-gray-700">
                <p>
                  <strong>1. La licencia de caza</strong> — es la licencia
                  necesaria para practicar la caza en la Comunidad Valenciana.
                  Hay que pagar una tasa para obtenerla. Debe distinguirse de la
                  prueba de aptitud explicada en esta guía.
                </p>

                <p>
                  <strong>2. El seguro</strong> — también es necesario contar
                  con un seguro adecuado para la práctica de la caza antes de
                  empezar a cazar.
                </p>

                <p>
                  <strong>3. La federación</strong> — (no obligatoria) también
                  tuve la posibilidad de obtener la tarjeta federativa. Este
                  trámite es independiente de la licencia de caza.
                </p>

                <p>
                  <strong>4. La licencia de armas</strong> — si quieres cazar
                  con un arma, esta licencia es obligatoria. Está prevista una
                  guía específica para este trámite.
                </p>
              </div>
            </div>
          </GuideSection>

          <GuideAdvice label="Mi experiencia" title="Mis consejos">
            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              No intentes limitarte a traducir los cursos. Tómate el tiempo
              necesario para comprender el vocabulario español utilizado para
              las especies, las normas y las diferentes modalidades de caza.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Durante la preparación, intenta comprender los conceptos en lugar
              de memorizar simplemente las respuestas. Es especialmente
              importante cuando el español no es tu lengua materna.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Presta también especial atención a los nombres españoles de las
              especies. Reconocerlas en una fotografía es una cosa; conocer su
              nombre en español es otra.
            </li>

            <li className="relative pl-6 leading-8 text-gray-700 before:absolute before:left-0 before:top-[0.7rem] before:h-2 before:w-2 before:rounded-full before:bg-green-600">
              Por último, recuerda que aprobar el examen de caza (prueba de
              aptitud) es solo el primer paso. Antes de tu primera salida,
              piensa en los demás trámites necesarios, especialmente el seguro,
              la licencia de armas, la obtención de la licencia de caza y la
              búsqueda de un territorio de caza.
            </li>
          </GuideAdvice>

          <GuideRelated
            title="Para seguir leyendo"
            guides={[
              {
                title: "Obtener una licencia de armas en España",
                href: "/es/guias/licencia-armas",
              },
              {
                title: "Encontrar un territorio de caza",
                href: "/es/guias/territorio-caza",
              },
            ]}
          />

          <GuideSources
            title="Fuentes oficiales"
            sources={[
              {
                title: "Federación de Caza de la Comunidad Valenciana",
                url: "https://federacioncazacv.com/",
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
