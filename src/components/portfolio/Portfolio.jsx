import "./portfolio.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
const items = [
  {
    id: 1,
    title: "Brainwave",
    img: "/project.png",
    desc: " Beautiful Sections: Includes hero, services, features, how to use, roadmap, pricing, footer, and header. Parallax Animations: Engaging effects triggered by mouse movement and scrolling.  Complex UI Geometry: Utilizes Tailwind CSS for intricate shapes like circular feature displays, grid lines, and side lines.",
  },
  {
    id: 2,
    title: "Brainwave2",
    img: "/project.png",
    desc: " Beautiful Sections: Includes hero, services, features, how to use, roadmap, pricing, footer, and header. Parallax Animations: Engaging effects triggered by mouse movement and scrolling.  Complex UI Geometry: Utilizes Tailwind CSS for intricate shapes like circular feature displays, grid lines, and side lines.",
  },
  {
    id: 3,
    title: "Brainwave3",
    img: "/project.png",
    desc: " Beautiful Sections: Includes hero, services, features, how to use, roadmap, pricing, footer, and header. Parallax Animations: Engaging effects triggered by mouse movement and scrolling.  Complex UI Geometry: Utilizes Tailwind CSS for intricate shapes like circular feature displays, grid lines, and side lines.",
  },
  {
    id: 4,
    title: "Brainwave4",
    img: "/project.png",
    desc: " Beautiful Sections: Includes hero, services, features, how to use, roadmap, pricing, footer, and header. Parallax Animations: Engaging effects triggered by mouse movement and scrolling.  Complex UI Geometry: Utilizes Tailwind CSS for intricate shapes like circular feature displays, grid lines, and side lines.",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start", "end start"]
   
  });

  const y = useTransform(scrollYProgress,[0,1],["-300px","300px"])
  return (
    <section >
      <div className="container">
        <div className="wrapper">
        <div className="imageContainer" ref={ref}>
        <img src={item.img} alt="" />
        </div>
        <motion.div className="textContainer" style={{y}}>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <button><b>Visit</b></button>
        </motion.div>
      </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
