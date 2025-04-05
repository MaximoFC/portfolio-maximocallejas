'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Sobre mí', href: '/about' },
        { name: 'Proyectos', href: '/projects' },
        { name: 'Contacto', href: '/contact' }
    ]

    return (
        <header className="w-full bg-white shadow-md sticky top-0 z-50">
            <nav className="mx-auto p-6 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-500">
                    Máximo Facundo Callejas
                </Link>
                <ul className="flex gap-6 text-sm font-medium text-gray-700">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={`transition-color ${
                                    pathname === link.href
                                        ? 'text-blue-500'
                                        : 'text-gray-700 hover:text-blue-500'
                                }`}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;