import About from "./components/About";
import EducationalModel from "./components/EducationalModel";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import InstitutionalLife from "./components/InstitutionalLife";
import Navbar from "./components/Navbar";
import PhotoBanner from "./components/PhotoBanner";
import Projects from "./components/Projects";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PhotoBanner
        src="/images/vida-globos.jpeg"
        alt="Juego, color y aprendizaje compartido"
        kicker="Vida escolar"
        title="Juego, color y aprendizaje compartido"
        text="Grupo, color, patio y alegria como parte de una experiencia escolar cercana."
        objectPosition="object-[50%_38%]"
        tone="dark"
      />
      <About />
      <PhotoBanner
        src="/images/vida-aula.jpeg"
        alt="Participacion y expresion en el aula"
        kicker="Aula viva"
        title="Participacion y expresion en el aula"
        text="Cuadernos, trabajos y voces que hacen del salon un espacio de aprendizaje participativo."
        objectPosition="object-[50%_45%]"
        tone="light"
      />
      <EducationalModel />
      <PhotoBanner
        src="/images/vida-arcoiris.jpeg"
        alt="Naturaleza y entorno institucional"
        kicker="Entorno institucional"
        title="Un paisaje que tambien educa"
        text="Zonas verdes, cielo abierto y senderos escolares como parte de una experiencia formativa humana."
        objectPosition="object-[50%_42%]"
        tone="dark"
      />
      <InstitutionalLife />
      <PhotoBanner
        src="/images/vida-sistemas.jpeg"
        alt="Exploracion digital y trabajo colaborativo"
        kicker="Tecnologia y colaboracion"
        title="Exploracion digital con sentido humano"
        text="La sala de sistemas como lugar de autonomia, trabajo compartido y nuevas formas de aprender."
        objectPosition="object-[48%_42%]"
        tone="light"
      />
      <Projects />
      <PhotoBanner
        src="/images/vida-aros.jpeg"
        alt="Retos pedagogicos en espacios naturales"
        kicker="Aprender haciendo"
        title="Retos pedagogicos en espacios naturales"
        text="Moverse, coordinar, guiar y cooperar: el aprendizaje tambien ocurre fuera del pupitre."
        objectPosition="object-[50%_32%]"
        tone="dark"
      />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
