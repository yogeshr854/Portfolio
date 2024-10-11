import "./about.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaReact, FaJsSquare, FaNodeJs } from "react-icons/fa";

const containerVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const lineVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.3 }, 
  }),
};

const letterVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: i * 0.1 }, 
  }),
};

const skillVariants = {
  initial: { width: 0 },
  animate: (custom) => ({
    width: `${custom}%`,
    transition: { duration: 1, ease: "easeOut" },
  }),
};

const Skills = [
  { name: "JavaScript", level: 90, icon: <FaJsSquare /> },
  { name: "React", level: 85, icon: <FaReact /> },
  { name: "Node.js", level: 75, icon: <FaNodeJs /> },
];

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });

  const introText = [
    "Welcome to my portfolio!",
    "I'm passionate about web development and design.",
    "I strive to build user-friendly and visually appealing web applications that create meaningful experiences.",
  ];
  const additionalText = [
    "I love to explore the ever-evolving tech landscape and experiment with new technologies and frameworks.",
    "My focus is on front-end development, but I also enjoy working with backend technologies to bring my projects full circle.",
    "My journey in web development started from a place of curiosity, and it has since transformed into a full-fledged passion.",
    "I am always on the lookout for opportunities to collaborate and create amazing web experiences.",
  ];

  return (
    <motion.div
      className="about"
      variants={containerVariants}
      initial="initial"
      ref={ref}
      animate={isInView && "animate"}
    >
      <div className="container">
        
        <motion.div className="leftSection" variants={containerVariants}>
          <h1>About Me</h1>

         
          <motion.div className="introText">
            {introText.map((text, textIndex) => (
              <motion.p
                key={textIndex}
                variants={lineVariants}
                initial="initial"
                animate={isInView && "animate"}
                custom={textIndex} 
              >
                {text.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    variants={letterVariants}
                    initial="initial"
                    animate={isInView && "animate"}
                    custom={letterIndex}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>
            ))}
          </motion.div>

      
          <motion.div className="additionalText">
            {additionalText.map((text, textIndex) => (
              <motion.p
                key={textIndex}
                variants={lineVariants}
                initial="initial"
                animate={isInView && "animate"}
                custom={introText.length + textIndex} 
              >
                {text.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    variants={letterVariants}
                    initial="initial"
                    animate={isInView && "animate"}
                    custom={letterIndex} 
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        
        <motion.div className="rightSection" variants={containerVariants}>
          
          <motion.div className="skillsContainer" variants={containerVariants}>
            <h2>Skills</h2>
            <div className="skills">
              {Skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-icon">{skill.icon}</span>
                    <h3>{skill.name}</h3>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="progress"
                      custom={skill.level}
                      variants={skillVariants}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            className="experienceContainer"
            variants={containerVariants}
          >
            <h2>Experience</h2>
            <p>
              I have worked on various projects, from personal websites to
              client applications, always aiming for excellence and
              functionality.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
