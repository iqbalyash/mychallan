import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Force SSR for all pages
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: "E Challan Check Pakistan – Online Challan Check & Payment | MyChallan.pk",
  description: "Check e challan online in Pakistan by vehicle number or CNIC. Urdu informational guide with official links.",
  keywords: ["e challan", "challan check", "Pakistan challan", "traffic challan", "CNIC challan", "vehicle challan"],
  authors: [{ name: "MyChallan.pk" }],
  creator: "MyChallan.pk",
  publisher: "MyChallan.pk",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://mychallan.pk",
    siteName: "MyChallan.pk",
    title: "E Challan Check Pakistan – Online Challan Check & Payment",
    description: "Check e challan online in Pakistan by vehicle number or CNIC. Urdu informational guide with official links.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
