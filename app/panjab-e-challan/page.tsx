import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Punjab / Lahore E-Challan Check - PSCA Online Challan",
  description: "Check your Punjab and Lahore traffic e-challan online through PSCA. Search by vehicle number or CNIC to view pending challans.",
  keywords: "punjab e challan, lahore challan, psca challan, punjab traffic challan, lahore traffic fine, psca online",
  alternates: {
    canonical: "https://mychallan.pk/panjab-e-challan",
  },
  openGraph: {
    title: "Punjab / Lahore E-Challan Check - PSCA",
    description: "Check your Punjab and Lahore traffic e-challan online through PSCA.",
    url: "https://mychallan.pk/panjab-e-challan",
    siteName: "MyChallan.pk",
    type: "website",
    locale: "en_PK",
  },
};

export default function PunjabEChallanPage() {
  return (
    <main className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Punjab / Lahore E-Challan Check
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            پنجاب اور لاہور میں ٹریفک چالان آن لائن چیک کریں
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          {/* Urdu Explanation */}
          <div className="mb-8 text-center">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4" dir="rtl">
              پنجاب سیف سٹیز اتھارٹی (PSCA) کی آفیشل ویب سائٹ پر اپنا ٹریفک چالان چیک کریں۔
              آپ اپنی گاڑی کے نمبر یا شناختی کارڈ (CNIC) سے چالان دیکھ سکتے ہیں۔
            </p>
          </div>

          {/* Official Link Button */}
          <div className="text-center mb-8">
            <a
              href="https://echallan.psca.gop.pk/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-lg transition-colors shadow-lg text-lg"
            >
              Visit Official PSCA E-Challan Portal →
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              You will be redirected to the official government website
            </p>
          </div>

          {/* Features */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              How to Check Your E-Challan
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Vehicle Number Check */}
              <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  Vehicle Number Check
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400" dir="rtl">
                  گاڑی کی رجسٹریشن نمبر سے چالان چیک کریں
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Search by vehicle registration number
                </p>
              </div>

              {/* CNIC Check */}
              <div className="bg-green-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🆔</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  CNIC Check
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400" dir="rtl">
                  شناختی کارڈ نمبر سے چالان چیک کریں
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Search by national identity card
                </p>
              </div>

              {/* PSID Generation */}
              <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">🔑</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  PSID Generation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400" dir="rtl">
                  اگر دستیاب ہو تو PSID بنائیں
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Generate PSID if supported
                </p>
              </div>
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
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm" dir="rtl">
            یہ صرف معلوماتی صفحہ ہے۔ ہم کوئی ذاتی ڈیٹا جمع نہیں کرتے۔ براہ کرم آفیشل ویب سائٹ استعمال کریں۔
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
