import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "ibuiltThis - Share Your Creations, Discover New Launches",
  description: "ibuiltthis is  a platfrom for building and sharing your own projects with the world. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${outfit.variable} ${outfit.variable} antialiased overflow-x-hidden`}
      >
       <div className="flex flex-col min-h-screen relative">
        <Header/>
        <main className="flex-1 relative z-0">
          {children}
        </main>
        <Footer/>
       </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
