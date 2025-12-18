import FeaturedProducts from "@/components/landing-page/featured-product";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLunchedProducts from "@/components/landing-page/recently-lunched-products";


export default function Home() {
  return (
    <div>
      <HeroSection/>

      <FeaturedProducts/>

      <RecentlyLunchedProducts/>
    </div>
  );
}
