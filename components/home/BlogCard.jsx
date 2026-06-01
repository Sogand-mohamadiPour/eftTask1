import Link from "next/link";

export default function BlogCard({ title, excerpt, href, category }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200/80 transition hover:shadow-lg">
      <div
        className="h-40 bg-gradient-to-br from-[#2d6a7e]/20 to-[#1a3a4a]/30 sm:h-48"
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-wide text-[#2d6a7e]">
          {category}
        </span>
        <h3 className="mt-2 text-xl font-bold text-[#1a3a4a] group-hover:text-[#2d6a7e]">
          <Link href={href}>{title}</Link>
        </h3>
        <p className="mt-3 flex-1 text-slate-600">{excerpt}</p>
        <Link
          href={href}
          className="mt-4 text-sm font-semibold text-[#2d6a7e] hover:text-[#245663]"
        >
          مطالعه بیشتر
        </Link>
      </div>
    </article>
  );
}
