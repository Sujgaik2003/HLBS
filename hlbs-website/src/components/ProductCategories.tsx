"use client";
import { motion } from "framer-motion";
import {
    Monitor,
    Cpu,
    MonitorSmartphone,
    HardDrive,
    Tablet,
    Server,
    ArrowRight,
} from "lucide-react";

const categories = [
    {
        name: "Workstations",
        description: "High-performance computing for professionals. Intel Xeon & Core i9 powered.",
        icon: Cpu,
        href: "/products#workstations",
        models: "8 Configurations",
        gradient: "from-cyan/10 to-cyan/5",
        iconColor: "text-cyan",
        badge: "Best Seller",
    },
    {
        name: "Desktops",
        description: "Business-class desktop solutions. Reliable, efficient, and affordable.",
        icon: Monitor,
        href: "/products#desktops",
        models: "CM44 Series",
        gradient: "from-saffron/10 to-saffron/5",
        iconColor: "text-saffron",
        badge: null,
    },
    {
        name: "All-in-One PCs",
        description: "Space-saving AIO solutions with 23.8\" displays. Perfect for modern offices.",
        icon: MonitorSmartphone,
        href: "/products#aio",
        models: "N24 Series",
        gradient: "from-cyan/10 to-cyan/5",
        iconColor: "text-cyan",
        badge: "New",
    },
    {
        name: "Mini PCs",
        description: "Compact yet powerful computing. Sleek design with full desktop power.",
        icon: HardDrive,
        href: "/products#minipc",
        models: "Daksh Series",
        gradient: "from-saffron/10 to-saffron/5",
        iconColor: "text-saffron",
        badge: null,
    },
    {
        name: "KIOSK",
        description: "Touch screen self-service kiosk solutions for banks, hospitals & government.",
        icon: Tablet,
        href: "/products#kiosk",
        models: "INFOK Series",
        gradient: "from-cyan/10 to-cyan/5",
        iconColor: "text-cyan",
        badge: null,
    },
    {
        name: "Servers",
        description: "Enterprise-grade tower servers with Intel Xeon Gold processors.",
        icon: Server,
        href: "/products#servers",
        models: "CMX2000T",
        gradient: "from-saffron/10 to-saffron/5",
        iconColor: "text-saffron",
        badge: "Enterprise",
    },
];

export default function ProductCategories() {
    return (
        <section className="section-padding bg-offwhite">
            <div className="container-max">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <p className="section-label">Our Products</p>
                    <h2 className="heading-lg text-navy mb-4">
                        Computing Solutions for{" "}
                        <span className="gradient-text">Every Need</span>
                    </h2>
                    <p className="text-body max-w-2xl mx-auto">
                        From high-performance workstations to self-service kiosks, we
                        manufacture a complete range of IT hardware solutions designed and
                        built in India.
                    </p>
                </motion.div>

                {/* Product Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat, i) => (
                        <motion.a
                            key={cat.name}
                            href={cat.href}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-30px" }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group relative card-hover p-8 overflow-hidden"
                        >
                            {/* Badge */}
                            {cat.badge && (
                                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cta-gradient text-white text-xs font-semibold">
                                    {cat.badge}
                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                            >
                                <cat.icon className={cat.iconColor} size={30} />
                            </div>

                            {/* Content */}
                            <h3 className="heading-sm text-navy mb-2">{cat.name}</h3>
                            <p className="text-sm text-slate mb-4 leading-relaxed">
                                {cat.description}
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-mono text-slate/60 bg-gray-50 px-3 py-1 rounded-full">
                                    {cat.models}
                                </span>
                                <span className="flex items-center text-sm font-medium text-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                                    Explore
                                    <ArrowRight
                                        size={14}
                                        className="ml-1 group-hover:translate-x-1 transition-transform"
                                    />
                                </span>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-gradient scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </motion.a>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <a
                        href="/products"
                        className="btn-primary"
                    >
                        View All Products
                        <ArrowRight size={18} className="ml-2" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
