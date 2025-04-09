'use client';

import Link from "next/link";
import Image from "next/image";
import TypeWriter from "../TypeWriter";

export default function HomeSection() {
  return (
    <section 
      id="home"
      className="h-screen snap-start flex items-center justify-center px-4 bg-gradient-to-t from-slate-50 to-blue-300"
    >
      <div className="w-full text-center flex flex-col items-center gap-6">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-8">
          <div className="p-4 md:p-8 w-full md:max-w-2xl">
            <h1 className="text-4xl font-bold text-blue-500">
              Hola, soy <span className="text-black">Máximo Callejas</span>
            </h1>
            <TypeWriter />
            <div className="flex gap-4 justify-center mt-4 flex-wrap">
              <Link
                href="#about"
                aria-label="Sobre mi"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
              >
                Sobre mi
              </Link>
              <Link
                href="#projects"
                aria-label="Ver mis proyectos"
                className="bg-white text-blue-500 px-6 py-2 rounded-lg border-2 border-blue-500 transition-all duration-300 hover:bg-gray-200 hover:scale-105"
              >
                Ver mis proyectos
              </Link>
              <Link
                href="#contact"
                aria-label="Contactarme"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105"
              >
                Contactarme
              </Link>
            </div>
          </div>
          <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center">
            <div className="absolute inset-0 scale-135 z-0 pointer-events-none drop-shadow-lg">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="1"
                    strokeDasharray="20 5"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="0 100 100"
                      to="360 100 100"
                      dur="10s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="100"
                    cy="100"
                    r="90"
                    fill="none"
                    stroke="#eff6ff"
                    strokeWidth="1"
                    strokeDasharray="20 5"
                  >
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      from="360 100 100"
                      to="0 100 100"
                      dur="14s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              </svg>
            </div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg z-10">
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
      </div>
    </section>
  );
}
