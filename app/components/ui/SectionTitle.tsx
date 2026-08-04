type SectionTitleProps = {
  title: string;
  description: string;
};

export default function SectionTitle({
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <h2 className="text-4xl font-bold tracking-tight">{title}</h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
    </div>
  );
}
