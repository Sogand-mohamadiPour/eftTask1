import Link from "next/link";

export default function BlogSection() {
  return (
    <section id="music" className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold text-calm-deep sm:text-4xl">
          وبلاگ ما را برای منابع بیشتر بخوانید.
        </h2>
        <p className="mx-auto mt-4 mb-12 max-w-2xl text-center text-lg text-slate-600">
          مدیتیشن، خواب، استرس و سلامت روان.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80">
            <div className="h-40 bg-gradient-to-br from-[#2d6a7e]/20 to-[#1a3a4a]/30 sm:h-48" />
            <div className="p-6">
              <span className="text-xs font-semibold text-calm-teal">خواب</span>
              <h3 className="mt-2 text-xl font-bold text-calm-deep">
                <Link href="#">چطور چرت بزنیم که واقعاً سرحال شویم؟</Link>
              </h3>
              <p className="mt-3 text-slate-600">
                راهنمای کوتاه برای استراحت‌های مؤثر در وسط روز.
              </p>
              <Link href="#" className="mt-4 inline-block text-sm font-semibold text-calm-teal">
                مطالعه بیشتر
              </Link>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80">
            <div className="h-40 bg-gradient-to-br from-[#2d6a7e]/20 to-[#1a3a4a]/30 sm:h-48" />
            <div className="p-6">
              <span className="text-xs font-semibold text-calm-teal">آرامش</span>
              <h3 className="mt-2 text-xl font-bold text-calm-deep">
                <Link href="#">چطور اضطراب را آرام کنیم وقتی ذهن شلوغ است؟</Link>
              </h3>
              <p className="mt-3 text-slate-600">
                ۱۰ نکته عملی برای لحظه‌های پراسترس.
              </p>
              <Link href="#" className="mt-4 inline-block text-sm font-semibold text-calm-teal">
                مطالعه بیشتر
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
