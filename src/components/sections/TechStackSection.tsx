'use client';

import { motion } from "framer-motion";

const techStack = {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Bootstrap", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "JWT", "C#", "Mongoose"],
    Database: ["PostgreSQL", "MySQL", "MongoDB"],
    Tools: ["Git", "GitHub", "Netlify", "Trello", "JupyterNotebook"]
};

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function TechStackSection() {
    return (
        <motion.section
            id="stack"
            className="h-screen snap-start px-4 py-16 bg-white flex flex-col items-center gap-2 overflow-y-auto"
            style={{
                backgroundColor: "#eff6ff",
                backgroundImage: 'url("/paper-3.png")',
            }}
        >
            <motion.h2
                className="text-4xl font-bold text-blue-500 text-center mb-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                Stack Tecnológico
            </motion.h2>
            <div className="w-full max-w-6xl flex flex-col gap-3">
                {Object.entries(techStack).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <h3 className="text-3xl font-semibold text-blue-600 mb-4 text-center">{category}</h3>
                        <ul className="flex flex-wrap gap-4 justify-center md:justify-end">
                            {items.map((item, i) => (
                                <motion.li
                                    key={i}
                                    className="bg-white border border-blue-100 rounded-xl px-3 py-1 text-lg text-blue-500 shadow-sm hover:scale-105 transition-transform"
                                    variants={fadeInUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.3 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
