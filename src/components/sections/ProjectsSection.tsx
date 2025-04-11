'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "../ProjectCard";
import Link from "next/link";

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalProjects = projects.length;

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalProjects - 1 : prevIndex - 1
        );
    };

    return (
        <section
            id="projects"
            className="h-screen snap-start px-2 flex flex-col items-center justify-center gap-6 overflow-y-auto"
            style={{
                backgroundColor: "#eff6ff",
                backgroundImage: 'url("/paper-3.png")',
            }}
        >
            <h2 className="text-4xl font-bold text-blue-500 text-center">
                Mis proyectos
            </h2>

            <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="w-full md:w-4/5 flex flex-col items-center justify-center gap-6">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-4xl"
                        >
                            <ProjectCard {...projects[currentIndex]} />
                        </motion.div>
                    </AnimatePresence>
                    <div className="flex gap-4">
                        <button
                            onClick={prevProject}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            Anterior
                        </button>
                        <button
                            onClick={nextProject}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            Siguiente
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/5 flex flex-col items-center justify-center text-center gap-2 p-4 bg-white/90 rounded-lg shadow-md">
                    <h3 className="text-lg font-semibold text-blue-500">
                        ¿Querés ver más?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                        Visitá mi GitHub
                    </p>
                    <Link
                        href="https://github.com/MaximoFC"
                        target="_blank"
                        className="bg-blue-500 text-white px-4 py-2 text-sm rounded hover:bg-blue-600 transition"
                    >
                        Ir a GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
}

