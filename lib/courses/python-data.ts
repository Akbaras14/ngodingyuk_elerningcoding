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

export const pythonChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan Python",
    description: "Apa itu Python dan mengapa sangat populer?",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Python?</h2>
      <p class="mb-4">Python adalah bahasa pemrograman populer yang dibuat oleh Guido van Rossum, dan dirilis pada tahun 1991.</p>
      
      <h3 class="text-xl font-bold mb-2">Python digunakan untuk:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Pengembangan web (sisi server).</li>
        <li>Pengembangan perangkat lunak.</li>
        <li>Matematika dan Analisis Data (Data Science).</li>
        <li>Scripting sistem (automatisasi).</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Mengapa Python?</h3>
      <p class="mb-4">Python memiliki sintaksis sederhana yang mirip dengan bahasa Inggris. Python memiliki sintaksis yang memungkinkan pengembang untuk menulis program dengan baris kode yang lebih sedikit daripada beberapa bahasa pemrograman lainnya.</p>
    `,
    code: {
      lang: "python",
      label: "Hello World Python",
      value: `print("Hello, World!")`
    }
  },
  {
    id: "syntax",
    title: "Sintaks Python",
    description: "Aturan penulisan kode Python.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Indentasi Python</h2>
      <p class="mb-4">Indentasi mengacu pada spasi di awal baris kode. Di mana dalam bahasa pemrograman lain indentasi dalam kode hanya untuk keterbacaan, indentasi dalam Python sangat penting.</p>
      <p class="mb-4">Python menggunakan indentasi untuk menunjukkan blok kode.</p>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <p class="font-bold text-red-700">Penting:</p>
        <p class="text-red-600">Python akan memberikan kesalahan (error) jika Anda melewati indentasi.</p>
      </div>
    `,
    code: {
      lang: "python",
      label: "Contoh Indentasi",
      value: `if 5 > 2:
  print("Lima lebih besar dari dua!")`
    }
  },
  {
    id: "variables",
    title: "Variables",
    description: "Menyimpan nilai data.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Variabel Python</h2>
      <p class="mb-4">Variabel adalah wadah untuk menyimpan nilai data.</p>
      <p class="mb-4">Python tidak memiliki perintah untuk mendeklarasikan variabel. Variabel dibuat saat Anda pertama kali menetapkan nilai padanya.</p>
      
      <h3 class="text-xl font-bold mb-2">Aturan Penamaan:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Nama variabel harus dimulai dengan huruf atau karakter garis bawah (_).</li>
        <li>Nama variabel tidak boleh dimulai dengan angka.</li>
        <li>Nama variabel peka terhadap huruf besar-kecil (case-sensitive).</li>
      </ul>
    `,
    code: {
      lang: "python",
      label: "Contoh Variabel",
      value: `x = 5
y = "John"
print(x)
print(y)`
    }
  },
  {
    id: "datatypes",
    title: "Tipe Data",
    description: "Kategori data dalam Python.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Tipe Data Built-in</h2>
      <p class="mb-4">Dalam pemrograman, tipe data adalah konsep penting. Variabel dapat menyimpan data dari jenis yang berbeda, dan jenis yang berbeda dapat melakukan hal-hal yang berbeda.</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">Text Type:</h4>
          <p class="text-sm"><code>str</code> (String)</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">Numeric Types:</h4>
          <p class="text-sm"><code>int</code>, <code>float</code>, <code>complex</code></p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">Sequence Types:</h4>
          <p class="text-sm"><code>list</code>, <code>tuple</code>, <code>range</code></p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">Mapping Type:</h4>
          <p class="text-sm"><code>dict</code> (Dictionary)</p>
        </div>
      </div>
    `,
    code: {
      lang: "python",
      label: "Cek Tipe Data",
      value: `x = 5
print(type(x)) # <class 'int'>

y = "Hello"
print(type(y)) # <class 'str'>`
    }
  },
  {
    id: "lists",
    title: "Lists",
    description: "Menyimpan banyak item dalam satu variabel.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Python Lists</h2>
      <p class="mb-4">List digunakan untuk menyimpan beberapa item dalam satu variabel.</p>
      <p class="mb-4">List dibuat menggunakan tanda kurung siku <code>[]</code>.</p>
      <p class="mb-4">Item list diurutkan, dapat diubah, dan memungkinkan nilai duplikat.</p>
    `,
    code: {
      lang: "python",
      label: "Contoh List",
      value: `buah = ["apel", "pisang", "ceri"]
print(buah)

# Akses item
print(buah[1]) # pisang

# Ubah item
buah[1] = "mangga"
print(buah)`
    }
  },
  {
    id: "dictionaries",
    title: "Dictionaries",
    description: "Menyimpan nilai data dalam pasangan key:value.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Python Dictionaries</h2>
      <p class="mb-4">Dictionary digunakan untuk menyimpan nilai data dalam pasangan kunci:nilai (key:value).</p>
      <p class="mb-4">Dictionary adalah kumpulan yang berurutan, dapat diubah, dan tidak mengizinkan duplikat.</p>
      <p class="mb-4">Dictionary ditulis dengan tanda kurung kurawal <code>{}</code>.</p>
    `,
    code: {
      lang: "python",
      label: "Contoh Dictionary",
      value: `mobil = {
  "brand": "Ford",
  "model": "Mustang",
  "tahun": 1964
}
print(mobil)

# Akses item
print(mobil["brand"])`
    }
  },
  {
    id: "conditions",
    title: "If...Else",
    description: "Logika percabangan.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Kondisi Python</h2>
      <p class="mb-4">Python mendukung kondisi logis yang biasa dari matematika:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Sama dengan: <code>a == b</code></li>
        <li>Tidak sama dengan: <code>a != b</code></li>
        <li>Kurang dari: <code>a < b</code></li>
        <li>Lebih dari: <code>a > b</code></li>
      </ul>
      <p class="mb-4">Pernyataan "If" ditulis dengan menggunakan kata kunci <code>if</code>.</p>
    `,
    code: {
      lang: "python",
      label: "Contoh If Elif Else",
      value: `a = 200
b = 33
if b > a:
  print("b lebih besar dari a")
elif a == b:
  print("a dan b sama")
else:
  print("a lebih besar dari b")`
    }
  },
  {
    id: "loops",
    title: "Loops",
    description: "Perulangan kode.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Python While Loops</h2>
      <p class="mb-4">Dengan loop <code>while</code>, kita dapat mengeksekusi satu set pernyataan selama kondisi benar.</p>
      
      <h2 class="text-2xl font-bold mb-4">Python For Loops</h2>
      <p class="mb-4">Loop <code>for</code> digunakan untuk mengulang urutan (baik daftar, tuple, kamus, set, atau string).</p>
    `,
    code: {
      lang: "python",
      label: "Contoh Loops",
      value: `# While Loop
i = 1
while i < 6:
  print(i)
  i += 1

# For Loop
buah = ["apel", "pisang", "ceri"]
for x in buah:
  print(x)`
    }
  },
  {
    id: "functions",
    title: "Functions",
    description: "Blok kode yang dapat digunakan kembali.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Fungsi Python</h2>
      <p class="mb-4">Fungsi adalah blok kode yang hanya berjalan ketika dipanggil.</p>
      <p class="mb-4">Anda dapat mengirimkan data, yang dikenal sebagai parameter, ke dalam fungsi.</p>
      <p class="mb-4">Fungsi dapat mengembalikan data sebagai hasil.</p>
      <p class="mb-4">Dalam Python, fungsi didefinisikan menggunakan kata kunci <code>def</code>.</p>
    `,
    code: {
      lang: "python",
      label: "Contoh Fungsi",
      value: `def sapa_saya(nama):
  print("Halo " + nama)

sapa_saya("Budi")
sapa_saya("Siti")

def tambah(x):
  return 5 * x

print(tambah(3))`
    }
  },
  {
    id: "modules",
    title: "Modules",
    description: "Menggunakan library kode.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Modul Python</h2>
      <p class="mb-4">Anggaplah modul sama dengan perpustakaan kode (code library).</p>
      <p class="mb-4">Modul adalah file yang berisi sekumpulan fungsi yang ingin Anda sertakan dalam aplikasi Anda.</p>
      <p class="mb-4">Gunakan kata kunci <code>import</code> untuk menyertakan modul.</p>
    `,
    code: {
      lang: "python",
      label: "Contoh Modul",
      value: `import platform

x = platform.system()
print(x)

import math

x = math.ceil(1.4)
y = math.floor(1.4)

print(x) # 2
print(y) # 1`
    }
  }
];
