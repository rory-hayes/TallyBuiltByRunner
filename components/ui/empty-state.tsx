import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/class-names";

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: ReactNode;
  actions?: ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  actions,
  className,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-52 flex-col items-center justify-center rounded-card border border-dashed border-border bg-card px-6 py-10 text-center",
        className
      )}
      {...props}
    >
      {icon ? (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-control bg-review-subtle text-review">
          {icon}
        </div>
      ) : null}
      <h2 className="text-base font-semibold text-foreground">{title}</h2>
      {description ? (
        <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
          {description}
        </p>
      ) : null}
      {actions ? <div className="mt-5 flex items-center gap-2">{actions}</div> : null}
    </div>
  );
}
