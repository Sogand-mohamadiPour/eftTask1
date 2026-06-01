"use client";

import Logo from "@/components/Logo";
import HeaderNav from "@/components/header/HeaderNav";
import { useScrolledPast } from "@/hooks/useScrolledPast";

const SCROLL_THRESHOLD = 72;

export default function Header() {
  const scrolled = useScrolledPast(SCROLL_THRESHOLD);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-white/95 shadow-[0_2px_24px_rgba(0,0,0,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Logo scrolled={scrolled} />
        <HeaderNav scrolled={scrolled} />
      </div>
    </header>
  );
}
