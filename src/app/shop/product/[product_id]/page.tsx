// "use client";

// import React from "react";
// import ProductDetailExtraInfoSection from "@/src/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
// import ProductDetailRelatedSection from "@/src/components/sections/shop/product-detail/ProductDetailRelatedSection";
// import ProductDetailShowcaseSection from "@/src/components/sections/shop/product-detail/ProductDetailShowcaseSection";
// import ProductDetailTopSection from "@/src/components/sections/shop/product-detail/ProductDetailTopSection";
// import { Separator } from "@/src/components/ui/separator";

// export default function ProductDetailPage({
//   params,
// }: {
//   params: {
//     product_id: string;
//   };
// }) {
//   return (
//     <div className="mt-24 lg:mt-8">
//       <ProductDetailTopSection product_id={"Detailed Page"} />
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailShowcaseSection productId={params.product_id} />
//       </div>
//       <div className="my-[40px]">
//         <Separator />
//       </div>
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailExtraInfoSection />
//       </div>

//       <div className="my-[40px]">
//         <Separator />
//       </div>
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailRelatedSection />
//       </div>
//     </div>
//   );
// }

// "use client";

// import React from "react";
// import ProductDetailExtraInfoSection from "@/src/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
// import ProductDetailRelatedSection from "@/src/components/sections/shop/product-detail/ProductDetailRelatedSection";
// import ProductDetailShowcaseSection from "@/src/components/sections/shop/product-detail/ProductDetailShowcaseSection";
// import ProductDetailTopSection from "@/src/components/sections/shop/product-detail/ProductDetailTopSection";
// import { Separator } from "@/src/components/ui/separator";

// interface PageProps {
//   params: {
//     product_id: string;
//   };
// }

// const ProductDetailPage: React.FC<PageProps> = ({ params }) => {
//   return (
//     <div className="mt-24 lg:mt-8">
//       <ProductDetailTopSection product_id={"Detailed Page"} />
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailShowcaseSection productId={params.product_id} />
//       </div>
//       <div className="my-[40px]">
//         <Separator />
//       </div>
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailExtraInfoSection />
//       </div>
//       <div className="my-[40px]">
//         <Separator />
//       </div>
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailRelatedSection />
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

// "use client";

// import React from "react";
// import ProductDetailExtraInfoSection from "@/src/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
// import ProductDetailRelatedSection from "@/src/components/sections/shop/product-detail/ProductDetailRelatedSection";
// import ProductDetailShowcaseSection from "@/src/components/sections/shop/product-detail/ProductDetailShowcaseSection";
// import ProductDetailTopSection from "@/src/components/sections/shop/product-detail/ProductDetailTopSection";
// import { Separator } from "@/src/components/ui/separator";

// export default function ProductDetailPage({
//   params,
// }: {
//   params: { product_id: string };
// }) {
//   return (
//     <div className="mt-24 lg:mt-8">
//       <ProductDetailTopSection product_id={"Detailed Page"} />
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailShowcaseSection productId=  {params.product_id} />
//       </div>
//       <div className="my-[40px]">
//         <Separator />
//       </div>
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailExtraInfoSection />
//       </div>
//       <div className="my-[40px]">
//         <Separator />
//       </div>
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailRelatedSection />
//       </div>
//     </div>
//   );
// }
// "use client";

// import React from "react";
// import ProductDetailExtraInfoSection from "@/src/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
// import ProductDetailRelatedSection from "@/src/components/sections/shop/product-detail/ProductDetailRelatedSection";
// import ProductDetailShowcaseSection from "@/src/components/sections/shop/product-detail/ProductDetailShowcaseSection";
// import ProductDetailTopSection from "@/src/components/sections/shop/product-detail/ProductDetailTopSection";
// import { Separator } from "@/src/components/ui/separator";

// export default function ProductDetailPage({
//   params,
// }: {
//   params: {
//     product_id: string;
//   };
// }) {
//   return (
//     <div className="mt-24 lg:mt-8">
//       <ProductDetailTopSection product_id={"Detailed Page"} />
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailShowcaseSection productId={params.product_id} />
//       </div>
//       <div className="my-[40px]">
//         <Separator />
//       </div>
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailExtraInfoSection />
//       </div>

//       <div className="my-[40px]">
//         <Separator />
//       </div>
//       <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
//         <ProductDetailRelatedSection />
//       </div>
//     </div>
//   );
// }

// [product_id]/page.tsx
// [product_id].tsx (in pages directory)

// app/shop/product/[product_id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import ProductDetailExtraInfoSection from "@/src/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
import ProductDetailRelatedSection from "@/src/components/sections/shop/product-detail/ProductDetailRelatedSection";
import ProductDetailShowcaseSection from "@/src/components/sections/shop/product-detail/ProductDetailShowcaseSection";
import ProductDetailTopSection from "@/src/components/sections/shop/product-detail/ProductDetailTopSection";
import { Separator } from "@/src/components/ui/separator";
import Image from "next/image"; // Next.js Image component
import { useParams } from "next/navigation"; // Import useParams from next/navigation

// Define the Product interface to avoid using 'any'
interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  discountPercentage: number;
  isNew: boolean;
  quantity?: number;
  tags: string[];
}

// Product Detail Page Component
export default function ProductDetailPage() {
  const { product_id } = useParams(); // Use useParams to get product_id from the URL
  const [productData, setProductData] = useState<IProduct | null>(null); // Use IProduct type for the state

  // Use useEffect to fetch product data when the product_id changes
  useEffect(() => {
    if (product_id) {
      // Replace with actual API call to fetch the product data
      fetch(`/api/products/${product_id}`)
        .then((response) => response.json())
        .then((data: IProduct) => setProductData(data)) // Correctly type the response
        .catch((error) => console.error("Error fetching product data:", error));
    }
  }, [product_id]);

  if (!productData) {
    return <div>Loading...</div>; // Show a loading state until data is available
  }

  return (
    <div className="mt-24 lg:mt-8">
      <ProductDetailTopSection product_id={product_id as string} />

      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailShowcaseSection productId={product_id as string} />
      </div>

      <div className="my-[40px]">
        <Separator />
      </div>

      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailExtraInfoSection product_id={product_id as string} />
      </div>

      <div className="my-[40px]">
        <Separator />
      </div>

      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailRelatedSection />
      </div>

      {/* Fixed Image */}
      <div className="mt-8 flex justify-center">
        <Image
          src="/images/banner_icon_1.png"
          alt="Banner Icon"
          width={40}
          height={40}
        />
      </div>
    </div>
  );
}