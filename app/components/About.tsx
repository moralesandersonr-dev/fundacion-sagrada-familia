const dimensions = [
  {
    title: "Ser",
    text: "Formacion personal, espiritualidad y sentido de vida.",
    path: "M12 21s7-4.4 7-10a7 7 0 0 0-14 0c0 5.6 7 10 7 10Z",
  },
  {
    title: "Saber",
    text: "Acompanamiento academico, pensamiento critico y aprender haciendo.",
    path: "M4 6.5 12 3l8 3.5-8 3.5L4 6.5Zm3 3.2v4.8c0 1.8 2.2 3.2 5 3.2s5-1.4 5-3.2V9.7",
  },
  {
    title: "Convivir",
    text: "Dialogo, mediacion, respeto por la diversidad y acuerdos formativos.",
    path: "M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 20c.6-3.2 2.4-5 4.5-5s3.9 1.8 4.5 5M11.5 20c.6-3.2 2.4-5 4.5-5 2 0 3.8 1.8 4.5 5",
  },
  {
    title: "Transformar",
    text: "Arte, tecnologia, cultura y liderazgo social al servicio del territorio.",
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
      className="size-6"
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="paper-surface border-b border-[#102844]/10 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          <aside className="lg:pt-4">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8A6B12]">
              Proyecto Educativo Institucional
            </p>
            <div className="quiet-rule mt-5 h-px w-full max-w-xs opacity-35" />
            <p className="mt-6 max-w-sm text-base leading-8 text-[#40566B]">
              Una forma de acompanar la vida escolar: familia, aula, barrio,
              valores y futuro puestos en conversacion.
            </p>
          </aside>

          <div>
            <h2 className="max-w-4xl text-[clamp(2.3rem,4.2vw,4.35rem)] font-black leading-[0.98] tracking-[-0.03em] text-[#102844]">
              Formacion integral con raiz humana y mirada comunitaria.
            </h2>

            <div className="mt-9 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="border-y border-[#102844]/14 py-6">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#102844]">
                  Mision
                </p>
                <p className="mt-3 text-xl leading-8 text-[#102844]">
                  Formar ninos, ninas y jovenes en valores, promoviendo lideres
                  sensibles a su entorno y capaces de transformar la sociedad.
                </p>
              </div>

              <div className="bg-[#102844] p-6 text-white shadow-[8px_8px_0_#C59A2F]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D8C17C]">
                  Vision
                </p>
                <p className="mt-4 text-lg leading-8 text-[#F7F2E8]">
                  Ser reconocidos como referencia educativa en formacion
                  integral en la comunidad.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-3">
              {dimensions.map((dimension, index) => (
                <article
                  key={dimension.title}
                  className="grid gap-4 border-t border-[#102844]/12 bg-[#FBF8F1]/60 px-4 py-4 md:grid-cols-[4rem_0.35fr_1fr] md:items-center md:px-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#8A6B12]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#8A6B12]">
                      <Icon path={dimension.path} />
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#102844]">
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
