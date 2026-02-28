"use client";
import {
    Phone,
    Mail,
    MapPin,
    ArrowUp,
} from "lucide-react";

const productLinks = [
    { name: "Workstations", href: "/products#workstations" },
    { name: "Desktops", href: "/products#desktops" },
    { name: "All-in-One PCs", href: "/products#aio" },
    { name: "Mini PCs", href: "/products#minipc" },
    { name: "KIOSK", href: "/products#kiosk" },
    { name: "Servers", href: "/products#servers" },
];

const solutionLinks = [
    { name: "Education", href: "/solutions#education" },
    { name: "Government", href: "/solutions#government" },
    { name: "Healthcare", href: "/solutions#healthcare" },
    { name: "Banking", href: "/solutions#banking" },
    { name: "Defense", href: "/solutions#defense" },
];

const supportLinks = [
    { name: "Warranty Information", href: "/support#warranty" },
    { name: "Driver Downloads", href: "/downloads" },
    { name: "Contact Support", href: "/support" },
    { name: "Complaint Register", href: "/support#complaint" },
    { name: "News & Blog", href: "/blog" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
];

export default function Footer() {
    return (
        <footer className="bg-navy text-slate-light">
            {/* Main Footer */}
            <div className="container-max section-padding !pb-12">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center font-heading font-bold text-navy text-lg">
                                H
                            </div>
                            <div>
                                <span className="text-white font-heading font-bold text-lg">
                                    HLBS
                                </span>
                                <span className="text-cyan font-heading font-bold text-lg">
                                    Tech
                                </span>
                            </div>
                        </div>
                        <p className="text-sm text-slate leading-relaxed mb-6">
                            HLBS Tech (P) Ltd. has been manufacturing world-class IT hardware
                            solutions from Bhopal, India since 2004.
                        </p>
                        <div className="space-y-3">
                            <a
                                href="tel:18002701244"
                                className="flex items-center gap-2 text-sm hover:text-cyan transition-colors"
                            >
                                <Phone size={14} className="text-cyan" />
                                Toll Free: 1800 270 1244
                            </a>
                            <a
                                href="mailto:sales@hlbstech.com"
                                className="flex items-center gap-2 text-sm hover:text-cyan transition-colors"
                            >
                                <Mail size={14} className="text-cyan" />
                                sales@hlbstech.com
                            </a>
                            <div className="flex items-start gap-2 text-sm">
                                <MapPin size={14} className="text-cyan mt-0.5 flex-shrink-0" />
                                <span>
                                    243-B, Zone I, MP Nagar,
                                    <br />
                                    Bhopal (M.P.) - 462011
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="text-white font-heading font-semibold mb-6 text-sm uppercase tracking-wider">
                            Products
                        </h4>
                        <ul className="space-y-3">
                            {productLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-cyan transition-colors hover:pl-1 inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h4 className="text-white font-heading font-semibold mb-6 text-sm uppercase tracking-wider">
                            Solutions
                        </h4>
                        <ul className="space-y-3">
                            {solutionLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-cyan transition-colors hover:pl-1 inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="text-white font-heading font-semibold mb-6 text-sm uppercase tracking-wider">
                            Support
                        </h4>
                        <ul className="space-y-3">
                            {supportLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-sm hover:text-cyan transition-colors hover:pl-1 inline-block"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        {/* Certifications in footer */}
                        <div className="mt-8">
                            <p className="text-xs uppercase tracking-wider text-slate/60 mb-3">
                                Certifications
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {["ISO", "CE", "BIS", "FCC", "RoHS"].map((cert) => (
                                    <span
                                        key={cert}
                                        className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-mono text-cyan/70"
                                    >
                                        {cert}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container-max py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-slate/60 text-center sm:text-left">
                        <p>© {new Date().getFullYear()} HLBS Tech (P) Ltd. All Rights Reserved.</p>
                        <p className="mt-1">Made with pride in Bhopal, Madhya Pradesh, India 🇮🇳</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <span className="text-xs text-slate/40">GSTIN: 23AABCH5020R1ZL</span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan/20 hover:border-cyan/30 transition-all"
                            title="Back to top"
                        >
                            <ArrowUp size={16} className="text-cyan" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
