export default function ReviewsSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-calm-deep sm:text-4xl">
          بیش از نیم میلیون نظر ۵ ستاره!
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(26,58,74,0.06)] ring-1 ring-slate-200/70 sm:p-8">
            <p className="text-amber-400">★★★★★</p>
            <p className="mt-4 text-lg text-slate-700">
              وقتی نمی‌توانم بخوابم، این برنامه را روشن می‌کنم و ظرف چند دقیقه خوابم می‌برد.
            </p>
            <p className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">
              <b className="text-calm-deep">سارا</b> · تهران
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(26,58,74,0.06)] ring-1 ring-slate-200/70 sm:p-8">
            <p className="text-amber-400">★★★★★</p>
            <p className="mt-4 text-lg text-slate-700">
              ذهنم خیلی شلوغ است. حالا تمرین روزانه برایم شفابخش و آرامش‌بخش شده.
            </p>
            <p className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">
              <b className="text-calm-deep">امیر</b> · اصفهان
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(26,58,74,0.06)] ring-1 ring-slate-200/70 sm:p-8">
            <p className="text-amber-400">★★★★★</p>
            <p className="mt-4 text-lg text-slate-700">
              زندگی‌ام به شکل غیرقابل توصیفی عوض شده. مقاوم‌ترم و به خودم نزدیک‌ترم.
            </p>
            <p className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">
              <b className="text-calm-deep">نیلوفر</b> · شیراز
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
