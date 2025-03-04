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
  title: "Manamana Nihongo | Japanese Language School",
  description:
    "Learn Japanese with Joaquim & Eevee 先生. Get conversational in Japanese in just 6 months with only 1 hour per day. Based in Nara, Japan.",
  keywords:
    "japanese language, learn japanese, japanese teacher, nara japan, manamana, nihongo, kana, hiragana, katakana, online japanese lessons",
  openGraph: {
    title: "Manamana Nihongo | Japanese Language School",
    description:
      "Learn Japanese with Joaquim & Eevee 先生. Get conversational in just 6 months with 1h/day.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manamana Nihongo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manamana Nihongo | Japanese Language School",
    description:
      "Learn Japanese with Joaquim & Eevee 先生. Get conversational in just 6 months with 1h/day.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      // { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      // { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    // apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
