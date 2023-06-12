import React from 'react';
import logo from '../images/Netflix-Logo-768x432-removebg-preview.png';
import './Homepage.css';
import { BiBell } from 'react-icons/bi';

export const Nav = () => {
  return (
    <div className="Navbar">
        <div>
      <img className="Logo" src={logo} alt="" />
      <div className="NavItems">
        <h3>Home</h3>
        <h3>TV Shows</h3>
        <h3>Movies</h3>
        <h3>New & Popular</h3>
        <h3>My List</h3>
        <h3>Browse by Languages</h3>
      </div>
      </div>
      <div>
      <input className="NavInput" type="text" placeholder='Titles,people,genres' />
      <h3 className="User">User</h3>
      <h3 className="NotifLogo">
        <BiBell />
      </h3>
      <img className="userImage" src="" alt="userImage" />
      </div>
    </div>
  );
};
