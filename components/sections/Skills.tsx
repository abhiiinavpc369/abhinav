"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faReact,
    faNodeJs,
    faHtml5,
    faCss3Alt,
    faJs,
    faPython,
    faGitAlt,
    faDocker
} from "@fortawesome/free-brands-svg-icons";
import {
    faPalette,
    faCode,
    faDatabase,
    faToolbox,
    faServer,
    faCloud,
    faCodeBranch,
    faLayerGroup
} from "@fortawesome/free-solid-svg-icons";
import { skillCategories } from "@/lib/data";

export default function Skills() {
    const categoryIcons: Record<string, any> = {
        "Frontend": faPalette,
        "Backend": faServer,
        "Database": faDatabase,
        "Tools & Others": faToolbox,
    };

    const skillIcons: Record<string, any> = {
        "React": faReact,
        "Next.js": faReact,
        "Node.js": faNodeJs,
        "HTML/CSS": faHtml5,
        "JavaScript": faJs,
        "TypeScript": faCode,
        "Python": faPython,
        "Git/GitHub": faGitAlt,
        "Docker": faDocker,
        "MongoDB": faDatabase,
        "PostgreSQL": faDatabase,
        "Firebase": faLayerGroup,
        "Redis": faDatabase,
        "Express.js": faNodeJs,
        "REST APIs": faServer,
        "Socket.io": faServer,
        "Tailwind CSS": faCss3Alt,
        "AWS": faCloud,
        "Vercel/Render": faCloud,
        "VS Code": faCode,
        "CI/CD": faCodeBranch,
    };

    return (
        <section id="skills" className="section-padding bg-background">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
                        Skills & Technologies
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-4" />
                    <p className="text-foreground/70 text-lg">
                        My technical expertise and proficiency levels
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            className="glass-card p-6 space-y-6 hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-full text-white">
                                    <FontAwesomeIcon
                                        icon={categoryIcons[category.title] || faCode}
                                        className="w-6 h-6"
                                    />
                                </div>
                                <h3 className="text-xl font-heading font-semibold">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="space-y-4">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="space-y-2"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                                    >
                                        <div className="flex justify-between items-center text-sm">
                                            <div className="flex items-center gap-2">
                                                <FontAwesomeIcon
                                                    icon={skillIcons[skill.name] || faCode}
                                                    className="w-4 h-4 text-primary"
                                                />
                                                <span className="text-foreground/90">{skill.name}</span>
                                            </div>
                                            <span className="text-foreground/60 font-medium">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{
                                                    duration: 1.2,
                                                    delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                                                    ease: "easeOut"
                                                }}
                                                className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full relative overflow-hidden"
                                            >
                                                <motion.div
                                                    className="absolute inset-0 bg-white/20"
                                                    animate={{
                                                        x: ['-100%', '100%'],
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    }}
                                                />
                                            </motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="glass-card p-8 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-heading font-bold mb-4">
                            Always Learning, Always Growing
                        </h3>
                        <p className="text-foreground/70">
                            I&apos;m constantly expanding my skill set and staying up-to-date with the latest technologies.
                            These proficiency levels reflect my current expertise, but I&apos;m always pushing to improve.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
