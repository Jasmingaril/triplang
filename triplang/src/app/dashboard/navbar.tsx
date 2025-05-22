"use client";

import React, { useState } from "react";
import Sidebar from "./sidebar";
import Table from "./table";
import Link from "next/link";

// --- AddBookModal component ---
interface AddBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (book: { title: string; author: string; genre: string; publicationDate: string }) => void;
}

const AddBookModal: React.FC<AddBookModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [publicationDate, setPublicationDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author || !genre || !publicationDate) return;
    onAdd({ title, author, genre, publicationDate });
    setTitle("");
    setAuthor("");
    setGenre("");
    setPublicationDate("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-black shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Add Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Author</label>
            <input
              type="text"
              value={author}
              onChange={e => setAuthor(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Genre</label>
            <input
              type="text"
              value={genre}
              onChange={e => setGenre(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Publication Date</label>
            <input
              type="date"
              value={publicationDate}
              onChange={e => setPublicationDate(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// --- Book type for Table ---
interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

const Navbar = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showAddSuccess, setShowAddSuccess] = useState(false);

  // LIFTED STATE: books
  const [books, setBooks] = useState<Book[]>([
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
  ]);

  // Add book handler
  const handleAddBook = (book: { title: string; author: string; genre: string; publicationDate: string }) => {
    setBooks(prev => [
      ...prev,
      {
        id: prev.length ? Math.max(...prev.map(b => b.id)) + 1 : 1,
        ...book,
      },
    ]);
    setAddModalOpen(false);
    setShowAddSuccess(true);
    setTimeout(() => setShowAddSuccess(false), 2000); // Hide after 2 seconds
  };

  // Filter books by search
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
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <header className="z-10 py-4 bg-white shadow-md">
          <div className="container flex items-center h-full px-6 mx-auto text-purple-600">
            {/* Library Management System title */}
            <Link
              className="ml-6 text-lg font-bold text-white bg-violet-700 px-4 py-2 rounded shadow"
              href="#"
            >
              Library Management System
            </Link>
            {/* Search input */}
            <div className="flex flex-1 justify-center">
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
            {/* Profile menu on the far right */}
            <div className="relative ml-4 flex-shrink-0">
              <button
                className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
                onClick={toggleProfileMenu}
                aria-label="Account"
                aria-haspopup="true"
              >
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src="/profile-circle.png"
                  alt="user profile"
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

        {/* Success message for add */}
        {showAddSuccess && (
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-all">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Added Book Successfully
          </div>
        )}

        <main className="h-full overflow-y-auto">
          <div className="container px-6 mx-auto grid">
            <h2 className="my-6 text-2xl font-semibold text-black">
              Books
            </h2>
            <div className="text-right mb-4">
              <button
                onClick={() => setAddModalOpen(true)}
                className="inline-block px-4 py-2 text-xs font-bold font-stretch-normal text-white bg-blue-600 rounded-md hover:bg-blue-700"
              >
                Add Book
              </button>
            </div>

            {/* Add Book Modal */}
            <AddBookModal
              isOpen={addModalOpen}
              onClose={() => setAddModalOpen(false)}
              onAdd={handleAddBook}
            />

            {/* Pass filtered books as prop to Table */}
            <Table books={filteredBooks} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;