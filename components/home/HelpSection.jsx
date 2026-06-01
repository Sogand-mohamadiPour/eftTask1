import BenefitCard from "@/components/home/BenefitCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { benefits } from "@/data/benefits";

export default function HelpSection() {
  return (
    <SectionContainer className="bg-[#f7f9fa]">
      <SectionHeading
        title="ما اینجاییم تا احساس بهتری داشته باشید."
      />
      <div className="grid gap-8 md:grid-cols-3">
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.id} {...benefit} />
        ))}
      </div>
    </SectionContainer>
  );
}
