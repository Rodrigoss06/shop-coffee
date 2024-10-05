import React from 'react'

function Navbar() {
  return (
    <nav className='fixed flex justify-between w-full p-3 top-0 px-40'>
        <span>Bean Scene</span>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <ul>
            <li>Sign In</li>
            <li>Sing Up</li>
        </ul>
    </nav>
  )
}

export default Navbar