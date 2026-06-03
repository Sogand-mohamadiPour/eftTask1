import Header from "@/components/Header";
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EFT",
  description: "مدیتیشن، خواب و آرامش",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" className={vazirmatn.variable}>
      <body className={`${vazirmatn.className} min-h-full antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
