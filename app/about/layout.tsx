import Navbar from "@/components/Navbar";
import React from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex flex-col min-h-screen w-full bg-white">
      {/* Content Area */}
      {/* Mobile: pb-24 (space for bottom nav), pt-4 */}
      {/* Desktop: pt-24 (space for top nav), pb-10 */}
      <div className="flex-1 w-full pb-28 pt-4 md:pb-10 md:pt-24 transition-all duration-300">
        {children}
      </div>

      <Navbar />
    </main>
  );
}
