import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="cache-control" content="no-store"></meta>
        <link rel="favorite icon" href="/encu.webp"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
