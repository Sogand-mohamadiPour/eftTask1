export default function SectionHeading({ eyebrow, title, subtitle, align = "center" }) {
  const alignClass =
    align === "center" ? "mx-auto text-center" : "text-right";

  return (
    <header className={`mb-12 max-w-3xl sm:mb-14 ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-2 text-sm font-medium text-[#2d6a7e]">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-[#1a3a4a] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{subtitle}</p>
      ) : null}
    </header>
  );
}
