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
    "Myself Akshay Ravikant, and this is my portfolio & tech blog. This features my recent projects, certifications and basic info for potential clients and employers. Explore my latest tech and AI blogs for industry updates and newly launched SaaS apps.",
  keywords: ["Akshay Ravikant", "mvp for startups", "saas development", "ai agents development", "tech blog", "portfolio"],
  authors: [{ name: "Akshay Ravikant", url: "https://akshay.ing" }],
  creator: "Akshay Ravikant",
  publisher: "Akshay Ravikant",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://akshay.ing",
    languages: {
      'en-US': 'https://akshay.ing',
    },
  },
  openGraph: {
    title: "Akshay Ravikant | Portfolio & Tech Blog",
    description:
      "Myself Akshay Ravikant, and this is my portfolio & tech blog. Along with latest updates in the tech industry, this also features my recent projects, and basic info for potential clients and employers.",
    url: "https://akshay.ing",
    siteName: "Akshay Ravikant",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://akshay.ing/og-image.png",
        width: 1200,
        height: 630,
        alt: "Akshay Ravikant Portfolio & Tech Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akshay Ravikant | Portfolio & Tech Blog",
    description:
      "Myself Akshay Ravikant, and this is my portfolio & tech blog. Along with latest updates in the tech industry, this also features my recent projects, and basic info for potential clients and employers.",
    creator: "@akshayravikant",
    images: ["https://akshay.ing/og-image.png"],
    site: "@akshayravikant",
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
  category: "technology",
  metadataBase: new URL('https://akshay.ing'),
  // verification: {
  //   google: "verification_token", // Replace with your verification token if you have one
  // },
}

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
