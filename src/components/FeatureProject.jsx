import { motion, useAnimation } from "framer-motion";
import React from "react";
import "./Feature.css"; 



const FeatureProject = () => {
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20 ">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>

      {/* //cards structure */}
      <div className="px-20">
        <div className="feature-card cards w-full flex gap-20 flex-1/2 mt-10 items-center">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer  relative w-1/2 h-[75vh] rounded-2xl bg-amber-900"
          >
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2  top-1/2 -translate-y-1/2  text-[#a1bb4b]  z-[9] -mb-10 font-semibold font-[Founder_Grotesk_X] text-8xl">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.3, delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-2xl bg-green-500 overflow-hidden ">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer  relative rounded-2xl w-1/2 h-[75vh]  bg-amber-900"
          >
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2  top-1/2 -translate-y-1/2  text-[#a1bb4b]  z-[9] -mb-10 font-semibold font-[Founder_Grotesk_X] text-8xl">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-2xl bg-green-500 overflow-hidden ">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2025/02/Vise_Front-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>

        <div className="feature-card cards w-full flex gap-20 flex-1/2 mt-10 items-center">
          <motion.div
            onHoverStart={() => handleHover(2)}
            onHoverEnd={() => handleHoverEnd(2)}
            className="cardcontainer  relative w-1/2 h-[75vh] rounded-2xl bg-amber-900"
          >
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2  top-1/2 -translate-y-1/2  text-[#a1bb4b]  z-[9] -mb-10 font-semibold font-[Founder_Grotesk_X] text-8xl">
              {"SALIENCELAB".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.3, delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-2xl bg-green-500 overflow-hidden ">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(3)}
            onHoverEnd={() => handleHoverEnd(3)}
            className="cardcontainer  relative rounded-2xl w-1/2 h-[75vh]  bg-amber-900"
          >
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2  top-1/2 -translate-y-1/2  text-[#a1bb4b]  z-[9] -mb-10 font-semibold font-[Founder_Grotesk_X] text-8xl">
              {"Medallia  Experience".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.3,  delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-2xl bg-green-500 overflow-hidden ">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <div className=" feature-card cards w-full flex gap-20 flex-1/2 mt-10 items-center">
          <motion.div
            onHoverStart={() => handleHover(4)}
            onHoverEnd={() => handleHoverEnd(4)}
            className="cardcontainer  relative w-1/2 h-[75vh] rounded-2xl bg-amber-900"
          >
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2  top-1/2 -translate-y-1/2  text-[#a1bb4b]  z-[9] -mb-10 font-semibold font-[Founder_Grotesk_X] text-8xl">
              {"AH2&MATTHORNS".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[4]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.3, delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-2xl bg-green-500 overflow-hidden ">
              <img
                className="w-full h-full bg-cover opacity-0.8 "
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(5)}
            onHoverEnd={() => handleHoverEnd(5)}
            className="cardcontainer  relative rounded-2xl w-1/2 h-[75vh]  bg-amber-900"
          >
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2  top-1/2 -translate-y-1/2  text-[#a1bb4b]  z-[9] -mb-10 font-semibold font-[Founder_Grotesk_X] text-8xl">
              {"SOFT START".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[5]}
                  transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.3, delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card  w-full h-full rounded-2xl bg-green-500 overflow-hidden ">
              <img
                className="w-full h-full bg-cover "
                src="https://ochi.design/wp-content/uploads/2022/06/Frame-3898-1-1326x1101.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProject;
