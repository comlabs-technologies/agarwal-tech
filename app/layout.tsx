import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agarwal Engineering Technologies",
  description:
    "Precision components, heavy mechanical spares and custom industrial machinery engineered in Kanpur since 1992.",
  icons: {
    icon: "/agarwal-logo.png",
    shortcut: "/agarwal-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="m-0 bg-[#f3f1eb] font-sans text-[#161918] antialiased">
        {children}
      </body>
    </html>
  );
}
