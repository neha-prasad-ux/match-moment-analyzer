import type { Metadata } from "next";
import { Urbanist, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Match Moment Analyzer",
  description:
    "AI-powered biomechanical analysis of MS Dhoni's match-winning innings in the 2011 ICC Cricket World Cup Final, using broadcast video as the sole data source.",
  metadataBase: new URL("https://match-analyzer.vercel.app"),
  openGraph: {
    title: "Match Moment Analyzer",
    description:
      "AI-powered biomechanical analysis of MS Dhoni's match-winning innings in the 2011 ICC Cricket World Cup Final.",
    url: "https://match-analyzer.vercel.app",
    siteName: "Match Moment Analyzer",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Match Moment Analyzer",
    description:
      "AI-powered biomechanical analysis of MS Dhoni's match-winning innings in the 2011 ICC Cricket World Cup Final.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
