import { EXPERIENCES } from "../constants/index";
import { motion } from "framer-motion";

function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-24 mt-10 mx-auto max-w-5xl">
      {/* Increased max width */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-5xl lg:text-6xl"
      >
        Experience
      </motion.h1>
      <div className="space-y-12">
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1 }}
            className="rounded-lg border border-neutral-800 bg-neutral-950 p-8 shadow-lg"
          >
            <div className="flex justify-between items-center mb-4">
              <h6 className="text-2xl font-semibold text-white">
                {experience.role} -{" "}
                <span className="text-lg text-teal-300">
                  {experience.company}
                </span>
              </h6>
              <p className="text-lg text-teal-400">{experience.year}</p>
            </div>
            <ul className="list-disc list-outside pl-5 space-y-2 text-neutral-400 mb-4">
              {/* Left-aligned bullets */}
              {experience.description.map((sentence, index) => (
                <li key={index} className="text-base">
                  {" "}
                  {/* Reduced text size */}
                  {sentence}
                </li>
              ))}
            </ul>
            <h5 className="text-xl font-semibold text-teal-400 mb-2">
              Key Achievements:
            </h5>
            <ul className="list-disc list-outside pl-5 space-y-2 text-neutral-400">
              {experience.keyAchievements.map((achievement, index) => (
                <li key={index} className="text-lg">
                  {achievement}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
