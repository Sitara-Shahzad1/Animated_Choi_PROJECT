import { motion } from "framer-motion";

import React from "react";

const Marquee = () => {

  
  return (
    <div  data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-4xl rounded-tr-4xl  bg-green-900 text-white">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none  font-['Founders Grotesk'] pr-10  uppercase  tracking-tighter font-extrabold "
        >
          We are Stars
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] leading-none  font-['Founders Grotesk']  uppercase tracking-tighter font-extrabold "
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
