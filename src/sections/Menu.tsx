import React from 'react'
import coffeeMenu from "@/data/coffeeMenu.json";
function Menu() {
  return (
    <section className="flex flex-col items-center gap-8 mt-[82px] relative">
        <div className=" flex flex-col items-center gap-4">
          <h2 className="text-[#603809] font-bold  text-5xl">
            Enjoy a new blend of coffee style
          </h2>
          <span className="text-[#707070] text-xl">
            Explore all flavours of coffee with us. There is always a new cup
            worth experiencing
          </span>
        </div>
        <ul className="flex gap-5">
          {coffeeMenu.map((e) => (
            <li className="bg-[#FFF9F1] flex flex-col items-center relative outline outline-1 outline-[#F9C06A42]">
              <img src={e.image} alt={e.name} className="w-full h-[222px]" />
              <div className="flex flex-col items-center pb-[18px]">
                <h3 className="text-[#603809] font-bold text-xl">{e.name}</h3>
                <p className="text-[#1E1E1E] text-base">{e.description}</p>
                <span className="text-[#603809] font-bold text-lg">
                  ${e.price}
                </span>
              </div>
              <button className="bg-[#F9C06A] text-[#1E1E1E] font-bold text-base px-[26px] py-[13px] rounded-3xl absolute bottom-[-30px]">
                Order Now
              </button>
            </li>
          ))}
        </ul>
        <img src="/coffee_blast.png" alt="coffeeBlast" className='top-[-240px] left-0 absolute'/>
      </section>
  )
}

export default Menu