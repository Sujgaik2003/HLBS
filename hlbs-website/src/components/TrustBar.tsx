"use client";
// import { motion } from "framer-motion";

const partners = [
    { name: "Intel", text: "Intel®" },
    { name: "AMD", text: "AMD" },
    { name: "Microsoft", text: "Microsoft" },
    { name: "NVIDIA", text: "NVIDIA®" },
    { name: "Make in India", text: "🇮🇳 Make in India" },
    { name: "ISO 9001", text: "ISO 9001" },
    { name: "BIS", text: "BIS Certified" },
];

export default function TrustBar() {
    return (
        <section className="bg-offwhite py-8 border-b border-gray-100 overflow-hidden">
            <div className="container-max">
                <p className="text-center text-xs uppercase tracking-[0.2em] text-slate mb-6 font-heading font-medium">
                    Trusted Technology Partners
                </p>
            </div>
            <div className="relative">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...partners, ...partners].map((partner, i) => (
                        <div
                            key={`${partner.name}-${i}`}
                            className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center px-6 py-3 rounded-lg hover:bg-navy/5 transition-all duration-300 group cursor-pointer"
                        >
                            <span className="text-slate/50 group-hover:text-navy font-heading font-semibold text-sm lg:text-base transition-colors whitespace-nowrap">
                                {partner.text}
                            </span>
                        </div>
                    ))}
                </div>
                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-offwhite to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-offwhite to-transparent pointer-events-none" />
            </div>
        </section>
    );
}
