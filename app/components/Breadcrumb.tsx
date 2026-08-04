import Link from "next/link";

type BreadcrumbProps = {
  currentPage: string;
};

export default function Breadcrumb({ currentPage }: BreadcrumbProps) {
  return (
    <nav className="mb-8 text-sm text-gray-500">
      <Link href="/" className="hover:text-green-700">
        Accueil
      </Link>

      <span className="mx-2">›</span>

      <Link href="/#guides" className="hover:text-green-700">
        Guides
      </Link>

      <span className="mx-2">›</span>

      <span className="font-medium text-gray-900">{currentPage}</span>
    </nav>
  );
}
