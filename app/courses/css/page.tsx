import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Palette,
  Layout,
  Box,
  Type,
  Smartphone,
  Layers,
  Grid,
  Code,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus CSS Lengkap - NgodingYuk",
  description:
    "Kuasai CSS dari dasar hingga mahir. Pelajari Flexbox, Grid, Animasi, dan Responsive Design untuk membuat website yang cantik.",
};

const syllabus = [
  {
    category: "Dasar Styling",
    items: [
      {
        id: "intro",
        title: "Pengenalan CSS",
        desc: "Apa itu CSS dan cara kerjanya?",
        icon: Code,
        page: "/courses/css/pengenalan",
      },
      {
        id: "syntax",
        title: "Sintaks & Selector",
        desc: "Aturan penulisan dan cara memilih elemen.",
        icon: Code,
        page: "/courses/css/syntax",
      },
      {
        id: "colors",
        title: "Colors & Backgrounds",
        desc: "Mengatur warna dan latar belakang.",
        icon: Palette,
        page: "/courses/css/colors",
      },
      {
        id: "text",
        title: "Typography",
        desc: "Styling font, teks, dan perataan.",
        icon: Type,
        page: "/courses/css/text",
      },
    ],
  },
  {
    category: "Tata Letak (Layout)",
    items: [
      {
        id: "boxmodel",
        title: "Box Model",
        desc: "Margin, Border, Padding, Content.",
        icon: Box,
        page: "/courses/css/boxmodel",
      },
      {
        id: "layout",
        title: "Display & Position",
        desc: "Block, Inline, Relative, Absolute.",
        icon: Layout,
        page: "/courses/css/layout",
      },
      {
        id: "flexbox",
        title: "Flexbox",
        desc: "Layout modern 1 dimensi.",
        icon: Layers,
        page: "/courses/css/flexbox",
      },
      {
        id: "grid",
        title: "CSS Grid",
        desc: "Layout modern 2 dimensi.",
        icon: Grid,
        page: "/courses/css/grid",
      },
    ],
  },
  {
    category: "Responsif & Lanjutan",
    items: [
      {
        id: "responsive",
        title: "Responsive Design",
        desc: "Membuat web ramah mobile dengan Media Queries.",
        icon: Smartphone,
        page: "/courses/css/responsive",
      },
    ],
  },
];

export default function CourseCss() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Desain Web Modern
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-blue-600">CSS3</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Ubah halaman HTML yang membosankan menjadi website yang cantik,
              responsif, dan profesional. Pelajari seni menata web dengan CSS.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/20"
              >
                <Link href="/courses/css/pengenalan">
                  Mulai Belajar <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <Link href="#syllabus">Lihat Materi</Link>
              </Button>
            </div>
          </div>

          {/* Code Playground Preview */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-700">
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-2 text-xs text-gray-400 font-mono">
                style.css
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-orange-400">
                body <span className="text-white">&#123;</span>
              </p>
              <p className="text-blue-300 ml-4">
                background-color<span className="text-white">:</span>{" "}
                <span className="text-green-300">#f0f9ff</span>
                <span className="text-white">;</span>
              </p>
              <p className="text-blue-300 ml-4">
                font-family<span className="text-white">:</span>{" "}
                <span className="text-green-300">'Inter', sans-serif</span>
                <span className="text-white">;</span>
              </p>
              <p className="text-white">&#125;</p>
              <br />
              <p className="text-orange-400">
                .button-primary <span className="text-white">&#123;</span>
              </p>
              <p className="text-blue-300 ml-4">
                background<span className="text-white">:</span>{" "}
                <span className="text-green-300">
                  linear-gradient(to right, blue, purple)
                </span>
                <span className="text-white">;</span>
              </p>
              <p className="text-blue-300 ml-4">
                border-radius<span className="text-white">:</span>{" "}
                <span className="text-purple-300">99px</span>
                <span className="text-white">;</span>
              </p>
              <p className="text-white">&#125;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-blue-400" /> Visual Design
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum CSS</h2>
          <p className="text-gray-500 mt-2">
            Dari styling dasar hingga layout kompleks dengan Grid & Flexbox.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm">
                  {idx + 1}
                </span>
                {section.category}
              </h3>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.id}
                      href={item.page}
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Take Quiz CTA */}
      <div className="bg-blue-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis CSS. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/css">Mulai Kuis CSS</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Menjadi Frontend Developer?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Kuasai CSS dan buat website impianmu menjadi kenyataan. Gratis
            selamanya.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/css/pengenalan">Mulai Tutorial CSS</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
