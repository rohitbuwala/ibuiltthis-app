import FeaturedProducts from "@/components/landing-page/featured-product";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLunchedProducts from "@/components/landing-page/recently-lunched-products";
import ProductSkeleton from "@/components/products/product-skeleton";
import { LoaderIcon } from "lucide-react";
import { Suspense } from "react";


export default function Home() {
  return (
    <div>
      <HeroSection/>

      <FeaturedProducts/>

      <Suspense
      fallback={<ProductSkeleton/>}
      >

      <RecentlyLunchedProducts/>
      </Suspense>
    </div>
  );
}
