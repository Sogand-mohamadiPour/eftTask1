import Link from "next/link";

export default function PremiumSection() {
  return (
    <section id="premium" className="bg-calm-mist px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-calm-deep sm:text-4xl">
          دوره آزمایشی رایگان EFT Premium را شروع کنید.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          پس از دوره آزمایشی، اشتراک سالانه تمدید خودکار دارد. هر زمان قابل لغو است.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-calm-teal bg-calm-deep p-6 text-white shadow-xl sm:p-8">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              پیشنهاد ویژه
            </span>
            <h3 className="mt-4 text-lg text-white/90">سالانه</h3>
            <p className="mt-3">
              <span className="text-sm line-through text-white/50">۷٬۲۰۰٬۰۰۰</span>
              <span className="ms-2 text-3xl font-bold">۲٬۹۹۰٬۰۰۰</span>
              <span className="text-sm text-white/70"> تومان / سال</span>
            </p>
            <p className="mt-2 text-sm text-white/65">معادل ۲۴۹٬۰۰۰ تومان در ماه</p>
            <Link
              href="#start"
              className="mt-8 block rounded-full bg-white py-3.5 text-center text-sm font-semibold text-calm-deep"
            >
              ۱۴ روز رایگان
            </Link>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-calm-deep shadow-sm sm:p-8">
            <h3 className="text-lg text-slate-600">ماهانه</h3>
            <p className="mt-3">
              <span className="text-3xl font-bold">۴۹۰٬۰۰۰</span>
              <span className="text-sm text-slate-500"> تومان / ماه</span>
            </p>
            <Link
              href="#start"
              className="mt-8 block rounded-full bg-calm-teal py-3.5 text-center text-sm font-semibold text-white"
            >
              شروع ماهانه
            </Link>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
          با ادامه، شرایط استفاده را می‌پذیرید. می‌توانید هر زمان از تنظیمات اشتراک را لغو کنید.
        </p>
      </div>
    </section>
  );
}
