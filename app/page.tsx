import CtaSection from "@/components/home/CtaSection";
import Hero from "@/components/home/Hero";
import PlaceholderSection from "@/components/home/PlaceholderSection";
import { placeholderSections } from "@/data/homeSections";

export default function Home() {
  return (
    <main>
      <Hero />
      {placeholderSections.map((section, index) => (
        <PlaceholderSection
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
          variant={index % 2 === 0 ? "muted" : "plain"}
        />
      ))}
      <CtaSection />
    </main>
  );
}
