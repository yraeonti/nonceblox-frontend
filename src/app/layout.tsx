import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";
import Provider from "@/components/ui/provider";
import AppLayout from "@/components/app-layout";

const LatoFont = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});
export const metadata: Metadata = {
  title: "NonceBlox",
  description: "Frontend Interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${LatoFont.className}`}>
        <Provider>
          <AppLayout>{children}</AppLayout>
        </Provider>
      </body>
    </html>
  );
}
