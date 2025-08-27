import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Layout } from "@/base/layout";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const space_grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Admiral Studios",
  description: "by Ruslan Bondarenko",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={space_grotesk.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
