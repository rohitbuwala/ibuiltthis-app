import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRightIcon, EyeIcon, RocketIcon, SparklesIcon, UsersIcon } from "lucide-react";
import Link from "next/link";
import StatsCard from "./stats-card";

const LiveBadge = () => {
    return (
    <Badge variant="outline" className="px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6 text-xs sm:text-sm backdrop-blur-sm">
        <span className="relative flex h-2 w-2 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 "></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
       <span className="text-muted-foreground hidden sm:inline">Join thousands of creators sharing their work</span>
       <span className="text-muted-foreground sm:hidden">Join creators</span>
      </Badge>
    );
};


    const statsData = [
        {
            icon: RocketIcon,
            value: "2.5K+",
            label: "Projects Shared",
        },
        {
            icon: UsersIcon,
            value: "10K+",
            label: "Active Creators",
            hasBorder: true,
        },
        {
            icon: EyeIcon,
            value: "50K+",
            label: "Monthly Visitors",
        }
    ]


export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20">
        <div className="wrapper">
            <div className="flex flex-col items-center justify-center lg:py-24 py-8 sm:py-12 text-center">
      <LiveBadge/>
      <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 max-w-5xl px-4">Share What You&apos;ve Built, Discover What&apos;s Launching</h1>
      <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl leading-relaxed px-4">A community platform for creators to showcase their apps, AI tools, SaaS products, and creative projects. Authentic launches, real builders, genuine feedback.</p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto px-4">
      <Button asChild size="lg" className="text-sm sm:text-base px-6 sm:px-8 shadow-lg w-full sm:w-auto max-w-xs">
              <Link href="/submit">
                <SparklesIcon className="size-4 sm:size-5" />
                Share Your Project
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="text-sm sm:text-base px-6 sm:px-8 shadow-lg w-full sm:w-auto max-w-xs"
              variant="secondary"
            >
              <Link href="/explore">
                Explore Projects
                <ArrowRightIcon className="size-4 sm:size-5" />
              </Link>
            </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full max-w-2xl px-4">
        {statsData.map((stat) => (
            <StatsCard key={stat.label}{...stat} />
        ))}
      </div>
      </div>
      </div>
    </section>
  );
}
