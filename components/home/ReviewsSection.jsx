import ReviewCard from "@/components/home/ReviewCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { reviews } from "@/data/reviews";

export default function ReviewsSection() {
  return (
    <SectionContainer className="bg-white">
      <SectionHeading title="بیش از ۲ میلیون نظر ۵ ستاره." />
      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </div>
    </SectionContainer>
  );
}
