export const tagFamilies = {
  animaux: ["sanglier", "cerf", "chevreuil", "lapin", "perdrix", "lievre"],

  administratif: [
    "administratif",
    "permis-chasse",
    "licence-armes",
    "assurance",
    "federation",
    "reglementation",
  ],

  materiel: [
    "test-materiel",
    "armes",
    "munitions",
    "optique",
    "vetements",
    "chaussures",
    "eclairage",
    "accessoires",
  ],

  lieux: ["belgique", "france", "espagne", "communaute-valencienne", "chiva"],

  maladies: ["maladies", "peste-porcine-africaine"],

  gestion: [
    "gestion",
    "gestion-faune",
    "gestion-territoires",
    "population",
    "prevention",
  ],

  environnement: [
    "environnement",
    "feux-foret",
    "biodiversite",
    "habitat",
    "conservation",
  ],

  politique: ["politique"],

  modalites: [
    "modalites-chasse",
    "espera",
    "monteria",
    "battue",
    "chasse-approche",
    "chasse-affut",
    "chasse-botte",
  ],

  typeArticle: ["retour-experience", "test", "analyse", "opinion", "actualite"],
} as const;

export type TagId = (typeof tagFamilies)[keyof typeof tagFamilies][number];

export const tagTranslations: Record<
  TagId,
  {
    fr: string;
    es: string;
    en: string;
  }
> = {
  sanglier: {
    fr: "Sanglier",
    es: "Jabalí",
    en: "Wild boar",
  },

  cerf: {
    fr: "Cerf",
    es: "Ciervo",
    en: "Deer",
  },

  chevreuil: {
    fr: "Chevreuil",
    es: "Corzo",
    en: "Roe deer",
  },

  lapin: {
    fr: "Lapin",
    es: "Conejo",
    en: "Rabbit",
  },

  perdrix: {
    fr: "Perdrix",
    es: "Perdiz",
    en: "Partridge",
  },

  lievre: {
    fr: "Lièvre",
    es: "Liebre",
    en: "Hare",
  },

  administratif: {
    fr: "Administratif",
    es: "Administración",
    en: "Administrative",
  },

  "permis-chasse": {
    fr: "Permis de chasse",
    es: "Licencia de caza",
    en: "Hunting license",
  },

  "licence-armes": {
    fr: "Licence d'armes",
    es: "Licencia de armas",
    en: "Firearms license",
  },

  assurance: {
    fr: "Assurance",
    es: "Seguro",
    en: "Insurance",
  },

  federation: {
    fr: "Fédération",
    es: "Federación",
    en: "Federation",
  },

  reglementation: {
    fr: "Réglementation",
    es: "Normativa",
    en: "Regulations",
  },

  "test-materiel": {
    fr: "Test matériel",
    es: "Prueba de material",
    en: "Gear review",
  },

  armes: {
    fr: "Armes",
    es: "Armas",
    en: "Firearms",
  },

  munitions: {
    fr: "Munitions",
    es: "Munición",
    en: "Ammunition",
  },

  optique: {
    fr: "Optique",
    es: "Óptica",
    en: "Optics",
  },

  vetements: {
    fr: "Vêtements",
    es: "Ropa",
    en: "Clothing",
  },

  chaussures: {
    fr: "Chaussures",
    es: "Calzado",
    en: "Footwear",
  },

  eclairage: {
    fr: "Éclairage",
    es: "Iluminación",
    en: "Lighting",
  },

  accessoires: {
    fr: "Accessoires",
    es: "Accesorios",
    en: "Accessories",
  },

  belgique: {
    fr: "Belgique",
    es: "Bélgica",
    en: "Belgium",
  },

  france: {
    fr: "France",
    es: "Francia",
    en: "France",
  },

  espagne: {
    fr: "Espagne",
    es: "España",
    en: "Spain",
  },

  "communaute-valencienne": {
    fr: "Communauté valencienne",
    es: "Comunidad Valenciana",
    en: "Valencian Community",
  },

  chiva: {
    fr: "Chiva",
    es: "Chiva",
    en: "Chiva",
  },

  maladies: {
    fr: "Maladies",
    es: "Enfermedades",
    en: "Diseases",
  },

  "peste-porcine-africaine": {
    fr: "Peste porcine africaine",
    es: "Peste porcina africana",
    en: "African swine fever",
  },

  gestion: {
    fr: "Gestion",
    es: "Gestión",
    en: "Management",
  },

  "gestion-faune": {
    fr: "Gestion de la faune",
    es: "Gestión de la fauna",
    en: "Wildlife management",
  },

  "gestion-territoires": {
    fr: "Gestion des territoires",
    es: "Gestión de territorios",
    en: "Territory management",
  },

  population: {
    fr: "Population",
    es: "Población",
    en: "Population",
  },

  prevention: {
    fr: "Prévention",
    es: "Prevención",
    en: "Prevention",
  },

  environnement: {
    fr: "Environnement",
    es: "Medio ambiente",
    en: "Environment",
  },

  "feux-foret": {
    fr: "Feux de forêt",
    es: "Incendios forestales",
    en: "Wildfires",
  },

  biodiversite: {
    fr: "Biodiversité",
    es: "Biodiversidad",
    en: "Biodiversity",
  },

  habitat: {
    fr: "Habitat",
    es: "Hábitat",
    en: "Habitat",
  },

  conservation: {
    fr: "Conservation",
    es: "Conservación",
    en: "Conservation",
  },

  politique: {
    fr: "Politique",
    es: "Política",
    en: "Politics",
  },

  "modalites-chasse": {
    fr: "Modalités de chasse",
    es: "Modalidades de caza",
    en: "Hunting methods",
  },

  espera: {
    fr: "Espera",
    es: "Espera",
    en: "Stand hunting",
  },

  monteria: {
    fr: "Montería",
    es: "Montería",
    en: "Montería",
  },

  battue: {
    fr: "Battue",
    es: "Batida",
    en: "Driven hunt",
  },

  "chasse-approche": {
    fr: "Chasse à l'approche",
    es: "Rececho",
    en: "Stalking",
  },

  "chasse-affut": {
    fr: "Chasse à l'affût",
    es: "Espera",
    en: "Hunting from a hide",
  },

  "chasse-botte": {
    fr: "Chasse à la botte",
    es: "Caza a pie",
    en: "Walk-up hunting",
  },

  "retour-experience": {
    fr: "Retour d'expérience",
    es: "Experiencia personal",
    en: "Field experience",
  },

  test: {
    fr: "Test",
    es: "Prueba",
    en: "Review",
  },

  analyse: {
    fr: "Analyse",
    es: "Análisis",
    en: "Analysis",
  },

  opinion: {
    fr: "Opinion",
    es: "Opinión",
    en: "Opinion",
  },

  actualite: {
    fr: "Actualité",
    es: "Actualidad",
    en: "News",
  },
};
