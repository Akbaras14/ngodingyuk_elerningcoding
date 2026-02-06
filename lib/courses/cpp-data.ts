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

export const cppChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan C++",
    description: "Apa itu C++ dan sejarahnya.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Apa itu C++?</h2>\n      <p class=\"mb-4\">C++ adalah bahasa pemrograman lintas platform yang dapat digunakan untuk membuat aplikasi berkinerja tinggi.</p>\n      <p class=\"mb-4\">C++ dikembangkan oleh Bjarne Stroustrup, sebagai perpanjangan dari bahasa C.</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">Mengapa Menggunakan C++?</h3>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2\">\n        <li>C++ adalah salah satu bahasa pemrograman paling populer di dunia.</li>\n        <li>C++ dapat ditemukan di sistem operasi, Antarmuka Pengguna Grafis, dan sistem tertanam.</li>\n        <li>C++ adalah bahasa berorientasi objek yang memberikan struktur jelas pada program dan memungkinkan kode digunakan kembali (reusable).</li>\n        <li>C++ portabel dan dapat digunakan untuk mengembangkan aplikasi yang dapat diadaptasi ke berbagai platform.</li>\n      </ul>\n    ",
    code: {
      lang: "cpp",
      label: "Hello World C++",
      value: `#include <iostream>

int main() {
  std::cout << "Hello World!";
  return 0;
}`
    }
  },
  {
    id: "syntax",
    title: "Sintaks C++",
    description: "Memahami struktur dasar program C++.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Membedah Kode C++</h2>\n      <p class=\"mb-4\">Mari kita lihat baris demi baris dari kode dasar C++:</p>\n      \n      <div class=\"space-y-4 mb-6\">\n        <div class=\"p-4 bg-white border border-gray-200 rounded-lg\">\n          <code class=\"text-blue-700 font-bold\">#include &lt;iostream&gt;</code>\n          <p class=\"text-sm mt-1\">Library header file yang memungkinkan kita bekerja dengan objek input dan output (seperti <code>cout</code>).</p>\n        </div>\n        <div class=\"p-4 bg-white border border-gray-200 rounded-lg\">\n          <code class=\"text-blue-700 font-bold\">int main()</code>\n          <p class=\"text-sm mt-1\">Fungsi utama. Setiap program C++ dimulai dari fungsi ini.</p>\n        </div>\n        <div class=\"p-4 bg-white border border-gray-200 rounded-lg\">\n          <code class=\"text-blue-700 font-bold\">std::cout</code>\n          <p class=\"text-sm mt-1\">Objek untuk mencetak output/teks ke layar.</p>\n        </div>\n        <div class=\"p-4 bg-white border border-gray-200 rounded-lg\">\n          <code class=\"text-blue-700 font-bold\">return 0;</code>\n          <p class=\"text-sm mt-1\">Mengakhiri fungsi main.</p>\n        </div>\n      </div>\n    "
  },
  {
    id: "output",
    title: "Output (Cout)",
    description: "Menampilkan teks dan angka.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">C++ Output</h2>\n      <p class=\"mb-4\">Objek <code>cout</code>, bersama dengan operator <code>&lt;&lt;</code>, digunakan untuk menampilkan nilai/mencetak teks:</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">Baris Baru (New Line)</h3>\n      <p class=\"mb-4\">Untuk menyisipkan baris baru, Anda dapat menggunakan karakter <code>\\n</code> atau manipulator <code>endl</code>:</p>\n    ",
    code: {
      lang: "cpp",
      label: "Contoh Output",
      value: `#include <iostream>
using namespace std;

int main() {
  cout << "Hello World! \\n";
  cout << "Saya sedang belajar C++";
  return 0;
}`
    }
  },
  {
    id: "variables",
    title: "Variables",
    description: "Wadah penyimpanan data.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Variabel dalam C++</h2>\n      <p class=\"mb-4\">Di C++, ada berbagai jenis variabel (didefinisikan dengan kata kunci yang berbeda), misalnya:</p>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2\">\n        <li><code>int</code> - menyimpan bilangan bulat (whole numbers), tanpa desimal, seperti 123 atau -123.</li>\n        <li><code>double</code> - menyimpan angka floating point, dengan desimal, seperti 19.99 atau -19.99.</li>\n        <li><code>char</code> - menyimpan karakter tunggal, seperti 'a' atau 'B'. Nilai char dikelilingi oleh tanda kutip tunggal.</li>\n        <li><code>string</code> - menyimpan teks, seperti \"Hello World\". Nilai string dikelilingi oleh tanda kutip ganda.</li>\n        <li><code>bool</code> - menyimpan nilai dengan dua status: true atau false.</li>\n      </ul>\n    ",
    code: {
      lang: "cpp",
      label: "Deklarasi Variabel",
      value: `int myNum = 15;
double myFloatNum = 5.99;
char myLetter = 'D';
string myText = "Hello";
bool myBoolean = true;`
    }
  },
  {
    id: "input",
    title: "User Input (Cin)",
    description: "Menerima input dari pengguna.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">C++ User Input</h2>\n      <p class=\"mb-4\">Anda telah belajar bahwa <code>cout</code> digunakan untuk menampilkan nilai. Sekarang kita akan menggunakan <code>cin</code> untuk mendapatkan input dari pengguna.</p>\n      <p class=\"mb-4\"><code>cin</code> adalah variabel standar yang membaca data dari keyboard dengan operator ekstraksi (<code>&gt;&gt;</code>).</p>\n    ",
    code: {
      lang: "cpp",
      label: "Contoh Input",
      value: `#include <iostream>
using namespace std;

int main() {
  int x; 
  cout << "Ketik sebuah angka: "; // Tipe angka dan tekan enter
  cin >> x; // Mengambil input user
  cout << "Angka Anda adalah: " << x;
  return 0;
}`
    }
  },
  {
    id: "operators",
    title: "Operators",
    description: "Melakukan operasi pada variabel dan nilai.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Operator C++</h2>\n      <p class=\"mb-4\">Operator digunakan untuk melakukan operasi pada variabel dan nilai.</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">Operator Aritmatika</h3>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2\">\n        <li><code>+</code> Penjumlahan</li>\n        <li><code>-</code> Pengurangan</li>\n        <li><code>*</code> Perkalian</li>\n        <li><code>/</code> Pembagian</li>\n        <li><code>%</code> Modulus (Sisa Bagi)</li>\n        <li><code>++</code> Increment</li>\n        <li><code>--</code> Decrement</li>\n      </ul>\n    ",
    code: {
      lang: "cpp",
      label: "Contoh Operator",
      value: `int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)`
    }
  },
  {
    id: "conditions",
    title: "Conditions",
    description: "If, Else, dan Switch.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Pernyataan Kondisional</h2>\n      <p class=\"mb-4\">C++ mendukung kondisi logika matematika biasa:</p>\n      <ul class=\"list-disc pl-6 mb-6 space-y-2\">\n        <li><code>if</code> untuk menentukan blok kode yang akan dieksekusi, jika kondisi tertentu benar.</li>\n        <li><code>else</code> untuk menentukan blok kode yang akan dieksekusi, jika kondisi yang sama salah.</li>\n        <li><code>else if</code> untuk menentukan kondisi baru yang akan diuji, jika kondisi pertama salah.</li>\n        <li><code>switch</code> untuk menentukan banyak blok kode alternatif yang akan dieksekusi.</li>\n      </ul>\n    ",
    code: {
      lang: "cpp",
      label: "Contoh If Else",
      value: `int time = 20;
if (time < 18) {
  cout << "Selamat siang.";
} else {
  cout << "Selamat malam.";
}`
    }
  },
  {
    id: "loops",
    title: "Loops",
    description: "Perulangan While dan For.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">C++ Loops</h2>\n      <p class=\"mb-4\">Loop dapat mengeksekusi blok kode selama kondisi tertentu tercapai.</p>\n      <p class=\"mb-4\">Loop berguna karena menghemat waktu, mengurangi kesalahan, dan membuat kode lebih mudah dibaca.</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">While Loop</h3>\n      <p class=\"mb-4\">Loop while menelusuri blok kode selama kondisi yang ditentukan bernilai true.</p>\n      \n      <h3 class=\"text-xl font-bold mb-2\">For Loop</h3>\n      <p class=\"mb-4\">Bila Anda tahu persis berapa kali Anda ingin mengulang melalui blok kode, gunakan loop for.</p>\n    ",
    code: {
      lang: "cpp",
      label: "Contoh Loops",
      value: `// While Loop
int i = 0;
while (i < 5) {
  cout << i << "\\n";
  i++;
}

// For Loop
for (int j = 0; j < 5; j++) {
  cout << j << "\\n";
}`
    }
  },
  {
    id: "arrays",
    title: "Arrays",
    description: "Menyimpan banyak nilai.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">C++ Arrays</h2>\n      <p class=\"mb-4\">Array digunakan untuk menyimpan beberapa nilai dalam satu variabel, alih-alih mendeklarasikan variabel terpisah untuk setiap nilai.</p>\n      <p class=\"mb-4\">Untuk mendeklarasikan array, tentukan tipe variabel, tentukan nama array diikuti dengan tanda kurung siku <code>[]</code> dan tentukan jumlah elemen yang harus disimpannya.</p>\n    ",
    code: {
      lang: "cpp",
      label: "Contoh Array",
      value: `string cars[4] = {"Volvo", "BMW", "Ford", "Mazda"};
int myNum[3] = {10, 20, 30};

cout << cars[0]; // Output: Volvo`
    }
  },
  {
    id: "functions",
    title: "Functions",
    description: "Blok kode modular.",
    content: "\n      <h2 class=\"text-2xl font-bold mb-4\">Fungsi C++</h2>\n      <p class=\"mb-4\">Fungsi adalah blok kode yang hanya berjalan ketika dipanggil.</p>\n      <p class=\"mb-4\">Anda dapat mengirimkan data, yang dikenal sebagai parameter, ke dalam fungsi.</p>\n      <p class=\"mb-4\">Fungsi digunakan untuk melakukan tindakan tertentu, dan mereka penting untuk menggunakan kembali kode: Tentukan kode sekali, dan gunakan berkali-kali.</p>\n    ",
    code: {
      lang: "cpp",
      label: "Membuat Fungsi",
      value: `// Deklarasi Fungsi
void myFunction() {
  cout << "Saya baru saja dieksekusi!";
}

int main() {
  myFunction(); // Panggil fungsi
  return 0;
}`
    }
  }
];
