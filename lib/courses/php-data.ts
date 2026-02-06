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

export const phpChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan PHP",
    description: "Bahasa skrip server-side paling populer.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu PHP?</h2>
      <p class="mb-4">PHP adalah singkatan dari "PHP: Hypertext Preprocessor".</p>
      <p class="mb-4">PHP adalah bahasa skrip open source yang banyak digunakan.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Skrip PHP dieksekusi di server.</li>
        <li>PHP gratis untuk diunduh dan digunakan.</li>
        <li>PHP cukup kuat untuk menjadi inti dari sistem blogging terbesar di web (WordPress).</li>
        <li>PHP cukup dalam untuk menjalankan jaringan sosial terbesar (Facebook pada awalnya).</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Apa yang bisa dilakukan PHP?</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Menghasilkan konten halaman dinamis.</li>
        <li>Membuat, membuka, membaca, menulis, menghapus, dan menutup file di server.</li>
        <li>Mengumpulkan data formulir.</li>
        <li>Mengirim dan menerima cookie.</li>
        <li>Menambah, menghapus, mengubah data dalam database Anda.</li>
      </ul>
    `,
    code: {
      lang: "php",
      label: "Hello World PHP",
      value: `<!DOCTYPE html>
<html>
<body>

<?php
echo "Hello World!";
?>

</body>
</html>`
    }
  },
  {
    id: "syntax",
    title: "Sintaks PHP",
    description: "Aturan penulisan kode PHP.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Sintaks Dasar PHP</h2>
      <p class="mb-4">Skrip PHP dapat ditempatkan di mana saja di dalam dokumen.</p>
      <p class="mb-4">Skrip PHP dimulai dengan <code>&lt;?php</code> dan diakhiri dengan <code>?&gt;</code>:</p>
      
      <code class="block bg-gray-100 p-2 rounded mb-4">&lt;?php
// Kode PHP ada di sini
?&gt;</code>

      <p class="mb-4">Ekstensi file default untuk file PHP adalah <code>.php</code>.</p>
      <p class="mb-4">File PHP biasanya berisi tag HTML, dan beberapa kode skrip PHP.</p>
      <p class="mb-4"><strong>Catatan:</strong> Pernyataan PHP diakhiri dengan titik koma (<code>;</code>).</p>
    `,
    code: {
      lang: "php",
      label: "Echo Statement",
      value: `<?php
$text = "PHP itu Mudah!";
echo $text;
?>`
    }
  },
  {
    id: "variables",
    title: "Variables",
    description: "Menyimpan data di PHP.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Variabel PHP</h2>
      <p class="mb-4">Variabel adalah "wadah" untuk menyimpan informasi.</p>
      
      <h3 class="text-xl font-bold mb-2">Aturan Variabel:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Variabel dimulai dengan tanda <code>$</code>, diikuti dengan nama variabel.</li>
        <li>Nama variabel harus dimulai dengan huruf atau karakter garis bawah.</li>
        <li>Nama variabel tidak boleh dimulai dengan angka.</li>
        <li>Nama variabel peka huruf besar-kecil (case-sensitive) ($age dan $AGE adalah dua variabel yang berbeda).</li>
      </ul>
    `,
    code: {
      lang: "php",
      label: "Contoh Variabel",
      value: `<?php
$txt = "Halo Dunia!";
$x = 5;
$y = 10.5;

echo $txt;
echo "<br>";
echo $x;
echo "<br>";
echo $y;
?>`
    }
  },
  {
    id: "datatypes",
    title: "Data Types",
    description: "Jenis data yang didukung PHP.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Tipe Data PHP</h2>
      <p class="mb-4">Variabel dapat menyimpan data dari berbagai jenis, dan jenis data yang berbeda dapat melakukan hal-hal yang berbeda.</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-violet-600">String</h4>
          <p class="text-sm">Rangkaian karakter, seperti "Hello world!".</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-violet-600">Integer</h4>
          <p class="text-sm">Bilangan bulat non-desimal, antara -2,147,483,648 dan 2,147,483,647.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-violet-600">Float</h4>
          <p class="text-sm">Angka dengan titik desimal atau angka dalam bentuk eksponensial.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-violet-600">Boolean</h4>
          <p class="text-sm">Mewakili dua status: TRUE atau FALSE.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-violet-600">Array</h4>
          <p class="text-sm">Menyimpan beberapa nilai dalam satu variabel tunggal.</p>
        </div>
      </div>
    `,
    code: {
      lang: "php",
      label: "Contoh Tipe Data",
      value: `<?php
$x = 5985;
var_dump($x); // int(5985)

$y = 10.365;
var_dump($y); // float(10.365)

$cars = array("Volvo", "BMW", "Toyota");
var_dump($cars);
?>`
    }
  },
  {
    id: "strings",
    title: "PHP Strings",
    description: "Memanipulasi teks.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Fungsi String PHP</h2>
      <p class="mb-4">String adalah urutan karakter, seperti "Hello world!".</p>
      
      <h3 class="text-xl font-bold mb-2">Fungsi Umum:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>strlen()</code> - Mengembalikan panjang string.</li>
        <li><code>str_word_count()</code> - Menghitung jumlah kata dalam string.</li>
        <li><code>strrev()</code> - Membalikkan string.</li>
        <li><code>strpos()</code> - Mencari teks tertentu dalam string.</li>
        <li><code>str_replace()</code> - Mengganti teks dalam string.</li>
      </ul>
    `,
    code: {
      lang: "php",
      label: "Manipulasi String",
      value: `<?php
echo strlen("Hello world!"); // 12
echo str_word_count("Hello world!"); // 2
echo strrev("Hello world!"); // !dlrow olleH
echo str_replace("world", "Dolly", "Hello world!"); // Hello Dolly!
?>`
    }
  },
  {
    id: "operators",
    title: "Operators",
    description: "Melakukan operasi pada variabel.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Operator PHP</h2>
      <p class="mb-4">Operator digunakan untuk melakukan operasi pada variabel dan nilai.</p>
      
      <h3 class="text-xl font-bold mb-2">Operator Aritmatika</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>+</code> Penjumlahan</li>
        <li><code>-</code> Pengurangan</li>
        <li><code>*</code> Perkalian</li>
        <li><code>/</code> Pembagian</li>
        <li><code>%</code> Modulus</li>
      </ul>
    `,
    code: {
      lang: "php",
      label: "Contoh Operator",
      value: `<?php
$x = 10;  
$y = 6;

echo $x + $y; // 16
echo $x - $y; // 4
echo $x * $y; // 60
echo $x / $y; // 1.666...
?>`
    }
  },
  {
    id: "conditions",
    title: "If...Else",
    description: "Pernyataan bersyarat.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Pernyataan If...Else PHP</h2>
      <p class="mb-4">Pernyataan bersyarat digunakan untuk melakukan tindakan yang berbeda berdasarkan kondisi yang berbeda.</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>if</code> - mengeksekusi beberapa kode jika satu kondisi benar.</li>
        <li><code>if...else</code> - mengeksekusi beberapa kode jika kondisi benar dan kode lain jika kondisi itu salah.</li>
        <li><code>if...elseif...else</code> - mengeksekusi kode yang berbeda untuk lebih dari dua kondisi.</li>
      </ul>
    `,
    code: {
      lang: "php",
      label: "Contoh If Else",
      value: `<?php
$t = date("H");

if ($t < "10") {
  echo "Selamat pagi!";
} elseif ($t < "20") {
  echo "Selamat siang!";
} else {
  echo "Selamat malam!";
}
?>`
    }
  },
  {
    id: "loops",
    title: "Loops",
    description: "Perulangan kode.",
    content: `
      <h2 class="text-2xl font-bold mb-4">PHP Loops</h2>
      <p class="mb-4">Seringkali ketika Anda menulis kode, Anda ingin blok kode yang sama berjalan berulang kali berturut-turut.</p>
      
      <h3 class="text-xl font-bold mb-2">Jenis Loop:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>while</code> - loop melalui blok kode selama kondisi yang ditentukan benar.</li>
        <li><code>for</code> - loop melalui blok kode beberapa kali.</li>
        <li><code>foreach</code> - loop melalui blok kode untuk setiap elemen dalam array.</li>
      </ul>
    `,
    code: {
      lang: "php",
      label: "Contoh Foreach",
      value: `<?php
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}
?>`
    }
  },
  {
    id: "functions",
    title: "Functions",
    description: "Blok kode modular.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Fungsi PHP</h2>
      <p class="mb-4">Kekuatan sesungguhnya dari PHP berasal dari fungsi-fungsinya.</p>
      <p class="mb-4">PHP memiliki lebih dari 1000 fungsi bawaan, dan selain itu Anda dapat membuat fungsi kustom Anda sendiri.</p>
      <p class="mb-4">Fungsi adalah blok pernyataan yang dapat digunakan berulang kali dalam program.</p>
    `,
    code: {
      lang: "php",
      label: "Fungsi Buatan Sendiri",
      value: `<?php
function writeMsg() {
  echo "Hello world!";
}

writeMsg(); // Memanggil fungsi

function familyName($fname) {
  echo "$fname Refsnes.<br>";
}

familyName("Jani");
familyName("Hege");
?>`
    }
  },
  {
    id: "arrays",
    title: "Arrays",
    description: "Menyimpan banyak nilai.",
    content: `
      <h2 class="text-2xl font-bold mb-4">PHP Arrays</h2>
      <p class="mb-4">Array menyimpan beberapa nilai dalam satu variabel tunggal.</p>
      
      <h3 class="text-xl font-bold mb-2">Jenis Array PHP:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Indexed arrays</strong> - Array dengan indeks numerik.</li>
        <li><strong>Associative arrays</strong> - Array dengan kunci bernama.</li>
        <li><strong>Multidimensional arrays</strong> - Array yang berisi satu atau lebih array.</li>
      </ul>
    `,
    code: {
      lang: "php",
      label: "Associative Array",
      value: `<?php
$umur = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

echo "Umur Peter adalah " . $umur['Peter'] . " tahun.";
?>`
    }
  }
];
