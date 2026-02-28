// ─── PRODUCT DATA ───────────────────────────────────────────────────────────
export interface ProductVariant {
    id: string;
    name: string;
    processor: string;
    chipset: string;
    graphics: string;
    os: string;
    memory: string;
    storage: string;
    display: string;
    connectivity?: string;
    power?: string;
    model: string;
    expansion?: string;
    network?: string;
    security?: string;
    warranty?: string;
    io?: string;
    pdfUrl?: string;
}

export interface Product {
    slug: string;
    category: string;
    categorySlug: string;
    name: string;
    tagline: string;
    description: string;
    features: string[];
    variants: ProductVariant[];
    badge?: string;
}

export const products: Product[] = [
    {
        slug: "workstation-cmw1000t",
        category: "Workstations",
        categorySlug: "workstations",
        name: "HLBS CMW-1000T",
        tagline: "High-Performance Workstation",
        description:
            "The CMW-1000T series delivers uncompromising performance for professionals in engineering, design, scientific computing, and content creation. Powered by Intel's latest processors and NVIDIA professional graphics.",
        features: [
            "Enormous vision: Wide range of LCD/LED/TFT Monitors",
            "Input on smirk: Extensive range of stylish wired and wireless peripherals",
            "Genuine Windows: Licensed and supported by Microsoft",
            "World class care: Widespread support across India",
        ],
        badge: "Best Seller",
        variants: [
            {
                id: "ultra9-285k",
                name: "Intel Core Ultra 9 285K Edition",
                processor: "Intel Core Ultra 9 285K, 24 Cores, 3.2 GHz Base, 36MB Cache",
                chipset: "Intel W880",
                graphics: "NVIDIA RTX 2000 Ada 16GB",
                os: "Genuine Windows 11 Professional",
                memory: "128GB (4x32GB) DDR5 5600 MT/s Non ECC",
                storage: "1x 1TB M.2 NVMe SSD",
                display: '27" FHD (1920x1080) Non TCO Monitor',
                connectivity: "Intel AX211 Wi-Fi 6 + Bluetooth 5.3",
                power: "450W + 92% Efficiency",
                model: "CMW1000T",
                pdfUrl: "/pdfs/Workstation_CMW1000T_Ultra9_285K.pdf",
            },
            {
                id: "i7-14700",
                name: "Intel Core i7-14700 Edition",
                processor: "Intel Core i7-14700, 20 Cores, 2.1 GHz Base, 5.4 GHz Turbo, 33MB Cache",
                chipset: "Intel Q670",
                graphics: "NVIDIA RTX A400 4GB",
                os: "Windows 11 Professional",
                memory: "16GB (1x16GB) DDR5 4800 Non ECC UDIMM",
                storage: "1x 1TB M.2 NVMe SSD",
                display: '23.8" FHD (1920x1080) TCO Monitor',
                connectivity: "Intel AX211 Wi-Fi 6E + Bluetooth 5.3",
                power: "500W + 90% Efficiency",
                model: "CMW1000T",
                pdfUrl: "/pdfs/Workstation_CMW1000T_i7_14700.pdf",
            },
            {
                id: "i9-14900k",
                name: "Intel Core i9-14900K Edition",
                processor: "Intel Core i9-14900K",
                chipset: "Intel Q670",
                graphics: "NVIDIA RTX A400 4GB",
                os: "Windows 11 Professional",
                memory: "1x32GB DDR5 4400 MHz Non ECC",
                storage: "1x512GB M.2 NVMe SSD",
                display: '23.8" FHD (1920x1080)',
                power: "500W + 90% Efficiency",
                model: "CMW1000T",
            },
            {
                id: "xeon-gold-6248",
                name: "Intel Xeon Gold 6248 Edition",
                processor: "Intel Xeon Gold 6248",
                chipset: "Intel C621 single socket",
                graphics: "NVIDIA RTX A1000 8GB",
                os: "Ubuntu Linux",
                memory: "1x64GB DDR4 2666 MHz ECC",
                storage: "1x1TB NVMe SSD + 1x1TB SATA HDD",
                display: '23.8" FHD (1920x1080)',
                power: "500W + 80% Efficiency",
                model: "CMW1000T",
            },
            {
                id: "i9-14900k-highend",
                name: "Intel Core i9-14900K High-End Edition",
                processor: "Intel Core i9 14900K",
                chipset: "Intel W680",
                graphics: "NVIDIA RTX 2000 16GB",
                os: "Windows 11 Professional",
                memory: "1x32GB DDR5 5600 MHz Non ECC",
                storage: "2x 1TB PCIe NVMe M.2 SSD",
                display: '27" FHD (1920x1080)',
                connectivity: "Wi-Fi 6 (802.11ax) + Bluetooth 5.2",
                power: "700W + 92% Efficiency",
                model: "CMW1000T",
            },
            {
                id: "xeon-w9-3475x",
                name: "Intel Xeon W9-3475X Ultimate Edition",
                processor: "Intel Xeon W9-3475X, 36 Cores, 2.2 GHz Base, 4.8 GHz Turbo, 82.5MB Cache",
                chipset: "Intel W790",
                graphics: "NVIDIA RTX 4500 Ada Generation 24GB",
                os: "Windows 11 Professional",
                memory: "512GB (8x64GB) DDR5 4800 MHz ECC (up to 1TB)",
                storage: "2x1TB NVMe M.2 SSD + 2x2TB 7200RPM SATA",
                display: '27" QHD (2560x1440) IPS Height Adjustable',
                expansion: "1x PCIe x4 Gen4, 3x PCIe x16 Gen4, 1x PCIe x8 Gen4",
                network: "1x 10GbE + 1x Gigabit",
                power: "1125W 90% Efficiency",
                security: "TPM 2.0",
                model: "CMW1000T",
                pdfUrl: "/pdfs/Workstation_CMW1000T_Xeon_W9_3475X.pdf",
            },
            {
                id: "xeon-w3-2435",
                name: "Intel Xeon W3-2435 Edition",
                processor: "Intel Xeon W3-2435, 8 Cores, 3.1 GHz Base, 4.5 GHz Turbo",
                chipset: "Intel W790",
                graphics: "NVIDIA RTX A series 8GB",
                os: "Windows 11 Professional",
                memory: "64GB DDR5 ECC RAM",
                storage: "2x 2TB SSD",
                display: '58-61cm LED 1920x1080',
                security: "TPM 2.0, SATA disablement, USB enable/disable",
                network: "Dual gigabit NIC 10/100/1000",
                warranty: "3 Years",
                model: "CMW1000T",
                pdfUrl: "/pdfs/Workstation_Xeon_W3_2435.pdf",
            },
            {
                id: "i9-13900",
                name: "Intel Core i9-13900 Edition",
                processor: "Intel Core i9-13900, 24 Cores, 2 GHz Base",
                chipset: "Intel W680",
                graphics: "NVIDIA T1000 8GB",
                os: "Windows 11 Professional",
                memory: "64GB DDR5 4800 MHz Non ECC (up to 128GB)",
                storage: "1TB SSD",
                display: '60-71cm Non Touch 1920x1080',
                expansion: "PCIe x1-1, PCIe x4-2",
                network: "Single Gigabit NIC 10/100/1000",
                io: "4x USB C, 1x HDMI, 1x Mini DP, 1x DP",
                warranty: "3 Years",
                model: "CMW1000T",
                pdfUrl: "/pdfs/Workstation_Core_i9_13900.pdf",
            },
        ],
    },
    {
        slug: "desktop-cm44",
        category: "Desktops",
        categorySlug: "desktops",
        name: "HLBS CM44",
        tagline: "Business-Class Desktop",
        description:
            "The CM44 series delivers reliable, efficient, and affordable desktop computing for businesses, educational institutions, and government offices across India.",
        features: [
            "Wide range LCD/LED/TFT Monitor for gargantuan output",
            "Extensive range of stylish wired and wireless peripherals",
            "Genuine Windows Software",
            "Widespread support covering all locations in India",
        ],
        variants: [
            {
                id: "cm44-standard",
                name: "CM44 Standard Configuration",
                processor: "Intel Core Processor",
                chipset: "Intel Chipset",
                graphics: "Integrated Intel Graphics",
                os: "Windows 11 Professional",
                memory: "8GB/16GB DDR4",
                storage: "512GB/1TB SSD",
                display: '23.8" FHD Monitor',
                warranty: "3 Years on-site OEM",
                model: "CM44",
                pdfUrl: "/pdfs/Desktop_CM44_Technical_Specs.pdf",
            },
        ],
    },
    {
        slug: "aio-n24",
        category: "All-in-One PCs",
        categorySlug: "aio",
        name: "HLBS N24",
        tagline: "Space-Saving All-in-One",
        description:
            "The N24 series combines elegant design with powerful performance in a space-saving 23.8-inch all-in-one form factor. Perfect for modern offices, reception areas, and creative workstations.",
        badge: "New",
        features: [
            "23.8\" Non-Touch IPS Full HD Display",
            "Built-in FHD Webcam and Stereo Speakers",
            "Height Adjustable Stand",
            "Wi-Fi 6 + Bluetooth Connectivity",
        ],
        variants: [
            {
                id: "i5-13500",
                name: "Intel Core i5-13500 Edition",
                processor: "Intel Core i5-13500, 14 Cores, 2.5 GHz Base, 24MB Cache",
                chipset: "Intel Q670",
                graphics: "Integrated Intel UHD",
                os: "Windows 11 Professional",
                memory: "16GB DDR4 2666 MHz (Expandable to 64GB)",
                storage: "1x 1024GB SSD",
                display: '23.8" Non-Touch IPS 1920x1080',
                connectivity: "Wi-Fi 6 AX200 + Bluetooth 5.0",
                network: "Intel 10/100/1000 vPRO",
                io: "2x USB 2.0, 2x USB 3.1 Gen1, 3x USB 3.1 Gen2, 1x USB-C, 1x HDMI, 1x DP",
                power: "200W 85-90% Efficiency",
                model: "N24",
                pdfUrl: "/pdfs/AIO_N24_Core_i5_13500.pdf",
            },
            {
                id: "i7-14700",
                name: "Intel Core i7-14700 (14th Gen) Edition",
                processor: "Intel Core i7-14700 (14th Gen)",
                chipset: "Intel Q670",
                graphics: "Integrated Intel UHD Graphics 770",
                os: "Windows 11 Professional",
                memory: "32GB DDR5 4800 MHz (up to 64GB)",
                storage: "1024GB NVMe SSD",
                display: '23.8" Non-Touch Full HD LED',
                connectivity: "Wi-Fi 6 (802.11ax) + Bluetooth 5.3",
                network: "10/100/1000 Gigabit",
                io: "1x HDMI, 1x DP, 2x USB 2.0, 1x USB 3.1 Gen2 Type-A, 1x USB 3.1 Gen1 Type-C",
                power: "External 150W",
                model: "N24",
                pdfUrl: "/pdfs/AIO_N24_Core_i7_14700.pdf",
            },
        ],
    },
    {
        slug: "minipc-daksh",
        category: "Mini PCs",
        categorySlug: "minipc",
        name: "Daksh Mini-PC",
        tagline: "Compact Yet Powerful",
        description:
            "The Daksh Mini-PC combines modern, sleek design with full desktop power in an ultra-compact form factor. Available in a range of colors to match any workspace aesthetic.",
        features: [
            "Modern design and sleek CPU",
            "Range of colors available",
            "Wide range of LCD/LED/TFT Monitors",
            "Genuine Windows Software",
        ],
        variants: [
            {
                id: "daksh-standard",
                name: "Daksh Standard Edition",
                processor: "Intel Core Processor",
                chipset: "Intel Chipset",
                graphics: "Integrated Intel Graphics",
                os: "Windows 11 Professional",
                memory: "8GB/16GB DDR4",
                storage: "256GB/512GB SSD",
                display: "Compatible with any monitor",
                model: "Daksh",
            },
        ],
    },
    {
        slug: "kiosk-infok",
        category: "KIOSK",
        categorySlug: "kiosk",
        name: "INFOK Information Kiosk",
        tagline: "Touch Screen Self-Service",
        description:
            "The INFOK Information Kiosk provides touch screen self-service solutions for banks, hospitals, government offices, and retail spaces. Built for 24/7 operation with industrial-grade reliability.",
        features: [
            "Touch Screen Self-Service",
            "Wide range of monitor options",
            "Complete peripheral support",
            "All India support network",
        ],
        variants: [
            {
                id: "infok-standard",
                name: "INFOK Standard Configuration",
                processor: "Intel Core Processor",
                chipset: "Intel Chipset",
                graphics: "Integrated Intel Graphics",
                os: "Windows 11 Professional",
                memory: "8GB/16GB DDR4",
                storage: "256GB/512GB SSD",
                display: "Touch Screen Display",
                model: "INFOK",
            },
        ],
    },
    {
        slug: "server-cmx2000t",
        category: "Servers",
        categorySlug: "servers",
        name: "HLBS CMX2000T",
        tagline: "Enterprise Tower Server",
        description:
            "The CMX2000T is an enterprise-grade tower server powered by Intel Xeon Gold processors, designed for small-to-medium businesses, data centers, and departmental computing needs.",
        badge: "Enterprise",
        features: [
            "Intel Xeon Gold Processor",
            "Hyper-V Certified",
            "Remote Management",
            "Secure Boot at Firmware Level",
        ],
        variants: [
            {
                id: "xeon-gold",
                name: "Intel Xeon Gold 6248 Server",
                processor: "Intel Xeon Gold 6248",
                chipset: "Intel C Series",
                graphics: "VGA or above resolution support",
                os: "Windows Server 2022",
                memory: "64GB DDR4 ECC, 8 DIMM slots",
                storage: "2x 960GB NVMe SSD",
                display: "VGA compatible",
                expansion: "1x PCIe x4, 1x PCIe x16",
                network: "1x 1G LAN",
                io: "2x USB 2.0, 2x USB 3.0",
                security: "Secure Boot (Firmware and BIOS Level)",
                model: "CMX2000T",
                pdfUrl: "/pdfs/Server_CMX2000T_Xeon_Gold.pdf",
            },
        ],
    },
];

// ─── CERTIFICATIONS ─────────────────────────────────────────────────────────
export const certifications = {
    quality: [
        { name: "ISO 9001:2015", desc: "Quality Management Systems" },
        { name: "ISO 14001:2015", desc: "Environmental Management Systems" },
        { name: "ISO 27001:2013", desc: "Information Security Management" },
        { name: "ISO 50001:2011", desc: "Energy Management Systems" },
        { name: "ISO 45001:2018", desc: "Occupational Health & Safety" },
        { name: "ISO 20000:1", desc: "IT Service Management" },
        { name: "SA 8000", desc: "Social Accountability" },
    ],
    product: [
        { name: "CE", desc: "European Conformity" },
        { name: "FCC", desc: "Federal Communications Commission" },
        { name: "RoHS", desc: "Restriction of Hazardous Substances" },
        { name: "BIS", desc: "Bureau of Indian Standards" },
        { name: "EPR", desc: "Extended Producer Responsibility" },
        { name: "ZED", desc: "Zero Defect Zero Effect" },
    ],
    registrations: [
        { name: "Make in India", desc: "Registered Manufacturer" },
        { name: "MSME", desc: "Registered Enterprise" },
        { name: "GST", desc: "23AABCH5020R1ZL" },
    ],
};

// ─── SOLUTIONS ──────────────────────────────────────────────────────────────
export const solutions = [
    {
        id: "education",
        name: "Education",
        headline: "Smart Classrooms & Computer Labs",
        description: "Empowering the next generation with interactive teaching systems, smart classrooms, and dedicated computer lab solutions built for schools and universities across India.",
        solutions: ["Smart Classroom Solutions", "Interactive Teaching Systems", "Computer Lab Infrastructure", "Digital Libraries"],
        products: ["Desktop CM44", "AIO N24", "Mini PC Daksh"],
    },
    {
        id: "government",
        name: "Government & PSUs",
        headline: "E-Governance & Digital India",
        description: "Supporting India's digital transformation with secure, reliable computing for government departments, PSUs, and public service centers.",
        solutions: ["E-Governance Kiosks", "Departmental Computing", "Public Service Centers", "Citizen Service Points"],
        products: ["KIOSK INFOK", "Workstation CMW-1000T", "Desktop CM44"],
    },
    {
        id: "healthcare",
        name: "Healthcare",
        headline: "Hospital Information Systems",
        description: "Reliable computing for hospitals, diagnostic centers, and healthcare facilities. From patient self-service kiosks to back-end data processing workstations.",
        solutions: ["Hospital Information Systems", "Diagnostic Equipment Integration", "Patient Self-Service Kiosks", "Medical Data Processing"],
        products: ["AIO N24", "KIOSK INFOK", "Workstation CMW-1000T"],
    },
    {
        id: "banking",
        name: "Banking & Finance",
        headline: "Branch Automation Solutions",
        description: "Streamline banking operations with secure desktops, customer service kiosks, and robust server solutions for the financial sector.",
        solutions: ["Branch Automation", "Customer Service Kiosks", "Secure Workstations", "Back-office Computing"],
        products: ["Desktop CM44", "KIOSK INFOK", "Server CMX2000T"],
    },
    {
        id: "defense",
        name: "Defense",
        headline: "Secure Computing Solutions",
        description: "High-security, ruggedized computing systems built to meet the stringent requirements of India's defense and security sectors.",
        solutions: ["Secure Computing", "Custom Hardware", "Ruggedized Systems", "Mission-Critical Computing"],
        products: ["Workstation CMW-1000T", "Server CMX2000T"],
    },
];

// ─── DOWNLOADS ──────────────────────────────────────────────────────────────
export const downloads = [
    { name: "Workstation CMW1000T - Core i7-14700", file: "/pdfs/Workstation_CMW1000T_i7_14700.pdf", category: "Workstation" },
    { name: "Workstation CMW1000T - Core Ultra 9 285K", file: "/pdfs/Workstation_CMW1000T_Ultra9_285K.pdf", category: "Workstation" },
    { name: "Workstation CMW1000T - Xeon W9-3475X", file: "/pdfs/Workstation_CMW1000T_Xeon_W9_3475X.pdf", category: "Workstation" },
    { name: "Workstation - Xeon W3-2435", file: "/pdfs/Workstation_Xeon_W3_2435.pdf", category: "Workstation" },
    { name: "Workstation - Core i9-13900", file: "/pdfs/Workstation_Core_i9_13900.pdf", category: "Workstation" },
    { name: "Workstation Datasheet Template", file: "/pdfs/Workstation_Datasheet_Template.pdf", category: "Workstation" },
    { name: "Server CMX2000T - Xeon Gold", file: "/pdfs/Server_CMX2000T_Xeon_Gold.pdf", category: "Server" },
    { name: "Desktop CM44 - Technical Specs", file: "/pdfs/Desktop_CM44_Technical_Specs.pdf", category: "Desktop" },
    { name: "AIO N24 - Core i5-13500", file: "/pdfs/AIO_N24_Core_i5_13500.pdf", category: "AIO" },
    { name: "AIO N24 - Core i7-14700", file: "/pdfs/AIO_N24_Core_i7_14700.pdf", category: "AIO" },
];

// ─── TEAM ───────────────────────────────────────────────────────────────────
export const team = [
    { name: "Nitin Sahu", role: "Sales Manager", phone: "+91-8889933112", email: "sales5@hlbstech.com" },
    { name: "Rashmi Dhote", role: "General Manager", phone: "+91-9826527444", email: "rashmi@hlbstech.com" },
];
