import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Coffee,
  Code2,
  Database,
  Box,
  List,
  Split,
  Repeat,
  ArrowRight,
  PlayCircle,
  Binary,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus Java Lengkap - NgodingYuk",
  description:
    "Belajar Java dari dasar. Bahasa pemrograman populer untuk Enterprise, Android, dan Sistem Skala Besar.",
};

const syllabus = [
  {
    category: "Dasar Java",
    items: [
      {
        id: "intro",
        title: "Pengenalan Java",
        desc: "Sejarah dan JVM.",
        icon: Coffee,
        page: "/courses/java/pengenalan",
      },
      {
        id: "syntax",
        title: "Sintaks Dasar",
        desc: "Class Main dan System.out.",
        icon: Code2,
        page: "/courses/java/syntax",
      },
      {
        id: "variables",
        title: "Variables",
        desc: "Menyimpan data.",
        icon: Database,
        page: "/courses/java/variables",
      },
      {
        id: "datatypes",
        title: "Tipe Data",
        desc: "Primitif dan Referensi.",
        icon: Binary,
        page: "/courses/java/datatypes",
      },
    ],
  },
  {
    category: "Logika & Alur",
    items: [
      {
        id: "operators",
        title: "Operators",
        desc: "Operasi matematika & logika.",
        icon: Layers,
        page: "/courses/java/operators",
      },
      {
        id: "conditions",
        title: "If...Else",
        desc: "Pengambilan keputusan.",
        icon: Split,
        page: "/courses/java/conditions",
      },
      {
        id: "loops",
        title: "Loops",
        desc: "Perulangan kode.",
        icon: Repeat,
        page: "/courses/java/loops",
      },
    ],
  },
  {
    category: "OOP Dasar",
    items: [
      {
        id: "arrays",
        title: "Arrays",
        desc: "Kumpulan data.",
        icon: List,
        page: "/courses/java/arrays",
      },
      {
        id: "methods",
        title: "Methods",
        desc: "Fungsi dan parameter.",
        icon: Code2,
        page: "/courses/java/methods",
      },
      {
        id: "oop",
        title: "Classes & Objects",
        desc: "Konsep Object Oriented.",
        icon: Box,
        page: "/courses/java/oop",
      },
    ],
  },
];

export default function CourseJava() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Enterprise Standard
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-red-600">Java</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bahasa pemrograman #1 untuk aplikasi enterprise dan Android.
              Pelajari konsep OOP yang kuat dan bangun sistem yang andal.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg shadow-red-600/20"
              >
                <Link href="/courses/java/pengenalan">
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
                Main.java
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-blue-400">
                public class <span className="text-yellow-300">Main</span>{" "}
                <span className="text-white">&#123;</span>
              </p>
              <p className="text-white ml-4">
                public static <span className="text-purple-400">void</span>{" "}
                <span className="text-blue-400">main</span>(String[] args){" "}
                <span className="text-white">&#123;</span>
              </p>
              <br />
              <p className="text-white ml-8">
                String pesan ={" "}
                <span className="text-green-400">"Java is Powerful"</span>;
              </p>
              <p className="text-white ml-8">System.out.println(pesan);</p>
              <br />
              <p className="text-white ml-8">
                <span className="text-purple-400">int</span> tahun ={" "}
                <span className="text-blue-400">2026</span>;
              </p>
              <p className="text-white ml-8">
                if (tahun {">"} <span className="text-blue-400">2025</span>)
                &#123;
              </p>
              <p className="text-white ml-12">
                System.out.println(
                <span className="text-green-400">"Masa Depan!"</span>);
              </p>
              <p className="text-white ml-8">&#125;</p>
              <p className="text-white ml-4">&#125;</p>
              <p className="text-white">&#125;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Coffee className="w-4 h-4 text-red-400" /> Java VM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum Java</h2>
          <p className="text-gray-500 mt-2">
            Pondasi kokoh untuk karir software engineering.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-red-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-red-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
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
      <div className="bg-red-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis Java. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/java">Mulai Kuis Java</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Menjadi Java Developer?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Java adalah salah satu skill paling dicari di industri. Mulai
            sekarang.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/java/pengenalan">Mulai Tutorial Java</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
