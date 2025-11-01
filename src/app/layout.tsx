import type { Metadata } from "next";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";
import "@/styles/animations.css";

export const metadata: Metadata = {
  title: "Ramji - Full Stack Developer Portfolio",
  description: "Portfolio of Ramji - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
  keywords: ["Ramji", "Full Stack Developer", "React", "Next.js", "Portfolio", "Web Developer"],
  authors: [{ name: "Ramji" }],
  creator: "Ramji",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ramji.dev",
    title: "Ramji - Full Stack Developer Portfolio",
    description: "Portfolio of Ramji - Full Stack Developer",
    siteName: "Ramji Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
