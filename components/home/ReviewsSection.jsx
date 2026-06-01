"use client";

import { useEffect, useState } from "react";

const reviews = [
  {
    name: "سارا",
    city: "تهران",
    text: "وقتی نمی‌توانم بخوابم، این برنامه را روشن می‌کنم و ظرف چند دقیقه خوابم می‌برد.",
  },
  {
    name: "امیر",
    city: "اصفهان",
    text: "ذهنم خیلی شلوغ است. حالا تمرین روزانه برایم شفابخش و آرامش‌بخش شده.",
  },
  {
    name: "نیلوفر",
    city: "شیراز",
    text: "زندگی‌ام به شکل غیرقابل توصیفی عوض شده. مقاوم‌ترم و به خودم نزدیک‌ترم.",
  },
  {
    name: "رضا",
    city: "مشهد",
    text: "هر شب یک داستان خواب گوش می‌دهم و خیلی زودتر به خواب می‌روم.",
  },
  {
    name: "مریم",
    city: "تبریز",
    text: "تمرین تنفس قبل امتحان واقعاً بهم کمک کرد آرام بمانم.",
  },
  {
    name: "کامران",
    city: "کرج",
    text: "بهترین اپی است که برای آرامش امتحان کردم. پیشنهاد می‌کنم.",
  },
];

const perPage = 3;
const pages = [];
for (let i = 0; i < reviews.length; i += perPage) {
  pages.push(reviews.slice(i, i + perPage));
}

export default function ReviewsSection() {
  const [page, setPage] = useState(0);

  function goNext() {
    setPage((p) => (p + 1) % pages.length);
  }

  function goPrev() {
    setPage((p) => (p - 1 + pages.length) % pages.length);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((p) => (p + 1) % pages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-calm-deep sm:text-4xl">
          بیش از نیم میلیون نظر ۵ ستاره!
        </h2>

        <div className="relative px-10 sm:px-12">
          <button
            type="button"
            onClick={goPrev}
            className="absolute top-1/2 left-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-calm-deep shadow-sm hover:bg-slate-50"
            aria-label="قبلی"
          >
            &gt;
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute top-1/2 right-0 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-calm-deep shadow-sm hover:bg-slate-50"
            aria-label="بعدی"
          >
            &lt;
          </button>

          <div className="overflow-hidden" dir="ltr">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="grid w-full shrink-0 grid-cols-1 gap-6 md:grid-cols-3"
                  dir="rtl"
                >
                  {slide.map((review) => (
                    <div
                      key={review.name}
                      className="rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(26,58,74,0.06)] ring-1 ring-slate-200/70 sm:p-8"
                    >
                      <p className="text-amber-400">★★★★★</p>
                      <p className="mt-4 text-lg text-slate-700">
                        {review.text}
                      </p>
                      <p className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">
                        <b className="text-calm-deep">{review.name}</b> -{" "}
                        {review.city}
                      </p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
