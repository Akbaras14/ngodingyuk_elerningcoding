export const javascriptQuiz = {
  title: "Kuis JavaScript",
  questions: [
    {
      question: "Di dalam elemen HTML mana kita menempatkan JavaScript?",
      options: ["<script>", "<javascript>", "<js>", "<scripting>"],
      correctAnswer: "<script>",
    },
    {
      question: "Sintaks yang benar untuk merujuk skrip eksternal bernama 'xxx.js' adalah?",
      options: [
        "<script href='xxx.js'>",
        "<script name='xxx.js'>",
        "<script src='xxx.js'>",
        "<script file='xxx.js'>",
      ],
      correctAnswer: "<script src='xxx.js'>",
    },
    {
      question: "Bagaimana cara menulis 'Hello World' di kotak peringatan (alert box)?",
      options: [
        "msgBox('Hello World');",
        "alertBox('Hello World');",
        "msg('Hello World');",
        "alert('Hello World');",
      ],
      correctAnswer: "alert('Hello World');",
    },
    {
      question: "Bagaimana cara membuat fungsi di JavaScript?",
      options: [
        "function myFunction()",
        "function:myFunction()",
        "function = myFunction()",
        "function => myFunction()",
      ],
      correctAnswer: "function myFunction()",
    },
    {
      question: "Bagaimana cara memanggil fungsi bernama 'myFunction'?",
      options: [
        "call myFunction()",
        "call function myFunction()",
        "myFunction()",
        "call.myFunction()",
      ],
      correctAnswer: "myFunction()",
    },
    {
      question: "Kata kunci apa yang digunakan untuk mendeklarasikan variabel di JavaScript modern?",
      options: ["var", "let", "const", "let dan const"],
      correctAnswer: "let dan const",
    },
    {
      question: "Apa tipe data dari `true` di JavaScript?",
      options: ["string", "number", "boolean", "object"],
      correctAnswer: "boolean",
    },
    {
      question: "Operator apa yang digunakan untuk membandingkan nilai dan tipe data?",
      options: ["==", "=", "===", "!="],
      correctAnswer: "===",
    },
    {
      question: "Apa hasil dari `typeof []`?",
      options: ["array", "list", "object", "undefined"],
      correctAnswer: "object",
    },
    {
      question: "Method mana yang digunakan untuk menampilkan output ke console?",
      options: ["console.print()", "console.log()", "print()", "log.console()"],
      correctAnswer: "console.log()",
    },
    {
      question: "Struktur kontrol apa yang digunakan untuk percabangan kondisi?",
      options: ["for", "while", "if", "loop"],
      correctAnswer: "if",
    },
    {
      question: "Apa fungsi dari `addEventListener()`?",
      options: [
        "Menjalankan fungsi secara langsung",
        "Menambahkan event pada elemen",
        "Menghapus event",
        "Mengatur waktu eksekusi",
      ],
      correctAnswer: "Menambahkan event pada elemen",
    },
    {
      question: "Method array mana yang digunakan untuk menambahkan elemen di akhir array?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      correctAnswer: "push()",
    },
    {
      question: "Apa hasil dari `2 + '2'` di JavaScript?",
      options: ["4", "22", "NaN", "Error"],
      correctAnswer: "22",
    },
    {
      question: "Fungsi mana yang digunakan untuk mengubah JSON menjadi object JavaScript?",
      options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "convert.JSON()"],
      correctAnswer: "JSON.parse()",
    },
  ],
};
