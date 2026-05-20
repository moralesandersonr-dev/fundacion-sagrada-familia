import { readdir, stat } from "node:fs/promises";
import path from "node:path";

import Link from "next/link";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsAppButton";

const rteDirectory = path.join(process.cwd(), "RTE");

const descriptions: Record<string, string> = {
  "Acta de constitución de la fundación.pdf":
    "Documento de constitucion de la Fundacion La Sagrada Familia.",
  "Estatutos FLSF 2022.pdf":
    "Estatutos institucionales actualizados para consulta publica.",
  "RUT FUNDACION 30 ABRIL 2026.pdf":
    "Registro Unico Tributario con fecha de corte abril de 2026.",
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
          descriptions[file] ?? "Documento disponible para consulta publica.",
      };
    }),
  );
}

export default async function RtePage() {
  const documents = await getDocuments();

  return (
    <main className="min-h-screen bg-[#F7F2E8]">
      <Navbar />

      <section className="border-b border-[#102844]/10 pt-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 md:px-8 lg:grid-cols-[0.55fr_1fr] lg:items-end">
          <aside>
            <Link
              href="/"
              className="inline-flex border border-[#102844]/18 px-4 py-2 text-sm font-bold text-[#102844] transition hover:bg-white"
            >
              Volver al inicio
            </Link>
            <p className="mt-10 text-xs font-black uppercase tracking-[0.24em] text-[#8A6B12]">
              Archivo publico
            </p>
            <div className="quiet-rule mt-5 h-px max-w-xs opacity-35" />
          </aside>

          <div>
            <h1 className="max-w-4xl text-[clamp(2.7rem,5vw,5.2rem)] font-black leading-[0.94] tracking-[-0.04em] text-[#102844]">
              Regimen Tributario Especial
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#40566B]">
              Documentos institucionales de la Fundacion La Sagrada Familia:
              constitucion, estatutos y RUT.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid border-t border-[#102844]/14">
            {documents.map((document, index) => (
              <article
                key={document.file}
                className="grid gap-5 border-b border-[#102844]/14 py-6 md:grid-cols-[0.16fr_1fr_0.36fr] md:items-center"
              >
                <p className="font-mono text-sm text-[#8A6B12]">
                  {String(index + 1).padStart(2, "0")} / {document.size}
                </p>
                <div>
                  <h2 className="text-2xl font-black leading-tight text-[#102844]">
                    {document.title}
                  </h2>
                  <p className="mt-2 max-w-2xl leading-7 text-[#5F6F7F]">
                    {document.description}
                  </p>
                </div>
                <div className="flex gap-3 md:justify-end">
                  <a
                    href={document.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#102844] px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-white"
                  >
                    Ver
                  </a>
                  <a
                    href={document.href}
                    download
                    className="border border-[#102844]/18 px-5 py-3 text-sm font-black uppercase tracking-[0.08em] text-[#102844] hover:bg-white"
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
