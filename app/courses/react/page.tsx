import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Atom,
  Code2,
  Component,
  Zap,
  Box,
  Layout,
  GitBranch,
  RefreshCcw,
  ArrowRight,
  PlayCircle,
  Braces,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus React Lengkap - NgodingYuk",
  description:
    "Belajar React JS dari nol. Library JavaScript paling populer untuk membangun antarmuka pengguna modern.",
};

const syllabus = [
  {
    category: "Dasar React",
    items: [
      {
        id: "intro",
        title: "Pengenalan React",
        desc: "Konsep Virtual DOM & SPA.",
        icon: Atom,
        page: "/courses/react/pengenalan",
      },
      {
        id: "jsx",
        title: "JSX Syntax",
        desc: "HTML di dalam JavaScript.",
        icon: Code2,
        page: "/courses/react/jsx",
      },
      {
        id: "components",
        title: "Components",
        desc: "Functional vs Class Components.",
        icon: Component,
        page: "/courses/react/components",
      },
      {
        id: "props",
        title: "Props",
        desc: "Komunikasi antar komponen.",
        icon: Box,
        page: "/courses/react/props",
      },
    ],
  },
  {
    category: "State Management",
    items: [
      {
        id: "state",
        title: "State & useState",
        desc: "Menangani data dinamis.",
        icon: Zap,
        page: "/courses/react/state",
      },
      {
        id: "effects",
        title: "Side Effects",
        desc: "Lifecycle dengan useEffect.",
        icon: RefreshCcw,
        page: "/courses/react/effects",
      },
      {
        id: "events",
        title: "Event Handling",
        desc: "Interaksi user onClick, onChange.",
        icon: Layout,
        page: "/courses/react/events",
      },
    ],
  },
  {
    category: "Pola Lanjutan",
    items: [
      {
        id: "conditionals",
        title: "Conditional Rendering",
        desc: "Logika tampilan dinamis.",
        icon: GitBranch,
        page: "/courses/react/conditionals",
      },
      {
        id: "lists",
        title: "Lists & Keys",
        desc: "Looping data array.",
        icon: Braces,
        page: "/courses/react/lists",
      },
      {
        id: "router",
        title: "React Router",
        desc: "Navigasi multi-halaman.",
        icon: ArrowRight,
        page: "/courses/react/router",
      },
    ],
  },
];

export default function CourseReact() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              Frontend Modern
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Dasar <span className="text-sky-500">React</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Library #1 untuk Web Development. Bangun aplikasi web interaktif,
              cepat, dan skalabel dengan arsitektur berbasis komponen.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-sky-500 hover:bg-sky-600 text-white rounded-full shadow-lg shadow-sky-500/20"
              >
                <Link href="/courses/react/pengenalan">
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
                App.jsx
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-purple-400">import</p>
              <p className="text-white inline"> &#123; useState &#125; </p>
              <p className="text-purple-400 inline">from</p>
              <p className="text-green-400 inline"> 'react'</p>
              <p className="text-white">;</p>
              <br />
              <p className="text-blue-400">
                function <span className="text-yellow-300">Counter</span>
                <span className="text-white">() &#123;</span>
              </p>
              <p className="text-white ml-4">
                const [count, setCount] ={" "}
                <span className="text-blue-400">useState</span>(
                <span className="text-green-400">0</span>);
              </p>
              <br />
              <p className="text-purple-400 ml-4">
                return <span className="text-white">(</span>
              </p>
              <p className="text-white ml-8">
                &lt;<span className="text-red-400">button</span>{" "}
                <span className="text-yellow-300">onClick</span>=&#123;() =&gt;
                setCount(count + 1)&#125;&gt;
              </p>
              <p className="text-white ml-12">Count is &#123;count&#125;</p>
              <p className="text-white ml-8">
                &lt;/<span className="text-red-400">button</span>&gt;
              </p>
              <p className="text-white ml-4">);</p>
              <p className="text-white">&#125;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Atom className="w-4 h-4 text-sky-400" /> React 19
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Kurikulum React</h2>
          <p className="text-gray-500 mt-2">
            Dari dasar JSX hingga manajemen state yang kompleks.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-sky-100 text-sky-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-sky-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-sky-50 text-sky-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-sky-600 transition-colors mb-2">
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
      <div className="bg-sky-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis React. Dapatkan sertifikat jika nilai Anda di atas
            80!
          </p>
          <Button
            asChild
            className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 py-3 h-auto text-base sm:px-8 sm:h-12 sm:text-lg"
          >
            <Link href="/quiz/react">Mulai Kuis React</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Membangun Web Modern?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            React adalah skill wajib untuk frontend developer masa kini.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/react/pengenalan">Mulai Tutorial React</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
