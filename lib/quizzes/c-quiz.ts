export const cQuiz = {
  title: "Kuis Pemrograman C",
  questions: [
    {
      question: "Manakah dari berikut ini yang merupakan cara yang benar untuk mendeklarasikan variabel di C?",
      options: ["var x;", "int x;", "x = int;", "declare x as int;"],
      correctAnswer: "int x;",
    },
    {
      question: "Kata kunci mana yang digunakan untuk mendefinisikan konstanta di C?",
      options: ["const", "#define", "constant", "final"],
      correctAnswer: "#define",
    },
    {
      question: "Apa output dari `printf(\"%d\", 10 / 3);`?",
      options: ["3.33", "3", "3.0", "Error"],
      correctAnswer: "3",
    },
    {
      question: "File header mana yang diperlukan untuk fungsi `printf()` dan `scanf()`?",
      options: ["<stdlib.h>", "<math.h>", "<stdio.h>", "<string.h>"],
      correctAnswer: "<stdio.h>",
    },
    {
      question: "Apa tujuan fungsi `malloc()` di C?",
      options: [
        "Untuk mengalokasikan memori secara dinamis",
        "Untuk membebaskan memori yang dialokasikan",
        "Untuk menyalin konten memori",
        "Untuk memindahkan konten memori",
      ],
      correctAnswer: "Untuk mengalokasikan memori secara dinamis",
    },
    {
      question: "Fungsi apa yang digunakan untuk membebaskan memori yang dialokasikan secara dinamis?",
      options: ["delete()", "remove()", "free()", "clear()"],
      correctAnswer: "free()",
    },
    {
      question: "Tipe data apa yang digunakan untuk menyimpan karakter tunggal di C?",
      options: ["string", "char", "character", "text"],
      correctAnswer: "char",
    },
    {
      question: "Operator apa yang digunakan untuk mengambil alamat dari sebuah variabel?",
      options: ["*", "&", "#", "%"],
      correctAnswer: "&",
    },
    {
      question: "Apa fungsi dari `scanf()`?",
      options: [
        "Menampilkan output ke layar",
        "Membaca input dari pengguna",
        "Menghitung nilai matematika",
        "Mengelola memori",
      ],
      correctAnswer: "Membaca input dari pengguna",
    },
    {
      question: "Apa hasil dari ekspresi `5 % 2` di C?",
      options: ["2", "2.5", "1", "0"],
      correctAnswer: "1",
    },
    {
      question: "Struktur kontrol apa yang digunakan untuk perulangan di C?",
      options: [
        "if",
        "switch",
        "for",
        "return",
      ],
      correctAnswer: "for",
    },
    {
      question: "Apa arti dari pointer di C?",
      options: [
        "Variabel yang menyimpan nilai biasa",
        "Variabel yang menyimpan alamat memori",
        "Variabel yang menyimpan fungsi",
        "Variabel yang menyimpan array",
      ],
      correctAnswer: "Variabel yang menyimpan alamat memori",
    },
    {
      question: "Apa fungsi utama dari `return 0;` pada fungsi `main()`?",
      options: [
        "Mengakhiri program dengan sukses",
        "Mengulang program",
        "Menampilkan nilai nol",
        "Menghapus memori",
      ],
      correctAnswer: "Mengakhiri program dengan sukses",
    },
    {
      question: "Simbol apa yang digunakan untuk mengakhiri setiap pernyataan di C?",
      options: [".", ":", ";", ","],
      correctAnswer: ";",
    },
    {
      question: "Header file apa yang digunakan untuk fungsi manipulasi string seperti `strlen()`?",
      options: ["<stdlib.h>", "<string.h>", "<stdio.h>", "<ctype.h>"],
      correctAnswer: "<string.h>",
    },
  ],
};
