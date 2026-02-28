"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ShieldCheck,
    Phone,
    Mail,
    MessageCircle,
    Clock,
    CheckCircle,
    Send,
    HelpCircle,
} from "lucide-react";

export default function SupportPage() {
    const [complaintSubmitted, setComplaintSubmitted] = useState(false);

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
                        <p className="section-label">Support</p>
                        <h1 className="heading-xl text-white mb-4">
                            We&#39;re Here to <span className="gradient-text">Help</span>
                        </h1>
                        <p className="text-lg text-slate-light max-w-2xl mx-auto">
                            World-class support for all HLBS products. Warranty information,
                            driver downloads, and technical assistance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Support Options */}
            <section className="relative -mt-12 z-10 px-4 sm:px-6 lg:px-8">
                <div className="container-max">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Phone, label: "Toll Free", value: "1800 270 1244", href: "tel:18002701244", color: "text-cyan" },
                            { icon: Mail, label: "Email Support", value: "sales@hlbstech.com", href: "mailto:sales@hlbstech.com", color: "text-saffron" },
                            { icon: MessageCircle, label: "WhatsApp", value: "+91 98265 27444", href: "https://wa.me/919826527444", color: "text-green-500" },
                            { icon: Clock, label: "Support Hours", value: "Mon-Sat: 9AM-6PM", href: null, color: "text-cyan" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all"
                            >
                                <item.icon size={28} className={`${item.color} mx-auto mb-3`} />
                                <p className="text-xs text-slate uppercase tracking-wider mb-1">{item.label}</p>
                                {item.href ? (
                                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-heading font-semibold text-navy hover:text-cyan transition-colors">
                                        {item.value}
                                    </a>
                                ) : (
                                    <p className="text-sm font-heading font-semibold text-navy">{item.value}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warranty + FAQ */}
            <section className="section-padding bg-offwhite" id="warranty">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Warranty */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center">
                                        <ShieldCheck size={24} className="text-cyan" />
                                    </div>
                                    <h2 className="heading-md text-navy">Warranty Information</h2>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { title: "Standard Warranty", desc: "3-year on-site OEM warranty on all HLBS products" },
                                        { title: "Coverage", desc: "Covers manufacturing defects in materials and workmanship" },
                                        { title: "On-Site Support", desc: "Trained technicians available for on-site service across India" },
                                        { title: "Extended Warranty", desc: "Extended warranty options available — contact sales for details" },
                                        { title: "Parts Availability", desc: "Genuine spare parts guaranteed for 5+ years" },
                                    ].map((item) => (
                                        <div key={item.title} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                                            <CheckCircle size={18} className="text-cyan mt-0.5 flex-shrink-0" />
                                            <div>
                                                <p className="text-sm font-heading font-semibold text-navy">{item.title}</p>
                                                <p className="text-xs text-slate mt-0.5">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* FAQ */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-white rounded-2xl p-8 shadow-sm h-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center">
                                        <HelpCircle size={24} className="text-saffron" />
                                    </div>
                                    <h2 className="heading-md text-navy">FAQ</h2>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { q: "How do I claim warranty?", a: "Contact our toll-free number 1800 270 1244 or email sales@hlbstech.com with your product serial number." },
                                        { q: "Where can I download drivers?", a: "Visit our Downloads page for the latest drivers and datasheets for all HLBS products." },
                                        { q: "Do you offer bulk/institutional pricing?", a: "Yes, we offer special pricing for government, education, and enterprise bulk orders. Contact our sales team." },
                                        { q: "What is the delivery timeline?", a: "Standard products ship within 7-10 business days. Custom configurations may take 2-3 weeks." },
                                        { q: "Do you ship across India?", a: "Yes, we provide pan-India delivery and support from our Bhopal headquarters." },
                                    ].map((item) => (
                                        <div key={item.q} className="p-4 bg-gray-50 rounded-xl">
                                            <p className="text-sm font-heading font-semibold text-navy mb-1">{item.q}</p>
                                            <p className="text-xs text-slate leading-relaxed">{item.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Complaint Form */}
            <section className="section-padding bg-white" id="complaint">
                <div className="container-max max-w-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <p className="section-label">Complaint Register</p>
                        <h2 className="heading-lg text-navy mb-4">
                            Register a <span className="gradient-text">Complaint</span>
                        </h2>
                        <p className="text-body">
                            Having an issue with your HLBS product? Submit a complaint and our
                            team will respond within 24 hours.
                        </p>
                    </motion.div>

                    <div className="bg-gray-50 rounded-2xl p-8">
                        {complaintSubmitted ? (
                            <div className="text-center py-12">
                                <CheckCircle size={48} className="text-cyan mx-auto mb-4" />
                                <h3 className="heading-sm text-navy mb-2">Complaint Registered!</h3>
                                <p className="text-slate text-sm">Our support team will contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form
                                onSubmit={(e) => { e.preventDefault(); setComplaintSubmitted(true); }}
                                className="space-y-5"
                            >
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all" />
                                    <input type="email" required placeholder="Email Address" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all" />
                                </div>
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all" />
                                    <input type="text" placeholder="Product Serial Number" className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all" />
                                </div>
                                <textarea required rows={4} placeholder="Describe your issue..." className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all resize-none" />
                                <button type="submit" className="btn-primary">
                                    <Send size={16} className="mr-2" />
                                    Submit Complaint
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
