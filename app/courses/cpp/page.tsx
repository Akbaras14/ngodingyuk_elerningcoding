import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Terminal,
  Code2,
  Database,
  Cpu,
  Box,
  List,
  Split,
  Repeat,
  ArrowRight,
  PlayCircle,
  Binary,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus C++ Lengkap - NgodingYuk",
  description:
    "Belajar C++ dari dasar. Bahasa pemrograman performa tinggi untuk game, sistem operasi, dan aplikasi berat.",
};

const syllabus = [
  {
    category: "Dasar C++",
    items: [
      {
        id: "intro",
        title: "Pengenalan C++",
        desc: "Sejarah dan kenapa C++ sangat cepat.",
        icon: Terminal,
        page: "/courses/cpp/pengenalan",
      },
      {
        id: "syntax",
        title: "Sintaks Dasar",
        desc: "Struktur program main() dan include.",
        icon: Code2,
        page: "/courses/cpp/syntax",
      },
      {
        id: "output",
        title: "Output (Cout)",
        desc: "Menampilkan teks ke layar.",
        icon: Terminal,
        page: "/courses/cpp/output",
      },
      {
        id: "input",
        title: "Input (Cin)",
        desc: "Menerima data dari pengguna.",
        icon: Terminal,
        page: "/courses/cpp/input",
      },
    ],
  },
  {
    category: "Data & Operasi",
    items: [
      {
        id: "variables",
        title: "Variables",
        desc: "Int, Double, Char, String, Bool.",
        icon: Database,
        page: "/courses/cpp/variables",
      },
      {
        id: "operators",
        title: "Operators",
        desc: "Aritmatika, Perbandingan, Logika.",
        icon: Binary,
        page: "/courses/cpp/operators",
      },
      {
        id: "arrays",
        title: "Arrays",
        desc: "Menyimpan kumpulan data.",
        icon: List,
        page: "/courses/cpp/arrays",
      },
    ],
  },
  {
    category: "Kontrol Alur",
    items: [
      {
        id: "conditions",
        title: "Conditions",
        desc: "If, Else, dan Switch Case.",
        icon: Split,
        page: "/courses/cpp/conditions",
      },
      {
        id: "loops",
        title: "Loops",
        desc: "For dan While loops.",
        icon: Repeat,
        page: "/courses/cpp/loops",
      },
      {
        id: "functions",
        title: "Functions",
        desc: "Fungsi void dan return value.",
        icon: Box,
        page: "/courses/cpp/functions",
      },
    ],
  },
];

export default function CourseCpp() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              High Performance Coding
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-indigo-600">C++</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bahasa andalan untuk Game Development, Sistem Operasi, dan
              Software Kinerja Tinggi. Pelajari fondasi ilmu komputer yang
              sebenarnya.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg shadow-indigo-600/20"
              >
                <Link href="/courses/cpp/pengenalan">
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
                main.cpp
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-gray-500">#include &lt;iostream&gt;</p>
              <p className="text-purple-400">
                using namespace <span className="text-white">std;</span>
              </p>
              <br />
              <p className="text-blue-400">
                int <span className="text-yellow-300">main</span>
                <span className="text-white">() &#123;</span>
              </p>
              <p className="text-blue-400 ml-4">
                int <span className="text-white">score = </span>
                <span className="text-green-400">100</span>
                <span className="text-white">;</span>
              </p>
              <p className="text-white ml-4">
                cout &lt;&lt;{" "}
                <span className="text-green-400">"Level Complete!"</span>{" "}
                &lt;&lt; endl;
              </p>
              <p className="text-white ml-4">
                cout &lt;&lt; <span className="text-green-400">"Score: "</span>{" "}
                &lt;&lt; score;
              </p>
              <p className="text-purple-400 ml-4">
                return <span className="text-green-400">0</span>
                <span className="text-white">;</span>
              </p>
              <p className="text-white">&#125;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-400" /> System Level
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum C++</h2>
          <p className="text-gray-500 mt-2">
            Dari dasar syntax hingga manajemen memori.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-indigo-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
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
      <div className="bg-indigo-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis C++. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/cpp">Mulai Kuis C++</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Menjadi Engineer Software?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            C++ adalah pondasi dari banyak teknologi modern. Mulai karir Anda
            sekarang.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/cpp/pengenalan">Mulai Tutorial C++</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
