import Image from "next/image";
import Link from "next/link";

export default function Logo({ scrolled = false }) {
  return (
    <Link href="/" className="relative z-10 flex shrink-0 items-center">
      <span
        className={`inline-flex items-center rounded-lg px-2 py-1 transition-all duration-300 ${
          scrolled ? "bg-transparent" : "bg-white/95 shadow-md ring-1 ring-white/40"
        }`}
      >
        <Image
          src="/pic/02.jpg"
          alt="لوگو"
          width={120}
          height={40}
          className="h-9 w-auto object-contain sm:h-10"
        />
      </span>
    </Link>
  );
}
