"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Building2,
    GraduationCap,
    Landmark,
    Shield,
    HeartPulse,
    ArrowRight,
    ExternalLink,
} from "lucide-react";

const projects = [
    {
        title: "Smart Classroom Implementation",
        client: "Department of Education",
        location: "Madhya Pradesh",
        year: "2023",
        category: "Education",
        description: "Deployment of 500+ All-in-One PCs and Interactive Lecterns across primary schools.",
        icon: GraduationCap,
    },
    {
        title: "E-Governance Infrastructure",
        client: "State Data Centre",
        location: "Bhopal",
        year: "2022",
        category: "Government",
        description: "Installation of high-performance servers and workstations for database management.",
        icon: Building2,
    },
    {
        title: "Branch Automation Systems",
        client: "Major PSU Bank",
        location: "Pan India",
        year: "2023",
        category: "Banking",
        description: "Customized self-service KIOSKs and thin clients for 100+ branches.",
        icon: Landmark,
    },
    {
        title: "Secure Defense Computing",
        client: "Defense Organization",
        location: "Sensitive Location",
        year: "2021",
        category: "Defense",
        description: "Providing ruggedized workstations with enhanced security features.",
        icon: Shield,
    },
    {
        title: "Hospital Management Terminals",
        client: "Regional Medical Institute",
        location: "Indore",
        year: "2024",
        category: "Healthcare",
        description: "AIO PC deployment for patient records and diagnostic laboratory terminals.",
        icon: HeartPulse,
    },
    {
        title: "Public Information KIOSK Network",
        client: "Municipal Corporation",
        location: "Multiple Cities",
        year: "2023",
        category: "Government",
        description: "Outdoor KIOSKs for public information and bill payments.",
        icon: Building2,
    },
];

export default function ProjectsPage() {
    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="bg-hero-gradient py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
                </div>
                <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <p className="section-label">Our Impact</p>
                        <h1 className="heading-xl text-white mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-lg text-slate-light max-w-2xl mx-auto">
                            Discover how HLBS Tech is powering India&#39;s digital transformation
                            across various sectors with reliable hardware solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="section-padding bg-offwhite">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, i) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="p-8">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-cyan/10 transition-colors">
                                            <project.icon size={24} className="text-navy group-hover:text-cyan transition-colors" />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-saffron uppercase bg-saffron/5 px-3 py-1 rounded-full">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="heading-sm text-navy mb-2 group-hover:text-cyan transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="space-y-1 mb-4">
                                        <p className="text-xs text-slate font-medium">Client: {project.client}</p>
                                        <p className="text-xs text-slate/60">{project.location} • {project.year}</p>
                                    </div>

                                    <p className="text-sm text-slate leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                                        <span className="text-xs text-slate/40 italic">Case Study Available</span>
                                        <button className="text-cyan group/btn flex items-center gap-1.5 text-sm font-heading font-semibold">
                                            Read More
                                            <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 bg-hero-gradient rounded-3xl p-10 lg:p-16 text-center text-white relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Building2 size={120} />
                        </div>
                        <h2 className="heading-lg text-white mb-6">Building the Infrastructure for Digital India</h2>
                        <p className="text-lg text-slate-light max-w-2xl mx-auto mb-10">
                            With 20+ years of experience and a strong manufacturing base,
                            HLBS Tech is the preferred partner for large-scale IT hardware projects.
                        </p>
                        <a href="/contact" className="btn-primary">
                            Partner With Us
                            <ArrowRight size={18} className="ml-2" />
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
