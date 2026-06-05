import { cn } from "@/lib/utils";

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
}

/**
 * Moldura de celular em CSS para a vitrine mobile e a conversa do agente.
 * Bezel grafite fino, cantos bem arredondados, alto-falante sutil.
 */
export function PhoneFrame({
  src,
  alt,
  className,
  imgClassName,
  loading = "lazy",
  width,
  height,
}: PhoneFrameProps) {
  return (
    <figure
      className={cn(
        "relative rounded-[1.75rem] border border-bg-deep/40 bg-bg-deep p-1.5 shadow-elevated",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute left-1/2 top-2 z-10 h-1 w-10 -translate-x-1/2 rounded-full bg-bg/25"
      />
      <div className="overflow-hidden rounded-[1.4rem]">
        <img
          src={src}
          alt={alt}
          loading={loading}
          width={width}
          height={height}
          className={cn("block w-full", imgClassName)}
        />
      </div>
    </figure>
  );
}
