import Image from "next/image";

const notes = [
  "Transición, primaria y secundaria",
  "Arte, cultura y tecnología",
  "Humanismo cristiano",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#7d9bcd]/10 bg-[#F7F2E8] pt-20 md:pt-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-5 pb-9 pt-6 md:gap-7 md:px-8 md:pb-14 md:pt-10 lg:min-h-[650px] lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:pb-16 lg:pt-12">
        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-3 md:mb-6 md:gap-4">
            <span className="h-px w-8 bg-[#C59A2F] md:w-12" />
          </div>
          <h1 className="max-w-4xl font-[var(--font-playfair)] text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1] tracking-[-0.02em] text-[#5F84C4] md:text-[clamp(3rem,4vw,4.8rem)]">
            Colegio La Sagrada Familia
          </h1>

          <p className="mt-3 font-[var(--font-dancing)] italic text-2xl text-[#B8871A] md:text-3xl">
            Integrar para la vida
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#40566B] md:mt-7 md:text-xl md:leading-8">
            Una institución educativa que forma desde la dignidad, la familia,
            el pensamiento crítico y el servicio al territorio.
          </p>

          <div className="mt-6 flex flex-col gap-2.5 sm:flex-row md:mt-8 md:gap-3">
            <a
              href="https://wa.me/573143598739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7d9bcd] px-5 py-3 text-center text-sm font-black text-white transition hover:bg-[#7d9bcd] md:px-6 md:py-3.5"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="#about"
              className="border border-[#7d9bcd]/18 px-5 py-3 text-center text-sm font-black text-[#7d9bcd] transition hover:bg-white md:px-6 md:py-3.5"
            >
              Conocer el modelo
            </a>
          </div>

          <div className="mt-6 flex max-w-xl flex-wrap gap-2 md:mt-10 md:grid md:grid-cols-3">
            {notes.map((note) => (
              <div
                key={note}
                className="flex items-center gap-2 border border-[#7d9bcd]/12 bg-white/45 px-3 py-2 md:block md:border-x-0 md:border-b-0 md:bg-transparent md:px-0 md:pt-3"
              >
                <span className="block h-1.5 w-1.5 shrink-0 bg-[#C59A2F]" />
                <p className="text-xs leading-5 text-[#40566B] md:mt-3 md:text-sm md:leading-6">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[285px] overflow-hidden bg-[#7d9bcd] shadow-[8px_8px_0_rgba(197,154,47,0.45)] md:min-h-[500px] md:shadow-[14px_14px_0_rgba(197,154,47,0.45)]">
          <Image
            src="/images/colegio.jpeg"
            alt="Colegio de la Fundación La Sagrada Familia"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(125,155,205,0.02),rgba(125,155,205,0.18))]" />
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 bg-[#7d9bcd]/88 text-white backdrop-blur-sm">
            <div className="border-r border-white/15 p-2.5 md:p-4">
              <p className="text-xl font-black md:text-2xl">2027</p>
              <p className="mt-1 text-[0.68rem] leading-4 text-white/80 md:text-xs md:leading-5">
                Propósito grados 10 y 11.
              </p>
            </div>
            <div className="border-r border-white/15 p-2.5 md:p-4">
              <p className="text-xl font-black md:text-2xl">2030</p>
              <p className="mt-1 text-[0.68rem] leading-4 text-white/80 md:text-xs md:leading-5">
                Horizonte de jornada única.
              </p>
            </div>
            <div className="p-2.5 md:p-4">
              <p className="text-xl font-black md:text-2xl">PEI</p>
              <p className="mt-1 text-[0.68rem] leading-4 text-white/80 md:text-xs md:leading-5">
                Identidad y modelo educativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
