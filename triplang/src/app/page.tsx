"use client";

import React from "react";
import Navbar from "./dashboard/navbar";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
    </div>
  );
};

export default Home;