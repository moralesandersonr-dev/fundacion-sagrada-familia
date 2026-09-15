import {
  BookOpen,
  FileText,
  GraduationCap,
  HeartHandshake,
  Scale,
} from "lucide-react";

type DocumentItem = {
  title: string;
  description: string;
  href: string;
  Icon: typeof FileText;
};

const documents: DocumentItem[] = [
  {
    title: "Cartilla práctica SIEE",
    description:
      "Conoce las orientaciones y criterios del Sistema Institucional de Evaluación de los Estudiantes.",
    href: "/documentos/cartilla-practica-siee.pdf",
    Icon: Scale,
  },
  {
    title: "Cartilla práctica Proyecto Educativo Institucional",
    description:
      "Conoce los principios, fundamentos y orientaciones que dan identidad al Proyecto Educativo Institucional.",
    href: "/documentos/cartilla-practica-proyecto-educativo-institucional.pdf",
    Icon: BookOpen,
  },
  {
    title: "Cartilla práctica Modelo Educativo",
    description:
      "Conoce el modelo educativo que orienta nuestra propuesta de formación integral.",
    href: "/documentos/cartilla-practica-modelo-educativo.pdf",
    Icon: GraduationCap,
  },
  {
    title: "Cartilla práctica Manual de Convivencia",
    description:
      "Consulta los principios, acuerdos y orientaciones que favorecen la convivencia de nuestra comunidad educativa.",
    href: "/documentos/cartilla-practica-manual-de-convivencia.pdf",
    Icon: HeartHandshake,
  },
];

export default function Documents() {
  return (
    <section
      id="documentos"
      className="border-b border-[#7d9bcd]/10 bg-[#F7F2E8] py-14 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-[#7d9bcd]/12 text-[#7d9bcd] ring-1 ring-[#7d9bcd]/16">
            <FileText className="size-7" aria-hidden="true" />
          </div>

          <p className="mt-7 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]">
            Documentos institucionales
          </p>

          <h2 className="mt-3 text-[clamp(2rem,8vw,3rem)] font-black leading-tight text-[#7d9bcd] md:text-[clamp(2.5rem,4.2vw,4.2rem)]">
            Conoce nuestra propuesta educativa.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#40566B] md:text-base md:leading-8">
            Consulta las cartillas institucionales que presentan los
            fundamentos, orientaciones y acuerdos que hacen parte de nuestra
            comunidad educativa.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 sm:grid-cols-2">
          {documents.map(({ title, description, href, Icon }) => (
            <article
              key={title}
              className="group flex flex-col rounded-lg border border-[#7d9bcd]/14 bg-white/80 p-6 shadow-[0_14px_38px_rgba(125,155,205,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(125,155,205,0.18)]"
            >
              <div className="grid size-12 place-items-center rounded-xl bg-[#7d9bcd]/12 text-[#7d9bcd] ring-1 ring-[#7d9bcd]/14 transition-colors duration-300 group-hover:bg-[#7d9bcd] group-hover:text-white">
                <Icon className="size-6" aria-hidden="true" />
              </div>

              <h3 className="mt-5 text-lg font-black leading-snug text-[#7d9bcd] md:text-xl">
                {title}
              </h3>

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
    </section>
  );
}
