"use client";

import React, { useState } from "react";

// Book type
interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
}

interface TablesProps {
  books: Book[];
}

const Tables: React.FC<TablesProps> = ({ books: initialBooks }) => {
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