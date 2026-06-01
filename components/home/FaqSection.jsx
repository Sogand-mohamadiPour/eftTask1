import FaqAccordion from "@/components/home/FaqAccordion";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqCategories } from "@/data/faq";

export default function FaqSection() {
  return (
    <SectionContainer className="bg-[#f7f9fa]">
      <SectionHeading title="سوالات متداول" />
      <FaqAccordion categories={faqCategories} />
    </SectionContainer>
  );
}
