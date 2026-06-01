import Link from "next/link";

export default function BenefitCard({
  id,
  title,
  description,
  href,
  accent,
  icon,
}) {
  return (
    <article
      id={id}
      className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_40px_rgba(26,58,74,0.08)] ring-1 ring-slate-200/60"
    >
      <div
        className={`flex h-44 items-center justify-center bg-linear-to-br ${accent} sm:h-52`}
        aria-hidden
      >
        <span className="text-5xl sm:text-6xl">{icon}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-xl font-bold text-calm-deep sm:text-2xl">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-slate-600">{description}</p>
        <Link
          href={href}
          className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-calm-teal transition hover:text-[#245663]"
        >
          بیشتر بدانید
          <span className="me-1.5" aria-hidden>
            ←
          </span>
        </Link>
      </div>
    </article>
  );
}
