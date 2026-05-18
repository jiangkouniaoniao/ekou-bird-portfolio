import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Ekou Bird's Workshop / 江口鸟鸟工坊",
  description:
    "江口鸟鸟工坊：机械日常、角色、载具、场景与小型世界观作品集。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
