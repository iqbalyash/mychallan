import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us - MyChallan.pk | Pakistan E-Challan Information Portal",
  description: "Learn about MyChallan.pk - Your trusted source for e-challan information in Pakistan. We provide comprehensive guides and official links for traffic challan verification.",
  keywords: "about mychallan, e challan pakistan, traffic challan information, pakistan traffic portal, challan guide",
  alternates: {
    canonical: "https://mychallan.pk/about-us",
  },
  openGraph: {
    title: "About Us - MyChallan.pk",
    description: "Your trusted source for e-challan information in Pakistan.",
    url: "https://mychallan.pk/about-us",
    siteName: "MyChallan.pk",
    type: "website",
    locale: "en_PK",
  },
};

export default function AboutUsPage() {
  return (
    <main className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Us
          </h1>
        </div>

        {/* Content Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            {/* 
              ============================================
              ABOUT US CONTENT
              ============================================
              Finalized About Us content will be inserted here.
              - Left-aligned text
              - Simple layout
              - Professional tone
              ============================================
            */}
            
            {/* Temporary placeholder - remove when adding actual content */}
            <div className="text-gray-700 dark:text-gray-300 space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to MyChallan.pk</h2>
              
              <p>
                MyChallan.pk is your comprehensive guide to e-challan services in Pakistan. We provide 
                accurate information and direct links to official government portals for traffic challan 
                verification and payment.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">Our Mission</h3>
              
              <p>
                Our mission is to simplify the process of checking and understanding traffic challans 
                across Pakistan by providing a centralized information hub with guides in both English 
                and Urdu.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">What We Offer</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Comprehensive guides for Punjab, Sindh, and Islamabad e-challan systems</li>
                <li>Direct links to official government portals</li>
                <li>Traffic violation codes and fine information</li>
                <li>Bilingual content (English and Urdu)</li>
                <li>Step-by-step instructions for challan verification</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">Important Notice</h3>
              
              <p>
                MyChallan.pk is an informational website only. We do not collect personal data, process 
                payments, or issue traffic challans. All official transactions must be completed through 
                the respective government portals.
              </p>

              <p>
                For official challan verification and payment, please visit:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Punjab:</strong> PSCA E-Challan Portal</li>
                <li><strong>Sindh/Karachi:</strong> Sindh Police E-Challan Portal</li>
                <li><strong>Islamabad:</strong> Islamabad Traffic Police E-Services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact or Additional Info Section */}
        <div className="bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-gray-900 dark:text-white mb-2">
            Disclaimer
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            This website provides information only and is not affiliated with any government traffic authority. 
            All trademarks and service marks are the property of their respective owners. For official information, 
            please visit the respective government websites.
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-block text-blue-600 dark:text-blue-400 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
