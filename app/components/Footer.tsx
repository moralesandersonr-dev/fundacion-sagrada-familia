import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#about" },
  { label: "Proyectos", href: "/#projects" },
  { label: "RTE", href: "/rte" },
];

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#071B33] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-4">
              <span className="grid size-14 place-items-center bg-white">
                <Image
                  src="/images/Logo.png"
                  alt="Logo Fundacion La Sagrada Familia"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D8C17C]">
                  Colegio La Sagrada Familia
                </p>
                <h2 className="mt-1 text-2xl font-black">
                  Integrar, para la vida.
                </h2>
              </div>
            </div>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#DDE8F0]">
              Formacion integral con sentido humano, espiritual, artistico,
              tecnologico y comunitario para ninos, ninas, jovenes y familias.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D8C17C]">
              Navegacion
            </p>
            <div className="mt-5 grid gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm font-bold text-[#DDE8F0] hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D8C17C]">
              Contacto
            </p>
            <div className="mt-5 grid gap-3 text-sm leading-7 text-[#DDE8F0]">
              <p>
                <span className="font-black text-white">Telefono:</span> 314
                359 8739
              </p>
              <p className="break-words">
                <span className="font-black text-white">Correo:</span>{" "}
                lasagradafamiliafundacion@gmail.com
              </p>
              <p>
                <span className="font-black text-white">Ubicacion:</span>{" "}
                Medellin, Antioquia
              </p>
            </div>
            <a
              href="https://wa.me/573143598739"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex bg-[#C59A2F] px-5 py-3 text-sm font-black text-[#071B33] transition hover:bg-[#D8C17C]"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/12 pt-6 text-sm text-[#9AB0C8] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p>Fundacion La Sagrada Familia</p>
        </div>
      </div>
    </footer>
  );
}
