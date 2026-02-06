export const cppQuiz = {
  title: "Kuis Pemrograman C++",
  questions: [
    {
      question: "Manakah dari berikut ini sintaks yang benar untuk menyertakan file header di C++?",
      options: [
        "#include [header]",
        "#include <header>",
        "#include {header}",
        "#include 'header'",
      ],
      correctAnswer: "#include <header>",
    },
    {
      question: "Operator mana yang digunakan untuk mengakses anggota kelas melalui pointer?",
      options: [".", "->", "::", "*"],
      correctAnswer: "->",
    },
    {
      question: "Apa itu `cout` di C++?",
      options: [
        "Fungsi untuk input",
        "Objek dari kelas ostream",
        "Kata kunci untuk output",
        "Tipe data",
      ],
      correctAnswer: "Objek dari kelas ostream",
    },
    {
      question: "Manakah dari berikut ini cara yang benar untuk mengomentari beberapa baris di C++?",
      options: ["// komentar", "/* komentar */", "# komentar", "<!-- komentar -->"],
      correctAnswer: "/* komentar */",
    },
    {
      question: "Apa kepanjangan dari OOP di C++?",
      options: [
        "Object Oriented Programming",
        "Object Original Programming",
        "Oriented Object Programming",
        "Ordered Object Programming",
      ],
      correctAnswer: "Object Oriented Programming",
    },
    {
      question: "Keyword apa yang digunakan untuk mendefinisikan kelas di C++?",
      options: ["struct", "object", "class", "define"],
      correctAnswer: "class",
    },
    {
      question: "Fungsi utama yang pertama kali dijalankan pada program C++ adalah?",
      options: ["start()", "program()", "main()", "run()"],
      correctAnswer: "main()",
    },
    {
      question: "Operator apa yang digunakan untuk menampilkan output ke layar?",
      options: ["<<", ">>", "<>", "::"],
      correctAnswer: "<<",
    },
    {
      question: "Keyword apa yang digunakan untuk pewarisan (inheritance) di C++?",
      options: ["inherits", "extends", "public", "using"],
      correctAnswer: "public",
    },
    {
      question: "Apa fungsi dari `cin` di C++?",
      options: [
        "Menampilkan output",
        "Membaca input dari pengguna",
        "Mengelola file",
        "Mengatur memori",
      ],
      correctAnswer: "Membaca input dari pengguna",
    },
    {
      question: "Apa tipe data untuk menyimpan bilangan desimal di C++?",
      options: ["int", "char", "float", "bool"],
      correctAnswer: "float",
    },
    {
      question: "Simbol apa yang digunakan untuk mengakhiri setiap pernyataan di C++?",
      options: [".", ",", ";", ":"],
      correctAnswer: ";",
    },
    {
      question: "Apa kegunaan keyword `new` di C++?",
      options: [
        "Membuat variabel lokal",
        "Menghapus objek",
        "Mengalokasikan memori secara dinamis",
        "Menyalin objek",
      ],
      correctAnswer: "Mengalokasikan memori secara dinamis",
    },
    {
      question: "Keyword apa yang digunakan untuk menghapus memori yang dialokasikan dengan `new`?",
      options: ["free", "remove", "delete", "clear"],
      correctAnswer: "delete",
    },
    {
      question: "Apa yang dimaksud dengan constructor dalam C++?",
      options: [
        "Fungsi untuk menghancurkan objek",
        "Fungsi khusus yang dipanggil saat objek dibuat",
        "Fungsi untuk menampilkan data",
        "Fungsi untuk mewariskan kelas",
      ],
      correctAnswer: "Fungsi khusus yang dipanggil saat objek dibuat",
    },
  ],
};
