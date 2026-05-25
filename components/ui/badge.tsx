import type { HTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

const badgeTones = {
  neutral: "border-border bg-secondary text-secondary-foreground",
  review: "border-blue-200 bg-review-subtle text-review",
  success: "border-green-200 bg-success-subtle text-success",
  warning: "border-orange-200 bg-warning-subtle text-warning",
  danger: "border-red-200 bg-danger-subtle text-danger"
} as const;

export type BadgeTone = keyof typeof badgeTones;

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
}

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-6 items-center rounded-control border px-2 py-0.5 text-xs font-semibold leading-5",
        badgeTones[tone],
        className
      )}
      {...props}
    />
  );
}
