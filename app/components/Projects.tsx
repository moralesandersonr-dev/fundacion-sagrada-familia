import Image from "next/image";

const secondaryProjects = [
  {
    title: "Comer es acto sagrado",
    label: "Cuidado",
    text: "Alimentación como gesto fundacional y acompañamiento concreto a familias.",
    tone: "light",
  },
  {
    title: "El cuento lo cuento yo",
    label: "Vocación",
    text: "Conversaciones con profesionales jóvenes sobre carrera, oficio y proyecto de vida.",
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
    return "bg-[#C59A2F] text-[#7d9bcd]";
  }

  if (tone === "outline") {
    return "border border-white/18 bg-transparent text-white";
  }

  return "bg-[#F7F2E8] text-[#7d9bcd]";
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-[#7d9bcd]/10 bg-[#7d9bcd] py-10 text-white md:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-6">
          <div>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#D8C17C] md:text-xs md:tracking-[0.24em]">
              Programas que dejan huella
            </p>
            <h2 className="mt-3 max-w-2xl text-[clamp(1.9rem,8vw,2.8rem)] font-black leading-[1] tracking-[-0.032em] md:text-[clamp(2rem,3.4vw,3.8rem)] md:leading-[0.98]">
              La escuela como taller de comunidad.
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-[#DDE8F0] md:text-base">
            Proyectos que conectan aula, familia, territorio, espiritualidad,
            nutrición, vocación y liderazgo social.
          </p>
        </div>

        <div className="mt-7 grid gap-3 md:mt-9 md:gap-4 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="relative min-h-[300px] overflow-hidden bg-[#7d9bcd] p-5 md:min-h-[395px] md:p-7">
            <Image
              src="/images/vida-globos.jpeg"
              alt="Juego, color y aprendizaje compartido"
              fill
              className="object-cover object-[50%_38%] opacity-58"
              sizes="(min-width: 1024px) 56vw, 100vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(125,155,205,0.3),rgba(125,155,205,0.92))]" />
            <div className="relative z-10 flex h-full min-h-[260px] flex-col justify-between md:min-h-[340px]">
              <div className="flex items-start justify-between">
                <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#D8C17C] md:text-xs md:tracking-[0.22em]">
                  Proyecto protagonista
                </p>
                <span className="font-mono text-sm text-white/50">01</span>
              </div>

              <div className="max-w-2xl">
                <h3 className="text-2xl font-black leading-[1] tracking-[-0.03em] md:text-4xl">
                  Escuela de líderes sociales
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-[#DDE8F0] md:mt-4 md:text-base md:leading-7">
                  Cultura, arte, deporte, lectura, pastoral social e iniciativas
                  nacidas desde estudiantes que leen su territorio como un lugar
                  para servir y transformar.
                </p>
                <div className="mt-5 flex w-fit items-center gap-3 border-t border-white/24 pt-3 text-[0.68rem] font-black uppercase tracking-[0.12em] text-[#D8C17C] md:mt-6 md:text-xs">
                  Liderazgo con identidad propia
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </article>

          <div className="grid gap-3 md:gap-4">
            <article className="grid overflow-hidden bg-[#F7F2E8] text-[#7d9bcd] md:min-h-[220px] md:grid-cols-[0.82fr_1.18fr]">
              <div className="relative min-h-[165px] md:min-h-[190px]">
                <Image
                  src="/images/vida-aros.jpeg"
                  alt="Retos pedagógicos en espacios naturales"
                  fill
                  className="object-cover object-[50%_32%]"
                  sizes="(min-width: 1024px) 22vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-between p-4 md:p-5">
                <div>
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-[#8A6B12] md:text-xs">
                    Ambiente
                  </p>
                  <h3 className="mt-2 text-xl font-black leading-tight md:mt-3 md:text-2xl">
                    Amigos Francisco
                  </h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#40566B] md:mt-4">
                  Cuidado de recursos naturales, apropiación del campo y
                  hábitos responsables desde experiencias concretas.
                </p>
              </div>
            </article>

            <div className="grid gap-2 md:hidden">
              {secondaryProjects.map((project, index) => (
                <details
                  key={project.title}
                  className={`mobile-disclosure px-4 py-3 ${projectClass(project.tone)}`}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span>
                      <span className="block text-[0.68rem] font-black uppercase tracking-[0.18em] opacity-75">
                        {project.label}
                      </span>
                      <span className="mt-1 block text-lg font-black leading-tight">
                        {project.title}
                      </span>
                    </span>
                    <span className="font-mono text-xs opacity-50">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 opacity-82">
                    {project.text}
                  </p>
                </details>
              ))}
            </div>

            <div className="hidden gap-4 md:grid md:grid-cols-2">
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
