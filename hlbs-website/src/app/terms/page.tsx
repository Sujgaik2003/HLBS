import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
    return (
        <main>
            <Navbar />

            <section className="bg-hero-gradient py-20 relative">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="heading-xl text-white mb-4">Terms & Conditions</h1>
                    <p className="text-slate-light">Effective Date: February 2025</p>
                </div>
            </section>

            <section className="section-padding bg-offwhite">
                <div className="container-max max-w-3xl">
                    <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-sm prose prose-sm prose-navy max-w-none">
                        <h2 className="heading-md text-navy mb-4">1. Acceptance of Terms</h2>
                        <p className="text-body mb-6">
                            By accessing and using this website, you agree to comply with and be bound
                            by these Terms and Conditions. If you do not agree, please do not use this
                            website. HLBS Tech (P) Ltd. reserves the right to modify these terms at any
                            time without prior notice.
                        </p>

                        <h2 className="heading-md text-navy mb-4">2. Use of Information</h2>
                        <p className="text-body mb-6">
                            All content provided on this website, including product descriptions,
                            specifications, and technical datasheets, is for informational purposes.
                            While we strive for accuracy, HLBS Tech does not warrant that the content
                            is error-free.
                        </p>

                        <h2 className="heading-md text-navy mb-4">3. Intellectual Property</h2>
                        <p className="text-body mb-6">
                            All materials on this website, including logos, trademarks, and text, are the
                            property of HLBS Tech (P) Ltd. and are protected by applicable intellectual
                            property laws. Unauthorized use of these materials is strictly prohibited.
                        </p>

                        <h2 className="heading-md text-navy mb-4">4. Product Orders & Quotes</h2>
                        <p className="text-body mb-6">
                            Requests for quotes or information submitted through our forms do not
                            constitute a binding contract. Prices and configurations are subject
                            to change based on market conditions and specific requirements.
                        </p>

                        <h2 className="heading-md text-navy mb-4">5. Warranty Policy</h2>
                        <p className="text-body mb-6">
                            HLBS products are covered under a standard 3-year on-site OEM warranty.
                            Specific warranty terms vary by product and will be provided at the
                            time of purchase. Warranty does not cover accidental damage or software issues.
                        </p>

                        <h2 className="heading-md text-navy mb-4">6. Limitation of Liability</h2>
                        <p className="text-body mb-6">
                            HLBS Tech shall not be liable for any direct, indirect, or consequential
                            damages arising from the use of this website or reliance on any information
                            provided herein.
                        </p>

                        <h2 className="heading-md text-navy mb-4">7. Governing Law</h2>
                        <p className="text-body mb-6">
                            These terms are governed by the laws of India. Any disputes arising
                            from the use of this website shall be subject to the exclusive
                            jurisdiction of the courts in Bhopal, Madhya Pradesh.
                        </p>

                        <h2 className="heading-md text-navy mb-4">8. Contact Us</h2>
                        <p className="text-body mb-2">
                            If you have any questions about these Terms, please contact us at:
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
