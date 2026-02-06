import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  PenTool,
  Layout,
  Palette,
  Type,
  Figma,
  Users,
  Component,
  ArrowRight,
  PlayCircle,
  Eye,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus UI/UX Design Lengkap - NgodingYuk",
  description:
    "Belajar desain antarmuka dan pengalaman pengguna. Dari Design Thinking hingga High-Fidelity Prototype dengan Figma.",
};

const syllabus = [
  {
    category: "Konsep Dasar",
    items: [
      {
        id: "intro",
        title: "Pengenalan UI/UX",
        desc: "Perbedaan UI dan UX.",
        icon: Layers,
        page: "/courses/uiux/pengenalan",
      },
      {
        id: "thinking",
        title: "Design Thinking",
        desc: "Metode penyelesaian masalah.",
        icon: Users,
        page: "/courses/uiux/design-thinking",
      },
      {
        id: "hierarchy",
        title: "Visual Hierarchy",
        desc: "Mengarahkan mata pengguna.",
        icon: Eye,
        page: "/courses/uiux/visual-hierarchy",
      },
    ],
  },
  {
    category: "Elemen Visual",
    items: [
      {
        id: "typography",
        title: "Typography",
        desc: "Memilih font yang tepat.",
        icon: Type,
        page: "/courses/uiux/typography",
      },
      {
        id: "color",
        title: "Color Theory",
        desc: "Psikologi & harmoni warna.",
        icon: Palette,
        page: "/courses/uiux/color-theory",
      },
      {
        id: "layout",
        title: "Wireframing",
        desc: "Sketsa layout kasar (Lo-Fi).",
        icon: Layout,
        page: "/courses/uiux/wireframing",
      },
    ],
  },
  {
    category: "Tools & Implementasi",
    items: [
      {
        id: "figma",
        title: "Figma Basics",
        desc: "Tools standar industri.",
        icon: Figma,
        page: "/courses/uiux/figma",
      },
      {
        id: "prototyping",
        title: "Prototyping",
        desc: "Membuat desain interaktif.",
        icon: PlayCircle,
        page: "/courses/uiux/prototyping",
      },
      {
        id: "system",
        title: "Design System",
        desc: "Komponen & konsistensi.",
        icon: Component,
        page: "/courses/uiux/design-system",
      },
      {
        id: "test",
        title: "Usability Testing",
        desc: "Validasi desain ke user.",
        icon: Users,
        page: "/courses/uiux/usability",
      },
    ],
  },
];

export default function CourseUiUx() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
              </span>
              Creative & Analytical
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-pink-500">UI/UX Design</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Belajar merancang produk digital yang tidak hanya cantik dilihat,
              tapi juga mudah dan menyenangkan untuk digunakan.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg shadow-pink-500/20"
              >
                <Link href="/courses/uiux/pengenalan">
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

          {/* Visual Preview (Mockup Design) */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-gray-700 aspect-video flex items-center justify-center">
            <div className="bg-white w-[80%] h-[80%] rounded-lg shadow-lg flex flex-col overflow-hidden">
              {/* Mockup Header */}
              <div className="h-4 bg-gray-100 border-b flex items-center px-2 gap-1">
                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
              </div>
              {/* Mockup Body */}
              <div className="flex-1 p-4 flex gap-4">
                <div className="w-1/4 h-full bg-gray-50 rounded-md animate-pulse"></div>
                <div className="flex-1 flex flex-col gap-2">
                  <div className="w-3/4 h-8 bg-gray-100 rounded-md"></div>
                  <div className="flex gap-2 mt-2">
                    <div className="w-1/3 h-24 bg-pink-100 rounded-md"></div>
                    <div className="w-1/3 h-24 bg-purple-100 rounded-md"></div>
                    <div className="w-1/3 h-24 bg-blue-100 rounded-md"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cursor Overlay */}
            <div className="absolute bottom-10 right-10">
              <div className="bg-black text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
                <PenTool className="w-3 h-3" /> Jane (Editing)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum UI/UX</h2>
          <p className="text-gray-500 mt-2">
            Gabungan teori desain, psikologi user, dan skill teknis.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-100 text-pink-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-pink-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-pink-50 text-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition-colors mb-2">
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
      <div className="bg-pink-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis UI/UX. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/uiux">Mulai Kuis UI/UX</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Mendesain Produk Digital?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Permintaan UI/UX Designer terus meningkat. Pelajari skill kreatif
            ini sekarang.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/uiux/pengenalan">Mulai Tutorial UI/UX</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
