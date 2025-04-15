'use client';

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaAngular, FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaGitAlt, FaGithub, FaTrello } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiMysql, SiMongodb, SiNetlify, SiJupyter } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbJson } from "react-icons/tb";

const techStack = {
    Frontend: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Angular", "Bootstrap", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "JWT", "C#", "Mongoose"],
    Database: ["PostgreSQL", "MySQL", "MongoDB"],
    Tools: ["Git", "GitHub", "Netlify", "Trello", "JupyterNotebook"]
};

const iconMap: { [key: string]: JSX.Element } = {
    HTML: <FaHtml5 className="text-orange-600 w-5 h-5 mr-3" />,
    CSS: <FaCss3Alt className="w-5 h-5 mr-3" />,
    JavaScript: <IoLogoJavascript className="text-yellow-400 w-5 h-5 mr-3" />,
    TypeScript: <SiTypescript className="text-blue-600 w-5 h-5 mr-3" />,
    React: <FaReact className="text-cyan-500 w-5 h-5 mr-3" />,
    "Next.js": <RiNextjsFill className="text-black w-5 h-5 mr-3" />,
    Angular: <FaAngular className="text-red-500 w-5 h-5 mr-3" />,
    Bootstrap: <FaBootstrap className="text-purple-600 w-5 h-5 mr-3" />,
    "Tailwind CSS": <SiTailwindcss className="text-cyan-400 w-5 h-5 mr-3" />,
    "Node.js": <FaNodeJs className="text-green-600 w-5 h-5 mr-3" />,
    Express: <SiExpress className="text-gray-700 w-5 h-5 mr-3" />,
    JWT: <TbJson className="text-orange-400 w-5 h-5 mr-3" />,
    "C#": <span className="text-violet-600 font-bold text-sm mr-3">C#</span>,
    Mongoose: <SiMongodb className="text-green-600 w-5 h-5 mr-3" />,
    PostgreSQL: <SiPostgresql className="text-blue-800 w-5 h-5 mr-3" />,
    MySQL: <SiMysql className="text-sky-600 w-5 h-5 mr-3" />,
    MongoDB: <SiMongodb className="text-green-600 w-5 h-5 mr-3" />,
    Git: <FaGitAlt className="text-red-500 w-5 h-5 mr-3" />,
    GitHub: <FaGithub className="text-gray-800 w-5 h-5 mr-3" />,
    Netlify: <SiNetlify className="text-green-500 w-5 h-5 mr-3" />,
    Trello: <FaTrello className="text-blue-500 w-5 h-5 mr-3" />,
    JupyterNotebook: <SiJupyter className="text-orange-500 w-5 h-5 mr-3" />,
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, ease: "easeOut" }
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
            <motion.p
                className="text-muted-foreground text-lg max-w-2xl text-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                Estas son las tecnologías y herramientas que utilizo regularmente en mis proyectos de desarrollo web, tanto en el
                frontend como en el backend.
            </motion.p>
            <motion.div 
                className="flex flex-wrap justify-center gap-4"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-1 rounded-full text-sm md:text-base transition cursor-pointer
                        ${activeCategory === category
                                ? "bg-white text-blue-500 px-6 py-2 rounded-lg border-2 border-blue-500 transition-all duration-150 hover:bg-gray-200 hover:scale-105"
                                : "bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-150 hover:bg-blue-600 hover:scale-105"
                            }`}
                        aria-pressed={activeCategory === category}
                        aria-label={`Mostrar tecnologías de ${category}`}
                    >
                        {category}
                    </button>
                ))}
            </motion.div>

            <div className="sr-only">
                <h3>Frontend</h3>
                <h3>Backend</h3>
                <h3>Database</h3>
                <h3>Tools</h3>
            </div>

            <motion.div 
                className="w-full max-w-4xl flex justify-center"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <AnimatePresence mode="wait">
                    <motion.ul
                        key={activeCategory}
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="grid grid-cols-2 gap-4 mt-4 p-4"
                    >
                        {techStack[activeCategory].map((item, index) => (
                            <li
                                key={index}
                                className="flex items-center justify-center bg-white border border-blue-100 rounded-xl px-3 py-2 text-sm text-blue-500 shadow-sm text-center cursor-default"
                            >
                                <span role="img" aria-label={item} className="flex items-center">
                                    {iconMap[item]} {item}
                                </span>
                            </li>
                        ))}
                    </motion.ul>
                </AnimatePresence>
            </motion.div>
        </section>
    );
}
