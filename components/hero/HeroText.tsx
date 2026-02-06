import React from "react";
import { AnimateWords } from "./AnimateWords";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroText() {
  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* IMAGE */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
          transition: {
            delay: 1.5,
            duration: 1,
            ease: [0.2, 0.65, 0.3, 0.9],
          },
        }}
        className="mb-8 cursor-pointer"
      >
        <Image
          src="/assets/logo/logo.png"
          width={800}
          height={800}
          priority
          alt="Ngoding Yuk"
          className="
      w-[246px]
      sm:w-[180px]
      md:w-[260px]
      lg:w-[320px]
      xl:w-[360px]
      rounded-[20px] md:rounded-[36px]
      grayscale hover:grayscale-0
      transition-all duration-500
      shadow-[0_25px_60px_rgba(37,99,235,0.45)]
      hover:shadow-[0_35px_90px_rgba(37,99,235,0.7)]
    "
        />
      </motion.div>

      {/* TEXT */}
      <div className="flex flex-col items-center justify-center">
        <AnimateWords
          title="NGODING YUK!"
          style="
      inline-block overflow-hidden
      text-7xl sm:text-7xl md:text-8xl
      bg-gradient-to-r from-blue-500 via-blue-600 to-blue-800
      bg-clip-text text-transparent
      pt-1
      -mr-2 sm:-mr-3 md:-mr-5 lg:-mr-7
      -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4
    "
        />
      </div>
    </div>
  );
}
