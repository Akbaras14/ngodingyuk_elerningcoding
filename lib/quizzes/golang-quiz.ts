export const golangQuiz = {
  title: "Kuis Pemrograman Golang",
  questions: [
    {
      question: "Kata kunci mana yang digunakan untuk mendeklarasikan variabel di Go?",
      options: ["var", "let", "const", "dim"],
      correctAnswer: "var",
    },
    {
      question: "Bagaimana cara memulai program Go?",
      options: [
        "go run main.go",
        "run main.go",
        "start main.go",
        "execute main.go",
      ],
      correctAnswer: "go run main.go",
    },
    {
      question: "Paket mana yang digunakan untuk I/O terformat di Go?",
      options: ["io", "fmt", "bufio", "os"],
      correctAnswer: "fmt",
    },
    {
      question: "Apa itu `goroutine` di Go?",
      options: [
        "Fungsi yang berjalan secara bersamaan dengan fungsi lain",
        "Jenis variabel khusus",
        "Manajer paket Go",
        "Debugger bawaan",
      ],
      correctAnswer: "Fungsi yang berjalan secara bersamaan dengan fungsi lain",
    },
    {
      question: "Bagaimana cara mendeklarasikan slice di Go?",
      options: [
        "var s []int",
        "slice s []int",
        "s = make([]int)",
        "s = new slice int",
      ],
      correctAnswer: "var s []int",
    },
    {
      question: "Apa kepanjangan dari GOPATH?",
      options: [
        "Go Program Path",
        "Go Package Path",
        "Go Programming Area",
        "Go Path Workspace",
      ],
      correctAnswer: "Go Path Workspace",
    },
    {
      question: "Kata kunci apa yang digunakan untuk mendefinisikan fungsi di Go?",
      options: ["func", "function", "def", "fn"],
      correctAnswer: "func",
    },
    {
      question: "Tipe data apa yang digunakan untuk menyimpan nilai benar/salah di Go?",
      options: ["int", "string", "bool", "byte"],
      correctAnswer: "bool",
    },
    {
      question: "Bagaimana cara deklarasi variabel tanpa tipe data eksplisit di Go?",
      options: ["var x = 10", "x := 10", "let x = 10", "int x = 10"],
      correctAnswer: "x := 10",
    },
    {
      question: "Paket apa yang digunakan untuk membaca input dari keyboard?",
      options: ["fmt", "bufio", "os", "input"],
      correctAnswer: "bufio",
    },
    {
      question: "Apa fungsi dari keyword `defer` di Go?",
      options: [
        "Menjalankan fungsi sebelum program dimulai",
        "Menunda eksekusi fungsi sampai fungsi pemanggil selesai",
        "Menghentikan eksekusi fungsi",
        "Menjalankan fungsi secara paralel",
      ],
      correctAnswer:
        "Menunda eksekusi fungsi sampai fungsi pemanggil selesai",
    },
    {
      question: "Struktur data apa yang digunakan untuk pasangan key-value di Go?",
      options: ["array", "slice", "map", "struct"],
      correctAnswer: "map",
    },
    {
      question: "Apa kegunaan keyword `package main`?",
      options: [
        "Menandai paket standar",
        "Menentukan paket utama aplikasi",
        "Mengimpor library",
        "Menjalankan goroutine",
      ],
      correctAnswer: "Menentukan paket utama aplikasi",
    },
    {
      question: "Fungsi apa yang menjadi entry point program Go?",
      options: ["start()", "run()", "init()", "main()"],
      correctAnswer: "main()",
    },
    {
      question: "Paket mana yang digunakan untuk mengakses argumen command line?",
      options: ["flag", "os", "args", "cli"],
      correctAnswer: "os",
    },
  ],
};
