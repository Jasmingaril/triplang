"use client";

import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import CreateAccount from "../create-account/page"; 

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default Home;