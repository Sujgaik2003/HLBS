"use client";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Clock,
    Award,
    Globe,
    Wrench,
    BadgeCheck,
} from "lucide-react";

const features = [
    {
        icon: BadgeCheck,
        title: "Make in India Certified",
        description: "Indigenous manufacturing supporting Atmanirbhar Bharat initiative.",
    },
    {
        icon: Clock,
        title: "20+ Years of Excellence",
        description: "Two decades of IT hardware manufacturing expertise since 2004.",
    },
    {
        icon: Award,
        title: "ISO Certified Quality",
        description: "ISO 9001, 14001, 27001, 45001, and more quality certifications.",
    },
    {
        icon: Globe,
        title: "Pan India Support",
        description: "Widespread support network covering all locations in India.",
    },
    {
        icon: Wrench,
        title: "Custom Hardware Solutions",
        description: "Bespoke computing solutions tailored to your exact requirements.",
    },
    {
        icon: ShieldCheck,
        title: "3-Year Warranty",
        description: "Comprehensive on-site OEM warranty on all products.",
    },
];

export default function WhyHLBS() {
    return (
        <section className="section-padding bg-hero-gradient relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
            </div>

            <div className="container-max relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <p className="section-label">Why Choose Us</p>
                            <h2 className="heading-lg text-white mb-6">
                                Why Choose{" "}
                                <span className="gradient-text">HLBS Tech?</span>
                            </h2>
                            <p className="text-lg text-slate-light mb-8 leading-relaxed">
                                With over 20 years of manufacturing excellence from Bhopal,
                                India, HLBS Tech delivers world-class computing solutions backed
                                by comprehensive certifications and pan-India support.
                            </p>
                        </motion.div>

                        <div className="space-y-4">
                            {features.map((feature, i) => (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: i * 0.08 }}
                                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors group"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan/20 transition-colors">
                                        <feature.icon className="text-cyan" size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-heading font-semibold text-sm mb-1">
                                            {feature.title}
                                        </h3>
                                        <p className="text-slate text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main card */}
                            <div className="glass-card p-8 space-y-6">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-lg bg-accent-gradient flex items-center justify-center">
                                        <span className="text-navy font-bold text-lg">H</span>
                                    </div>
                                    <div>
                                        <p className="text-white font-heading font-bold">HLBS Tech (P) Ltd.</p>
                                        <p className="text-xs text-slate">Est. December 2004</p>
                                    </div>
                                </div>

                                {/* Certifications grid */}
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        "ISO 9001",
                                        "ISO 14001",
                                        "ISO 27001",
                                        "ISO 50001",
                                        "ISO 45001",
                                        "SA 8000",
                                        "CE",
                                        "BIS",
                                        "ZED",
                                    ].map((cert) => (
                                        <div
                                            key={cert}
                                            className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-colors"
                                        >
                                            <p className="text-xs font-mono text-cyan">{cert}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                                    <div className="text-center">
                                        <p className="text-2xl font-heading font-bold text-cyan">5000+</p>
                                        <p className="text-xs text-slate">Clients Served</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-heading font-bold text-saffron">7+</p>
                                        <p className="text-xs text-slate">ISO Standards</p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating accents */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 glass-card px-4 py-3"
                            >
                                <p className="text-sm text-white font-heading font-semibold">🏭 Bhopal, India</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
