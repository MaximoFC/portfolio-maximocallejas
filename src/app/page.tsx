'use client';

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-76px)] flex items-center justify-center bg-gradient-to-t from-blue-50 to-blue-100 px-4">
      <div className="max-w-4xl w-full text-center flex flex-col items-center gap-6">
        <div className="flex justify-center items-center">
          <div className="p-8">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-500">
              Hola, soy <span className="text-black">Máximo Callejas</span>
            </h1>
            <p className="text-gray-700 text-md md:text-lg max-w-xl pt-2">
              Técnico Universitario en Programación | Web Developer
            </p>
            <div className="flex gap-4 justify-center mt-4 flex-wrap">
              <Link
                href="/about"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Sobre mi
              </Link>
              <Link
                href="/projects"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Ver mis proyectos
              </Link>
              <Link
                href="/contact"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Contactarme
              </Link>
            </div>
          </div>
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-4 border-white">
            <Image 
              src="/images/profile.jpg"
              alt="Máximo Callejas"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
