"use client";

import { motion } from "framer-motion";

type LogoProps = {
  size?: number;
};

export default function Logo({ size = 300 }: LogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      style={{ display: "flex", alignItems: "center", gap: "12px" }}
    >
      <img
        src="assets/logo/logo.png"
        alt="Logo"
        width={size}
        height={size}
        style={{ borderRadius: 12 }}
      />
    </motion.div>
  );
}
