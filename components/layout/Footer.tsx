"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { personalInfo, socialLinks } from "@/lib/data";

export default function Footer() {
    const footerLinks = {
        navigation: [
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
            { href: "/projects", label: "Projects" },
            { href: "/skills", label: "Skills" },
        ],
        resources: [
            { href: "/why-me", label: "Why Me" },
            { href: "/faq", label: "FAQ" },
            { href: "/contact", label: "Contact" },
        ],
    };

    const getIcon = (iconName: string) => {
        const icons: Record<string, any> = {
            github: faGithub,
            linkedin: faLinkedin,
            twitter: faTwitter,
        };
        return icons[iconName] || faGithub;
    };

    const getBrandHoverColor = (iconName: string) => {
        const colors: Record<string, string> = {
            github: "group-hover:text-[#fafafa]",
            linkedin: "group-hover:text-[#0077b5]",
            twitter: "group-hover:text-[#1da1f2]",
        };
        return colors[iconName] || "group-hover:text-primary";
    };

    return (
        <footer className="bg-background border-t border-white/10">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <h3 className="text-3xl font-heading font-bold mb-4">
                            {personalInfo.initials}
                        </h3>
                        <p className="text-foreground/70 mb-6 max-w-md leading-relaxed">
                            {personalInfo.title} specializing in building exceptional digital experiences.
                            Let's create something amazing together.
                        </p>
                        <div className="flex items-center gap-2 text-foreground/60 mb-4">
                            <FontAwesomeIcon icon={faMapMarkerAlt} className="w-4 h-4" />
                            <span>{personalInfo.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-foreground/60">
                            <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                            <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                                {personalInfo.email}
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-3">
                            {footerLinks.navigation.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 group"
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-lg font-heading font-semibold mb-4">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-foreground/60 hover:text-foreground transition-colors flex items-center gap-2 group"
                                    >
                                        <FontAwesomeIcon
                                            icon={faArrowRight}
                                            className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Social Links */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-transparent border border-white/10 rounded-full text-foreground/60 transition-all duration-300 hover:scale-110 hover:border-transparent group"
                                    aria-label={social.name}
                                >
                                    <FontAwesomeIcon
                                        icon={getIcon(social.icon)}
                                        className={`w-5 h-5 transition-colors duration-300 ${getBrandHoverColor(social.icon)}`}
                                    />
                                </a>
                            ))}
                        </div>

                        {/* Copyright */}
                        <div className="text-center md:text-right">
                            <p className="text-foreground/60 text-sm">
                                &copy; {new Date().getFullYear()} {personalInfo.fullName}. All rights reserved.
                            </p>
                            <p className="text-foreground/40 text-xs mt-1">
                                Built with Next.js, TypeScript & Tailwind CSS
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
