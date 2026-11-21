import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zentrok",
  description: "Creative Digital Marketing Agency",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  metadataBase: new URL("https://www.zentrok.com"),
  openGraph: {
    title: "Zentrok",
    description: "Creative Digital Marketing Agency",
    url: "https://www.zentrok.com",
    siteName: "Zentrok",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zentrok - Creative Digital Marketing Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zentrok",
    description: "Creative Digital Marketing Agency",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
