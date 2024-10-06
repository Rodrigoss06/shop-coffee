import React from 'react'

function Introduction() {
  return (
    <section className="w-full  bg-[#FFFEFC]">
        <div className="px-20 flex justify-between items-center gap-[95px] mt-[82px]">
          <div className="flex flex-col gap-[29px] items-start max-w-[585px]">
            <h2 className="text-[#603809] font-bold text-5xl">
              Discover the best coffee
            </h2>
            <p className="text-[#707070] text-xl text-pretty">
              Bean Scene is a coffee shop that provides you with quality coffee
              that helps boost your productivity and helps build your mood.
              Having a cup of coffee is good, but having a cup of real coffee is
              greater. There is no doubt that you will enjoy this coffee more
              than others you have ever tasted.
            </p>
            <button className="bg-[#F9C06A] text-[#1E1E1E] font-bold text-base px-[23px] py-[13px] rounded-3xl">
              Learn More
            </button>
          </div>
          <img src="/Mask_group.png" alt="cofee" />
        </div>

      </section>
  )
}

export default Introduction