import React from 'react'
import coffeeFeatures from "@/data/coffeeFeatures.json";

function WhyDifferent() {
  return (
    <section className="my-[82px] gap-8 flex flex-col items-center relative">
        <div className="gap-4 flex flex-col items-center">
          <h2 className="text-[#603809] font-bold text-6xl">
            Why are we different?
          </h2>
          <span className="text-[#707070] text-xl">
            We don’t just make your coffee, we make your day!
          </span>
        </div>
        <ul className="mx-[93px] gap-5 flex">
          {coffeeFeatures.map((e) => (
            <li className="bg-[#FFEED8] py-9 px-10 flex flex-col items-center max-w-[290px]">
              <img src={e.icon} alt={e.title} />
              <div className="gap-2 mt-[25px] flex flex-col items-center max-w-[211px]">
                <h3 className="text-[#603809] font-bold text-3xl max-w-[211px] text-center">
                  {e.title}
                </h3>
                <p className="text-[#707070] text-xl max-w-176  text-center">
                  {e.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex flex-col items-center">
          <span className="text-[#707070] text-xl">
            Great ideas start with great coffee, Lets help you achieve that
          </span>
          <h3 className="text-[#603809] font-bold text-3xl">
            Get started today.
          </h3>
          <button className="mt-6 font-bold text-base px-[41px] py-[13px] bg-[#F9C06A]  text-black rounded-3xl">
            Join Us
          </button>
        </div>
        <img src="/coffee_blast01.png" alt="coffeeBlast" className='absolute top-[-130px] right-0'/>
      </section>
  )
}

export default WhyDifferent