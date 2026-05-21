const dimensions = [
  {
    title: "Ser",
    text: "Formación personal, espiritualidad y sentido de vida.",
    path: "M12 21s7-4.4 7-10a7 7 0 0 0-14 0c0 5.6 7 10 7 10Z",
  },
  {
    title: "Saber",
    text: "Acompañamiento académico, pensamiento crítico y aprender haciendo.",
    path: "M4 6.5 12 3l8 3.5-8 3.5L4 6.5Zm3 3.2v4.8c0 1.8 2.2 3.2 5 3.2s5-1.4 5-3.2V9.7",
  },
  {
    title: "Convivir",
    text: "Diálogo, mediación, respeto por la diversidad y acuerdos formativos.",
    path: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 20c.6-3.2 2.4-5 4.5-5s3.9 1.8 4.5 5M11.5 20c.6-3.2 2.4-5 4.5-5 2 0 3.8 1.8 4.5 5",
  },
  {
    title: "Transformar",
    text: "Arte, tecnología, cultura y liderazgo social al servicio del territorio.",
    path: "M4 14c4-1 6-3 7-8 1 5 3 7 7 8-4 1-6 3-7 8-1-5-3-7-7-8Z",
  },
];

function Icon({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5 md:size-6"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="paper-surface border-b border-[#7d9bcd]/10 py-10 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-7 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <aside className="lg:pt-4">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]">
              Proyecto Educativo Institucional
            </p>
            <div className="quiet-rule mt-4 h-px w-full max-w-xs opacity-35 md:mt-5" />
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#40566B] md:mt-6 md:text-base md:leading-8">
              Una forma de acompañar la vida escolar: familia, aula, barrio,
              valores y futuro puestos en conversación.
            </p>
          </aside>

          <div>
            <h2 className="max-w-4xl text-[clamp(1.9rem,9vw,2.8rem)] font-black leading-[1] tracking-[-0.03em] text-[#7d9bcd] md:text-[clamp(2.3rem,4.2vw,4.35rem)] md:leading-[0.98]">
              Formación integral con raíz humana y mirada comunitaria.
            </h2>

            <div className="mt-7 grid gap-4 md:mt-9 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-y border-[#7d9bcd]/14 py-5 md:py-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7d9bcd]">
                  Misión
                </p>
                <p className="mt-3 text-base leading-7 text-[#7d9bcd] md:text-xl md:leading-8">
                  Formar niños, niñas y jóvenes en valores, promoviendo líderes
                  sensibles a su entorno y capaces de transformar la sociedad.
                </p>
              </div>

              <div className="bg-[#7d9bcd] p-5 text-white shadow-[6px_6px_0_#C59A2F] md:p-6 md:shadow-[8px_8px_0_#C59A2F]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D8C17C]">
                  Visión
                </p>
                <p className="mt-3 text-base leading-7 text-[#F7F2E8] md:mt-4 md:text-lg md:leading-8">
                  Ser reconocidos como referencia educativa en formación
                  integral en la comunidad.
                </p>
              </div>
            </div>

            <div className="mt-7 grid gap-2 md:hidden">
              {dimensions.map((dimension, index) => (
                <details
                  key={dimension.title}
                  className="mobile-disclosure border-t border-[#7d9bcd]/12 bg-[#FBF8F1]/72 px-4 py-3"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="flex items-center gap-3">
                      <span className="text-xs text-[#8A6B12]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[#8A6B12]">
                        <Icon path={dimension.path} />
                      </span>
                      <span className="text-lg font-black text-[#7d9bcd]">
                        {dimension.title}
                      </span>
                    </span>
                    <span className="text-lg font-black text-[#8A6B12]">+</span>
                  </summary>
                  <p className="mt-3 pl-14 text-sm leading-6 text-[#5F6F7F]">
                    {dimension.text}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-10 hidden gap-3 md:grid">
              {dimensions.map((dimension, index) => (
                <article
                  key={dimension.title}
                  className="grid gap-4 border-t border-[#7d9bcd]/12 bg-[#FBF8F1]/60 px-4 py-4 md:grid-cols-[4rem_0.35fr_1fr] md:items-center md:px-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#8A6B12]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#8A6B12]">
                      <Icon path={dimension.path} />
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#7d9bcd]">
                    {dimension.title}
                  </h3>
                  <p className="leading-7 text-[#5F6F7F]">{dimension.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
