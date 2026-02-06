import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  FileCode2,
  LayoutTemplate,
  Type,
  Image as ImageIcon,
  List,
  Table2,
  Code2,
  Palette,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dasar HTML Lengkap - NgodingYuk",
  description:
    "Belajar HTML dari dasar hingga mahir. Panduan lengkap struktur web, elemen, atribut, dan semantic HTML.",
};

const syllabus = [
  {
    category: "Dasar HTML",
    items: [
      {
        id: "intro",
        title: "Pengenalan HTML",
        desc: "Apa itu HTML dan bagaimana cara kerjanya?",
        icon: FileCode2,
        page: "/courses/html/pengenalan",
      },
      {
        id: "editors",
        title: "HTML Editors",
        desc: "Software terbaik untuk menulis kode HTML.",
        icon: LayoutTemplate,
        page: "/courses/html/editors",
      },
      {
        id: "basic",
        title: "Struktur Dasar",
        desc: "Memahami elemen <html>, <head>, dan <body>.",
        icon: Code2,
        page: "/courses/html/basic",
      },
      {
        id: "elements",
        title: "HTML Elements",
        desc: "Nested elements dan tag kosong.",
        icon: Code2,
        page: "/courses/html/elements",
      },
      {
        id: "attributes",
        title: "HTML Attributes",
        desc: "Menambahkan informasi tambahan pada elemen.",
        icon: Code2,
        page: "/courses/html/attributes",
      },
    ],
  },
  {
    category: "Konten & Media",
    items: [
      {
        id: "headings",
        title: "Headings",
        desc: "Membuat judul h1 sampai h6.",
        icon: Type,
        page: "/courses/html/headings",
      },
      {
        id: "paragraphs",
        title: "Paragraphs",
        desc: "Mengatur paragraf dan line breaks.",
        icon: Type,
        page: "/courses/html/paragraphs",
      },
      {
        id: "styles",
        title: "HTML Styles",
        desc: "Pengenalan atribut style untuk desain.",
        icon: Palette,
        page: "/courses/html/styles",
      },
      {
        id: "formatting",
        title: "Formatting",
        desc: "Bold, Italic, dan format teks lainnya.",
        icon: Type,
        page: "/courses/html/formatting",
      },
      {
        id: "images",
        title: "Images",
        desc: "Menampilkan gambar di website.",
        icon: ImageIcon,
        page: "/courses/html/images",
      },
    ],
  },
  {
    category: "Struktur Data",
    items: [
      {
        id: "tables",
        title: "Tables",
        desc: "Membuat tabel data yang rapi.",
        icon: Table2,
        page: "/courses/html/tables",
      },
      {
        id: "lists",
        title: "Lists",
        desc: "Ordered (ol) dan Unordered (ul) lists.",
        icon: List,
        page: "/courses/html/lists",
      },
      {
        id: "blocks",
        title: "Block & Inline",
        desc: "Memahami display property elemen.",
        icon: LayoutTemplate,
        page: "/courses/html/blocks",
      },
      {
        id: "classes",
        title: "HTML Classes",
        desc: "Mengelompokkan elemen untuk CSS.",
        icon: Code2,
        page: "/courses/html/classes",
      },
      {
        id: "id",
        title: "HTML Id",
        desc: "Identifier unik untuk elemen.",
        icon: Code2,
        page: "/courses/html/id",
      },
    ],
  },
];

export default function CourseHtml() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              Materi HTML 5 Dasar
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-orange-600">HTML</span> Lengkap
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              HTML (Hyper Text Markup Language) adalah kode dasar untuk membuat
              halaman web. Di kursus ini, Anda akan belajar cara membangun
              struktur website yang solid dari nol.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg shadow-green-600/20"
              >
                <Link href="/courses/html/pengenalan">
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
                index.html
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-gray-400">&lt;!DOCTYPE html&gt;</p>
              <p className="text-blue-400">&lt;html&gt;</p>
              <p className="text-blue-400 ml-4">&lt;body&gt;</p>
              <p className="text-white ml-8"></p>
              <p className="text-green-400 ml-8">
                &lt;h1&gt;<span className="text-white">Hello World!</span>
                &lt;/h1&gt;
              </p>
              <p className="text-green-400 ml-8">
                &lt;p&gt;
                <span className="text-white">
                  Ini adalah website pertamaku.
                </span>
                &lt;/p&gt;
              </p>
              <p className="text-white ml-8"></p>
              <p className="text-blue-400 ml-4">&lt;/body&gt;</p>
              <p className="text-blue-400">&lt;/html&gt;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <PlayCircle className="w-4 h-4 text-green-400" /> Live Preview
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Alur Belajar Terstruktur
          </h2>
          <p className="text-gray-500 mt-2">
            Disusun sistematis agar mudah dipahami pemula.
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
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
            mengerjakan kuis HTML. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/html">Mulai Kuis HTML</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Menjadi Web Developer?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Mulai langkah pertamamu hari ini. Gratis dan akses selamanya.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/courses/html/pengenalan">Mulai Tutorial HTML</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
