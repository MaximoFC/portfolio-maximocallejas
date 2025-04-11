'use client'

import { useEffect, useState } from "react";

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const main = document.querySelector('main');

        const updateProgress = () => {
            if (!main) return;

            const scrollTop = main.scrollTop;
            const scrollHeight = main.scrollHeight - main.clientHeight;
            const percent = (scrollTop / scrollHeight) * 100;
            setProgress(percent);
        };

        if (main) {
            main.addEventListener('scroll', updateProgress);
        }

        return () => {
            if (main) {
                main.removeEventListener('scroll', updateProgress);
            }
        };
    }, []);

    return (
        <div className="fixed top-1/2 -translate-y-1/2 right-2 h-1/4 w-4 z-50 bg-black rounded-lg p-1 flex items-start">
        <div
            className="w-full bg-white border-3 border-blue-500 transition-all duration-300 ease-out rounded-lg shadow-[0_0_5px_4px_rgba(59,130,246,0.7)]"
            style={{ height: `${progress}%` }}
        />
        </div>
    );
}
