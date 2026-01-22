import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "E Challan Check Pakistan – Online Challan Check & Payment | MyChallan.pk",
    template: "%s | MyChallan.pk",
  },
  description: "Check e challan online in Pakistan by vehicle number or CNIC. Verify traffic challans for Islamabad, Lahore, Karachi. Free violation codes, fines, and official payment links.",
  keywords: "e challan pakistan, challan check, traffic challan online, CNIC challan, vehicle challan, traffic violations pakistan, islamabad challan, lahore challan, karachi challan, online challan payment, psid generation, traffic fine check",
  authors: [{ name: "MyChallan.pk" }],
  creator: "MyChallan.pk",
  publisher: "MyChallan.pk",
  applicationName: "MyChallan.pk",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://mychallan.pk",
    languages: {
      "en-PK": "https://mychallan.pk",
      "ur-PK": "https://mychallan.pk",
      "x-default": "https://mychallan.pk",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    alternateLocale: ["ur_PK"],
    url: "https://mychallan.pk",
    siteName: "MyChallan.pk",
    title: "E Challan Check Pakistan – Online Challan Check & Payment",
    description: "Check e challan online in Pakistan by vehicle number or CNIC. Verify traffic challans for Islamabad, Lahore, Karachi. Free violation codes and official payment links.",
    countryName: "Pakistan",
  },
  twitter: {
    card: "summary_large_image",
    title: "E Challan Check Pakistan – Online Challan Check & Payment",
    description: "Check e challan online in Pakistan by vehicle number or CNIC. Free violation codes and official payment links.",
    creator: "@mychallanpk",
  },
  verification: {
    google: "tmWq75hGzkBBxkv-CIweFfOg-mWqM-N2niwuNnGgA44",
  },
  category: "Government Services",
  classification: "Informational",
  other: {
    "geo.region": "PK",
    "geo.placename": "Pakistan",
    "language": "en,ur",
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
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />
        <meta name="google-site-verification" content="tmWq75hGzkBBxkv-CIweFfOg-mWqM-N2niwuNnGgA44" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://mychallan.pk" />
        <link rel="alternate" hrefLang="en-PK" href="https://mychallan.pk" />
        <link rel="alternate" hrefLang="ur-PK" href="https://mychallan.pk" />
        <link rel="alternate" hrefLang="x-default" href="https://mychallan.pk" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "MyChallan.pk",
              "alternateName": "E Challan Check Pakistan",
              "url": "https://mychallan.pk",
              "description": "Check e challan online in Pakistan by vehicle number or CNIC. Verify traffic challans for Islamabad, Lahore, Karachi.",
              "inLanguage": ["en-PK", "ur-PK"],
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://mychallan.pk/?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "publisher": {
                "@type": "Organization",
                "name": "MyChallan.pk",
                "url": "https://mychallan.pk"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "MyChallan.pk",
              "url": "https://mychallan.pk",
              "logo": "https://mychallan.pk/logo.png",
              "description": "Informational website for e-challan checking in Pakistan",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "PK"
              },
              "sameAs": []
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "E-Challan Information Service",
              "provider": {
                "@type": "Organization",
                "name": "MyChallan.pk"
              },
              "areaServed": {
                "@type": "Country",
                "name": "Pakistan"
              },
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": "https://mychallan.pk",
                "serviceType": "Online"
              }
            })
          }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        <Header />
        <main className="flex-grow" itemScope itemType="https://schema.org/WebPage">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
