"use client"

import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import {
  CompassIcon,
  HomeIcon,
  LoaderIcon,
  MenuIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import Link from "next/link";
import { Suspense, useState } from "react";
import { Button } from "../ui/button";
import CustomUserButton from "./custom-user-button";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
        <SparklesIcon className="size-4 text-primary-foreground" />
      </div>
      <span className="text-xl font-bold">
        i<span className="text-primary">Built</span>This
      </span>
    </Link>
  );
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
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

          <div className="flex items-center gap-2 sm:gap-3">
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

              <SignedIn>
                <div className="flex items-center gap-2 md:hidden">
                  <CustomUserButton />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {mobileMenuOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
                  </Button>
                </div>
              </SignedIn>
              
              <SignedOut>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <XIcon className="size-6" /> : <MenuIcon className="size-6" />}
                </Button>
              </SignedOut>
            </Suspense>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden border-t bg-background transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="wrapper py-4 space-y-4">
          <nav className="space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-lg"
            >
              <HomeIcon className="size-5" />
              <span>Home</span>
            </Link>
            <Link
              href="/explore"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors hover:bg-muted/50 rounded-lg"
            >
              <CompassIcon className="size-5" />
              <span>Explore</span>
            </Link>
          </nav>
          <div className="space-y-2 pt-2 border-t">
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
                  className="w-full justify-start"
                  asChild
                >
                  <SignInButton>Sign In</SignInButton>
                </Button>
                <Button
                  className="w-full justify-start"
                  asChild
                >
                  <SignUpButton>Sign Up</SignUpButton>
                </Button>
              </SignedOut>
              <SignedIn>
                <Button
                  variant="default"
                  className="w-full justify-start gap-2"
                  asChild
                >
                  <Link href="/submit" onClick={() => setMobileMenuOpen(false)}>
                    <SparklesIcon className="size-4" />
                    Submit Project
                  </Link>
                </Button>
              </SignedIn>
            </Suspense>
          </div>
        </div>
      </div>
    </header>
  );
}