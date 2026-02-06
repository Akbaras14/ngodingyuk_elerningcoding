"use client";

import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, BookOpen, Clock } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "HTML Dasar",
    description: "Struktur dasar web modern untuk pemula mutlak.",
    image: "assets/logo/html.png",
    level: "Pemula",
    category: "Web",
    page: "courses/html",
    lessons: 5, // Updated to match actual content
    duration: "4h 30m",
  },
  {
    id: 2,
    title: "JavaScript Dasar",
    description: "Pelajari logika pemrograman interaktif untuk web.",
    image: "assets/logo/javascript.png",
    level: "Pemula",
    category: "Web",
    page: "courses/javascript",
    lessons: 18,
    duration: "6h 15m",
  },
  {
    id: 3,
    title: "CSS Styling",
    description: "Teknik desain cantik & responsif dengan CSS3.",
    image: "assets/logo/css.png",
    level: "Pemula",
    category: "Web",
    page: "courses/css",
    lessons: 15,
    duration: "5h 45m",
  },
  {
    id: 4,
    title: "Android Studio",
    description: "Bangun aplikasi mobile native dari nol.",
    image: "assets/logo/androidstudio.png",
    level: "Pemula",
    category: "Mobile",
    page: "courses/android-studio",
    lessons: 24,
    duration: "12h",
  },
  {
    id: 5,
    title: "Python Basic",
    description: "Fondasi data science dan backend dengan Python.",
    image: "assets/logo/python.png",
    level: "Pemula",
    category: "Data",
    page: "courses/python",
    lessons: 10,
    duration: "3h 20m",
  },
  {
    id: 6,
    title: "C++ Programming",
    description: "Algoritma efisien dan pemrograman sistem.",
    image: "assets/logo/c++.png",
    level: "Pemula",
    category: "System",
    page: "courses/cpp",
    lessons: 20,
    duration: "8h",
  },
  {
    id: 7,
    title: "Golang (Go)",
    description: "Bahasa backend modern dari Google.",
    image: "assets/logo/golang.png",
    level: "Pemula",
    category: "System",
    page: "courses/golang",
    lessons: 10,
    duration: "5h",
  },
  {
    id: 8,
    title: "Java Programming",
    description: "Bahasa populer untuk aplikasi enterprise & mobile.",
    image: "assets/logo/java.png",
    level: "Pemula",
    category: "System",
    page: "courses/java",
    lessons: 10,
    duration: "6h",
  },
  {
    id: 9,
    title: "React JS",
    description: "Library UI terpopuler untuk web modern.",
    image: "assets/logo/reactjs.png",
    level: "Pemula",
    category: "Web",
    page: "courses/react",
    lessons: 10,
    duration: "7h",
  },
  {
    id: 10,
    title: "UI/UX Design",
    description: "Desain antarmuka & pengalaman pengguna modern.",
    image: "assets/logo/uiux.png", // Using figma logo typically for UIUX
    level: "Pemula",
    category: "Design",
    page: "courses/uiux",
    lessons: 10,
    duration: "4h",
  },
  {
    id: 11,
    title: "SQL Database",
    description: "Manajemen database relasional.",
    image: "assets/logo/sql.png", // Placeholder
    level: "Pemula",
    category: "Data",
    page: "courses/sql",
    lessons: 10,
    duration: "5h",
  },
  {
    id: 12,
    title: "MySQL Admin",
    description: "Manajemen database relasional paling populer.",
    image: "assets/logo/mysql.png", // Placeholder
    level: "Pemula",
    category: "Data",
    page: "courses/mysql",
    lessons: 10,
    duration: "5h",
  },
  {
    id: 13,
    title: "PHP Backend",
    description: "Bahasa skrip server-side paling populer.",
    image: "assets/logo/php.png", // Placeholder
    level: "Pemula",
    category: "Web",
    page: "courses/php",
    lessons: 10,
    duration: "5h",
  },
  {
    id: 14,
    title: "C Programming",
    description: "Pondasi ilmu komputer dan sistem operasi.",
    image: "assets/logo/c.png", // Placeholder
    level: "Pemula",
    category: "System",
    page: "courses/c",
    lessons: 10,
    duration: "6h",
  },
  {
    id: 15,
    title: "C# Programming",
    description: "Bahasa modern untuk Windows & Game.",
    image: "assets/logo/csharp.png", // Placeholder
    level: "Pemula",
    category: "System",
    page: "courses/csharp",
    lessons: 10,
    duration: "6h",
  },
];

const categories = ["Semua", "Web", "Mobile", "Data", "System", "Design"];

export default function CourseSection() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory === "Semua" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="course"
      className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-50/30 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
              Katalog Kelas
            </h2>
            <p className="text-gray-500 mt-1">
              Eksplorasi skill baru untuk karir masa depanmu.
            </p>
          </div>

          {/* Search & Filter */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <div className="relative w-full md:w-80 group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
              </div>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari materi..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-sm transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? "bg-gray-900 text-white border-gray-900 shadow-md"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => {
              return (
                <Card
                  key={course.id}
                  className="group flex flex-col h-full bg-white border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 overflow-hidden rounded-2xl"
                >
                  {/* Image Container */}
                  <div className="relative h-44 bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-24 w-auto object-contain drop-shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 backdrop-blur-sm shadow-sm text-xs font-semibold text-gray-700"
                      >
                        {course.category}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-5 flex-grow">
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                          course.level === "Pemula"
                            ? "bg-emerald-50 text-emerald-600 border-emerald-100"
                            : course.level === "Pemula"
                            ? "bg-amber-50 text-amber-600 border-amber-100"
                            : "bg-rose-50 text-rose-600 border-rose-100"
                        }`}
                      >
                        {course.level}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed">
                      {course.description}
                    </p>
                  </CardContent>

                  <CardFooter className="p-5 pt-0 mt-auto">
                    <Button
                      asChild
                      className="w-full bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-200 hover:border-blue-600 transition-all shadow-sm font-medium"
                    >
                      <Link href={`/${course.page}`}>Mulai Belajar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-2xl border border-dashed border-gray-200">
            <div className="p-4 rounded-full bg-gray-50 mb-4">
              <Filter className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">
              Tidak ada kelas ditemukan
            </h3>
            <p className="text-gray-500 max-w-xs mx-auto mt-1">
              Coba gunakan kata kunci lain atau ganti kategori pencarian.
            </p>
            <Button
              variant="link"
              className="mt-2 text-blue-600"
              onClick={() => {
                setSearch("");
                setSelectedCategory("Semua");
              }}
            >
              Reset Filter
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
