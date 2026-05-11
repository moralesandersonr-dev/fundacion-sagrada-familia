export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#123C73] mb-10">
          Nosotros
        </h2>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          
          {/* Misión */}
          <div className="bg-[#F3F9FC] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#2FA8E0] mb-3">
              Misión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Formar niños, niñas y jóvenes en valores, promoviendo líderes sensibles a su entorno y capaces de transformar la sociedad.

            </p>
          </div>

          {/* Visión */}
          <div className="bg-[#F3F9FC] p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-[#2FA8E0] mb-3">
              Visión
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Ser reconocidos como referencia educativa en formación integral en la comunidad.

            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
