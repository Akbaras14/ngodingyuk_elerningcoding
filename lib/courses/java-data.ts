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

export const javaChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan Java",
    description: "Apa itu Java dan mengapa sangat populer?",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Java?</h2>
      <p class="mb-4">Java adalah bahasa pemrograman populer yang dibuat pada tahun 1995.</p>
      <p class="mb-4">Java dimiliki oleh Oracle, dan lebih dari 3 miliar perangkat menjalankan Java.</p>
      
      <h3 class="text-xl font-bold mb-2">Java digunakan untuk:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Aplikasi Mobile (khususnya Android).</li>
        <li>Aplikasi Desktop.</li>
        <li>Aplikasi Web (Server-side).</li>
        <li>Server Web dan Server Aplikasi.</li>
        <li>Game.</li>
        <li>Koneksi Database.</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Mengapa Java?</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Platform Independent</strong>: Java bekerja pada berbagai platform (Windows, Mac, Linux, Raspberry Pi, dll).</li>
        <li><strong>OOP</strong>: Java adalah bahasa berorientasi objek.</li>
        <li><strong>Aman</strong>: Java terkenal dengan fitur keamanannya.</li>
        <li><strong>Komunitas Besar</strong>: Dukungan komunitas yang sangat besar dan puluhan juta pengembang.</li>
      </ul>
    `,
    code: {
      lang: "java",
      label: "Hello World Java",
      value: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}`
    }
  },
  {
    id: "syntax",
    title: "Sintaks Java",
    description: "Memahami struktur dasar program Java.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Struktur Kode Java</h2>
      <p class="mb-4">Setiap baris kode yang berjalan di Java harus berada di dalam <code>class</code>.</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-red-700 font-bold">public class Main</code>
          <p class="text-sm mt-1">Nama class harus selalu diawali dengan huruf besar. Nama file java harus cocok dengan nama class (Main.java).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-red-700 font-bold">public static void main(String[] args)</code>
          <p class="text-sm mt-1">Ini adalah method utama. Kode di dalam kurung kurawal <code>{}</code> akan dieksekusi.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-red-700 font-bold">System.out.println()</code>
          <p class="text-sm mt-1">Perintah untuk mencetak teks ke layar.</p>
        </div>
      </div>
    `
  },
  {
    id: "variables",
    title: "Variables",
    description: "Menyimpan data dalam Java.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Variabel Java</h2>
      <p class="mb-4">Variabel adalah wadah untuk menyimpan nilai data.</p>
      <p class="mb-4">Di Java, ada berbagai jenis variabel, misalnya:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>String</code> - menyimpan teks, seperti "Halo". Nilai string diapit tanda kutip ganda.</li>
        <li><code>int</code> - menyimpan bilangan bulat (whole numbers), tanpa desimal.</li>
        <li><code>float</code> - menyimpan angka desimal (floating point).</li>
        <li><code>char</code> - menyimpan karakter tunggal, seperti 'a' atau 'B'. Diapit tanda kutip tunggal.</li>
        <li><code>boolean</code> - menyimpan nilai dengan dua status: true atau false.</li>
      </ul>
    `,
    code: {
      lang: "java",
      label: "Contoh Variabel",
      value: `String name = "John";
int myNum = 15;
float myFloatNum = 5.99f;
char myLetter = 'D';
boolean myBool = true;

System.out.println(name);`
    }
  },
  {
    id: "datatypes",
    title: "Tipe Data",
    description: "Primitif dan Non-Primitif.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Tipe Data Java</h2>
      <p class="mb-4">Tipe data dibagi menjadi dua kelompok:</p>
      
      <h3 class="text-xl font-bold mb-2">1. Tipe Data Primitif</h3>
      <p class="mb-4">Termasuk <code>byte</code>, <code>short</code>, <code>int</code>, <code>long</code>, <code>float</code>, <code>double</code>, <code>boolean</code>, dan <code>char</code>.</p>
      
      <h3 class="text-xl font-bold mb-2">2. Tipe Data Non-Primitif</h3>
      <p class="mb-4">Termasuk <code>String</code>, <code>Array</code>, dan <code>Class</code>. Tipe data ini disebut juga tipe referensi karena merujuk pada objek.</p>
    `,
    code: {
      lang: "java",
      label: "Casting Tipe Data",
      value: `int myInt = 9;
double myDouble = myInt; // Automatic casting: int ke double

System.out.println(myInt);      // Outputs 9
System.out.println(myDouble);   // Outputs 9.0`
    }
  },
  {
    id: "operators",
    title: "Operators",
    description: "Melakukan operasi pada variabel.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Operator Java</h2>
      <p class="mb-4">Operator digunakan untuk melakukan operasi pada variabel dan nilai.</p>
      
      <h3 class="text-xl font-bold mb-2">Operator Aritmatika</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>+</code> Penjumlahan</li>
        <li><code>-</code> Pengurangan</li>
        <li><code>*</code> Perkalian</li>
        <li><code>/</code> Pembagian</li>
        <li><code>%</code> Modulus (Sisa bagi)</li>
      </ul>
    `,
    code: {
      lang: "java",
      label: "Contoh Operator",
      value: `int sum1 = 100 + 50;        // 150 (100 + 50)
int sum2 = sum1 + 250;      // 400 (150 + 250)
int sum3 = sum2 + sum2;     // 800 (400 + 400)`
    }
  },
  {
    id: "conditions",
    title: "If...Else",
    description: "Membuat keputusan logis.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Kondisi Java</h2>
      <p class="mb-4">Java mendukung kondisi logis matematika biasa.</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>if</code> - Blok kode dieksekusi jika kondisi benar.</li>
        <li><code>else</code> - Blok kode dieksekusi jika kondisi salah.</li>
        <li><code>else if</code> - Kondisi baru jika kondisi pertama salah.</li>
        <li><code>switch</code> - Memilih salah satu dari banyak blok kode.</li>
      </ul>
    `,
    code: {
      lang: "java",
      label: "Contoh If Else",
      value: `int time = 20;
if (time < 18) {
  System.out.println("Good day.");
} else {
  System.out.println("Good evening.");
}
// Outputs "Good evening."`
    }
  },
  {
    id: "loops",
    title: "Loops",
    description: "Perulangan kode.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Java Loops</h2>
      <p class="mb-4">Loop dapat mengeksekusi blok kode selama kondisi tertentu tercapai.</p>
      
      <h3 class="text-xl font-bold mb-2">While Loop</h3>
      <p class="mb-4">Looping selama kondisi bernilai true.</p>
      
      <h3 class="text-xl font-bold mb-2">For Loop</h3>
      <p class="mb-4">Looping dengan jumlah iterasi yang sudah ditentukan.</p>
    `,
    code: {
      lang: "java",
      label: "Contoh For Loop",
      value: `for (int i = 0; i < 5; i++) {
  System.out.println(i);
}`
    }
  },
  {
    id: "arrays",
    title: "Arrays",
    description: "Menyimpan banyak nilai.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Java Arrays</h2>
      <p class="mb-4">Array digunakan untuk menyimpan beberapa nilai dalam satu variabel.</p>
      <p class="mb-4">Untuk mendeklarasikan array, definisikan tipe variabel dengan tanda kurung siku <code>[]</code>.</p>
    `,
    code: {
      lang: "java",
      label: "Contoh Array",
      value: `String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
int[] myNum = {10, 20, 30, 40};

System.out.println(cars[0]);
// Outputs Volvo`
    }
  },
  {
    id: "methods",
    title: "Methods",
    description: "Blok kode yang dapat digunakan kembali.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Java Methods</h2>
      <p class="mb-4">Method adalah blok kode yang hanya berjalan ketika dipanggil.</p>
      <p class="mb-4">Anda dapat mengirimkan data, yang dikenal sebagai parameter, ke dalam method.</p>
      <p class="mb-4">Method digunakan untuk melakukan tindakan tertentu, dan mereka juga dikenal sebagai <strong>fungsi</strong>.</p>
    `,
    code: {
      lang: "java",
      label: "Membuat Method",
      value: `public class Main {
  static void myMethod() {
    System.out.println("I just got executed!");
  }

  public static void main(String[] args) {
    myMethod();
  }
}`
    }
  },
  {
    id: "oop",
    title: "Classes & Objects",
    description: "Konsep dasar OOP di Java.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Java Classes dan Objects</h2>
      <p class="mb-4">Java adalah bahasa pemrograman berorientasi objek (OOP).</p>
      <p class="mb-4">Segala sesuatu di Java dikaitkan dengan kelas dan objek, beserta atribut dan metodenya.</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Class</strong> adalah cetak biru (blueprint) untuk objek.</li>
        <li><strong>Object</strong> adalah instan dari sebuah kelas.</li>
      </ul>
      
      <p class="mb-4">Contoh: Dalam kehidupan nyata, <strong>Mobil</strong> adalah objek. Mobil memiliki atribut (berat, warna) dan metode (melaju, mengerem).</p>
    `,
    code: {
      lang: "java",
      label: "Contoh Class",
      value: `public class Main {
  int x = 5;

  public static void main(String[] args) {
    Main myObj = new Main();
    System.out.println(myObj.x);
  }
}`
    }
  }
];
