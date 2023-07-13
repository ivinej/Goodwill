import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom'

const Nav3 = () => {
  return (
    <div> 
    <div className='ml-4 mr-4'>
    <nav className="bg-white py-4 px-6 flex items-center justify-between w-full">
      <ul className="flex justify-between items-center text-black w-full">
        <li className="hover:text-blue-200 cursor-pointer"><Link to="/Alumhome/feed">Feed</Link></li>
        <li className="hover:text-blue-200 cursor-pointer"><Link to="/Alumhome/sponsorships">Sponsorships</Link></li>
        <li className="hover:text-blue-200 cursor-pointer"><Link to="/Alumhome/internships">Internships</Link></li>
        <li className="hover:text-blue-200 cursor-pointer"><Link to="/chat">Chat</Link></li>
        <li className="hover:text-blue-200 cursor-pointer"><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    </div>
    <Outlet/>
    </div>

  );
};

export default Nav3;
