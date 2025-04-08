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
            <Image 
                src={image} 
                alt={title}
                width={500}
                height={300}
                className="object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p>{description}</p>
                <div>
                    {githubFrontend && (
                        <a href={githubFrontend}>
                            FrontEnd
                        </a>
                    )}
                    {githubBackend && (
                        <a href={githubBackend}>
                            BackEnd
                        </a>
                    )}
                    {demo && (
                        <a>
                            <button>Demo</button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}