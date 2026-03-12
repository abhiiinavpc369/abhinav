"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLink, faSearch, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { projects } from "@/lib/data";

export default function Projects() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState("All");

    const allTags = ["All", ...Array.from(new Set(projects.flatMap(project => project.tags)))];

    const filteredProjects = projects
        .filter(project =>
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        )
        .filter(project =>
            selectedTag === "All" ? true : project.tags.includes(selectedTag)
        );

    const gradients = [
        "bg-primary",
        "bg-secondary",
        "bg-muted",
        "bg-primary/80",
    ];

    return (
        <section id="projects" className="section-padding bg-muted/20">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold gradient-text mb-4">
                        Featured Projects
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
                    <p className="text-foreground/70 text-lg mb-8">
                        A showcase of my recent work and contributions
                    </p>

                    {/* Search + Filter */}
                    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-3">
                        <div className="relative flex-1">
                            <FontAwesomeIcon
                                icon={faSearch}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-foreground/40 w-5 h-5"
                            />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 glass-card rounded-xl text-foreground placeholder:text-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                            />
                        </div>
                        <select
                            value={selectedTag}
                            onChange={(e) => setSelectedTag(e.target.value)}
                            className="md:w-40 w-full glass-card px-4 py-3 rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        >
                            {allTags.map(tag => (
                                <option key={tag} value={tag}>{tag}</option>
                            ))}
                        </select>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    {filteredProjects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group cursor-pointer relative overflow-hidden bg-white/5 rounded-xl border border-white/10 transition-all duration-500 hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="aspect-[16/10] overflow-hidden bg-muted/20">
                                {/* Updated background class to a solid color */}
                                <div className="w-full h-full bg-primary/20 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center p-10">
                                    <div className="relative w-full h-full border border-white/10 rounded-lg backdrop-blur-sm bg-white/10 flex items-center justify-center">
                                        <div className="text-white/20 text-5xl">💻</div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex-1">
                                        <div className="flex gap-2 mb-2 flex-wrap">
                                            {project.tags.map(tag => (
                                                <span
                                                    key={tag}
                                                    className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-primary/20 border border-primary/30 font-semibold text-primary"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <h3 className="text-2xl font-heading italic font-bold mb-1">{project.title}</h3>
                                    </div>
                                </div>

                                <p className="text-foreground/70 leading-relaxed mb-5 line-clamp-2 text-sm">
                                    {project.description}
                                </p>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-primary rounded-full font-medium transition-all hover:scale-105 text-sm"
                                    >
                                        <FontAwesomeIcon icon={faGlobe} className="w-4 h-4" />
                                        <span>Demo</span>
                                    </a>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 glass-card-hover rounded-full font-medium text-sm"
                                        >
                                            <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                                            <span>GitHub</span>
                                        </a>
                                    )}
                                </div>

                                <div className="flex items-center gap-4 pt-5 mt-5 border-t border-white/10 text-[11px]">
                                    <div className="flex items-center gap-2 font-medium text-foreground/40">
                                        <FontAwesomeIcon icon={faGlobe} className="w-3 h-3" />
                                        <span>2026</span>
                                    </div>
                                    <div className="text-foreground/40">•</div>
                                    <div className="font-medium text-foreground/40">Full Stack</div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <p className="text-foreground/60 text-lg">No projects found matching "{searchQuery}"</p>
                    </div>
                )}
            </div>
        </section>
    );
}
