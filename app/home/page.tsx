"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Hero from "@/components/hero/Hero";
import CourseSection from "@/components/home/CourseSection";
import Footer from "@/components/Footer";
import Spinner from "@/components/splashscreen/Spinner"; 

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <Hero />
      <CourseSection />
      <Footer />
    </div>
  );
}
