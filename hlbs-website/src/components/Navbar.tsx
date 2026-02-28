"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    ChevronDown,
    Phone,
    Mail,
    Search,
} from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "/about",
        dropdown: [
            { name: "Company Profile", href: "/about" },
            { name: "Our Team", href: "/about#team" },
            { name: "Projects", href: "/projects" },
            { name: "Certifications", href: "/certifications" },
        ],
    },
    {
        name: "Products",
        href: "/products",
        dropdown: [
            { name: "Workstations", href: "/products#workstations" },
            { name: "Desktops", href: "/products#desktops" },
            { name: "All-in-One PCs", href: "/products#aio" },
            { name: "Mini PCs", href: "/products#minipc" },
            { name: "KIOSK", href: "/products#kiosk" },
            { name: "Servers", href: "/products#servers" },
        ],
    },
    {
        name: "Solutions",
        href: "/solutions",
        dropdown: [
            { name: "Education", href: "/solutions#education" },
            { name: "Government", href: "/solutions#government" },
            { name: "Healthcare", href: "/solutions#healthcare" },
            { name: "Banking", href: "/solutions#banking" },
            { name: "Defense", href: "/solutions#defense" },
        ],
    },
    { name: "Insights", href: "/blog" },
    { name: "Support", href: "/support" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Top Bar */}
            <div className="bg-navy-dark text-slate-light text-xs py-2 px-4 hidden lg:block">
                <div className="container-max flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a
                            href="tel:18002701244"
                            className="flex items-center gap-1.5 hover:text-cyan transition-colors"
                        >
                            <Phone size={12} />
                            Toll Free: 1800 270 1244
                        </a>
                        <a
                            href="mailto:sales@hlbstech.com"
                            className="flex items-center gap-1.5 hover:text-cyan transition-colors"
                        >
                            <Mail size={12} />
                            sales@hlbstech.com
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-cyan/80">🇮🇳 Made in India</span>
                        <span className="text-slate/60">|</span>
                        <span>Since 2004</span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <motion.nav
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-navy/95 backdrop-blur-xl shadow-2xl shadow-navy/50 py-3"
                    : "bg-navy/80 backdrop-blur-md py-4"
                    }`}
            >
                <div className="container-max flex items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center font-heading font-bold text-navy text-lg group-hover:scale-110 transition-transform">
                            H
                        </div>
                        <div>
                            <span className="text-white font-heading font-bold text-xl tracking-tight">
                                HLBS
                            </span>
                            <span className="text-cyan font-heading font-bold text-xl">
                                Tech
                            </span>
                            <p className="text-[10px] text-slate leading-none -mt-0.5">
                                Technologies for Tomorrow
                            </p>
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() =>
                                    link.dropdown && setActiveDropdown(link.name)
                                }
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <a
                                    href={link.href}
                                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-light hover:text-cyan transition-colors rounded-lg hover:bg-white/5"
                                >
                                    {link.name}
                                    {link.dropdown && (
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform ${activeDropdown === link.name ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </a>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {link.dropdown && activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 8 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-1 w-56 bg-navy-light/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                                        >
                                            {link.dropdown.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-4 py-3 text-sm text-slate-light hover:text-cyan hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button className="p-2 text-slate-light hover:text-cyan transition-colors rounded-lg hover:bg-white/5">
                            <Search size={18} />
                        </button>
                        <a href="/contact" className="btn-primary text-sm !px-6 !py-2.5">
                            Contact Sales
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        className="lg:hidden p-2 text-white hover:text-cyan transition-colors"
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-navy-light/95 backdrop-blur-xl border-t border-white/10 overflow-hidden"
                        >
                            <div className="container-max py-4 space-y-1">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        <a
                                            href={link.href}
                                            className="block px-4 py-3 text-white hover:text-cyan transition-colors rounded-lg hover:bg-white/5"
                                            onClick={() => setIsMobileOpen(false)}
                                        >
                                            {link.name}
                                        </a>
                                        {link.dropdown && (
                                            <div className="pl-6 space-y-1">
                                                {link.dropdown.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="block px-4 py-2 text-sm text-slate-light hover:text-cyan transition-colors"
                                                        onClick={() => setIsMobileOpen(false)}
                                                    >
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <div className="pt-4 px-4">
                                    <a
                                        href="/contact"
                                        className="btn-primary w-full text-center text-sm"
                                    >
                                        Contact Sales
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    );
}
