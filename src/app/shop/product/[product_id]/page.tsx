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
import React from 'react';
import ProductDetailPageClient from '../[product_id]/ProductDetailPageClient';

interface PageProps {
  params: {
    product_id: string;
  };
}

const ProductDetailPage: React.FC<PageProps> = ({ params }) => {
  return <ProductDetailPageClient product_id={params.product_id} />;
};

// Using generateStaticParams to generate static params for dynamic routes
export async function generateStaticParams() {
  try {
    const products = await fetch('https://template6-six.vercel.app/api/products')
      .then(res => res.json());

    // Map through the products and return the static paths
    return products.map((product: { product_id: string }) => ({
      product_id: product.product_id,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export default ProductDetailPage;
