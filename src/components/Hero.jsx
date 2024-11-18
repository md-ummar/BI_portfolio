import React from "react";
import { HERO_CONTENT } from "../constants";
//import resume here
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroImg from "../assets/heroImg.json";
import { Link } from "react-scroll";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero() {
  return (
    <div
      id="hero"
      className="border-b border-neutral-900 px-4 md:px-8 lg:px-16 my-12 "
    >
      <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:justify-between pb-12 pt-12">
        <div className="w-full lg:w-2/3 lg:pr-8">
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center lg:items-start pt-10"
          >
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold text-transparent bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text">
                Hi, I&apos;m
              </h1>
              <br />
              <div className="rubik bg-gradient-to-r from-teal-400 to-teal-200 text-transparent bg-clip-text font-extrabold text-4xl sm:text-5xl lg:text-6xl">
                <p>Mohammed Ummar</p>
              </div>
              <div className="my-3 pt-2 text-2xl text-slate-500 font-semibold">
                <p>Data Analyst</p>
              </div>
            </div>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-4 text-lg font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-6 font-light tracking-tighter text-center md:text-left"
            >
              <Link
                to="projects"
                offset={-100}
                duration={1000}
                smooth={true}
                className="px-4 py-2  border-2 border-teal-500 text-teal-500 font-semibold hover:bg-teal-600 hover:text-white rounded-lg"
              >
                Check out my projects
              </Link>
            </motion.p>
          </motion.div>
        </div>
        {/* Hide the image for medium and below screens */}
        <div className="hidden lg:block w-full lg:w-1/3  justify-center lg:justify-end lg:pl-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="p-4 lg:p-6"
          >
            <Lottie animationData={heroImg} loop={true} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
