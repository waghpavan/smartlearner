import React from 'react';
import logo from './assets/logo.png'

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authAction } from '../store';


const Navbar = () => {
  
  const isLoggedIn = useSelector((state) => state.isLoggedIn)
  const dispatch = useDispatch(); 
  const handleLogout = () => {
    dispatch(authAction.logout())
    sessionStorage.removeItem("Id");
  }
  return (
    <header className="sticky pt-1 top-0 pr-48 pl-48 flex bg-purple-50 text-black justify-between">
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
                {!isLoggedIn && <a href="/Login">
                    <button className="rounded-full bg-blue-500 text-[#fff] hover:bg-blue-600 py-2 px-12 mr-4">
                      Login
                    </button>
                  </a>
                }
                { isLoggedIn && <button onClick={handleLogout} className="rounded-full bg-red-500 text-[#fff] hover:bg-red-600 py-2 px-12 mr-4">
                  Logout
                </button>
              }
            </div>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
