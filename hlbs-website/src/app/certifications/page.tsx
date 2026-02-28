"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { certifications } from "@/lib/data";
import { ShieldCheck, Award, Building2, Check } from "lucide-react";

export default function CertificationsPage() {
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
                        <p className="section-label">Quality Assurance</p>
                        <h1 className="heading-xl text-white mb-4">
                            Certifications & <span className="gradient-text">Compliance</span>
                        </h1>
                        <p className="text-lg text-slate-light max-w-2xl mx-auto">
                            HLBS Tech maintains the highest quality standards with 13+
                            international certifications and compliance standards.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="section-padding bg-offwhite">
                <div className="container-max">
                    {/* Quality Certs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                                <ShieldCheck size={24} className="text-cyan" />
                            </div>
                            <div>
                                <h2 className="heading-md text-navy">Quality Management Certifications</h2>
                                <p className="text-sm text-slate">International quality standards</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {certifications.quality.map((cert, i) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-cyan/10 transition-colors">
                                        <Check size={24} className="text-navy group-hover:text-cyan transition-colors" />
                                    </div>
                                    <h3 className="font-mono text-lg font-bold text-navy mb-1">{cert.name}</h3>
                                    <p className="text-sm text-slate">{cert.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Product Certs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center">
                                <Award size={24} className="text-saffron" />
                            </div>
                            <div>
                                <h2 className="heading-md text-navy">Product Certifications</h2>
                                <p className="text-sm text-slate">Product safety and compliance</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {certifications.product.map((cert, i) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all group"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-saffron/10 transition-colors">
                                        <Award size={24} className="text-navy group-hover:text-saffron transition-colors" />
                                    </div>
                                    <h3 className="font-mono text-lg font-bold text-navy mb-1">{cert.name}</h3>
                                    <p className="text-sm text-slate">{cert.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Registrations */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                                <Building2 size={24} className="text-cyan" />
                            </div>
                            <div>
                                <h2 className="heading-md text-navy">Government Registrations</h2>
                                <p className="text-sm text-slate">Official registrations and licenses</p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {certifications.registrations.map((cert, i) => (
                                <motion.div
                                    key={cert.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <h3 className="font-mono text-lg font-bold text-navy mb-1">{cert.name}</h3>
                                    <p className="text-sm text-slate">{cert.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
