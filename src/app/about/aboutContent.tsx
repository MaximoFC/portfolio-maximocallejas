'use client'

import { motion } from "framer-motion"

export default function AboutContent() {
    return (
        <motion.section 
            className="w-full h-[calc(100vh-76px)] px-4 py-12 flex flex-col md:flex-row justify-between items-center gap-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y :0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="h-full flex-1 flex flex-col px-6">
                <h2 className="text-4xl font-bold mb-4 text-blue-500">Quién soy</h2>
                <p className="text-muted-foreground mb-6">
                    Soy Máximo Facundo Callejas, desarrollador web con una base sólida en JavaScript, tanto en Frontend como en Backend.
                    Finalicé mi formación en la Universidad Tecnológica Nacional - Facultad Regional Tucumán como Técnico Universitario en
                    Programación.
                </p>
            </div>
            <motion.div 
                className="h-full flex-1 flex flex-col px-6"
                initial={{ opacity: 0, x:50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
            >
                <h3 className="text-4xl font-semibold mb-2 text-blue-500">Mis habilidades</h3>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-4">
                    {[
                        "HTML y CSS", "JavaScript", "TypeScript", "React", "Next.js", "PostgreSQL", "Node.js", "MySQL", "Git y GitHub",
                        "MongoDB", "JWT", "Express"
                    ].map((tech, index) => (
                        <motion.li
                            key={index}
                            className="bg-blue-100 rounded-lg px-4 py-2 text-center text-sm cursor-default"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type:"spring", stiffness:300, damping: 15 }}
                        >
                            {tech}
                        </motion.li>
                    ))}   
                </ul>
            </motion.div>
        </motion.section>
    );
}