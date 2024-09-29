import React from 'react';
import logo from './assets/logo.png'
const Navbar = () => {
  return (
    <header className="sticky top-0 pr-48 pl-48 flex bg-purple-50 text-black justify-between">
      <div id="logo">
        <a href={window.location.href}>
          <img src={logo} alt="LOGO" className="h-12 rounded-full p-1" />
        </a>
      </div>
      <nav>
        <ul className="flex flex-row gap-8 text-sm justify-between items-center">
          <li className="hover:text-blue-500"><a href="/">Home</a></li>
          <li className="hover:text-blue-500"><a href="/Courses">Courses</a></li>
          {/* <li className="hover:text-blue-500"><a href="/UserTest">UserTest</a></li> */}
          <li className="hover:text-blue-500"><a href="/mycourses">My Courses</a></li>
          <li className="hover:text-blue-500"><a href="/Dashboard">My Dashboard</a></li>
          <div className="flex flex-row gap-6 justify-between items-center text-gray-600">
            <div className="flex gap-12">
              <a href="login">
                <button className="rounded-full bg-blue-500 text-[#fff] hover:bg-blue-600 py-2 px-12 mr-4">
                  Login
                </button>
              </a>
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
