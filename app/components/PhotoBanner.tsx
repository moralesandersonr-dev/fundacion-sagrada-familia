import Image from "next/image";

type PhotoBannerProps = {
  alt: string;
  kicker: string;
  objectPosition?: string;
  src: string;
  text: string;
  title: string;
  tone?: "light" | "dark";
  variant?: "default" | "featured";
};

export default function PhotoBanner({
  alt,
  kicker,
  objectPosition = "object-center",
  src,
  text,
  title,
  tone = "dark",
  variant = "default",
}: PhotoBannerProps) {
  const isDark = tone === "dark";
  const isFeatured = variant === "featured";

  return (
    <section
      className={`group relative min-h-[260px] overflow-hidden border-b border-[#7d9bcd]/10 bg-[#7d9bcd] ${
        isFeatured ? "md:min-h-[560px]" : "md:min-h-[420px]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover transition duration-[1200ms] ease-out group-hover:scale-[1.015] ${objectPosition}`}
        sizes="100vw"
      />
      <div
        className={
          isDark
            ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(125,155,205,0.86),rgba(125,155,205,0.44),rgba(125,155,205,0.1))]"
            : "absolute inset-0 bg-[linear-gradient(90deg,rgba(247,242,232,0.95),rgba(247,242,232,0.56),rgba(247,242,232,0.16))]"
        }
      />
      <div
        className={`relative mx-auto flex min-h-[260px] max-w-7xl items-end px-5 py-7 md:px-8 md:py-12 ${
          isFeatured ? "md:min-h-[560px]" : "md:min-h-[420px]"
        }`}
      >
        <div
          className={
            isDark ? "max-w-2xl text-white" : "max-w-2xl text-[#7d9bcd]"
          }
        >
          <p
            className={
              isDark
                ? "text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#D8C17C] md:text-xs md:tracking-[0.24em]"
                : "text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]"
            }
          >
            {kicker}
          </p>
          <h2 className="mt-3 text-[clamp(1.75rem,9vw,2.55rem)] font-black leading-tight tracking-[-0.03em] md:mt-4 md:text-[clamp(2.05rem,4vw,3.25rem)]">
            {title}
          </h2>
          <p
            className={
              isDark
                ? "mt-3 text-sm leading-6 text-white/86 md:mt-4 md:text-lg md:leading-8"
                : "mt-3 text-sm leading-6 text-[#40566B] md:mt-4 md:text-lg md:leading-8"
            }
          >
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
