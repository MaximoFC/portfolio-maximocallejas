'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "../ProjectCard";

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

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section
            id="projects"
            className="h-dvh snap-start px-4 py-8 flex flex-col items-center justify-center gap-8"
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
                Mis proyectos
            </motion.h2>

            <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        layout
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        className="w-full"
                    >
                        <ProjectCard {...projects[currentIndex]} />
                    </motion.div>
                </AnimatePresence>
                <div className="flex gap-4">
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`h-3 w-8 rounded-full transition-all cursor-pointer ${
                                index === currentIndex
                                    ? "bg-blue-500 w-12"
                                    : "bg-blue-200 hover:bg-blue-400"
                            }`}
                            aria-label={`Ver proyecto ${index + 1}`}
                            aria-pressed={index === currentIndex}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
