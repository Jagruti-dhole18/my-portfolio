import { HERO_CONTENT } from "../constants";
import profile from "../assets/image.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35" id="hero">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-cyan-50 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Jagruti Dhole
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="text-cyan-50 my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="flex justify-center">
          <motion.div
            whileHover={{ y: -20, scale: 1.05 }} 
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex flex-col items-center space-y-4"
          >
          
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profile}
              alt="Jagruti Image"
              className="h-[550px] w-[550px] rounded-full object-cover border-4 border-purple-500 shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
