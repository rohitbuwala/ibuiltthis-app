"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  CompassIcon,
  HomeIcon,
  LoaderIcon,
  MenuIcon,
  SparkleIcon,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";
import { Button } from "../ui/button";
import CustomUserButton from "./custom-user-button";
import { Sheet, SheetClose, SheetContent, SheetHeader } from "../ui/sheet";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparkleIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        i<span className="text-primary">Built</span>This
      </span>
    </Link>
  );
};

const MobileNavLinks = () => {
  return (
    <>
      <Link
        href="/"
        className="flex items-center gap-3 px-4 py-4 text-base font-medium text-gray-300 hover:text-white transition-colors hover:bg-gray-800/50 rounded-lg"
      >
        <HomeIcon className="size-5" />
        <span>Home</span>
      </Link>
      <Link
        href="/explore"
        className="flex items-center gap-3 px-4 py-4 text-base font-medium text-gray-300 hover:text-white transition-colors hover:bg-gray-800/50 rounded-lg"
      >
        <CompassIcon className="size-5" />
        <span>Explore</span>
      </Link>
    </>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="wrapper">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50"
            >
              <CompassIcon className="size-4" />
              <span>Explore</span>
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Suspense
              fallback={
                <div>
                  <LoaderIcon className="size-4 animate-spin" />
                </div>
              }
            >
              <div className="hidden md:flex items-center gap-3">
                <SignedOut>
                  <SignInButton />
                  <SignUpButton>
                    <Button>Sign Up</Button>
                  </SignUpButton>
                </SignedOut>
                <SignedIn>
                  <Button asChild>
                    <Link href="/submit">
                      <SparklesIcon className="size-4" />
                      Submit Project
                    </Link>
                  </Button>

                  <CustomUserButton />
                </SignedIn>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <MenuIcon className="size-6" />
              </Button>
            </Suspense>
          </div>
        </div>
      </div>

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetHeader>
          <Logo />
          <SheetClose onClick={() => setMobileMenuOpen(false)} />
        </SheetHeader>
        <SheetContent className="space-y-4">
          <nav className="space-y-1">
            <MobileNavLinks />
          </nav>
          <div className="space-y-2">
            <Suspense
              fallback={
                <div>
                  <LoaderIcon className="size-4 animate-spin" />
                </div>
              }
            >
              <SignedOut>
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 hover:border-gray-600"
                  asChild
                >
                  <SignInButton>Sign In</SignInButton>
                </Button>
                <Button
                  className="w-full justify-start bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <SignUpButton>Sign Up</SignUpButton>
                </Button>
              </SignedOut>
              <SignedIn>
                <Button
                  variant="default"
                  className="w-full justify-start gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <Link href="/submit">
                    <SparklesIcon className="size-4" />
                    Submit Project
                  </Link>
                </Button>
                <div className="flex items-center justify-center py-2">
                  <CustomUserButton />
                </div>
              </SignedIn>
            </Suspense>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}