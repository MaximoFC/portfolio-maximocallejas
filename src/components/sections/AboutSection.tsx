'use client';

import { motion } from "framer-motion";
import Image from "next/image";

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
            className="min-h-screen snap-start px-4 py-12 flex flex-col md:flex-row items-center gap-8"
            style={{
                backgroundColor: "#eff6ff",
                backgroundImage: 'url("/paper-3.png")',
            }}
        >
            <div className="flex-1 flex flex-col gap-6 px-4 md:px-6 lg:px-12 items-center text-center md:text-left">
                <motion.h2
                    className="text-4xl font-bold text-blue-500"
                    variants={fadeUp(0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Quién soy
                </motion.h2>
                <motion.p
                    className="text-muted-foreground text-lg leading-relaxed"
                    variants={fadeUp(0.2)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Soy <span className="text-blue-500 font-semibold">Máximo</span> Facundo Callejas, tengo 21 años, y soy
                    <span className="text-blue-500 font-semibold"> Desarrollador Web Full Stack Jr.</span><br />
                    Me especializo en Back-End con JavaScript. Aunque me gusta ampliar mi conocimiento aprendiendo UX/UI. <br />
                    Finalicé mi formación en la <span className="text-blue-500 font-semibold">Universidad Tecnológica Nacional </span> 
                    - Facultad Regional Tucumán 
                    como <span className="text-blue-500 font-semibold">Técnico Universitario en Programación</span>. <br />
                    Actualmente estoy aprendiendo AWS. <br />
                </motion.p>
                <motion.h3
                    className="text-blue-500 text-2xl flex items-center gap-2"
                    variants={fadeUp(0.4)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    Codeando desde Tucumán, Argentina
                    <Image 
                        src="/argentinaflag.svg"
                        alt="Bandera de Argentina"
                        width={28}
                        height={22}
                    />
                </motion.h3>
            </div>
        </section>
    );
}
