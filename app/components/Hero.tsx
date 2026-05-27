import Image from "next/image";

const notes = [
  "Transición, primaria y secundaria",
  "Arte, cultura y tecnología",
  "Humanismo cristiano",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F7F2E8] pt-20 md:pt-24">
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Imagen de fondo derecha */}
        <div className="absolute inset-y-0 right-0 hidden w-[50%] lg:block">
          <Image
            src="/images/colegio.jpeg"
            alt="Colegio de la Fundación La Sagrada Familia"
            fill
            priority
            className="object-cover object-[35%_center]"
          />

          {/* Degradado que une texto e imagen */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#F7F2E8_0%,rgba(247,242,232,0.75)_8%,rgba(247,242,232,0.35)_16%,rgba(247,242,232,0.08)_24%,rgba(247,242,232,0)_32%)]" />
        </div>

        <div className="relative z-10 flex min-h-[720px] items-center">
          <div className="max-w-[680px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[#C59A2F]" />

              <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#C59A2F]">
                Colegio La Sagrada Familia
              </p>
            </div>

            <h1 className="font-[var(--font-playfair)] text-[clamp(2.8rem,4vw,4.8rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-[#4F73B8]">
              Colegio La
              <br />
              Sagrada Familia
            </h1>

            <p className="mt-4 font-[var(--font-dancing)] text-4xl italic text-[#C59016] md:text-5xl">
              Integrar para la vida
            </p>

            <p className="mt-8 max-w-lg text-lg leading-9 text-[#40566B]">
              Una institución educativa que forma desde la dignidad, la
              familia, el pensamiento crítico y el servicio al territorio.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/573143598739"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#7D9BCD] px-8 py-4 text-center font-bold text-white transition hover:opacity-90"
              >
                Contactar por WhatsApp
              </a>

              <a
                href="#about"
                className="border border-[#7D9BCD]/20 bg-white/40 px-8 py-4 text-center font-bold text-[#7D9BCD] transition hover:bg-white"
              >
                Conocer el modelo
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[#D9D2C5] pt-8">
              {notes.map((note) => (
                <div key={note}>
                  <span className="mb-3 block h-2 w-2 bg-[#C59A2F]" />
                  <p className="text-sm leading-7 text-[#40566B]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Imagen para móvil */}
        <div className="relative mt-8 h-[420px] overflow-hidden lg:hidden">
          <Image
            src="/images/colegio.jpeg"
            alt="Colegio de la Fundación La Sagrada Familia"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
