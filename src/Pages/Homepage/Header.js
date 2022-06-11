import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  const navLink = <>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/blog'>Blog</Link>
    <a href='home#project'>Projects</a>
    <a href='home#contact'>Contact</a>
    
  </>
  return (
    <div class="navbar bg-base-100 w-11/12 mx-auto">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-2">
            {navLink}
          </ul>
        </div>
        <a class="btn btn-ghost normal-case text-xl">Md Asgar Sani</a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 gap-2">
          {navLink}
        </ul>
      </div>
      <div class="navbar-end">
        <a href='https://www.fiverr.com/bm_sani' class="btn rounded-none btn-primary text-white border-none" target='_blank'>Hire me</a>
      </div>
    </div>
  );
};

export default Header;