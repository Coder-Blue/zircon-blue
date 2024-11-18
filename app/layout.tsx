import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["vietnamese"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Zircon Blue",
    default: "Zircon Blue",
  },
  applicationName: `${process.env.NEXT_PUBLIC_SITENAME}`,
  description: `${process.env.NEXT_PUBLIC_DESCRIPTION}`,
  creator: `${process.env.NEXT_PUBLIC_AUTHOR}`,
  authors: [
    {
      name: `${process.env.NEXT_PUBLIC_AUTHOR}`,
      url: `${process.env.NEXT_PUBLIC_GITHUB_AUTHOR}`,
    },
  ],
  generator: "zircon-blue",
  keywords: [
    "Cloud Storage",
    "Lưu trữ đám mây",
    "cloud",
    "zircon",
    "zircon-blue",
    "next15",
    "react19",
    "javascript",
    "appwrite",
  ],
  icons: {
    icon: "favicon.ico",
    shortcut: "/favicon/favicon-16x16.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: `${process.env.NEXT_PUBLIC_URL}`,
    description: `${process.env.NEXT_PUBLIC_DESCRIPTION}`,
    title: `${process.env.NEXT_PUBLIC_SITENAME}`,
    siteName: `${process.env.NEXT_PUBLIC_SITENAME}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_OG_URL}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${process.env.NEXT_PUBLIC_SITENAME}`,
    description: `${process.env.NEXT_PUBLIC_DESCRIPTION}`,
    creator: `${process.env.NEXT_PUBLIC_TWITTER_CREATOR}`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_OG_URL}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
