"use cache";
import SectionHeader from "@/components/common/section-header";
import { ArrowUpRight, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProducts();
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-muted/20">
          <div className="wrapper">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-8">
                <SectionHeader 
                title="Featured Today"
                 icon={StarIcon} 
                 description="Top picks from our community this week."/>
            <Button variant="outline" asChild 
            className="w-full sm:w-auto">
                 <Link href="/explore">View All
                 <ArrowUpRight className="size-4"/>
                 </Link>
                 </Button>
            </div>
            <div className="grid-wrapper">
                {featuredProducts.map((Product) => 
                <ProductCard key={Product.id} product={Product}/>)}

            </div>
          </div>
        </section>
    );
}