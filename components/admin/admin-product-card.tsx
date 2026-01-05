import { ProductType } from "@/types";
import { Trash2Icon } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import AdminActions from "./admin-actions";
import { cn } from "@/lib/utils";

export default function AdminProductCard({
  product,
}: {
  product: ProductType;
}) {
  return (
    <Card className="border rounded-lg p-4 sm:p-6 bg-background hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="flex-1 min-w-0 space-y-3 sm:space-y-4">
          <CardTitle className="text-lg sm:text-xl font-semibold flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            {product.name}

            <Badge
              className={cn(
                product.status === "pending" &&
                  "bg-yellow-600/10 text-yellow-600 border-yellow-600",
                product.status === "approved" &&
                  "bg-green-500/10 text-green-600 border-green-500",
                product.status === "rejected" &&
                  "bg-red-500/10 text-red-500 border-red-500"
              )}
            >
              {product.status}
            </Badge>
          </CardTitle>
          <CardDescription className="flex flex-col gap-3">
            {product.tagline}
            <div className="flex flex-wrap items-center gap-2">
              {product.tags?.map((tag) => (
                <Badge variant="secondary" key={tag}>
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <p>
                <span className="font-bold">By:</span> {product.submittedBy}
              </p>
              <p>
                {product.createdAt
                  ? new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }).format(new Date(product.createdAt?.toISOString() ?? ""))
                  : ""}
              </p>
              <p>
                <a
                  href={product.websiteUrl ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </p>
            </div>
          </CardDescription>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
          <AdminActions status={product.status ?? ""} productId={product.id} />
          <Button variant="outline" className="sm:mt-0">
            <Trash2Icon className="size-4" />
            Delete
          </Button>
        </div>
      </div>
    </Card>
  );
}