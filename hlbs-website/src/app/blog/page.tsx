"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
    Calendar,
    User,
    ArrowRight,
    Newspaper,
    Tag,
    TrendingUp,
} from "lucide-react";

const posts = [
    {
        title: "The Future of IT Manufacturing in India",
        date: "Feb 15, 2025",
        author: "Admin",
        category: "Industry",
        excerpt: "Exploring the growth of semi-conductor and hardware manufacturing under the Make in India initiative.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    },
    {
        title: "HLBS Launches New CMW-1000T Workstation Series",
        date: "Jan 28, 2025",
        author: "Product Team",
        category: "Product Launch",
        excerpt: "Our latest flagship workstation powered by Intel Core Ultra 9 is designed for high-end creative professionals.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    },
    {
        title: "Optimizing Your Computer Lab for Education",
        date: "Jan 10, 2025",
        author: "Education Expert",
        category: "Education",
        excerpt: "Best practices for setting up scalable and cost-effective IT infrastructure in schools and colleges.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    },
    {
        title: "HLBS Receives Prestigious Quality Excellence Award",
        date: "Dec 22, 2024",
        author: "News Desk",
        category: "News",
        excerpt: "Recognized for our commitment to manufacturing standards and customer satisfaction in 2024.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
    },
    {
        title: "Understanding Server Virtualization for Small Businesses",
        date: "Dec 05, 2024",
        author: "Tech Specialist",
        category: "Tech Guide",
        excerpt: "How our CMX series servers can help small enterprises consolidate their computing needs.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?w=800&q=80",
    },
    {
        title: "Why Desktop PCs are Still Relevant in 2025",
        date: "Nov 18, 2024",
        author: "Hardware Guru",
        category: "Industry",
        excerpt: "Comparing performance, lifespan, and repairability of desktops vs laptops for professional work.",
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80",
    },
];

export default function BlogPage() {
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
                        <p className="section-label">Media & News</p>
                        <h1 className="heading-xl text-white mb-4">
                            Insights & <span className="gradient-text">Updates</span>
                        </h1>
                        <p className="text-lg text-slate-light max-w-2xl mx-auto">
                            Follow HLBS Tech for the latest product announcements, industry
                            trends, and expert hardware guides.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="section-padding bg-offwhite">
                <div className="container-max">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <motion.article
                                key={post.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col h-full"
                            >
                                {/* Image Placeholder */}
                                <div className="h-56 bg-gray-200 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors z-10" />
                                    <div className="absolute inset-0 flex items-center justify-center text-slate">
                                        <Newspaper size={48} className="opacity-20" />
                                    </div>
                                    {/* Categor Badge */}
                                    <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/90 backdrop-blur rounded-full text-[10px] font-bold text-navy uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-xs text-slate mb-4">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={12} className="text-cyan" />
                                            {post.date}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <User size={12} className="text-cyan" />
                                            {post.author}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-cyan transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-slate leading-relaxed mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <button className="flex items-center gap-2 text-sm font-heading font-bold text-navy group-hover:text-cyan transition-colors">
                                            Read More
                                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="btn-secondary">
                            Load More Posts
                            <TrendingUp size={16} className="ml-2" />
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
