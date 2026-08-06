type GuideNoticeProps = {
  children: React.ReactNode;
};

export default function GuideNotice({ children }: GuideNoticeProps) {
  return (
    <section className="my-10 rounded-2xl border-l-4 border-blue-500 bg-blue-50 p-6">
      <h2 className="mb-3 text-lg font-semibold text-blue-900">
        ℹ️ À propos de ce guide
      </h2>

      <p className="leading-7 text-gray-700">{children}</p>
    </section>
  );
}
