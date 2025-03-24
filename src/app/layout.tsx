import type { Metadata } from "next";
// import "./globals.css";

export const metadata: Metadata = {
  title: "Excalibur Nextjs Template",
  description: "A Excalibur.js Next.js project template.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}