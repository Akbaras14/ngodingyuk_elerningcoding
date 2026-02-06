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

export const javascriptChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan JavaScript",
    description: "Apa itu JavaScript dan mengapa kita membutuhkannya?",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu JavaScript?</h2>
      <p class="mb-4">JavaScript adalah bahasa pemrograman paling populer di dunia.</p>
      <p class="mb-4">JavaScript adalah bahasa pemrograman untuk Web. Bahasa ini mudah dipelajari.</p>
      
      <h3 class="text-xl font-bold mb-2">Mengapa Belajar JavaScript?</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>JavaScript adalah salah satu dari <strong>3 bahasa wajib</strong> bagi pengembang web:
          <ol class="list-decimal pl-6 mt-2">
            <li><strong>HTML</strong> untuk mendefinisikan konten halaman web.</li>
            <li><strong>CSS</strong> untuk menentukan tata letak dan gaya halaman web.</li>
            <li><strong>JavaScript</strong> untuk memprogram perilaku halaman web.</li>
          </ol>
        </li>
      </ul>
    `,
    code: {
      lang: "javascript",
      label: "Contoh JavaScript",
      value: `// Menampilkan pesan di console
console.log("Halo, Dunia!");

// Mengubah konten HTML
document.getElementById("demo").innerHTML = "JavaScript itu Keren!";`
    }
  },
  {
    id: "output",
    title: "JavaScript Output",
    description: "Cara menampilkan output data di JavaScript.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Kemungkinan Tampilan Output</h2>
      <p class="mb-4">JavaScript tidak memiliki fungsi cetak atau print built-in. Namun, JavaScript dapat menampilkan data dengan cara yang berbeda:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Menulis ke dalam elemen HTML menggunakan <code>innerHTML</code>.</li>
        <li>Menulis ke dalam output HTML menggunakan <code>document.write()</code>.</li>
        <li>Menulis ke dalam kotak peringatan (alert box) menggunakan <code>window.alert()</code>.</li>
        <li>Menulis ke dalam konsol browser menggunakan <code>console.log()</code>.</li>
      </ul>
    `,
    code: {
      lang: "html",
      label: "Contoh Output",
      value: `<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Output</h1>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML = 5 + 6;
console.log("Hasilnya adalah: " + (5 + 6));
</script>

</body>
</html>`
    }
  },
  {
    id: "variables",
    title: "JavaScript Variables",
    description: "Wadah untuk menyimpan nilai data.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Variabel JavaScript</h2>
      <p class="mb-4">Variabel adalah wadah untuk menyimpan nilai data.</p>
      <p class="mb-4">Ada 4 cara untuk mendeklarasikan variabel JavaScript:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Menggunakan <code>var</code> (cara lama, sebelum 2015).</li>
        <li>Menggunakan <code>let</code> (cara modern, nilai bisa diubah).</li>
        <li>Menggunakan <code>const</code> (cara modern, nilai tetap/konstan).</li>
        <li>Tanpa kata kunci (otomatis global, tidak disarankan).</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Kapan Menggunakan var, let, atau const?</h3>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Selalu gunakan <code>const</code> jika nilai tidak seharusnya diubah.</li>
        <li>Selalu gunakan <code>const</code> jika tipe datanya Array atau Object (kecuali Anda menugaskan ulang seluruh array/objek).</li>
        <li>Hanya gunakan <code>let</code> jika Anda tidak bisa menggunakan <code>const</code> (misalnya dalam loop).</li>
        <li>Hindari penggunaan <code>var</code> agar kode lebih bersih dan terprediksi.</li>
      </ol>
    `,
    code: {
      lang: "javascript",
      label: "Contoh Variabel",
      value: `var x = 5;
var y = 6;
var z = x + y;

let nama = "Budi";
const PI = 3.14;

console.log(z);   // Output: 11
console.log(nama); // Output: Budi`
    }
  },
  {
    id: "datatypes",
    title: "Tipe Data",
    description: "Memahami berbagai jenis data dalam JavaScript.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Tipe Data JavaScript</h2>
      <p class="mb-4">Variabel JavaScript dapat menampung berbagai tipe data:</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">String</h4>
          <p class="text-sm">Teks, ditulis dalam tanda kutip. Contoh: <code>"Halo"</code>, <code>'Dunia'</code>.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">Number</h4>
          <p class="text-sm">Angka, bisa bulat atau desimal. Contoh: <code>10</code>, <code>3.14</code>.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">Boolean</h4>
          <p class="text-sm">Nilai kebenaran. Hanya ada dua nilai: <code>true</code> atau <code>false</code>.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">Object</h4>
          <p class="text-sm">Kumpulan data kompleks. Ditulis dengan kurung kurawal.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">Array</h4>
          <p class="text-sm">Daftar item. Ditulis dengan kurung siku.</p>
        </div>
      </div>
    `,
    code: {
      lang: "javascript",
      label: "Contoh Tipe Data",
      value: `let panjang = 16;                               // Number
let namaBelakang = "Johnson";                      // String
let x = {firstName:"John", lastName:"Doe"};        // Object
let mobil = ["Saab", "Volvo", "BMW"];              // Array
let status = true;                                 // Boolean

console.log(typeof panjang); // "number"`
    }
  },
  {
    id: "functions",
    title: "Functions",
    description: "Blok kode yang dirancang untuk melakukan tugas tertentu.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Fungsi JavaScript</h2>
      <p class="mb-4">Fungsi JavaScript adalah blok kode yang dirancang untuk melakukan tugas tertentu.</p>
      <p class="mb-4">Fungsi JavaScript dijalankan (eksekusi) ketika "sesuatu" memanggilnya.</p>
      
      <h3 class="text-xl font-bold mb-2">Sintaks Fungsi</h3>
      <p class="mb-4">Fungsi didefinisikan dengan kata kunci <code>function</code>, diikuti dengan <strong>nama</strong>, dan tanda kurung <strong>()</strong>.</p>
      <p class="mb-4">Nama fungsi dapat berisi huruf, angka, garis bawah, dan tanda dolar (aturan yang sama dengan variabel).</p>
      <p class="mb-4">Tanda kurung dapat menyertakan nama parameter yang dipisahkan dengan koma: <code>(parameter1, parameter2, ...)</code></p>
    `,
    code: {
      lang: "javascript",
      label: "Contoh Fungsi",
      value: `// Mendefinisikan fungsi
function sapa(nama) {
  return "Halo, " + nama + "!";
}

// Memanggil fungsi
let pesan = sapa("Budi");
console.log(pesan); // Output: "Halo, Budi!"

function kali(a, b) {
  return a * b;
}
console.log(kali(4, 3)); // Output: 12`
    }
  },
  {
    id: "objects",
    title: "Objects",
    description: "Wadah untuk properti dan metode.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Objek JavaScript</h2>
      <p class="mb-4">Objek adalah variabel juga. Tapi objek dapat berisi banyak nilai.</p>
      <p class="mb-4">Bayangkan sebuah mobil. Mobil memiliki properti seperti berat dan warna, dan metode seperti start dan stop.</p>
      
      <div class="bg-gray-100 p-4 rounded mb-6 font-mono text-sm">
        const mobil = {type:"Fiat", model:"500", color:"white"};
      </div>

      <p class="mb-4">Nilai-nilai ditulis sebagai pasangan <strong>nama:nilai</strong> (nama dan nilai dipisahkan oleh titik dua).</p>
    `,
    code: {
      lang: "javascript",
      label: "Contoh Objek",
      value: `const orang = {
  namaDepan: "John",
  namaBelakang: "Doe",
  umur: 50,
  warnaMata: "biru",
  namaLengkap: function() {
    return this.namaDepan + " " + this.namaBelakang;
  }
};

console.log(orang.namaDepan); // Akses properti
console.log(orang["umur"]);   // Cara lain akses properti
console.log(orang.namaLengkap()); // Akses metode`
    }
  },
  {
    id: "events",
    title: "Events",
    description: "Hal-hal yang terjadi pada elemen HTML.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Kejadian HTML (HTML Events)</h2>
      <p class="mb-4">Event HTML adalah "sesuatu" yang terjadi pada elemen HTML.</p>
      <p class="mb-4">Ketika JavaScript digunakan di halaman HTML, JavaScript dapat "bereaksi" terhadap kejadian ini.</p>
      
      <h3 class="text-xl font-bold mb-2">Contoh Event Umum:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>onclick</code> - Pengguna mengklik elemen HTML.</li>
        <li><code>onchange</code> - Elemen HTML telah diubah.</li>
        <li><code>onmouseover</code> - Pengguna mengarahkan mouse ke atas elemen HTML.</li>
        <li><code>onkeydown</code> - Pengguna menekan tombol keyboard.</li>
        <li><code>onload</code> - Browser telah selesai memuat halaman.</li>
      </ul>
    `,
    code: {
      lang: "html",
      label: "Contoh Event Klik",
      value: `<button onclick="this.innerHTML = 'Terima Kasih!'">Klik Saya</button>

<button onclick="tampilkanTanggal()">Jam Berapa?</button>

<script>
function tampilkanTanggal() {
  document.getElementById('demo').innerHTML = Date();
}
</script>

<p id="demo"></p>`
    }
  },
  {
    id: "arrays",
    title: "Arrays",
    description: "Menyimpan banyak nilai dalam satu variabel.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Array JavaScript</h2>
      <p class="mb-4">Array adalah variabel khusus, yang dapat menampung lebih dari satu nilai sekaligus.</p>
      <p class="mb-4">Jika Anda memiliki daftar item (daftar nama mobil, misalnya), menyimpan mobil dalam variabel tunggal dapat terlihat seperti ini:</p>
      <code class="block bg-gray-100 p-2 rounded mb-4">let mobil1 = "Saab"; let mobil2 = "Volvo"; let mobil3 = "BMW";</code>
      <p class="mb-4">Solusi terbaik adalah array:</p>
      <code class="block bg-gray-100 p-2 rounded mb-4">const mobil = ["Saab", "Volvo", "BMW"];</code>
    `,
    code: {
      lang: "javascript",
      label: "Operasi Array",
      value: `const buah = ["Pisang", "Jeruk", "Apel", "Mangga"];

// Akses elemen
let x = buah[0]; // Pisang

// Mengubah elemen
buah[0] = "Kiwi";

// Panjang array
console.log(buah.length); // 4

// Menambah elemen
buah.push("Lemon");

console.log(buah);`
    }
  },
  {
    id: "conditionals",
    title: "If Else",
    description: "Pernyataan bersyarat untuk membuat keputusan.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Pernyataan Kondisional</h2>
      <p class="mb-4">Seringkali ketika Anda menulis kode, Anda ingin melakukan tindakan yang berbeda untuk keputusan yang berbeda.</p>
      <p class="mb-4">Anda dapat menggunakan pernyataan kondisional dalam kode Anda untuk melakukan ini.</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>if</code> - Blok kode dieksekusi jika kondisi benar.</li>
        <li><code>else</code> - Blok kode dieksekusi jika kondisi salah.</li>
        <li><code>else if</code> - Kondisi baru jika kondisi pertama salah.</li>
        <li><code>switch</code> - Memilih salah satu dari banyak blok kode untuk dieksekusi.</li>
      </ul>
    `,
    code: {
      lang: "javascript",
      label: "Contoh If Else",
      value: `const jam = 14;

if (jam < 10) {
  console.log("Selamat Pagi");
} else if (jam < 18) {
  console.log("Selamat Siang");
} else {
  console.log("Selamat Malam");
}`
    }
  },
  {
    id: "loops",
    title: "Loops",
    description: "Mengeksekusi blok kode berulang kali.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Perulangan (Loops)</h2>
      <p class="mb-4">Loop berguna jika Anda ingin menjalankan kode yang sama berulang kali, setiap kali dengan nilai yang berbeda.</p>
      
      <h3 class="text-xl font-bold mb-2">Jenis Loop:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>for</code> - loop melalui blok kode beberapa kali.</li>
        <li><code>for/in</code> - loop melalui properti objek.</li>
        <li><code>for/of</code> - loop melalui nilai objek yang dapat diulang (array).</li>
        <li><code>while</code> - loop melalui blok kode selama kondisi tertentu benar.</li>
      </ul>
    `,
    code: {
      lang: "javascript",
      label: "Contoh For Loop",
      value: `// Loop 0 sampai 4
for (let i = 0; i < 5; i++) {
  console.log("Angka ke-" + i);
}

// Loop Array
const mobil = ["BMW", "Volvo", "Saab", "Ford"];
for (let i = 0; i < mobil.length; i++) {
  console.log(mobil[i]);
}`
    }
  }
];
