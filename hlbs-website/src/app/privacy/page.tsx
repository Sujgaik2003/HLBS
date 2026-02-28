import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
    return (
        <main>
            <Navbar />

            <section className="bg-hero-gradient py-20 relative">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="heading-xl text-white mb-4">Privacy Policy</h1>
                    <p className="text-slate-light">Last updated: February 2025</p>
                </div>
            </section>

            <section className="section-padding bg-offwhite">
                <div className="container-max max-w-3xl">
                    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm prose prose-sm prose-navy max-w-none">
                        <h2 className="heading-md text-navy mb-4">1. Information We Collect</h2>
                        <p className="text-body mb-6">
                            When you visit our website or contact us, we may collect personal information
                            including your name, email address, phone number, company name, and product
                            interest. This information is collected when you fill out forms, subscribe to
                            newsletters, or contact our sales team.
                        </p>

                        <h2 className="heading-md text-navy mb-4">2. How We Use Your Information</h2>
                        <p className="text-body mb-6">
                            We use collected information to: respond to your inquiries, provide product
                            information and quotes, improve our products and services, send relevant
                            communications about HLBS products, and comply with legal obligations.
                        </p>

                        <h2 className="heading-md text-navy mb-4">3. Data Protection</h2>
                        <p className="text-body mb-6">
                            HLBS Tech is committed to protecting your personal data. We implement
                            appropriate technical and organizational measures to secure your information
                            against unauthorized access, alteration, disclosure, or destruction.
                        </p>

                        <h2 className="heading-md text-navy mb-4">4. Cookies</h2>
                        <p className="text-body mb-6">
                            Our website may use cookies to enhance your browsing experience. You can
                            control cookie settings through your browser preferences. Essential cookies
                            are required for the website to function properly.
                        </p>

                        <h2 className="heading-md text-navy mb-4">5. Third-Party Services</h2>
                        <p className="text-body mb-6">
                            We may use third-party services for analytics, maps, and communication
                            tools. These services have their own privacy policies and we encourage
                            you to review them.
                        </p>

                        <h2 className="heading-md text-navy mb-4">6. Your Rights</h2>
                        <p className="text-body mb-6">
                            You have the right to access, correct, or delete your personal data.
                            To exercise these rights, contact us at sales@hlbstech.com or call
                            our toll-free number 1800 270 1244.
                        </p>

                        <h2 className="heading-md text-navy mb-4">7. Contact Information</h2>
                        <p className="text-body mb-2">
                            For privacy-related inquiries, please contact:
                        </p>
                        <div className="bg-gray-50 rounded-xl p-4 text-sm text-slate">
                            <p><strong className="text-navy">HLBS Tech (P) Ltd.</strong></p>
                            <p>243-B, Zone I, MP Nagar, Bhopal (M.P.) - 462011</p>
                            <p>Email: sales@hlbstech.com</p>
                            <p>Phone: 0755-4082900</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
