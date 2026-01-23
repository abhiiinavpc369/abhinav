"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { personalInfo, stats } from "@/lib/data";

export default function About() {
    return (
        <section id="about" className="section-padding bg-background">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-xl text-foreground/90 leading-relaxed"
                    >
                        I&apos;m {personalInfo.fullName}, a passionate {personalInfo.title} from {personalInfo.location}. Currently a {personalInfo.status}, I&apos;m dedicated to creating high-quality, scalable solutions that make a real impact.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-foreground/80 leading-relaxed"
                    >
                        With expertise in the MERN stack and modern web technologies, I specialize in building responsive, user-friendly applications that combine beautiful design with robust functionality. My approach is rooted in clean code, best practices, and continuous learning.
                    </motion.p>

                    {/* Philosophy Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="glass-card p-8 space-y-4"
                    >
                        <div className="flex items-center gap-3">
                            <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-full text-white">
                                <FontAwesomeIcon icon={faGem} className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-heading font-semibold">Personal Philosophy</h3>
                        </div>

                        <blockquote className="text-xl italic text-foreground/90 border-l-4 border-primary pl-6">
                            &ldquo;{personalInfo.philosophy}&rdquo;
                        </blockquote>

                        <p className="text-foreground/80">
                            I believe in building long-term relationships based on trust, consistency, and mutual respect. Quality work isn&apos;t just about code—it&apos;s about commitment to excellence and reliability.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
                    >
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="glass-card p-6 text-center hover:scale-105 transition-transform"
                            >
                                <div className="text-4xl font-bold gradient-text mb-2">
                                    {stat.value}
                                </div>
                                <div className="text-foreground/70">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
