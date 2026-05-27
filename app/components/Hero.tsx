import Image from "next/image";

const notes = [
  "Transición, primaria y secundaria",
  "Arte, cultura y tecnología",
  "Humanismo cristiano",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#7d9bcd]/10 bg-[#F7F2E8] pt-20 md:pt-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 pb-10 pt-6 md:px-8 md:pb-14 md:pt-10 lg:min-h-[700px] lg:grid-cols-[0.55fr_1.45fr] lg:items-center lg:gap-10">
        <div className="relative z-10">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-12 bg-[#C59A2F]" />
          </div>

          <h1 className="font-[var(--font-playfair)] text-[clamp(2.8rem,4vw,5rem)] font-bold leading-[0.9] tracking-[-0.04em] text-[#5F84C4]">
            Colegio La Sagrada
            <br />
            Familia
          </h1>

          <p className="mt-3 font-[var(--font-dancing)] text-3xl italic text-[#B8871A] md:text-4xl">
            Integrar para la vida
          </p>

          <p className="mt-7 max-w-xl text-base leading-8 text-[#40566B] md:text-xl">
            Una institución educativa que forma desde la dignidad, la familia,
            el pensamiento crítico y el servicio al territorio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/573143598739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#7d9bcd] px-6 py-4 text-center text-sm font-black text-white transition hover:opacity-90"
            >
              Contactar por WhatsApp
            </a>

            <a
              href="#about"
              className="border border-[#7d9bcd]/20 px-6 py-4 text-center text-sm font-black text-[#7d9bcd] transition hover:bg-white"
            >
              Conocer el modelo
            </a>
          </div>

          <div className="mt-10 grid gap-4 border-t border-[#7d9bcd]/10 pt-6 md:grid-cols-3">
            {notes.map((note) => (
              <div key={note}>
                <span className="mb-3 block h-1.5 w-1.5 bg-[#C59A2F]" />
                <p className="text-sm leading-7 text-[#40566B]">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden md:min-h-[580px]">
          <Image
            src="/images/colegio.jpeg"
            alt="Colegio de la Fundación La Sagrada Familia"
            fill
            className="object-cover object-top"
            priority
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,242,232,0.35)_0%,rgba(247,242,232,0.08)_15%,rgba(255,255,255,0)_30%)]" />

          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 bg-[#7d9bcd]/88 text-white backdrop-blur-sm">
            <div className="border-r border-white/15 p-4">
              <p className="text-2xl font-black">2027</p>
              <p className="mt-1 text-xs text-white/80">
                Propósito grados 10 y 11.
              </p>
            </div>

            <div className="border-r border-white/15 p-4">
              <p className="text-2xl font-black">2030</p>
              <p className="mt-1 text-xs text-white/80">
                Horizonte de jornada única.
              </p>
            </div>

            <div className="p-4">
              <p className="text-2xl font-black">PEI</p>
              <p className="mt-1 text-xs text-white/80">
                Identidad y modelo educativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
