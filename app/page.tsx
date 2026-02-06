"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "@/components/splashscreen/Logo";

const loadingMessages = [
  "Mempersiapkan materi pembelajaran...",
  "Menghubungkan ke server NgodingYuk...",
  "Memuat aset visual interaktif...",
  "Mengoptimalkan pengalaman belajar...",
  "Hampir siap untuk belajar!",
];

export default function LoadingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const duration = 5000; // Updated to 5 seconds
    const interval = 50;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Cycle through messages over the 5 second period
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1000); // Change message every 1 second
    return () => clearInterval(messageInterval);
  }, []);

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      router.push("/home");
    }, 5300); // Slightly longer than progress to show 100%

    return () => clearTimeout(redirectTimer);
  }, [router]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gray-50 text-gray-900 overflow-hidden relative">
      {/* Soft White/Blue Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white" />

      {/* Subtle Background Orbs for Texture */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-100/40 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-indigo-100/40 rounded-full blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 flex flex-col items-center gap-8"
      >
        {/* Professional Logo Container */}
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            className="absolute -inset-4 bg-blue-400/10 rounded-full blur-2xl"
          />
          <Logo size={340} />
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Ngoding<span className="text-blue-600">Yuk</span>
          </h1>
          <p className="text-gray-400 text-sm font-medium mt-1 tracking-widest uppercase">
            E-Learning Platform
          </p>
        </div>

        {/* Progress Section */}
        <div className="w-64 md:w-80 flex flex-col gap-4 mt-2">
          {/* Text Message Animation */}
          <div className="h-6 flex items-center justify-center overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={messageIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-[13px] text-blue-600 font-medium absolute text-center whitespace-nowrap"
              >
                {loadingMessages[messageIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Minimalist Progress Bar */}
          <div className="h-1 w-full bg-gray-200 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-blue-600"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "linear", duration: 0.1 }}
            />
          </div>

          <div className="flex justify-between items-center px-1">
            <span className="text-[10px] text-gray-400 font-bold tracking-tighter uppercase">
              Initializing
            </span>
            <span className="text-[11px] text-blue-600 font-mono font-bold">
              {Math.round(progress)}%
            </span>
          </div>
        </div>
      </motion.div>

      {/* Footer Branding */}
      <div className="absolute bottom-10 flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 opacity-60">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">
            Secure Environment
          </span>
        </div>
      </div>
    </div>
  );
}
