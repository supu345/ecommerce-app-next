import Master from "@/components/master/Master";
import Features from "@/components/features/features";
import Slider from "@/components/product/slider";
import FeaturesSkeleton from "@/skeleton/features-skeleton";
import { Suspense } from "react";
import CategoriesSkeleton from "@/skeleton/categories-skeleton";
import Categories from "@/components/product/categories";
import BrandsSkeleton from "@/skeleton/brands-skeleton";
import Brands from "@/components/product/brands";
import Products from "@/components/product/products";

export default function Home() {
  return (
    <Master>
      <Slider />
      <Suspense fallback={<FeaturesSkeleton />}>
        <Features />
      </Suspense>
      <Suspense fallback={<CategoriesSkeleton />}>
        <Categories />
      </Suspense>
      <Products />
      <Suspense fallback={<BrandsSkeleton />}>
        <Brands />
      </Suspense>
    </Master>
  );
}
