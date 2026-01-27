"use client";

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faBriefcase, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { personalInfo } from "@/lib/data";

export default function Navbar() {
    const navLinks = [
        { href: "/", label: "Home", icon: faHome },
        { href: "/about", label: "About", icon: faUser },
        { href: "/projects", label: "Projects", icon: faBriefcase },
        { href: "/skills", label: "Skills", icon: faCode },
        { href: "/why-me", label: "Why Me", icon: null },
        { href: "/faq", label: "FAQ", icon: null },
        { href: "/contact", label: "Contact", icon: faEnvelope },
    ];

    const mobileNavLinks = navLinks.filter(link => link.icon !== null);

    return (
        <>
            {/* Desktop Navbar - Sticky with subtle blur */}
            <nav className="hidden md:block sticky top-4 left-0 right-0 z-50">
                <div className="container-custom">
                    <div className="relative glass-card px-6 py-4 rounded-2xl border border-white/10 overflow-hidden">
                        {/* Liquid glass overlays */}
                        <div className="liquid-glass" aria-hidden></div>
                        <div className="liquid-shine" aria-hidden></div>
                        <div className="relative flex items-center justify-between">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="text-2xl font-heading font-bold gradient-text hover:scale-105 transition-transform"
                        >
                            {personalInfo.initials}
                        </Link>

                        {/* Desktop Navigation */}
                        <ul className="flex items-center gap-8">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-foreground/80 hover:text-foreground transition-colors relative group"
                                    >
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navbar - Pill Shaped */}
            <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
                <div className="glass-card px-6 py-4 rounded-full shadow-2xl">
                    <ul className="flex items-center justify-around">
                        {mobileNavLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="flex flex-col items-center gap-1 text-foreground/70 hover:text-foreground transition-all hover:scale-110 active:scale-95"
                                >
                                    <FontAwesomeIcon icon={link.icon!} className="w-5 h-5" />
                                    <span className="text-xs">{link.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
}
