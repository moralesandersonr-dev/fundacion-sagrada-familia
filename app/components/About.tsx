import {
  BookOpen,
  Compass,
  Eye,
  FileText,
  GraduationCap,
  Heart,
  HeartHandshake,
  MessageCircleHeart,
  Scale,
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

const documents = [
  {
    title: "Cartilla práctica SIEE",
    description:
      "Conoce las orientaciones y criterios del Sistema Institucional de Evaluación de los Estudiantes.",
    href: "/images/documentos/cartilla-practica-siee.pdf",
    Icon: Scale,
  },
  {
    title: "Cartilla práctica Proyecto Educativo Institucional",
    description:
      "Conoce los principios, fundamentos y orientaciones que dan identidad al Proyecto Educativo Institucional.",
    href: "/images/documentos/cartilla-practica-proyecto-educativo-institucional.pdf",
    Icon: BookOpen,
  },
  {
    title: "Cartilla práctica Modelo Educativo",
    description:
      "Conoce el modelo educativo que orienta nuestra propuesta de formación integral.",
    href: "/images/documentos/cartilla-practica-modelo-educativo.pdf",
    Icon: GraduationCap,
  },
  {
    title: "Cartilla práctica Manual de Convivencia",
    description:
      "Consulta los principios, acuerdos y orientaciones que favorecen la convivencia de nuestra comunidad educativa.",
    href: "/images/documentos/cartilla-practica-manual-de-convivencia.pdf",
    Icon: HeartHandshake,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-b border-[#7d9bcd]/10 bg-[#F7F2E8] py-14 md:py-20"
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
              Ser reconocidos como referencia educativa en formación integral
              en la comunidad.
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

        {/* DOCUMENTOS INSTITUCIONALES */}

        <div
          id="documentos"
          className="mx-auto mt-20 max-w-6xl scroll-mt-24 border-t border-[#7d9bcd]/12 pt-14 md:mt-24 md:pt-16"
        >
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#7d9bcd]/12 text-[#7d9bcd] ring-1 ring-[#7d9bcd]/16">
              <FileText className="size-7" aria-hidden="true" />
            </div>

            <p className="mt-7 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]">
              Documentos institucionales
            </p>

            <h3 className="mt-3 text-[clamp(1.8rem,6vw,3rem)] font-black leading-tight text-[#7d9bcd]">
              Conoce nuestra propuesta educativa.
            </h3>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#40566B] md:text-base md:leading-8">
              Consulta las cartillas institucionales que presentan los
              fundamentos, orientaciones y acuerdos que hacen parte de nuestra
              comunidad educativa.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {documents.map(({ title, description, href, Icon }) => (
              <article
                key={title}
                className="group flex flex-col rounded-lg border border-[#7d9bcd]/14 bg-white/80 p-6 shadow-[0_14px_38px_rgba(125,155,205,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(125,155,205,0.18)]"
              >
                <div className="grid size-12 place-items-center rounded-xl bg-[#7d9bcd]/12 text-[#7d9bcd] ring-1 ring-[#7d9bcd]/14 transition-colors duration-300 group-hover:bg-[#7d9bcd] group-hover:text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </div>

                <h4 className="mt-5 text-lg font-black leading-snug text-[#7d9bcd] md:text-xl">
                  {title}
                </h4>

                <p className="mt-3 flex-1 text-sm leading-7 text-[#5F6F7F] md:text-base">
                  {description}
                </p>

                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#7d9bcd] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#6b8cbe] hover:shadow-[4px_4px_0_#C59A2F]"
                >
                  <FileText className="size-4" aria-hidden="true" />
                  Consultar documento
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
