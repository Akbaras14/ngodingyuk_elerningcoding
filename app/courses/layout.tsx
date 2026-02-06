import Navbar from "@/components/Navbar";
import React from "react";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-col h-screen w-full">
      <div className="flex-1 overflow-auto pb-24">
        {children}
      </div>
      <Navbar/>
    </main>
  );
}
