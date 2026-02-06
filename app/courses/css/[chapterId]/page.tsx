"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X, 
  Play, 
  CheckCircle,
  Home,
  Code2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cssChapters } from "@/lib/courses/css-data";

export default function ChapterPage() {
  const params = useParams();
  const router = useRouter();
  const chapterId = params.chapterId as string;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [playgroundOpen, setPlaygroundOpen] = useState(false);
  const [playgroundCode, setPlaygroundCode] = useState("");

  // Find current chapter index
  const currentIndex = cssChapters.findIndex((c) => c.id === chapterId);
  const currentChapter = cssChapters[currentIndex];

  // Pagination Logic
  const prevChapter = currentIndex > 0 ? cssChapters[currentIndex - 1] : null;
  const nextChapter = currentIndex < cssChapters.length - 1 ? cssChapters[currentIndex + 1] : null;

  if (!currentChapter) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Halaman Tidak Ditemukan</h1>
        <p className="text-gray-500 mb-6">Materi yang Anda cari belum tersedia atau URL salah.</p>
        <Button onClick={() => router.push("/courses/css")}>Kembali ke Menu Utama</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row font-sans">
      
      {/* 1. Sidebar Navigation (Desktop & Mobile) */}
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar Content */}
      <aside 
        className={`fixed md:sticky top-0 left-0 h-full w-72 bg-gray-50 border-r border-gray-200 z-50 transform transition-transform duration-300 ease-in-out md:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200 bg-white flex items-center justify-between">
            <Link href="/courses/css" className="flex items-center gap-2 font-bold text-gray-900 hover:text-blue-600 transition-colors">
              <ChevronLeft className="w-5 h-5" /> Daftar Materi
            </Link>
            <button onClick={() => setSidebarOpen(false)} className="md:hidden p-1 rounded-md hover:bg-gray-100">
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          {/* Chapter List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {cssChapters.map((chapter, idx) => {
              const isActive = chapter.id === chapterId;
              return (
                <Link 
                  key={chapter.id} 
                  href={`/courses/css/${chapter.id}`}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive 
                      ? "bg-blue-100 text-blue-800" 
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  <span className={`flex items-center justify-center w-6 h-6 rounded text-[10px] ${
                    isActive ? "bg-blue-200 text-blue-900" : "bg-gray-200 text-gray-500"
                  }`}>
                    {idx + 1}
                  </span>
                  {chapter.title}
                  {isActive && <CheckCircle className="w-4 h-4 ml-auto" />}
                </Link>
              );
            })}
          </div>
          
          {/* Sidebar Footer */}
          <div className="p-4 border-t border-gray-200 bg-gray-50 text-xs text-center text-gray-400">
            © 2026 NgodingYuk
          </div>
        </div>
      </aside>


      {/* 2. Main Content Area */}
      <main className="flex-1 min-w-0 flex flex-col">
        
        {/* Mobile Header */}
        <div className="md:hidden sticky top-0 z-30 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="p-2 -ml-2 rounded-lg hover:bg-gray-100 text-gray-700">
            <Menu className="w-6 h-6" />
          </button>
          <span className="font-semibold text-gray-900 truncate max-w-[200px]">{currentChapter.title}</span>
          <Link href="/home">
             <Home className="w-5 h-5 text-gray-500" />
          </Link>
        </div>

        {/* Content Container */}
        <div className="flex-1 w-full max-w-4xl mx-auto p-4 md:p-10 lg:p-12 pb-24">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/home" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link href="/courses/css" className="hover:text-blue-600">CSS</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{currentChapter.title}</span>
          </div>

          {/* Title & Desc */}
          <header className="mb-10 border-b border-gray-100 pb-8">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              {currentChapter.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {currentChapter.description}
            </p>
          </header>

          {/* Dynamic Content (Rendered HTML string safely) */}
          <article className="prose prose-lg prose-blue w-full max-w-none text-gray-700 prose-pre:bg-gray-900 prose-pre:text-white">
            <div dangerouslySetInnerHTML={{ __html: currentChapter.content }} />
          </article>

          {/* Code Example Block (If exists) */}
          {currentChapter.code && (
            <div className="mt-10 bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800">
              <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
                <span className="text-xs font-mono text-gray-400 font-bold uppercase tracking-wider">
                  {currentChapter.code.label || "Example Code"}
                </span>
                <button 
                  onClick={() => {
                    setPlaygroundCode(currentChapter.code!.value);
                    setPlaygroundOpen(true);
                  }}
                  className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" /> Try it Yourself
                </button>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed text-blue-100">
                  <code>{currentChapter.code.value}</code>
                </pre>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200">
            {prevChapter ? (
              <Button 
                variant="outline" 
                className="w-full sm:w-auto h-12 px-6 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                onClick={() => router.push(`/courses/css/${prevChapter.id}`)}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                <div className="text-left">
                  <span className="block text-[10px] text-gray-400 uppercase tracking-wider">Sebelumnya</span>
                  <span className="block font-semibold">{prevChapter.title}</span>
                </div>
              </Button>
            ) : (
              <div className="hidden sm:block" /> /* Spacer */
            )}

            {nextChapter ? (
              <Button 
                className="w-full sm:w-auto h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20"
                onClick={() => router.push(`/courses/css/${nextChapter.id}`)}
              >
                <div className="text-right">
                  <span className="block text-[10px] text-blue-100 uppercase tracking-wider">Selanjutnya</span>
                  <span className="block font-semibold">{nextChapter.title}</span>
                </div>
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button 
                className="w-full sm:w-auto h-12 px-6 bg-green-600 hover:bg-green-700 text-white"
                onClick={() => router.push("/certificate/css")}
              >
                Selesai <CheckCircle className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>

        </div>
      </main>
      
      {/* Playground Modal */}
      {playgroundOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-6xl h-[85vh] rounded-2xl overflow-hidden flex flex-col shadow-2xl animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">Live Editor</h3>
                  <p className="text-xs text-gray-500">Edit kode di kiri, lihat hasil di kanan.</p>
                </div>
              </div>
              <button 
                onClick={() => setPlaygroundOpen(false)}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 flex flex-col md:flex-row min-h-0">
              {/* Code Editor */}
              <div className="flex-1 flex flex-col border-r border-gray-200 min-h-0">
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                  <span className="text-xs font-mono text-gray-500 font-bold uppercase">CSS / HTML Source</span>
                  <span className="text-[10px] bg-gray-200 px-2 py-0.5 rounded text-gray-500">Editable</span>
                </div>
                <textarea 
                  className="flex-1 p-6 font-mono text-sm bg-gray-900 text-blue-100 resize-none focus:outline-none w-full"
                  value={playgroundCode}
                  onChange={(e) => setPlaygroundCode(e.target.value)}
                  spellCheck={false}
                />
              </div>

              {/* Live Preview */}
              <div className="flex-1 flex flex-col bg-white min-h-0">
                <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex justify-between items-center">
                  <span className="text-xs font-mono text-gray-500 font-bold uppercase">Live Preview</span>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] text-gray-400">Auto-updating</span>
                  </div>
                </div>
                <iframe 
                  className="flex-1 w-full bg-white"
                  srcDoc={playgroundCode}
                  title="Live Preview"
                  sandbox="allow-scripts"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
