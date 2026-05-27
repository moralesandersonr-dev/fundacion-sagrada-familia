import Image from "next/image";

const secondaryProjects = [
  {
    image: "/images/comer-sagrado.jpeg",
    alt: "Comer es acto sagrado",
  },
  {
    image: "/images/cuento-cuento.jpeg",
    alt: "El cuento lo cuento yo",
  },
  {
    image: "/images/uno-somos-todos.jpeg",
    alt: "Uno somos todos",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-[#7d9bcd]/10 bg-[#7d9bcd] py-10 md:py-16"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-6">
          <div>
            <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#D8C17C] md:text-xs md:tracking-[0.24em]">
              Programas que dejan huella
            </p>

            <h2 className="mt-3 max-w-2xl text-[clamp(1.9rem,8vw,2.8rem)] font-black leading-[1] tracking-[-0.032em] text-white md:text-[clamp(2rem,3.4vw,3.8rem)] md:leading-[0.98]">
              La escuela como taller de comunidad.
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-[#DDE8F0] md:text-base">
            Proyectos que conectan aula, familia, territorio, espiritualidad,
            nutrición, vocación y liderazgo social.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-7 grid gap-4 md:mt-9 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Proyecto principal */}
          <article className="group relative overflow-hidden rounded-[32px] bg-[#6e8bb8]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/vida-globos.jpeg"
                alt="Escuela de líderes sociales"
                fill
                priority
                sizes="(min-width: 1024px) 56vw, 100vw"
                className="
                  object-contain
                  p-2
                  transition
                  duration-700
                  ease-out
                  group-hover:scale-[1.01]
                "
              />
            </div>
          </article>

          {/* Columna derecha */}
          <div className="grid gap-4">
            {/* Proyecto secundario grande */}
            <article className="group relative min-h-[240px] overflow-hidden rounded-[28px] md:min-h-[260px]">
              <Image
                src="/images/vida-aros.jpeg"
                alt="Amigos Francisco"
                fill
                sizes="(min-width: 1024px) 24vw, 100vw"
                className="
                  object-cover
                  object-center
                  transition
                  duration-700
                  ease-out
                  group-hover:scale-[1.03]
                  group-hover:brightness-105
                "
              />
            </article>

            {/* Grid inferior */}
            <div className="grid gap-4 md:grid-cols-2">
              {secondaryProjects.map((project) => (
                <article
                  key={project.alt}
                  className="group relative min-h-[220px] overflow-hidden rounded-[24px]"
                >
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 18vw, 100vw"
                    className="
                      object-cover
                      object-center
                      transition
                      duration-700
                      ease-out
                      group-hover:scale-[1.03]
                      group-hover:brightness-105
                    "
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
