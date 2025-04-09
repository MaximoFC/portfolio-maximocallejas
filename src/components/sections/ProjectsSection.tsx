'use client';

import { projects } from "@/lib/projects";
import ProjectCard from "../ProjectCard";

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="h-screen snap-start px-4 py-12 flex flex-col items-center justify-center bg-slate-50"
        >
            <h2 className="text-4xl font-bold text-blue-500 mb-8 text-center">Proyectos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
        </section>
    );
} 