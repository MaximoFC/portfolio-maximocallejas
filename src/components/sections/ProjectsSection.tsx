'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "../ProjectCard";

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
            <h2 className="text-4xl font-bold text-blue-500 text-center">
                Mis proyectos
            </h2>

            <div className="w-full max-w-4xl flex flex-col items-center justify-center gap-6">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
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
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
