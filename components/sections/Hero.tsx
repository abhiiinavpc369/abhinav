"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { personalInfo, typingTexts } from "@/lib/data";

export default function Hero() {
    const [typingText, setTypingText] = useState(typingTexts[0]);
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = typingTexts[textIndex];
        const timeout = setTimeout(
            () => {
                if (!isDeleting) {
                    if (typingText.length < currentText.length) {
                        setTypingText(currentText.slice(0, typingText.length + 1));
                    } else {
                        setTimeout(() => setIsDeleting(true), 2000);
                    }
                } else {
                    if (typingText.length > 0) {
                        setTypingText(typingText.slice(0, -1));
                    } else {
                        setIsDeleting(false);
                        setTextIndex((prev) => (prev + 1) % typingTexts.length);
                    }
                }
            },
            isDeleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [typingText, isDeleting, textIndex]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Local decorative blobs */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-24 left-8 w-80 h-80 bg-primary/25 rounded-full blur-3xl animate-float-slow" />
                <div className="absolute bottom-24 right-12 w-96 h-96 bg-secondary/25 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "1.2s" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[28rem] h-[28rem] bg-accent/15 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: "2.4s" }} />
            </div>

            <div className="container-custom">
                <div className="flex flex-col items-center text-center gap-6">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-lg md:text-xl text-foreground/80"
                    >
                        Hi, I&apos;m
                    </motion.p>

                    <h1
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold gradient-text"
                    >
                        {personalInfo.name}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="text-2xl md:text-3xl text-foreground/70"
                    >
                        AKA {personalInfo.nickname}
                    </motion.p>

                    <div
                        className="h-16 md:h-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-semibold text-foreground/90">
                            {typingText}
                            <span className="animate-pulse">|</span>
                        </h2>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg md:text-xl text-foreground/70 max-w-2xl"
                    >
                        Building exceptional digital experiences with clean code, modern design, and a commitment to quality. Based in {personalInfo.location}.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4 mt-4"
                    >
                        <a
                            href="/#projects"
                            className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-primary to-secondary hover:shadow-[0_10px_30px_-10px] hover:shadow-primary/50 transition-all hover:scale-[1.03]"
                        >
                            View My Work
                        </a>
                        <a
                            href="/#contact"
                            className="px-8 py-3 glass-card-hover rounded-full font-medium"
                        >
                            Get In Touch
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-sm text-foreground/60">Scroll Down</span>
                <FontAwesomeIcon icon={faChevronDown} className="animate-bounce text-foreground/60" />
            </motion.div>
        </section>
    );
}
