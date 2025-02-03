import Hero from "@/src/components/common/Hero";
import BlogSection from "./sections/blog-section";
import RecentBlog from "../../../../recent-blog";

export default function BlogPage() {
  return (
    <>
      <Hero title="Blog" />
      <div className="w-screen flex justify-center">
        <section className="w-[90%] flex flex-col lg:flex-row gap-[60px] py-[60px]">
          <BlogSection />
          <RecentBlog />
        </section>
      </div>
    </>
  );
}
