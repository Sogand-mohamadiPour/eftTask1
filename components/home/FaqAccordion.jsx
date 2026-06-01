"use client";

import { useState } from "react";

function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-200/80 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-right text-base font-semibold text-[#1a3a4a] transition hover:text-[#2d6a7e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2d6a7e] sm:text-lg"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-lg transition-transform duration-200 ${
            isOpen ? "rotate-45 bg-[#2d6a7e]/10 text-[#2d6a7e]" : ""
          }`}
          aria-hidden
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${
          isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="leading-relaxed text-slate-600">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FaqAccordion({ categories }) {
  const [openId, setOpenId] = useState(null);

  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.id}>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-[#2d6a7e]">
            {category.title}
          </h3>
          <div className="rounded-2xl bg-white px-5 ring-1 ring-slate-200/80 sm:px-6">
            {category.items.map((item) => {
              const itemId = `${category.id}-${item.id}`;
              return (
                <FaqItem
                  key={itemId}
                  question={item.question}
                  answer={item.answer}
                  isOpen={openId === itemId}
                  onToggle={() =>
                    setOpenId((current) => (current === itemId ? null : itemId))
                  }
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
