import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "outline" | "accent";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
    const variants = {
        default: "bg-zinc-100 text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100",
        outline: "border border-zinc-200 text-zinc-600 dark:border-zinc-700 dark:text-zinc-400",
        accent: "bg-accent/10 text-accent border border-accent/20",
    };

    return (
        <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors", variants[variant], className)}>
            {children}
        </span>
    );
}
