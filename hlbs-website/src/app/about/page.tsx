"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { certifications, team } from "@/lib/data";
import {
    Building2,
    Calendar,
    MapPin,
    Target,
    Lightbulb,
    Users,
    Award,
    Factory,
    Beaker,
    ShieldCheck,
    Mail,
    Phone,
} from "lucide-react";

const timeline = [
    { year: "2004", event: "HLBS Tech (P) Ltd. established in Bhopal, Madhya Pradesh" },
    { year: "2006", event: "First product line of Desktop PCs launched under HLBS brand" },
    { year: "2008", event: "Expanded to national level operations within 4 years" },
    { year: "2010", event: "Launched HINUM as second brand for consumer segment" },
    { year: "2012", event: "Introduced Touch Screen Self-Service KIOSK line" },
    { year: "2015", event: "Achieved ISO 9001 and multiple quality certifications" },
    { year: "2018", event: "Launched All-in-One PC (N24) and Mini PC (Daksh) series" },
    { year: "2020", event: "Established dedicated R&D cell for innovative products" },
    { year: "2022", event: "Crossed 5000+ clients served pan India milestone" },
    { year: "2024", event: "Launched CMW-1000T Workstation & CMX2000T Server series" },
    { year: "2025", event: "Planning new state-of-the-art manufacturing unit in Bhopal IT Park" },
];

export default function AboutPage() {
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
                        <p className="section-label">About Us</p>
                        <h1 className="heading-xl text-white mb-4">
                            Two Decades of{" "}
                            <span className="gradient-text">Innovation</span>
                        </h1>
                        <p className="text-lg text-slate-light max-w-2xl mx-auto">
                            Since December 2004, HLBS Tech has been on a mission to make India
                            an IT Manufacturing Hub — one product at a time.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Company Story */}
            <section className="section-padding bg-offwhite">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="section-label">Our Story</p>
                            <h2 className="heading-lg text-navy mb-6">
                                Welcome to <span className="gradient-text">HLBS Technologies</span>
                            </h2>
                            <div className="space-y-4 text-body">
                                <p>
                                    HLBS Tech (P) Ltd. was established in December 2004, with a vision
                                    of manufacturing IT Hardware Products in India. Since then the company
                                    has travelled in the direction to make India as an IT Manufacturing Hub.
                                </p>
                                <p>
                                    The company has innovative and high-tech products like Touch Screen
                                    Self-Service Kiosk, Electronic Lectern, Mini PC, Desktop PC,
                                    All in One PC (AIO) under the HLBS and HINUM brand and has served
                                    more than 5000 clients pan India.
                                </p>
                                <p>
                                    HLBS owns a manufacturing unit in Bhopal and has planned an upcoming
                                    new state of the art manufacturing and R&D unit in Bhopal IT Park.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { icon: Calendar, label: "Established", value: "December 2004" },
                                { icon: MapPin, label: "Headquarters", value: "Bhopal, India" },
                                { icon: Users, label: "Clients Served", value: "5000+" },
                                { icon: Award, label: "Certifications", value: "13+ ISO & More" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all text-center"
                                >
                                    <item.icon size={28} className="text-cyan mx-auto mb-3" />
                                    <p className="text-2xl font-heading font-bold text-navy">{item.value}</p>
                                    <p className="text-xs text-slate mt-1">{item.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-hero-gradient rounded-2xl p-8 lg:p-10 text-white"
                        >
                            <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                                <Target size={28} className="text-cyan" />
                            </div>
                            <h3 className="heading-md text-white mb-4">Our Mission</h3>
                            <p className="text-slate-light leading-relaxed">
                                Our Mission is to enhance our customers by providing the very highest
                                quality Products & Services. Our customer support strategy is based upon
                                no-compromise customer satisfaction and we continually strive to offer a
                                complete package of up-to-date value added solutions.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-gradient-to-br from-saffron to-saffron-light rounded-2xl p-8 lg:p-10 text-white"
                        >
                            <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                                <Lightbulb size={28} className="text-white" />
                            </div>
                            <h3 className="heading-md text-white mb-4">Our Vision</h3>
                            <p className="text-white/80 leading-relaxed">
                                To develop innovative and high-tech products to serve domestic market
                                and to provide the lowest &quot;total cost&quot; solution to increase
                                the affordability of electronics products for all mankind, and the
                                common masses in particular.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-padding bg-offwhite">
                <div className="container-max">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="section-label">Our Journey</p>
                        <h2 className="heading-lg text-navy mb-4">
                            20+ Years of <span className="gradient-text">Growth</span>
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-cyan/20" />

                        <div className="space-y-8">
                            {timeline.map((item, i) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`relative flex items-center gap-6 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                                        }`}
                                >
                                    <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"} hidden lg:block`}>
                                        {i % 2 === 0 && (
                                            <div className="bg-white rounded-xl p-5 shadow-sm inline-block">
                                                <p className="text-2xl font-heading font-bold text-cyan">{item.year}</p>
                                                <p className="text-sm text-slate mt-1">{item.event}</p>
                                            </div>
                                        )}
                                    </div>

                                    {/* Center dot */}
                                    <div className="relative z-10 w-8 h-8 rounded-full bg-navy border-4 border-cyan/30 flex-shrink-0" />

                                    <div className={`flex-1 ${i % 2 === 0 ? "lg:text-left" : "lg:text-right"}`}>
                                        {(i % 2 !== 0 || true) && (
                                            <div className="bg-white rounded-xl p-5 shadow-sm inline-block lg:hidden">
                                                <p className="text-2xl font-heading font-bold text-cyan">{item.year}</p>
                                                <p className="text-sm text-slate mt-1">{item.event}</p>
                                            </div>
                                        )}
                                        {i % 2 !== 0 && (
                                            <div className="bg-white rounded-xl p-5 shadow-sm inline-block hidden lg:block">
                                                <p className="text-2xl font-heading font-bold text-cyan">{item.year}</p>
                                                <p className="text-sm text-slate mt-1">{item.event}</p>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* R&D + Manufacturing */}
            <section className="section-padding bg-hero-gradient">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-8"
                        >
                            <div className="w-14 h-14 rounded-xl bg-cyan/10 flex items-center justify-center mb-6">
                                <Factory size={28} className="text-cyan" />
                            </div>
                            <h3 className="heading-md text-white mb-4">Manufacturing</h3>
                            <p className="text-slate-light leading-relaxed mb-4">
                                Our manufacturing facility at Govindpura Industrial Area, Bhopal is
                                equipped with modern assembly lines and quality testing infrastructure.
                            </p>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-slate-light">
                                    <MapPin size={14} className="text-cyan" />
                                    24/2D, Sector J.K. Road, Govindpura, Bhopal
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="glass-card p-8"
                        >
                            <div className="w-14 h-14 rounded-xl bg-saffron/10 flex items-center justify-center mb-6">
                                <Beaker size={28} className="text-saffron" />
                            </div>
                            <h3 className="heading-md text-white mb-4">Research & Development</h3>
                            <p className="text-slate-light leading-relaxed">
                                HLBS has started its R&D cell to incubate start-up talents for
                                developing innovative products to help various sectors like Medical,
                                Education, Banking and Defence. With highly trained engineers,
                                we ensure each product is at its best quality and reliability.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section-padding bg-offwhite" id="team">
                <div className="container-max">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="section-label">Our Team</p>
                        <h2 className="heading-lg text-navy mb-4">
                            Leadership <span className="gradient-text">Team</span>
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        {team.map((member, i) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="w-20 h-20 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
                                    <span className="text-2xl font-heading font-bold text-navy">
                                        {member.name.split(" ").map((n) => n[0]).join("")}
                                    </span>
                                </div>
                                <h3 className="font-heading font-semibold text-navy">{member.name}</h3>
                                <p className="text-sm text-saffron font-medium mb-3">{member.role}</p>
                                <div className="space-y-1">
                                    <a href={`tel:${member.phone}`} className="flex items-center justify-center gap-1 text-xs text-slate hover:text-cyan transition-colors">
                                        <Phone size={12} /> {member.phone}
                                    </a>
                                    <a href={`mailto:${member.email}`} className="flex items-center justify-center gap-1 text-xs text-slate hover:text-cyan transition-colors">
                                        <Mail size={12} /> {member.email}
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section-padding bg-white">
                <div className="container-max">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <p className="section-label">Certifications</p>
                        <h2 className="heading-lg text-navy mb-4">
                            Quality <span className="gradient-text">Standards</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Quality */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <h3 className="font-heading font-semibold text-navy mb-4 flex items-center gap-2">
                                <ShieldCheck size={20} className="text-cyan" />
                                Quality Certifications
                            </h3>
                            <div className="space-y-2">
                                {certifications.quality.map((c) => (
                                    <div key={c.name} className="flex items-start gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0" />
                                        <div>
                                            <span className="font-mono text-navy font-medium">{c.name}</span>
                                            <span className="text-slate"> — {c.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <h3 className="font-heading font-semibold text-navy mb-4 flex items-center gap-2">
                                <Award size={20} className="text-saffron" />
                                Product Certifications
                            </h3>
                            <div className="space-y-2">
                                {certifications.product.map((c) => (
                                    <div key={c.name} className="flex items-start gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 flex-shrink-0" />
                                        <div>
                                            <span className="font-mono text-navy font-medium">{c.name}</span>
                                            <span className="text-slate"> — {c.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Registrations */}
                        <div className="bg-gray-50 rounded-2xl p-6">
                            <h3 className="font-heading font-semibold text-navy mb-4 flex items-center gap-2">
                                <Building2 size={20} className="text-cyan" />
                                Registrations
                            </h3>
                            <div className="space-y-2">
                                {certifications.registrations.map((c) => (
                                    <div key={c.name} className="flex items-start gap-2 text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0" />
                                        <div>
                                            <span className="font-mono text-navy font-medium">{c.name}</span>
                                            <span className="text-slate"> — {c.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
