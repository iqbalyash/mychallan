import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Islamabad E-Challan Check - ITP Traffic Challan Online",
  description: "Check your Islamabad traffic e-challan online through Islamabad Traffic Police (ITP). View and verify pending traffic challans.",
  keywords: "islamabad e challan, itp challan, islamabad traffic challan, islamabad police challan, itp online services",
  alternates: {
    canonical: "https://mychallan.pk/islamabad-e-challan",
  },
  openGraph: {
    title: "Islamabad E-Challan Check - ITP",
    description: "Check your Islamabad traffic e-challan online through Islamabad Traffic Police.",
    url: "https://mychallan.pk/islamabad-e-challan",
    siteName: "MyChallan.pk",
    type: "website",
    locale: "en_PK",
  },
};

export default function IslamabadEChallanPage() {
  return (
    <main className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Islamabad E-Challan Check
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            اسلام آباد میں ٹریفک چالان آن لائن چیک کریں
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          {/* Urdu Informational Content */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              اسلام آباد ٹریفک پولیس (ITP) ای چالان سروس
            </h2>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300" dir="rtl">
              <p className="text-lg leading-relaxed">
                اسلام آباد ٹریفک پولیس کی آفیشل ویب سائٹ پر اپنا ٹریفک چالان آن لائن چیک کریں۔ 
                یہ سروس آپ کو اپنی گاڑی کے خلاف جاری کردہ چالان دیکھنے کی سہولت فراہم کرتی ہے۔
              </p>
              
              <p className="leading-relaxed">
                آپ اپنی گاڑی کی رجسٹریشن نمبر استعمال کر کے تمام پینڈنگ چالان دیکھ سکتے ہیں۔ 
                ITP کی ای-سروسز آپ کو مکمل تفصیلات فراہم کرتی ہیں جن میں چالان کی قسم، 
                جرمانے کی رقم، اور تاریخ شامل ہے۔
              </p>

              <p className="leading-relaxed">
                یہ یقینی بنائیں کہ آپ اپنے چالان کی ادائیگی مقررہ وقت میں کر دیں تاکہ 
                اضافی جرمانے سے بچ سکیں۔
              </p>
            </div>
          </div>

          {/* Official Link Button */}
          <div className="text-center mb-8">
            <a
              href="https://www.islamabadpolice.gov.pk/itp/e-services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-lg transition-colors shadow-lg text-lg"
            >
              Visit Islamabad Traffic Police E-Services →
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              You will be redirected to the official ITP website
            </p>
          </div>

          {/* Features Section */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Available Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Challan Check */}
              <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="text-3xl mb-3 text-center">🚦</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-center">
                  Traffic Challan Check
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center" dir="rtl">
                  اپنے گاڑی کے چالان چیک کریں
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Search by vehicle registration</li>
                  <li>• View all pending challans</li>
                  <li>• Check violation details</li>
                  <li>• View fine amounts</li>
                </ul>
              </div>

              {/* ITP E-Services */}
              <div className="bg-green-50 dark:bg-gray-700 rounded-lg p-6">
                <div className="text-3xl mb-3 text-center">🌐</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-center">
                  ITP E-Services
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center" dir="rtl">
                  آن لائن خدمات سے فائدہ اٹھائیں
                </p>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
                  <li>• Online verification</li>
                  <li>• Complaint registration</li>
                  <li>• Traffic updates</li>
                  <li>• License information</li>
                </ul>
              </div>
            </div>

            {/* How to Check */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-center">
                How to Check Your E-Challan
              </h3>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">1.</span>
                  <span>Visit the Islamabad Traffic Police E-Services portal</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">2.</span>
                  <span>Navigate to the E-Challan section</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">3.</span>
                  <span>Enter your vehicle registration number</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">4.</span>
                  <span>View your challan details and payment information</span>
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
            Please use the official Islamabad Traffic Police portal for all services.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm" dir="rtl">
            یہ صرف معلوماتی صفحہ ہے۔ تمام خدمات کے لیے اسلام آباد ٹریفک پولیس کی آفیشل ویب سائٹ استعمال کریں۔
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
