"use client";

import { motion } from "framer-motion";

export default function Spinner() {
  return (
    <motion.div
      style={{
        width: 48,
        height: 48,
        border: "5px solid #ddd",
        borderTopColor: "#000",
        borderRadius: "50%",
      }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
