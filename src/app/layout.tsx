import type { Metadata } from "next";
import { REM } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";

const rem = REM({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Máximo Facundo Callejas",
  description: "Sitio personal y portfolio de proyectos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={rem.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
