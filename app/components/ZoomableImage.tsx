"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ZoomableImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

export default function ZoomableImage({
  src,
  alt,
  width,
  height,
  className = "",
}: ZoomableImageProps) {
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (!isZoomed) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsZoomed(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isZoomed]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsZoomed(true)}
        className="group block w-full cursor-zoom-in"
        aria-label={`Agrandir l'image : ${alt}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={`h-auto w-full transition duration-300 group-hover:opacity-90 ${className}`}
        />
      </button>

      {isZoomed && (
        <div
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-black/80 p-4 md:p-8"
          onClick={() => setIsZoomed(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="max-h-[90vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
          />
        </div>
      )}
    </>
  );
}
