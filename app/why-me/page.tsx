"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGem,
    faBolt,
    faRocket,
    faComments,
    faPuzzlePiece,
    faBook
} from "@fortawesome/free-solid-svg-icons";
import { whyMeReasons } from "@/lib/data";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WhyMePage() {
    const iconMap: Record<string, any> = {
        "💎": faGem,
        "⚡": faBolt,
        "🚀": faRocket,
        "💬": faComments,
        "🧩": faPuzzlePiece,
        "📚": faBook,
    };

    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24">
                {/* Back to Home */}
                <div className="container-custom py-4">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
                    >
                        <span>←</span> Back to Home
                    </Link>
                </div>

                <section className="section-padding">
                    <div className="container-custom">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">
                                Why Choose Me?
                            </h1>
                            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
                            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                                I bring a unique combination of technical expertise, dedication, and passion to every project. Here&apos;s what sets me apart.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {whyMeReasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="glass-card p-6 hover:scale-105 transition-transform"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="p-4 bg-primary rounded-full text-white">
                                            <FontAwesomeIcon
                                                icon={iconMap[reason.icon] || faGem}
                                                className="w-6 h-6"
                                            />
                                        </div>
                                        <h3 className="text-xl font-heading font-semibold">
                                            {reason.title}
                                        </h3>
                                    </div>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>



                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="mt-16 text-center"
                        >
                            <div className="glass-card p-8 max-w-2xl mx-auto">
                                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                                    Ready to work together?
                                </h2>
                                <p className="text-foreground/70 mb-6">
                                    Let&apos;s build something amazing. I&apos;m excited to hear about your project and discuss how we can bring your vision to life.
                                </p>
                                <div className="flex flex-wrap gap-4 justify-center">
                                    <Link
                                        href="/contact"
                                        className="px-8 py-3 bg-primary rounded-full font-medium transition-all hover:scale-105"
                                    >
                                        Get In Touch
                                    </Link>
                                    <Link
                                        href="/projects"
                                        className="px-8 py-3 glass-card-hover rounded-full font-medium"
                                    >
                                        View My Work
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
