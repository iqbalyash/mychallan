"use client";

import { useState, useEffect } from "react";

interface Violation {
  code: string;
  name: string;
  description: string;
  fine?: string;
}

export default function ViolationsAndCodesPage() {
  const [violations, setViolations] = useState<Violation[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredViolations, setFilteredViolations] = useState<Violation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

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
          v.code.toLowerCase().includes(query) ||
          v.name.toLowerCase().includes(query) ||
          v.description.toLowerCase().includes(query) ||
          (v.fine && v.fine.toLowerCase().includes(query))
      );
      setFilteredViolations(filtered);
    }
  }, [searchQuery, violations]);

  return (
    <main className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Traffic Violations & Codes
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Complete list of traffic violation codes, descriptions, and fines in Pakistan
          </p>
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
                      <th className="px-4 py-3 text-left font-semibold">Violation Name</th>
                      <th className="px-4 py-3 text-left font-semibold">Description</th>
                      <th className="px-4 py-3 text-left font-semibold">Common Fine</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredViolations.length > 0 ? (
                      filteredViolations.map((violation, index) => (
                        <tr
                          key={violation.code}
                          className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                            index % 2 === 0 ? "bg-white dark:bg-gray-800" : "bg-gray-50 dark:bg-gray-850"
                          }`}
                        >
                          <td className="px-4 py-3">
                            <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold px-3 py-1 rounded">
                              {violation.code}
                            </span>
                          </td>
                          <td className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                            {violation.name}
                          </td>
                          <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                            {violation.description}
                          </td>
                          <td className="px-4 py-3 text-red-600 dark:text-red-400 font-semibold">
                            {violation.fine || "N/A"}
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
                filteredViolations.map((violation) => (
                  <div
                    key={violation.code}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-bold px-3 py-1 rounded">
                        {violation.code}
                      </span>
                      {violation.fine && (
                        <span className="text-red-600 dark:text-red-400 font-semibold">
                          {violation.fine}
                        </span>
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {violation.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {violation.description}
                    </p>
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
