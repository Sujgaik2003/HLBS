import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HLBS Tech (P) Ltd. | Technologies for Tomorrow | Made in India IT Hardware",
  description:
    "HLBS Tech manufactures world-class Workstations, Desktops, All-in-One PCs, Mini PCs, KIOSK, and Servers. Made in India IT hardware solutions since 2004. Serving 5000+ clients nationwide.",
  keywords:
    "HLBS Tech, workstation, desktop, AIO PC, mini PC, KIOSK, server, Made in India, IT hardware, Bhopal, computer manufacturer",
  openGraph: {
    title: "HLBS Tech (P) Ltd. | Technologies for Tomorrow",
    description:
      "Made in India IT Hardware Solutions Since 2004. Workstations, Desktops, AIO PCs, Mini PCs, KIOSK & Servers.",
    url: "https://hlbstech.com",
    siteName: "HLBS Tech",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
