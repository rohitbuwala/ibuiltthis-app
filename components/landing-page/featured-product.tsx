"use cache";
import SectionHeader from "@/components/common/section-header";
import { ArrowUpRight, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Product from "@/app/products/[id]/page";
import ProductCard from "@/components/products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";

export default async function FeaturedProducts() {
    const featuredProducts = await getFeaturedProducts();
    return (
        <section className="py-20 bg-muted/20">
          <div className="wrapper">
            <div className="flex items-center justify-between mb-8">
                <SectionHeader 
                title="Featured Today"
                 icon={StarIcon} 
                 description="Top picks from our community this week."/>
            <Button variant="outline" asChild 
            className="hidden sm:flex">
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