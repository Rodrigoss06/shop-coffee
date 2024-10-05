import Navbar from "@/components/Navbar";
import React from "react";

function Header() {
  return (
    <header className="w-full h-full bg-cover bg-white flex flex-col justify-center items-center relative">
      <Navbar />
      <div className="text-center max-w-lg mx-auto bg-white">
        <p className="text-white mb-2">We’ve got your morning covered with</p>
        <h1 className="text-4xl font-bold text-white mb-4">Coffee</h1>
        <p className="text-white mb-6">
          It is best to start your day with a cup of coffee. Discover the best
          flavours coffee you will ever have. We provide the best for our
          customers.
        </p>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded">
          Order Now
        </button>
      </div>
    </header>
  );
}

export default Header;
