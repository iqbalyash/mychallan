"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Note: Metadata should be added via layout.tsx or using generateMetadata for static pages
// For client components, we'll add structured data via useEffect

interface Update {
  id: number;
  date: string;
  category: string;
  title: {
    en: string;
    ur: string;
  };
  excerpt: {
    en: string;
    ur: string;
  };
  content: {
    en: string;
    ur: string;
  };
  tags: string[];
}

// Sample updates data - can be moved to JSON file later
const updates: Update[] = [
  {
    id: 1,
    date: "2025-01-27",
    category: "News",
    title: {
      en: "New E-Challan System Launched in Punjab",
      ur: "پنجاب میں نیا ای چالان سسٹم شروع"
    },
    excerpt: {
      en: "Punjab Safe Cities Authority (PSCA) has launched an updated e-challan system with improved features for online payment and verification.",
      ur: "پنجاب سیف سٹیز اتھارٹی (PSCA) نے آن لائن ادائیگی اور تصدیق کے بہتر فیچرز کے ساتھ اپ ڈیٹ شدہ ای چالان سسٹم شروع کیا ہے۔"
    },
    content: {
      en: "The new system allows users to check challans more efficiently and make payments through multiple channels including mobile wallets and bank transfers.",
      ur: "نیا سسٹم صارفین کو زیادہ مؤثر طریقے سے چالان چیک کرنے اور موبائل والٹ اور بینک ٹرانسفر سمیت متعدد چینلز کے ذریعے ادائیگی کرنے کی اجازت دیتا ہے۔"
    },
    tags: ["Punjab", "PSCA", "Payment"]
  },
  {
    id: 2,
    date: "2025-01-20",
    category: "Update",
    title: {
      en: "Karachi Traffic Police Introduces Online PSID Generation",
      ur: "کراچی ٹریفک پولیس نے آن لائن PSID جنریشن متعارف کروایا"
    },
    excerpt: {
      en: "Sindh Police has introduced a new feature allowing citizens to generate PSID online for faster challan processing.",
      ur: "سندھ پولیس نے ایک نیا فیچر متعارف کروایا ہے جو شہریوں کو تیز چالان پروسیسنگ کے لیے آن لائن PSID بنانے کی اجازت دیتا ہے۔"
    },
    content: {
      en: "This feature streamlines the challan payment process and reduces waiting times at traffic offices.",
      ur: "یہ فیچر چالان ادائیگی کے عمل کو آسان بناتا ہے اور ٹریفک دفاتر میں انتظار کے اوقات کو کم کرتا ہے۔"
    },
    tags: ["Karachi", "PSID", "Payment"]
  },
  {
    id: 3,
    date: "2025-01-15",
    category: "Event",
    title: {
      en: "Islamabad Traffic Police Awareness Campaign",
      ur: "اسلام آباد ٹریفک پولیس آگاہی مہم"
    },
    excerpt: {
      en: "ITP is conducting awareness sessions about e-challan system and traffic rules across Islamabad.",
      ur: "ITP اسلام آباد بھر میں ای چالان سسٹم اور ٹریفک قوانین کے بارے میں آگاہی سیشن منعقد کر رہا ہے۔"
    },
    content: {
      en: "Citizens can attend these sessions to learn about online challan checking, payment methods, and traffic violation codes.",
      ur: "شہری آن لائن چالان چیکنگ، ادائیگی کے طریقے، اور ٹریفک خلاف ورزی کے کوڈز کے بارے میں سیکھنے کے لیے ان سیشنز میں شرکت کر سکتے ہیں۔"
    },
    tags: ["Islamabad", "Awareness", "Events"]
  }
];

export default function UpdatesPage() {
  const [language, setLanguage] = useState<"en" | "ur">("en");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Add structured data for SEO
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "E-Challan Updates & News",
      "description": "Latest developments and news about e-challan system in Pakistan",
      "url": "https://mychallan.pk/updates",
      "publisher": {
        "@type": "Organization",
        "name": "MyChallan.pk",
        "url": "https://mychallan.pk"
      },
      "blogPost": updates.map(update => ({
        "@type": "BlogPosting",
        "headline": update.title.en,
        "datePublished": update.date,
        "author": {
          "@type": "Organization",
          "name": "MyChallan.pk"
        }
      }))
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const categories = ["All", "News", "Update", "Event"];
  const filteredUpdates = selectedCategory === "All" 
    ? updates 
    : updates.filter(update => update.category === selectedCategory);

  return (
    <main className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            E-Challan Updates & News
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Latest developments and news about e-challan system in Pakistan
          </p>
          <p className="text-gray-600 dark:text-gray-400" dir="rtl">
            پاکستان میں ای چالان سسٹم کی تازہ ترین ترقیات اور خبریں
          </p>
        </div>

        {/* Language Toggle */}
        <div className="flex justify-end mb-8">
          <div className="flex gap-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-1" role="group" aria-label="Language selection">
            <button
              onClick={() => setLanguage("en")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                language === "en"
                  ? "bg-white dark:bg-gray-600 text-blue-600 dark:text-blue-400 shadow"
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              aria-pressed={language === "en"}
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
              aria-pressed={language === "ur"}
            >
              اردو
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Updates/Blog Section */}
        <div className="space-y-8">
          {filteredUpdates.length > 0 ? (
            filteredUpdates.map((update) => (
              <article
                key={update.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow"
                itemScope
                itemType="https://schema.org/NewsArticle"
              >
                {/* Article Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded text-sm font-semibold">
                      {update.category}
                    </span>
                    <time 
                      className="text-sm text-gray-500 dark:text-gray-400"
                      dateTime={update.date}
                      itemProp="datePublished"
                    >
                      {new Date(update.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                  </div>
                </div>

                {/* Article Title */}
                <h2 
                  className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4"
                  itemProp="headline"
                >
                  {language === "en" ? update.title.en : update.title.ur}
                </h2>

                {/* Article Excerpt */}
                <p 
                  className="text-lg text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
                  itemProp="description"
                  dir={language === "ur" ? "rtl" : "ltr"}
                >
                  {language === "en" ? update.excerpt.en : update.excerpt.ur}
                </p>

                {/* Article Content */}
                <div 
                  className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                  itemProp="articleBody"
                  dir={language === "ur" ? "rtl" : "ltr"}
                >
                  {language === "en" ? update.content.en : update.content.ur}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {update.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Schema.org Metadata */}
                <meta itemProp="author" content="MyChallan.pk" />
                <meta itemProp="publisher" content="MyChallan.pk" />
              </article>
            ))
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No updates found in this category.
              </p>
            </div>
          )}
        </div>

        {/* Subscribe/Notification Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Stay Updated
          </h3>
          <p className="text-blue-100 mb-6">
            Get notified about latest e-challan developments and news
          </p>
          <p className="text-blue-100 mb-6" dir="rtl">
            ای چالان کی تازہ ترین ترقیات اور خبروں سے مطلع رہیں
          </p>
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 inline-block">
            <p className="text-sm">
              Visit this page regularly for updates or check official traffic police websites
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center">
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
