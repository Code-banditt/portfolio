import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Anthony Ebube — Full Stack Software Engineer & UI/UX Architect",
  description:
    "Portfolio of Nwodo Anthony Ebube. Engineering high-performance web systems, real-time event platforms, and intuitive UX with Next.js, React, TypeScript, and Node.js.",
  keywords: [
    "Anthony Ebube",
    "Nwodo Anthony Ebube",
    "Full Stack Software Engineer",
    "Frontend Developer",
    "Next.js",
    "React",
    "Node.js",
    "Socket.io",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Nwodo Anthony Ebube" }],
  icons: {
    icon: "/showcase/anthony_normal.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.variable} ${geistMono.variable} font-sans antialiased min-h-screen selection:bg-black selection:text-white bg-[#D7D9DB] text-[#111111]`}
      >
        {children}
      </body>
    </html>
  );
}
