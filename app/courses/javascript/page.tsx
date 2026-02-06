import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  FileCode2,
  Terminal,
  Variable,
  Binary,
  FunctionSquare,
  Box,
  MousePointerClick,
  List,
  Split,
  Repeat,
  ArrowRight,
  PlayCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus JavaScript Lengkap - NgodingYuk",
  description:
    "Pelajari JavaScript dari dasar hingga mahir. Bahasa pemrograman wajib untuk web developer modern.",
};

const syllabus = [
  {
    category: "Dasar JavaScript",
    items: [
      {
        id: "intro",
        title: "Pengenalan JS",
        desc: "Apa itu JavaScript dan perannya di web?",
        icon: FileCode2,
        page: "/courses/javascript/pengenalan",
      },
      {
        id: "output",
        title: "JS Output",
        desc: "Cara menampilkan data di console dan HTML.",
        icon: Terminal,
        page: "/courses/javascript/output",
      },
      {
        id: "variables",
        title: "Variables",
        desc: "Var, Let, dan Const untuk menyimpan data.",
        icon: Variable,
        page: "/courses/javascript/variables",
      },
      {
        id: "datatypes",
        title: "Data Types",
        desc: "String, Number, Boolean, Array, Object.",
        icon: Binary,
        page: "/courses/javascript/datatypes",
      },
    ],
  },
  {
    category: "Logika & Fungsi",
    items: [
      {
        id: "functions",
        title: "Functions",
        desc: "Membuat blok kode yang dapat digunakan kembali.",
        icon: FunctionSquare,
        page: "/courses/javascript/functions",
      },
      {
        id: "objects",
        title: "Objects",
        desc: "Memahami struktur data objek.",
        icon: Box,
        page: "/courses/javascript/objects",
      },
      {
        id: "events",
        title: "Events",
        desc: "Menangani klik, input, dan interaksi user.",
        icon: MousePointerClick,
        page: "/courses/javascript/events",
      },
    ],
  },
  {
    category: "Kontrol Alur",
    items: [
      {
        id: "arrays",
        title: "Arrays",
        desc: "Menyimpan banyak data dalam satu variabel.",
        icon: List,
        page: "/courses/javascript/arrays",
      },
      {
        id: "conditionals",
        title: "If Else",
        desc: "Logika percabangan dan keputusan.",
        icon: Split,
        page: "/courses/javascript/conditionals",
      },
      {
        id: "loops",
        title: "Loops",
        desc: "Melakukan perulangan otomatis.",
        icon: Repeat,
        page: "/courses/javascript/loops",
      },
    ],
  },
];

export default function CourseJavascript() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-50 border border-yellow-100 text-yellow-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              Materi Javascript Dasar
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-yellow-500">JavaScript</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              JavaScript adalah nyawa dari internet modern. Pelajari cara
              membuat website yang interaktif, dinamis, dan powerful dari nol
              hingga mahir.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white rounded-full shadow-lg"
              >
                <Link href="/courses/javascript/pengenalan">
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
                script.js
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-purple-400">function</p>
              <p className="text-blue-400 inline"> sapaDunia</p>
              <p className="text-yellow-300 inline">()</p>
              <p className="text-white inline"> &#123;</p>
              <p className="text-white ml-4">
                const pesan ={" "}
                <span className="text-green-400">"Hello JS!"</span>;
              </p>
              <p className="text-white ml-4">console.log(pesan);</p>
              <p className="text-white ml-4">
                alert(
                <span className="text-green-400">"JavaScript is Fun!"</span>);
              </p>
              <p className="text-white">&#125;</p>
              <p className="text-gray-500 mt-2">// Panggil fungsi</p>
              <p className="text-white">sapaDunia();</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-yellow-400" /> Live
                Interactive
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Kurikulum JavaScript
          </h2>
          <p className="text-gray-500 mt-2">
            Fondasi kuat untuk menjadi Front-End & Back-End Developer.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-yellow-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 transition-colors mb-2">
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
      <div className="bg-yellow-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis JavaScript. Dapatkan sertifikat jika nilai Anda di
            atas 80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/javascript">Mulai Kuis JS</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Menjadi Programmer Handal?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            JavaScript adalah kunci untuk membuka ribuan peluang karir. Pelajari
            sekarang gratis.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-8 h-12 text-base"
          >
            <Link href="/courses/javascript/pengenalan">Mulai Tutorial JS</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
