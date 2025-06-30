import { motion } from "framer-motion";
import { FaCode, FaServer, FaBrain, FaRocket } from "react-icons/fa";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const skills = [
    { name: "Frontend", icon: <FaCode className="text-2xl" />, color: "text-blue-400" },
    { name: "Backend", icon: <FaServer className="text-2xl" />, color: "text-purple-400" },
    { name: "Problem Solving", icon: <FaBrain className="text-2xl" />, color: "text-green-400" },
    { name: "Innovation", icon: <FaRocket className="text-2xl" />, color: "text-yellow-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#005C97] to-[#363795] text-white flex flex-col  items-center justify-between px-6 py-12" id="about">
      <div className="max-w-4xl w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            About <span className="text-purple-300">Me</span>
          </h1>
          <div className="w-24 h-1 bg-purple-400 mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-6"
          >
            <p className="text-lg md:text-xl leading-relaxed text-gray-100">
              Hi, I'm <span className="text-purple-300 font-semibold">Vishnu</span>, a passionate Full-Stack Developer dedicated to crafting exceptional digital experiences. I combine technical expertise with creative problem-solving to build applications that are both powerful and intuitive.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-200">
              With a keen eye for detail and a commitment to clean code, I specialize in developing robust, scalable solutions that drive business growth while delivering seamless user experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center ${skill.color}`}
                >
                  {skill.icon}
                  <span className="mt-2 font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-purple-400 bg-opacity-30 rounded-xl p-1">
              <div className="bg-gradient-to-br from-[#1d3557] to-[#457b9d] rounded-lg overflow-hidden">
                <div className="h-164 md:h-80 w-full bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-90"></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-purple-500 text-white px-4 py-2 rounded-lg shadow-lg">
              <span className="font-bold">5+ Projects</span>
            </div>
          </motion.div>
        </div>

    
      </div>
    </div>
  );
}