import Image from "next/image";

type PhotoBannerProps = {
  alt: string;
  kicker: string;
  objectPosition?: string;
  src: string;
  text: string;
  title: string;
  tone?: "light" | "dark";
  variant?: "default" | "featured" | "portrait";
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
  const isPortrait = variant === "portrait";

  if (isPortrait) {
    return (
      <section className="border-y border-[#7d9bcd]/10 bg-[#7d9bcd] py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 md:px-8 lg:grid-cols-[0.92fr_0.68fr] lg:items-center">
          <div className="max-w-3xl text-white">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#F7E7AA] md:text-base">
              {kicker}
            </p>
            <h2 className="mt-4 text-[clamp(2rem,8vw,3rem)] font-black leading-tight md:text-[clamp(2.5rem,4.2vw,4.2rem)]">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[#EEF5FA] md:text-base md:leading-8">
              {text}
            </p>
          </div>

          <div className="mx-auto w-full max-w-[360px] rounded-2xl border border-white/16 bg-white/10 p-3 shadow-[0_24px_60px_rgba(64,86,107,0.22)] sm:max-w-[420px]">
            <div className="relative aspect-[904/1280] w-full overflow-hidden rounded-xl bg-[#F7F2E8]/10">
              <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 420px, 90vw"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`group relative mx-auto min-h-[320px] w-full overflow-hidden border-y border-[#7d9bcd]/10 bg-[#7d9bcd] sm:min-h-[380px] ${
        isFeatured
          ? "md:min-h-[620px] xl:min-h-[700px]"
          : "md:min-h-[500px] xl:min-h-[580px]"
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
          isFeatured
            ? "md:min-h-[620px] xl:min-h-[700px]"
            : "md:min-h-[500px] xl:min-h-[580px]"
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
