export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-white pt-20">
      
      {/* Imagen de fondo */}
      <img
        src="/images/colegio.jpeg"
        alt="Colegio"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Capa oscura */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Fundación La Sagrada Familia
        </h1>

        <p className="text-lg md:text-xl mb-6">
          ¡Integrar, para la vida!
        </p>

        <a
          href="https://wa.me/573143598739"
          target="_blank"
          className="bg-[#4EB7E8] hover:bg-[#2FA8E0] px-6 py-3 rounded-xl font-semibold transition"
        >
          Contáctanos por WhatsApp
        </a>
      </div>

    </section>
  );
}