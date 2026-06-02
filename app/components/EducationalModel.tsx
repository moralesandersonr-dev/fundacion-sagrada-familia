import {
  BookOpenCheck,
  Brain,
  HeartHandshake,
  Sprout,
  UsersRound,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type ModelItem = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  title: string;
};

const model: ModelItem[] = [
  {
    Icon: BookOpenCheck,
    title: "Aprender haciendo",
    text: "El aula se conecta con preguntas, proyectos y experiencias que permiten aplicar el conocimiento a la vida cotidiana.",
  },
  {
    Icon: Brain,
    title: "Pensamiento crítico",
    text: "Se promueve la capacidad de interpretar, argumentar y proponer desde cada área del saber.",
  },
  {
    Icon: HeartHandshake,
    title: "Acompañamiento integral",
    text: "El seguimiento considera conocimientos, actitudes, valores, habilidades y necesidades educativas.",
  },
  {
    Icon: UsersRound,
    title: "Comunidad y convivencia",
    text: "La formación fortalece el diálogo, los acuerdos, el respeto por la diversidad y el trabajo con las familias.",
  },
];

const formation = [
  "Desarrollo personal",
  "Desarrollo social",
  "Desarrollo académico",
  "Sentido espiritual",
  "Arte y ambiente",
];

export default function EducationalModel() {
  return (
    <section className="border-b border-[#7d9bcd]/10 bg-[#7d9bcd] py-14 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/16 text-[#F7E7AA] ring-1 ring-white/18">
            <Sprout className="size-7" aria-hidden="true" />
          </div>

          <p className="mt-7 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#F7E7AA] md:text-xs md:tracking-[0.24em]">
            Modelo Holístico Transformador
          </p>

          <h2 className="mt-3 text-[clamp(2rem,8vw,3rem)] font-black leading-tight md:text-[clamp(2.5rem,4.2vw,4.2rem)]">
            Una pedagogía que mira al estudiante completo.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#DDE8F0] md:text-base md:leading-8">
            El PEI articula dimensiones personales, académicas, sociales,
            normativas, espirituales, artísticas y ambientales para formar con
            sentido y responsabilidad.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 md:gap-x-14 md:gap-y-10 lg:mt-16">
          {model.map(({ Icon, title, text }) => (
            <article key={title} className="grid grid-cols-[3rem_1fr] gap-4">
              <div className="grid size-10 place-items-center rounded-xl bg-white/16 text-[#F7E7AA] ring-1 ring-white/16">
                <Icon className="size-5" aria-hidden="true" />
              </div>

              <div>
                <h3 className="text-base font-black text-white md:text-lg">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#DDE8F0] md:text-base">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap justify-center gap-2">
          {formation.map((item) => (
            <span
              key={item}
              className="rounded-lg border border-white/18 bg-white/12 px-3 py-2 text-xs font-bold text-[#F7F2E8] md:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
