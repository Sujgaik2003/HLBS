"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Send,
    Building2,
    Factory,
    MessageCircle,
    CheckCircle,
} from "lucide-react";

export default function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        product: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

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
                        <p className="section-label">Contact Us</p>
                        <h1 className="heading-xl text-white mb-4">
                            Let&#39;s Build{" "}
                            <span className="gradient-text">Together</span>
                        </h1>
                        <p className="text-lg text-slate-light max-w-2xl mx-auto">
                            Get a customized quote, schedule a demo, or learn more about our
                            products and solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="relative -mt-12 z-10 px-4 sm:px-6 lg:px-8">
                <div className="container-max">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Phone, label: "Toll Free", value: "1800 270 1244", href: "tel:18002701244" },
                            { icon: Phone, label: "Office", value: "0755-4082900", href: "tel:07554082900" },
                            { icon: Mail, label: "Email", value: "sales@hlbstech.com", href: "mailto:sales@hlbstech.com" },
                            { icon: Clock, label: "Business Hours", value: "Mon-Sat: 9AM-6PM", href: null },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg text-center hover:shadow-xl transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center mx-auto mb-3">
                                    <item.icon size={22} className="text-cyan" />
                                </div>
                                <p className="text-xs text-slate uppercase tracking-wider mb-1">{item.label}</p>
                                {item.href ? (
                                    <a href={item.href} className="text-sm font-heading font-semibold text-navy hover:text-cyan transition-colors">
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

            {/* Form + Info */}
            <section className="section-padding bg-offwhite">
                <div className="container-max">
                    <div className="grid lg:grid-cols-5 gap-10">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm">
                                <h2 className="heading-md text-navy mb-2">Send Us a Message</h2>
                                <p className="text-body mb-8">
                                    Fill out the form below and our team will get back to you within 24 hours.
                                </p>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-16"
                                    >
                                        <CheckCircle size={48} className="text-cyan mx-auto mb-4" />
                                        <h3 className="heading-sm text-navy mb-2">Message Sent!</h3>
                                        <p className="text-slate">Thank you! Our team will contact you shortly.</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-heading font-medium text-navy mb-2">
                                                    Full Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formState.name}
                                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan focus:bg-white transition-all"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-heading font-medium text-navy mb-2">
                                                    Email Address *
                                                </label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formState.email}
                                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan focus:bg-white transition-all"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-5">
                                            <div>
                                                <label className="block text-sm font-heading font-medium text-navy mb-2">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={formState.phone}
                                                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan focus:bg-white transition-all"
                                                    placeholder="+91 98265 27444"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-heading font-medium text-navy mb-2">
                                                    Company / Organization
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formState.company}
                                                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan focus:bg-white transition-all"
                                                    placeholder="Your Company"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-heading font-medium text-navy mb-2">
                                                Product Interest
                                            </label>
                                            <select
                                                value={formState.product}
                                                onChange={(e) => setFormState({ ...formState, product: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan focus:bg-white transition-all"
                                            >
                                                <option value="">Select a product...</option>
                                                <option value="workstation">Workstations (CMW-1000T)</option>
                                                <option value="desktop">Desktops (CM44)</option>
                                                <option value="aio">All-in-One PCs (N24)</option>
                                                <option value="minipc">Mini PCs (Daksh)</option>
                                                <option value="kiosk">KIOSK (INFOK)</option>
                                                <option value="server">Servers (CMX2000T)</option>
                                                <option value="other">Other / Custom Solution</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-heading font-medium text-navy mb-2">
                                                Message *
                                            </label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formState.message}
                                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan focus:bg-white transition-all resize-none"
                                                placeholder="Tell us about your requirements..."
                                            />
                                        </div>

                                        <button type="submit" className="btn-primary w-full sm:w-auto">
                                            <Send size={16} className="mr-2" />
                                            Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>

                        {/* Right - Addresses */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-6"
                        >
                            {/* Head Office */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-navy/5 flex items-center justify-center">
                                        <Building2 size={20} className="text-navy" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-navy">Head Office</h3>
                                </div>
                                <div className="space-y-3 text-sm text-slate">
                                    <div className="flex items-start gap-2">
                                        <MapPin size={14} className="text-cyan mt-1 flex-shrink-0" />
                                        <span>243-B, Zone I, MP Nagar, Bhopal (M.P.) - 462011, India</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={14} className="text-cyan flex-shrink-0" />
                                        <span>0755-4082900, 0755-4074072</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Phone size={14} className="text-cyan flex-shrink-0" />
                                        <span>+91 98265 27444, +91 8889955229</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Mail size={14} className="text-cyan flex-shrink-0" />
                                        <span>sales@hlbstech.com, hlbs@hlbstech.com</span>
                                    </div>
                                </div>
                            </div>

                            {/* Factory */}
                            <div className="bg-white rounded-2xl p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-lg bg-saffron/5 flex items-center justify-center">
                                        <Factory size={20} className="text-saffron" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-navy">Manufacturing Unit</h3>
                                </div>
                                <div className="space-y-3 text-sm text-slate">
                                    <div className="flex items-start gap-2">
                                        <MapPin size={14} className="text-saffron mt-1 flex-shrink-0" />
                                        <span>24/2D, Sector J.K. Road, Industrial Area, Govindpura, Bhopal</span>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="bg-white rounded-2xl p-3 shadow-sm overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.2744686839397!2d77.42442!3d23.233249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzU5LjciTiA3N8KwMjUnMjguMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: "12px" }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="HLBS Tech Location"
                                />
                            </div>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919826527444?text=Hi%20HLBS%20Tech%2C%20I%20am%20interested%20in%20your%20products"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-green-500 text-white rounded-2xl p-5 hover:bg-green-600 transition-colors"
                            >
                                <MessageCircle size={24} />
                                <div>
                                    <p className="font-heading font-semibold">Chat on WhatsApp</p>
                                    <p className="text-sm text-white/80">Quick response guaranteed</p>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
