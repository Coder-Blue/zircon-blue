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
  description:
    "Trang lưu trữ đám mây nhanh, gọn và thiết kế với công nghệ NextJS 15 mới bởi Noah Trần",
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
