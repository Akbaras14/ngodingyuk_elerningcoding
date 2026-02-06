"use client";

import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} NgodingYuk. Dibuat oleh Team Pengabdian Kepada
            Masyarakat Universitas Pamulang.
          </p>
          <div className="flex gap-6">
            <span className="text-sm text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              System Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
