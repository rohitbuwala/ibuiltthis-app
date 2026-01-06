"use cache";

import SectionHeader from "@/components/common/section-header";
import MobileFooter from "@/components/products/mobile-footer";
import { Badge } from "@/components/ui/badge";
import {
  getFeaturedProducts,
  getProductBySlug,
} from "@/lib/products/product-select";
import {
  ArrowLeftIcon,
  CalendarIcon,
  StarIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const products = await getFeaturedProducts();
  return products.map((product) => ({
    slug: product.slug.toString(),
  }));
};

export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const { name, description, websiteUrl, tags, voteCount, tagline } = product;

  return (
    <>
      <div className="min-h-screen py-10 sm:py-16 pb-24 lg:pb-10">
        <div className="wrapper">
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 sm:mb-8 transition-colors"
          >
            <ArrowLeftIcon className="size-4" /> Back to Explore
          </Link>

          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 lg:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
              <div className="flex-1 min-w-0">
                <div className="mb-4 sm:mb-6">
                  <SectionHeader
                    title={name}
                    icon={StarIcon}
                    description={tagline ?? ""}
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>

            <div className="border rounded-lg p-4 sm:p-6 bg-primary/10">
              <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Product Details</h2>

              <div className="space-y-3">
                {[
                  {
                    label: "Launched:",
                    value: new Date(
                      product.createdAt?.toISOString() ?? ""
                    ).toLocaleDateString(),
                    icon: CalendarIcon,
                  },
                  {
                    label: "Submitted by:",
                    value: product.submittedBy,
                    icon: UserIcon,
                  },
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="flex items-center gap-3 text-sm">
                    {Icon && <Icon className="size-4 text-muted-foreground" />}
                    <span className="text-muted-foreground">{label}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <MobileFooter product={product} />
    </>
  );
}