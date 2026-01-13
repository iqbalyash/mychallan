"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Violation {
  code: number;
  en: string;
  ur: string;
  fine: number;
  cities: string[];
}

export default function Home() {
  const [showCityOptions, setShowCityOptions] = useState(false);
  const [violations, setViolations] = useState<Violation[]>([]);
  const [violationSearch, setViolationSearch] = useState("");
  const [filteredViolations, setFilteredViolations] = useState<Violation[]>([]);
  const [language, setLanguage] = useState<"en" | "ur">("en");
  const [contentLanguage, setContentLanguage] = useState<"en" | "ur">("en");

  // Load violations data
  useEffect(() => {
    fetch("/data/violations.json")
      .then((res) => res.json())
      .then((data) => {
        setViolations(data);
        setFilteredViolations(data);
      })
      .catch((err) => console.error("Error loading violations:", err));
  }, []);

  // Filter violations on search
  useEffect(() => {
    if (violationSearch.trim() === "") {
      setFilteredViolations(violations);
    } else {
      const query = violationSearch.toLowerCase();
      const filtered = violations.filter(
        (v) =>
          v.code.toString().includes(query) ||
          v.en.toLowerCase().includes(query) ||
          v.ur.includes(query)
      );
      setFilteredViolations(filtered);
    }
  }, [violationSearch, violations]);

  return (
    <main>
      {/* E-CHALLAN SEARCH SECTION - VERY TOP */}
      <section className="bg-blue-700 text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            E-Challan Online Check (Pakistan)
          </h1>
          
          <button
            onClick={() => setShowCityOptions(!showCityOptions)}
            className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg"
          >
            Search E-Challan
          </button>

          {/* City Options - Simple Expandable UI */}
          {showCityOptions && (
            <div className="mt-6 bg-white rounded-lg shadow-xl p-6 text-left">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Select Your City:
              </h3>
              <div className="space-y-3">
                <Link
                  href="/islamabad-e-challan"
                  className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                >
                  <span className="text-blue-700 font-semibold group-hover:text-blue-800">
                    Islamabad E-Challan Check →
                  </span>
                </Link>
                <Link
                  href="/panjab-e-challan"
                  className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                >
                  <span className="text-blue-700 font-semibold group-hover:text-blue-800">
                    Punjab / Lahore E-Challan Check →
                  </span>
                </Link>
                <Link
                  href="/e-challan-karachi-payment"
                  className="block p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group"
                >
                  <span className="text-blue-700 font-semibold group-hover:text-blue-800">
                    Sindh / Karachi E-Challan Check →
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* VIOLATION SEARCH TOOL - CLIENT-SIDE SEARCH */}
      <section className="py-12 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Search Violation Codes
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Search by code, name, or description
                </p>
              </div>
              
              {/* Language Toggle */}
              <div className="flex gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setLanguage("en")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === "en"
                      ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage("ur")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === "ur"
                      ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  اردو
                </button>
              </div>
            </div>
            
            {/* Search Input */}
            <div className="mb-6">
              <input
                type="text"
                value={violationSearch}
                onChange={(e) => setViolationSearch(e.target.value)}
                placeholder="Search violations (e.g., speeding, 001, helmet)"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Results */}
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {filteredViolations.length > 0 ? (
                filteredViolations.map((violation, index) => (
                  <div
                    key={`${violation.code}-${index}`}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2 flex-1">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold px-3 py-1 rounded text-sm">
                          {violation.code}
                        </span>
                        <div className="flex-1">
                          {language === "en" ? (
                            <>
                              <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                                {violation.en}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1" dir="rtl">
                                {violation.ur}
                              </p>
                            </>
                          ) : (
                            <>
                              <h3 className="font-semibold text-gray-900 dark:text-white text-sm" dir="rtl">
                                {violation.ur}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-400 text-xs mt-1">
                                {violation.en}
                              </p>
                            </>
                          )}
                        </div>
                      </div>
                      <span className="text-red-600 dark:text-red-400 font-semibold text-sm whitespace-nowrap">
                        Rs. {violation.fine.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {violation.cities.map((city) => (
                        <span
                          key={city}
                          className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                        >
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  {violationSearch ? "No violations found matching your search." : "Loading violations..."}
                </div>
              )}
            </div>

            {/* Results Count */}
            {violations.length > 0 && (
              <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredViolations.length} of {violations.length} violations
              </div>
            )}
          </div>
        </div>
      </section>

      {/* E-CHALLAN APP DOWNLOAD SECTION */}
      <section className="py-12 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 sm:p-12">
            <div className="text-5xl mb-4">📱</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              E-Challan App Download
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Download our mobile app to check traffic challans on the go
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-8" dir="rtl">
              موبائل ایپ ڈاؤن لوڈ کریں اور اپنے ٹریفک چالان چیک کریں
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/e-challan-app"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <span>📱</span>
                <span>View App Details & Download</span>
              </Link>
            </div>
            
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <span>✓</span>
                <span>Free Download</span>
              </span>
              <span className="flex items-center gap-1">
                <span>✓</span>
                <span>Android APK</span>
              </span>
              <span className="flex items-center gap-1">
                <span>✓</span>
                <span>Fast & Secure</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* HOMEPAGE CONTENT START */}
      <section className="py-12 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          {/* 
            ============================================
            HOMEPAGE CONTENT START
            ============================================
            Content will be provided manually
            Do not generate content
            Render content from a variable or MDX later
            ============================================
          */}
        </div>
      </section>

      {/* 1. TOP ACTION SECTION - FIRST THING ON PAGE */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            E Challan Check Pakistan
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-blue-100">
            Check your traffic challan online by vehicle number or CNIC
          </p>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/panjab-e-challan"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg w-full sm:w-auto"
            >
              Punjab E-Challan
            </Link>
            <Link
              href="/e-challan-karachi-payment"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg w-full sm:w-auto"
            >
              Karachi E-Challan
            </Link>
            <Link
              href="/islamabad-e-challan"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg w-full sm:w-auto"
            >
              Islamabad E-Challan
            </Link>
          </div>
        </div>
      </section>

      {/* SEO CONTENT SECTION - BILINGUAL */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8">
            {/* Language Toggle */}
            <div className="flex justify-end mb-6">
              <div className="flex gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setContentLanguage("en")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    contentLanguage === "en"
                      ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setContentLanguage("ur")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    contentLanguage === "ur"
                      ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  اردو
                </button>
              </div>
            </div>

            {/* English Content */}
            {contentLanguage === "en" ? (
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  E Challan Check Pakistan – Online Challan Check & Payment
                </h2>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  MyChallan.pk helps users across Pakistan to check e challan online easily using official sources.
                  You can verify your traffic challan by vehicle number or CNIC and find correct guidance for online challan payment.
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                  Our website provides updated information for:
                </h3>
                
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300 mb-8">
                  <li>Islamabad e challan check</li>
                  <li>Lahore / Punjab e challan</li>
                  <li>Karachi / Sindh e challan</li>
                  <li>Bike challan check</li>
                  <li>Car challan check</li>
                  <li>E challan app guidance</li>
                  <li>PSID generation and payment process</li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    ⚠️ Important Notice:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    We do not collect any personal data. All challan checks and payments are done through official traffic police portals only.
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
                  Use the search tools above to:
                </h3>
                
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-300">
                  <li>Find challan violation codes</li>
                  <li>Check fine amounts</li>
                  <li>Understand traffic rules</li>
                  <li>Avoid future e challans</li>
                </ul>
              </div>
            ) : (
              /* Urdu Content */
              <div className="prose prose-lg dark:prose-invert max-w-none" dir="rtl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-right">
                  ای چالان چیک پاکستان – آن لائن چالان چیک اور ادائیگی
                </h2>
                
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-right">
                  MyChallan.pk پورے پاکستان میں صارفین کو ای چالان آن لائن چیک کرنے کی درست اور آسان رہنمائی فراہم کرتا ہے۔
                  آپ گاڑی نمبر یا CNIC کے ذریعے ٹریفک چالان کی معلومات حاصل کر سکتے ہیں اور آن لائن چالان ادائیگی کے طریقے جان سکتے ہیں۔
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8 text-right">
                  ہم درج ذیل شہروں کے لیے معلومات فراہم کرتے ہیں:
                </h3>
                
                <ul className="list-disc pr-6 space-y-3 text-gray-700 dark:text-gray-300 mb-8 text-right">
                  <li>اسلام آباد ای چالان چیک</li>
                  <li>لاہور / پنجاب ای چالان</li>
                  <li>کراچی / سندھ ای چالان</li>
                  <li>بائیک چالان چیک</li>
                  <li>کار ای چالان چیک</li>
                  <li>ای چالان ایپ رہنمائی</li>
                  <li>PSID جنریشن اور ادائیگی کا طریقہ</li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6 text-right">
                  <p className="text-gray-700 dark:text-gray-300 font-semibold mb-2">
                    ⚠️ اہم نوٹس:
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    ہم کوئی ذاتی معلومات محفوظ نہیں کرتے۔ تمام چالان چیک اور ادائیگی صرف سرکاری ویب سائٹس کے ذریعے ہوتی ہے۔
                  </p>
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-8 text-right">
                  اوپر دیے گئے ٹولز استعمال کر کے آپ:
                </h3>
                
                <ul className="list-disc pr-6 space-y-3 text-gray-700 dark:text-gray-300 text-right">
                  <li>خلاف ورزی کے کوڈ تلاش کر سکتے ہیں</li>
                  <li>جرمانے کی رقم معلوم کر سکتے ہیں</li>
                  <li>ٹریفک قوانین سمجھ سکتے ہیں</li>
                  <li>مستقبل میں ای چالان سے بچ سکتے ہیں</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
