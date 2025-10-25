import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jaideep",
  description:
    "Portfolio of Jaideep Jambhale - Software Engineer at Netcore Cloud, specializing in full-stack development, analytics, and cloud technologies.",
  keywords: [
    "Jaideep Jambhale",
    "Software Engineer",
    "Full Stack Developer",
    "Netcore Cloud",
    "React",
    "Next.js",
    "Python",
    "Java",
    "Spring Boot",
    "Go",
  ],
  authors: [{ name: "Jaideep Jambhale" }],
  creator: "Jaideep Jambhale",
  publisher: "Jaideep Jambhale",
  openGraph: {
    title: "Jaideep Jambhale - Software Engineer",
    description: "Software Engineer specializing in full-stack development and cloud technologies",
    type: "website",
    locale: "en_US",
    siteName: "Jaideep Jambhale Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jaideep Jambhale - Software Engineer",
    description: "Software Engineer specializing in full-stack development and cloud technologies",
    creator: "@JaideepJambhale",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

