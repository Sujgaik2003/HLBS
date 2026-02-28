"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { solutions } from "@/lib/data";
import {
    GraduationCap,
    Building2,
    HeartPulse,
    Landmark,
    Shield,
    ArrowRight,
    Check,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
    education: GraduationCap,
    government: Building2,
    healthcare: HeartPulse,
    banking: Landmark,
    defense: Shield,
};

export default function SolutionsPage() {
    const [active, setActive] = useState("education");
    const activeSolution = solutions.find((s) => s.id === active)!;
    const ActiveIcon = iconMap[active] || Building2;

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="bg-hero-gradient py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
                </div>
                <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <p className="section-label">Solutions</p>
                        <h1 className="heading-xl text-white mb-4">
                            Solutions{" "}
                            <span className="gradient-text">Unlimited</span>
                        </h1>
                        <p className="text-lg text-slate-light max-w-3xl mx-auto">
                            We offer complete range of consistently high quality, cost effective
                            solutions and services for Education, Government, Healthcare,
                            Banking, and Defense sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Solutions Detail */}
            <section className="section-padding bg-offwhite">
                <div className="container-max">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-3 mb-16">
                        {solutions.map((sol) => {
                            const Icon = iconMap[sol.id] || Building2;
                            return (
                                <button
                                    key={sol.id}
                                    onClick={() => setActive(sol.id)}
                                    className={`flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-heading font-medium transition-all duration-300 ${active === sol.id
                                            ? "bg-navy text-cyan shadow-lg shadow-navy/20 scale-105"
                                            : "bg-white text-slate hover:bg-gray-50 hover:text-navy border border-gray-100"
                                        }`}
                                >
                                    <Icon size={18} />
                                    {sol.name}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Solution */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="grid lg:grid-cols-2 gap-10">
                                {/* Info */}
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center">
                                            <ActiveIcon size={32} className="text-navy" />
                                        </div>
                                        <div>
                                            <h2 className="heading-md text-navy">{activeSolution.headline}</h2>
                                            <p className="text-sm text-saffron font-heading font-medium">{activeSolution.name}</p>
                                        </div>
                                    </div>

                                    <p className="text-body mb-8 text-lg">{activeSolution.description}</p>

                                    {/* Solutions List */}
                                    <div className="space-y-3 mb-8">
                                        <h3 className="font-heading font-semibold text-navy text-sm uppercase tracking-wider">
                                            What We Offer
                                        </h3>
                                        {activeSolution.solutions.map((sol) => (
                                            <div
                                                key={sol}
                                                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-sm"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                                                    <Check size={16} className="text-cyan" />
                                                </div>
                                                <span className="text-sm text-navy font-medium">{sol}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <a href="/contact" className="btn-primary">
                                        Get a Quote
                                        <ArrowRight size={16} className="ml-2" />
                                    </a>
                                </div>

                                {/* Right Side */}
                                <div className="space-y-6">
                                    {/* Recommended Products */}
                                    <div className="bg-white rounded-2xl p-8 shadow-sm">
                                        <h3 className="font-heading font-semibold text-navy mb-4">
                                            Recommended Products
                                        </h3>
                                        <div className="space-y-3">
                                            {activeSolution.products.map((prod) => (
                                                <a
                                                    key={prod}
                                                    href="/products"
                                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                                                >
                                                    <span className="text-sm font-heading font-medium text-navy">{prod}</span>
                                                    <ArrowRight size={14} className="text-slate group-hover:text-cyan transition-colors" />
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Visual */}
                                    <div className="bg-gradient-to-br from-navy/5 to-navy/10 rounded-2xl p-12 flex items-center justify-center">
                                        <ActiveIcon size={120} className="text-navy/10" />
                                    </div>

                                    {/* Trust */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-navy rounded-xl p-5 text-center">
                                            <p className="text-2xl font-heading font-bold text-cyan">5000+</p>
                                            <p className="text-xs text-slate-light mt-1">Clients Served</p>
                                        </div>
                                        <div className="bg-navy rounded-xl p-5 text-center">
                                            <p className="text-2xl font-heading font-bold text-saffron">20+</p>
                                            <p className="text-xs text-slate-light mt-1">Years Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* CTA */}
            <section className="relative py-20 overflow-hidden">
                <div className="absolute inset-0 bg-cta-gradient" />
                <div className="container-max relative z-10 text-center px-4">
                    <h2 className="heading-lg text-white mb-4">Need a Custom Solution?</h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Our team can design and build computing solutions tailored to your specific
                        industry requirements.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-8 py-4 bg-white text-saffron font-heading font-bold rounded-lg hover:bg-gray-50 transition-all shadow-lg"
                    >
                        Contact Our Solutions Team
                        <ArrowRight size={18} className="ml-2" />
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}
