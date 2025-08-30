import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const slides = [
  { text: "✨ Welcome to our page ✨", color: "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" },
  { text: "🚀 You will enjoy here 🚀", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { text: "💡 Discover Creativity and Innovation at Star’s Creation 🌟", color: "bg-gradient-to-r from-emerald-500 to-lime-500" },
];

const VideoReveal = ({ children }) => {
  const [showSlides, setShowSlides] = useState(true);

  useEffect(() => {
    // Hide after 4.5s
    const timer = setTimeout(() => {
      setShowSlides(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSlides && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
        >
          <div className="relative w-[800px] h-[450px] overflow-hidden rounded-2xl shadow-2xl">
            {slides.map((slide, i) => (
              <motion.div
                key={i}
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                  ease: [0.76, 0, 0.24, 1],
                  duration: 1,
                  delay: i * 1.2,
                }}
                className={`absolute top-0 left-0 w-full h-full flex items-center justify-center ${slide.color}`}
              >
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-3xl font-extrabold text-white text-center drop-shadow-lg"
                >
                  {slide.text}
                </motion.h1>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoReveal;
