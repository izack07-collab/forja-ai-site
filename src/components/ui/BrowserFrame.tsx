import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  src: string;
  alt: string;
  url?: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
}

/**
 * Moldura de navegador em CSS para emoldurar screenshots reais do produto.
 * Registro sóbrio: pontos monocromáticos na paleta, barra de URL com cadeado.
 */
export function BrowserFrame({
  src,
  alt,
  url,
  className,
  imgClassName,
  loading = "lazy",
  width,
  height,
}: BrowserFrameProps) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-lg border border-line bg-bg shadow-elevated",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-bg-warm/70 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line-deep" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-deep" />
          <span className="h-2.5 w-2.5 rounded-full bg-line-deep" />
        </div>
        {url && (
          <div className="mx-auto flex max-w-[75%] items-center gap-1.5 rounded-full bg-bg px-3 py-1">
            <Lock className="h-2.5 w-2.5 text-ink-subtle" strokeWidth={2} />
            <span className="truncate text-[11px] text-ink-muted">{url}</span>
          </div>
        )}
      </div>
      <img
        src={src}
        alt={alt}
        loading={loading}
        width={width}
        height={height}
        className={cn("block w-full", imgClassName)}
      />
    </figure>
  );
}
