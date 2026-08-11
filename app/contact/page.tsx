import SectionTitle from "../components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <main className="bg-gray-50 px-6 pb-24 pt-50">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          title="Contact"
          description="Une question, une suggestion ou une envie de collaborer avec Cazador Belga ? Écrivez-moi."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {/* Email */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="mb-6 h-1 w-12 rounded-full bg-green-700" />

            <h2 className="text-2xl font-semibold text-gray-900">Email</h2>

            <p className="mt-4 leading-7 text-gray-600">
              Une question sur la chasse en Espagne, une remarque sur un guide
              ou simplement envie d'échanger ?
            </p>

            <a
              href="mailto:contact.cazadorbelga@gmail.com"
              className="mt-6 inline-block font-medium text-green-700 transition hover:text-green-900"
            >
              contact.cazadorbelga@gmail.com
            </a>
          </div>

          {/* Instagram */}
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
            <div className="mb-6 h-1 w-12 rounded-full bg-green-700" />

            <h2 className="text-2xl font-semibold text-gray-900">Instagram</h2>

            <p className="mt-4 leading-7 text-gray-600">
              Retrouvez Cazador Belga sur Instagram pour suivre les sorties, les
              expériences de terrain et les prochaines publications.
            </p>

            <a
              href="https://instagram.com/cazador.belga"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block font-medium text-green-700 transition hover:text-green-900"
            >
              @cazador.belga
            </a>
          </div>
        </div>

        {/* Collaborations */}
        <div className="mt-6 rounded-3xl bg-green-50 p-8 ring-1 ring-green-100 md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-green-800">
              Collaborations
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-gray-900">
              Un projet ou une collaboration ?
            </h2>

            <p className="mt-4 text-lg leading-8 text-gray-700">
              Cazador Belga a vocation à développer des collaborations avec des
              marques, des acteurs de la chasse et des professionnels qui
              partagent une même vision de la chasse et du respect de la nature.
            </p>

            <a
              href="mailto:contact.cazadorbelga@gmail.com"
              className="mt-7 inline-flex rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-700"
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
