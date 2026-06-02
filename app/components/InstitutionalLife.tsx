import {
  BadgeCheck,
  ClipboardCheck,
  HandHeart,
  Leaf,
  Scale,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";

type ValueItem = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  text: string;
  title: string;
};

const values: ValueItem[] = [
  {
    Icon: HandHeart,
    title: "Valores institucionales",
    text: "Espiritualidad, transparencia, servicio, compromiso, fraternidad, responsabilidad y equidad.",
  },
  {
    Icon: Scale,
    title: "Convivencia cotidiana",
    text: "El diálogo y los acuerdos formativos sostienen una cultura de respeto y solidaridad.",
  },
  {
    Icon: ClipboardCheck,
    title: "Evaluación formativa",
    text: "El SIEE entiende la evaluación como proceso continuo: conocimientos, habilidades, actitudes y mejoramiento.",
  },
  {
    Icon: Leaf,
    title: "Entorno institucional",
    text: "Zonas verdes, senderos, espacios abiertos y aulas hacen parte de la experiencia escolar.",
  },
];

const evaluation = [
  { value: "25%", label: "Seguimiento, trabajo de clase y equipo" },
  { value: "30%", label: "Proyecto de aula y aplicación práctica" },
  { value: "28%", label: "Competencias ciudadanas y actitudinales" },
  { value: "10%", label: "Autoevaluación y autonomía" },
];

export default function InstitutionalLife() {
  return (
    <section className="border-b border-[#7d9bcd]/10 bg-[#F7F2E8] py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#7d9bcd]/12 text-[#7d9bcd] ring-1 ring-[#7d9bcd]/16">
            <BadgeCheck className="size-7" aria-hidden="true" />
          </div>

          <p className="mt-7 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]">
            Vida institucional
          </p>

          <h2 className="mt-3 text-[clamp(2rem,8vw,3rem)] font-black leading-tight text-[#7d9bcd] md:text-[clamp(2.5rem,4.2vw,4.2rem)]">
            Una cultura escolar que se practica en lo cotidiano.
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#40566B] md:text-base md:leading-8">
            La convivencia, la formación de valores y el acompañamiento
            formativo hacen parte del modelo institucional, inspirado en el
            respeto, la solidaridad y la dignidad de cada persona.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-8 md:grid-cols-2 md:gap-x-14 md:gap-y-10">
          {values.map(({ Icon, title, text }) => (
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

        <div className="mx-auto mt-12 grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {evaluation.map((item) => (
            <article
              key={item.value}
              className="rounded-lg border border-[#7d9bcd]/14 bg-white/76 p-5 shadow-[0_12px_32px_rgba(125,155,205,0.11)]"
            >
              <p className="text-3xl font-black text-[#7d9bcd]">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#5F6F7F]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
