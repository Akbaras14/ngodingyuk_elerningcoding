import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Monitor,
  Code2,
  Terminal,
  Database,
  Box,
  List,
  Split,
  Repeat,
  ArrowRight,
  PlayCircle,
  Hash,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus C# Lengkap - NgodingYuk",
  description:
    "Belajar C# (C-Sharp) dari dasar. Bahasa modern untuk Windows, Game (Unity), dan Web (ASP.NET).",
};

const syllabus = [
  {
    category: "Dasar C#",
    items: [
      {
        id: "intro",
        title: "Pengenalan C#",
        desc: "Sejarah dan ekosistem .NET.",
        icon: Hash,
        page: "/courses/csharp/pengenalan",
      },
      {
        id: "syntax",
        title: "Sintaks Dasar",
        desc: "Struktur Main() dan Namespace.",
        icon: Code2,
        page: "/courses/csharp/syntax",
      },
      {
        id: "output",
        title: "Input & Output",
        desc: "Console.WriteLine & ReadLine.",
        icon: Terminal,
        page: "/courses/csharp/output",
      },
      {
        id: "variables",
        title: "Variables",
        desc: "Tipe data dan penyimpanan.",
        icon: Database,
        page: "/courses/csharp/variables",
      },
    ],
  },
  {
    category: "Logika Program",
    items: [
      {
        id: "operators",
        title: "Operators",
        desc: "Matematika dan Logika.",
        icon: Code2,
        page: "/courses/csharp/operators",
      },
      {
        id: "conditions",
        title: "Conditions",
        desc: "If, Else, Switch.",
        icon: Split,
        page: "/courses/csharp/conditions",
      },
      {
        id: "loops",
        title: "Loops",
        desc: "For, While, Do-While.",
        icon: Repeat,
        page: "/courses/csharp/loops",
      },
    ],
  },
  {
    category: "OOP & Struktur",
    items: [
      {
        id: "arrays",
        title: "Arrays",
        desc: "Kumpulan data.",
        icon: List,
        page: "/courses/csharp/arrays",
      },
      {
        id: "methods",
        title: "Methods",
        desc: "Fungsi dan parameter.",
        icon: Box,
        page: "/courses/csharp/methods",
      },
      {
        id: "oop",
        title: "Classes & Objects",
        desc: "Object Oriented Programming.",
        icon: Box,
        page: "/courses/csharp/oop",
      },
    ],
  },
];

export default function CourseCSharp() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Microsoft Technology
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-purple-600">C#</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bahasa serbaguna untuk membangun aplikasi Windows, Web (ASP.NET),
              dan Game (Unity). Pelajari bahasa modern yang kuat dan elegan.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg shadow-purple-600/20"
              >
                <Link href="/courses/csharp/pengenalan">
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
                Program.cs
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-blue-400">
                using <span className="text-white">System;</span>
              </p>
              <br />
              <p className="text-blue-400">
                namespace <span className="text-white">DemoApp</span>
              </p>
              <p className="text-white">&#123;</p>
              <p className="text-blue-400 ml-4">
                class <span className="text-yellow-300">Program</span>
              </p>
              <p className="text-white ml-4">&#123;</p>
              <p className="text-blue-400 ml-8">
                static void <span className="text-yellow-300">Main</span>
                <span className="text-white">(string[] args)</span>
              </p>
              <p className="text-white ml-8">&#123;</p>
              <p className="text-white ml-12">
                Console.WriteLine(
                <span className="text-green-400">"Hello C#!"</span>);
              </p>
              <p className="text-white ml-8">&#125;</p>
              <p className="text-white ml-4">&#125;</p>
              <p className="text-white">&#125;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Monitor className="w-4 h-4 text-purple-400" /> .NET Core
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum C#</h2>
          <p className="text-gray-500 mt-2">
            Dari sintaks dasar hingga konsep OOP yang kuat.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-purple-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
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
      <div className="bg-purple-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis C#. Dapatkan sertifikat jika nilai Anda di atas 80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/csharp">Mulai Kuis C#</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Membuat Game atau Aplikasi?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            C# adalah pintu gerbang Anda menuju pengembangan aplikasi Windows
            dan Game Unity.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/csharp/pengenalan">Mulai Tutorial C#</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
