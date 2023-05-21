import React from "react";
import { motion } from "framer-motion";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

function Hero() {
  return (
    <div>
      {" "}
      <div className="home-page">
        <motion.div className="animated-container" variants={banner}>
          <div className="name">Collyn</div>
          <motion.div
            initial={{ x: 1500 }}
            animate={{ x: -1500 }}
            transition={{ duration: 15, repeat: Infinity }}
            className="scroll-effect"
          >
            Frontend Web Developer
          </motion.div>
          <div className="name">Godlewski</div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
