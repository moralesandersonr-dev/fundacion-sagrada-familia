import Image from "next/image";

type PhotoBannerProps = {
  alt: string;
  kicker: string;
  objectPosition?: string;
  src: string;
  text: string;
  title: string;
  tone?: "light" | "dark";
};

export default function PhotoBanner({
  alt,
  kicker,
  objectPosition = "object-center",
  src,
  text,
  title,
  tone = "dark",
}: PhotoBannerProps) {
  const isDark = tone === "dark";

  return (
    <section className="relative min-h-[330px] overflow-hidden border-b border-[#102844]/10 bg-[#102844] md:min-h-[420px]">
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover ${objectPosition}`}
        sizes="100vw"
      />
      <div
        className={
          isDark
            ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(16,40,68,0.82),rgba(16,40,68,0.36),rgba(16,40,68,0.1))]"
            : "absolute inset-0 bg-[linear-gradient(90deg,rgba(247,242,232,0.92),rgba(247,242,232,0.48),rgba(247,242,232,0.12))]"
        }
      />
      <div className="relative mx-auto flex min-h-[330px] max-w-7xl items-end px-6 py-9 md:min-h-[420px] md:px-8 md:py-12">
        <div className={isDark ? "max-w-2xl text-white" : "max-w-2xl text-[#102844]"}>
          <p
            className={
              isDark
                ? "text-xs font-black uppercase tracking-[0.24em] text-[#D8C17C]"
                : "text-xs font-black uppercase tracking-[0.24em] text-[#8A6B12]"
            }
          >
            {kicker}
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.03em] md:text-5xl">
            {title}
          </h2>
          <p className={isDark ? "mt-4 text-lg leading-8 text-white/86" : "mt-4 text-lg leading-8 text-[#40566B]"}>
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
