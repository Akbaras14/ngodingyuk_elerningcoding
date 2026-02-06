
import { htmlQuiz } from "./html-quiz";
import { cssQuiz } from "./css-quiz";
import { javascriptQuiz } from "./javascript-quiz";
import { pythonQuiz } from "./python-quiz";
import { javaQuiz } from "./java-quiz";
import { reactQuiz } from "./react-quiz";
import { androidStudioQuiz } from "./android-studio-quiz";
import { cQuiz } from "./c-quiz";
import { cppQuiz } from "./cpp-quiz";
import { csharpQuiz } from "./csharp-quiz";
import { golangQuiz } from "./golang-quiz";
import { mysqlQuiz } from "./mysql-quiz";
import { phpQuiz } from "./php-quiz";
import { sqlQuiz } from "./sql-quiz";
import { uiuxQuiz } from "./uiux-quiz";
// Import other quizzes here

const quizzes: { [key: string]: any } = {
  html: htmlQuiz,
  css: cssQuiz,
  javascript: javascriptQuiz,
  python: pythonQuiz,
  java: javaQuiz,
  react: reactQuiz,
  "android-studio": androidStudioQuiz,
  c: cQuiz,
  cpp: cppQuiz,
  csharp: csharpQuiz,
  golang: golangQuiz,
  mysql: mysqlQuiz,
  php: phpQuiz,
  sql: sqlQuiz,
  uiux: uiuxQuiz,
  // Add other quizzes here
};

export const getQuizByCourseId = (courseId: string) => {
  return quizzes[courseId];
};
