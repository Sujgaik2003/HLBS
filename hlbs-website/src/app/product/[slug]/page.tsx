"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { products } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useParams } from "next/navigation";
import {
    Download,
    ChevronRight,
    ArrowRight,
    Star,
    ShieldCheck,
    Cpu,
    MemoryStick,
    HardDrive,
    Monitor,
    Zap,
    Wifi,
    Check,
} from "lucide-react";

export default function ProductDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const product = products.find((p) => p.slug === slug);
    const [selectedVariant, setSelectedVariant] = useState(0);
    const [activeTab, setActiveTab] = useState("specs");

    if (!product) {
        return (
            <main>
                <Navbar />
                <div className="min-h-screen flex items-center justify-center bg-offwhite">
                    <div className="text-center">
                        <h1 className="heading-lg text-navy mb-4">Product Not Found</h1>
                        <a href="/products" className="btn-primary">Back to Products</a>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    const variant = product.variants[selectedVariant];

    const specRows = [
        { label: "Processor", value: variant.processor, icon: Cpu },
        { label: "Chipset", value: variant.chipset, icon: Cpu },
        { label: "Graphics", value: variant.graphics, icon: Monitor },
        { label: "Operating System", value: variant.os, icon: ShieldCheck },
        { label: "Memory", value: variant.memory, icon: MemoryStick },
        { label: "Storage", value: variant.storage, icon: HardDrive },
        { label: "Display", value: variant.display, icon: Monitor },
        ...(variant.connectivity ? [{ label: "Connectivity", value: variant.connectivity, icon: Wifi }] : []),
        ...(variant.power ? [{ label: "Power Supply", value: variant.power, icon: Zap }] : []),
        ...(variant.expansion ? [{ label: "Expansion Slots", value: variant.expansion, icon: Cpu }] : []),
        ...(variant.network ? [{ label: "Network", value: variant.network, icon: Wifi }] : []),
        ...(variant.security ? [{ label: "Security", value: variant.security, icon: ShieldCheck }] : []),
        ...(variant.io ? [{ label: "I/O Ports", value: variant.io, icon: Zap }] : []),
        ...(variant.warranty ? [{ label: "Warranty", value: variant.warranty, icon: ShieldCheck }] : []),
    ];

    return (
        <main>
            <Navbar />

            {/* Breadcrumb */}
            <div className="bg-offwhite border-b border-gray-100">
                <div className="container-max px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-slate">
                        <a href="/" className="hover:text-cyan transition-colors">Home</a>
                        <ChevronRight size={14} />
                        <a href="/products" className="hover:text-cyan transition-colors">Products</a>
                        <ChevronRight size={14} />
                        <span className="text-navy font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* Product Hero */}
            <section className="section-padding bg-offwhite !pt-8">
                <div className="container-max">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left - Product Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-white rounded-2xl shadow-sm p-8 sticky top-24">
                                <div className="aspect-square bg-gradient-to-br from-navy/5 to-navy/10 rounded-xl flex items-center justify-center relative overflow-hidden">
                                    {/* Decorative product visual */}
                                    <div className="relative">
                                        <div className="w-48 h-32 bg-gradient-to-br from-navy-light to-navy border-2 border-cyan/20 rounded-xl shadow-2xl overflow-hidden">
                                            <div className="w-full h-full p-3 flex flex-col">
                                                <div className="flex gap-1 mb-2">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-saffron/60" />
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cyan/40" />
                                                    <div className="w-1.5 h-1.5 rounded-full bg-green-400/40" />
                                                </div>
                                                <div className="flex-1 flex items-center justify-center">
                                                    <div className="w-12 h-12 rounded-lg bg-accent-gradient opacity-60 flex items-center justify-center">
                                                        <span className="text-navy font-bold">H</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-12 h-4 bg-slate/20 mx-auto rounded-b-sm" />
                                        <div className="w-20 h-1.5 bg-slate/10 mx-auto rounded-full" />
                                    </div>
                                    {product.badge && (
                                        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cta-gradient text-white text-xs font-semibold">
                                            {product.badge}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right - Product Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="px-3 py-1 rounded-full bg-navy/10 text-navy text-xs font-mono">
                                    {product.category}
                                </span>
                                <span className="text-xs text-slate">Model: {variant.model}</span>
                            </div>

                            <h1 className="heading-lg text-navy mb-2">{product.name}</h1>
                            <p className="text-saffron font-heading font-medium mb-4">{product.tagline}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((s) => (
                                        <Star key={s} size={16} className="text-saffron fill-saffron" />
                                    ))}
                                </div>
                                <span className="text-sm text-slate">(4.8/5)</span>
                            </div>

                            <p className="text-body mb-8">{product.description}</p>

                            {/* Variant Selector */}
                            {product.variants.length > 1 && (
                                <div className="mb-8">
                                    <p className="text-sm font-heading font-semibold text-navy mb-3">
                                        Select Configuration:
                                    </p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {product.variants.map((v, i) => (
                                            <button
                                                key={v.id}
                                                onClick={() => setSelectedVariant(i)}
                                                className={`text-left p-3 rounded-xl border-2 transition-all text-sm ${selectedVariant === i
                                                        ? "border-cyan bg-cyan/5 text-navy"
                                                        : "border-gray-100 bg-white text-slate hover:border-gray-200"
                                                    }`}
                                            >
                                                <p className="font-medium text-xs leading-tight">{v.name}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTAs */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                <a href="/contact" className="btn-primary">
                                    Request Quote
                                    <ArrowRight size={16} className="ml-2" />
                                </a>
                                {variant.pdfUrl && (
                                    <a
                                        href={variant.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary"
                                    >
                                        <Download size={16} className="mr-2" />
                                        Download Datasheet
                                    </a>
                                )}
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-3 gap-3">
                                <div className="bg-gray-50 rounded-xl p-4 text-center">
                                    <ShieldCheck size={20} className="text-cyan mx-auto mb-1" />
                                    <p className="text-xs text-slate">3-Year Warranty</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 text-center">
                                    <Check size={20} className="text-cyan mx-auto mb-1" />
                                    <p className="text-xs text-slate">ISO Certified</p>
                                </div>
                                <div className="bg-gray-50 rounded-xl p-4 text-center">
                                    <Zap size={20} className="text-saffron mx-auto mb-1" />
                                    <p className="text-xs text-slate">Made in India</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="section-padding bg-white !pt-0">
                <div className="container-max">
                    {/* Tab Headers */}
                    <div className="flex gap-1 border-b border-gray-200 mb-8 overflow-x-auto">
                        {["specs", "features", "downloads"].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-4 text-sm font-heading font-medium whitespace-nowrap transition-all border-b-2 ${activeTab === tab
                                        ? "border-cyan text-navy"
                                        : "border-transparent text-slate hover:text-navy"
                                    }`}
                            >
                                {tab === "specs" ? "Specifications" : tab === "features" ? "Features" : "Downloads"}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    {activeTab === "specs" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-gray-50 rounded-2xl overflow-hidden"
                        >
                            <div className="p-6 bg-navy text-white">
                                <h3 className="heading-sm">{variant.name}</h3>
                                <p className="text-sm text-slate-light mt-1">Full Technical Specifications</p>
                            </div>
                            <div className="divide-y divide-gray-200">
                                {specRows.map((row, i) => (
                                    <div
                                        key={row.label}
                                        className={`flex items-start gap-4 px-6 py-4 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
                                    >
                                        <row.icon size={16} className="text-cyan mt-0.5 flex-shrink-0" />
                                        <span className="w-40 text-sm font-heading font-medium text-navy flex-shrink-0">
                                            {row.label}
                                        </span>
                                        <span className="text-sm text-slate font-mono">{row.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {activeTab === "features" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="grid sm:grid-cols-2 gap-4"
                        >
                            {product.features.map((feat, i) => (
                                <div key={i} className="flex items-start gap-3 p-5 bg-gray-50 rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-cyan/10 flex items-center justify-center flex-shrink-0">
                                        <Check size={16} className="text-cyan" />
                                    </div>
                                    <p className="text-sm text-navy leading-relaxed">{feat}</p>
                                </div>
                            ))}
                        </motion.div>
                    )}

                    {activeTab === "downloads" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-3"
                        >
                            {product.variants
                                .filter((v) => v.pdfUrl)
                                .map((v) => (
                                    <a
                                        key={v.id}
                                        href={v.pdfUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-saffron/10 flex items-center justify-center">
                                                <Download size={18} className="text-saffron" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-heading font-medium text-navy">{v.name}</p>
                                                <p className="text-xs text-slate">PDF Datasheet</p>
                                            </div>
                                        </div>
                                        <ArrowRight size={16} className="text-slate group-hover:text-cyan transition-colors" />
                                    </a>
                                ))}
                            {product.variants.filter((v) => v.pdfUrl).length === 0 && (
                                <p className="text-sm text-slate text-center py-8">No downloads available for this product yet.</p>
                            )}
                        </motion.div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
