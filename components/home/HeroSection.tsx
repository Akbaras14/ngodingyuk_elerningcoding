"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Platform Belajar Coding untuk Pemula
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15] mb-6">
              Kuasai Skill <span className="text-blue-600">Teknologi</span>{" "}
              <br className="hidden lg:block" /> untuk Masa Depan
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Aplikasi pembelajaran coding interaktif dengan kurikulum
              terstruktur, yang diambil dari berbagai sumber belajar untuk
              membantu Anda menguasai keterampilan teknologi yang dibutuhkan di
              pasar kerja saat ini.
            </p>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Sertifikat Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Mudah Dipahami</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Akses Seumur Hidup</span>
              </div>
            </div>
          </motion.div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative lg:h-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-gray-900 aspect-video lg:aspect-square">
              {/* Mockup Code UI */}
              <div className="absolute top-0 w-full h-8 bg-gray-800 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="p-6 pt-12 font-mono text-sm text-blue-300">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-yellow-300">future</span> ={" "}
                  <span className="text-purple-400">await</span>{" "}
                  <span className="text-blue-400">ngodingYuk</span>.
                  <span className="text-yellow-300">start</span>();
                </p>
                <p className="mt-2">
                  <span className="text-gray-500">
                    // Mulai perjalananmu hari ini
                  </span>
                </p>
                <p className="mt-2">
                  <span className="text-purple-400">if</span> ({" "}
                  <span className="text-yellow-300">skill</span> &gt;{" "}
                  <span className="text-orange-400">0</span> ) &#123;
                </p>
                <p className="pl-4">
                  <span className="text-blue-400">career</span>.
                  <span className="text-yellow-300">levelUp</span>();
                </p>
                <p>&#125;</p>
                <div className="mt-8 opacity-50">
                  <div className="h-2 w-3/4 bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-1/2 bg-gray-700 rounded mb-2"></div>
                  <div className="h-2 w-5/6 bg-gray-700 rounded mb-2"></div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-[180px]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Status</p>
                    <p className="font-bold text-gray-900 text-sm">
                      Pasti Bisa!
                    </p>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-full rounded-full"></div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 -z-10"></div>
          </motion.div>
        </div>

        {/* Social Proof Strip */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <p className="text-center text-m font-semibold text-gray-500 mb-6 uppercase tracking-wider">
            Dibuat Oleh Team Pengabdian Kepada Masyarakat
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple Text Logos for Placeholder */}
            <span className="text-2xl font-bold">Universitas Pamulang</span>
          </div>
        </div>
      </div>
    </section>
  );
}
