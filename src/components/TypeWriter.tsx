'use client';

import { useState, useEffect } from "react";

const roles = [
    "Programador Universitario",
    "Web Developer"
];

export default function TypeWriter() {
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        if (subIndex === roles[index].length + 1 && !deleting) {
            setTimeout(() => setDeleting(true), 1000);
            return;
        }
    
        if (subIndex === 0 && deleting) {
            setDeleting(false);
            setIndex((prev) => (prev + 1) % roles.length);
            return;
        }
    
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (deleting ? -1 : 1));
            setText(roles[index].substring(0, subIndex));
        }, deleting ? 50 : 100);
    
        return () => clearTimeout(timeout);
    }, [subIndex, index, deleting]);

    return (
        <p className="text-gray-700 text-2xl font-semibold md:text-2xl max-w-xl mt-2 mb-10 h-[1.5rem]">
            {text}
            <span className="border-r-2 border-gray-700 animate-pulse ml-1"></span>
        </p>
    );
}