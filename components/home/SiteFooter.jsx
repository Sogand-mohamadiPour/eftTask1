import Link from "next/link";

const footerLinks = [
  { href: "#", label: "درباره ما" },
  { href: "#", label: "شغل‌ها" },
  { href: "#", label: "پرس" },
  { href: "#", label: "تماس" },
  { href: "#", label: "شرایط" },
  { href: "#", label: "حریم خصوصی" },
];

export default function SiteFooter() {
  return (
    <footer id="login" className="border-t border-white/10 bg-[#1a3a4a] text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-2xl font-bold">EFT</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              آرامش ذهن، خواب بهتر، زندگی شادتر — به زبان فارسی.
            </p>
            <Link
              href="#start"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#1a3a4a] transition hover:bg-white/90"
            >
              امتحان رایگان
            </Link>
          </div>
          <nav
            className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3"
            aria-label="پاورقی"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © {new Date().getFullYear()} EFT. همه حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
