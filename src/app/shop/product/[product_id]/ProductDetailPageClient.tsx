"use client";

import React from "react";
import ProductDetailExtraInfoSection from "@/src/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
import ProductDetailRelatedSection from "@/src/components/sections/shop/product-detail/ProductDetailRelatedSection";
import ProductDetailShowcaseSection from "@/src/components/sections/shop/product-detail/ProductDetailShowcaseSection";
import ProductDetailTopSection from "@/src/components/sections/shop/product-detail/ProductDetailTopSection";
import { Separator } from "@/src/components/ui/separator";

interface PageProps {
  product_id: string;
}

const ProductDetailPageClient: React.FC<PageProps> = ({ product_id }) => {
  return (
    <div className="mt-24 lg:mt-8">
      <ProductDetailTopSection product_id={"Detailed Page"} />
      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailShowcaseSection productId={product_id} />
      </div>
      <div className="my-[40px]">
        <Separator />
      </div>
      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailExtraInfoSection />
      </div>
      <div className="my-[40px]">
        <Separator />
      </div>
      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailRelatedSection />
      </div>
    </div>
  );
};

export default ProductDetailPageClient;