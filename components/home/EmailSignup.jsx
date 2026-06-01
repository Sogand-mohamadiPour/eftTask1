"use client";

import Link from "next/link";

const inputBase =
  "w-full rounded-full border border-white/25 bg-white/10 px-5 py-3.5 text-base text-white placeholder:text-white/55 backdrop-blur-sm transition-all duration-200 ease-out";

const inputFocus =
  "focus:border-white focus:bg-white/25 focus:shadow-[0_0_0_4px_rgba(255,255,255,0.2)] focus:outline-none focus:placeholder:text-white/40 sm:focus:scale-[1.01]";

export default function EmailSignup() {
  return (
    <>
      <div
        id="start"
        className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
      >
        <input
          type="email"
          name="email"
          placeholder="ایمیل خود را وارد کنید"
          className={`${inputBase} ${inputFocus}`}
          aria-label="ایمیل"
        />
        <Link
          href="#premium"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-white px-8 py-3.5 text-center text-base font-semibold text-[#1a3a4a] transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          امتحان رایگان
        </Link>
      </div>
      <p className="mt-4 text-sm text-white/60">
        قبلاً حساب دارید؟{" "}
        <Link href="#login" className="underline underline-offset-2 hover:text-white/90">
          وارد شوید
        </Link>
      </p>
    </>
  );
}
