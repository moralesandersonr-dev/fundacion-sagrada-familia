import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script, Inter } from "next/font/google";

import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title: "Fundación La Sagrada Familia | Integrar, para la vida",
  description:
    "Institución educativa en Medellín centrada en formación integral, valores, liderazgo social, arte, tecnología y comunidad.",
  openGraph: {
    title: "Fundación La Sagrada Familia",
    description:
      "Formación integral con sentido humano, espiritual, artístico, tecnológico y comunitario.",
    images: ["/images/colegio.jpeg"],
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dancing.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
