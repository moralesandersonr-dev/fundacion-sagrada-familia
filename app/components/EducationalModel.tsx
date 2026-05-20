const model = [
  {
    title: "Aprender haciendo",
    text: "El aula se conecta con preguntas, proyectos y experiencias que permiten aplicar el conocimiento a la vida cotidiana.",
  },
  {
    title: "Pensamiento critico",
    text: "Se promueve la capacidad de interpretar, argumentar y proponer desde cada area del saber.",
  },
  {
    title: "Acompanamiento integral",
    text: "El seguimiento considera conocimientos, actitudes, valores, habilidades y necesidades educativas.",
  },
];

const formation = [
  "Desarrollo personal",
  "Desarrollo social",
  "Desarrollo academico",
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
      className="size-6"
      aria-hidden="true"
    >
      <path d="M4 19V5" />
      <path d="M4 7c4-3 7 3 11 0 2-.9 3.5-.8 5 0v10c-1.5-.8-3-.9-5 0-4 3-7-3-11 0" />
    </svg>
  );
}

export default function EducationalModel() {
  return (
    <section className="border-b border-[#102844]/10 bg-[#FBF8F1] py-14 md:py-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:px-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8A6B12]">
            Modelo Holistico Transformador
          </p>
          <h2 className="mt-4 max-w-2xl text-[clamp(2rem,3.5vw,3.65rem)] font-black leading-tight tracking-[-0.03em] text-[#102844]">
            Una pedagogia que mira al estudiante completo.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#40566B]">
            El PEI articula dimensiones personales, academicas, sociales,
            normativas, espirituales, artisticas y ambientales para formar con
            sentido y responsabilidad.
          </p>
        </div>

        <div className="grid gap-4">
          {model.map((item, index) => (
            <article
              key={item.title}
              className="grid gap-4 border-t border-[#102844]/12 py-5 md:grid-cols-[3rem_0.5fr_1fr] md:items-start"
            >
              <span className="text-[#8A6B12]">
                <LineIcon />
              </span>
              <h3 className="text-xl font-black text-[#102844]">
                <span className="mr-3 font-mono text-xs font-normal text-[#8A6B12]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.title}
              </h3>
              <p className="leading-7 text-[#5F6F7F]">{item.text}</p>
            </article>
          ))}

          <div className="mt-2 flex flex-wrap gap-2">
            {formation.map((item) => (
              <span
                key={item}
                className="border border-[#102844]/14 bg-[#F7F2E8] px-3 py-2 text-sm font-bold text-[#102844]"
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
