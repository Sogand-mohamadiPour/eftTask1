import EmailSignup from "@/components/home/EmailSignup";
import Image from "next/image";

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
          اپلیکیشن شماره ۱ برای خواب، مدیتیشن و آرامش
        </p>
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          ذهنت را آرام کن. زندگی‌ات را تغییر بده.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
          مدیتیشن، خواب عمیق‌تر و لحظاتی از سکوت — همه در یک جا.
        </p>
        <EmailSignup />
      </div>
    </section>
  );
}
