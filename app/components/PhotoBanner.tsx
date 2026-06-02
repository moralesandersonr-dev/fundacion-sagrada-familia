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
  objectPosition = "object-bottom",
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
      className={`group relative mx-auto min-h-[320px] w-full overflow-hidden border-y border-[#7d9bcd]/10 bg-[#7d9bcd] sm:min-h-[380px] ${
        isFeatured ? "md:min-h-[620px] xl:min-h-[700px]" : "md:min-h-[500px] xl:min-h-[580px]"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className={`object-cover object-top transition duration-[1200ms] ease-out group-hover:scale-[1.015] ${objectPosition}`}
        sizes="100vw"
      />
      <div
        className={
          isDark
            ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(61,83,122,0.86),rgba(61,83,122,0.64),rgba(61,83,122,0.28))]"
            : "absolute inset-0 bg-[linear-gradient(90deg,rgba(247,242,232,0.96),rgba(247,242,232,0.62),rgba(247,242,232,0.18))]"
        }
      />
      <div
        className={`relative mx-auto flex min-h-[320px] max-w-[1600px] items-end px-5 pb-8 pt-14 sm:min-h-[380px] sm:pb-10 md:px-8 md:pb-14 md:pt-20 ${
          isFeatured ? "md:min-h-[620px] xl:min-h-[700px]" : "md:min-h-[500px] xl:min-h-[580px]"
        }`}
      >
        <div
          className={
            isDark ? "max-w-2xl text-white" : "max-w-2xl text-[#4F73B8]"
          }
        >
          <p
            className={
              isDark
                ? "text-sm font-black uppercase tracking-[0.18em] text-[#D8C17C] md:text-base"
                : "text-sm font-black uppercase tracking-[0.18em] text-[#8A6B12] md:text-base"
            }
          >
            {kicker}
          </p>
          <h2 className="mt-3 max-w-xl text-[clamp(1.45rem,7vw,2rem)] font-black leading-tight md:mt-4 md:text-4xl">
            {title}
          </h2>
          <p
            className={
              isDark
                ? "mt-4 text-sm leading-7 text-white/88 md:mt-5 md:text-base md:leading-8"
                : "mt-4 text-sm leading-7 text-[#40566B] md:mt-5 md:text-base md:leading-8"
            }
          >
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}
