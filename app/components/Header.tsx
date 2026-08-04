"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled || !isHomePage ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <Link href="/">
          <Image
            src="/images/logo/logovftrans.png"
            alt="Cazador Belga"
            width={120}
            height={120}
            priority
          />
        </Link>

        <nav
          className={`hidden gap-10 font-medium md:flex ${
            scrolled || !isHomePage ? "text-gray-900" : "text-white"
          }`}
        >
          <Link href="/">Accueil</Link>
          <Link href="/guides">Guides</Link>
          <Link href="/articles">Articles</Link>
          <Link href="/a-propos">À propos</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div
          className={`text-sm ${
            scrolled || !isHomePage ? "text-gray-900" : "text-white"
          }`}
        >
          🇫🇷 🇪🇸 🇬🇧
        </div>
      </div>
    </header>
  );
}
