import { readdir, stat } from "node:fs/promises";
import path from "node:path";

import Link from "next/link";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

const rteDirectory = path.join(process.cwd(), "RTE");

const descriptions: Record<string, string> = {
  "Acta de constitución de la fundación.pdf":
    "Documento de constitución de la Fundación La Sagrada Familia.",
  "Estatutos FLSF 2022.pdf":
    "Estatutos institucionales actualizados para consulta pública.",
  "RUT FUNDACION 30 ABRIL 2026.pdf":
    "Registro �anico Tributario con fecha de corte abril de 2026.",
};

function formatBytes(bytes: number) {
  if (bytes < 1024) {
    return `${bytes} B`;
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }

  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function prettyName(file: string) {
  return file.replace(/\.pdf$/i, "");
}

async function getDocuments() {
  const entries = await readdir(rteDirectory);
  const pdfs = entries.filter((entry) => entry.toLowerCase().endsWith(".pdf"));

  return Promise.all(
    pdfs.map(async (file) => {
      const details = await stat(path.join(rteDirectory, file));

      return {
        file,
        href: `/rte/documentos/${encodeURIComponent(file)}`,
        size: formatBytes(details.size),
        title: prettyName(file),
        description:
          descriptions[file] ?? "Documento disponible para consulta pública.",
      };
    }),
  );
}

export default async function RtePage() {
  const documents = await getDocuments();

  return (
    <main className="min-h-screen bg-[#F7F2E8]">
      <Navbar />

      <section className="border-b border-[#7d9bcd]/10 pt-20 md:pt-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 md:gap-8 md:px-8 md:py-14 lg:grid-cols-[0.55fr_1fr] lg:items-end">
          <aside>
            <Link
              href="/"
              className="inline-flex border border-[#7d9bcd]/18 px-4 py-2 text-sm font-bold text-[#7d9bcd] transition hover:bg-white"
            >
              Volver al inicio
            </Link>
            <p className="mt-8 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#8A6B12] md:mt-10 md:text-xs md:tracking-[0.24em]">
              Archivo público
            </p>
            <div className="quiet-rule mt-4 h-px max-w-xs opacity-35 md:mt-5" />
          </aside>

          <div>
            <h1 className="max-w-4xl text-[clamp(2.1rem,10vw,3.25rem)] font-black leading-[0.98] tracking-[-0.04em] text-[#7d9bcd] md:text-[clamp(2.7rem,5vw,5.2rem)] md:leading-[0.94]">
              Régimen Tributario Especial
            </h1>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#40566B] md:mt-6 md:text-lg md:leading-8">
              Documentos institucionales de la Fundación La Sagrada Familia:
              constitución, estatutos y RUT.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-10 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid border-t border-[#7d9bcd]/14">
            {documents.map((document, index) => (
              <article
                key={document.file}
                className="grid gap-4 border-b border-[#7d9bcd]/14 py-5 md:grid-cols-[0.16fr_1fr_0.36fr] md:items-center md:gap-5 md:py-6"
              >
                <p className="font-mono text-xs text-[#8A6B12] md:text-sm">
                  {String(index + 1).padStart(2, "0")} / {document.size}
                </p>
                <div>
                  <h2 className="text-xl font-black leading-tight text-[#7d9bcd] md:text-2xl">
                    {document.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#5F6F7F] md:text-base md:leading-7">
                    {document.description}
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 md:flex md:justify-end md:gap-3">
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#7d9bcd] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.08em] text-white md:px-5 md:text-sm"
                  >
                    Ver
                  </a>
                  <a
                    href={document.href}
                    download
                    className="border border-[#7d9bcd]/18 px-4 py-3 text-center text-xs font-black uppercase tracking-[0.08em] text-[#7d9bcd] hover:bg-white md:px-5 md:text-sm"
                  >
                    Descargar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
}
