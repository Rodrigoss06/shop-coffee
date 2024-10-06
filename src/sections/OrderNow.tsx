import React from 'react'

function OrderNow() {
  return (
    <section
        className="flex justify-between items-center w-full py-14  pl-24 pr-[140px]"
        style={{
          backgroundImage: `url('/coffee/coffee_bean.png'), url('/coffee/backgroundOpacity.png'), url('/coffee/backgroundCoffee.png')`,
          backgroundPosition: "right center, center center, center center",
          backgroundSize: "contain, cover, cover",
          backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        }}
      >
        <div className='flex flex-col gap-[29px] items-start max-w-[585px]'>
          <h2 className='font-bold text-5xl'>Get a chance to have an Amazing morning</h2>
          <p className='text-xl text-pretty'>
            We are giving you are one time opportunity to experience a better
            life with coffee.
          </p>
          <button className='text-[#1E1E1E] bg-[#F9C06A] font-bold text-base px-[26px] py-[13px] rounded-3xl'>Order Now</button>
        </div>
        <img src="/coffee/cup.png" alt="cup coffee" />
      </section>
  )
}

export default OrderNow