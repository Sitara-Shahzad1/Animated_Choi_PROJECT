import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>

      <h1 className="font-[Neue_Montreal] text-[4vw] leading-[4vw] tracking-tight  " >Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain ccomplex ideas, and hire great people.</h1>
     
     <div className="w-full flex gap-5 border-t-[1px] mt-22 border-[#a1bb4b]">
      <div className="w-1/2 ">
          <h1 className="text-7xl ">Our approach:</h1>
          <button className="flex uppercase gap-10 px-10 py-6 bg-zinc-900 rounded-full text-white cursor-pointer mt-10 items-center ">Read More
            <div className="w-3 h-3 bg-zinc-50 rounded-full "></div>

          </button>
      </div>
      <div className="w-1/2 h-[60vh] bg-[#93ab3e] rounded-3xl"></div>
     </div>
    </div>
  )
}

export default About