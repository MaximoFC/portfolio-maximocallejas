import type { Metadata } from "next";
import { REM } from 'next/font/google';
import "./globals.css";
import Loader from "@/components/Loader";
import ScrollProgress from "@/components/ScrollProgress";

const rem = REM({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Máximo Facundo Callejas",
  description: "Sitio personal y portfolio de proyectos"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={rem.className}>
        <ScrollProgress />
        <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
          <Loader />
          {children}
        </main>
      </body>
    </html>
  );
}
