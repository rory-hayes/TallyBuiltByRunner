import { forwardRef } from "react";
import type { DialogHTMLAttributes, HTMLAttributes } from "react";
import { cn } from "@/lib/class-names";

export const Dialog = forwardRef<
  HTMLDialogElement,
  DialogHTMLAttributes<HTMLDialogElement>
>(function Dialog({ className, ...props }, ref) {
  return (
    <dialog
      ref={ref}
      className={cn(
        "w-[min(100%-32px,640px)] rounded-card border border-border bg-card p-0 text-foreground shadow-card",
        "backdrop:bg-slate-950/40",
        className
      )}
      {...props}
    />
  );
});

export function DialogHeader({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("space-y-1.5 p-5", className)} {...props} />;
}

export function DialogTitle({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-base font-semibold leading-6 text-foreground", className)}
      {...props}
    />
  );
}

export function DialogDescription({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm leading-5 text-muted-foreground", className)}
      {...props}
    />
  );
}

export function DialogContent({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("px-5 pb-5", className)} {...props} />;
}

export function DialogFooter({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center justify-end gap-2 border-t border-border px-5 py-4",
        className
      )}
      {...props}
    />
  );
}
