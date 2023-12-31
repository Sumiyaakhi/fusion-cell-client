import React from 'react';
import logo from "../../assets/Fusion Cell logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
    
    const navItem = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/brands">Brands</Link></li>
    <li><Link to="/">Home</Link></li>
    </>
    return (
        <div className=''>
            <div className="navbar fixed z-10 opacity-50 bg-black text-white font-bold mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItem}
      </ul>
    </div>
    <Link to='/'> <h1 className='font-serif text-2xl ms-4'>FusionCell Shop</h1> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navItem}
    </ul>
  </div>
  <div className="navbar-end me-5">
   <Link to='/login'><button className='btn bg-white text-black hover:rounded-full '>Login</button></Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;