"use client";

import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { getQuizByCourseId } from "@/lib/quizzes";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar"; // Import Navbar

export default function QuizPage({ params: paramsPromise }: { params: Promise<{ courseId: string }> }) {
  const params = use(paramsPromise);
  const courseId = params.courseId;

  const router = useRouter();
  const [quiz, setQuiz] = useState<any | null>(null);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    if (typeof courseId === 'string') {
      setQuiz(getQuizByCourseId(courseId));
    } else {
      console.error("Course ID could not be resolved to a string:", courseId);
    }
  }, [courseId]);

  if (!quiz) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900 text-gray-700 dark:text-gray-300">
        <p>Memuat kuis...</p>
      </div>
    );
  }

  const handleAnswerSelect = (questionIndex: number, option: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
    setShowWarning(false);
  };

  const calculateScore = () => {
    let correctAnswers = 0;
    quiz.questions.forEach((question: any, index: number) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const finalScore = (correctAnswers / quiz.questions.length) * 100;
    setScore(finalScore);
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    if (selectedAnswers[currentQuestionIndex] === undefined) {
      setShowWarning(true);
      return;
    }

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setShowWarning(false);
    } else {
      calculateScore();
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setScore(null);
    setShowResult(false);
    setShowWarning(false);
  };

  if (showResult && score !== null) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900 py-12 px-4">
        <Navbar />
        <div className="pt-20 flex flex-col items-center justify-center"> {/* Added pt-20 for Navbar */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl shadow-blue-200/50 dark:shadow-gray-900/50 border border-blue-200 dark:border-gray-700 text-center max-w-md w-full"
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">Hasil Kuis</h2>
            <p className="text-5xl font-extrabold mb-6 text-blue-800 dark:text-blue-100">
              Skor Anda: {score.toFixed(2)}%
            </p>
            {score >= 80 ? (
              <div>
                <p className="text-green-600 dark:text-green-400 text-lg font-medium mb-6">
                  Selamat! Anda lulus kuis ini dan berhak mendapatkan sertifikat.
                </p>
                <Button 
                  onClick={() => router.push(`/certificate/${courseId}`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Dapatkan Sertifikat
                </Button>
              </div>
            ) : (
              <div>
                <p className="text-red-600 dark:text-red-400 text-lg font-medium mb-6">
                  Anda belum lulus kuis. Harap tinjau kembali materi dan coba
                  lagi.
                </p>
                <Button 
                  onClick={restartQuiz}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Coba Lagi
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-950 dark:to-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="pt-20 flex flex-col items-center justify-center"> {/* Added pt-20 for Navbar */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="p-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-3xl shadow-xl shadow-blue-200/50 dark:shadow-gray-900/50 border border-blue-200 dark:border-gray-700 w-full max-w-2xl"
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 dark:text-blue-200 mb-6 text-center">
              {quiz.title}
            </h1>
            <div className="mb-8">
              <p className="text-sm text-blue-600 dark:text-blue-300 font-medium mb-3">
                Pertanyaan {currentQuestionIndex + 1} dari {quiz.questions.length}
              </p>
              {/* Added text-wrap and responsive font size */}
              <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-100 leading-relaxed text-wrap">
                {currentQuestion.question}
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              {currentQuestion.options.map((option: string, index: number) => (
                <Button
                  key={index}
                  variant={
                    selectedAnswers[currentQuestionIndex] === option
                      ? "default"
                      : "outline"
                  }
                  onClick={() => handleAnswerSelect(currentQuestionIndex, option)}
                  className={`w-full text-left justify-start px-4 py-3 rounded-xl text-base sm:text-lg transition-all duration-200 whitespace-normal h-auto
                    ${selectedAnswers[currentQuestionIndex] === option
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md"
                      : "border-blue-300 text-blue-700 hover:bg-blue-50 dark:border-blue-600 dark:text-blue-200 dark:hover:bg-blue-900/40"
                    }`}
                >
                  {option}
                </Button>
              ))}
            </div>
            {showWarning && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-600 dark:text-red-400 font-medium mt-6 text-center animate-pulse text-sm sm:text-base"
              >
                Harap pilih jawaban sebelum melanjutkan.
              </motion.p>
            )}
            <div className="mt-8 flex justify-end">
              <Button
                onClick={handleNextQuestion}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 py-3 text-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {currentQuestionIndex < quiz.questions.length - 1
                  ? "Selanjutnya"
                  : "Selesai"}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}