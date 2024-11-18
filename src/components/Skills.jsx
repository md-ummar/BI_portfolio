import { motion } from "framer-motion";

function Skills() {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-24 mt-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl lg:text-5xl"
      >
        Skills
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className=""
      >
        <p className="text-xl mb-6 text-gray-400 text-center ">
          Some of the Languages / Technologies I work with
        </p>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-16 mx-auto text-xl max-w-4xl"
      >
        <ul className="list-disc list-inside space-y-2 text-teal-500">
          <li className="text-white">Power BI</li>
          <li className="text-white">SQL</li>
          <li className="text-white">Python</li>
          <li className="text-white">Data Analysis</li>
        </ul>
        <ul className="list-disc list-inside space-y-2 text-teal-500">
          <li className="text-white">Power Query</li>
          <li className="text-white">DAX</li>
          <li className="text-white">Problem Solving</li>
          <li className="text-white">ETL (Extract, Transform, Load)</li>
        </ul>
        <ul className="list-disc list-inside space-y-2 text-teal-500">
          <li className="text-white">Data Preparation</li>
          <li className="text-white">Data Modelling</li>
          <li className="text-white">Data Integration</li>
          <li className="text-white">Data Visualization</li>
        </ul>
      </motion.div>
    </div>
  );
}

export default Skills;
