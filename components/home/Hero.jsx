import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-[28rem] flex-col justify-end overflow-hidden sm:min-h-[32rem] lg:min-h-[36rem]">
      <Image
        src="/pic/01.webp"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#0f2a35]/85 via-[#1a3a4a]/40 to-[#1a3a4a]/25"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <p className="mb-3 text-sm font-medium tracking-wide text-white/80 sm:text-base">
          سلامتی ذهن و بدن
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          آرامش را در هر لحظه تجربه کنید
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
          مدیتیشن، خواب عمیق‌تر و لحظاتی از سکوت — همه در یک جا.
        </p>

        <div
          id="start"
          className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-center"
        >
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="w-full rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-base text-white placeholder:text-white/60 backdrop-blur-sm focus:border-white/50 focus:bg-white/15 focus:outline-none"
            disabled
            aria-label="ایمیل (به زودی)"
          />
          <Link
            href="#"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-3.5 text-center text-base font-semibold text-[#1a3a4a] transition hover:bg-white/90"
          >
            شروع کنید
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/60">
          فرم ثبت‌نام — به زودی فعال می‌شود
        </p>
      </div>
    </section>
  );
}
