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
  Binary,
  Cpu,
  Microchip,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus Bahasa C Lengkap - NgodingYuk",
  description:
    "Belajar Bahasa C dari dasar. Fondasi ilmu komputer, sistem operasi, dan pemrograman embedded.",
};

const syllabus = [
  {
    category: "Dasar C",
    items: [
      {
        id: "intro",
        title: "Pengenalan C",
        desc: "Sejarah dan kegunaan C.",
        icon: Terminal,
        page: "/courses/c/pengenalan",
      },
      {
        id: "syntax",
        title: "Sintaks Dasar",
        desc: "Struktur #include dan main().",
        icon: Code2,
        page: "/courses/c/syntax",
      },
      {
        id: "variables",
        title: "Variables",
        desc: "Tipe data dan format specifier.",
        icon: Database,
        page: "/courses/c/variables",
      },
      {
        id: "input",
        title: "User Input",
        desc: "Menggunakan scanf().",
        icon: Binary,
        page: "/courses/c/input",
      },
    ],
  },
  {
    category: "Logika & Kontrol",
    items: [
      {
        id: "operators",
        title: "Operators",
        desc: "Aritmatika & Logika.",
        icon: Cpu,
        page: "/courses/c/operators",
      },
      {
        id: "conditions",
        title: "Conditions",
        desc: "If, Else, Switch.",
        icon: Split,
        page: "/courses/c/conditions",
      },
      {
        id: "loops",
        title: "Loops",
        desc: "For, While, Do-While.",
        icon: Repeat,
        page: "/courses/c/loops",
      },
    ],
  },
  {
    category: "Konsep Lanjutan",
    items: [
      {
        id: "arrays",
        title: "Arrays",
        desc: "Menyimpan kumpulan data.",
        icon: List,
        page: "/courses/c/arrays",
      },
      {
        id: "pointers",
        title: "Pointers",
        desc: "Manajemen memori & alamat.",
        icon: Microchip,
        page: "/courses/c/pointers",
      },
      {
        id: "functions",
        title: "Functions",
        desc: "Modularisasi kode.",
        icon: Box,
        page: "/courses/c/functions",
      },
    ],
  },
];

export default function CourseC() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
              </span>
              Mother of Languages
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-slate-600">C Language</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Pelajari bahasa legendaris yang menggerakkan dunia. Dari Sistem
              Operasi hingga IoT, C adalah kunci pemahaman komputer yang
              mendalam.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-slate-700 hover:bg-slate-800 text-white rounded-full shadow-lg shadow-slate-600/20"
              >
                <Link href="/courses/c/pengenalan">
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
                system.c
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-gray-500">#include &lt;stdio.h&gt;</p>
              <br />
              <p className="text-blue-400">
                int <span className="text-yellow-300">main</span>
                <span className="text-white">() &#123;</span>
              </p>
              <p className="text-blue-400 ml-4">
                int <span className="text-white">memory = </span>
                <span className="text-green-400">1024</span>
                <span className="text-white">;</span>
              </p>
              <p className="text-blue-400 ml-4">
                int <span className="text-white">*ptr = &memory;</span>
              </p>
              <br />
              <p className="text-white ml-4">
                printf(<span className="text-green-400">"Address: %p"</span>,
                ptr);
              </p>
              <p className="text-white ml-4">
                printf(<span className="text-green-400">"Value: %d"</span>,
                *ptr);
              </p>
              <br />
              <p className="text-purple-400 ml-4">
                return <span className="text-green-400">0</span>
                <span className="text-white">;</span>
              </p>
              <p className="text-white">&#125;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Terminal className="w-4 h-4 text-slate-400" /> GCC Compiler
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Kurikulum Bahasa C
          </h2>
          <p className="text-gray-500 mt-2">
            Pondasi kuat untuk algoritma dan struktur data.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-200 text-slate-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-slate-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-slate-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-slate-600 transition-colors mb-2">
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
      <div className="bg-slate-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis C. Dapatkan sertifikat jika nilai Anda di atas 80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-slate-600 hover:bg-slate-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/c">Mulai Kuis C</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Menyelami Dunia Low-Level?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Bahasa C adalah bahasa wajib bagi mahasiswa Teknik Informatika dan
            Ilmu Komputer.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-slate-600 hover:bg-slate-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/c/pengenalan">Mulai Tutorial C</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
