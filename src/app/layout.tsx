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
  description: "Desarrollador Web | Portfolio personal",
  metadataBase: new URL("https://maximocallejas.vercel.app"),
  openGraph: {
    title: "Máximo Facundo Callejas",
    description: "Desarrollador Web | Portfolio personal",
    url: "https://maximocallejas.vercel.app",
    siteName: "Máximo Callejas",
    images: [
      {
        url: "https://maximocallejas.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imagen destacada de Máximo Callejas",
      },
    ],
    locale: "es_AR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Máximo Facundo Callejas",
    description: "Desarrollador Web | Portfolio personal",
    images: ["https://maximocallejas.vercel.app/og-image.png"],
    creator: "@maxi_callejas",
  },
  icons: {
    icon: "/favicon.ico",
  },
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
