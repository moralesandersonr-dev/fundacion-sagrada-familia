import Image from "next/image";

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
      className="paper-surface relative overflow-hidden border-b border-[#7d9bcd]/10 py-16 md:py-28"
    >
      {/* Fondo atmosférico */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <div className="absolute left-[-10%] top-0 h-[420px] w-[420px] rounded-full bg-[#7d9bcd] blur-3xl" />
        <div className="absolute bottom-0 right-[-5%] h-[320px] w-[320px] rounded-full bg-[#C59A2F] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:items-start">
          
          {/* Columna izquierda */}
          <aside className="flex flex-col justify-between lg:pt-6">
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]">
                Proyecto Educativo Institucional
              </p>

              <div className="quiet-rule mt-5 h-px w-full max-w-xs opacity-35" />

              <p className="mt-6 max-w-sm text-sm leading-7 text-[#40566B] md:text-base md:leading-8">
                Una forma de acompañar la vida escolar: familia, aula, barrio,
                valores y futuro puestos en conversación.
              </p>
            </div>

            {/* Espacio visual elegante sin logo */}
            <div className="mt-12 hidden lg:block">
              <div className="rounded-[2rem] border border-white/40 bg-white/50 p-8 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <div className="space-y-4">
                  <div className="h-2 w-16 rounded-full bg-[#C59A2F]/70" />
                  <p className="text-sm leading-7 text-[#5F6F7F]">
                    Educar también es construir comunidad, fortalecer vínculos
                    y sembrar oportunidades con sentido humano.
                  </p>
                </div>
              </div>
            </div>
          </aside>

          {/* Columna derecha */}
          <div>
            <h2 className="max-w-4xl text-[clamp(1.9rem,9vw,2.8rem)] font-black leading-[1.05] tracking-[-0.045em] text-[#7d9bcd] md:text-[clamp(2.3rem,4.2vw,4.35rem)] md:leading-[1.02]">
              Formación integral con raíz humana y mirada comunitaria.
            </h2>

            {/* Misión y visión */}
            <div className="mt-8 grid gap-5 md:mt-10 lg:grid-cols-[1.05fr_0.95fr]">
              
              <div className="rounded-3xl border border-[#7d9bcd]/10 bg-white/70 p-6 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7d9bcd]">
                  Misión
                </p>

                <p className="mt-4 text-base leading-7 text-[#5F6F7F] md:text-xl md:leading-9">
                  Formar niños, niñas y jóvenes en valores, promoviendo líderes
                  sensibles a su entorno y capaces de transformar la sociedad.
                </p>
              </div>

              <div className="rounded-3xl bg-[#7d9bcd] p-6 text-white shadow-[10px_10px_0_#C59A2F]">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#D8C17C]">
                  Visión
                </p>

                <p className="mt-4 text-base leading-7 text-[#F7F2E8] md:text-lg md:leading-8">
                  Ser reconocidos como referencia educativa en formación
                  integral en la comunidad.
                </p>
              </div>
            </div>

            {/* Mobile accordion */}
            <div className="mt-8 grid gap-3 md:hidden">
              {dimensions.map((dimension, index) => (
                <details
                  key={dimension.title}
                  className="mobile-disclosure rounded-2xl border border-[#7d9bcd]/10 bg-[#FBF8F1]/80 px-4 py-4 shadow-sm"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-medium text-[#8A6B12]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-[#8A6B12]">
                        <Icon path={dimension.path} />
                      </span>

                      <span className="text-lg font-black text-[#7d9bcd]">
                        {dimension.title}
                      </span>
                    </span>

                    <span className="text-lg font-black text-[#8A6B12]">
                      +
                    </span>
                  </summary>

                  <p className="mt-4 pl-14 text-sm leading-7 text-[#5F6F7F]">
                    {dimension.text}
                  </p>
                </details>
              ))}
            </div>

            {/* Desktop cards */}
            <div className="mt-12 hidden gap-4 md:grid">
              {dimensions.map((dimension, index) => (
                <article
                  key={dimension.title}
                  className="group grid gap-5 rounded-3xl border border-[#7d9bcd]/10 bg-[#FBF8F1]/70 px-5 py-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(0,0,0,0.06)] md:grid-cols-[4rem_0.35fr_1fr] md:items-center"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-[#8A6B12]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[#8A6B12] transition-transform duration-300 group-hover:scale-110">
                      <Icon path={dimension.path} />
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-[#7d9bcd]">
                    {dimension.title}
                  </h3>

                  <p className="leading-7 text-[#5F6F7F]">
                    {dimension.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
