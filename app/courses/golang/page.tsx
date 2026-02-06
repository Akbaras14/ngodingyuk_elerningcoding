import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Terminal,
  Code2,
  Database,
  Box,
  List,
  Split,
  Repeat,
  ArrowRight,
  PlayCircle,
  Cpu,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus Golang Lengkap - NgodingYuk",
  description:
    "Belajar Go (Golang) dari Google. Bahasa pemrograman modern untuk backend, cloud, dan sistem performa tinggi.",
};

const syllabus = [
  {
    category: "Dasar Go",
    items: [
      {
        id: "intro",
        title: "Pengenalan Go",
        desc: "Sejarah dan keunggulan Golang.",
        icon: Terminal,
        page: "/courses/golang/pengenalan",
      },
      {
        id: "syntax",
        title: "Sintaks Dasar",
        desc: "Package main dan import.",
        icon: Code2,
        page: "/courses/golang/syntax",
      },
      {
        id: "variables",
        title: "Variables",
        desc: "Var dan Short declaration (:=).",
        icon: Database,
        page: "/courses/golang/variables",
      },
      {
        id: "datatypes",
        title: "Tipe Data",
        desc: "Int, Float, String, Bool.",
        icon: Box,
        page: "/courses/golang/datatypes",
      },
    ],
  },
  {
    category: "Struktur Data & Alur",
    items: [
      {
        id: "arrays",
        title: "Arrays & Slices",
        desc: "Koleksi data statis dan dinamis.",
        icon: List,
        page: "/courses/golang/arrays",
      },
      {
        id: "conditions",
        title: "If & Switch",
        desc: "Logika percabangan.",
        icon: Split,
        page: "/courses/golang/conditions",
      },
      {
        id: "loops",
        title: "Loops",
        desc: "For loop dan variasinya.",
        icon: Repeat,
        page: "/courses/golang/loops",
      },
    ],
  },
  {
    category: "Advanced Go",
    items: [
      {
        id: "functions",
        title: "Functions",
        desc: "Multiple return values.",
        icon: Layers,
        page: "/courses/golang/functions",
      },
      {
        id: "structs",
        title: "Structs",
        desc: "Pengganti Class di Go.",
        icon: Box,
        page: "/courses/golang/structs",
      },
      {
        id: "goroutines",
        title: "Goroutines",
        desc: "Konkurensi (Concurrency) modern.",
        icon: Cpu,
        page: "/courses/golang/goroutines",
      },
    ],
  },
];

export default function CourseGolang() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Backend & Cloud Native
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-cyan-600">Golang</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bahasa pemrograman masa depan dari Google. Sederhana, andal, dan
              efisien. Pilihan utama untuk Scalable Backend.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full shadow-lg shadow-cyan-600/20"
              >
                <Link href="/courses/golang/pengenalan">
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
                main.go
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-blue-400">
                package <span className="text-white">main</span>
              </p>
              <br />
              <p className="text-blue-400">
                import <span className="text-green-400">"fmt"</span>
              </p>
              <br />
              <p className="text-blue-400">
                func <span className="text-yellow-300">main</span>
                <span className="text-white">() &#123;</span>
              </p>
              <p className="text-white ml-4">
                messages := []<span className="text-blue-400">string</span>
                &#123;<span className="text-green-400">"Hello"</span>,{" "}
                <span className="text-green-400">"Go!"</span>&#125;
              </p>
              <p className="text-purple-400 ml-4">
                for <span className="text-white">_, msg := </span>
                <span className="text-purple-400">range </span>
                <span className="text-white">messages &#123;</span>
              </p>
              <p className="text-white ml-8">fmt.Println(msg)</p>
              <p className="text-white ml-4">&#125;</p>
              <p className="text-white">&#125;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Terminal className="w-4 h-4 text-cyan-400" /> Go Runtime
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum Golang</h2>
          <p className="text-gray-500 mt-2">
            Disusun untuk mempercepat pemahaman sintaks dan fitur unik Go.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-cyan-600 transition-colors mb-2">
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
      <div className="bg-cyan-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis Golang. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/golang">Mulai Kuis Golang</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Menjadi Backend Engineer?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Permintaan developer Go terus meningkat. Ambil langkah pertama
            sekarang.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/golang/pengenalan">Mulai Tutorial Go</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
