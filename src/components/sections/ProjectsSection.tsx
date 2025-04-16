'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/projects";
import ProjectCard from "../ProjectCard";
import { useSwipeable } from "react-swipeable";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

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

    const goToNext = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const goToPrev = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? projects.length - 1 : prev - 1
        );
    };

    const handlers = useSwipeable({
        onSwipedLeft: goToNext,
        onSwipedRight: goToPrev,
        preventScrollOnSwipe: true,
        trackMouse: true,
    });

    return (
        <section
            id="projects"
            className="h-dvh snap-start px-4 py-8 flex flex-col items-center justify-center gap-8 relative"
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

            <motion.div
                {...handlers}
                className="w-full max-w-4xl flex flex-col items-center justify-center gap-6 touch-pan-y"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
            >
                <div className="relative w-full h-full">
                    <button
                        onClick={goToPrev}
                        className="cursor-pointer hidden md:flex items-center justify-center absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow"
                        aria-label="Anterior proyecto"
                    >
                        <BiChevronLeft size={28} />
                    </button>
                    <button
                        onClick={goToNext}
                        className="cursor-pointer hidden md:flex items-center justify-center absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full shadow"
                        aria-label="Siguiente proyecto"
                    >
                        <BiChevronRight size={28} />
                    </button>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            layout
                            variants={fadeInUp}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="w-full"
                        >
                            <ProjectCard {...projects[currentIndex]} />
                        </motion.div>
                    </AnimatePresence>
                </div>

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
            </motion.div>
        </section>
    );
}
