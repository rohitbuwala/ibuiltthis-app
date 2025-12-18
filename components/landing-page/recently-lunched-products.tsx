import { RocketIcon } from "lucide-react";
import SectionHeader from "../common/section-header";
import Product from "@/app/products/[id]/page";

export default function RecentlyLunchedProducts() {
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
    <SectionHeader
        title="Recently Launched"
        icon={RocketIcon}
        description="Discover the latest products from our community"
    />
      <div className="grid-wrapper">
      { RecentlyLunchedProducts.map((Product))

      }
      </div>
      </div>
     
    </section>
  );
}