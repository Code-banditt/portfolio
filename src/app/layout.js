import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nwodo Anthony Portfolio",
  icons: {
    icon: "/img/portfolio.png", // must be in public folder
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#111]">{children}</body>
    </html>
  );
}
