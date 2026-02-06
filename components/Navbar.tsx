"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, RefreshCcw, LogOut, User } from "lucide-react";

import { FcAbout } from "react-icons/fc";
import Logo from "@/components/splashscreen/Logo";
import { useAuth } from "@/context/AuthContext";

type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function Navbar(): React.ReactElement {
  const pathname: string = usePathname() ?? "/";
  const { user, logout } = useAuth();

  const items: NavItem[] = [
    { href: "/", label: "Refresh", icon: RefreshCcw },
    { href: "/home", label: "Home", icon: Home },
    { href: "/about", label: "Tentang Kami", icon: FcAbout },
  ];

  const isActive = (href: string): boolean => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Mobile Bottom Navigation */}
      <nav
        role="navigation"
        aria-label="Bottom navigation"
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md backdrop-blur-xl bg-white/90 border border-blue-100 shadow-2xl rounded-3xl py-3 px-6 flex justify-between items-center z-50"
      >
        {items.map((item: NavItem) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className="relative flex flex-col items-center group"
            >
              <motion.div
                className={`p-2 rounded-xl transition-all ${
                  active
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
              {active && (
                <span className="absolute -bottom-2 w-1 h-1 bg-blue-600 rounded-full" />
              )}
            </Link>
          );
        })}
        {!user && (
          <Link
            href="/login"
            className="relative flex flex-col items-center group"
          >
            <motion.div
              className="p-2 rounded-xl transition-all text-gray-500 hover:bg-gray-50"
              whileTap={{ scale: 0.9 }}
            >
              <User className="w-6 h-6" />
            </motion.div>
          </Link>
        )}
        {user && (
          <button
            onClick={logout}
            className="relative flex flex-col items-center group"
          >
            <motion.div
              className="p-2 rounded-xl transition-all text-red-600 hover:bg-red-50"
              whileTap={{ scale: 0.9 }}
            >
              <LogOut className="w-6 h-6" />
            </motion.div>
          </button>
        )}
      </nav>

      {/* Desktop Top Navigation */}
      <nav className="hidden md:flex fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50 px-6 lg:px-12 py-3 justify-between items-center transition-all">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <Link href="/home" className="hover:opacity-80 transition-opacity">
            <Logo size={80} />
          </Link>
          <span className="font-bold text-xl text-blue-900 tracking-tight hidden lg:block">
            NgodingYuk
          </span>
        </div>

        {/* Desktop Menu Links */}
        <div className="flex items-center gap-1 bg-gray-50/50 p-1 rounded-full border border-gray-100">
          {items.map((item) => {
            if (item.label === "Refresh") return null;

            const active = isActive(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  active
                    ? "bg-white text-blue-600 shadow-sm ring-1 ring-gray-100"
                    : "text-gray-600 hover:text-blue-600 hover:bg-white/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right Action Area */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="flex items-center gap-2 mr-2">
                <span className="text-sm font-medium text-gray-700">
                  Halo, {user.name}
                </span>
              </div>
              <div className="h-6 w-px bg-gray-200"></div>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={logout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="text-gray-600 hover:text-blue-600"
              >
                <Link href="/login">Masuk</Link>
              </Button>
              <div className="h-6 w-px bg-gray-200"></div>
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-md shadow-blue-600/20"
              >
                <Link href="/register">Daftar</Link>
              </Button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
