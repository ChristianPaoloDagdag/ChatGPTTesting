import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black text-white">
      <div className="text-lg font-bold">
        <a href="#">My Website</a>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
          >
            Home
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200 mr-4"
          >
            About Me
          </a>
          <a
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-teal-200"
          >
            Why Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
