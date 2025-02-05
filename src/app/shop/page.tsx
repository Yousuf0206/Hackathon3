// import ShopBannerSection from "@/src/components/sections/shop/ShopBannerSection";
// import ShopFilterSection from "@/src/components/sections/shop/ShopFilterSection";
// import ShopHeroSection from "@/src/components/sections/shop/ShopHeroSection";
// import ShopProductSection from "@/src/components/sections/shop/ShopProductSection";

// function ShopPage() {
//     return (
//         <div>
//             <ShopHeroSection />
//             <ShopFilterSection />
//             <div className="mx-4 md:mx-[130px]">
//                 <ShopProductSection />
//             </div>
//             <ShopBannerSection />
//         </div>
//     );
// }

// export default ShopPage;


import ShopBannerSection from "../../components/sections/shop/ShopBannerSection";
import ShopFilterSection from "../../components/sections/shop/ShopFilterSection";
import ShopHeroSection from "../../components/sections/shop/ShopHeroSection";
import ShopProductSection from "../../components/sections/shop/ShopProductSection";
import { FilterProvider } from "../../context/filterContext";

function ShopPage() {
    return (
        <div>
            <ShopHeroSection />
            <FilterProvider>
                <ShopFilterSection />
                <div className="mx-4 md:mx-[130px]">
                    <ShopProductSection />
                </div>
            </FilterProvider>
            <ShopBannerSection />
        </div>
    );
}

export default ShopPage;