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

export const mysqlChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan MySQL",
    description: "Sistem Manajemen Database Relasional (RDBMS) paling populer.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu MySQL?</h2>
      <p class="mb-4">MySQL adalah sistem manajemen database relasional (RDBMS) open-source yang sangat populer.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>MySQL dikembangkan, didistribusikan, dan didukung oleh Oracle Corporation.</li>
        <li>MySQL bekerja pada banyak platform (Windows, Linux, MacOS, dll).</li>
        <li>MySQL adalah komponen utama dari stack LAMP (Linux, Apache, MySQL, PHP/Python/Perl).</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Mengapa MySQL?</h3>
      <p class="mb-4">MySQL sangat cepat, andal, skalabel, dan mudah digunakan. Banyak situs web besar menggunakan MySQL, termasuk Facebook, Twitter, dan YouTube.</p>
    `,
    code: {
      lang: "sql",
      label: "Cek Versi MySQL",
      value: `SELECT VERSION();`
    }
  },
  {
    id: "instalasi",
    title: "Instalasi MySQL",
    description: "Cara setup MySQL di komputer Anda.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Langkah Instalasi</h2>
      <p class="mb-4">Cara termudah untuk menginstal MySQL di Windows adalah dengan menggunakan <strong>MySQL Installer</strong>.</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Unduh installer dari situs resmi mysql.com.</li>
        <li>Pilih "Developer Default" untuk menginstal server, client (Workbench), dan library.</li>
        <li>Setel password untuk user <strong>root</strong> (Catat password ini!).</li>
        <li>Selesaikan konfigurasi Windows Service agar MySQL berjalan otomatis saat startup.</li>
      </ol>

      <h3 class="text-xl font-bold mb-2">MySQL Workbench</h3>
      <p class="mb-4">Workbench adalah aplikasi visual (GUI) yang memudahkan kita mengelola database MySQL tanpa harus mengetik perintah di terminal/CMD.</p>
    `
  },
  {
    id: "create-db",
    title: "Create Database",
    description: "Membuat wadah data baru.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Membuat Database</h2>
      <p class="mb-4">Gunakan pernyataan <code>CREATE DATABASE</code> untuk membuat database baru.</p>
      
      <h3 class="text-xl font-bold mb-2">Sintaks:</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">CREATE DATABASE nama_database;</code>
      
      <p class="mb-4">Setelah database dibuat, gunakan perintah <code>USE</code> untuk mulai bekerja di database tersebut.</p>
    `,
    code: {
      lang: "sql",
      label: "SQL Query",
      value: `CREATE DATABASE toko_online;
USE toko_online;`
    }
  },
  {
    id: "datatypes",
    title: "MySQL Data Types",
    description: "Jenis data yang didukung MySQL.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Tipe Data Umum</h2>
      <p class="mb-4">Setiap kolom dalam tabel harus memiliki tipe data. Berikut yang paling sering digunakan:</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-orange-600">INT</h4>
          <p class="text-sm">Bilangan bulat.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-orange-600">VARCHAR(size)</h4>
          <p class="text-sm">String dengan panjang variabel (teks). Maksimal 65,535 karakter.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-orange-600">DATE</h4>
          <p class="text-sm">Format tanggal: YYYY-MM-DD.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-orange-600">DECIMAL(m,d)</h4>
          <p class="text-sm">Angka desimal yang presisi (cocok untuk uang).</p>
        </div>
      </div>
    `
  },
  {
    id: "primary-key",
    title: "Primary Key",
    description: "Identitas unik untuk setiap baris.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Primary Key?</h2>
      <p class="mb-4">Kunci utama (Primary Key) digunakan untuk mengidentifikasi secara unik setiap baris dalam tabel.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Harus berisi nilai unik.</li>
        <li>Tidak boleh berisi nilai NULL.</li>
        <li>Sebuah tabel hanya dapat memiliki SATU primary key.</li>
      </ul>
      
      <h3 class="text-xl font-bold mb-2">AUTO_INCREMENT</h3>
      <p class="mb-4">MySQL sering menggunakan kata kunci <code>AUTO_INCREMENT</code> untuk secara otomatis menghasilkan angka unik saat baris baru ditambahkan.</p>
    `,
    code: {
      lang: "sql",
      label: "Contoh Tabel",
      value: `CREATE TABLE Pengguna (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);`
    }
  },
  {
    id: "constraints",
    title: "MySQL Constraints",
    description: "Aturan untuk data dalam tabel.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Batasan (Constraints)</h2>
      <p class="mb-4">Constraints digunakan untuk menentukan aturan bagi data dalam tabel. Ini membantu menjaga keakuratan dan keandalan data.</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>NOT NULL</code> - Memastikan kolom tidak memiliki nilai NULL.</li>
        <li><code>UNIQUE</code> - Memastikan semua nilai dalam kolom berbeda.</li>
        <li><code>DEFAULT</code> - Menetapkan nilai default jika tidak ada nilai yang ditentukan.</li>
        <li><code>CHECK</code> - Memastikan nilai dalam kolom memenuhi kondisi tertentu.</li>
      </ul>
    `,
    code: {
      lang: "sql",
      label: "Contoh Constraints",
      value: `CREATE TABLE Produk (
    id INT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    stok INT DEFAULT 0,
    harga DECIMAL(10,2) CHECK (harga > 0)
);`
    }
  },
  {
    id: "indexes",
    title: "MySQL Indexes",
    description: "Mempercepat pencarian data.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Pentingnya Index</h2>
      <p class="mb-4">Index digunakan untuk mengambil data dari database lebih cepat daripada sebaliknya. Pengguna tidak dapat melihat index, mereka hanya digunakan untuk mempercepat pencarian/kueri.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p class="font-bold text-blue-700">Catatan:</p>
        <p class="text-blue-600">Memperbarui tabel dengan index membutuhkan waktu lebih lama daripada memperbarui tabel tanpa index (karena index juga perlu diperbarui). Jadi, buatlah index hanya pada kolom yang sering dicari.</p>
      </div>
    `,
    code: {
      lang: "sql",
      label: "Membuat Index",
      value: `CREATE INDEX idx_nama ON Produk (nama);`
    }
  },
  {
    id: "views",
    title: "MySQL Views",
    description: "Tabel virtual berdasarkan hasil query.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu View?</h2>
      <p class="mb-4">View adalah tabel virtual berdasarkan hasil kueri SQL. View berisi baris dan kolom, seperti tabel nyata. Field dalam view adalah field dari satu atau lebih tabel nyata dalam database.</p>
      
      <h3 class="text-xl font-bold mb-2">Manfaat View:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Menyederhanakan kueri kompleks.</li>
        <li>Keamanan data (menyembunyikan kolom sensitif).</li>
        <li>Konsistensi logika bisnis.</li>
      </ul>
    `,
    code: {
      lang: "sql",
      label: "Membuat View",
      value: `CREATE VIEW Stok_Habis AS
SELECT nama, stok
FROM Produk
WHERE stok = 0;`
    }
  },
  {
    id: "foreign-key",
    title: "Foreign Key",
    description: "Menghubungkan antar tabel.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Relasi Antar Tabel</h2>
      <p class="mb-4"><code>FOREIGN KEY</code> adalah kolom atau kumpulan kolom yang digunakan untuk membangun dan menegakkan hubungan antara data di dua tabel.</p>
      <p class="mb-4">Foreign key dalam satu tabel merujuk ke Primary Key di tabel lain.</p>
    `,
    code: {
      lang: "sql",
      label: "Contoh Relasi",
      value: `CREATE TABLE Pesanan (
    OrderID INT PRIMARY KEY,
    OrderNumber INT NOT NULL,
    PersonID INT,
    FOREIGN KEY (PersonID) REFERENCES Pengguna(id)
);`
    }
  },
  {
    id: "backup",
    title: "Backup & Export",
    description: "Mengamankan data database.",
    content: `
      <h2 class="text-2xl font-bold mb-4">MySQL Dump</h2>
      <p class="mb-4">Sangat penting untuk mencadangkan database Anda secara teratur. Cara paling umum adalah menggunakan utilitas <code>mysqldump</code>.</p>
      
      <h3 class="text-xl font-bold mb-2">Melalui Command Line:</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">mysqldump -u root -p nama_database > backup.sql</code>
      
      <h3 class="text-xl font-bold mb-2">Melalui Workbench:</h3>
      <p class="mb-4">Gunakan fitur "Data Export" di tab Administration untuk mengekspor seluruh database ke file SQL.</p>
    `
  }
];
