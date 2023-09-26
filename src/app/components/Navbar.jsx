import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <nav>
        <div>
            <Link href={"/"}LOGO></Link>
            <div className="menu"></div>
        </div>
    </nav>
  )
}

export default Navbar