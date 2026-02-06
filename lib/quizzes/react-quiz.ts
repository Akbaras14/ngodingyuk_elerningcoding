export const reactQuiz = {
  title: "Kuis React",
  questions: [
    {
      question: "Apa itu ReactJS?",
      options: [
        "Pustaka JavaScript untuk membangun antarmuka pengguna",
        "Kerangka kerja sisi server",
        "Sistem manajemen basis data",
        "Sistem operasi seluler",
      ],
      correctAnswer: "Pustaka JavaScript untuk membangun antarmuka pengguna",
    },
    {
      question: "Manakah dari berikut ini yang digunakan untuk mengelola state di React?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: "useState",
    },
    {
      question: "Apa itu JSX?",
      options: [
        "Ekstensi JavaScript",
        "Ekstensi sintaks JSON",
        "Bahasa pemrograman",
        "Mesin templat",
      ],
      correctAnswer: "Ekstensi JavaScript",
    },
    {
      question: "Bagaimana cara meneruskan data ke komponen anak di React?",
      options: ["Melalui state", "Melalui props", "Melalui context", "Melalui callback"],
      correctAnswer: "Melalui props",
    },
    {
      question: "Hook mana yang digunakan untuk efek samping dalam komponen fungsional?",
      options: ["useState", "useEffect", "useCallback", "useMemo"],
      correctAnswer: "useEffect",
    },
    {
      question: "Apa fungsi dari Virtual DOM di React?",
      options: [
        "Meningkatkan performa rendering",
        "Menyimpan data pengguna",
        "Menghubungkan database",
        "Mengelola routing",
      ],
      correctAnswer: "Meningkatkan performa rendering",
    },
    {
      question: "Manakah sintaks yang benar untuk membuat komponen fungsional React?",
      options: [
        "function MyComponent() { return <div /> }",
        "class MyComponent {}",
        "component MyComponent {}",
        "new Component()",
      ],
      correctAnswer: "function MyComponent() { return <div /> }",
    },
    {
      question: "Apa kegunaan atribut `key` pada list di React?",
      options: [
        "Untuk styling komponen",
        "Untuk identitas elemen agar rendering efisien",
        "Untuk menghubungkan API",
        "Untuk validasi data",
      ],
      correctAnswer: "Untuk identitas elemen agar rendering efisien",
    },
    {
      question: "Hook mana yang digunakan untuk menyimpan referensi DOM?",
      options: ["useRef", "useMemo", "useEffect", "useState"],
      correctAnswer: "useRef",
    },
    {
      question: "Bagaimana cara menangani event klik di React?",
      options: [
        "onclick='handleClick()'",
        "onClick={handleClick}",
        "onClick='handleClick'",
        "click={handleClick}",
      ],
      correctAnswer: "onClick={handleClick}",
    },
    {
      question: "Apa perbedaan utama state dan props?",
      options: [
        "State dapat diubah, props bersifat read-only",
        "Props dapat diubah, state tidak",
        "Keduanya sama",
        "State hanya untuk styling",
      ],
      correctAnswer: "State dapat diubah, props bersifat read-only",
    },
    {
      question: "Hook mana yang digunakan untuk optimasi performa dengan memoization?",
      options: ["useMemo", "useEffect", "useState", "useRef"],
      correctAnswer: "useMemo",
    },
    {
      question: "Apa fungsi dari React Fragment?",
      options: [
        "Membungkus elemen tanpa menambah node DOM",
        "Mengelola routing",
        "Mengelola state global",
        "Menghubungkan API",
      ],
      correctAnswer: "Membungkus elemen tanpa menambah node DOM",
    },
    {
      question: "Library apa yang umum digunakan untuk routing di React?",
      options: ["React Router", "Axios", "Redux", "NextAuth"],
      correctAnswer: "React Router",
    },
    {
      question: "Perintah apa yang digunakan untuk membuat aplikasi React dengan Vite?",
      options: [
        "npm create vite@latest",
        "npx create-react-app",
        "npm init react",
        "react new app",
      ],
      correctAnswer: "npm create vite@latest",
    },
  ],
};
