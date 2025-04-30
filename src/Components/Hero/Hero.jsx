import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import "./Hero.css";
import mouse from "../../Assets/Common/mouse-white.png";

import video1 from "../../Assets/Common/hero-social.mp4";
import video2 from "../../Assets/Common/hero-money.mp4";
import video3 from "../../Assets/Common/hero-trade.mp4";
import video4 from "../../Assets/Common/hero-sports.mp4";

const items = [
  {
    id: 1,
    title: "Join The IB Program",
    description: "Take the trading experience of your customer to the next level",
    video: video1,
  },
  {
    id: 2,
    title: "Quick Deposits and Withdrawals",
    description: "Social",
    video: video2,
  },
  {
    id: 3,
    title: "Access MetaTrader 5",
    description: "Available on all devices, Operating system and Online Store",
    video: video3,
  },
  {
    id: 4,
    title: "Trusted by OneFamily",
    description: "Join VPFX and Start your Journey",
    video: video4,
  },
];

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 1, staggerChildren: 0.1 } },
  exit: { x: 500, opacity: 0, transition: { duration: .5 } },
  scrollButtonInitial: { y: 0, opacity: 0 },
  scrollButton: { opacity: 1, y: 10, transition: { duration: 1, repeat: Infinity } },
};

export default function Hero() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref, start: ["start start", "end start"] });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 500]);

  const [currentSlide, setCurrentSlide] = useState(items[0]);

  const handleDotClick = (ele) => {
    setCurrentSlide(ele);
  };

  return (
    <div className="hero">
      <AnimatePresence mode="wait">
        <motion.video
          key={currentSlide.video}
          src={currentSlide.video}
          autoPlay
          loop
          muted
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }} // Duration of fade effect
        />
      </AnimatePresence>
      <motion.div
        className="hero-content container1"
        style={{ y: yBg }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id} // Ensures the entire text section changes per slide
            initial="initial"
            whileInView="animate"
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: 0.2
            }}
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
          >
            <motion.h1>
              {currentSlide.title}
            </motion.h1>
            <motion.h2>
              {currentSlide.description}
            </motion.h2>
            <motion.button className="btn button-touch2">
              Let's Discuss
              <span className="line">
                <span className="circle"></span>
              </span>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <motion.div className="scroll" variants={textVariants} initial="scrollButtonInitial" animate="scrollButton">
        <img className="mouse" src={mouse} alt="" />
        <h1>Scroll to explore</h1>
      </motion.div>
      <div className="dotsContainer">
        {items.map((ele) => (
          <div
            key={ele.id}
            onClick={() => handleDotClick(ele)}
            className={`dot ${currentSlide.id === ele.id ? "dotActive" : "dotInactive"}`}
          />
        ))}
      </div>
    </div>
  );
}