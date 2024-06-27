import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getGlobalData, getGlobalPageMetadata } from "@/data/loaders";
import { Header } from "@/components/custom/Header";
import { Footer } from "@/components/custom/Footer";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await getGlobalPageMetadata();

  return {
    title: metadata?.title,
    description: metadata.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const globalData = await getGlobalData();
  console.dir(globalData, { depth: null });
  console.log("globalData",globalData)
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster position="bottom-center" />
        <Header data={globalData.Header} />
        <div>{children}</div>
        <Footer data={globalData.Footer} />
      </body>
    </html>
  );
}
