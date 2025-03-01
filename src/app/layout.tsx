import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ThemeProvider } from "next-themes";
import Connect from '@/app/components/sections/Connect';
import { getPortfolioData } from '@/lib/getPortfolioData';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Akshay Ravikant | Portfolio & Tech Blog",
    template: "%s | Akshay Ravikant", // For dynamic page titles
  },
  description:
    "Akshay Ravikant’s portfolio hub showcasing MVP for startups, SaaS development, and AI agents development projects. Explore my latest tech and AI blogs for industry updates and new apps.",
  keywords: ["Akshay Ravikant", "mvp for startups", "saas development", "ai agents development", "tech blog", "portfolio"],
  authors: [{ name: "Akshay Ravikant" }],
  openGraph: {
    title: "Akshay Ravikant | Portfolio & Tech Blog",
    description:
      "Discover Akshay Ravikant’s projects in MVP for startups, SaaS, and AI agents development, plus tech blogs on industry updates.",
    url: "https://akshay.ing",
    siteName: "Akshay Ravikant",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Ravikant | Portfolio & Tech Blog",
    description:
      "Portfolio of Akshay Ravikant featuring MVP for startups, SaaS, and AI agents development, with tech and AI blogs.",
    creator: "@akshayravikant",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const data = await getPortfolioData();
  //const aboutMe = data.aboutMe;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-white antialiased dark:bg-zinc-950 transition-all duration-300`}
      >
        <div className="wrapper flex flex-col gap-4 mx-auto w-full max-w-screen-sm flex-1 px-4 pt-12">
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <Header />
          {children}
          <Connect aboutMe={data.aboutMe} />
          <Footer />
        </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
