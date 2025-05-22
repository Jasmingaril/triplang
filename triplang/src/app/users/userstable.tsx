"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

// Book type
interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface ViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  book?: Book;
}

const ViewModal: React.FC<ViewModalProps> = ({ isOpen, onClose, book }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-black shadow-lg">
        <h2 className="text-xl font-semibold mb-4">View Book Details</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Book ID</label>
          <input
            type="text"
            value={book.id}
            disabled
            className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input
            type="text"
            value={book.title}
            disabled
            className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            value={book.author}
            disabled
            className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Genre</label>
          <input
            type="text"
            value={book.genre}
            disabled
            className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Publication Date</label>
          <input
            type="text"
            value={book.publicationDate}
            disabled
            className="w-full px-3 py-2 border rounded bg-gray-100 text-gray-500"
          />
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

interface TablesProps {
  books: Book[];
}

const Tables: React.FC<TablesProps> = ({ books: initialBooks }) => {
  const router = useRouter();

  const [books, setBooks] = useState<Book[]>(initialBooks);

  React.useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  return (
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs relative">
      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-violet-700 text-white">
              <th className="px-4 py-2 text-left border-b">Book ID</th>
              <th className="px-4 py-2 text-left border-b">Book Title</th>
              <th className="px-4 py-2 text-left border-b">Author</th>
              <th className="px-4 py-2 text-left border-b">Genre</th>
              <th className="px-4 py-2 text-left border-b">Publication Date</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{book.id}</td>
                <td className="px-4 py-2 border-b">{book.title}</td>
                <td className="px-4 py-2 border-b">{book.author}</td>
                <td className="px-4 py-2 border-b">{book.genre}</td>
                <td className="px-4 py-2 border-b">{book.publicationDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;