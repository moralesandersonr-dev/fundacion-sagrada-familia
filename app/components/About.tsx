import {
  Compass,
  Eye,
  GraduationCap,
  Heart,
  MessageCircleHeart,
  Sparkles,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type Dimension = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  title: string;
};

const dimensions: Dimension[] = [
  {
    Icon: Heart,
    title: "Ser",
    text: "Formación personal, espiritualidad y sentido de vida.",
  },
  {
    Icon: GraduationCap,
    title: "Saber",
    text: "Acompañamiento académico, pensamiento crítico y aprender haciendo.",
  },
  {
    Icon: MessageCircleHeart,
    title: "Convivir",
    text: "Diálogo, mediación, respeto por la diversidad y acuerdos formativos.",
  },
  {
    Icon: Sparkles,
    title: "Transformar",
    text: "Arte, tecnología, cultura y liderazgo social al servicio del territorio.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-b border-[#7d9bcd]/10 bg-[#F7F2E8] py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#7d9bcd]/12 text-[#7d9bcd] ring-1 ring-[#7d9bcd]/16">
            <Compass className="size-7" aria-hidden="true" />
          </div>

          <p className="mt-7 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]">
            Proyecto Educativo Institucional
          </p>

          <h2 className="mt-3 text-[clamp(2rem,8vw,3rem)] font-black leading-tight text-[#7d9bcd] md:text-[clamp(2.5rem,4.2vw,4.2rem)]">
            Formación integral con raíz humana y mirada comunitaria.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#40566B] md:text-base md:leading-8">
            Una forma de acompañar la vida escolar: familia, aula, barrio,
            valores y futuro puestos en conversación.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-[#7d9bcd]/14 bg-white/78 p-6 shadow-[0_14px_38px_rgba(125,155,205,0.12)]">
            <div className="grid size-10 place-items-center rounded-xl bg-[#7d9bcd]/12 text-[#7d9bcd]">
              <Compass className="size-5" aria-hidden="true" />
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#8A6B12]">
              Misión
            </p>
            <p className="mt-3 text-base leading-7 text-[#40566B] md:text-lg md:leading-8">
              Formar niños, niñas y jóvenes en valores, promoviendo líderes
              sensibles a su entorno y capaces de transformar la sociedad.
            </p>
          </article>

          <article className="rounded-lg bg-[#7d9bcd] p-6 text-white shadow-[8px_8px_0_#C59A2F]">
            <div className="grid size-10 place-items-center rounded-xl bg-white/16 text-[#F7F2E8]">
              <Eye className="size-5" aria-hidden="true" />
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-[#F7E7AA]">
              Visión
            </p>
            <p className="mt-3 text-base leading-7 text-white md:text-lg md:leading-8">
              Ser reconocidos como referencia educativa en formación integral en
              la comunidad.
            </p>
          </article>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 md:gap-x-14 md:gap-y-10">
          {dimensions.map(({ Icon, title, text }) => (
            <article key={title} className="grid grid-cols-[3rem_1fr] gap-4">
              <div className="grid size-10 place-items-center rounded-xl bg-[#7d9bcd]/12 text-[#8A6B12] ring-1 ring-[#7d9bcd]/14">
                <Icon className="size-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-black text-[#7d9bcd] md:text-lg">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#5F6F7F] md:text-base">
                  {text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
