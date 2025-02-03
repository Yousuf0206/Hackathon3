import Hero from "@/src/components/common/Hero";
import ShopBannerSection from "@/src/components/sections/shop/ShopBannerSection";
import GetInTouch from "./sections/get-in-touch";

export default function ContactPage() {
  return (
    <>
      <Hero title="Contact"/>

      <GetInTouch />

      <ShopBannerSection/>
    </>
  );
}
