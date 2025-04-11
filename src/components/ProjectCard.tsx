import Image from "next/image";

type Project = {
    title: string,
    description: string,
    image: string,
    githubFrontend?: string,
    githubBackend?: string,
    demo?: string
};

export default function ProjectCard({ title, description, image, githubFrontend, githubBackend, demo }: Project) {
    return (
        <div className="rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="relative h-40 w-full md:h-70 md:w-full">
                <Image 
                    src={image} 
                    alt={title}
                    className="object-cover object-top"
                    priority
                    fill
                />
            </div>
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p>{description}</p>
                <div className="flex justify-around">
                    {githubFrontend && (
                        <a 
                            href={githubFrontend} 
                            target="_blank"
                            className="bg-white text-blue-500 px-2 py-2 rounded-lg border-2 border-blue-500 transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                            FrontEnd
                        </a>
                    )}
                    {githubBackend && (
                        <a 
                            href={githubBackend}
                            target="_blank"
                            className="bg-white text-blue-500 px-2 py-2 rounded-lg border-2 border-blue-500 transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                            BackEnd
                        </a>
                    )}
                    {demo && (
                        <a className="bg-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:scale-105">
                            <button>Demo</button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}