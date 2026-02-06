import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import {
  Smartphone,
  Settings,
  FolderTree,
  PlayCircle,
  Layout,
  Activity,
  ArrowRight,
  Layers,
  MousePointerClick,
  Type,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kursus Android Studio Lengkap - NgodingYuk",
  description:
    "Belajar membuat aplikasi Android dari nol. Panduan instalasi, layouting, activity, dan Java/Kotlin dasar.",
};

const syllabus = [
  {
    category: "Persiapan",
    items: [
      {
        id: "intro",
        title: "Pengenalan Android",
        desc: "Apa itu Android Studio & fitur utamanya.",
        icon: Smartphone,
        page: "/courses/android-studio/pengenalan",
      },
      {
        id: "install",
        title: "Instalasi & Setup",
        desc: "Cara install SDK dan Emulator.",
        icon: Settings,
        page: "/courses/android-studio/instalasi",
      },
      {
        id: "structure",
        title: "Struktur Project",
        desc: "Memahami file Manifest, Java, dan Res.",
        icon: FolderTree,
        page: "/courses/android-studio/project-structure",
      },
      {
        id: "hello",
        title: "Aplikasi Pertama",
        desc: "Membuat Hello World App.",
        icon: PlayCircle,
        page: "/courses/android-studio/hello-world",
      },
    ],
  },
  {
    category: "Antarmuka (UI)",
    items: [
      {
        id: "layout",
        title: "Layout XML",
        desc: "Linear, Relative, dan Constraint Layout.",
        icon: Layout,
        page: "/courses/android-studio/layouts",
      },
      {
        id: "views",
        title: "UI Components",
        desc: "TextView, Button, EditText, ImageView.",
        icon: Layers,
        page: "/courses/android-studio/views",
      },
      {
        id: "resources",
        title: "Resources",
        desc: "Mengelola String, Color, dan Drawable.",
        icon: Type,
        page: "/courses/android-studio/resources",
      },
    ],
  },
  {
    category: "Logika Aplikasi",
    items: [
      {
        id: "activity",
        title: "Activity",
        desc: "Siklus hidup (Lifecycle) layar aplikasi.",
        icon: Activity,
        page: "/courses/android-studio/activity",
      },
      {
        id: "events",
        title: "Event Handling",
        desc: "Menangani klik tombol dan interaksi.",
        icon: MousePointerClick,
        page: "/courses/android-studio/event-handling",
      },
      {
        id: "intent",
        title: "Intent & Navigasi",
        desc: "Pindah antar halaman (Activity).",
        icon: ArrowRight,
        page: "/courses/android-studio/intent",
      },
    ],
  },
];

export default function CourseAndroid() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* 1. Modern Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-24 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Mobile Development
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Belajar <span className="text-green-600">Android Studio</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Panduan lengkap membuat aplikasi mobile profesional. Dari
              instalasi tools hingga upload ke Play Store.
            </p>
            <div className="flex gap-4">
              <Button
                asChild
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white rounded-full shadow-lg shadow-green-600/20"
              >
                <Link href="/courses/android-studio/pengenalan">
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
                MainActivity.kt
              </span>
            </div>
            <div className="p-6 font-mono text-sm leading-6">
              <p className="text-orange-400">
                class <span className="text-yellow-300">MainActivity</span> :{" "}
                <span className="text-yellow-300">AppCompatActivity</span>(){" "}
                <span className="text-white">&#123;</span>
              </p>
              <p className="text-white ml-4">
                override <span className="text-purple-400">fun</span>{" "}
                <span className="text-blue-400">onCreate</span>
                (savedInstanceState: Bundle?){" "}
                <span className="text-white">&#123;</span>
              </p>
              <p className="text-white ml-8">
                super.onCreate(savedInstanceState)
              </p>
              <p className="text-white ml-8">
                setContentView(R.layout.activity_main)
              </p>
              <br />
              <p className="text-gray-500 ml-8">// Tampilkan pesan Toast</p>
              <p className="text-white ml-8">
                Toast.makeText(<span className="text-purple-400">this</span>,{" "}
                <span className="text-green-400">"Hello Android!"</span>,
                Toast.LENGTH_SHORT).show()
              </p>
              <p className="text-white ml-4">&#125;</p>
              <p className="text-white">&#125;</p>
            </div>
            <div className="absolute bottom-4 right-4">
              <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 text-white text-xs flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-green-400" /> Native App
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Syllabus Section */}
      <div id="syllabus" className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">
            Kurikulum Android
          </h2>
          <p className="text-gray-500 mt-2">
            Langkah demi langkah menjadi Mobile Developer.
          </p>
        </div>

        <div className="grid gap-10">
          {syllabus.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 text-sm">
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
                      className="group block bg-white p-6 rounded-2xl border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors mb-2">
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
      <div className="bg-green-50 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Uji Pemahaman Anda
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Setelah menyelesaikan semua materi, uji pengetahuan Anda dengan
            mengerjakan kuis Android Studio. Dapatkan sertifikat jika nilai Anda
            di atas 80!
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white rounded-full px-8 h-12 text-base"
          >
            <Link href="/quiz/android-studio">Mulai Kuis Android</Link>
          </Button>
        </div>
      </div>

      {/* 4. CTA Footer */}
      <div className="bg-gray-900 py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">
            Siap Membuat Aplikasi Sendiri?
          </h2>
          <p className="text-gray-400 mb-8 text-lg">
            Mulai dari nol, tanpa perlu pengalaman coding mobile sebelumnya.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-full px-8 h-12 text-base shadow-lg"
          >
            <Link href="/courses/android-studio/pengenalan">
              Mulai Kelas Android
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
