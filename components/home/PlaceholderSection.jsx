export default function PlaceholderSection({ id, title, description, variant = "muted" }) {
  const bgClass = variant === "muted" ? "bg-[#f7f9fa]" : "bg-white";

  return (
    <section
      id={id}
      className={`border-t border-slate-200/80 px-5 py-20 sm:px-8 lg:px-10 ${bgClass}`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300/80 bg-slate-50/50 px-6 py-16 text-center">
          <h2 className="text-2xl font-bold text-[#1a3a4a] sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-md text-slate-500">{description}</p>
          <span className="mt-6 inline-block rounded-full bg-slate-200/80 px-4 py-1.5 text-xs font-medium text-slate-600">
            محتوا به زودی
          </span>
        </div>
      </div>
    </section>
  );
}
