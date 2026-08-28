import Image from "next/image";

const testimonios = [
  {
    src: "/testimonios/testimonio1.jpeg",
    alt: "Testimonio de la Fundación La Sagrada Familia 1",
  },
  {
    src: "/testimonios/testimonio2.jpeg",
    alt: "Testimonio de la Fundación La Sagrada Familia 2",
  },
  {
    src: "/testimonios/testimonio3.jpeg",
    alt: "Testimonio de la Fundación La Sagrada Familia 3",
  },
];

export default function TestimoniosPage() {
  return (
    <main className="min-h-screen bg-[#F7F2E8] px-4 pb-16 pt-32">
      <section className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-[#7d9bcd] md:text-5xl">
            Testimonios
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-[#5F6F7F]">
            Conoce las experiencias y testimonios de nuestra comunidad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonios.map((testimonio, index) => (
            <a
              key={testimonio.src}
              href={testimonio.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(125,155,205,0.18)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(125,155,205,0.28)]"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={testimonio.src}
                  alt={testimonio.alt}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={index === 0}
                />
              </div>

              <div className="p-4 text-center">
                <p className="text-sm font-bold text-[#7d9bcd]">
                  Testimonio {index + 1}
                </p>
                <p className="mt-1 text-xs text-[#5F6F7F]">
                  Haz clic para ampliar
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
