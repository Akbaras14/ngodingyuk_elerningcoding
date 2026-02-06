import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Terminal,
  Code2,
  Database,
  Braces,
  FunctionSquare,
  List,
  Split,
  Repeat,
  ArrowRight,
  PlayCircle,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus Python Lengkap - NgodingYuk",
  description:
    "Belajar Python dari nol. Bahasa pemrograman paling populer untuk Data Science, Web, dan AI.",
};

const syllabus = [
  {
    category: "Dasar Python",
    items: [
      {
        id: "intro",
        title: "Pengenalan Python",
        desc: "Sejarah dan kegunaan Python.",
        icon: Terminal,
        page: "/courses/python/pengenalan",
      },
      {
        id: "syntax",
        title: "Sintaks Dasar",
        desc: "Indentasi dan aturan penulisan.",
        icon: Code2,
        page: "/courses/python/syntax",
      },
      {
        id: "variables",
        title: "Variables",
        desc: "Menyimpan data dalam memori.",
        icon: Database,
        page: "/courses/python/variables",
      },
      {
        id: "datatypes",
        title: "Tipe Data",
        desc: "String, Int, Float, Boolean.",
        icon: Braces,
        page: "/courses/python/datatypes",
      },
    ],
  },
  {
    category: "Struktur Data",
    items: [
      {
        id: "lists",
        title: "Lists",
        desc: "Koleksi data terurut & bisa diubah.",
        icon: List,
        page: "/courses/python/lists",
      },
      {
        id: "dictionaries",
        title: "Dictionaries",
        desc: "Data pasangan key-value.",
        icon: Database,
        page: "/courses/python/dictionaries",
      },
    ],
  },
  {
    category: "Logika & Fungsi",
    items: [
      {
        id: "conditions",
        title: "If...Else",
        desc: "Logika percabangan.",
        icon: Split,
        page: "/courses/python/conditions",
      },
      {
        id: "loops",
        title: "Loops",
        desc: "While & For loops.",
        icon: Repeat,
        page: "/courses/python/loops",
      },
      {
        id: "functions",
        title: "Functions",
        desc: "Membuat fungsi sendiri.",
        icon: FunctionSquare,
        page: "/courses/python/functions",
      },
      {
        id: "modules",
        title: "Modules",
        desc: "Import library eksternal.",
        icon: Cpu,
        page: "/courses/python/modules",
      },
    ],
  },
];

export default function CoursePython() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Data Science & AI Ready
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-blue-600">Python</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bahasa pemrograman paling serbaguna di dunia. Dari otomatisasi
              sederhana hingga kecerdasan buatan (AI), Python bisa melakukan
              semuanya.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg shadow-blue-600/20"
              >
                <Link href="/courses/python/pengenalan">
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
                main.py
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-purple-400">def</p>
              <p className="text-blue-400 inline"> hitung_luas</p>
              <p className="text-white inline">(panjang, lebar):</p>
              <p className="text-white ml-4">area = panjang * lebar</p>
              <p className="text-purple-400 ml-4">return</p>
              <p className="text-white inline"> area</p>
              <br />
              <p className="text-gray-500"># Program Utama</p>
              <p className="text-white">
                hasil = hitung_luas(<span className="text-green-400">10</span>,{" "}
                <span className="text-green-400">5</span>)
              </p>
              <p className="text-white">
                print(
                <span className="text-green-400">
                  f"Luasnya adalah &#123;hasil&#125;"
                </span>
                )
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Terminal className="w-4 h-4 text-blue-400" /> Python Shell
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum Python</h2>
          <p className="text-gray-500 mt-2">
            Struktur pembelajaran yang mudah diikuti untuk pemula.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm">
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
            mengerjakan kuis Python. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/python">Mulai Kuis Python</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Menguasai Data & Logika?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Python adalah bahasa masa depan. Mulai perjalanan coding Anda hari
            ini.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/python/pengenalan">Mulai Tutorial Python</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
