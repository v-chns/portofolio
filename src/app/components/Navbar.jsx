"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: "About Me",
        path: "#aboutme"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact me",
        path: "#contactme"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#1a1a1a] bg-opacity-80 backdrop-blur-sm">
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-10 py-2 lg:px-[5rem]'>
                {/* logo */}
                <Link href={"/"}>
                    <Image
                        src="https://v-chns.github.io/portofolio/images/logo.png"
                        alt="logo"
                        width={50}
                        height={50}
                        className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] relative"
                    />
                </Link>
                {/* hamburger menu */}
                <div className="mobile-menublock md:hidden">
                    { !navbarOpen ? (
                            <button onClick={()=> setNavbarOpen(true)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                                <Bars3Icon className="h-5 w-5"/>
                            </button>
                        ) : (
                            <button onClick={()=> setNavbarOpen(false)} className="flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white text-slate-200">
                                <XMarkIcon className="h-5 w-5"/>
                            </button>
                        )
                    }
                </div>

                {/* menu */}
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks}/> : null}
        </nav>
    )
}

export default Navbar