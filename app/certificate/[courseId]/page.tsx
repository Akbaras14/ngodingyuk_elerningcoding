"use client";

import React, { useState, useEffect, use } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Barcode from "react-barcode";
import Logo from "@/components/splashscreen/Logo";

export default function CertificatePage({
  params: paramsPromise,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const params = use(paramsPromise);
  const courseId = params.courseId;

  const { user } = useAuth();
  const router = useRouter();
  const courseName = courseId.charAt(0).toUpperCase() + courseId.slice(1);

  const [issuedDate, setIssuedDate] = useState("");
  const [certificateId, setCertificateId] = useState("");

  useEffect(() => {
    setIssuedDate(
      new Date().toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
    setCertificateId(
      `NY-${courseId.toUpperCase()}-${Math.floor(Math.random() * 100000000)}`
    );
  }, [courseId]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-950 dark:to-gray-900 py-4 px-3">
      {/* Buttons */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row gap-2 justify-between mb-3 print:hidden">
        <Button
          variant="outline"
          onClick={() => router.push("/home")}
          className="w-full sm:w-auto text-sm"
        >
          Kembali
        </Button>
        <Button
          onClick={() => window.print()}
          className="w-full sm:w-auto text-sm bg-blue-600 text-white"
        >
          Cetak
        </Button>
      </div>

      {/* === MOBILE SCALE WRAPPER === */}
      <div className="w-full flex justify-center sm:block">
        <div className="scale-[0.82] sm:scale-102 origin-top print:scale-100">
          {/* Certificate */}
          <div
            className="
              relative
              w-full
              max-w-[320px]
              sm:max-w-2xl
              lg:max-w-5xl

              bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700
              rounded-lg
              shadow-2xl

              m-4.5
              sm:p-10
              

              border-4
              sm:border-8
              lg:border-12
              border-double
              border-blue-500
              dark:border-blue-400

              text-center
              overflow-hidden

              font-serif
              sm:aspect-297/210
            "
          >
            {/* Watermark */}
            <div
              className="absolute inset-0 opacity-5 dark:opacity-4 pointer-events-none"
              style={{
                backgroundImage: "url('/assets/logo/logo.png')",
                backgroundSize: "60px",
                backgroundRepeat: "repeat",
                backgroundPosition: "center",
              }}
            />

            <div className="relative z-10 flex flex-col h-full">
              {/* Header */}
              <div className="mb-4 flex flex-col items-center">
                <div className="mb-1">
                  <Logo size={150} />
                </div>

                <h1 className="text-xl sm:text-4xl lg:text-5xl font-bold text-blue-700 dark:text-blue-400 border-b-2 sm:border-b-4 border-blue-400 tracking-wide">
                  SERTIFIKAT PENYELESAIAN
                </h1>
                <p className=" text-xs sm:text-lg italic text-gray-600 dark:text-gray-400">
                  Diberikan kepada peserta yang telah menyelesaikan pembelajaran
                  dengan baik
                </p>
              </div>

              {/* Name and Course */}
              <div className="flex-grow flex flex-col justify-center my-2">
                <p className="text-xs sm:text-lg mb-1 text-gray-700 dark:text-gray-300">
                  Dengan bangga diberikan kepada
                </p>
                <p className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 dark:text-blue-300 border-b-2 border-blue-300 pb-2 leading-tight tracking-wide">
                  {user?.name ?? "Nama Siswa"}
                </p>
                <p className="mt-2 text-xs sm:text-lg italic text-gray-600 dark:text-gray-400">
                  atas keberhasilannya menyelesaikan pembelajaran
                </p>
                <p className="mt-2 text-lg sm:text-5xl lg:text-6xl font-bold text-blue-700 dark:text-blue-400 border-t-2 border-blue-300 pt-2 leading-tight tracking-wide">
                  “{courseName}”
                </p>
              </div>

              {/* Footer */}
              <div className="mt-4 flex justify-between items-end">
                <div className="flex flex-col items-center">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-1">
                    Dikeluarkan pada
                  </p>
                  <p className="text-sm sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                    {issuedDate}
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Dikeluarkan Oleh
                  </p>
                  <p className="text-sm sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    NgodingYuk Team
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    developer ngodingyuk
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <img
                    src="/assets/seal.png" // Placeholder untuk segel; ganti dengan gambar asli
                    alt="Seal"
                    className="w-16 h-16 sm:w-24 sm:h-24 opacity-70 mb-1"
                  />
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    Segel Resmi
                  </p>
                </div>
              </div>

              {/* Barcode */}
              <div className="absolute bottom-1 right-30 text-right">
                <p className="text-xs sm:text-sm mb-1 text-gray-500 dark:text-gray-400">
                  ID: {certificateId}
                </p>
                {certificateId && (
                  <Barcode
                    value={certificateId}
                    width={1}
                    height={20}
                    displayValue={false}
                    background="transparent"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* === END MOBILE SCALE === */}
    </div>
  );
}
