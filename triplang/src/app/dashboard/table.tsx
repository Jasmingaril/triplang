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

// EditModal component
interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (book: Book) => void;
  book?: Book;
}

const EditModal: React.FC<EditModalProps> = ({ isOpen, onClose, onSave, book }) => {
  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");
  const [genre, setGenre] = useState(book?.genre || "");
  const [publicationDate, setPublicationDate] = useState(book?.publicationDate || "");

  React.useEffect(() => {
    setTitle(book?.title || "");
    setAuthor(book?.author || "");
    setGenre(book?.genre || "");
    setPublicationDate(book?.publicationDate || "");
  }, [book]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!book) return;
    onSave({
      id: book.id,
      title,
      author,
      genre,
      publicationDate,
    });
    onClose();
  };

  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-black shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Book</h2>
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
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Edit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ViewModal component
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

// DeleteModal component
interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: (id: number) => void;
  book?: Book;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isOpen, onClose, onDelete, book }) => {
  if (!isOpen || !book) return null;

  return (
    <div className="fixed inset-0 bg-opacity-10 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md text-black shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-red-600 text-center">Delete Book</h2>
        <div className="mb-6 text-center">
          Are you sure you want to delete <span className="font-bold">{book.title}</span>?
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>
          <button
            onClick={() => onDelete(book.id)}
            className="px-4 py-2 bg-red-600 text-white rounded"
          >
            Delete
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
  const [books, setBooks] = useState<Book[]>(initialBooks);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
  const [showEditSuccess, setShowEditSuccess] = useState(false);
  const [showDeleteSuccess, setShowDeleteSuccess] = useState(false);

  React.useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  const handleEdit = (id: number) => {
    const book = books.find(b => b.id === id);
    setSelectedBook(book);
    setEditModalOpen(true);
  };

  const handleView = (id: number) => {
    const book = books.find(b => b.id === id);
    setSelectedBook(book);
    setViewModalOpen(true);
  };

  const handleDelete = (id: number) => {
    const book = books.find(b => b.id === id);
    setSelectedBook(book);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = (id: number) => {
    setBooks(books.filter(b => b.id !== id));
    setDeleteModalOpen(false);
    setShowDeleteSuccess(true);
    setTimeout(() => setShowDeleteSuccess(false), 2000);
  };

  const handleSave = (updatedBook: Book) => {
    setBooks(books.map(b => (b.id === updatedBook.id ? updatedBook : b)));
    setShowEditSuccess(true);
    setTimeout(() => setShowEditSuccess(false), 2000);
  };

  return (
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs relative">
      {/* Edit Modal */}
      <EditModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSave={(book) => {
          handleSave(book);
          setEditModalOpen(false);
        }}
        book={selectedBook}
      />
      {/* View Modal */}
      <ViewModal
        isOpen={viewModalOpen}
        onClose={() => setViewModalOpen(false)}
        book={selectedBook}
      />
      {/* Delete Modal */}
      <DeleteModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onDelete={handleConfirmDelete}
        book={selectedBook}
      />

      {/* Success message for edit */}
      {showEditSuccess && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-all">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Books Edited Successfully
        </div>
      )}

      {/* Success message for delete */}
      {showDeleteSuccess && (
        <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-[100] flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded shadow-lg transition-all">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Books Deleted Successfully
        </div>
      )}

      <div className="w-full overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead>
            <tr className="bg-violet-700 text-white">
              <th className="px-4 py-2 text-left border-b">Book ID</th>
              <th className="px-4 py-2 text-left border-b">Book Title</th>
              <th className="px-4 py-2 text-left border-b">Author</th>
              <th className="px-4 py-2 text-left border-b">Genre</th>
              <th className="px-4 py-2 text-left border-b">Publication Date</th>
              <th className="px-4 py-2 text-center border-b">Action</th>
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
                <td className="px-4 py-2 border-b text-center">
                  <button
                    onClick={() => handleEdit(book.id)}
                    className="text-blue-500 hover:text-blue-700 mx-1"
                    title="Edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleView(book.id)}
                    className="text-green-500 hover:text-green-700 mx-1"
                    title="View"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDelete(book.id)}
                    className="text-red-500 hover:text-red-700 mx-1"
                    title="Delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tables;