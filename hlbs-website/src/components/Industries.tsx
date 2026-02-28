"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    GraduationCap,
    Building2,
    HeartPulse,
    Landmark,
    Shield,
} from "lucide-react";

const industries = [
    {
        id: "education",
        name: "Education",
        icon: GraduationCap,
        headline: "Smart Classrooms & Computer Labs",
        description:
            "Empowering the next generation with interactive teaching systems, smart classrooms, and dedicated computer lab solutions built for schools and universities across India.",
        solutions: [
            "Smart Classroom Solutions",
            "Interactive Teaching Systems",
            "Computer Lab Infrastructure",
            "Digital Libraries",
        ],
        product: "Desktop CM44 & AIO N24",
    },
    {
        id: "government",
        name: "Government & PSUs",
        icon: Building2,
        headline: "E-Governance & Digital India",
        description:
            "Supporting India's digital transformation with secure, reliable computing solutions for government departments, PSUs, and public service centers nationwide.",
        solutions: [
            "E-Governance Kiosks",
            "Departmental Computing",
            "Public Service Centers",
            "Citizen Service Points",
        ],
        product: "KIOSK INFOK & Workstations",
    },
    {
        id: "healthcare",
        name: "Healthcare",
        icon: HeartPulse,
        headline: "Hospital Information Systems",
        description:
            "Reliable computing solutions for hospitals, diagnostic centers, and healthcare facilities. From patient self-service kiosks to back-end data processing workstations.",
        solutions: [
            "Hospital Information Systems",
            "Diagnostic Equipment Integration",
            "Patient Self-Service Kiosks",
            "Medical Data Processing",
        ],
        product: "AIO N24 & KIOSK INFOK",
    },
    {
        id: "banking",
        name: "Banking & Finance",
        icon: Landmark,
        headline: "Branch Automation Solutions",
        description:
            "Streamline banking operations with our secure desktops, customer service kiosks, and robust server solutions designed for the financial sector.",
        solutions: [
            "Branch Automation",
            "Customer Service Kiosks",
            "Secure Workstations",
            "Back-office Computing",
        ],
        product: "Desktop CM44 & KIOSK",
    },
    {
        id: "defense",
        name: "Defense",
        icon: Shield,
        headline: "Secure Computing Solutions",
        description:
            "High-security, ruggedized computing systems built to meet the stringent requirements of India's defense and security sectors.",
        solutions: [
            "Secure Computing",
            "Custom Hardware",
            "Ruggedized Systems",
            "Mission-Critical Computing",
        ],
        product: "Workstation CMW-1000T",
    },
];

export default function Industries() {
    const [active, setActive] = useState("education");
    const activeIndustry = industries.find((i) => i.id === active)!;

    return (
        <section className="section-padding bg-offwhite">
            <div className="container-max">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="section-label">Solutions</p>
                    <h2 className="heading-lg text-navy mb-4">
                        Industries We{" "}
                        <span className="gradient-text">Serve</span>
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        Tailored computing solutions for India&#39;s key sectors, backed by
                        20+ years of manufacturing expertise.
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {industries.map((ind) => (
                        <button
                            key={ind.id}
                            onClick={() => setActive(ind.id)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-heading font-medium transition-all duration-300 ${active === ind.id
                                ? "bg-navy text-cyan shadow-lg shadow-navy/20"
                                : "bg-white text-slate hover:bg-gray-50 hover:text-navy"
                                }`}
                        >
                            <ind.icon size={18} />
                            {ind.name}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid lg:grid-cols-2 gap-8 items-center"
                    >
                        {/* Left - Info */}
                        <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center">
                                    <activeIndustry.icon className="text-navy" size={24} />
                                </div>
                                <h3 className="heading-md text-navy">{activeIndustry.headline}</h3>
                            </div>
                            <p className="text-body mb-6">{activeIndustry.description}</p>

                            <div className="space-y-3 mb-6">
                                {activeIndustry.solutions.map((sol) => (
                                    <div
                                        key={sol}
                                        className="flex items-center gap-3 text-sm text-navy"
                                    >
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                                        {sol}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center gap-3 p-4 bg-cyan/5 rounded-xl border border-cyan/10">
                                <span className="text-xs text-slate uppercase tracking-wider">Recommended:</span>
                                <span className="text-sm font-heading font-semibold text-navy">
                                    {activeIndustry.product}
                                </span>
                            </div>
                        </div>

                        {/* Right - Visual */}
                        <div className="relative hidden lg:flex items-center justify-center">
                            <div className="w-full aspect-square max-w-sm mx-auto bg-gradient-to-br from-navy/5 to-navy/10 rounded-3xl flex items-center justify-center">
                                <activeIndustry.icon className="text-navy/10" size={160} />
                            </div>
                            {/* Floating cards */}
                            <motion.div
                                animate={{ y: [-5, 5, -5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="absolute top-8 right-8 bg-white shadow-lg rounded-xl px-4 py-3"
                            >
                                <p className="text-xs text-slate">Trusted by</p>
                                <p className="text-lg font-heading font-bold text-navy">5000+ Clients</p>
                            </motion.div>
                            <motion.div
                                animate={{ y: [5, -5, 5] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                className="absolute bottom-8 left-8 bg-navy text-white shadow-lg rounded-xl px-4 py-3"
                            >
                                <p className="text-xs text-slate-light">Quality Standard</p>
                                <p className="text-sm font-heading font-bold text-cyan">ISO 9001 Certified</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
