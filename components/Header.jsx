"use client";

import Image from "next/image";
import Link from "next/link";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export default function Header() {
  const navItems = [
    { href: "#sleep", label: "خواب" },
    { href: "#meditation", label: "مدیتیشن" },
    { href: "#relax", label: "آرامش" },
    { href: "#music", label: "موسیقی" },
  ];

  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 150;

  return (
    <header
      className={
        isScrolled
          ? "fixed inset-x-0 top-0 z-50 bg-white/95 shadow-[0_2px_24px_rgba(0,0,0,0.08)] backdrop-blur-md transition-all duration-300"
          : "fixed inset-x-0 top-0 z-50 bg-transparent transition-all duration-300"
      }
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          {isScrolled ? (
            <Image
              src="/pic/02.jpg"
              alt="لوگو"
              width={120}
              height={40}
              className="h-9 w-auto sm:h-10"
            />
          ) : (
            <span className="rounded-lg bg-white/95 px-2 py-1 shadow-md ring-1 ring-white/40">
              <Image
                src="/pic/02.jpg"
                alt="لوگو"
                width={120}
                height={40}
                className="h-9 w-auto sm:h-10"
              />
            </span>
          )}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                isScrolled
                  ? "text-sm font-medium text-slate-700"
                  : "text-sm font-medium text-white/90"
              }
            >
              {item.label}
            </Link>
          ))}
        </nav>
        

        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            href="#login"
            className={
              isScrolled
                ? "hidden text-sm font-medium text-slate-700 sm:inline"
                : "hidden text-sm font-medium text-white/90 sm:inline"
            }
          >
            ورود
          </Link>
          {isScrolled ? (
            <Link
              href="#start"
              className="rounded-full bg-calm-teal px-4 py-2 text-sm font-semibold text-white sm:px-5"
            >
              شروع رایگان
            </Link>
          ) : (
            <Link
              href="#start"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-calm-deep sm:px-5"
            >
              شروع رایگان
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
