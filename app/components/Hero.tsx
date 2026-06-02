import Image from "next/image";

const notes = [
  "Transición, primaria y secundaria",
  "Arte, cultura y tecnología",
  "Humanismo cristiano",
];

export default function Hero() {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-[#F7F2E8] pt-20 sm:min-h-[720px] md:pt-24 lg:min-h-[760px]">
      <Image
        src="/images/colegio.jpg"
        alt="Colegio de la Fundación La Sagrada Familia"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[64%_center] lg:object-[75%_center]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,242,232,0.92)_0%,rgba(247,242,232,0.82)_45%,rgba(247,242,232,0.64)_100%)] lg:bg-[linear-gradient(90deg,#F7F2E8_0%,rgba(247,242,232,0.94)_34%,rgba(247,242,232,0.68)_52%,rgba(247,242,232,0.18)_72%,rgba(247,242,232,0)_100%)]" />

      <div className="relative z-10 mx-auto flex min-h-[680px] max-w-[1600px] items-center px-4 py-12 sm:min-h-[640px] sm:px-5 md:px-6 lg:min-h-[680px] lg:py-0">
        <div className="max-w-[600px]">
          <div className="mb-5 flex items-center gap-3 sm:gap-4 md:mb-6">
            <span className="h-px w-8 bg-[#C59A2F] sm:w-12" />
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#8A6B12] sm:text-xs sm:tracking-[0.28em]">
              Colegio La Sagrada Familia
            </p>
          </div>

          <h1 className="font-[var(--font-playfair)] text-[clamp(2.45rem,13vw,5.25rem)] font-semibold leading-[0.96] text-[#4F73B8]">
            Colegio La
            <br />
            Sagrada Familia
          </h1>

          <p className="mt-4 font-[var(--font-dancing)] text-3xl italic text-[#C59016] sm:text-4xl md:text-5xl">
            Integrar para la vida
          </p>

          <p className="mt-6 max-w-lg text-base leading-8 text-[#40566B] md:mt-8 md:text-lg md:leading-9">
            Una institución educativa que forma desde la dignidad, la familia,
            el pensamiento crítico y el servicio al territorio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <a
              href="https://wa.me/573143598739"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#4F73B8] px-6 py-3.5 text-center text-sm font-bold text-white transition hover:bg-[#3f619e] sm:px-8 sm:py-4 sm:text-base"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="#about"
              className="rounded-lg border border-[#7D9BCD]/24 bg-white/60 px-6 py-3.5 text-center text-sm font-bold text-[#4F73B8] transition hover:bg-white sm:px-8 sm:py-4 sm:text-base"
            >
              Conocer el modelo
            </a>
          </div>

          <div className="mt-10 grid gap-4 border-t border-[#D9D2C5] pt-6 min-[520px]:grid-cols-3 md:mt-14 md:gap-6 md:pt-8">
            {notes.map((note) => (
              <div key={note}>
                <span className="mb-3 block size-2 bg-[#C59A2F]" />
                <p className="text-sm leading-6 text-[#40566B] md:leading-7">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
