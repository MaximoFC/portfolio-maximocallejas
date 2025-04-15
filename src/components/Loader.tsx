'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showLoader && (
                <motion.div
                    key="loader"
                    role="status"
                    aria-live="polite"
                    className="fixed inset-0 z-50 bg-blue-500 flex items-center justify-center text-white text-5xl font-bold"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    style={{
                        backgroundColor: "#3b82f6",
                        backgroundImage: 'url("/paper-3.png")'
                    }}
                >
                    <motion.div
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.2, opacity: 0 }}
                        transition ={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        <h2 className="text-white font-extrabold text-6xl text-glow">
                            Dev. <br /> Máximo
                        </h2>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}   