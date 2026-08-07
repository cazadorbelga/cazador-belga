type GuideAdviceProps = {
  children: React.ReactNode;
};

export default function GuideAdvice({ children }: GuideAdviceProps) {
  return (
    <section className="mt-16 rounded-2xl border border-green-200 bg-green-50/60 p-8 lg:p-10">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-green-700">
          Mon retour d'expérience
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
          Mes conseils
        </h2>

        <ul className="mt-6 space-y-5">{children}</ul>
      </div>
    </section>
  );
}
