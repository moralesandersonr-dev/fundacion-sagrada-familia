export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-[#F3F9FC]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl md:text-4xl font-bold text-[#123C73] mb-12">
          Nuestros Proyectos
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Proyecto 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#2FA8E0] mb-4">
              Formación Académica
            </h3>
            <p className="text-gray-600">
              Los niños y las niñas aman la vida en la Escuela
            </p>
          </div>

          {/* Proyecto 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#2FA8E0] mb-4">
              Formación en Valores
            </h3>
            <p className="text-gray-600">
              Escuela de Formación de Líderes Sociales
            </p>
          </div>

          {/* Proyecto 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-[#2FA8E0] mb-4">
              Integración Comunidad–Familia
            </h3>
            <p className="text-gray-600">
              Estrategias que fortalecen la relación entre colegio,
              estudiantes y familias.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}