export type Chapter = {
  id: string;
  title: string;
  description: string;
  content: string; // HTML string
  code?: {
    lang: string;
    value: string;
    label?: string;
  };
};

export const cChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan Bahasa C",
    description: "Bahasa pemrograman legendaris yang menjadi fondasi sistem operasi.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Apa itu Bahasa C?</h2>\n      <p class=\"mb-4\">C adalah bahasa pemrograman prosedural yang dikembangkan oleh Dennis Ritchie pada tahun 1972 di Bell Labs.</p>\n      <p class=\"mb-4\">Meskipun sudah tua, C masih menjadi salah satu bahasa paling populer dan berpengaruh di dunia.</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">Mengapa Belajar C?</h3>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2\">\n        <li><strong>Ibu dari Semua Bahasa:</strong> Banyak bahasa modern (C++, Java, Python, PHP) meminjam sintaks dari C.</li>\n        <li><strong>Performa Tinggi:</strong> C sangat cepat dan efisien, dekat dengan bahasa mesin.</li>\n        <li><strong>Sistem Operasi:</strong> UNIX, Windows, dan Linux sebagian besar ditulis dalam C.</li>\n        <li><strong>Embedded Systems:</strong> Digunakan di mikrokontroler dan perangkat IoT.</li>\n      </ul>\n    ",
    code: {
      lang: "c",
      label: "Hello World C",
      value: "#include <stdio.h>\n\nint main() {\n  printf(\"Hello World!\");\n  return 0;\n}"
    }
  },
  {
    id: "syntax",
    title: "Sintaks Dasar",
    description: "Struktur program C dan header file.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Membedah Program C</h2>\n      <p class=\"mb-4\">Mari kita lihat elemen dasar dari kode C:</p>\n      \n      <div class=\"space-y-4 mb-6\">\n        <div class=\"p-4 bg-white border border-gray-200 rounded-lg\">\n          <code class=\"text-gray-700 font-bold\">#include &lt;stdio.h&gt;</code>\n          <p class=\"text-sm mt-1\">Library input/output standar. Diperlukan untuk menggunakan fungsi seperti <code>printf</code>.</p>\n        </div>\n        <div class=\"p-4 bg-white border border-gray-200 rounded-lg\">\n          <code class=\"text-gray-700 font-bold\">int main()</code>\n          <p class=\"text-sm mt-1\">Fungsi utama tempat eksekusi program dimulai.</p>\n        </div>\n        <div class=\"p-4 bg-white border border-gray-200 rounded-lg\">\n          <code class=\"text-gray-700 font-bold\">printf()</code>\n          <p class=\"text-sm mt-1\">Fungsi untuk menampilkan/mencetak teks ke layar.</p>\n        </div>\n        <div class=\"p-4 bg-white border border-gray-200 rounded-lg\">\n          <code class=\"text-gray-700 font-bold\">return 0;</code>\n          <p class=\"text-sm mt-1\">Mengakhiri fungsi main dan mengembalikan nilai 0 (status sukses).</p>\n        </div>\n      </div>\n    "
  },
  {
    id: "variables",
    title: "Variables & Format Specifiers",
    description: "Menyimpan data dan format pencetakan.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Variabel dalam C</h2>\n      <p class=\"mb-4\">C adalah bahasa <em>statically typed</em>, artinya Anda harus mendeklarasikan tipe data variabel.</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">Tipe Data Dasar:</h3>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2\">\n        <li><code>int</code>: Bilangan bulat (contoh: 123).</li>\n        <li><code>float</code>: Angka desimal (contoh: 19.99).</li>\n        <li><code>char</code>: Karakter tunggal (contoh: 'A').</li>\n      </ul>\n\n      <h3 class=\"text-xl font-bold mb-2\">Format Specifiers</h3>\n      <p class=\"mb-4\">Saat mencetak variabel dengan <code>printf</code>, kita harus menggunakan penentu format:</p>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2\">\n        <li><code>%d</code> atau <code>%i</code> untuk <strong>int</strong>.</li>\n        <li><code>%f</code> untuk <strong>float</strong>.</li>\n        <li><code>%c</code> untuk <strong>char</strong>.</li>\n      </ul>\n    ",
    code: {
      lang: "c",
      label: "Contoh Variabel",
      value: "#include <stdio.h>\n\nint main() {\n  int angka = 15;\n  float desimal = 5.99;\n  char huruf = 'D';\n\n  printf(\"Angka: %d\\n\", angka);\n  printf(\"Float: %f\\n\", desimal);\n  printf(\"Huruf: %c\\n\", huruf);\n  return 0;\n}"
    }
  },
  {
    id: "input",
    title: "User Input (Scanf)",
    description: "Menerima masukan dari pengguna.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Mengambil Input</h2>\n      <p class=\"mb-4\">Kita sudah tahu <code>printf()</code> untuk output. Untuk input, kita menggunakan <code>scanf()</code>.</p>\n      \n      <div class=\"bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6\">\n        <p class=\"font-bold text-yellow-700\">Penting:</p>\n        <p class=\"text-yellow-600\">Fungsi <code>scanf()</code> membutuhkan dua argumen: penentu format dan alamat variabel (menggunakan operator <code>&</code>).</p>\n      </div>\n    ",
    code: {
      lang: "c",
      label: "Contoh Scanf",
      value: "#include <stdio.h>\n\nint main() {\n  int usia;\n  \n  printf(\"Masukkan usia Anda: \");\n  scanf(\"%d\", &usia); // Perhatikan tanda &\n  \n  printf(\"Usia Anda adalah: %d\", usia);\n  return 0;\n}"
    }
  },
  {
    id: "operators",
    title: "Operators",
    description: "Melakukan operasi matematika dan logika.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Operator C</h2>\n      <p class=\"mb-4\">Operator digunakan untuk memanipulasi variabel dan nilai.</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">Operator Aritmatika</h3>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2\">\n        <li><code>+</code> (Tambah), <code>-</code> (Kurang)</li>\n        <li><code>*</code> (Kali), <code>/</code> (Bagi)</li>\n        <li><code>%</code> (Modulus/Sisa Bagi)</li>\n        <li><code>++</code> (Increment), <code>--</code> (Decrement)</li>\n      </ul>\n    ",
    code: {
      lang: "c",
      label: "Contoh Operator",
      value: "int x = 10;\nint y = 3;\nprintf(\"%d\", x % y); // Output 1 (Sisa bagi 10 dibagi 3)"
    }
  },
  {
    id: "conditions",
    title: "If Else & Switch",
    description: "Membuat keputusan dalam kode.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Kondisi If...Else</h2>\n      <p class=\"mb-4\">C mendukung kondisi logika matematika standar.</p>\n      <code class=\"block bg-gray-100 p-2 rounded mb-4\">if (kondisi) { ... } else { ... }</code>\n\n      <h2 class=\"text-2xl font-bold mb-4 mt-6\">Switch Statement</h2>\n      <p class=\"mb-4\">Digunakan untuk memilih satu dari banyak blok kode untuk dieksekusi.</p>\n    ",
    code: {
      lang: "c",
      label: "Contoh If Else",
      value: "int time = 20;\nif (time < 18) {\n  printf(\"Selamat Siang.\");\n} else {\n  printf(\"Selamat Malam.\");\n}"
    }
  },
  {
    id: "loops",
    title: "Loops",
    description: "While, Do-While, dan For Loops.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Perulangan (Loops)</h2>\n      <p class=\"mb-4\">Loop digunakan untuk mengeksekusi blok kode berulang kali selama kondisi tertentu terpenuhi.</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">For Loop</h3>\n      <p class=\"mb-4\">Digunakan ketika Anda tahu persis berapa kali Anda ingin mengulang.</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">While Loop</h3>\n      <p class=\"mb-4\">Mengulang selama kondisi bernilai true.</p>\n    ",
    code: {
      lang: "c",
      label: "Contoh For Loop",
      value: "int i;\n\nfor (i = 0; i < 5; i++) {\n  printf(\"%d\\n\", i);\n}"
    }
  },
  {
    id: "arrays",
    title: "Arrays",
    description: "Menyimpan banyak nilai sejenis.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">C Arrays</h2>\n      <p class=\"mb-4\">Array digunakan untuk menyimpan beberapa nilai dalam satu variabel tunggal.</p>\n      <p class=\"mb-4\">Untuk membuat array, tentukan tipe data, nama array, dan jumlah elemen dalam kurung siku.</p>\n      \n      <code class=\"block bg-gray-100 p-2 rounded mb-4\">int myNumbers[] = {25, 50, 75, 100};</code>\n    ",
    code: {
      lang: "c",
      label: "Akses Array",
      value: "int myNumbers[] = {25, 50, 75, 100};\nprintf(\"%d\", myNumbers[0]); // Output: 25\n\n// Ubah elemen\nmyNumbers[0] = 33;"
    }
  },
  {
    id: "pointers",
    title: "Pointers",
    description: "Konsep memori dan alamat.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Apa itu Pointer?</h2>\n      <p class=\"mb-4\">Pointer adalah fitur yang sangat kuat (dan sering ditakuti) dalam C.</p>\n      <p class=\"mb-4\"><strong>Pointer</strong> adalah variabel yang menyimpan <strong>alamat memori</strong> dari variabel lain.</p>\n      \n      <ul class=\"list-disc pl-6 mb-6 space-y-2\">\n        <li><code>&</code> (Reference operator): Mengambil alamat memori.</li>\n        <li><code>*</code> (Dereference operator): Mengambil nilai dari alamat tersebut.</li>\n      </ul>\n    ",
    code: {
      lang: "c",
      label: "Contoh Pointer",
      value: "int myAge = 43;     // Variabel int\nint* ptr = &myAge;  // Pointer menyimpan alamat myAge\n\nprintf(\"%p\\n\", ptr); // Output: 0x7ffe5367e044 (Alamat memori)\nprintf(\"%d\\n\", *ptr); // Output: 43 (Nilai di alamat tersebut)"
    }
  },
  {
    id: "functions",
    title: "Functions",
    description: "Membuat fungsi dan parameter.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Fungsi C</h2>\n      <p class=\"mb-4\">Fungsi adalah blok kode yang hanya berjalan ketika dipanggil. Di C, fungsi harus dideklarasikan atau didefinisikan sebelum digunakan (biasanya di atas main, atau menggunakan prototype).</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">Void Function</h3>\n      <p class=\"mb-4\">Fungsi yang tidak mengembalikan nilai.</p>\n    ",
    code: {
      lang: "c",
      label: "Membuat Fungsi",
      value: "#include <stdio.h>\n\n// Deklarasi Fungsi\nvoid sapa(char name[]) {\n  printf(\"Halo %s\\n\", name);\n}\n\nint main() {\n  sapa(\"Budi\");\n  return 0;\n}"
    }
  }
];
