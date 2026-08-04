import SectionTitle from "../components/ui/SectionTitle";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pt-32 pb-20">
      <SectionTitle
        title="Contact"
        description="Une question, une suggestion ou une collaboration ? N'hésitez pas à me contacter."
      />

      <div className="mt-16 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
        <div className="space-y-10">
          <div>
            <h2 className="text-xl font-semibold">📧 Email</h2>

            <a
              href="mailto:contact.cazadorbelga@gmail.com"
              className="mt-3 inline-block text-lg text-green-700 hover:underline"
            >
              contact.cazadorbelga@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-xl font-semibold">📸 Instagram</h2>

            <a
              href="https://instagram.com/cazador.belga"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-lg text-green-700 hover:underline"
            >
              @cazador.belga
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
