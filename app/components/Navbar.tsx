"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 shadow-sm">
      
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-full shadow-md">
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={45}
              height={45}
              className="object-contain"
            />
          </div>

          <span className="font-bold text-[#123C73] text-lg hidden md:block">
            Fundación La Sagrada Familia
          </span>
        </div>

        {/* Botones Desktop */}
        <div className="hidden md:flex gap-6 font-medium text-[#123C73]">
          <a href="#" className="hover:text-[#2FA8E0]">Inicio</a>
          <a href="#about" className="hover:text-[#2FA8E0]">Nosotros</a>
          <a href="#projects" className="hover:text-[#2FA8E0]">Proyectos</a>
          <a href="#contacto" className="hover:text-[#2FA8E0]">Contacto</a>
        </div>

        {/* Botón menú móvil */}
        <button
          className="md:hidden text-[#123C73] text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden bg-white px-6 py-4 flex flex-col gap-4 text-[#123C73] font-medium">
          <a href="#">Inicio</a>
          <a href="#about">Nosotros</a>
          <a href="#projects">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      )}

    </nav>
  );
}