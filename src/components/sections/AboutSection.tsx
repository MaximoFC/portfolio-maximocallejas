'use client';

import { motion } from "framer-motion";

const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
            delay,
            ease: "easeOut"
        }
    }
});

export default function AboutSection() {
    return (
        <section 
            id="about"
            className="snap-start px-4 py-12 flex flex-col items-center gap-8 h-dvh"
            style={{
                backgroundColor: "#eff6ff",
                backgroundImage: 'url("/paper-3.png")',
            }}
        >
            <div className="flex flex-col gap-6 px-4 md:px-6 lg:px-12 items-center text-center md:text-left w-full h-full justify-center">
                <motion.h2
                    className="text-2xl md:text-4xl font-bold text-blue-500"
                    variants={fadeUp(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Quién soy
                </motion.h2>
                <div className="w-full flex flex-col md:flex-row justify-center gap-8">
                    <div className="flex-1 w-full">
                        <motion.p
                            className="text-muted-foreground text-md leading-relaxed md:text-xl md:leading-loose"
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Soy Máximo Facundo Callejas, <strong>Programador Web Full Stack Jr.</strong>
                        </motion.p>
                        <motion.p
                            className="text-muted-foreground text-md leading-relaxed md:text-xl md:leading-loose"
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Trabajo principalmente con <strong>React, Node.js, Express</strong> y <strong>MongoDB</strong>. Actualmente estoy profundizando
                            mis conocimientos en <strong>Next.js</strong> y <strong>AWS</strong>.
                        </motion.p>
                        <motion.p
                            className="text-muted-foreground text-md leading-relaxed md:text-xl md:leading-loose"
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Recientemente terminé de cursar la <strong>Tecnicatura Universitaria en Programación </strong> 
                            en la <strong>Universidad Tecnológica Nacional - Facultad Regional Tucumán</strong>.
                        </motion.p>
                        <motion.p
                            className="text-muted-foreground text-md leading-relaxed md:text-xl md:leading-loose"
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            📍 Codeando desde Tucumán, Argentina 
                        </motion.p>
                    </div>
                    <motion.div 
                        className="bg-slate-800 text-white rounded-4xl p-4 md:p-8 flex items-center flex-1 justify-center flex-col gap-8"
                        variants={fadeUp(0.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.p 
                            className="text-md md:text-xl md:leading-loose"
                            variants={fadeUp(0.2)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                        >
                            Estoy en busca de una práctica profesional supervisada para poder concretar mis estudios y recibir
                            el título. Así como también de tener mi primera experiencia laboral.
                        </motion.p>
                        <a 
                            href="/Máximo Facundo Callejas - Programador Universitario.pdf"
                            download
                            className="bg-white text-blue-500 px-6 py-2 rounded-lg border-2 border-blue-500 transition-all duration-150 hover:bg-gray-200 hover:scale-105"
                            aria-label="Descargar CV de Máximo Callejas"
                            title="Descargar CV de Máximo Callejas"
                        >
                            Descargar CV
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
