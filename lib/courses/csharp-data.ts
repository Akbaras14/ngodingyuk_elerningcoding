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

export const csharpChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan C#",
    description: "Bahasa modern dari Microsoft.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu C#?</h2>
      <p class="mb-4">C# (diucapkan "C-Sharp") adalah bahasa pemrograman berorientasi objek yang dikembangkan oleh Microsoft.</p>
      <p class="mb-4">C# berjalan di atas .NET Framework dan digunakan untuk mengembangkan berbagai jenis aplikasi.</p>
      
      <h3 class="text-xl font-bold mb-2">Kegunaan C#:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Aplikasi Desktop (Windows).</li>
        <li>Aplikasi Web (ASP.NET).</li>
        <li>Aplikasi Mobile (Xamarin/MAUI).</li>
        <li>Game Development (Unity).</li>
        <li>VR dan AR.</li>
      </ul>
    `,
    code: {
      lang: "csharp",
      label: "Hello World C#",
      value: `using System;

namespace HelloWorld
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Hello World!");    
    }
  }
}`
    }
  },
  {
    id: "syntax",
    title: "Sintaks C#",
    description: "Struktur dasar program C#.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Memahami Kode C#</h2>
      <p class="mb-4">Mari kita bedah struktur dasar kode C#:</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-purple-700 font-bold">using System;</code>
          <p class="text-sm mt-1">Menggunakan class dari namespace <code>System</code> (seperti <code>Console</code>).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-purple-700 font-bold">namespace</code>
          <p class="text-sm mt-1">Wadah untuk mengatur kode Anda (mirip paket).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-purple-700 font-bold">class Program</code>
          <p class="text-sm mt-1">Wadah untuk data dan metode. Setiap baris kode C# harus berada di dalam class.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-purple-700 font-bold">static void Main()</code>
          <p class="text-sm mt-1">Titik awal (entry point) program C#.</p>
        </div>
      </div>
    `
  },
  {
    id: "output",
    title: "Output & Input",
    description: "Menampilkan dan menerima data.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Output (Mencetak Teks)</h2>
      <p class="mb-4">Gunakan <code>Console.WriteLine()</code> untuk mencetak teks dan pindah ke baris baru.</p>
      <p class="mb-4">Gunakan <code>Console.Write()</code> untuk mencetak tanpa pindah baris.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Input (Menerima Data)</h2>
      <p class="mb-4">Gunakan <code>Console.ReadLine()</code> untuk mendapatkan input pengguna. Metode ini mengembalikan <code>string</code>.</p>
    `,
    code: {
      lang: "csharp",
      label: "Input/Output",
      value: `// Output
Console.WriteLine("Masukkan nama Anda:");

// Input
string userName = Console.ReadLine();

// Output hasil
Console.WriteLine("Username is: " + userName);`
    }
  },
  {
    id: "variables",
    title: "Variables & Data Types",
    description: "Menyimpan data di memori.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Variabel C#</h2>
      <p class="mb-4">Sintaks: <code>type variableName = value;</code></p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-purple-600">int</h4>
          <p class="text-sm">Bilangan bulat (contoh: 123).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-purple-600">double</h4>
          <p class="text-sm">Bilangan desimal (contoh: 19.99).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-purple-600">char</h4>
          <p class="text-sm">Karakter tunggal dengan kutip satu ('A').</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-purple-600">string</h4>
          <p class="text-sm">Teks dengan kutip ganda ("Halo").</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-purple-600">bool</h4>
          <p class="text-sm">Nilai <code>true</code> atau <code>false</code>.</p>
        </div>
      </div>
    `,
    code: {
      lang: "csharp",
      label: "Deklarasi Variabel",
      value: `int myNum = 5;
double myDoubleNum = 5.99D;
char myLetter = 'D';
bool myBool = true;
string myText = "Hello";`
    }
  },
  {
    id: "operators",
    title: "Operators",
    description: "Melakukan operasi matematika dan logika.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Operator C#</h2>
      <p class="mb-4">C# memiliki berbagai jenis operator:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Aritmatika:</strong> <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code> (Modulus).</li>
        <li><strong>Penugasan:</strong> <code>=</code>, <code>+=</code>, <code>-=</code>.</li>
        <li><strong>Perbandingan:</strong> <code>==</code>, <code>!=</code>, <code>&gt;</code>, <code>&lt;</code>.</li>
        <li><strong>Logika:</strong> <code>&&</code> (AND), <code>||</code> (OR), <code>!</code> (NOT).</li>
      </ul>
    `,
    code: {
      lang: "csharp",
      label: "Contoh Operator",
      value: `int x = 100 + 50;
int y = x * 2;
bool isTrue = (x > 100 && y < 500);`
    }
  },
  {
    id: "conditions",
    title: "If...Else & Switch",
    description: "Logika percabangan.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Pernyataan If</h2>
      <p class="mb-4">Gunakan <code>if</code> untuk menentukan blok kode yang akan dieksekusi jika kondisi benar.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Pernyataan Switch</h2>
      <p class="mb-4">Gunakan <code>switch</code> untuk memilih satu dari banyak blok kode untuk dieksekusi.</p>
    `,
    code: {
      lang: "csharp",
      label: "Contoh If Else",
      value: `int time = 20;
if (time < 18) 
{
  Console.WriteLine("Good day.");
} 
else 
{
  Console.WriteLine("Good evening.");
}`
    }
  },
  {
    id: "loops",
    title: "Loops",
    description: "While dan For loop.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Perulangan</h2>
      <p class="mb-4">Loop dapat mengeksekusi blok kode selama kondisi tertentu tercapai.</p>
      
      <h3 class="text-xl font-bold mb-2">While Loop</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">while (condition) { ... }</code>
      
      <h3 class="text-xl font-bold mb-2">For Loop</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">for (statement 1; statement 2; statement 3) { ... }</code>
    `,
    code: {
      lang: "csharp",
      label: "Contoh For Loop",
      value: `for (int i = 0; i < 5; i++) 
{
  Console.WriteLine(i);
}`
    }
  },
  {
    id: "arrays",
    title: "Arrays",
    description: "Menyimpan banyak nilai.",
    content: `
      <h2 class="text-2xl font-bold mb-4">C# Arrays</h2>
      <p class="mb-4">Array digunakan untuk menyimpan beberapa nilai dalam satu variabel.</p>
      <p class="mb-4">Deklarasikan tipe variabel dengan tanda kurung siku <code>[]</code>.</p>
      
      <code class="block bg-gray-100 p-2 rounded mb-4">string[] cars;</code>
    `,
    code: {
      lang: "csharp",
      label: "Menggunakan Array",
      value: `string[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
Console.WriteLine(cars[0]); // Output Volvo

// Mengubah elemen
cars[0] = "Opel";`
    }
  },
  {
    id: "methods",
    title: "Methods",
    description: "Fungsi dalam class.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Method C#</h2>
      <p class="mb-4">Method adalah blok kode yang hanya berjalan ketika dipanggil.</p>
      <p class="mb-4">Anda dapat mengirim data (parameter) ke dalam method.</p>
      <p class="mb-4">Method digunakan untuk menggunakan kembali kode: tentukan kode sekali, dan gunakan berkali-kali.</p>
    `,
    code: {
      lang: "csharp",
      label: "Membuat Method",
      value: `static void MyMethod(string fname) 
{
  Console.WriteLine(fname + " Refsnes");
}

static void Main(string[] args)
{
  MyMethod("Liam");
  MyMethod("Jenny");
}`
    }
  },
  {
    id: "oop",
    title: "Classes & Objects",
    description: "Pemrograman Berorientasi Objek.",
    content: `
      <h2 class="text-2xl font-bold mb-4">OOP dalam C#</h2>
      <p class="mb-4">C# dikaitkan dengan kelas dan objek, beserta atribut dan metodenya.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Class:</strong> Template untuk objek (seperti cetakan kue).</li>
        <li><strong>Object:</strong> Instance dari kelas (seperti kue yang dihasilkan).</li>
      </ul>
    `,
    code: {
      lang: "csharp",
      label: "Contoh Class",
      value: `class Car 
{
  string color = "red";

  static void Main(string[] args)
  {
    Car myObj = new Car();
    Console.WriteLine(myObj.color);
  }
}`
    }
  }
];
