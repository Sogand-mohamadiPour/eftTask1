"use client";

import { useState } from "react";

export default function FaqSection() {
  const [open, setOpen] = useState("");

  function toggle(id) {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  }

  return (
    <section className="bg-[#f7f9fa] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-calm-deep sm:text-4xl">
          سوالات متداول
        </h2>

        <p className="mb-4 text-sm font-bold text-calm-teal">عمومی</p>
        <div className="mb-10 rounded-2xl bg-white px-5 ring-1 ring-slate-200/80 sm:px-6">
          <div className="border-b border-slate-200/80">
            <button
              type="button"
              onClick={() => toggle("q1")}
              className="flex w-full items-center justify-between py-5 text-right font-semibold text-calm-deep"
            >
              EFT چیست؟
              <span>{open === "q1" ? "−" : "+"}</span>
            </button>
            {open === "q1" && (
              <p className="pb-5 text-slate-600">
                EFT اپلیکیشن سلامت روان است برای مدیریت استرس، خواب بهتر و زندگی شادتر.
                داستان خواب، مدیتیشن راهنما، موسیقی آرامش‌بخش و تمرین تنفس.
              </p>
            )}
          </div>

          <div className="border-b border-slate-200/80">
            <button
              type="button"
              onClick={() => toggle("q2")}
              className="flex w-full items-center justify-between py-5 text-right font-semibold text-calm-deep"
            >
              اشتراک چه چیزهایی دارد؟
              <span>{open === "q2" ? "−" : "+"}</span>
            </button>
            {open === "q2" && (
              <p className="pb-5 text-slate-600">
                دسترسی کامل به کتابخانه مدیتیشن، داستان‌های خواب، موسیقی تمرکز و خواب.
              </p>
            )}
          </div>

          <div>
            <button
              type="button"
              onClick={() => toggle("q3")}
              className="flex w-full items-center justify-between py-5 text-right font-semibold text-calm-deep"
            >
              بعد از نصب از کجا شروع کنم؟
              <span>{open === "q3" ? "−" : "+"}</span>
            </button>
            {open === "q3" && (
              <p className="pb-5 text-slate-600">
                با برنامه ۷ روز آرامش شروع کنید، بعد ۲۱ روز آرامش. برای استرس، تنفس و اسکن بدن.
              </p>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm font-bold text-calm-teal">خواب</p>
        <div className="mb-10 rounded-2xl bg-white px-5 ring-1 ring-slate-200/80 sm:px-6">
          <div className="border-b border-slate-200/80">
            <button
              type="button"
              onClick={() => toggle("q4")}
              className="flex w-full items-center justify-between py-5 text-right font-semibold text-calm-deep"
            >
              چرا خوابم نمی‌برد؟
              <span>{open === "q4" ? "−" : "+"}</span>
            </button>
            {open === "q4" && (
              <p className="pb-5 text-slate-600">
                استرس، عادت بد خواب، محیط نامناسب. اگر ادامه داشت با پزشک صحبت کنید.
              </p>
            )}
          </div>

          <div>
            <button
              type="button"
              onClick={() => toggle("q5")}
              className="flex w-full items-center justify-between py-5 text-right font-semibold text-calm-deep"
            >
              چطور طبیعی بهتر بخوابم؟
              <span>{open === "q5" ? "−" : "+"}</span>
            </button>
            {open === "q5" && (
              <p className="pb-5 text-slate-600">
                داستان خواب و صداهای طبیعت و مدیتیشن قبل از خواب را امتحان کنید.
              </p>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm font-bold text-calm-teal">مدیتیشن</p>
        <div className="rounded-2xl bg-white px-5 ring-1 ring-slate-200/80 sm:px-6">
          <div>
            <button
              type="button"
              onClick={() => toggle("q6")}
              className="flex w-full items-center justify-between py-5 text-right font-semibold text-calm-deep"
            >
              مدیتیشن چیست؟
              <span>{open === "q6" ? "−" : "+"}</span>
            </button>
            {open === "q6" && (
              <p className="pb-5 text-slate-600">
                آگاه بودن از افکار بدون قضاوت. می‌تواند استرس و خواب را بهتر کند.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
