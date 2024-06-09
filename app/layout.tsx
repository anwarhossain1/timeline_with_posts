import siteData from "@/blog.config";
import Header from "@/components/header";
import Title from "@/components/title";
import { Separator } from "@/components/ui/separator";
import ProviderTheme from "@/provider/provider-theme";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: siteData.title,
  description: siteData.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"min-h-screen font-mono"}>
        <ProviderTheme>
          <Header />
          <Separator />
          <main className={"container md:my-12 my-8"}>
            <div
              className={
                "prose md:prose-lg min-w-full w-full dark:prose-invert"
              }
            >
              <Title />
              {children}
            </div>
          </main>
        </ProviderTheme>
      </body>
    </html>
  );
}
