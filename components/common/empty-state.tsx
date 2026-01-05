import { LucideIcon } from "lucide-react";

export default function EmptyState({
    message,
    icon: Icon,
} : {
    message: string;
    icon: LucideIcon
}) {
    return (
        <div className="empty-state p-8 sm:p-12">
            { Icon && (
                <Icon className="size-10 sm:size-12 text-muted-foreground/50 mx-auto mb-3 sm:mb-4"/>
            )

            }
            <p className="text-base sm:text-lg text-muted-foreground">{message}</p>
        </div>
    )
}