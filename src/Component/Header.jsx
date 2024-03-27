import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Header = () => {

    const links = <>
        <nav className='flex flex-col md:flex-row lg:flex-rowl xl:flex-row'>
       <NavLink to={'/'} className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to={'/listed-book'} className={({ isActive }) => (isActive ? 'active' : '')}>Listed Books</NavLink>
        <NavLink to={'/read-page'} className={({ isActive }) => (isActive ? 'active' : '')}>Pages to Read</NavLink>
        <NavLink to={'/book_series'} className={({ isActive }) => (isActive ? 'active' : '')}>B-Series</NavLink>
        <NavLink to={'/Book_swapping'} className={({ isActive }) => (isActive ? 'active' : '')}>B-Swapping</NavLink>
        </nav>  
        

        
    </>
    return (
        <div>
            <div className="navbar   flex justify-between">
                <div className="navbar-start w-auto">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content 
                        mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className=" text-2xl text-[#070707f9] font-bold">Book Vibe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal">
                    {links}
                    </ul>
                </div>
                <div className="w-auto navbar-end flex gap-5 justify-end">
                    <button className="buttom bg-[#23BE0A] text-white ">Sign In</button>
                    <button className="buttom bg-[#59C6D2] text-white px-7">Sign Up</button>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;