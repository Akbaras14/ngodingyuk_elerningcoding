export const javaQuiz = {
  title: "Kuis Java",
  questions: [
    {
      question: "Apa fungsi utama dari metode `public static void main(String[] args)` di Java?",
      options: [
        "Untuk mendeklarasikan kelas baru",
        "Ini adalah titik masuk bagi JVM untuk memulai eksekusi program",
        "Untuk mendefinisikan konstruktor",
        "Untuk melakukan pengumpulan sampah (garbage collection)",
      ],
      correctAnswer:
        "Ini adalah titik masuk bagi JVM untuk memulai eksekusi program",
    },
    {
      question: "Kata kunci mana yang digunakan untuk mendefinisikan kelas di Java?",
      options: ["Class", "class", "className", "type"],
      correctAnswer: "class",
    },
    {
      question: "Berapa ukuran tipe data `int` di Java?",
      options: ["1 byte", "2 byte", "4 byte", "8 byte"],
      correctAnswer: "4 byte",
    },
    {
      question: "Manakah di antara berikut ini yang bukan merupakan pengubah akses (access modifier) Java?",
      options: ["public", "private", "protected", "friend"],
      correctAnswer: "friend",
    },
    {
      question: "Apa cara yang benar untuk membuat objek dari kelas bernama `MyClass`?",
      options: [
        "MyClass obj = new MyClass();",
        "MyClass obj = MyClass.new();",
        "new MyClass() obj;",
        "object obj = new MyClass();",
      ],
      correctAnswer: "MyClass obj = new MyClass();",
    },
    {
      question: "Tipe data mana yang digunakan untuk menyimpan teks di Java?",
      options: ["char", "String", "text", "varchar"],
      correctAnswer: "String",
    },
    {
      question: "Kata kunci apa yang digunakan untuk pewarisan (inheritance) di Java?",
      options: ["implements", "inherits", "extends", "super"],
      correctAnswer: "extends",
    },
    {
      question: "Apa fungsi dari kata kunci `this` di Java?",
      options: [
        "Mengacu pada kelas induk",
        "Mengacu pada objek saat ini",
        "Mengacu pada metode statis",
        "Mengacu pada paket",
      ],
      correctAnswer: "Mengacu pada objek saat ini",
    },
    {
      question: "Apa nilai default dari variabel instance bertipe `boolean` di Java?",
      options: ["true", "false", "0", "null"],
      correctAnswer: "false",
    },
    {
      question: "Struktur kontrol apa yang digunakan untuk perulangan di Java?",
      options: ["if", "switch", "for", "try"],
      correctAnswer: "for",
    },
    {
      question: "Apa fungsi dari `try-catch` di Java?",
      options: [
        "Menghentikan program",
        "Menangani exception",
        "Mengulang program",
        "Mengoptimalkan memori",
      ],
      correctAnswer: "Menangani exception",
    },
    {
      question: "Interface di Java digunakan untuk?",
      options: [
        "Menyimpan data",
        "Mewarisi implementasi",
        "Mendefinisikan kontrak metode",
        "Membuat objek langsung",
      ],
      correctAnswer: "Mendefinisikan kontrak metode",
    },
    {
      question: "Koleksi mana yang tidak mengizinkan elemen duplikat?",
      options: ["List", "ArrayList", "Set", "Map"],
      correctAnswer: "Set",
    },
    {
      question: "Package mana yang berisi kelas utilitas seperti `ArrayList`?",
      options: ["java.io", "java.lang", "java.util", "java.net"],
      correctAnswer: "java.util",
    },
    {
      question: "Apa kegunaan dari `final` keyword di Java?",
      options: [
        "Mengizinkan pewarisan",
        "Mencegah perubahan nilai atau pewarisan",
        "Menghapus objek",
        "Menangani error",
      ],
      correctAnswer: "Mencegah perubahan nilai atau pewarisan",
    },
  ],
};
