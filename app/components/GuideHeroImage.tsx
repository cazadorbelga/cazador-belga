import Image from "next/image";

type GuideHeroImageProps = {
  src: string;
  alt: string;
};

export default function GuideHeroImage({ src, alt }: GuideHeroImageProps) {
  return (
    <div className="relative my-12 h-[520px] overflow-hidden rounded-3xl shadow-xl">
      <Image src={src} alt={alt} fill className="object-cover" priority />
    </div>
  );
}
