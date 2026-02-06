"use client";

import { useRef, useEffect } from "react";

import { motion } from "framer-motion";

const activityPhotos = [
  {
    id: 1,
    src: "/assets/kegiatan/foto1.jpg",
    title: "Workshop Coding",
  },
  {
    id: 2,
    src: "/assets/kegiatan/foto2.jpg",
    title: "Diskusi & Sharing Session",
  },
  {
    id: 3,
    src: "/assets/kegiatan/foto3.jpg",
    title: "Praktik & Kolaborasi",
  },
  {
    id: 4,
    src: "/assets/kegiatan/foto4.jpg",
    title: "Kegiatan Pengabdian Kepada  Masyarakat",
  },
  {
    id: 5,
    src: "/assets/kegiatan/pemaparan.jpg",
    title: "Pemaparan Materi",
  },
  {
    id: 5,
    src: "/assets/kegiatan/pembagianhadiah.jpg",
    title: "Pembagian Hadiah Quiz",
  },
];
export default function ActivityImage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const activityImages = [...activityPhotos, ...activityPhotos];

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
  return (
    <motion.div
      className="mt-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900">
          Aktivitas & Kegiatan Kami
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Dokumentasi kegiatan dan aktivitas pengabdian kepada masyarakat yang
          telah kami lakukan. Dan perkenalan aplikasi NgodingYuk sebagai
          platform e-learning untuk belajar coding secara interaktif.
        </p>
      </div>
      {/* INFINITE PHOTO CAROUSEL */}
      <div ref={carouselRef} className="overflow-hidden">
        <div className="flex gap-6  px-6">
          {activityImages.map((photo, index) => {
            return (
              <div
                key={index}
                className="min-w-[260px] h-[180px] relative rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end">
                  <p className="text-white text-sm font-semibold p-4">
                    {photo.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
