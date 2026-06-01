"use client";

import { useState } from "react";

const faqGroups = [
  {
    title: "عمومی",
    items: [
      {
        id: "q1",
        question: "EFT چیست؟",
        answer:
          "EFT اپلیکیشن سلامت روان است برای مدیریت استرس، خواب بهتر و زندگی شادتر. داستان خواب، مدیتیشن راهنما، موسیقی آرامش‌بخش و تمرین تنفس.",
      },
      {
        id: "q2",
        question: "اشتراک چه چیزهایی دارد؟",
        answer:
          "دسترسی کامل به کتابخانه مدیتیشن، داستان‌های خواب، موسیقی تمرکز و خواب.",
      },
      {
        id: "q3",
        question: "بعد از نصب از کجا شروع کنم؟",
        answer:
          "با برنامه ۷ روز آرامش شروع کنید، بعد ۲۱ روز آرامش. برای استرس، تنفس و اسکن بدن.",
      },
    ],
  },
  {
    title: "خواب",
    items: [
      {
        id: "q4",
        question: "چرا خوابم نمی‌برد؟",
        answer:
          "استرس، عادت بد خواب، محیط نامناسب. اگر ادامه داشت با پزشک صحبت کنید.",
      },
      {
        id: "q5",
        question: "چطور طبیعی بهتر بخوابم؟",
        answer:
          "داستان خواب و صداهای طبیعت و مدیتیشن قبل از خواب را امتحان کنید.",
      },
    ],
  },
  {
    title: "مدیتیشن",
    items: [
      {
        id: "q6",
        question: "مدیتیشن چیست؟",
        answer:
          "آگاه بودن از افکار بدون قضاوت. می‌تواند استرس و خواب را بهتر کند.",
      },
    ],
  },
];

function FaqItem({ item, open, toggle, isLast }) {
  return (
    <div className={!isLast ? "border-b border-slate-200/80" : ""}>
      <button
        type="button"
        onClick={() => toggle(item.id)}
        className="flex w-full items-center justify-between py-5 text-right font-semibold text-calm-deep"
      >
        {item.question}
        <span>{open === item.id ? "−" : "+"}</span>
      </button>

      {open === item.id && (
        <p className="pb-5 text-slate-600">
          {item.answer}
        </p>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [open, setOpen] = useState("");

  function toggle(id) {
    setOpen(open === id ? "" : id);
  }

  return (
    <section className="bg-calm-mist px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-calm-deep sm:text-4xl">
          سوالات متداول
        </h2>

        {faqGroups.map((group) => (
          <div key={group.title} className="mb-10">
            <p className="mb-4 text-sm font-bold text-calm-teal">
              {group.title}
            </p>

            <div className="rounded-2xl bg-white px-5 ring-1 ring-slate-200/80 sm:px-6">
              {group.items.map((item, index) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  open={open}
                  toggle={toggle}
                  isLast={index === group.items.length - 1}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}