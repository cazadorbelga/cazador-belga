type GuideSectionProps = {
  id?: string;
  title: string;
  children: React.ReactNode;
};

export default function GuideSection({
  id,
  title,
  children,
}: GuideSectionProps) {
  return (
    <section id={id} className="mt-16">
      <h2 className="text-3xl font-bold text-gray-900">{title}</h2>

      <div className="mt-6 space-y-6 leading-8 text-gray-700">{children}</div>
    </section>
  );
}
