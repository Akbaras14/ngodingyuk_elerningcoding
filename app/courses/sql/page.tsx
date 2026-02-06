import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Database,
  Search,
  Table2,
  FileEdit,
  Trash2,
  Sigma,
  Link as LinkIcon,
  PlusSquare,
  ArrowRight,
  PlayCircle,
  Server,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus SQL Lengkap - NgodingYuk",
  description:
    "Kuasai SQL untuk manajemen database. Belajar Query, Join, dan Database Design dari dasar.",
};

const syllabus = [
  {
    category: "Dasar Query",
    items: [
      {
        id: "intro",
        title: "Pengenalan SQL",
        desc: "Apa itu RDBMS & SQL?",
        icon: Database,
        page: "/courses/sql/pengenalan",
      },
      {
        id: "syntax",
        title: "Sintaks Dasar",
        desc: "Struktur query SELECT.",
        icon: Search,
        page: "/courses/sql/syntax",
      },
      {
        id: "select",
        title: "SELECT Data",
        desc: "Mengambil data spesifik.",
        icon: Table2,
        page: "/courses/sql/select",
      },
      {
        id: "where",
        title: "Filtering (WHERE)",
        desc: "Menyaring hasil query.",
        icon: Search,
        page: "/courses/sql/where",
      },
    ],
  },
  {
    category: "Manipulasi Data",
    items: [
      {
        id: "insert",
        title: "INSERT Data",
        desc: "Menambah baris baru.",
        icon: PlusSquare,
        page: "/courses/sql/insert",
      },
      {
        id: "update",
        title: "UPDATE Data",
        desc: "Mengubah data yang ada.",
        icon: FileEdit,
        page: "/courses/sql/update",
      },
      {
        id: "delete",
        title: "DELETE Data",
        desc: "Menghapus baris data.",
        icon: Trash2,
        page: "/courses/sql/delete",
      },
    ],
  },
  {
    category: "Advanced SQL",
    items: [
      {
        id: "functions",
        title: "Functions",
        desc: "Min, Max, Count, Sum.",
        icon: Sigma,
        page: "/courses/sql/functions",
      },
      {
        id: "joins",
        title: "SQL Joins",
        desc: "Menggabungkan tabel.",
        icon: LinkIcon,
        page: "/courses/sql/joins",
      },
      {
        id: "ddl",
        title: "Create & Drop",
        desc: "Membuat database/tabel.",
        icon: Server,
        page: "/courses/sql/ddl",
      },
    ],
  },
];

export default function CourseSql() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Data Management
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-teal-600">SQL</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Bahasa wajib untuk Data Analyst dan Backend Developer. Kelola
              jutaan data dengan perintah sederhana yang powerful.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg shadow-teal-600/20"
              >
                <Link href="/courses/sql/pengenalan">
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
                query.sql
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-gray-500">-- Ambil data pelanggan</p>
              <p className="text-purple-400">SELECT</p>
              <p className="text-white ml-4">id, nama, email</p>
              <p className="text-purple-400">FROM</p>
              <p className="text-yellow-300 ml-4">pelanggan</p>
              <p className="text-purple-400">WHERE</p>
              <p className="text-white ml-4">
                kota = <span className="text-green-400">'Jakarta'</span>
              </p>
              <p className="text-purple-400">ORDER BY</p>
              <p className="text-white ml-4">
                nama <span className="text-purple-400">ASC</span>;
              </p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Database className="w-4 h-4 text-teal-400" /> PostgreSQL /
                MySQL
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum SQL</h2>
          <p className="text-gray-500 mt-2">
            Pahami cara kerja database relasional (RDBMS).
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-teal-100 text-teal-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
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
      <div className="bg-teal-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis SQL. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/sql">Mulai Kuis SQL</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Data adalah Aset Berharga
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Pelajari cara mengelolanya dengan benar menggunakan SQL.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/sql/pengenalan">Mulai Tutorial SQL</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
