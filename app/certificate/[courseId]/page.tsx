"use client";

import React, { useState, useEffect, use, useRef, useCallback } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import Barcode from "react-barcode";
import Logo from "@/components/splashscreen/Logo";
import { toPng } from "html-to-image";

export default function CertificatePage({
  params: paramsPromise,
}: {
  params: Promise<{ courseId: string }>;
}) {
  const params = use(paramsPromise);
  const courseId = params.courseId;
  const courseName = courseId.charAt(0).toUpperCase() + courseId.slice(1);

  const certificateRef = useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const router = useRouter();

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

  const handleDownload = useCallback(() => {
    const node = certificateRef.current;
    if (!node) return;

    toPng(node, {
      cacheBust: true,
      pixelRatio: 2,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `sertifikat-${courseName}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch(console.error);
  }, [courseName]);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center py-6 px-3">
      {/* BUTTONS */}
      <div className="w-full max-w-6xl flex flex-col sm:flex-row justify-between gap-2 mb-4 print:hidden">
        <Button variant="outline" onClick={() => router.push("/home")}>
          Kembali
        </Button>

        <div className="flex gap-2">
          <Button
            onClick={handleDownload}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Download PNG
          </Button>
          <Button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Cetak
          </Button>
        </div>
      </div>

      {/* PREVIEW SCALE (AMAN) */}
      <div className="overflow-x-auto w-full flex justify-center">
        <div className="scale-[0.8] sm:scale-100 origin-top">
          {/* CERTIFICATE FIX SIZE */}
          <div
            ref={certificateRef}
            className="
              relative
              w-[1123px] h-[794px]
              bg-gradient-to-br from-white to-blue-50
              border-[10px] border-double border-blue-500
              rounded-xl
              shadow-2xl
              font-serif
              overflow-hidden
              text-center
            "
          >
            {/* WATERMARK */}
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage: "url('/assets/logo/logo.png')",
                backgroundSize: "80px",
                backgroundRepeat: "repeat",
              }}
            />

            <div className="relative z-10 flex flex-col h-full px-16 py-12">
              {/* HEADER */}
              <div className="mb-6">
                <Logo size={140} />
                <h1 className="text-5xl font-bold text-blue-700 mt-4 border-b-4 border-blue-400 inline-block px-6">
                  SERTIFIKAT PENYELESAIAN
                </h1>
                <p className="italic text-gray-600 mt-2">
                  Diberikan kepada peserta yang telah menyelesaikan pembelajaran
                </p>
              </div>

              {/* CONTENT */}
              <div className="flex-grow flex flex-col justify-center">
                <p className="text-lg text-gray-700 mb-2">
                  Dengan bangga diberikan kepada
                </p>

                <p className="text-5xl font-extrabold text-blue-800 border-b-2 border-blue-300 pb-2 mx-auto">
                  {user?.name ?? "Nama Peserta"}
                </p>

                <p className="italic text-gray-600 mt-3">
                  atas keberhasilannya menyelesaikan pembelajaran
                </p>

                <p className="text-6xl font-bold text-blue-700 mt-4 border-t-2 border-blue-300 pt-2">
                  “{courseName}”
                </p>
              </div>

              {/* FOOTER */}
              <div className="flex justify-between items-end mt-6">
                <div>
                  <p className="text-sm text-gray-500">Dikeluarkan pada</p>
                  <p className="text-lg font-semibold">{issuedDate}</p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-gray-500">Dikeluarkan oleh</p>
                  <p className="font-semibold">NgodingYuk Team</p>
                  <p className="text-sm text-gray-500">Developer Education</p>
                </div>

                <div className="text-center">
                  <img
                    src="/assets/seal.png"
                    alt="Seal"
                    className="w-24 h-24 mx-auto opacity-80"
                  />
                  <p className="text-sm text-gray-500">Segel Resmi</p>
                </div>
              </div>

              {/* BARCODE */}
              <div className="absolute bottom-6 right-8 text-right">
                <p className="text-sm text-gray-500 mb-1">
                  ID: {certificateId}
                </p>
                <Barcode
                  value={certificateId}
                  width={1}
                  height={30}
                  displayValue={false}
                  background="transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
