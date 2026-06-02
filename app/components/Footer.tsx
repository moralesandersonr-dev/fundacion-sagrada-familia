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
    <footer id="contacto" className="bg-[#7d9bcd] text-white">
      <div className="mx-auto max-w-7xl px-5 py-9 md:px-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-[1.1fr_0.8fr_0.8fr] md:gap-10">
          <div>
            <div className="flex items-center gap-3 md:gap-4">
              <span className="grid size-12 shrink-0 place-items-center bg-white md:size-14">
                <Image
                  src="/images/Logo.png"
                  alt="Logo Fundación La Sagrada Familia"
                  width={46}
                  height={46}
                  className="object-contain"
                />
              </span>
              <div>
                <p className="text-[0.68rem] font-black uppercase tracking-[0.18em] text-[#D8C17C] md:text-xs md:tracking-[0.2em]">
                  Colegio La Sagrada Familia
                </p>
                <h2 className="mt-1 text-xl font-black md:text-2xl">
                  Integrar, para la vida.
                </h2>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#DDE8F0] md:mt-7 md:text-base md:leading-8">
              Formación integral con sentido humano, espiritual, artístico,
              tecnológico y comunitario para niños, niñas, jóvenes y familias.
            </p>
          </div>

          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#D8C17C]">
              Navegación
            </p>
            <div className="mt-4 grid grid-cols-2 gap-2 md:mt-5 md:grid-cols-1 md:gap-3">
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
            <div className="mt-4 grid gap-2 text-sm leading-6 text-[#DDE8F0] md:mt-5 md:gap-3 md:leading-7">
              <p>
                <span className="font-black text-white">Teléfono:</span> 314
                359 8739
              </p>
              <p className="break-words">
                <span className="font-black text-white">Correo:</span>{" "}
                lasagradafamiliafundacion@gmail.com
              </p>
              <p>
                <span className="font-black text-white">Ubicación:</span>{" "}
                Medellín, Antioquia
              </p>
            </div>
            <a
              href="https://wa.me/573143598739"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex rounded-lg bg-[#C59A2F] px-5 py-3 text-sm font-black text-[#40566B] transition hover:bg-[#D8C17C] md:mt-6"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/12 pt-5 text-xs text-[#C7D6EA] md:mt-10 md:flex-row md:items-center md:justify-between md:pt-6 md:text-sm">
          <p>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p>Fundación La Sagrada Familia</p>
        </div>
      </div>
    </footer>
  );
}
