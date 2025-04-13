'use client';

import { motion } from "framer-motion";

export default function ContactSection() {
    return (
        <motion.section
            id="contact"
            className="h-screen snap-start snap-always px-4 py-12 flex flex-col items-center justify-center"
            style={{
                backgroundColor: "#eff6ff",
                backgroundImage: 'url("/paper-3.png")',
            }}
        >
            <h2 className="text-4xl font-bold text-blue-500 mb-6 text-center">Contacto</h2>
            <p className="text-center text-muted-foreground max-w-xl mb-8">
                Siempre estoy interesado en nuevas oportunidades y emprender proyectos. Si te interesa trabajar o colaborar conmigo, 
                podés contactarte a través de este formulario o por redes sociales
            </p>
            <form 
                action=""
                className="w-full max-w-md flex flex-col gap-4"
            >
                <input 
                    type="text"
                    placeholder="Tu nombre"
                    className="border border-gray-600 rounded px-4 py-2 bg-white"
                />
                <input 
                    type="email"
                    placeholder="Tu correo"
                    className="border border-gray-600 rounded px-4 py-2 bg-white"
                />
                <textarea 
                    placeholder="Tu mensaje"
                    rows={5}
                    className="border border-gray-600 rounded px-4 py-2 bg-white"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-150 hover:bg-blue-600 hover:scale-105 cursor-pointer"
                >
                    Enviar
                </button>
            </form>
        </motion.section>
    );
}