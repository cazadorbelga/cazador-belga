export const locales = ["fr", "es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const localeLabels: Record<Locale, string> = {
  fr: "Français",
  es: "Español",
  en: "English",
};

export const localePaths: Record<Locale, string> = {
  fr: "/",
  es: "/es",
  en: "/en",
};
