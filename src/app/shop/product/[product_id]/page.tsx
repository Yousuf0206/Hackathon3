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

//"use client";

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
"use client"
import React from "react";
import { GetServerSideProps, GetStaticProps } from "next";
import ProductDetailExtraInfoSection from "@/src/components/sections/shop/product-detail/ProductDetailExtraInfoSection";
import ProductDetailRelatedSection from "@/src/components/sections/shop/product-detail/ProductDetailRelatedSection";
import ProductDetailShowcaseSection from "@/src/components/sections/shop/product-detail/ProductDetailShowcaseSection";
import ProductDetailTopSection from "@/src/components/sections/shop/product-detail/ProductDetailTopSection";
import { Separator } from "@/src/components/ui/separator";

interface PageProps {
  params: {
    product_id: string;
  };
}

const ProductDetailPage: React.FC<PageProps> = ({ params }) => {
  return (
    <div className="mt-24 lg:mt-8">
      <ProductDetailTopSection product_id={"Detailed Page"} />
      <div className="mt-8 px-4 md:px-[50px] lg:px-[100px]">
        <ProductDetailShowcaseSection productId={params.product_id} />
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

interface GetStaticPropsContext {
  params: {
    product_id: string;
  };
}

interface GetStaticPropsResult {
  props: {
    params: {
      product_id: string;
    };
  };
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { product_id } = context.params as { product_id: string };

  return {
    props: {
      params: {
        product_id,
      },
    },
  };
};

export default ProductDetailPage;