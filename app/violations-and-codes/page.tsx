"use client";

import { useState, useEffect } from "react";

interface Violation {
  code: number;
  en: string;
  ur: string;
  fine: number;
  cities: string[];
}

export default function ViolationsAndCodesPage() {
  const [violations, setViolations] = useState<Violation[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredViolations, setFilteredViolations] = useState<Violation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState<"en" | "ur">("en");

  // Load violations data
  useEffect(() => {
    setIsLoading(true);
    fetch("/data/violations.json")
      .then((res) => res.json())
      .then((data) => {
        setViolations(data);
        setFilteredViolations(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error loading violations:", err);
        setIsLoading(false);
      });
  }, []);

  // Filter violations on search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredViolations(violations);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = violations.filter(
        (v) =>
          v.code.toString().includes(query) ||
          v.en.toLowerCase().includes(query) ||
          v.ur.includes(query) ||
          v.fine.toString().includes(query) ||
          v.cities.some(city => city.toLowerCase().includes(query))
      );
      setFilteredViolations(filtered);
    }
  }, [searchQuery, violations]);

  return (
    <main className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8 flex justify-between items-start">
          <div className="flex-1">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Traffic Violations & Codes
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Complete list of traffic violation codes, descriptions, and fines in Pakistan
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
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by code, violation name, or description..."
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          {searchQuery && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Found {filteredViolations.length} of {violations.length} violations
            </p>
          )}
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">Loading violations...</p>
          </div>
        )}

        {/* Table - Desktop View */}
        {!isLoading && (
          <>
            <div className="hidden md:block bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-600 text-white">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold">Code</th>
                      <th className="px-4 py-3 text-left font-semibold">Violation</th>
                      <th className="px-4 py-3 text-left font-semibold">Cities</th>
                      <th className="px-4 py-3 text-left font-semibold">Fine</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredViolations.length > 0 ? (
                      filteredViolations.map((violation, index) => (
                        <tr
                          key={`${violation.code}-${index}`}
                          className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                            index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-850"
                          }`}
                        >
                          <td className="px-4 py-3">
                            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold px-3 py-1 rounded">
                              {violation.code}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {language === "en" ? (
                              <>
                                <div className="font-semibold text-gray-900 dark:text-white mb-1">
                                  {violation.en}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400" dir="rtl">
                                  {violation.ur}
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="font-semibold text-gray-900 dark:text-white mb-1" dir="rtl">
                                  {violation.ur}
                                </div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">
                                  {violation.en}
                                </div>
                              </>
                            )}
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex flex-wrap gap-1">
                              {violation.cities.map((city) => (
                                <span
                                  key={city}
                                  className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded"
                                >
                                  {city}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="px-4 py-3 text-red-600 dark:text-red-400 font-semibold whitespace-nowrap">
                            Rs. {violation.fine.toLocaleString()}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                          No violations found matching your search.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Card View - Mobile */}
            <div className="md:hidden space-y-4">
              {filteredViolations.length > 0 ? (
                filteredViolations.map((violation, index) => (
                  <div
                    key={`${violation.code}-${index}`}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold px-3 py-1 rounded">
                        {violation.code}
                      </span>
                      <span className="text-red-600 dark:text-red-400 font-semibold text-sm">
                        Rs. {violation.fine.toLocaleString()}
                      </span>
                    </div>
                    {language === "en" ? (
                      <>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {violation.en}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3" dir="rtl">
                          {violation.ur}
                        </p>
                      </>
                    ) : (
                      <>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1" dir="rtl">
                          {violation.ur}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                          {violation.en}
                        </p>
                      </>
                    )}
                    <div className="flex flex-wrap gap-1">
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
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 text-center">
                  <p className="text-gray-500 dark:text-gray-400">
                    No violations found matching your search.
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        {/* Total Count */}
        {!isLoading && filteredViolations.length > 0 && (
          <div className="mt-6 text-center text-gray-600 dark:text-gray-400">
            <p>
              Total Violations: <span className="font-semibold">{filteredViolations.length}</span>
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
