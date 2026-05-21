const model = [
  {
    title: "Aprender haciendo",
    text: "El aula se conecta con preguntas, proyectos y experiencias que permiten aplicar el conocimiento a la vida cotidiana.",
  },
  {
    title: "Pensamiento crítico",
    text: "Se promueve la capacidad de interpretar, argumentar y proponer desde cada área del saber.",
  },
  {
    title: "Acompañamiento integral",
    text: "El seguimiento considera conocimientos, actitudes, valores, habilidades y necesidades educativas.",
  },
];

const formation = [
  "Desarrollo personal",
  "Desarrollo social",
  "Desarrollo académico",
  "Sentido espiritual",
  "Arte y ambiente",
];

function LineIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 md:size-6"
      aria-hidden="true"
    >
      <path d="M4 19V5" />
      <path d="M4 7c4-3 7 3 11 0 2-.9 3.5-.8 5 0v10c-1.5-.8-3-.9-5 0-4 3-7-3-11 0" />
    </svg>
  );
}

export default function EducationalModel() {
  return (
    <section className="border-b border-[#7d9bcd]/10 bg-[#FBF8F1] py-10 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10">
        <div>
          <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]">
            Modelo Holístico Transformador
          </p>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.85rem,8vw,2.75rem)] font-black leading-tight tracking-[-0.03em] text-[#7d9bcd] md:mt-4 md:text-[clamp(2rem,3.5vw,3.65rem)]">
            Una pedagogía que mira al estudiante completo.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[#40566B] md:mt-5 md:text-base md:leading-8">
            El PEI articula dimensiones personales, académicas, sociales,
            normativas, espirituales, artísticas y ambientales para formar con
            sentido y responsabilidad.
          </p>
        </div>

        <div>
          <div className="grid gap-2 md:hidden">
            {model.map((item, index) => (
              <details
                key={item.title}
                className="mobile-disclosure border-t border-[#7d9bcd]/12 py-3"
                open={index === 0}
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4">
                  <span className="flex items-center gap-3">
                    <span className="text-[#8A6B12]">
                      <LineIcon />
                    </span>
                    <span className="text-base font-black text-[#7d9bcd]">
                      <span className="mr-2 font-mono text-xs font-normal text-[#8A6B12]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.title}
                    </span>
                  </span>
                  <span className="text-lg font-black text-[#8A6B12]">+</span>
                </summary>
                <p className="mt-3 pl-8 text-sm leading-6 text-[#5F6F7F]">
                  {item.text}
                </p>
              </details>
            ))}
          </div>

          <div className="hidden gap-4 md:grid">
            {model.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-4 border-t border-[#7d9bcd]/12 py-5 md:grid-cols-[3rem_0.5fr_1fr] md:items-start"
              >
                <span className="text-[#8A6B12]">
                  <LineIcon />
                </span>
                <h3 className="text-xl font-black text-[#7d9bcd]">
                  <span className="mr-3 font-mono text-xs font-normal text-[#8A6B12]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {item.title}
                </h3>
                <p className="leading-7 text-[#5F6F7F]">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2 md:mt-2">
            {formation.map((item) => (
              <span
                key={item}
                className="border border-[#7d9bcd]/14 bg-[#F7F2E8] px-3 py-2 text-xs font-bold text-[#7d9bcd] md:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
