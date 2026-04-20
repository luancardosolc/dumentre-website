import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dumentre — Arquitetos de Sistemas Autônomos",
  description:
    "Connecting the world that exists to the systems that should exist. Integrações, automações e sistemas autônomos para empresas que precisam escalar.",
  openGraph: {
    title: "Dumentre — Arquitetos de Sistemas Autônomos",
    description:
      "Connecting the world that exists to the systems that should exist.",
    url: "https://dumentre.com",
    siteName: "Dumentre",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
