"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface Violation {
  code: string;
  name: string;
  description: string;
  fine?: string;
}

export default function Home() {
  const [showCityOptions, setShowCityOptions] = useState(false);
  const [violations, setViolations] = useState<Violation[]>([]);
  const [violationSearch, setViolationSearch] = useState("");
  const [filteredViolations, setFilteredViolations] = useState<Violation[]>([]);

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
          v.code.toLowerCase().includes(query) ||
          v.name.toLowerCase().includes(query) ||
          v.description.toLowerCase().includes(query)
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Search Violation Codes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
              Search by code, name, or description
            </p>
            
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
                filteredViolations.map((violation) => (
                  <div
                    key={violation.code}
                    className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-400 transition-colors"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold px-3 py-1 rounded text-sm">
                          {violation.code}
                        </span>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {violation.name}
                        </h3>
                      </div>
                      {violation.fine && (
                        <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
                          {violation.fine}
                        </span>
                      )}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {violation.description}
                    </p>
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

      {/* 2. HOMEPAGE INFORMATIONAL CONTENT */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* 
            ============================================
            HOMEPAGE INFORMATIONAL CONTENT SECTION
            ============================================
            Content will be inserted here by the user.
            This section is ready for custom content including:
            - Information about e-challans in Pakistan
            - How-to guides
            - FAQs
            - Official links
            - Any other relevant information
            ============================================
          */}
        </div>
      </section>
    </main>
  );
}
