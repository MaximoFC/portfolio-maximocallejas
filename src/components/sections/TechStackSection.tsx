'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 }
    }
};

export default function TechStackSection() {
    const categories = Object.keys(techStack) as (keyof typeof techStack)[];
    const [activeCategory, setActiveCategory] = useState<keyof typeof techStack>(categories[0]);

    return (
        <section
            id="stack"
            className="h-dvh snap-start px-4 py-8 flex flex-col items-center gap-6 overflow-hidden"
            style={{
                backgroundColor: "#eff6ff",
                backgroundImage: 'url("/paper-3.png")',
            }}
        >
            <motion.h2
                className="text-4xl font-bold text-blue-500 text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                Stack Tecnológico
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-1 rounded-full text-sm md:text-base transition cursor-pointer
                        ${activeCategory === category
                                ? "bg-white text-blue-500 px-6 py-2 rounded-lg border-2 border-blue-500 transition-all duration-150 hover:bg-gray-200 hover:scale-105"
                                : "bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-150 hover:bg-blue-600 hover:scale-105"
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div>
            <div className="w-full max-w-4xl flex justify-center">
                <AnimatePresence mode="wait">
                    <motion.ul
                        key={activeCategory}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 p-4"
                    >
                        {techStack[activeCategory].map((item, index) => (
                            <li
                                key={index}
                                className="bg-white border border-blue-100 rounded-xl px-3 py-2 text-sm text-blue-500 shadow-sm text-center cursor-default"
                            >
                                {item}
                            </li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </div>
        </section>
    );
}
