'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }
    // Add your login logic here
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="hidden md:block md:w-1/2">
            <Image
              aria-hidden="true"
              className="object-cover w-full h-full"
              src="/library.png"
              alt="Library"
              width={500}
              height={500}
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700">
                Login
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Email</span>
                  <input
                    className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Password</span>
                  <input
                    className="block w-full px-4 py-2 mt-1 text-sm border border-gray-300 rounded-lg shadow-sm"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium text-white bg-purple-600 rounded-lg hover:bg-purple-700"
                >
                  Log in
                </button>
              </form>
              <p className="mt-4">
                <Link
                  className="text-sm font-medium text-purple-600 hover:underline"
                  href="/forgot-password"
                >
                  Forgot your password?
                </Link>
              </p>
              <p className="mt-1">
                <Link
                  className="text-sm font-medium text-purple-600 hover:underline"
                  href="/create-account"
                >
                  Create account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;