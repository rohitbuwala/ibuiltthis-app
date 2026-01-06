"use client"

import VotingButtons from "@/components/products/voting-buttons"
import { Button } from "@/components/ui/button"
import { ExternalLinkIcon } from "lucide-react"

interface MobileFooterProps {
  product: {
    id: number
    voteCount: number
    websiteUrl: string | null
  }
}

export default function MobileFooter({ product }: MobileFooterProps) {
  const { id, voteCount, websiteUrl } = product

  return (
    <div className="lg:hidden !fixed !bottom-0 !left-0 !right-0 bg-background border-t shadow-lg !z-[9998] !p-4">
      <div className="flex items-center justify-between gap-4">
        <VotingButtons productId={id} voteCount={voteCount} />
        {websiteUrl && (
          <Button
            asChild
            className="flex-shrink-0"
            variant={"outline"}
            size="sm"
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
    </div>
  )
}
