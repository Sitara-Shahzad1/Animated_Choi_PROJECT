import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import ochiAnimation from "../assets/ochiAnimation.jpg";
const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure tracking-tighter  mt-62 px-20  ">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker  overflow-hidden ">
              <div className="w-fit flex  ">
                {index === 1 && (
                  // <motion.div
                  //   initial={{ width: 0 }}
                  //   animate={{ width: "9vw" }}
                  //   transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                  //   className="mr-5 w-[8vw] rounded-md top-[1vw]  h-[5vw] relative  bg-red-500"
                  // >
                  //   <img
                  //     className="absolute  top-0 left-0 w-full h-full object-cover"
                  //     src={ochiAnimation}
                  //     alt=""
                  //   />
                  // </motion.div>

                  <motion.div
  initial={{ width: 0 }}
  animate={{ width: "9vw" }}
  transition={{
    ease: [0.76, 0, 0.24, 1],
    duration: 1,
    delay: 4.5, // ⏳ wait until VideoReveal finishes
  }}
  className="mr-5 w-[8vw] rounded-md top-[1vw] h-[5vw] relative bg-red-500"
>
  <img
    className="absolute top-0 left-0 w-full h-full object-cover"
    src={ochiAnimation}
    alt=""
  />
</motion.div>
                )}
                <h1 className="flex items-center uppercase text-[7vw] leading-[7vw] h-full  font-['Founders Grotesk'] tracking-tighter font-extrabold ">
                  {" "}
                  {item}{" "}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] text-xl m-23 border-zinc-700 mt-32 flex justify-between cursor-pointer items-center py-5 ">
        {[
          "For Public and private compaines",
          "From the first pitch to IPO",
        ].map((item, idx) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}

        <div className="start flex items-center gap-5">
          {/* Outer Button/Chip */}
          <div className="px-5 py-2 border border-zinc-400 rounded-full cursor-pointer font-light text-sm capitalize flex items-center gap-3">
            {/* Circular Icon Button */}
            START THE PROJECT
            <div className="w-10 h-10 flex items-center justify-center border border-zinc-400 rounded-full">
              <span className="rotate-45">
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
