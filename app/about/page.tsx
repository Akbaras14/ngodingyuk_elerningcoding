"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { teamMembers } from "@/lib/team-data";
import { motion } from "framer-motion";
import ParallaxText from "@/components/Parallaxteks";
import ActivityImage from "@/components/about/Actifityimage";

const motivationQuotes = [
  "console.log('Belajar hari ini, sukses esok hari');",
  "while(!paham) { belajar(); }",
  "Coding bukan bakat, tapi kebiasaan.",
  "Mulai dari kampus, menuju dunia industri.",
  "Universitas Pamulang — rumah talenta teknologi.",
];

const activityPhotos = [
  {
    id: 1,
    src: "/assets/kegiatan/kegiatan-1.jpeg",
    title: "Workshop Coding",
  },
  {
    id: 2,
    src: "/assets/kegiatan/kegiatan-2.jpeg",
    title: "Diskusi & Sharing Session",
  },
  {
    id: 3,
    src: "/assets/kegiatan/kegiatan-3.jpeg",
    title: "Praktik & Kolaborasi",
  },
  {
    id: 4,
    src: "/assets/kegiatan/kegiatan-4.jpeg",
    title: "Kegiatan Pengabdian",
  },
];

const AboutPage = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // ===== INFINITE CAROUSEL =====
  const members = [...teamMembers, ...teamMembers];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let rafId: number;
    const speed = 1.2;

    const animate = () => {
      carousel.scrollLeft += speed;
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft -= carousel.scrollWidth / 2;
      }
      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, []);

  // ===== TYPING EFFECT =====
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentQuote = motivationQuotes[quoteIndex];

    if (charIndex < currentQuote.length) {
      const typing = setTimeout(() => {
        setDisplayText((prev) => prev + currentQuote[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 45);

      return () => clearTimeout(typing);
    } else {
      const pause = setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);
        setQuoteIndex((prev) => (prev + 1) % motivationQuotes.length);
      }, 2000);

      return () => clearTimeout(pause);
    }
  }, [charIndex, quoteIndex]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* ================= HERO ================= */}
      <div
        className="relative h-[55vh] sm:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/logo/logo.png')" }}
      >
        <div className="absolute inset-0 bg-blue-900/75" />
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white">
            Tentang Kami
          </h1>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed">
            NgodingYuk! adalah platform e-learning yang didirikan oleh tim
            Pengabdian Kepada Masyarakat dari Universitas Pamulang. Kami
            berkomitmen untuk menyediakan sumber daya belajar coding yang
            interaktif dan mudah diakses bagi semua kalangan.
          </p>
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-7xl relative">
        {/* HEADER */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-4xl font-extrabold text-blue-900">
            Tim Pengabdian Kepada Masyarakat Kami
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-600 leading-relaxed">
            Tim NgodingYuk! terdiri dari individu yang berkomitmen tinggi,
            saling melengkapi, dan memiliki visi yang sama dalam memajukan
            literasi teknologi melalui pendidikan.
          </p>
        </motion.div>

        {/* ================= INFINITE CAROUSEL ================= */}
        <div
          ref={carouselRef}
          className="flex gap-4 sm:gap-8 overflow-x-hidden px-2 sm:px-8 lg:px-16 py-6 sm:py-10"
        >
          {members.map((member, index) => {
            const isLecturer = member.role === "";

            return (
              <div
                key={index}
                className={`
                  flex-shrink-0 rounded-2xl text-center shadow-xl transition
                  ${
                    isLecturer
                      ? "w-80 bg-blue-700 text-white scale-105"
                      : "w-64 bg-white text-blue-900"
                  }
                `}
              >
                {/* FOTO */}
                <div
                  className={`
    relative mx-auto mt-6 overflow-hidden rounded-full
    ${
      isLecturer
        ? "w-48 h-48 sm:w-64 sm:h-64 scale-105"
        : "w-40 h-40 sm:w-56 sm:h-56"
    }
  `}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* NAMA */}
                <h3 className="mt-5 font-bold text-lg px-4">{member.name}</h3>

                {/* ROLE */}
                <p className={`mt-1 text-sm font-semibold `}>{member.role}</p>

                {/* DESKRIPSI */}
                {member.quote && (
                  <p
                    className={`mt-3 px-4 text-sm leading-relaxed ${
                      isLecturer ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {member.quote}
                  </p>
                )}

                {/* BADGE KAMPUS */}
                <div
                  className={`
                    mt-4 mb-6 flex items-center gap-2 px-3 py-1 rounded-full mx-9 w-fit
                    ${
                      isLecturer
                        ? "bg-white/20 text-white"
                        : "bg-blue-50 text-blue-700"
                    }
                  `}
                >
                  <Image
                    src={member.campusLogo}
                    alt={member.campus}
                    width={18}
                    height={18}
                  />
                  <span className="text-xs font-semibold">{member.campus}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= FOTO KEGIATAN ================= */}
        <ActivityImage />
        <div className="mt-10 w-full overflow-hidden ">
          <ParallaxText direction={500} baseVelocity={-1}>
            NgodingYuk! · E-Learning Platform · Universitas Pamulang ·
          </ParallaxText>
        </div>

        {/* ================= MOTIVATION TERMINAL ================= */}
        <motion.div
          className="mt-15 max-w-4xl mx-auto rounded-3xl shadow-xl
          bg-gradient-to-r from-blue-700 to-blue-600 text-white p-6 sm:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-3xl font-extrabold mb-6 text-center">
            Bersama, Kita Bertumbuh 🚀
          </h3>

          <div className="bg-blue-900/80 rounded-xl p-4 sm:p-6 font-mono text-sm sm:text-base text-blue-100">
            <div className="flex gap-2 mb-3">
              <span className="w-3 h-3 bg-red-400 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
              <span className="w-3 h-3 bg-green-400 rounded-full" />
            </div>

            <p>
              <span className="text-green-400">$</span> {displayText}
              <span className="animate-pulse">▍</span>
            </p>
          </div>

          <p className="mt-6 text-xs sm:text-sm text-blue-200 text-center">
            NgodingYuk! · Project Pengabdian Masyarakat
          </p>
          <p className="mt-6 text-xs sm:text-sm text-blue-200 text-center">
            Unversitas Pamulang
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
