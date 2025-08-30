import React from "react";

const Cards = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".5"   className="w-full h-screen rounded-2xl flex px-20 items-center gap-10 bg-zinc-100">
      <div className="cardcontainer rounded-2xl  h-[50vh] w-1/2">
        <div className="card w-full  relative items-center rounded-2xl flex justify-center h-full bg-[#004D43]">
          <img
            className="items-center w-60   "
            src="..\src\assets\ochi-logo.svg"
            alt=""
          />
          <div className="card-text absolute w-full bottom-15 left-10">
            <a
              href="/"
              className="text-[#CDEA68] border-2 text-2xl rounded-3xl   border-[#CDEA68] p-2 px-4 font-bold "
            >
              ©2019–2025
            </a>
          </div>
        </div>
      </div>

      <div className="cardcontainer  flex gap-10 h-[50vh] w-1/2">
        <div className="card rounded-2xl relative items-center  flex justify-center  w-1/2 h-full bg-[#212121]">
          <img
            className="items-center w-60   "
            src="..\src\assets\Clutch.svg"
            alt=""
          />
          <div className="card-text absolute w-full bottom-15 left-10">
            <a
              href="/"
              className="text-[#F1F1F1]-500 border-2 text-2xl rounded-3xl   border-[#F1F1F1] p-2 px-4 capitalize"
            >
              Rating 5.0 on Clutch
            </a>
          </div>
        </div>
        <div className="card rounded-2xl  w-1/2 h-full bg-[#212121] relative items-center flex justify-center">

          <img
            className="items-center w-50   "
            src="src\assets\academy.png"
            alt=""
          />
          <div className="card-text absolute w-full bottom-15 left-10">
            <a
              href="/"
              className="text-[#F1F1F1]-500 border-2 text-2xl rounded-3xl   border-[#F1F1F1] p-2 px-4 capitalize"
            >
              BUSSINESS BOOTCAMP ALUMNI
            </a>
            </div>
        
        </div>
      </div>
    </div>
  );
};

export default Cards;
