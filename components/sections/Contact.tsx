"use client";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { contactMethods } from "@/lib/data";

export default function Contact() {
    const getIcon = (iconName: string) => {
        const icons: Record<string, any> = {
            envelope: faEnvelope,
            github: faGithub,
            linkedin: faLinkedin,
            twitter: faTwitter,
        };
        return icons[iconName] || faEnvelope;
    };

    const getBrandHoverColor = (iconName: string) => {
        const colors: Record<string, string> = {
            envelope: "group-hover:text-secondary",
            github: "group-hover:text-[#fafafa]",
            linkedin: "group-hover:text-[#0077b5]",
            twitter: "group-hover:text-[#1da1f2]",
        };
        return colors[iconName] || "group-hover:text-primary";
    };

    return (
        <section id="contact" className="section-padding bg-muted/20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                        Get In Touch
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
                    <p className="text-foreground/70 text-lg">
                        Let&apos;s build something amazing together
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto space-y-8">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-center text-foreground/80 text-lg"
                    >
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you need a full-stack developer or just want to connect, feel free to reach out.
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contactMethods.map((method, index) => (
                            <motion.a
                                key={method.label}
                                href={method.link}
                                target={method.link.startsWith("http") ? "_blank" : undefined}
                                rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className={`social-icon-${method.icon} glass-card-hover p-6 flex items-center gap-4 group`}
                            >
                                <div className="p-3 bg-transparent rounded-full border border-white/10 text-foreground/70 flex-shrink-0 transition-all duration-300 group-hover:border-transparent group-hover:scale-110">
                                    <FontAwesomeIcon
                                        icon={getIcon(method.icon)}
                                        className={`w-6 h-6 transition-colors duration-300 ${getBrandHoverColor(method.icon)}`}
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="text-sm text-foreground/60 mb-1">
                                        {method.label}
                                    </div>
                                    <div className="text-foreground font-medium">
                                        {method.value}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
