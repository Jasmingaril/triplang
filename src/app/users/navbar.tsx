"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar";
import Table from "./userstable";
import Link from "next/link";
import Image from "next/image";

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const books: Book[] = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publicationDate: "1960-07-11",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publicationDate: "1949-06-08",
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      publicationDate: "1925-04-10",
    },
  ];

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase()) ||
      book.genre.toLowerCase().includes(search.toLowerCase())
  );

  const toggleProfileMenu = () => setProfileMenuOpen((v) => !v);
  const closeProfileMenu = () => setProfileMenuOpen(false);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50">
        <header className="z-10 py-4 bg-white shadow-md">
          <div className="container flex items-center h-full px-6 mx-auto text-purple-600">
            <Link
              className="ml-6 text-lg font-bold text-white bg-violet-700 px-4 py-2 rounded shadow"
              href=""
            >
              Library Management System
            </Link>
            <div className="flex items-center flex-1 justify-center">
              <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  className="w-full pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md focus:placeholder-gray-500 focus:bg-gray focus:border-purple-700 focus:outline-none focus:shadow-outline-purple form-input"
                  type="text"
                  placeholder="Search for books"
                  aria-label="Search"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
              </div>
            </div>
            {/* Profile menu */}
            <div className="relative ml-4">
              <button
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                onClick={toggleProfileMenu}
                aria-label="Account"
                aria-haspopup="true"
              >
                <Image
                  className="object-cover w-8 h-8 rounded-full"
                  src="/profile-circle.png"
                  alt="user profile"
                  width={32}
                  height={32}
                  aria-hidden="true"
                />
              </button>
              {isProfileMenuOpen && (
                <ul
                  className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md"
                  onMouseLeave={closeProfileMenu}
                  aria-label="submenu"
                >
                  <li className="flex">
                    <Link
                      className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      href="#"
                    >
                      <svg
                        className="w-4 h-4 mr-3"
                        aria-hidden="true"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      <span>Profile</span>
                    </Link>
                  </li>
                  <li className="flex">
                    <Link
                      className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800"
                      href="/login"
                    >
                      <svg
                        className="w-4 h-4 mr-3"
                        aria-hidden="true"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                      </svg>
                      <span>Log out</span>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </header>
        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-black">
              Books
            </h2>
            <Table books={filteredBooks} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;