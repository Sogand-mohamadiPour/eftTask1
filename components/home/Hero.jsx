import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex min-h-112 flex-col justify-end overflow-hidden sm:min-h-128 lg:min-h-144">
      <Image
        src="/pic/01.webp"
        alt="آرامش"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#0f2a35]/85 via-calm-deep/40 to-calm-deep/25" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:px-10 lg:pb-24">
        <p className="mb-3 text-sm font-medium tracking-wide text-white/80 sm:text-base">
          اپلیکیشن شماره ۱ برای خواب، مدیتیشن و آرامش
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          ذهنت را آرام کن. زندگی‌ات را تغییر بده.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
          مدیتیشن، خواب عمیق‌تر و لحظاتی از سکوت — همه در یک جا.
        </p>

        <div
          id="start"
          className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
        >
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="w-full rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-white placeholder:text-white/55 backdrop-blur-sm focus:border-white focus:bg-white/25 focus:outline-none focus:ring-4 focus:ring-white/20"
          />
          <Link
            href="#premium"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-calm-deep hover:bg-white/90"
          >
            امتحان رایگان
          </Link>
        </div>
        <p className="mt-4 text-sm text-white/60">
          حساب کاربری دارید؟
          <Link href="#login" className="mx-1 underline hover:text-white/90">
            وارد شوید
          </Link>
        </p>
      </div>
    </section>
  );
}
