import Link from "next/link";

export default function PricingCard({
  name,
  price,
  unit,
  compareAt,
  perMonth,
  badge,
  cta,
  featured = false,
}) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-6 sm:p-8 ${
        featured
          ? "border-[#2d6a7e] bg-[#1a3a4a] text-white shadow-xl"
          : "border-slate-200 bg-white text-[#1a3a4a] shadow-sm"
      }`}
    >
      {badge ? (
        <span
          className={`mb-4 w-fit rounded-full px-3 py-1 text-xs font-semibold ${
            featured ? "bg-white/15 text-white" : "bg-[#2d6a7e]/10 text-[#2d6a7e]"
          }`}
        >
          {badge}
        </span>
      ) : null}
      <h3 className={`text-lg font-semibold ${featured ? "text-white/90" : "text-slate-600"}`}>
        {name}
      </h3>
      <div className="mt-3 flex flex-wrap items-baseline gap-2">
        {compareAt ? (
          <span
            className={`text-sm line-through ${
              featured ? "text-white/50" : "text-slate-400"
            }`}
          >
            {compareAt}
          </span>
        ) : null}
        <span className="text-3xl font-bold sm:text-4xl">{price}</span>
        <span className={`text-sm ${featured ? "text-white/70" : "text-slate-500"}`}>
          {unit}
        </span>
      </div>
      {perMonth ? (
        <p className={`mt-2 text-sm ${featured ? "text-white/65" : "text-slate-500"}`}>
          {perMonth}
        </p>
      ) : null}
      <Link
        href="#start"
        className={`mt-8 inline-flex justify-center rounded-full px-6 py-3.5 text-center text-sm font-semibold transition ${
          featured
            ? "bg-white text-[#1a3a4a] hover:bg-white/90"
            : "bg-[#2d6a7e] text-white hover:bg-[#245663]"
        }`}
      >
        {cta}
      </Link>
    </div>
  );
}
