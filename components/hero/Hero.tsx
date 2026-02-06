"use client";

import { motion } from "framer-motion";
import HeroText from "./HeroText";
import ParallaxText from "./ParallaxText";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center"
      initial="initial"
      animate="animate"
    >
      <HeroText />
      <div className="mt-10 w-full overflow-hidden">
        <ParallaxText direction={500} baseVelocity={-1}>
          Semangat Belajar Coding Bersama Kami!
        </ParallaxText>
        <ParallaxText direction={-500} baseVelocity={1}>
          Semangat Belajar Coding Bersama Kami!
        </ParallaxText>
      </div>
    </motion.section>
  );
}
