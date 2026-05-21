const values = [
  "Espiritualidad",
  "Transparencia",
  "Servicio",
  "Compromiso",
  "Mejora continua",
  "Fraternidad",
  "Responsabilidad",
  "Equidad",
];

const evaluation = [
  { value: "25%", label: "Seguimiento, trabajo de clase y equipo" },
  { value: "30%", label: "Proyecto de aula y aplicación práctica" },
  { value: "28%", label: "Competencias ciudadanas y actitudinales" },
  { value: "10%", label: "Autoevaluación y autonomía" },
];

export default function InstitutionalLife() {
  return (
    <section className="border-b border-[#7d9bcd]/10 bg-[#F7F2E8]">
      <div className="mx-auto grid max-w-7xl px-5 md:px-8 lg:grid-cols-[0.74fr_1.26fr]">
        <div className="border-b border-[#7d9bcd]/10 py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pr-10">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]">
            Valores institucionales
          </p>
          <h2 className="mt-3 text-[clamp(1.85rem,8vw,2.55rem)] font-black leading-tight tracking-[-0.02em] text-[#7d9bcd] md:mt-4 md:text-4xl">
            Una cultura escolar que se practica en lo cotidiano.
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#40566B] md:mt-5 md:text-base md:leading-8">
            La convivencia, la formación de valores y el diálogo hacen parte del
            modelo institucional, inspirado en el respeto, la solidaridad y la
            dignidad de cada persona.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2 md:mt-8 md:flex md:flex-wrap">
            {values.map((value) => (
              <span
                key={value}
                className="bg-white px-3 py-2 text-xs font-bold text-[#7d9bcd] shadow-[inset_0_0_0_1px_rgba(125,155,205,0.1)] md:text-sm"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="py-10 lg:py-14 lg:pl-10">
          <div className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-8">
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:text-xs md:tracking-[0.24em]">
                Evaluación formativa
              </p>
              <h3 className="mt-3 text-[clamp(1.75rem,7vw,2.35rem)] font-black leading-tight text-[#7d9bcd] md:mt-4 md:text-3xl">
                Medir también es acompañar.
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#40566B] md:mt-5 md:text-base md:leading-8">
                El SIEE entiende la evaluación como un proceso continuo y
                flexible: conocimientos, actitudes, habilidades, valores y
                planes de mejoramiento.
              </p>
            </div>

            <div className="grid gap-2 md:gap-3">
              {evaluation.map((item, index) => (
                <details
                  key={item.value}
                  className="mobile-disclosure border-t border-[#7d9bcd]/12 py-3 md:hidden"
                  open={index === 0}
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4">
                    <span className="text-2xl font-black text-[#7d9bcd]">
                      {item.value}
                    </span>
                    <span className="text-lg font-black text-[#8A6B12]">+</span>
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-[#5F6F7F]">
                    {item.label}
                  </p>
                </details>
              ))}

              {evaluation.map((item) => (
                <div
                  key={item.value}
                  className="hidden grid-cols-[5rem_1fr] items-center border-t border-[#7d9bcd]/12 py-3 md:grid"
                >
                  <p className="text-2xl font-black text-[#7d9bcd]">
                    {item.value}
                  </p>
                  <p className="text-sm leading-6 text-[#5F6F7F]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-7 border-l-2 border-[#C59A2F] pl-4 md:mt-8 md:pl-5">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8A6B12] md:text-sm">
              Entorno institucional
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-7 text-[#40566B] md:text-base">
              La vida escolar ocurre también en zonas verdes, senderos,
              espacios abiertos y aulas donde la participación se vuelve
              experiencia cotidiana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
