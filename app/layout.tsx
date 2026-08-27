import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agarwal Engineering Technologies Pvt Ltd",
  description:
    "ISO 9001:2015 certified engineering and manufacturing facility specializing in precision components, heavy mechanical spares, and custom industrial equipment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
