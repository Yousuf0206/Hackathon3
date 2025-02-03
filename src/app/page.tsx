import BrowseTheRangeSection from "@/src/components/sections/BrowseTheRangeSection";
import SlickRoomSLider from "@/src/components/sections/Hero-Slider";
import HeroSection from "@/src/components/sections/HeroSection";
import OurProductSection from "@/src/components/sections/OurProductSection";
import ShareSetupSection from "@/src/components/sections/ShareSetupSection";

export default async function Home() {
  return (
    <main className="bg-white">
      <HeroSection />
      <div className="flex flex-col gap-[56px] mx-4 md:mx-[130px]">
        <BrowseTheRangeSection />
        <OurProductSection />
      </div>
      <div>
        <SlickRoomSLider />
      </div>
      <div className="mt-[56px]">
        <ShareSetupSection />
      </div>
    </main>
  );
}