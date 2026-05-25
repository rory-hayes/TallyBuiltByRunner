import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

const buttonVariants = {
  primary:
    "border-primary bg-primary text-primary-foreground shadow-sm hover:bg-blue-800 focus-visible:outline-primary",
  secondary:
    "border-border bg-card text-foreground shadow-sm hover:bg-secondary focus-visible:outline-primary",
  outline:
    "border-border bg-transparent text-foreground hover:bg-secondary focus-visible:outline-primary",
  ghost:
    "border-transparent bg-transparent text-foreground hover:bg-secondary focus-visible:outline-primary",
  destructive:
    "border-danger bg-danger text-white shadow-sm hover:bg-red-700 focus-visible:outline-danger"
} as const;

const buttonSizes = {
  sm: "h-8 gap-1.5 px-3 text-xs",
  md: "h-9 gap-2 px-4 text-sm",
  lg: "h-10 gap-2 px-5 text-sm"
} as const;

export type ButtonVariant = keyof typeof buttonVariants;
export type ButtonSize = keyof typeof buttonSizes;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { className, variant = "primary", size = "md", type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center rounded-control border font-semibold transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    />
  );
});
