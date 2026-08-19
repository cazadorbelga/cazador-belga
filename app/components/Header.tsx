"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const navigation = [
    { name: "Accueil", href: "/" },
    { name: "Guides", href: "/guides" },
    { name: "Articles", href: "/articles" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const headerIsWhite = scrolled || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        headerIsWhite ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-3">
        {/* Logo */}
        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/images/logo/logovftrans.png"
            alt="Cazador Belga"
            width={90}
            height={90}
            priority
          />
        </Link>

        {/* Navigation desktop */}
        <nav
          className={`hidden gap-10 font-medium md:flex ${
            headerIsWhite ? "text-gray-900" : "text-white"
          }`}
        >
          {navigation.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "font-semibold text-green-600" : ""}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Langues + bouton mobile */}
        <div className="flex items-center gap-4">
          <div
            className={`text-sm ${
              headerIsWhite ? "text-gray-900" : "text-white"
            }`}
          >
            🇫🇷 🇪🇸 🇬🇧
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg md:hidden ${
              headerIsWhite
                ? "text-gray-900 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
          >
            <span className="text-2xl leading-none">
              {mobileMenuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg md:hidden">
          <nav className="mx-auto max-w-7xl px-6 py-4">
            <div className="flex flex-col">
              {navigation.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`border-b border-gray-100 px-2 py-4 text-base ${
                      isActive
                        ? "font-semibold text-green-600"
                        : "text-gray-900"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
