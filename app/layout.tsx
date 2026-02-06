import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL('https://ngodingyuk.com'), // Replace with actual domain
  title: {
    default: "NgodingYuk - Platform Belajar Coding Interaktif",
    template: "%s | NgodingYuk"
  },
  description: "Tingkatkan skill coding Anda dengan kurikulum terstruktur, studi kasus dunia nyata, dan mentor ahli. Mulai perjalanan karir IT Anda di sini.",
  keywords: ["belajar coding", "kursus pemrograman", "html", "javascript", "react", "nextjs", "web development", "ngodingyuk"],
  authors: [{ name: "NgodingYuk Team" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ngodingyuk.com",
    title: "NgodingYuk - Platform Belajar Coding Interaktif",
    description: "Belajar coding lebih mudah dan menyenangkan. Gabung dengan ribuan siswa lainnya.",
    siteName: "NgodingYuk",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in public folder or remove if not
        width: 1200,
        height: 630,
        alt: "NgodingYuk Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NgodingYuk - Platform Belajar Coding Interaktif",
    description: "Belajar coding lebih mudah dan menyenangkan.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

import { AuthProvider } from "@/context/AuthContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="id" className="scroll-smooth">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <AuthProvider>
            {children}
          </AuthProvider>
        </body>
      </html>
  );
}