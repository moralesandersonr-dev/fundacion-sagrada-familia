"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#about" },
  { label: "Proyectos", href: "/#projects" },
  { label: "RTE", href: "/rte" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between bg-[#F7F2E8]/92 px-4 py-3 shadow-[0_10px_35px_rgba(16,40,68,0.12)] ring-1 ring-[#102844]/10 backdrop-blur-md md:px-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center bg-white shadow-[inset_0_0_0_1px_rgba(16,40,68,0.12)]">
            <Image
              src="/images/Logo.png"
              alt="Logo Fundacion La Sagrada Familia"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.76rem] font-black uppercase tracking-[0.1em] text-[#102844] md:text-sm">
              Fundacion La Sagrada Familia
            </span>
            <span className="hidden text-xs text-[#5F6F7F] md:block">
              Formacion integral en Medellin
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-sm font-bold text-[#102844] transition hover:bg-white hover:text-[#8A6B12]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/573143598739"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden bg-[#102844] px-5 py-2.5 text-sm font-black text-white transition hover:bg-[#18395E] md:inline-flex"
        >
          Agendar visita
        </a>

        <button
          className="ml-auto px-3 py-2 text-sm font-black uppercase tracking-[0.12em] text-[#102844] lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
          type="button"
        >
          {open ? "Cerrar" : "Menu"}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl bg-[#F7F2E8] p-4 shadow-2xl ring-1 ring-[#102844]/10 lg:hidden">
          <div className="grid gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-3 text-base font-black text-[#102844] hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/573143598739"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-[#102844] px-4 py-3 text-center text-sm font-black text-white"
            >
              Agendar visita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
