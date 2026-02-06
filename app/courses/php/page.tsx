import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Server,
  Code2,
  Database,
  Braces,
  FunctionSquare,
  List,
  Split,
  Repeat,
  ArrowRight,
  PlayCircle,
  Binary,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus PHP Lengkap - NgodingYuk",
  description:
    "Belajar PHP dari dasar. Bahasa scripting server-side paling populer untuk pengembangan web dinamis.",
};

const syllabus = [
  {
    category: "Dasar PHP",
    items: [
      {
        id: "intro",
        title: "Pengenalan PHP",
        desc: "Sejarah dan fungsi PHP.",
        icon: Server,
        page: "/courses/php/pengenalan",
      },
      {
        id: "syntax",
        title: "Sintaks Dasar",
        desc: "Tag PHP dan Echo.",
        icon: Code2,
        page: "/courses/php/syntax",
      },
      {
        id: "variables",
        title: "Variables",
        desc: "Menyimpan data dengan $.",
        icon: Database,
        page: "/courses/php/variables",
      },
      {
        id: "datatypes",
        title: "Tipe Data",
        desc: "String, Integer, Array.",
        icon: Binary,
        page: "/courses/php/datatypes",
      },
    ],
  },
  {
    category: "Logika & Fungsi",
    items: [
      {
        id: "strings",
        title: "Strings",
        desc: "Manipulasi teks.",
        icon: Code2,
        page: "/courses/php/strings",
      },
      {
        id: "operators",
        title: "Operators",
        desc: "Matematika & logika.",
        icon: Braces,
        page: "/courses/php/operators",
      },
      {
        id: "conditions",
        title: "If...Else",
        desc: "Percabangan logika.",
        icon: Split,
        page: "/courses/php/conditions",
      },
    ],
  },
  {
    category: "Struktur & Loop",
    items: [
      {
        id: "loops",
        title: "Loops",
        desc: "Foreach, While, For.",
        icon: Repeat,
        page: "/courses/php/loops",
      },
      {
        id: "functions",
        title: "Functions",
        desc: "Membuat fungsi kustom.",
        icon: FunctionSquare,
        page: "/courses/php/functions",
      },
      {
        id: "arrays",
        title: "Arrays",
        desc: "Indexed & Associative.",
        icon: List,
        page: "/courses/php/arrays",
      },
    ],
  },
];

export default function CoursePhp() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 border border-violet-100 text-violet-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              Web Backend Standard
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-violet-600">PHP</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bahasa di balik 80% website di dunia. Mulai dari blog pribadi
              hingga e-commerce raksasa, semua butuh PHP.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-violet-600 hover:bg-violet-700 text-white rounded-full shadow-lg shadow-violet-600/20"
              >
                <Link href="/courses/php/pengenalan">
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
                index.php
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-red-400">&lt;?php</p>
              <br />
              <p className="text-blue-400">$app</p>
              <p className="text-white inline"> = </p>
              <p className="text-green-400 inline">"NgodingYuk"</p>
              <p className="text-white">;</p>
              <br />
              <p className="text-purple-400">echo</p>
              <p className="text-green-400 inline"> "&lt;h1&gt;Welcome to " </p>
              <p className="text-white inline"> . </p>
              <p className="text-blue-400 inline">$app</p>
              <p className="text-white inline"> . </p>
              <p className="text-green-400 inline">"&lt;/h1&gt;"</p>
              <p className="text-white">;</p>
              <br />
              <p className="text-gray-500">// Menghubungkan ke Database</p>
              <p className="text-blue-400">$conn</p>
              <p className="text-white inline"> = </p>
              <p className="text-yellow-300 inline">mysqli_connect</p>
              <p className="text-white">(</p>
              <p className="text-green-400">"localhost"</p>
              <p className="text-white">, </p>
              <p className="text-green-400">"root"</p>
              <p className="text-white">);</p>
              <br />
              <p className="text-red-400">?&gt;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Server className="w-4 h-4 text-violet-400" /> PHP 8.2
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum PHP</h2>
          <p className="text-gray-500 mt-2">
            Dari sintaks dasar hingga pengelolaan data dinamis.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-violet-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-violet-50 text-violet-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-violet-600 transition-colors mb-2">
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
      <div className="bg-violet-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis PHP. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/php">Mulai Kuis PHP</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Membuat Website Dinamis?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Pelajari PHP dan buka pintu karir sebagai Backend Developer
            profesional.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/php/pengenalan">Mulai Tutorial PHP</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
