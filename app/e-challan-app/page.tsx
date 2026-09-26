import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-Challan App Pakistan - Verify, Generate PSID and Pay Your Fine",
  description: "Download E-Challan App to verify traffic challans, generate PSID, and pay fines online in Pakistan. Complete guide for Punjab, Sindh, and Islamabad e-challan apps.",
  keywords: "e challan app, pakistan challan app, psid generation, challan payment app, traffic fine app pakistan, mobile challan check",
  alternates: {
    canonical: "https://mychallan.pk/e-challan-app/",
  },
  openGraph: {
    title: "E-Challan App Pakistan - Verify, Generate PSID and Pay Fine",
    description: "Download E-Challan App to verify traffic challans, generate PSID, and pay fines online.",
    url: "https://mychallan.pk/e-challan-app/",
    siteName: "MyChallan.pk",
    type: "website",
    locale: "en_PK",
  },
};

export default function EChallanAppPage() {
  return (
    <main className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            E-Challan App (Verify, Generate PSID and Pay Your Fine)
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6" dir="rtl">
            ای چالان ایپ - چالان چیک کریں، PSID بنائیں اور جرمانہ ادا کریں
          </p>
          
          {/* Download Button */}
          <div className="flex flex-col items-center gap-4 bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-8 shadow-2xl mb-8">
            <div className="text-4xl mb-2">📱</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Download E-Challan App Now
            </h2>
            <p className="text-green-100 mb-4 text-center">
              Check traffic challans on your mobile device
            </p>
            <a
              href="https://dl.mychallan.pk/file/SoftBinArchive/e-challan-check.apk"
              download
              className="bg-white text-green-600 hover:bg-green-50 px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg flex items-center gap-2"
            >
              <span>⬇️</span>
              <span>Download APK (Android)</span>
            </a>
            <p className="text-xs text-green-100 mt-2">
              File: e-challan-check.apk | For Android devices
            </p>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            What is E-Challan App? / ای چالان ایپ کیا ہے؟
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              The E-Challan App is a mobile application developed by traffic authorities in Pakistan 
              to help citizens check, verify, and pay their traffic violation fines online. The app 
              provides a convenient way to manage traffic challans without visiting physical offices.
            </p>
            <p dir="rtl" className="text-right">
              ای چالان ایپ پاکستان میں ٹریفک حکام کی طرف سے تیار کردہ ایک موبائل ایپلیکیشن ہے جو 
              شہریوں کو اپنے ٹریفک چالان آن لائن چیک کرنے، تصدیق کرنے اور ادا کرنے میں مدد کرتی ہے۔
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Key Features / اہم خصوصیات
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Verify Challan */}
            <div className="bg-blue-50 dark:bg-gray-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Verify Challan
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2" dir="rtl">
                چالان کی تصدیق
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Check and verify all your traffic challans by vehicle number or CNIC
              </p>
            </div>

            {/* Generate PSID */}
            <div className="bg-green-50 dark:bg-gray-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">🔑</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Generate PSID
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2" dir="rtl">
                PSID بنائیں
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Create your unique PSID for secure challan management
              </p>
            </div>

            {/* Pay Fine */}
            <div className="bg-purple-50 dark:bg-gray-700 rounded-lg p-6 text-center">
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                Pay Your Fine
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2" dir="rtl">
                جرمانہ ادا کریں
              </p>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Pay your traffic fines online through secure payment methods
              </p>
            </div>
          </div>
        </div>

        {/* How to Verify Challan */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to Verify Your Challan / اپنے چالان کی تصدیق کیسے کریں
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">1.</span>
                <div>
                  <p className="font-semibold mb-1">Download the E-Challan App</p>
                  <p className="text-sm" dir="rtl">ای چالان ایپ ڈاؤن لوڈ کریں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">2.</span>
                <div>
                  <p className="font-semibold mb-1">Enter your vehicle registration number or CNIC</p>
                  <p className="text-sm" dir="rtl">اپنی گاڑی کا رجسٹریشن نمبر یا شناختی کارڈ نمبر درج کریں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">3.</span>
                <div>
                  <p className="font-semibold mb-1">View all pending challans with complete details</p>
                  <p className="text-sm" dir="rtl">تمام زیر التوا چالان مکمل تفصیلات کے ساتھ دیکھیں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-blue-600 dark:text-blue-400 min-w-[24px]">4.</span>
                <div>
                  <p className="font-semibold mb-1">Check violation type, date, time, and location</p>
                  <p className="text-sm" dir="rtl">قانون شکنی کی قسم، تاریخ، وقت اور مقام چیک کریں</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* How to Generate PSID */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to Generate PSID / PSID کیسے بنائیں
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300 mb-6">
            <p>
              PSID (Punjab Safe Cities Identification) is a unique identification number that helps you 
              manage your traffic challans efficiently. This service is primarily available for Punjab region.
            </p>
            <p dir="rtl" className="text-right">
              PSID ایک منفرد شناختی نمبر ہے جو آپ کو اپنے ٹریفک چالان کو مؤثر طریقے سے منظم کرنے میں مدد کرتا ہے۔
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="font-bold text-green-600 dark:text-green-400 min-w-[24px]">1.</span>
                <div>
                  <p className="font-semibold mb-1">Open the E-Challan App</p>
                  <p className="text-sm" dir="rtl">ای چالان ایپ کھولیں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600 dark:text-green-400 min-w-[24px]">2.</span>
                <div>
                  <p className="font-semibold mb-1">Select "Generate PSID" option</p>
                  <p className="text-sm" dir="rtl">"PSID بنائیں" کا اختیار منتخب کریں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600 dark:text-green-400 min-w-[24px]">3.</span>
                <div>
                  <p className="font-semibold mb-1">Enter required personal and vehicle information</p>
                  <p className="text-sm" dir="rtl">ضروری ذاتی اور گاڑی کی معلومات درج کریں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600 dark:text-green-400 min-w-[24px]">4.</span>
                <div>
                  <p className="font-semibold mb-1">Verify your details and submit</p>
                  <p className="text-sm" dir="rtl">اپنی تفصیلات کی تصدیق کریں اور جمع کرائیں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-green-600 dark:text-green-400 min-w-[24px]">5.</span>
                <div>
                  <p className="font-semibold mb-1">Receive your unique PSID number</p>
                  <p className="text-sm" dir="rtl">اپنا منفرد PSID نمبر حاصل کریں</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* How to Pay Fine */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            How to Pay Your Fine / جرمانہ کیسے ادا کریں
          </h2>
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mb-6">
            <ol className="space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[24px]">1.</span>
                <div>
                  <p className="font-semibold mb-1">Select the challan you want to pay</p>
                  <p className="text-sm" dir="rtl">وہ چالان منتخب کریں جو آپ ادا کرنا چاہتے ہیں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[24px]">2.</span>
                <div>
                  <p className="font-semibold mb-1">Choose your payment method</p>
                  <p className="text-sm" dir="rtl">اپنا ادائیگی کا طریقہ منتخب کریں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[24px]">3.</span>
                <div>
                  <p className="font-semibold mb-1">Enter payment details (credit/debit card or mobile wallet)</p>
                  <p className="text-sm" dir="rtl">ادائیگی کی تفصیلات درج کریں (کریڈٹ/ڈیبٹ کارڈ یا موبائل والٹ)</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[24px]">4.</span>
                <div>
                  <p className="font-semibold mb-1">Complete the payment transaction</p>
                  <p className="text-sm" dir="rtl">ادائیگی کا لین دین مکمل کریں</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-purple-600 dark:text-purple-400 min-w-[24px]">5.</span>
                <div>
                  <p className="font-semibold mb-1">Get payment confirmation and receipt</p>
                  <p className="text-sm" dir="rtl">ادائیگی کی تصدیق اور رسید حاصل کریں</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
              <strong>Payment Methods Available:</strong> Credit/Debit Cards, Mobile Wallets (JazzCash, Easypaisa), Bank Transfer
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300" dir="rtl">
              <strong>دستیاب ادائیگی کے طریقے:</strong> کریڈٹ/ڈیبٹ کارڈ، موبائل والٹ (جاز کیش، ایزی پیسہ)، بینک ٹرانسفر
            </p>
          </div>
        </div>

        {/* Download Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Download E-Challan App / ایپ ڈاؤن لوڈ کریں
          </h2>
          <p className="text-center mb-6 text-blue-100">
            Available for Android and iOS devices
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold mb-2">📱 Google Play Store</p>
              <p className="text-sm text-blue-100">Search for "E-Challan" in Play Store</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
              <p className="font-semibold mb-2">🍎 Apple App Store</p>
              <p className="text-sm text-blue-100">Search for "E-Challan" in App Store</p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-8">
          <h3 className="font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <span>⚠️</span> Important Notice / اہم نوٹس
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            This is an informational guide only. Please download the official E-Challan app from your respective 
            traffic authority's official channels. We do not provide app downloads or collect any personal data.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm" dir="rtl">
            یہ صرف معلوماتی گائیڈ ہے۔ براہ کرم آفیشل ای چالان ایپ اپنی متعلقہ ٹریفک اتھارٹی کے آفیشل چینلز سے ڈاؤن لوڈ کریں۔
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
