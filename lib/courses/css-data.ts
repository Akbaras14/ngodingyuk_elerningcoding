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

export const cssChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan CSS",
    description: "Apa itu CSS dan mengapa kita membutuhkannya?",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu CSS?</h2>
      <p class="mb-4">CSS adalah singkatan dari <strong>Cascading Style Sheets</strong>.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>CSS menjelaskan bagaimana elemen HTML harus ditampilkan di layar, kertas, atau media lainnya.</li>
        <li>CSS menghemat banyak pekerjaan. Ia dapat mengontrol tata letak beberapa halaman web sekaligus.</li>
        <li>Stylesheet eksternal disimpan dalam file CSS (biasanya .css).</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Mengapa Menggunakan CSS?</h3>
      <p class="mb-4">CSS digunakan untuk menentukan gaya halaman web Anda, termasuk desain, tata letak, dan variasi tampilan untuk berbagai perangkat dan ukuran layar.</p>
    `,
    code: {
      lang: "html",
      label: "Contoh CSS Dasar",
      value: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: lightblue;
}

h1 {
  color: white;
  text-align: center;
}

p {
  font-family: verdana;
  font-size: 20px;
}
</style>
</head>
<body>

<h1>CSS Pertamaku</h1>
<p>Ini adalah paragraf.</p>

</body>
</html>`
    }
  },
  {
    id: "syntax",
    title: "Sintaks CSS",
    description: "Aturan penulisan kode CSS.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Sintaks CSS</h2>
      <p class="mb-4">Seperangkat aturan CSS terdiri dari selector dan blok deklarasi.</p>
      
      <div class="bg-gray-100 p-4 rounded mb-6 font-mono text-center">
        <span class="text-red-600">h1</span> { <span class="text-blue-600">color</span>: <span class="text-green-600">blue</span>; <span class="text-blue-600">font-size</span>: <span class="text-green-600">12px</span>; }
      </div>

      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Selector</strong> (<code>h1</code>): menunjuk ke elemen HTML yang ingin Anda gaya.</li>
        <li><strong>Property</strong> (<code>color</code>): adalah atribut gaya yang ingin Anda ubah.</li>
        <li><strong>Value</strong> (<code>blue</code>): adalah nilai yang diberikan ke properti.</li>
      </ul>
    `,
    code: {
      lang: "html",
      label: "Sintaks Selector",
      value: `<!DOCTYPE html>
<html>
<head>
<style>
p {
  color: red;
  text-align: center;
} 
</style>
</head>
<body>

<p>Hello World!</p>
<p>Paragraf ini juga dipengaruhi CSS.</p>

</body>
</html>`
    }
  },
  {
    id: "selectors",
    title: "CSS Selectors",
    description: "Memilih elemen HTML untuk diberi gaya.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Jenis Selector CSS</h2>
      <p class="mb-4">Selector CSS digunakan untuk "menemukan" (atau memilih) elemen HTML yang ingin Anda gaya.</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">1. Element Selector</h4>
          <p class="text-sm">Memilih elemen berdasarkan nama tag (contoh: <code>p</code>, <code>h1</code>).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">2. ID Selector</h4>
          <p class="text-sm">Menggunakan atribut id elemen HTML. Ditulis dengan karakter hash (#). Contoh: <code>#header</code>.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">3. Class Selector</h4>
          <p class="text-sm">Memilih elemen dengan atribut class tertentu. Ditulis dengan karakter titik (.). Contoh: <code>.tombol</code>.</p>
        </div>
      </div>
    `,
    code: {
      lang: "html",
      label: "Contoh Selector",
      value: `<!DOCTYPE html>
<html>
<head>
<style>
/* Element Selector */
p {
  color: blue;
}

/* ID Selector */
#judul-utama {
  text-align: center;
  color: red;
}

/* Class Selector */
.teks-besar {
  font-size: 150%;
}
</style>
</head>
<body>

<h1 id="judul-utama">Hello World</h1>
<p class="teks-besar">Ini paragraf besar dan biru.</p>
<p>Ini paragraf biasa dan biru.</p>

</body>
</html>`
    }
  },
  {
    id: "colors",
    title: "Colors & Backgrounds",
    description: "Mengatur warna teks dan latar belakang.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Warna CSS</h2>
      <p class="mb-4">Warna dalam CSS sering ditentukan oleh:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Nama warna valid (seperti "red", "blue").</li>
        <li>Nilai Hex (seperti "#ff0000").</li>
        <li>Nilai RGB (seperti "rgb(255,0,0)").</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Background Color</h3>
      <p class="mb-4">Properti <code>background-color</code> menentukan warna latar belakang suatu elemen.</p>
    `,
    code: {
      lang: "html",
      label: "Eksperimen Warna",
      value: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: #f0f8ff; /* AliceBlue */
}
h1 {
  background-color: rgb(0, 255, 0);
  color: white;
  padding: 10px;
}
div {
  background-color: lightblue;
  color: black;
  padding: 20px;
}
</style>
</head>
<body>

<h1>Contoh Warna</h1>
<div>
  Mencoba berbagai format warna di CSS.
</div>

</body>
</html>`
    }
  },
  {
    id: "boxmodel",
    title: "CSS Box Model",
    description: "Konsep dasar tata letak elemen.",
    content: `
      <h2 class="text-2xl font-bold mb-4">The CSS Box Model</h2>
      <p class="mb-4">Semua elemen HTML dapat dianggap sebagai kotak. Dalam CSS, istilah "Box Model" digunakan ketika berbicara tentang desain dan tata letak.</p>
      <p class="mb-4">Box Model pada dasarnya adalah kotak yang membungkus setiap elemen HTML. Terdiri dari: margin, border, padding, dan konten yang sebenarnya.</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Content</strong> - Isi dari kotak (teks, gambar).</li>
        <li><strong>Padding</strong> - Area transparan di sekitar konten (di dalam border).</li>
        <li><strong>Border</strong> - Garis yang mengelilingi padding dan konten.</li>
        <li><strong>Margin</strong> - Area transparan di luar border.</li>
      </ul>
    `,
    code: {
      lang: "html",
      label: "Visualisasi Box Model",
      value: `<!DOCTYPE html>
<html>
<head>
<style>
div {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
  text-align: center;
}
</style>
</head>
<body>

<h2>Box Model</h2>

<div>
  Content (Isi)<br>
  Padding: 50px<br>
  Border: 15px<br>
  Margin: 20px
</div>

</body>
</html>`
    }
  },
  {
    id: "text",
    title: "Text & Fonts",
    description: "Mengatur gaya tipografi.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Pemformatan Teks</h2>
      <p class="mb-4">CSS memiliki banyak properti untuk memformat teks:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>color</code>: Warna teks.</li>
        <li><code>text-align</code>: Perataan teks (center, left, right, justify).</li>
        <li><code>text-decoration</code>: Dekorasi (seperti underline, line-through).</li>
        <li><code>text-transform</code>: Kapitalisasi (uppercase, lowercase).</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">CSS Fonts</h3>
      <p class="mb-4"><code>font-family</code>, <code>font-size</code>, dan <code>font-weight</code> adalah properti utama untuk mengatur jenis huruf.</p>
    `,
    code: {
      lang: "html",
      label: "Gaya Teks",
      value: `<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  text-align: center;
  text-transform: uppercase;
  color: #4CAF50;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 1.6; /* Jarak antar baris */
}
</style>
</head>
<body>

<h1>Judul Keren</h1>
<p>Ini adalah paragraf dengan font Arial. Mudah dibaca dan memiliki jarak baris yang cukup nyaman.</p>

</body>
</html>`
    }
  },
  {
    id: "layout",
    title: "Layout & Display",
    description: "Mengontrol visibilitas dan posisi elemen.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Properti Display</h2>
      <p class="mb-4">Properti <code>display</code> adalah properti CSS paling penting untuk mengontrol tata letak.</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">display: block</h4>
          <p class="text-sm">Elemen mengambil lebar penuh dan memulai baris baru (div, h1, p).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">display: inline</h4>
          <p class="text-sm">Elemen hanya mengambil lebar yang dibutuhkan dan tidak memulai baris baru (span, a).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-blue-600">display: none</h4>
          <p class="text-sm">Elemen disembunyikan dan tidak memakan ruang.</p>
        </div>
      </div>
    `,
    code: {
      lang: "html",
      label: "Block vs Inline",
      value: `<!DOCTYPE html>
<html>
<head>
<style>
span.a {
  display: inline; /* Default */
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;  
  background-color: yellow; 
}

span.b {
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;  
  background-color: yellow; 
}

span.c {
  display: block;
  width: 100px;
  height: 100px;
  padding: 5px;
  border: 1px solid blue;  
  background-color: yellow; 
}
</style>
</head>
<body>

<h2>display: inline (default)</h2>
<div>
Lorem ipsum <span class="a">Span 1</span> text.
</div>

<h2>display: inline-block</h2>
<div>
Lorem ipsum <span class="b">Span 2</span> text.
</div>

<h2>display: block</h2>
<div>
Lorem ipsum <span class="c">Span 3</span> text.
</div>

</body>
</html>`
    }
  },
  {
    id: "flexbox",
    title: "CSS Flexbox",
    description: "Tata letak modern satu dimensi.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Flexbox Layout</h2>
      <p class="mb-4">Modul Tata Letak Kotak Fleksibel (Flexbox) memudahkan desain struktur tata letak responsif yang fleksibel tanpa menggunakan float atau positioning.</p>
      
      <p class="mb-4">Untuk mulai menggunakan Flexbox, Anda perlu mendefinisikan wadah (container) dengan <code>display: flex;</code>.</p>
      
      <h3 class="text-xl font-bold mb-2">Properti Penting Container:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>flex-direction</code>: Arah item (row, column).</li>
        <li><code>justify-content</code>: Perataan horizontal (center, space-between).</li>
        <li><code>align-items</code>: Perataan vertikal.</li>
      </ul>
    `,
    code: {
      lang: "html",
      label: "Demo Flexbox",
      value: `<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  background-color: DodgerBlue;
  justify-content: center;
  gap: 10px;
  padding: 10px;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100px;
  height: 100px;
  text-align: center;
  line-height: 100px;
  font-size: 30px;
}
</style>
</head>
<body>

<h1>Flexbox</h1>
<p>Memusatkan item dengan mudah:</p>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>

</body>
</html>`
    }
  },
  {
    id: "grid",
    title: "CSS Grid",
    description: "Tata letak modern dua dimensi.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Grid Layout</h2>
      <p class="mb-4">CSS Grid Layout Module menawarkan sistem tata letak berbasis grid, dengan baris dan kolom, membuatnya lebih mudah untuk merancang halaman web tanpa harus menggunakan float dan positioning.</p>
      
      <p class="mb-4">Grid container didefinisikan dengan <code>display: grid;</code>.</p>
      <p class="mb-4">Gunakan <code>grid-template-columns</code> untuk menentukan lebar kolom.</p>
    `,
    code: {
      lang: "html",
      label: "Demo Grid",
      value: `<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
</style>
</head>
<body>

<h1>CSS Grid</h1>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
</div>

</body>
</html>`
    }
  },
  {
    id: "responsive",
    title: "Responsive Design",
    description: "Membuat web terlihat bagus di semua perangkat.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Responsive Web Design</h2>
      <p class="mb-4">Desain Web Responsif adalah tentang membuat halaman web yang terlihat bagus di semua perangkat!</p>
      
      <h3 class="text-xl font-bold mb-2">Media Queries</h3>
      <p class="mb-4">Media query adalah teknik CSS yang diperkenalkan di CSS3. Ini menggunakan aturan <code>@media</code> untuk menyertakan blok properti CSS hanya jika kondisi tertentu benar.</p>
      <p class="mb-4">Contoh umum adalah mengubah layout atau warna background jika lebar layar kurang dari 600px (Mobile).</p>
    `,
    code: {
      lang: "html",
      label: "Resize Layar Anda!",
      value: `<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
body {
  background-color: pink;
}

@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
</style>
</head>
<body>

<h1>Responsive Media Query</h1>
<p>Ubah ukuran jendela browser (atau layar). Jika lebar kurang dari 600px, warna background akan berubah menjadi biru muda. Jika lebih, akan berwarna pink.</p>

</body>
</html>`
    }
  }
];
