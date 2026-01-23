"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faqs } from "@/lib/data";
import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                            <h1 className="text-4xl md:text-6xl font-heading font-bold gradient-text mb-4">
                                Frequently Asked Questions
                            </h1>
                            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
                            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
                                Got questions? I&apos;ve got answers. Here are some common questions about my work, process, and availability.
                            </p>
                        </motion.div>

                        <div className="max-w-3xl mx-auto space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="glass-card overflow-hidden"
                                >
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                                    >
                                        <h3 className="text-lg md:text-xl font-heading font-semibold">
                                            {faq.question}
                                        </h3>
                                        <FontAwesomeIcon
                                            icon={openIndex === index ? faChevronUp : faChevronDown}
                                            className="text-primary flex-shrink-0"
                                        />
                                    </button>

                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="px-6 pb-6"
                                        >
                                            <p className="text-foreground/80 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="mt-16 text-center"
                        >
                            <div className="glass-card p-8 max-w-2xl mx-auto">
                                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                                    Still have questions?
                                </h2>
                                <p className="text-foreground/70 mb-6">
                                    Feel free to reach out! I&apos;m always happy to discuss your project or answer any questions you might have.
                                </p>
                                <Link
                                    href="/#contact"
                                    className="inline-block px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium hover:shadow-lg hover:shadow-primary/50 transition-all hover:scale-105"
                                >
                                    Get In Touch
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
