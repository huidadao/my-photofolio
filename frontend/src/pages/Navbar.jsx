import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Navbar = () => {
    const location = useLocation();
    
    const pathMatchRoute = (route) => {
      if (route === location.pathname) {
        return true;
      }
    };

    return (
      <header className="bg-rose-600">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex">
            <NavLink 
              to="/" 
              className={`inline-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold tracking-widest ${pathMatchRoute("/") && "text-white"}`}
            >
              Hui
            </NavLink>

            <NavLink 
              to="/post"
              className={`inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ${pathMatchRoute("/post") && "text-red-100 bg-rose-500"}`}
            >
              Blog Posts
            </NavLink>

            <NavLink 
              to="/project"
              className={`inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ${pathMatchRoute("/project") && "text-red-100 bg-rose-500"}`}
            >
              Project
            </NavLink>

            <NavLink 
              to="/about"
              className={`inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800 ${pathMatchRoute("/about") && "text-red-100 bg-rose-500"}`}
            >
              About Me!
            </NavLink>
          </nav>

          <div className="">
            <SocialIcon url="https://twitter.com/" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
            <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
            <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={{height: 35, width: 35}} />
          </div>
        </div>
      </header>
    )
}

export default Navbar