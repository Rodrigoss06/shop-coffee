import React from 'react'

function Navbar() {
  return (
    <nav className='fixed flex justify-between w-full p-3 top-0 px-40 text-white font-PlayfairDisplay mt-[20px] '>
        <span className='font-ClickerScript text-4xl'>Bean Scene</span>
        <ul className='gap-[60px] flex font-medium text-sm'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
        </ul>
        <ul className='flex gap-[35px] font-medium text-sm items-center mt-[-27px]'>
            <li>Sign In</li>
            <li className='bg-[#F9C06A] text-[#1E1E1E] px-[27px] py-[14px] rounded-3xl'>Sing Up</li>
        </ul>
    </nav>
  )
}

export default Navbar