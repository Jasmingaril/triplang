"use client";

import React from "react";
import Navbar from "./navbar";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Home;