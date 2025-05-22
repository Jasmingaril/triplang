"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CreateAccount = () => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Placeholder for the API endpoint for account creation
    const apiEndpoint = "/api/create-account";

    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to create account");
      }

      // Handle successful account creation
    } catch (error) {
      // Optionally, show an error message to the user
    }
  };

  return (
    <div className="flex items-center min-h-screen p-6 bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
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
                Create account
              </h1>
              <form onSubmit={handleSubmit}>
                <label className="block text-sm">
                  <span className="text-gray-700">Full Name</span>
                  <input
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    className="block w-full mt-1 text-sm border border-gray-300 rounded-lg shadow-sm px-4 py-2"
                    placeholder="Enter your fullname"
                    type="text"
                    required
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full mt-1 text-sm border border-gray-300 rounded-lg shadow-sm px-4 py-2"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Password</span>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full mt-1 text-sm border border-gray-300 rounded-lg shadow-sm px-4 py-2"
                    placeholder="Enter your password"
                    type="password"
                    required
                  />
                </label>
                <label className="block mt-4 text-sm">
                  <span className="text-gray-700">Confirm Password</span>
                  <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="block w-full mt-1 text-sm border border-gray-300 rounded-lg shadow-sm px-4 py-2"
                    placeholder="Enter your password again"
                    type="password"
                    required
                  />
                </label>
                <button
                  type="submit"
                  className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                >
                  Create account
                </button>
              </form>
              <p className="mt-4">
                <Link href="/login" className="text-sm font-medium text-purple-600 hover:underline">
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;