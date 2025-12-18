import { CalendarIcon, RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";

import ProductCard from "../products/product-card";
import EmptyState from "../common/empty-state";

export default function RecentlyLunchedProducts() {
   const recentlyLaunchedProducts = [
    {
        id: 1,
        name: "ParityKit",
        description: "A toolkit for creating parity products",
        tags: ["SaaS", "Pricing", "global"],
        votes: 615,
        isFeatured: true,
    },
    {
        id: 2,
        name: "modern Full Stack Next.js course",
        description: "Learn to build production-ready full stack apps with Next.js",
        tags: ["Next.js", "Full-Stack", "Course"],
        votes: 125,
        isFeatured: false,
    },
]

  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
    <SectionHeader
        title="Recently Launched"
        icon={RocketIcon}
        description="Discover the latest products from our community"
    />
        {recentlyLaunchedProducts.length > 0 ? (
          <div className="grid-wrapper">
            {recentlyLaunchedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={CalendarIcon}
          />
        )}
      </div>
     
    </section>
  );
}