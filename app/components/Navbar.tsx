"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/#about" },
  { label: "Proyectos", href: "/#projects" },
  { label: "RTE", href: "/rte" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 24);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full px-3 transition-all duration-300 md:px-4 ${
        scrolled ? "pt-2" : "pt-3 md:pt-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "border-white/18 bg-[#7d9bcd]/72 px-3 py-2 shadow-[0_18px_42px_rgba(125,155,205,0.28)] backdrop-blur-xl md:max-w-6xl md:px-4"
            : "border-[#7d9bcd]/10 bg-[#F7F2E8]/88 px-3 py-2.5 shadow-[0_10px_35px_rgba(125,155,205,0.10)] backdrop-blur-md md:px-5 md:py-3"
        }`}
      >
        <Link href="/" className="flex min-w-0 items-center gap-2.5 md:gap-3">
          <span
            className={`grid shrink-0 place-items-center bg-white shadow-[inset_0_0_0_1px_rgba(125,155,205,0.12)] transition-all duration-300 ${
              scrolled ? "size-8 md:size-9" : "size-9 md:size-10"
            }`}
          >
            <Image
              src="/images/Logo.png"
              alt="Logo Fundación La Sagrada Familia"
              width={34}
              height={34}
              className="object-contain"
              priority
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span
              className={`block truncate text-[0.68rem] font-black uppercase tracking-[0.08em] transition-colors sm:text-[0.76rem] md:text-sm ${
                scrolled ? "text-white" : "text-[#7d9bcd]"
              }`}
            >
              Fundación La Sagrada Familia
            </span>
            <span
              className={`hidden overflow-hidden text-xs transition-all duration-300 md:block ${
                scrolled
                  ? "max-h-0 text-white/65 opacity-0"
                  : "max-h-5 text-[#5F6F7F] opacity-100"
              }`}
            >
              Formación integral en Medellín
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative px-3 py-2 text-sm font-bold transition after:absolute after:bottom-1 after:left-3 after:h-px after:w-0 after:bg-[#C59A2F] after:transition-all hover:after:w-[calc(100%-1.5rem)] ${
                scrolled
                  ? "text-white/88 hover:text-[#D8C17C]"
                  : "text-[#7d9bcd] hover:text-[#8A6B12]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href="https://wa.me/573143598739"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden rounded-full text-sm font-black transition md:inline-flex ${
            scrolled
              ? "bg-[#C59A2F] px-4 py-2 text-[#7d9bcd] hover:bg-[#D8C17C]"
              : "bg-[#7d9bcd] px-5 py-2.5 text-white hover:bg-[#7d9bcd]"
          }`}
        >
          Agendar visita
        </a>

        <button
          className={`ml-2 px-2.5 py-2 text-xs font-black uppercase tracking-[0.1em] transition-colors lg:hidden ${
            scrolled ? "text-white" : "text-[#7d9bcd]"
          }`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          type="button"
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/45 bg-[#F7F2E8]/98 p-3 shadow-2xl ring-1 ring-[#7d9bcd]/10 backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2.5 text-sm font-black text-[#7d9bcd] hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/573143598739"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 rounded-full bg-[#7d9bcd] px-4 py-3 text-center text-sm font-black text-white"
            >
              Agendar visita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
