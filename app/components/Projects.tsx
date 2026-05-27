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
          <article className="group relative min-h-[300px] overflow-hidden rounded-[30px] md:min-h-[395px]">
            <Image
              src="/images/vida-globos.jpeg"
              alt="Escuela de líderes sociales"
              fill
              className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
              sizes="(min-width: 1024px) 56vw, 100vw"
              priority
            />
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
