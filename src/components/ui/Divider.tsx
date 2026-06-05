import { cn } from "@/lib/utils";

interface DividerProps {
  className?: string;
}

/**
 * Linha divisória editorial: hairline em dourado fosco que esvanece nas pontas.
 * Usada entre seções para dar respiro sem peso visual.
 */
export function Divider({ className }: DividerProps) {
  return (
    <div className={cn("container", className)} aria-hidden>
      <div className="mx-auto h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </div>
  );
}
