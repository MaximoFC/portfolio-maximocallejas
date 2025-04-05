'use client';

import Link from 'next/link';

const Navbar = () => {
    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            <nav className="mx-auto p-6 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-500">
                    Máximo Facundo Callejas
                </Link>
                <ul className="flex gap-6 text-sm font-medium text-gray-700">
                    <li>
                        <Link href="/home" className="hover:text-blue-500 transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-blue-500 transition-colors">
                            Sobre mí
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className="hover:text-blue-500 transition-colors">
                            Proyectos
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-500 transition-colors">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
