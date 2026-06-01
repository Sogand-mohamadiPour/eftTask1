import Link from "next/link";

const navLinks = [
  { href: "#sleep", label: "خواب" },
  { href: "#meditation", label: "مدیتیشن" },
  { href: "#relax", label: "آرامش" },
  { href: "#music", label: "موسیقی" },
];

export default function HeaderNav({ scrolled }) {
  const linkClass = scrolled
    ? "text-slate-700 hover:text-slate-900"
    : "text-white/90 hover:text-white";

  return (
    <>
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-medium transition-colors duration-300 ${linkClass}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-3 sm:gap-4">
        <Link
          href="#login"
          className={`hidden text-sm font-medium transition-colors duration-300 sm:inline ${linkClass}`}
        >
          ورود
        </Link>
        <Link
          href="#start"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 sm:px-5 ${
            scrolled
              ? "bg-calm-teal text-white hover:bg-[#245663]"
              : "bg-white text-calm-deep hover:bg-white/90"
          }`}
        >
          شروع رایگان
        </Link>
      </div>
    </>
  );
}
