import React from 'react'

function Subscribe() {
  return (
    <section
    className="flex flex-col items-center py-[80px] px-[193px]"
    style={{
      backgroundImage: `url('/coffee/backgroundOpacity.png'), url('/coffee/backgroundCoffee.png')`,
      backgroundPosition: "center center, center center",
      backgroundSize: "cover, cover",
      backgroundRepeat: "no-repeat, no-repeat",
    }}
  >
    <div className="flex flex-col items-center gap-4 mb-[26px]">
      <h2 className=" font-bold text-5xl">
        Subscribe to get the Latest News
      </h2>
      <span className="text-xl text-center">
        Don’t miss out on our latest news, updates, tips and special offers
      </span>
    </div>
    <div className="flex">
      <input
        type="text"
        placeholder="Enter your mail"
        className="py-4 pl-[26px] pr-[339px]"
      />
      <button className="bg-[#F9C06A] text-[#603809] font-bold text-xl px-6 py-4">
        Suscribe
      </button>
    </div>
  </section>
  )
}

export default Subscribe