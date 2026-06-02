import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/interfaces-carousel";

type ProjectCard = {
  alt: string;
  description: string;
  image: string;
  position: string;
  title: string;
};

const projects: ProjectCard[] = [
  {
    image: "/images/vida-globos.jpeg",
    alt: "Escuela de líderes sociales",
    title: "Escuela de líderes sociales",
    description:
      "Espacios de participación donde los estudiantes aprenden a servir, proponer y construir comunidad.",
    position: "object-[50%_44%]",
  },
  {
    image: "/images/aman-la-vida.jpeg",
    alt: "Los niños, las niñas y adolescentes aman la vida en la escuela",
    title: "Aman la vida en la escuela",
    description:
      "Experiencias que fortalecen el cuidado, la alegría y el sentido de pertenencia por la institución.",
    position: "object-[50%_46%]",
  },
  {
    image: "/images/Empatia-animal.jpeg",
    alt: "Empatía animal",
    title: "Empatía animal",
    description:
      "Actividades para reconocer el valor de la vida y cultivar el respeto por otros seres.",
    position: "object-[50%_42%]",
  },
  {
    image: "/images/camino-vida.jpeg",
    alt: "Un camino a la vida",
    title: "Un camino a la vida",
    description:
      "Rutas pedagógicas para acompañar decisiones, vínculos y proyectos personales.",
    position: "object-[50%_50%]",
  },
  {
    image: "/images/vida-arcoiris.jpeg",
    alt: "Uno somos todos",
    title: "Uno somos todos",
    description:
      "Encuentros que promueven inclusión, cooperación y reconocimiento de la diversidad.",
    position: "object-[50%_54%]",
  },
];

function ProjectImageCard({
  index,
  project,
}: {
  index: number;
  project: ProjectCard;
}) {
  return (
    <article className="group relative isolate flex aspect-square overflow-hidden rounded-lg bg-[#7d9bcd] shadow-[0_14px_34px_rgba(125,155,205,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(125,155,205,0.34)]">
      <Image
        src={project.image}
        alt={project.alt}
        fill
        sizes="(min-width: 1280px) 360px, (min-width: 768px) 340px, (min-width: 640px) 320px, 74vw"
        className={`object-cover transition duration-700 ease-out group-hover:scale-[1.05] group-hover:brightness-105 ${project.position}`}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(20,31,55,0.06)_0%,rgba(20,31,55,0.3)_42%,rgba(20,31,55,0.9)_100%)] transition duration-300 group-hover:bg-[linear-gradient(180deg,rgba(20,31,55,0.02)_0%,rgba(20,31,55,0.22)_36%,rgba(20,31,55,0.88)_100%)]" />
      <div className="relative z-10 flex min-h-full w-full flex-col justify-end p-4 text-white sm:p-5">
        <p className="mb-2 font-mono text-xs font-bold text-[#D8C17C] lg:mb-3">
          {String(index).padStart(2, "0")}
        </p>
        <h3 className="text-lg font-black leading-tight md:text-xl">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-5 text-[#E8EEF7]">
          {project.description}
        </p>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-[#7d9bcd]/10 bg-[#7d9bcd] py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#F7E7AA] md:text-xs md:tracking-[0.24em]">
              Programas que dejan huella
            </p>

          <h2 className="mt-3 text-[clamp(2rem,8vw,3rem)] font-black leading-tight text-white md:text-[clamp(2.5rem,4.2vw,4.2rem)]">
              La escuela como taller de comunidad.
            </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#EEF5FA] md:text-base md:leading-8">
            Proyectos que conectan aula, familia, territorio, espiritualidad,
            nutrición, vocación y liderazgo social.
          </p>
        </div>

        <div className="relative mt-7 md:mt-9">
          <div className="rounded-xl border border-white/16 bg-white/[0.08] px-5 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] md:px-10">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="mx-auto w-full"
            >
              <CarouselContent className="-ml-4">
                {projects.map((project, index) => (
                  <CarouselItem
                    key={project.title}
                    className="basis-[82%] sm:basis-[48%] lg:basis-1/3 xl:basis-1/4"
                  >
                    <ProjectImageCard index={index + 1} project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 top-1/2 size-11 border-white/24 bg-[#F7F2E8] text-[#7d9bcd] hover:bg-white md:-left-6 md:size-12" />
              <CarouselNext className="right-2 top-1/2 size-11 border-white/24 bg-[#F7F2E8] text-[#7d9bcd] hover:bg-white md:-right-6 md:size-12" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
