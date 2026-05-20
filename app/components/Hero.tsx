import Image from "next/image";

const notes = [
  "Transicion, primaria y secundaria",
  "Arte, cultura y tecnologia",
  "Humanismo cristiano",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#102844]/10 bg-[#F7F2E8] pt-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pb-14 pt-10 md:px-8 lg:min-h-[650px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:pb-16 lg:pt-12">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-12 bg-[#C59A2F]" />
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8A6B12]">
              Colegio La Sagrada Familia
            </p>
          </div>

          <h1 className="max-w-3xl text-[clamp(3rem,6.8vw,6.4rem)] font-black leading-[0.9] tracking-[-0.035em] text-[#102844]">
            Integrar, para la vida.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#40566B] md:text-xl">
            Una institucion educativa que forma desde la dignidad, la familia,
            el pensamiento critico y el servicio al territorio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://wa.me/573143598739"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#102844] px-6 py-3.5 text-center text-sm font-black text-white transition hover:bg-[#18395E]"
            >
              Contactar por WhatsApp
            </a>
            <a
              href="#about"
              className="border border-[#102844]/18 px-6 py-3.5 text-center text-sm font-black text-[#102844] transition hover:bg-white"
            >
              Conocer el modelo
            </a>
          </div>

          <div className="mt-10 grid max-w-xl gap-2 sm:grid-cols-3">
            {notes.map((note) => (
              <div key={note} className="border-t border-[#102844]/14 pt-3">
                <span className="block h-1.5 w-1.5 bg-[#C59A2F]" />
                <p className="mt-3 text-sm leading-6 text-[#40566B]">{note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[380px] overflow-hidden bg-[#102844] shadow-[14px_14px_0_rgba(197,154,47,0.45)] md:min-h-[500px]">
          <Image
            src="/images/colegio.jpeg"
            alt="Colegio de la Fundacion La Sagrada Familia"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,40,68,0.08),rgba(16,40,68,0.58))]" />
          <div className="absolute bottom-0 left-0 right-0 grid bg-[#102844]/88 text-white backdrop-blur-sm sm:grid-cols-3">
            <div className="border-b border-white/15 p-4 sm:border-b-0 sm:border-r">
              <p className="text-2xl font-black">2027</p>
              <p className="mt-1 text-xs leading-5 text-white/80">
                Proposito grados 10 y 11.
              </p>
            </div>
            <div className="border-b border-white/15 p-4 sm:border-b-0 sm:border-r">
              <p className="text-2xl font-black">2030</p>
              <p className="mt-1 text-xs leading-5 text-white/80">
                Horizonte de jornada unica.
              </p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-black">PEI</p>
              <p className="mt-1 text-xs leading-5 text-white/80">
                Identidad y modelo educativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
