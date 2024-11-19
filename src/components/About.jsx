import { ABOUT_TEXT } from "../constants/index";
import { motion } from "framer-motion";
import professionalPhoto from "/professionalpic.jpg"; // Add the path to your professional photo

function About() {
  return (
    <div id="about" className="px-4 md:px-8 lg:px-16 my-8 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="mb-6 md:pt-12 text-left text-4xl lg:text-5xl font-semibold"
      >
        About
        <span className="text-neutral-500"> Me</span>
      </motion.h2>
      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/3"
        >
          {/* Render ABOUT_TEXT as bullet points */}
          <ul className="space-y-4 text-lg leading-relaxed pr-5">
            {ABOUT_TEXT.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/3 flex justify-center lg:justify-center lg:mt-0 mt-10"
        >
          <div className="h-[370px] w-[270px] rounded-lg border-2 border-teal-200 p-1 shadow-lg mb-10">
            {/* Replace Lottie with an image */}
            <img
              src={professionalPhoto}
              alt="Professional"
              className="h-full w-full object-contain rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
