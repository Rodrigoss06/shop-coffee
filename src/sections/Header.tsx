import Navbar from '@/components/Navbar'
import React from 'react'

function Header() {
  return (
    <section className="w-full z-[-2] h-full bg-cover bg-coffee flex flex-col justify-center items-start relative">
        <div className="w-full h-full bg-overlay bg-cover absolute z-[-1]"></div>
        <Navbar />
        <div className="max-w-[527px] ml-[93px]">
          <p className="font-medium text-[22px]">
            We’ve got your morning covered with
          </p>
          <h1 className="text-[220px] font-ClickerScript">Coffee</h1>
          <p className="text-[20px] [line-height:34px]">
            It is best to start your day with a cup of coffee. Discover the best
            flavours coffee you will ever have. We provide the best for our
            customers.
          </p>
          <button className="bg-[#F9C06A] text-[#1E1E1E] px-[26px] py-[13px] rounded-3xl font-bold text-base mt-5">
            Order Now
          </button>
        </div>
      </section>
  )
}

export default Header