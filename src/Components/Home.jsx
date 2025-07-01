import HeroImage from "../assets/image2.jpg";
import { motion } from "framer-motion";

export default function Home() {
  // Animation Variants
const fadeUpContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#005C97] to-[#363795] text-white flex flex-col md:flex-row items-center justify-between px-6 py-12" id="home">
      
      {/* Left Section */}


<motion.div
  className="md:w-1/2 space-y-6 md:pr-12 md:pl-12"
  variants={fadeUpContainer}
  initial="hidden"
  animate="show"
>
  <motion.h1
    className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-sm"
    variants={fadeUpItem}
  >
    Hello, I'm <span className="text-yellow-300">Vishnu</span>
  </motion.h1>

  <motion.h2
    className="text-2xl font-light text-gray-100"
    variants={fadeUpItem}
  >
    A Creative <span className="font-semibold text-white">Full-Stack Developer</span>
  </motion.h2>

  <motion.p
    className="text-lg text-gray-200 max-w-xl leading-relaxed"
    variants={fadeUpItem}
  >
    I design and develop engaging web applications that enhance user experience and drive business growth with scalable, responsive, and elegant solutions.
  </motion.p>

  <motion.div
    className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 pt-4"
    variants={fadeUpItem}
  >
    <motion.a
      href="mailto:vishnuvsh44@gmail.com?subject=Let's Work Together&body=Hello Vishnu,"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold shadow-lg transition-transform"
    >
      Get in Touch
    </motion.a>

    <motion.a
      href="/VishnuV - Python Developer.pdf"
      download="VishnuV - Python Developer.pdf"
      whileHover={{ scale: 1.07 }}
      whileTap={{ scale: 0.95 }}
      className="bg-transparent border-2 border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold shadow-md transition-transform"
    >
      Download CV
    </motion.a>
  </motion.div>
</motion.div>


      {/* Right Section */}


<div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
      <motion.div
        className="relative group"
        whileHover="hover"
        initial="rest"
        animate="rest"
      >
        {/* Glow effect that activates on hover */}
        <motion.div
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 0.6 }
          }}
          className="absolute rounded-lg blur-xl "
        />
        
        {/* The image container with morph animation */}
        <motion.div
          className="relative overflow-hidden"
          variants={{
            rest: { borderRadius: "16px" }, // Square with slight rounding
            hover: { borderRadius: "48%" }   // Perfect circle
          }}
          transition={{ 
            type: "spring",
            stiffness: 20,
            damping: 17
          }}
        >
          {/* Image with scaling effect */}
          <motion.img
            src={HeroImage}
            alt="Vishnu"
            className="w-72 h-72 md:w-80 md:h-80 object-cover"
            variants={{
              rest: { scale: 1 },
              hover: { scale: 1.09 }
            }}
          />
          
          {/* Reflective overlay that appears on hover */}
          <motion.div
            variants={{
              rest: { opacity: 0 },
              hover: { opacity: 0 }
            }}
            className="absolute inset-0 bg-white mix-blend-overlay"
          />
        </motion.div>
        
        {/* Floating shadow that changes shape */}
        <motion.div
          variants={{
            rest: { 
              borderRadius: "16px",
              width: "80%",
              height: "10px"
            },
            hover: { 
              borderRadius: "50%",
              width: "60%",
              height: "10px"
            }
          }}
          transition={{ 
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-black/20 blur-md"
        />
        
    
      </motion.div>
    </div>


    </div>
  );
}
