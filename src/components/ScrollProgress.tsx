'use client'

import { useEffect, useState, useRef } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);
    const mainRef = useRef<HTMLElement | null>(null);
    const sectionsRef = useRef<HTMLElement[]>([]);

    useEffect(() => {
        const main = document.querySelector("main");
        mainRef.current = main;
        if (!main) return;

        sectionsRef.current = Array.from(main.querySelectorAll("section")) as HTMLElement[];

        const updateProgress = () => {
            if (!main) return;
            const scrollTop = main.scrollTop;
            const scrollHeight = main.scrollHeight - main.clientHeight;
            const percent = (scrollTop / scrollHeight) * 100;
            setProgress(percent);
        };

        main.addEventListener("scroll", updateProgress);
        return () => main.removeEventListener("scroll", updateProgress);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const bar = e.currentTarget;
        const clickY = e.clientY - bar.getBoundingClientRect().top;
        const percentageClicked = (clickY / bar.offsetHeight) * 100;

        const main = mainRef.current;
        if (!main) return;

        const targetSection = sectionsRef.current.reduce((closest, section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionMiddle = (sectionTop + sectionHeight / 2) / main.scrollHeight * 100;
            const diff = Math.abs(sectionMiddle - percentageClicked);

            return diff < closest.diff
                ? { section, diff }
                : closest;
        }, { section: null as HTMLElement | null, diff: Infinity });

        if (targetSection.section) {
            main.scrollTo({
                top: targetSection.section.offsetTop,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div
            className="fixed top-1/2 -translate-y-1/2 right-2 h-1/4 w-4 z-50 bg-slate-500 rounded-lg p-1 flex items-start cursor-pointer"
            onClick={handleClick}
        >
            <div
                className="w-full bg-white border-3 border-blue-500 transition-all duration-300 ease-out rounded-lg shadow-[0_0_5px_4px_rgba(59,130,246,0.7)]"
                style={{ height: `${progress}%` }}
            />
        </div>
    );
}
