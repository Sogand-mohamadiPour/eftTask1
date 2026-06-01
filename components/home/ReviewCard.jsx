function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${count} از ۵ ستاره`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

export default function ReviewCard({ quote, author, location }) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(26,58,74,0.06)] ring-1 ring-slate-200/70 sm:p-8">
      <StarRow />
      <p className="mt-4 flex-1 text-lg leading-relaxed text-slate-700">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-6 border-t border-slate-100 pt-4 text-sm text-slate-500">
        <cite className="not-italic font-semibold text-[#1a3a4a]">{author}</cite>
        <span className="mx-1.5 text-slate-300">·</span>
        <span>{location}</span>
      </footer>
    </blockquote>
  );
}
