import Hero from "@/src/components/common/Hero";
import { CheckoutBillingForm } from "@/src/components/forms/CheckoutBillingForm";

import CheckoutDetailSection from "@/src/components/sections/checkout/CheckoutDetailSection";
import ShopBannerSection from "@/src/components/sections/shop/ShopBannerSection";

export default function CheckoutPage() {
  return (
    <div>
      <Hero title="Checkout" />
      <div className="mx-4 md:mx-[130px] flex gap-8 flex-col md:flex-row mt-[98px]">
        <CheckoutBillingForm />
        <CheckoutDetailSection />
      </div>
      <ShopBannerSection />
    </div>
  );
}