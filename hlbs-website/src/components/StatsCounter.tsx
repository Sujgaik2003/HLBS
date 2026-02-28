"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Box, CheckCircle } from "lucide-react";

const stats = [
    {
        number: 20,
        suffix: "+",
        label: "Years of Excellence",
        icon: Award,
        color: "text-cyan",
        bgColor: "bg-cyan/10",
    },
    {
        number: 5000,
        suffix: "+",
        label: "Clients Nationwide",
        icon: Users,
        color: "text-saffron",
        bgColor: "bg-saffron/10",
    },
    {
        number: 50,
        suffix: "+",
        label: "Product Models",
        icon: Box,
        color: "text-cyan",
        bgColor: "bg-cyan/10",
    },
    {
        number: 100,
        suffix: "%",
        label: "Made in India",
        icon: CheckCircle,
        color: "text-saffron",
        bgColor: "bg-saffron/10",
    },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, target]);

    return (
        <span ref={ref} className="stat-number tabular-nums">
            {count.toLocaleString()}
            {suffix}
        </span>
    );
}

export default function StatsCounter() {
    return (
        <section className="section-padding bg-offwhite">
            <div className="container-max">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center p-6 lg:p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div
                                className={`w-14 h-14 ${stat.bgColor} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                            >
                                <stat.icon className={`${stat.color}`} size={28} />
                            </div>
                            <CountUp target={stat.number} suffix={stat.suffix} />
                            <p className="text-sm text-slate mt-2 font-medium">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
