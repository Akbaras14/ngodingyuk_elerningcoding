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

export const htmlChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan HTML",
    description: "Apa itu HTML dan bagaimana cara kerjanya?",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu HTML?</h2>
      <p class="mb-4">HTML adalah singkatan dari <strong>Hyper Text Markup Language</strong>.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>HTML adalah bahasa markup standar untuk membuat halaman Web.</li>
        <li>HTML menggambarkan struktur halaman Web.</li>
        <li>HTML terdiri dari serangkaian elemen.</li>
        <li>Elemen HTML memberi tahu browser cara menampilkan konten.</li>
      </ul>
    `,
    code: {
      lang: "html",
      label: "Contoh Dasar",
      value: `<!DOCTYPE html>
<html>
<head>
<title>Judul Halaman</title>
</head>
<body>

<h1>Judul Utama Saya</h1>
<p>Paragraf pertama saya.</p>

</body>
</html>`
    }
  },
  {
    id: "editors",
    title: "HTML Editors",
    description: "Alat untuk menulis kode HTML.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Menulis HTML</h2>
      <p class="mb-4">Gunakan editor teks seperti Notepad (PC), TextEdit (Mac), atau editor profesional seperti VS Code untuk menulis HTML.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Buka Text Editor pilihan Anda.</li>
        <li>Tulis kode HTML Anda.</li>
        <li>Simpan file dengan ekstensi <code>.html</code> atau <code>.htm</code>.</li>
      </ul>
    `
  },
  {
    id: "basic",
    title: "Struktur Dasar",
    description: "Memahami pondasi dokumen HTML.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Dokumen HTML</h2>
      <p class="mb-4">Semua dokumen HTML harus dimulai dengan deklarasi tipe dokumen: <code>&lt;!DOCTYPE html&gt;</code>.</p>
      <p class="mb-4">Dokumen HTML itu sendiri dimulai dengan <code>&lt;html&gt;</code> dan diakhiri dengan <code>&lt;/html&gt;</code>.</p>
      <p class="mb-4">Bagian yang terlihat dari dokumen HTML ada di antara <code>&lt;body&gt;</code> dan <code>&lt;/body&gt;</code>.</p>
    `
  },
  {
    id: "elements",
    title: "HTML Elements",
    description: "Blok bangunan halaman web.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Elemen HTML</h2>
      <p class="mb-4">Elemen HTML didefinisikan oleh tag awal, beberapa konten, dan tag akhir.</p>
      <p class="mb-4">Format: <code>&lt;tagname&gt;Konten&lt;/tagname&gt;</code></p>
      <p class="mb-4">Contoh:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>&lt;h1&gt;Judul&lt;/h1&gt;</code></li>
        <li><code>&lt;p&gt;Paragraf&lt;/p&gt;</code></li>
      </ul>
    `
  },
  {
    id: "attributes",
    title: "HTML Attributes",
    description: "Informasi tambahan untuk elemen HTML.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Atribut HTML</h2>
      <p class="mb-4">Atribut memberikan informasi tambahan tentang elemen HTML.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Semua elemen HTML dapat memiliki atribut.</li>
        <li>Atribut selalu ditentukan dalam tag awal.</li>
        <li>Atribut biasanya datang dalam pasangan nama/nilai seperti: <code>name="value"</code>.</li>
      </ul>
    `,
    code: {
      lang: "html",
      label: "Contoh Atribut href",
      value: `<a href="https://www.w3schools.com">Ini adalah tautan</a>`
    }
  },
  {
    id: "headings",
    title: "HTML Headings",
    description: "Judul dan sub-judul pada halaman web.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Headings HTML</h2>
      <p class="mb-4">Judul HTML didefinisikan dengan tag <code>&lt;h1&gt;</code> sampai <code>&lt;h6&gt;</code>.</p>
      <p class="mb-4"><code>&lt;h1&gt;</code> mendefinisikan judul yang paling penting. <code>&lt;h6&gt;</code> mendefinisikan judul yang paling tidak penting.</p>
    `,
    code: {
      lang: "html",
      value: `<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>`
    }
  },
  {
    id: "paragraphs",
    title: "HTML Paragraphs",
    description: "Membuat paragraf teks.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Paragraf HTML</h2>
      <p class="mb-4">Elemen HTML <code>&lt;p&gt;</code> mendefinisikan sebuah paragraf.</p>
      <p class="mb-4">Sebuah paragraf selalu dimulai pada baris baru, dan browser secara otomatis menambahkan spasi putih (margin) sebelum dan sesudah paragraf.</p>
    `,
    code: {
      lang: "html",
      value: `<p>Ini adalah sebuah paragraf.</p>
<p>Ini adalah paragraf lain.</p>`
    }
  },
  {
    id: "styles",
    title: "HTML Styles",
    description: "Menambahkan warna, font, dan ukuran.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Atribut Style HTML</h2>
      <p class="mb-4">Mengatur gaya elemen HTML, dapat dilakukan dengan atribut <code>style</code>.</p>
      <p class="mb-4">Sintaks atribut style HTML adalah:</p>
      <code class="block bg-gray-100 p-2 rounded mb-4">&lt;tagname style="property:value;"&gt;</code>
      <p class="mb-4">Properti adalah properti CSS. Nilai adalah nilai CSS.</p>
    `,
    code: {
      lang: "html",
      value: `<p style="color:red;">Saya berwarna merah</p>
<p style="color:blue;">Saya berwarna biru</p>
<p style="font-size:50px;">Saya berukuran besar</p>`
    }
  },
  {
    id: "formatting",
    title: "HTML Formatting",
    description: "Memformat teks seperti bold dan italic.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Elemen Pemformatan HTML</h2>
      <p class="mb-4">HTML mendefinisikan elemen khusus untuk mendefinisikan teks dengan arti khusus.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>&lt;b&gt;</code> - Teks tebal (Bold)</li>
        <li><code>&lt;strong&gt;</code> - Teks penting (biasanya tebal)</li>
        <li><code>&lt;i&gt;</code> - Teks miring (Italic)</li>
        <li><code>&lt;em&gt;</code> - Teks yang ditekankan (biasanya miring)</li>
        <li><code>&lt;mark&gt;</code> - Teks yang ditandai (highlight)</li>
        <li><code>&lt;small&gt;</code> - Teks yang lebih kecil</li>
        <li><code>&lt;del&gt;</code> - Teks yang dicoret</li>
        <li><code>&lt;ins&gt;</code> - Teks yang disisipkan (digarisbawahi)</li>
        <li><code>&lt;sub&gt;</code> - Teks subscript</li>
        <li><code>&lt;sup&gt;</code> - Teks superscript</li>
      </ul>
    `,
    code: {
      lang: "html",
      value: `<p>Ini adalah teks <b>tebal</b></p>
<p>Ini adalah teks <i>miring</i></p>
<p>Ini adalah subscript<sub>2</sub> dan superscript<sup>2</sup></p>`
    }
  },
  {
    id: "images",
    title: "HTML Images",
    description: "Menampilkan gambar di halaman web.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Gambar HTML</h2>
      <p class="mb-4">Gambar HTML didefinisikan dengan tag <code>&lt;img&gt;</code>.</p>
      <p class="mb-4">Tag <code>&lt;img&gt;</code> kosong, hanya berisi atribut, dan tidak memiliki tag penutup.</p>
      <p class="mb-4">Atribut <code>src</code> menentukan URL (alamat web) gambar:</p>
      <code class="block bg-gray-100 p-2 rounded mb-4">&lt;img src="url" alt="teks alternatif"&gt;</code>
      <p class="mb-4">Atribut <code>alt</code> menyediakan teks alternatif untuk gambar jika pengguna karena alasan tertentu tidak dapat melihatnya.</p>
    `,
    code: {
      lang: "html",
      value: `<img src="gambar.jpg" alt="Pemandangan Indah" width="500" height="600">`
    }
  },
  {
    id: "tables",
    title: "HTML Tables",
    description: "Membuat tabel data.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Tabel HTML</h2>
      <p class="mb-4">Tabel HTML memungkinkan pengembang web untuk mengatur data ke dalam baris dan kolom.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>&lt;table&gt;</code> mendefinisikan tabel.</li>
        <li><code>&lt;tr&gt;</code> mendefinisikan baris tabel (table row).</li>
        <li><code>&lt;th&gt;</code> mendefinisikan header tabel (table header).</li>
        <li><code>&lt;td&gt;</code> mendefinisikan sel tabel/data (table data).</li>
      </ul>
    `,
    code: {
      lang: "html",
      value: `<table>
  <tr>
    <th>Nama Depan</th>
    <th>Nama Belakang</th>
    <th>Usia</th>
  </tr>
  <tr>
    <td>Andi</td>
    <td>Pratama</td>
    <td>25</td>
  </tr>
  <tr>
    <td>Budi</td>
    <td>Santoso</td>
    <td>30</td>
  </tr>
</table>`
    }
  },
  {
    id: "lists",
    title: "HTML Lists",
    description: "Membuat daftar berurutan dan tidak berurutan.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Daftar HTML</h2>
      <p class="mb-4">Daftar HTML memungkinkan pengembang web untuk mengelompokkan sekumpulan item terkait dalam daftar.</p>
      
      <h3 class="text-xl font-bold mb-2">Unordered List (Tidak Berurutan)</h3>
      <p class="mb-4">Dimulai dengan tag <code>&lt;ul&gt;</code>. Setiap item daftar dimulai dengan tag <code>&lt;li&gt;</code>.</p>
      
      <h3 class="text-xl font-bold mb-2">Ordered List (Berurutan)</h3>
      <p class="mb-4">Dimulai dengan tag <code>&lt;ol&gt;</code>. Item daftar akan ditandai dengan angka secara default.</p>
    `,
    code: {
      lang: "html",
      value: `<ul>
  <li>Kopi</li>
  <li>Teh</li>
  <li>Susu</li>
</ul>

<ol>
  <li>Pertama</li>
  <li>Kedua</li>
  <li>Ketiga</li>
</ol>`
    }
  },
  {
    id: "blocks",
    title: "Block & Inline",
    description: "Memahami level elemen blok dan inline.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Elemen Blok dan Inline</h2>
      <p class="mb-4">Setiap elemen HTML memiliki nilai tampilan default, tergantung pada jenis elemennya. Ada dua nilai tampilan utama: blok dan inline.</p>
      
      <h3 class="text-xl font-bold mb-2">Elemen Level Blok</h3>
      <p class="mb-4">Elemen level blok selalu dimulai pada baris baru dan mengambil lebar penuh yang tersedia. Contoh: <code>&lt;div&gt;</code>, <code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>, <code>&lt;p&gt;</code>, <code>&lt;form&gt;</code>.</p>
      
      <h3 class="text-xl font-bold mb-2">Elemen Inline</h3>
      <p class="mb-4">Elemen inline tidak memulai pada baris baru dan hanya mengambil lebar sebanyak yang diperlukan. Contoh: <code>&lt;span&gt;</code>, <code>&lt;a&gt;</code>, <code>&lt;img&gt;</code>.</p>
    `
  },
  {
    id: "classes",
    title: "HTML Classes",
    description: "Mengelompokkan elemen untuk styling.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Atribut Class HTML</h2>
      <p class="mb-4">Atribut <code>class</code> digunakan untuk menentukan kelas untuk elemen HTML.</p>
      <p class="mb-4">Beberapa elemen HTML dapat berbagi kelas yang sama.</p>
      <p class="mb-4">Atribut <code>class</code> sering digunakan untuk menunjuk ke nama kelas dalam style sheet (CSS). Itu juga dapat digunakan oleh JavaScript untuk mengakses dan memanipulasi elemen dengan nama kelas tertentu.</p>
    `,
    code: {
      lang: "html",
      value: `<div class="kota">
  <h2>Jakarta</h2>
  <p>Ibukota Indonesia.</p>
</div>`
    }
  },
  {
    id: "id",
    title: "HTML Id",
    description: "Identifier unik untuk elemen.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Atribut Id HTML</h2>
      <p class="mb-4">Atribut <code>id</code> digunakan untuk menentukan id unik untuk elemen HTML.</p>
      <p class="mb-4">Anda tidak boleh memiliki lebih dari satu elemen dengan id yang sama dalam satu dokumen HTML.</p>
      <p class="mb-4">Atribut <code>id</code> digunakan untuk menunjuk ke deklarasi gaya tertentu dalam style sheet. Itu juga digunakan oleh JavaScript untuk mengakses dan memanipulasi elemen dengan id tertentu.</p>
    `,
    code: {
      lang: "html",
      value: `<h1 id="headerUtama">Judul Halaman Saya</h1>`
    }
  }
];