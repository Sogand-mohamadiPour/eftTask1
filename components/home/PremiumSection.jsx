import PricingCard from "@/components/home/PricingCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { pricingPlans } from "@/data/pricing";

export default function PremiumSection() {
  return (
    <SectionContainer id="premium" className="bg-[#f7f9fa]">
      <SectionHeading
        title="دوره آزمایشی رایگان EFT Premium را شروع کنید."
        subtitle="پس از دوره آزمایشی، اشتراک سالانه تمدید خودکار دارد. هر زمان قابل لغو است."
      />
      <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-slate-500">
        با ادامه، شرایط استفاده را می‌پذیرید. می‌توانید هر زمان از تنظیمات اشتراک را لغو
        کنید.
      </p>
    </SectionContainer>
  );
}
