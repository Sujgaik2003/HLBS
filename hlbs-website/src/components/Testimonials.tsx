"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Government of Madhya Pradesh",
        role: "E-Governance Project",
        text: "HLBS Tech has been our trusted partner for deploying self-service kiosks across government offices. Their reliability and after-sales support is exceptional.",
        rating: 5,
    },
    {
        name: "Leading University",
        role: "Computer Lab Setup",
        text: "We equipped 10 computer labs with HLBS desktops and AIO PCs. The quality is on par with international brands, at a much better price point.",
        rating: 5,
    },
    {
        name: "Banking Institution",
        role: "Branch Automation",
        text: "The HLBS KIOSK systems have transformed our customer service operations. Fast deployment, excellent build quality, and outstanding warranty support.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="section-padding bg-white">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="section-label">Testimonials</p>
                    <h2 className="heading-lg text-navy mb-4">
                        What Our Clients{" "}
                        <span className="gradient-text">Say</span>
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        Trusted by 5000+ organizations across India, from government
                        agencies to educational institutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {testimonials.map((test, i) => (
                        <motion.div
                            key={test.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Quote icon */}
                            <div className="absolute -top-4 left-6 w-8 h-8 rounded-lg bg-navy flex items-center justify-center">
                                <Quote size={14} className="text-cyan" />
                            </div>

                            {/* Stars */}
                            <div className="flex gap-1 mb-4 pt-2">
                                {Array.from({ length: test.rating }).map((_, j) => (
                                    <Star
                                        key={j}
                                        size={14}
                                        className="text-saffron fill-saffron"
                                    />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-sm text-slate leading-relaxed mb-6 italic">
                                &ldquo;{test.text}&rdquo;
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                                <div className="w-10 h-10 rounded-full bg-navy/10 flex items-center justify-center">
                                    <span className="text-sm font-heading font-bold text-navy">
                                        {test.name[0]}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm font-heading font-semibold text-navy">
                                        {test.name}
                                    </p>
                                    <p className="text-xs text-slate">{test.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
