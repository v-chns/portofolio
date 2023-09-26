import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8'>
           {/* logo */}
            <Link href={"/"}>
                <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={70}
                    height={70}
                    className="w-[80px] h-[80px] lg:w-[100px] lg:h-[100px] relative"
                />
            </Link>
            {/* menu */}
            <div className="menu hidden md:block md:w-auto" id="navbar">
                <ul>
                    <li><Link href={"#about"} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">About me</Link></li>    
                </ul>   
            </div>
        </div>
    </nav>
  )
}

export default Navbar