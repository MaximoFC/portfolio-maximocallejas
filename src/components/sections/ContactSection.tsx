'use client';

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
    type ContactFormData = {
        name: string,
        email: string,
        message: string,
        bot_field_823: string
    };

    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        message: '',
        bot_field_823: ''
    });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true)

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        if(res.ok) {
            setSent(true);
            setFormData({ name: '', email: '', message: '', bot_field_823: '' });
        } else {
            const data = await res.json();
            setError(data.error || "Error al enviar el mensaje");
        }

        setLoading(false);
    };

    return (
        <motion.section
            id="contact"
            className="h-screen snap-start snap-always px-4 py-12 flex flex-col items-center justify-center"
            style={{
                backgroundColor: "#eff6ff",
                backgroundImage: 'url("/paper-3.png")',
            }}
        >
            <motion.h2 
                className="text-4xl font-bold text-blue-500 mb-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}    
            >
                Contacto
            </motion.h2>
            <motion.p 
                className="text-center text-muted-foreground max-w-xl mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
            >
                Siempre estoy interesado en nuevas oportunidades y emprender proyectos. Si te interesa trabajar o colaborar conmigo, 
                podés contactarte a través de este formulario o por redes sociales
            </motion.p>
            {sent ? (
                <p className="text-blue-500 text-lg">
                    ¡Gracias por tu mensaje! Te responderé pronto.
                </p>
            ) : (
                <form 
                onSubmit={handleSubmit}
                className="w-full max-w-md flex flex-col gap-4"
                >
                    <input 
                        type="text"
                        name="name"
                        placeholder="Tu nombre"
                        className="border border-gray-600 rounded px-4 py-2 bg-white"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="email"
                        name="email"
                        placeholder="Tu correo"
                        className="border border-gray-600 rounded px-4 py-2 bg-white"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Tu mensaje"
                        rows={5}
                        className="border border-gray-600 rounded px-4 py-2 bg-white"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="text"
                        name="bot_field_823"
                        className="sr-only"
                        autoComplete="off"
                        value={formData.bot_field_823}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className={`px-6 py-2 rounded-lg transition-all duration-150 
                            ${loading 
                            ? "bg-blue-300 cursor-not-allowed" 
                            : "bg-blue-500 hover:bg-blue-600 hover:scale-105 cursor-pointer"} 
                            text-white`}
                        >
                            {loading ? "Enviando..." : "Enviar"}
                    </button>
                </form>
            )}
            {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
            )}
        </motion.section>
    );
}