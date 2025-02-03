import ShopBannerSection from "@/src/components/sections/shop/ShopBannerSection";
import ShopFilterSection from "@/src/components/sections/shop/ShopFilterSection";
import ShopHeroSection from "@/src/components/sections/shop/ShopHeroSection";
import ShopProductSection from "@/src/components/sections/shop/ShopProductSection";

function ShopPage() {
    return (
        <div>
            <ShopHeroSection />
            <ShopFilterSection />
            <div className="mx-4 md:mx-[130px]">
                <ShopProductSection />
            </div>
            <ShopBannerSection />
        </div>
    );
}

export default ShopPage;