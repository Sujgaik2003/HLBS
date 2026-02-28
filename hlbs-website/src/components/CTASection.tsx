"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative py-20 overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-cta-gradient" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-50" />

            <div className="container-max relative z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="heading-lg text-white mb-4">
                        Ready to Build Your IT Infrastructure?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Get a customized quote for workstations, desktops, servers, and
                        more. Made in India, built for excellence.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center px-8 py-4 bg-white text-saffron font-heading font-bold rounded-lg hover:bg-gray-50 hover:scale-[1.02] transition-all shadow-lg"
                        >
                            Request a Quote
                            <ArrowRight size={18} className="ml-2" />
                        </a>
                        <a
                            href="tel:18002701244"
                            className="inline-flex items-center px-8 py-4 border-2 border-white/40 text-white font-heading font-semibold rounded-lg hover:bg-white/10 transition-all"
                        >
                            Call: 1800 270 1244
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
