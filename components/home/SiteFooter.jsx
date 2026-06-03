import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer id="login" className="border-t border-white/10 bg-calm-deep text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <p className="text-2xl font-bold">EFT</p>
            <p className="mt-3 max-w-sm text-sm text-white/70">
              آرامش ذهن، خواب بهتر، زندگی شادتر.
            </p>
            <Link
              href="#start"
              className="mt-6 inline-block rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-calm-deep"
            >
              امتحان رایگان
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Link href="#" className="text-sm text-white/75 hover:text-white">
              درباره ما
            </Link>
            <Link href="#" className="text-sm text-white/75 hover:text-white">
              شغل‌ها
            </Link>
            <Link href="#" className="text-sm text-white/75 hover:text-white">
              پرس
            </Link>
            <Link href="#" className="text-sm text-white/75 hover:text-white">
              تماس
            </Link>
            <Link href="#" className="text-sm text-white/75 hover:text-white">
              شرایط
            </Link>
            <Link href="#" className="text-sm text-white/75 hover:text-white">
              حریم خصوصی
            </Link>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/50">
          © 2026 EFT. همه حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
}
