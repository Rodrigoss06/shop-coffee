import React from 'react'

function Feedback() {
  return (
    <section className="w-full relative flex flex-col items-center my-[82px]">
        <div className="mb-[45px]">
          <div className="w-full gap-4 flex flex-col items-center">
            <h2 className="text-[#603809] font-bold text-5xl">
              Our coffee perfection feedback
            </h2>
            <span className="text-[#707070] text-xl text-center align-top">
              Our customers has amazing things to say about us
            </span>
          </div>
        </div>
        <div className="bg-[#FFF9F1] mx-[193px]  pb-[70px] flex flex-col justify-center gap-[28px] relative">
            <span className='text-[#603809] text-start font-bold text-[220px] ml-[29px] absolute top-[-40px]'>“</span>
          <p className="px-[100px] text-[#707070] pt-[129px]  font-semibold text-lg text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset.....
          </p>
          <div className="gap-1 relative flex flex-col items-center">
            <h3 className="font-bold text-[#603809] text-4xl">Jonny Thomas</h3>
            <span className="text-xl text-[#707070] ">Project Manager</span>
            <img
              src="/project-manager.png"
              alt="project-manager"
              className="absolute  bottom-[-150px]"
            />
          </div>
        </div>
        <img
          src="/coffee_blast02.png"
          alt="coffee_blast"
          className="absolute bottom-7 left-0"
        />
        <img
          src="/coffee_blast03.png"
          alt="coffee_blast"
          className="absolute top-7 right-0"
        />
      </section>
  )
}

export default Feedback