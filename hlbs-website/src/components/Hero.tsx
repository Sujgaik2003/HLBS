"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] bg-hero-gradient overflow-hidden flex items-center particles-bg">
            {/* Animated background circles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-cyan/5 blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-saffron/5 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan/3 blur-3xl" />
            </div>

            <div className="container-max w-full relative z-10 section-padding">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="h-px w-8 bg-cyan" />
                            <span className="section-label !mb-0">Since 2004 • Made in India 🇮🇳</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="heading-xl text-white mb-6"
                        >
                            Technologies
                            <br />
                            for{" "}
                            <span className="gradient-text">Tomorrow</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg lg:text-xl text-slate-light max-w-xl mb-8 leading-relaxed"
                        >
                            HLBS Tech manufactures world-class Workstations, Desktops,
                            All-in-One PCs, and specialized computing solutions for
                            government, education, and enterprise.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-4 mb-12"
                        >
                            <a href="/products" className="btn-primary group">
                                Explore Products
                                <ArrowRight
                                    size={18}
                                    className="ml-2 group-hover:translate-x-1 transition-transform"
                                />
                            </a>
                            <a href="/contact" className="btn-secondary">
                                Contact Sales
                            </a>
                        </motion.div>

                        {/* Mini stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex gap-8 lg:gap-12"
                        >
                            {[
                                { number: "20+", label: "Years" },
                                { number: "5000+", label: "Clients" },
                                { number: "50+", label: "Models" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <p className="text-2xl lg:text-3xl font-heading font-bold text-cyan">
                                        {stat.number}
                                    </p>
                                    <p className="text-xs text-slate uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right - Isometric Product Illustration */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="hidden lg:block relative"
                    >
                        <div className="relative animate-float">
                            {/* Main Product Visual - Stylized workstation */}
                            <div className="relative w-full aspect-square max-w-lg mx-auto">
                                {/* Glow base */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-cyan/20 blur-2xl rounded-full" />

                                {/* Isometric workstation representation */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        {/* Monitor frame */}
                                        <div className="w-72 h-48 bg-gradient-to-br from-navy-light to-navy border-2 border-cyan/30 rounded-xl shadow-2xl shadow-cyan/10 overflow-hidden">
                                            {/* Screen content */}
                                            <div className="w-full h-full bg-gradient-to-br from-navy via-navy-light to-navy p-4 flex flex-col">
                                                <div className="flex gap-1.5 mb-3">
                                                    <div className="w-2 h-2 rounded-full bg-saffron/60" />
                                                    <div className="w-2 h-2 rounded-full bg-cyan/40" />
                                                    <div className="w-2 h-2 rounded-full bg-green-400/40" />
                                                </div>
                                                <div className="flex-1 flex flex-col justify-center items-center gap-2">
                                                    <div className="text-cyan/60 text-xs font-mono">CMW-1000T</div>
                                                    <div className="w-16 h-16 rounded-lg bg-accent-gradient opacity-60 flex items-center justify-center">
                                                        <span className="text-navy font-bold text-xl">H</span>
                                                    </div>
                                                    <div className="flex gap-1 mt-2">
                                                        <div className="h-1 w-8 bg-cyan/30 rounded" />
                                                        <div className="h-1 w-12 bg-cyan/20 rounded" />
                                                        <div className="h-1 w-6 bg-saffron/30 rounded" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Monitor stand */}
                                        <div className="w-16 h-6 bg-gradient-to-b from-slate/30 to-slate/10 mx-auto rounded-b-sm" />
                                        <div className="w-24 h-2 bg-slate/20 mx-auto rounded-full" />

                                        {/* Tower case */}
                                        <div className="absolute -right-20 top-8 w-14 h-36 bg-gradient-to-b from-navy-light to-navy border border-cyan/20 rounded-lg shadow-lg">
                                            <div className="p-2 space-y-1">
                                                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                                                <div className="w-2 h-2 rounded-full bg-saffron/60" />
                                            </div>
                                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 border border-cyan/20 rounded-full flex items-center justify-center">
                                                <div className="w-4 h-4 rounded-full border border-cyan/30" />
                                            </div>
                                        </div>

                                        {/* Keyboard */}
                                        <div className="w-44 h-8 bg-gradient-to-b from-slate/20 to-slate/10 mx-auto mt-2 rounded-md border border-white/5 flex items-center justify-center gap-0.5 px-2">
                                            {Array.from({ length: 12 }).map((_, i) => (
                                                <div key={i} className="w-2.5 h-1.5 bg-white/10 rounded-[1px]" />
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <motion.div
                                    animate={{ y: [-5, 5, -5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-8 right-4 glass-card px-3 py-2 flex items-center gap-2"
                                >
                                    <div className="w-6 h-6 rounded bg-green-500/20 flex items-center justify-center text-xs">✓</div>
                                    <span className="text-xs text-slate-light font-medium">ISO Certified</span>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [5, -5, 5] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-16 left-0 glass-card px-3 py-2 flex items-center gap-2"
                                >
                                    <div className="w-6 h-6 rounded bg-saffron/20 flex items-center justify-center text-xs">🇮🇳</div>
                                    <span className="text-xs text-slate-light font-medium">Made in India</span>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [-3, 7, -3] }}
                                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/2 -left-4 glass-card px-3 py-2"
                                >
                                    <span className="text-xs text-cyan font-mono">Intel® Xeon®</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 40C1248 36.7 1344 33.3 1392 31.7L1440 30V60H1392C1344 60 1248 60 1152 60C1056 60 960 60 864 60C768 60 672 60 576 60C480 60 384 60 288 60C192 60 96 60 48 60H0Z" fill="#F8F9FA" />
                </svg>
            </div>
        </section>
    );
}
