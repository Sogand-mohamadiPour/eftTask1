import BlogCard from "@/components/home/BlogCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blogPosts";

export default function BlogSection() {
  return (
    <SectionContainer id="music" className="bg-white">
      <SectionHeading
        title="وبلاگ ما را برای منابع بیشتر بخوانید."
        subtitle="مدیتیشن، خواب، استرس و سلامت روان."
      />
      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </SectionContainer>
  );
}
