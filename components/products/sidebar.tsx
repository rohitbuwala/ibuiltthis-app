"use client"

import VotingButtons from "@/components/products/voting-buttons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon } from "lucide-react"

interface SidebarProps {
  product: {
    id: number
    voteCount: number
    websiteUrl: string | null
  }
}

export default function Sidebar({ product }: SidebarProps) {
  const { id, voteCount, websiteUrl } = product

  return (
    <div className="fixed !right-0 !top-16 !bottom-0 !w-80 h-screen !p-4 space-y-4 bg-background border-l shadow-lg !overflow-y-auto !z-[9999] hidden lg:block">
      <div className="border rounded-lg p-4 sm:p-6 bg-background shadow-lg">
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-muted-foreground mb-2">
            Support this product
          </p>
          <VotingButtons productId={id} voteCount={voteCount} />
        </div>
        {voteCount > 100 && (
          <div className="pt-4 sm:pt-6 border-t">
            <Badge className="w-full justify-center py-2 text-xs sm:text-sm">
              🔥 Featured Product
            </Badge>
          </div>
        )}
      </div>
      {websiteUrl && (
        <Button
          asChild
          className="w-full rounded-lg"
          variant={"outline"}
        >
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Website <ExternalLinkIcon className="size-4 ml-2" />
          </a>
        </Button>
      )}
    </div>
  )
}
