export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#123C73] text-white py-12">
      
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Contacto
        </h2>

        <p className="mb-2">
          Fundación La Sagrada Familia
        </p>

        <p className="mb-2">
          Medellín, Antioquia
        </p>

        <p className="mb-2">
          Teléfono: 314 359 8739
        </p>

        <p className="mt-6 text-sm opacity-80">
          © {new Date().getFullYear()} Todos los derechos reservados
        </p>

      </div>

    </footer>
  );
}