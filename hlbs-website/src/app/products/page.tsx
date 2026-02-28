"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    ArrowRight,
    Cpu,
    Monitor,
    MonitorSmartphone,
    HardDrive,
    Tablet,
    Server,
    Search,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
    workstations: Cpu,
    desktops: Monitor,
    aio: MonitorSmartphone,
    minipc: HardDrive,
    kiosk: Tablet,
    servers: Server,
};

const categories = [
    { slug: "all", name: "All Products" },
    { slug: "workstations", name: "Workstations" },
    { slug: "desktops", name: "Desktops" },
    { slug: "aio", name: "All-in-One" },
    { slug: "minipc", name: "Mini PCs" },
    { slug: "kiosk", name: "KIOSK" },
    { slug: "servers", name: "Servers" },
];

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = products.filter((p) => {
        const matchesCat = activeCategory === "all" || p.categorySlug === activeCategory;
        const matchesSearch =
            searchQuery === "" ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="bg-hero-gradient py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-saffron/5 rounded-full blur-3xl" />
                </div>
                <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <p className="section-label">Our Products</p>
                        <h1 className="heading-xl text-white mb-4">
                            Computing Solutions for{" "}
                            <span className="gradient-text">Every Need</span>
                        </h1>
                        <p className="text-lg text-slate-light max-w-2xl mx-auto">
                            From high-performance workstations to enterprise servers —
                            everything designed and manufactured in India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters + Grid */}
            <section className="section-padding bg-offwhite">
                <div className="container-max">
                    {/* Search + Filters */}
                    <div className="flex flex-col lg:flex-row gap-6 mb-10">
                        {/* Search */}
                        <div className="relative flex-1 max-w-md">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-cyan/30 focus:border-cyan transition-all"
                            />
                        </div>

                        {/* Category Filters */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat.slug}
                                    onClick={() => setActiveCategory(cat.slug)}
                                    className={`px-4 py-2.5 rounded-xl text-sm font-heading font-medium transition-all duration-300 ${activeCategory === cat.slug
                                        ? "bg-navy text-cyan shadow-lg shadow-navy/20"
                                        : "bg-white text-slate hover:bg-gray-50 hover:text-navy border border-gray-100"
                                        }`}
                                >
                                    {cat.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results count */}
                    <p className="text-sm text-slate mb-6">
                        Showing {filtered.length} product{filtered.length !== 1 ? "s" : ""}
                    </p>

                    {/* Product Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((product, i) => {
                            const IconComp = categoryIcons[product.categorySlug] || Cpu;
                            return (
                                <motion.a
                                    key={product.slug}
                                    href={`/product/${product.slug}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: i * 0.05 }}
                                    className="group card-hover overflow-hidden"
                                >
                                    {/* Product Image Area */}
                                    <div className="relative h-52 bg-gradient-to-br from-navy/5 to-navy/10 flex items-center justify-center overflow-hidden">
                                        <IconComp
                                            size={80}
                                            className="text-navy/10 group-hover:text-navy/20 transition-colors duration-300"
                                        />
                                        {product.badge && (
                                            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cta-gradient text-white text-xs font-semibold">
                                                {product.badge}
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-navy/80 text-cyan text-xs font-mono">
                                            {product.category}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6">
                                        <h3 className="heading-sm text-navy mb-1 group-hover:text-cyan transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-saffron font-heading font-medium mb-3">
                                            {product.tagline}
                                        </p>
                                        <p className="text-sm text-slate leading-relaxed mb-4 line-clamp-2">
                                            {product.description}
                                        </p>

                                        {/* Variants count */}
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <span className="text-xs font-mono text-slate/60 bg-gray-50 px-3 py-1 rounded-full">
                                                {product.variants.length} variant{product.variants.length > 1 ? "s" : ""}
                                            </span>
                                            <span className="flex items-center text-sm font-medium text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                                                View Details
                                                <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom accent */}
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                </motion.a>
                            );
                        })}
                    </div>

                    {filtered.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-slate text-lg">No products found matching your criteria.</p>
                            <button
                                onClick={() => { setActiveCategory("all"); setSearchQuery(""); }}
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
