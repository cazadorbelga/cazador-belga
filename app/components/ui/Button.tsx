import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href: string;
};

export default function Button({ children, href }: ButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl bg-green-700 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 hover:shadow-lg"
    >
      {children}
    </Link>
  );
}
