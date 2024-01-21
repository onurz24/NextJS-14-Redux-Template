import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.scss";
import { StoreProvider } from "@/store/StoreProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
     <html lang="de">
      <body className={inter.className}>{children}</body>
    </html>
    </StoreProvider>
  );
}
