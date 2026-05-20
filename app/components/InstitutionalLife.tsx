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
  { value: "30%", label: "Proyecto de aula y aplicacion practica" },
  { value: "28%", label: "Competencias ciudadanas y actitudinales" },
  { value: "10%", label: "Autoevaluacion y autonomia" },
];

export default function InstitutionalLife() {
  return (
    <section className="border-b border-[#102844]/10 bg-[#F7F2E8]">
      <div className="mx-auto grid max-w-7xl px-6 md:px-8 lg:grid-cols-[0.74fr_1.26fr]">
        <div className="border-b border-[#102844]/10 py-14 lg:border-b-0 lg:border-r lg:pr-10">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8A6B12]">
            Valores institucionales
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.02em] text-[#102844] md:text-4xl">
            Una cultura escolar que se practica en lo cotidiano.
          </h2>
          <p className="mt-5 leading-8 text-[#40566B]">
            La convivencia, la formacion de valores y el dialogo hacen parte del
            modelo institucional, inspirado en el respeto, la solidaridad y la
            dignidad de cada persona.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {values.map((value) => (
              <span
                key={value}
                className="bg-white px-3 py-2 text-sm font-bold text-[#102844] shadow-[inset_0_0_0_1px_rgba(16,40,68,0.1)]"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="py-14 lg:pl-10">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#8A6B12]">
                Evaluacion formativa
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight text-[#102844]">
                Medir tambien es acompanar.
              </h3>
              <p className="mt-5 leading-8 text-[#40566B]">
                El SIEE entiende la evaluacion como un proceso continuo y
                flexible: conocimientos, actitudes, habilidades, valores y
                planes de mejoramiento.
              </p>
            </div>

            <div className="grid gap-3">
              {evaluation.map((item) => (
                <div
                  key={item.value}
                  className="grid grid-cols-[5rem_1fr] items-center border-t border-[#102844]/12 py-3"
                >
                  <p className="text-2xl font-black text-[#102844]">
                    {item.value}
                  </p>
                  <p className="text-sm leading-6 text-[#5F6F7F]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 border-l-2 border-[#C59A2F] pl-5">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8A6B12]">
              Entorno institucional
            </p>
            <p className="mt-2 max-w-2xl leading-7 text-[#40566B]">
              La vida escolar ocurre tambien en zonas verdes, senderos,
              espacios abiertos y aulas donde la participacion se vuelve
              experiencia cotidiana.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
