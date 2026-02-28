"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { downloads } from "@/lib/data";
import { Download, FileText, Search } from "lucide-react";

const categoryFilters = ["All", "Workstation", "Server", "Desktop", "AIO"];

export default function DownloadsPage() {
    const [activeFilter, setActiveFilter] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = downloads.filter((d) => {
        const matchesCat = activeFilter === "All" || d.category === activeFilter;
        const matchesSearch =
            searchQuery === "" ||
            d.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

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
                        <p className="section-label">Resources</p>
                        <h1 className="heading-xl text-white mb-4">
                            Downloads & <span className="gradient-text">Datasheets</span>
                        </h1>
                        <p className="text-lg text-slate-light max-w-2xl mx-auto">
                            Download product datasheets, technical specifications, and
                            brochures for all HLBS products.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Downloads Grid */}
            <section className="section-padding bg-offwhite">
                <div className="container-max">
                    {/* Filters */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-10">
                        <div className="relative flex-1 max-w-md">
                            <Search
                                size={18}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate"
                            />
                            <input
                                type="text"
                                placeholder="Search datasheets..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all"
                            />
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {categoryFilters.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveFilter(cat)}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-heading font-medium transition-all ${activeFilter === cat
                                        ? "bg-navy text-cyan shadow-lg shadow-navy/20"
                                        : "bg-white text-slate hover:bg-gray-50 border border-gray-100"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results */}
                    <div className="space-y-3">
                        {filtered.map((dl, i) => (
                            <motion.a
                                key={dl.name}
                                href={dl.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.03 }}
                                className="flex items-center justify-between p-5 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center group-hover:bg-saffron/20 transition-colors">
                                        <FileText size={22} className="text-saffron" />
                                    </div>
                                    <div>
                                        <p className="font-heading font-semibold text-navy text-sm group-hover:text-cyan transition-colors">
                                            {dl.name}
                                        </p>
                                        <p className="text-xs text-slate mt-0.5">
                                            PDF Datasheet • {dl.category}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 group-hover:bg-cyan/10 transition-colors">
                                    <Download size={16} className="text-slate group-hover:text-cyan transition-colors" />
                                    <span className="text-sm text-slate group-hover:text-cyan hidden sm:block transition-colors">
                                        Download
                                    </span>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate text-lg">No datasheets found.</p>
                            <button
                                onClick={() => { setActiveFilter("All"); setSearchQuery(""); }}
                                className="mt-4 btn-primary text-sm"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
