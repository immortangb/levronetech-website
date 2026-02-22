import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Levrone Technologies | Professional IT Services in Bloemfontein",
  description: "Professional laptop repairs, sales, and IT support services in Bloemfontein. Fast, reliable, and affordable technology solutions for homes and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
