import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Vrije Basisschool Sint-Maarten | Sijsele",
    template: "%s | Sint-Maarten",
  },
  description: "Een muzische, groene en eigentijdse leerschool waar elk kind zich thuis voelt en kan groeien naar zijn volle potentieel.",
  keywords: ["basisschool", "Sijsele", "Damme", "onderwijs", "kleuter", "lager", "vrije basisschool"],
  authors: [{ name: "Vrije Basisschool Sint-Maarten" }],
  openGraph: {
    type: "website",
    locale: "nl_BE",
    siteName: "Vrije Basisschool Sint-Maarten",
    title: "Vrije Basisschool Sint-Maarten Sijsele",
    description: "Een muzische, groene en eigentijdse leerschool waar elk kind zich thuis voelt.",
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
    <html lang="nl" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
