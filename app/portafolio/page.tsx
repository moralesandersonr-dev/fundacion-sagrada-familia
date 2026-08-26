export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-[#F7F2E8] px-4 pb-16 pt-32">
      <section className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-black text-[#7d9bcd] md:text-5xl">
            Portafolio
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#5F6F7F]">
            Conoce nuestro portafolio y las iniciativas de la Fundación La
            Sagrada Familia.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#7d9bcd]/20 bg-white shadow-[0_18px_50px_rgba(125,155,205,0.18)]">
          <iframe
            src="/portafolio.pdf"
            title="Portafolio Fundación La Sagrada Familia"
            className="h-[75vh] min-h-[600px] w-full"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="/portafolio.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#7d9bcd] px-6 py-3 text-sm font-black text-white transition hover:bg-[#6d8dbf]"
          >
            Abrir portafolio en una nueva pestaña
          </a>
        </div>
      </section>
    </main>
  );
}
