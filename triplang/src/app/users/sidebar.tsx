"use client";
import React, { useState } from "react";
import Link from "next/link";

const Dashboard: React.FC = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isBooksMenuOpen, setIsBooksMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const toggleSideMenu = () => setIsSideMenuOpen(!isSideMenuOpen);
  const toggleBooksMenu = () => setIsBooksMenuOpen(!isBooksMenuOpen);
  const toggleAccountMenu = () => setIsAccountMenuOpen(!isAccountMenuOpen);

  return (
    <div className="flex h-screen bg-white-50">
      {/* Sidebar */}
      <aside
        className={`z-20 fixed inset-y-0 left-0 w-64 overflow-y-auto bg-white-700 text-black md:static md:block flex-shrink-0 transition-transform transform ${
          isSideMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <div className="py-4 text-black">
          <ul className="mt-6">
            <li className="relative px-6 py-3">
              <span
                className="absolute inset-y-0 left-0 w-1 bg-white rounded-tr-lg rounded-br-lg"
                aria-hidden="true"
              ></span>
              <Link
                className="inline-flex items-center w-full text-sm font-semibold text-black"
                href="/users"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="ml-4">Dashboard</span>
              </Link>
            </li>
            <li className="relative px-6 py-3">
              <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold text-black"
                onClick={toggleBooksMenu}
                aria-haspopup="true"
              >
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 20l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 12l9-5-9-5-9 5-9 5z"></path>
                  </svg>
                  <span className="ml-4">Genre</span>
                </span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {isBooksMenuOpen && (
                <ul
                  className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-white rounded-md shadow-inner bg-violet-800"
                  aria-label="submenu"
                >
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-violet-200">
                    <Link className="w-full" href="/fiction">
                      Fiction
                    </Link>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-violet-200">
                    <Link className="w-full" href="/books/non-fiction">
                      Non-Fiction
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative px-6 py-3">
              <Link
                className="inline-flex items-center w-full text-sm font-semibold text-black"
                href="/settings"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"></path>
                  <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V20a2 2 0 01-2 2h-2a2 2 0 01-2-2v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H4a2 2 0 01-2-2v-2a2 2 0 012-2h.09c.7 0 1.34-.37 1.51-1a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06c.48.48 1.14.63 1.82.33H10a1.65 1.65 0 001-1.51V4a2 2 0 012-2h2a2 2 0 012 2v.09c0 .7.37 1.34 1 1.51a1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06c-.48.48-.63 1.14-.33 1.82V10c0 .7.37 1.34 1 1.51H20a2 2 0 012 2v2a2 2 0 01-2 2h-.09c-.7 0-1.34.37-1.51 1z"></path>
                </svg>
                <span className="ml-4">Settings</span>
              </Link>
            </li>
            <li className="relative px-6 py-3">
              <button
                className="inline-flex items-center justify-between w-full text-sm font-semibold text-black"
                onClick={toggleAccountMenu}
                aria-haspopup="true"
              >
                <span className="inline-flex items-center">
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                  <span className="ml-4">Account</span>
                </span>
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {isAccountMenuOpen && (
                <ul
                  className="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-white rounded-md shadow-inner bg-violet-800"
                  aria-label="submenu"
                >
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-violet-200">
                    <Link className="w-full" href="/login/page.tsx">
                      Login
                    </Link>
                  </li>
                  <li className="px-2 py-1 transition-colors duration-150 hover:text-violet-200">
                    <Link className="w-full" href="/create-account">
                      Create account
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;