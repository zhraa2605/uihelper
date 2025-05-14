import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "@/app/components/Header";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], 
  display: "swap",
});

export const metadata = {
  title: "Kitstack - Build Better UI Faster",
  description:
    "Kitstack is your go-to resource for UI tools, libraries, and inspiration. Perfect for developers who want to design smarter, not harder.",
  keywords:
    "UI tools, UI libraries, frontend design, Tailwind CSS, React components, color palettes, icons, animations, logo makers",
  author: "Kitstack Team",
  url: "https://Kitstack.dev",
  image: "https://Kitstack.dev/images/og-image.png",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" theme="light">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.image} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadata.url} />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content={metadata.image} />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className={`${inter.className} antialiased scroll-smooth`} 
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
