"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const Sheet = ({
  children,
  open,
  onOpenChange,
}: {
  children: React.ReactNode
  open: boolean
  onOpenChange: (open: boolean) => void
}) => {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [open])

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 transition-opacity duration-300 ease-in-out overflow-hidden",
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div 
          className="absolute inset-0 w-full h-full bg-black/50"
          onClick={() => onOpenChange(false)}
        />
        <div
          className={cn(
            "absolute inset-y-0 right-0 w-[85%] sm:w-80 h-full bg-black transition-transform duration-300 ease-in-out overflow-x-hidden",
            open ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex h-full flex-col overflow-x-hidden w-full">{children}</div>
        </div>
      </div>
    </>
  )
}

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex items-center justify-between px-6 py-4 shrink-0 bg-black", className)} {...props} />
)

const SheetContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex-1 px-6 py-4 space-y-2 bg-black", className)} {...props} />
)

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-6 shrink-0 bg-black", className)} {...props} />
)

const SheetClose = ({ onClick }: { onClick: () => void }) => (
  <Button 
    variant="ghost" 
    size="icon" 
    onClick={onClick}
    className="text-gray-400 hover:text-white"
  >
    <X className="h-4 w-4" />
  </Button>
)

export { Sheet, SheetHeader, SheetContent, SheetFooter, SheetClose }
