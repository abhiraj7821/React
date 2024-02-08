import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <div className="w-full">
        <header className="relative w-full border-b bg-white pb-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
            <div className="inline-flex items-center space-x-2">
                <Link to='/' className="font-bold">DevUI</Link>
            </div>
            <div className="hidden lg:block">
                <ul className="inline-flex space-x-8">
                
                <li>
                    
                    <NavLink
                    to="/"
                    className={({isActive}) =>`text-sm font-semibold ${isActive ? "text-orange-700" : "text-gray-700"}  hover:text-gray-900 duration-200`}>
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='about'
                    className={({isActive}) =>`text-sm font-semibold ${isActive ? "text-orange-700" : "text-gray-700"}  hover:text-gray-900 duration-200`}>
                    About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='contact'
                    className={({isActive}) =>`text-sm font-semibold ${isActive ? "text-orange-700" : "text-gray-700"}  hover:text-gray-900 duration-200`}>
                    Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    to='blogs'
                    className={({isActive}) =>`text-sm font-semibold ${isActive ? "text-orange-700" : "text-gray-700"}  hover:text-gray-900 duration-200`}>
                    Blogs
                    </NavLink>
                </li>
                </ul>
            </div>
            <div className="hidden lg:block">
                <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                Button text
                </button>
            </div>
            <div className="lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="h-6 w-6 cursor-pointer"
                >
                <line x1="4" y1="12" x2="20" y2="12"></line>
                <line x1="4" y1="6" x2="20" y2="6"></line>
                <line x1="4" y1="18" x2="20" y2="18"></line>
                </svg>
            </div>
            </div>
        </header>
        </div>
    )
}

export default Header
