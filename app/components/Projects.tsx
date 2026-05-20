import Image from "next/image";

const secondaryProjects = [
  {
    title: "Comer es acto sagrado",
    label: "Cuidado",
    text: "Alimentacion como gesto fundacional y acompanamiento concreto a familias.",
    tone: "light",
  },
  {
    title: "El cuento lo cuento yo",
    label: "Vocacion",
    text: "Conversaciones con profesionales jovenes sobre carrera, oficio y proyecto de vida.",
    tone: "outline",
  },
  {
    title: "Uno somos todos",
    label: "Convivencia",
    text: "Respeto, fraternidad, solidaridad y acuerdos formativos vividos en aula.",
    tone: "gold",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="size-5"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function projectClass(tone: string) {
  if (tone === "gold") {
    return "bg-[#C59A2F] text-[#071B33]";
  }

  if (tone === "outline") {
    return "border border-white/18 bg-transparent text-white";
  }

  return "bg-[#F7F2E8] text-[#102844]";
}

export default function Projects() {
  return (
    <section id="projects" className="border-b border-[#102844]/10 bg-[#102844] py-12 text-white md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#D8C17C]">
              Programas que dejan huella
            </p>
            <h2 className="mt-3 max-w-2xl text-[clamp(2rem,3.4vw,3.8rem)] font-black leading-[0.98] tracking-[-0.032em]">
              La escuela como taller de comunidad.
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-[#DDE8F0]">
            Proyectos que conectan aula, familia, territorio, espiritualidad,
            nutricion, vocacion y liderazgo social.
          </p>
        </div>

        <div className="mt-9 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="relative min-h-[360px] overflow-hidden bg-[#071B33] p-6 md:min-h-[395px] md:p-7">
            <Image
              src="/images/vida-globos.jpeg"
              alt="Juego, color y aprendizaje compartido"
              fill
              className="object-cover object-[50%_38%] opacity-58"
              sizes="(min-width: 1024px) 56vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,0.3),rgba(7,27,51,0.92))]" />
            <div className="relative z-10 flex h-full min-h-[315px] flex-col justify-between md:min-h-[340px]">
              <div className="flex items-start justify-between">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#D8C17C]">
                  Proyecto protagonista
                </p>
                <span className="font-mono text-sm text-white/50">01</span>
              </div>

              <div className="max-w-2xl">
                <h3 className="text-3xl font-black leading-[1] tracking-[-0.03em] md:text-4xl">
                  Escuela de lideres sociales
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-[#DDE8F0]">
                  Cultura, arte, deporte, lectura, pastoral social e iniciativas
                  nacidas desde estudiantes que empiezan a leer su territorio
                  como un lugar donde pueden servir y transformar.
                </p>
                <div className="mt-6 flex w-fit items-center gap-3 border-t border-white/24 pt-3 text-xs font-black uppercase tracking-[0.12em] text-[#D8C17C]">
                  Liderazgo con identidad propia
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            <article className="grid min-h-[220px] overflow-hidden bg-[#F7F2E8] text-[#102844] md:grid-cols-[0.82fr_1.18fr]">
              <div className="relative min-h-[190px]">
                <Image
                  src="/images/vida-aros.jpeg"
                  alt="Retos pedagogicos en espacios naturales"
                  fill
                  className="object-cover object-[50%_32%]"
                  sizes="(min-width: 1024px) 22vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-between p-5">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8A6B12]">
                    Ambiente
                  </p>
                  <h3 className="mt-3 text-2xl font-black leading-tight">
                    Amigos Francisco
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-[#40566B]">
                  Cuidado de recursos naturales, apropiacion del campo y
                  habitos responsables desde experiencias concretas.
                </p>
              </div>
            </article>

            <div className="grid gap-4 md:grid-cols-2">
              {secondaryProjects.map((project, index) => (
                <article
                  key={project.title}
                  className={`min-h-[170px] p-5 ${projectClass(project.tone)}`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] opacity-75">
                      {project.label}
                    </p>
                    <span className="font-mono text-xs opacity-50">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-black leading-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 opacity-82">
                    {project.text}
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
