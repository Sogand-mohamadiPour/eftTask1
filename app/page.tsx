import BlogSection from "@/components/home/BlogSection";
import FaqSection from "@/components/home/FaqSection";
import HelpSection from "@/components/home/HelpSection";
import Hero from "@/components/home/Hero";
import PremiumSection from "@/components/home/PremiumSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import SiteFooter from "@/components/home/SiteFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <HelpSection />
      <ReviewsSection />
      <PremiumSection />
      <BlogSection />
      <FaqSection />
      <SiteFooter />
    </main>
  );
}
