import Image from "next/image";
import { useState, useEffect } from "react";

type Project = {
    title: string,
    description: string,
    images: string[],
    githubFrontend?: string,
    githubBackend?: string,
    demo?: string
};

export default function ProjectCard({ title, description, images, githubFrontend, githubBackend, demo }: Project) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative h-40 w-full md:h-70 md:w-full">
                <Image 
                    src={images[currentImage]} 
                    alt={`${title} screenshot ${currentImage + 1}`}
                    className="object-cover object-top"
                    priority
                    fill
                />
            </div>
            <div className="p-4 flex flex-col gap-2 bg-white border-t-1 border-blue-500">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p>{description}</p>
                <div className="flex justify-around">
                    {githubFrontend && (
                        <a 
                            href={githubFrontend} 
                            target="_blank"
                            className="bg-white text-blue-500 px-2 py-2 rounded-lg border-2 border-blue-500 transition-all duration-150 hover:bg-gray-200 hover:scale-105">
                            FrontEnd
                        </a>
                    )}
                    {githubBackend && (
                        <a 
                            href={githubBackend}
                            target="_blank"
                            className="bg-white text-blue-500 px-2 py-2 rounded-lg border-2 border-blue-500 transition-all duration-150 hover:bg-gray-200 hover:scale-105">
                            BackEnd
                        </a>
                    )}
                    {demo && (
                        <a className="bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-150 hover:bg-blue-600 hover:scale-105">
                            <button>Demo</button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}