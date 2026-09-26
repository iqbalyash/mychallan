import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Karachi / Sindh E-Challan Check & Payment - Online Traffic Challan",
  description: "Check and pay your Karachi and Sindh traffic e-challan online through Sindh Police. View pending challans and make payments.",
  keywords: "karachi e challan, sindh challan, karachi traffic challan, sindh police challan, karachi traffic fine payment",
  alternates: {
    canonical: "https://mychallan.pk/e-challan-karachi-payment/",
  },
  openGraph: {
    title: "Karachi / Sindh E-Challan Check & Payment",
    description: "Check and pay your Karachi and Sindh traffic e-challan online through Sindh Police.",
    url: "https://mychallan.pk/e-challan-karachi-payment/",
    siteName: "MyChallan.pk",
    type: "website",
    locale: "en_PK",
  },
};

export default function KarachiEChallanPage() {
  return (
    <main className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Karachi / Sindh E-Challan Check & Payment
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            کراچی اور سندھ میں ٹریفک چالان آن لائن چیک کریں اور ادائیگی کریں
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          {/* Urdu Explanation */}
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4" dir="rtl">
              سندھ پولیس کی آفیشل ویب سائٹ پر اپنا ٹریفک چالان چیک کریں اور آن لائن ادائیگی کریں۔
              آپ اپنے چالان کی تفصیلات دیکھ سکتے ہیں اور فوری طور پر ادا کر سکتے ہیں۔
            </p>
          </div>

          {/* Official Link Button */}
          <div className="text-center mb-8">
            <a
              href="https://www.sindhpolice.gov.pk/challan-check"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-lg transition-colors shadow-lg text-lg"
            >
              Check Sindh / Karachi E-Challan Now →
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Official Sindh Police E-Challan Verification Portal
            </p>
          </div>

          {/* Features */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Services Available
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* E-Challan Check */}
              <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="text-3xl mb-3 text-center">🔍</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-center">
                  E-Challan Check
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2" dir="rtl">
                  اپنا ٹریفک چالان آن لائن چیک کریں
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Check challan by vehicle number</li>
                  <li>• View violation details</li>
                  <li>• Check fine amount</li>
                  <li>• View challan date and time</li>
                </ul>
              </div>

              {/* Payment Guidance */}
              <div className="bg-green-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="text-3xl mb-3 text-center">💳</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-center">
                  Payment Guidance
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2" dir="rtl">
                  آن لائن ادائیگی کی رہنمائی
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Online payment options</li>
                  <li>• Bank deposit information</li>
                  <li>• Payment confirmation</li>
                  <li>• Instant challan clearance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-center">
              How to Check Your Challan
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400">1.</span>
                  <span>Visit the official Sindh Police E-Challan website</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400">2.</span>
                  <span>Enter your vehicle registration number</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400">3.</span>
                  <span>View your challan details and fine amount</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400">4.</span>
                  <span>Follow the payment instructions to clear your challan</span>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <span>⚠️</span> Important Notice
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            This is an informational page only. We do not collect any personal data or process challan payments.
            All transactions must be completed through the official Sindh Police portal.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm" dir="rtl">
            یہ صرف معلوماتی صفحہ ہے۔ تمام ادائیگیاں سندھ پولیس کی آفیشل ویب سائٹ سے ہی کریں۔
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
