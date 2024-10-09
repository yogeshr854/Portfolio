import "./hero.scss";
import { motion } from "framer-motion";

const textVarients = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVarients = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-650%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 24,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <motion.div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVarients}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVarients}>YOGESH</motion.h2>
          <motion.h1 variants={textVarients}>
            Web developer and <span className="uiText">UI designer</span> 
          </motion.h1>

          <motion.div variants={textVarients} className="buttons">
            <motion.button variants={textVarients}>
              See the latest Works
            </motion.button>
            <motion.button variants={textVarients}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={textVarients}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVarients}
        initial="initial"
        animate="animate"
      >
        Crafting solutions in a digital labyrinth
      </motion.div>
      <div className="imageContainer">
        <img src="/yogesh (1).png" />
      </div>
    </div>
  );
};

export default Hero;
