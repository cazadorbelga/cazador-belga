// Type des propriétés du composant
type GuideNoticeProps = {
  children: React.ReactNode;
};

// Bloc "À propos de ce guide"
export default function GuideNotice({ children }: GuideNoticeProps) {
  return (
    <section className="my-10 rounded-2xl border border-green-200 bg-green-50/50 p-6">
      <div className="flex items-start gap-3">
        {/* Icône d'information */}
        <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-600 text-sm font-bold text-white">
          i
        </span>

        {/* Titre et contenu */}
        <div>
          <h2 className="text-lg font-semibold text-green-800">
            À propos de ce guide
          </h2>

          <p className="mt-2 leading-7 text-gray-700">{children}</p>
        </div>
      </div>
    </section>
  );
}
