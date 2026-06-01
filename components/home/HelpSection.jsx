import Link from "next/link";

export default function HelpSection() {
  return (
    <section className="bg-calm-mist px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-calm-deep sm:text-4xl">
          ما اینجاییم تا احساس بهتری داشته باشید.
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <article
            id="relax"
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(26,58,74,0.08)] ring-1 ring-slate-200/60"
          >
            <div className="flex h-44 items-center justify-center bg-linear-to-br from-teal-400/30 to-cyan-600/20 sm:h-52">
              <span className="text-5xl">🌿</span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-calm-deep">استرس کمتر.</h3>
              <p className="mt-3 text-slate-600">
                آرامش لحظه‌ای برای اضطراب و استرس تا بتوانید دوباره زندگی کنید.
              </p>
              <Link href="#relax" className="mt-6 inline-block text-sm font-semibold text-calm-teal">
                بیشتر بدانید ←
              </Link>
            </div>
          </article>

          <article
            id="sleep"
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(26,58,74,0.08)] ring-1 ring-slate-200/60"
          >
            <div className="flex h-44 items-center justify-center bg-linear-to-br from-indigo-400/30 to-blue-600/20 sm:h-52">
              <span className="text-5xl">🌙</span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-calm-deep">خواب بیشتر.</h3>
              <p className="mt-3 text-slate-600">
                به‌طور طبیعی و آرام بخوابید و در خواب بمانید.
              </p>
              <Link href="#sleep" className="mt-6 inline-block text-sm font-semibold text-calm-teal">
                بیشتر بدانید ←
              </Link>
            </div>
          </article>

          <article
            id="meditation"
            className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(26,58,74,0.08)] ring-1 ring-slate-200/60"
          >
            <div className="flex h-44 items-center justify-center bg-linear-to-br from-amber-300/30 to-orange-500/20 sm:h-52">
              <span className="text-5xl">☀️</span>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-calm-deep">ذهن آگاه.</h3>
              <p className="mt-3 text-slate-600">
                با مقاومت و اعتماد به نفس، فراز و نشیب زندگی را هدایت کنید.
              </p>
              <Link href="#meditation" className="mt-6 inline-block text-sm font-semibold text-calm-teal">
                بیشتر بدانید ←
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
