import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react"

export default function StatsCard(
    {
        icon: Icon,
         value,
          label,
    }: 
    {
        icon: LucideIcon;
        value: string;
        label: string;
    })
    
    {
    return (
        <div className={cn("space-y-2")}>
        <div className="flex items-center justify-center gap-2">
        <Icon className="size-4 sm:size-5 text-primary/70"/>
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {value}
        </p>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
    </div>
    );
};