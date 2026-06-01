import Link from "next/link";

export default function PremiumSection() {
  return (
    <section
      id="premium"
      className="bg-calm-mist px-5 py-16 sm:px-8 sm:py-20 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-calm-deep sm:text-4xl">
          دوره آزمایشی رایگان EFT Premium را شروع کنید.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-600">
          پس از دوره آزمایشی، اشتراک سالانه تمدید خودکار دارد. هر زمان قابل لغو
          است.
        </p>

        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="relative flex flex-col rounded-2xl border border-calm-teal bg-calm-deep p-6 text-white shadow-xl sm:p-8">
            <span className="absolute top-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold">
              پیشنهاد ویژه
            </span>

            <div className="mt-8  items-baseline gap-x-3 gap-y-2">
              <h3 className="text-lg font-semibold text-white/90">سالانه</h3>
              <span className="text-sm line-through text-white/50">
                ۷٬۲۰۰٬۰۰۰
              </span>
              <span className="text-2xl font-bold sm:text-3xl">۲٬۹۹۰٬۰۰۰</span>
              <span className="text-sm text-white/70">تومان / سال</span>
            </div>
            <p className="mt-2 text-sm text-white/65">
              معادل ۲۴۹٬۰۰۰ تومان در ماه
            </p>

            <div className="mt-auto flex flex-row pt-8">
              <Link
                href="#start"
                className="w-full rounded-full bg-white py-3.5 text-center text-sm font-semibold text-calm-deep"
              >
                ۱۴ روز رایگان
              </Link>
            </div>
          </div>

          <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-calm-deep shadow-sm sm:p-8">
            <div className="mt-5 items-baseline gap-x-3 gap-y-2">
              <h3 className="text-lg font-semibold text-slate-600">ماهانه</h3>
              <span className="text-2xl font-bold sm:text-3xl">۴۹۰٬۰۰۰</span>
              <span className="text-sm text-slate-500">تومان / ماه</span>
            </div>

            <div className="mt-auto flex flex-row pt-8">
              <Link
                href="#start"
                className="w-full rounded-full bg-calm-teal py-3.5 text-center text-sm font-semibold text-white"
              >
                شروع ماهانه
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500">
          با ادامه، شرایط استفاده را می‌پذیرید. می‌توانید هر زمان از تنظیمات
          اشتراک را لغو کنید.
        </p>
      </div>
    </section>
  );
}
