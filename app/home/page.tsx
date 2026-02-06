"use client";

import HeroSection from "@/components/home/HeroSection";
import CourseSection from "@/components/home/CourseSection";
import Footer from "@/components/Footer";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />

      <CourseSection />
      <Footer />
    </div>
  );
}
