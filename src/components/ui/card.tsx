import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    gradient?: boolean;
}

export function Card({ className, children, gradient = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-xl border border-zinc-200 bg-white text-zinc-950 shadow-sm dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-50",
                gradient && "bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950",
                "glass dark:glass-dark", // Applying our global glass classes
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
