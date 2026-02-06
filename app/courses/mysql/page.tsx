import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Database,
  Settings,
  Table2,
  Key,
  Lock,
  Search,
  Eye,
  Link as LinkIcon,
  Save,
  ArrowRight,
  PlayCircle,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus MySQL Lengkap - NgodingYuk",
  description:
    "Belajar MySQL dari dasar hingga administrasi database. Kuasai RDBMS paling populer di dunia.",
};

const syllabus = [
  {
    category: "Dasar MySQL",
    items: [
      {
        id: "intro",
        title: "Pengenalan MySQL",
        desc: "Apa itu RDBMS & MySQL?",
        icon: Database,
        page: "/courses/mysql/pengenalan",
      },
      {
        id: "install",
        title: "Instalasi & Setup",
        desc: "Setup Server & Workbench.",
        icon: Settings,
        page: "/courses/mysql/instalasi",
      },
      {
        id: "create",
        title: "Create Database",
        desc: "Membuat database baru.",
        icon: Database,
        page: "/courses/mysql/create-db",
      },
      {
        id: "datatypes",
        title: "Data Types",
        desc: "Int, Varchar, Date, dll.",
        icon: Cpu,
        page: "/courses/mysql/datatypes",
      },
    ],
  },
  {
    category: "Struktur & Aturan",
    items: [
      {
        id: "pk",
        title: "Primary Key",
        desc: "Identitas unik baris.",
        icon: Key,
        page: "/courses/mysql/primary-key",
      },
      {
        id: "constraints",
        title: "Constraints",
        desc: "Aturan validasi data.",
        icon: Lock,
        page: "/courses/mysql/constraints",
      },
      {
        id: "fk",
        title: "Foreign Key",
        desc: "Relasi antar tabel.",
        icon: LinkIcon,
        page: "/courses/mysql/foreign-key",
      },
    ],
  },
  {
    category: "Optimasi & Admin",
    items: [
      {
        id: "indexes",
        title: "Indexes",
        desc: "Mempercepat query.",
        icon: Search,
        page: "/courses/mysql/indexes",
      },
      {
        id: "views",
        title: "Views",
        desc: "Tabel virtual (Virtual Table).",
        icon: Eye,
        page: "/courses/mysql/views",
      },
      {
        id: "backup",
        title: "Backup & Export",
        desc: "Dump & Restore data.",
        icon: Save,
        page: "/courses/mysql/backup",
      },
    ],
  },
];

export default function CourseMysql() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              World's Most Popular RDBMS
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-orange-600">MySQL</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Pelajari administrasi dan manajemen database dengan MySQL. Standar
              industri untuk aplikasi web modern dan skalabel.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-orange-600 hover:bg-orange-700 text-white rounded-full shadow-lg shadow-orange-600/20"
              >
                <Link href="/courses/mysql/pengenalan">
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
                schema.sql
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-purple-400">CREATE TABLE</p>
              <p className="text-blue-400 inline"> users</p>
              <p className="text-white inline"> (</p>
              <p className="text-white ml-4">
                id <span className="text-yellow-300">INT</span> PRIMARY KEY{" "}
                <span className="text-purple-400">AUTO_INCREMENT</span>,
              </p>
              <p className="text-white ml-4">
                name <span className="text-yellow-300">VARCHAR</span>(100){" "}
                <span className="text-purple-400">NOT NULL</span>,
              </p>
              <p className="text-white ml-4">
                created_at <span className="text-yellow-300">TIMESTAMP</span>{" "}
                DEFAULT <span className="text-blue-400">CURRENT_TIMESTAMP</span>
              </p>
              <p className="text-white">);</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Database className="w-4 h-4 text-orange-400" /> MySQL 8.0
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum MySQL</h2>
          <p className="text-gray-500 mt-2">
            Panduan lengkap dari nol hingga manajemen database profesional.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-100 text-orange-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-2">
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
      <div className="bg-orange-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis MySQL. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/mysql">Mulai Kuis MySQL</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Kelola Data Secara Profesional
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Kuasai database yang menggerakkan internet. Mulai sekarang, gratis!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/mysql/pengenalan">Mulai Tutorial MySQL</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
