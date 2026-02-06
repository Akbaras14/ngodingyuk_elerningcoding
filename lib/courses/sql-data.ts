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

export const sqlChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan SQL",
    description: "Bahasa standar untuk mengakses dan memanipulasi database.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu SQL?</h2>
      <p class="mb-4">SQL adalah singkatan dari <strong>Structured Query Language</strong>.</p>
      <p class="mb-4">SQL memungkinkan Anda mengakses dan memanipulasi database.</p>
      <p class="mb-4">SQL menjadi standar dari American National Standards Institute (ANSI) pada tahun 1986, dan dari International Organization for Standardization (ISO) pada tahun 1987.</p>
      
      <h3 class="text-xl font-bold mb-2">Apa yang bisa dilakukan SQL?</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Mengeksekusi kueri terhadap database.</li>
        <li>Mengambil data dari database.</li>
        <li>Menyisipkan (Insert), Memperbarui (Update), dan Menghapus (Delete) catatan dalam database.</li>
        <li>Membuat database, tabel, dan prosedur baru.</li>
      </ul>
    `,
    code: {
      lang: "sql",
      label: "Contoh SQL",
      value: `SELECT * FROM Customers;`
    }
  },
  {
    id: "syntax",
    title: "Sintaks SQL",
    description: "Aturan dasar penulisan query.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Tabel Database</h2>
      <p class="mb-4">Database paling sering berisi satu atau lebih tabel. Setiap tabel diidentifikasi dengan nama (misalnya "Customers" atau "Orders"). Tabel berisi catatan (baris) dengan data.</p>
      
      <h3 class="text-xl font-bold mb-2">Pernyataan SQL (Statements)</h3>
      <p class="mb-4">Sebagian besar tindakan yang perlu Anda lakukan pada database dilakukan dengan pernyataan SQL.</p>
      <p class="mb-4"><strong>Catatan Penting:</strong> Kata kunci SQL <strong>TIDAK</strong> peka huruf besar-kecil (case-sensitive). <code>select</code> sama dengan <code>SELECT</code>. Namun, praktik terbaik adalah menggunakan huruf besar untuk perintah SQL.</p>
      <p class="mb-4">Titik koma (;) adalah cara standar untuk memisahkan setiap pernyataan SQL.</p>
    `,
    code: {
      lang: "sql",
      label: "Sintaks Dasar",
      value: `SELECT CustomerName, City FROM Customers;`
    }
  },
  {
    id: "select",
    title: "SELECT Statement",
    description: "Mengambil data dari database.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Perintah SELECT</h2>
      <p class="mb-4">Pernyataan <code>SELECT</code> digunakan untuk memilih data dari database.</p>
      <p class="mb-4">Data yang dikembalikan disimpan dalam tabel hasil, yang disebut result-set.</p>
      
      <h3 class="text-xl font-bold mb-2">Sintaks:</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">SELECT column1, column2, ... FROM table_name;</code>
      <p class="mb-4">Jika Anda ingin memilih semua kolom yang tersedia, gunakan tanda bintang (*).</p>
    `,
    code: {
      lang: "sql",
      label: "Select Semua Kolom",
      value: `SELECT * FROM Customers;`
    }
  },
  {
    id: "where",
    title: "WHERE Clause",
    description: "Memfilter data berdasarkan kondisi.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Klausa WHERE</h2>
      <p class="mb-4">Klausa <code>WHERE</code> digunakan untuk memfilter catatan.</p>
      <p class="mb-4">Ini digunakan untuk mengekstrak hanya catatan yang memenuhi kondisi tertentu.</p>
      
      <h3 class="text-xl font-bold mb-2">Sintaks:</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">SELECT column1, ... FROM table_name WHERE condition;</code>
      
      <p class="mb-4">Klausa WHERE tidak hanya digunakan dalam pernyataan SELECT, tetapi juga dalam UPDATE, DELETE, dll.</p>
    `,
    code: {
      lang: "sql",
      label: "Filter dengan WHERE",
      value: `SELECT * FROM Customers
WHERE Country = 'Mexico';`
    }
  },
  {
    id: "insert",
    title: "INSERT INTO",
    description: "Menambahkan data baru ke tabel.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Pernyataan INSERT INTO</h2>
      <p class="mb-4">Pernyataan <code>INSERT INTO</code> digunakan untuk menyisipkan catatan baru dalam tabel.</p>
      
      <h3 class="text-xl font-bold mb-2">Sintaks:</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">INSERT INTO table_name (column1, column2) VALUES (value1, value2);</code>
      <p class="mb-4">Jika Anda menambahkan nilai untuk semua kolom tabel, Anda tidak perlu menentukan nama kolom dalam kueri SQL.</p>
    `,
    code: {
      lang: "sql",
      label: "Insert Data",
      value: `INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal', 'Tom B. Erichsen', 'Skagen 21', 'Stavanger', '4006', 'Norway');`
    }
  },
  {
    id: "update",
    title: "UPDATE Statement",
    description: "Memodifikasi data yang sudah ada.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Pernyataan UPDATE</h2>
      <p class="mb-4">Pernyataan <code>UPDATE</code> digunakan untuk memodifikasi catatan yang ada dalam tabel.</p>
      
      <div class="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
        <p class="font-bold text-yellow-700">Peringatan:</p>
        <p class="text-yellow-600">Berhati-hatilah saat memperbarui catatan. Jika Anda menghilangkan klausa <code>WHERE</code>, SEMUA catatan akan diperbarui!</p>
      </div>

      <h3 class="text-xl font-bold mb-2">Sintaks:</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">UPDATE table_name SET column1 = value1, ... WHERE condition;</code>
    `,
    code: {
      lang: "sql",
      label: "Update Data",
      value: `UPDATE Customers
SET ContactName = 'Alfred Schmidt', City = 'Frankfurt'
WHERE CustomerID = 1;`
    }
  },
  {
    id: "delete",
    title: "DELETE Statement",
    description: "Menghapus data dari tabel.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Pernyataan DELETE</h2>
      <p class="mb-4">Pernyataan <code>DELETE</code> digunakan untuk menghapus catatan yang ada dalam tabel.</p>
      
      <div class="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
        <p class="font-bold text-red-700">Peringatan:</p>
        <p class="text-red-600">Berhati-hatilah saat menghapus catatan. Jika Anda menghilangkan klausa <code>WHERE</code>, SEMUA catatan dalam tabel akan dihapus!</p>
      </div>

      <h3 class="text-xl font-bold mb-2">Sintaks:</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">DELETE FROM table_name WHERE condition;</code>
    `,
    code: {
      lang: "sql",
      label: "Hapus Data",
      value: `DELETE FROM Customers WHERE CustomerName = 'Alfreds Futterkiste';`
    }
  },
  {
    id: "functions",
    title: "SQL Functions",
    description: "Fungsi agregat: MIN, MAX, COUNT, SUM, AVG.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Fungsi Agregat SQL</h2>
      <p class="mb-4">SQL memiliki banyak fungsi bawaan untuk melakukan perhitungan pada data.</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>MIN()</code> - mengembalikan nilai terkecil.</li>
        <li><code>MAX()</code> - mengembalikan nilai terbesar.</li>
        <li><code>COUNT()</code> - mengembalikan jumlah baris.</li>
        <li><code>SUM()</code> - mengembalikan jumlah total kolom numerik.</li>
        <li><code>AVG()</code> - mengembalikan nilai rata-rata.</li>
      </ul>
    `,
    code: {
      lang: "sql",
      label: "Contoh Fungsi",
      value: `SELECT MIN(Price) FROM Products;
SELECT MAX(Price) FROM Products;
SELECT COUNT(ProductID) FROM Products;
SELECT AVG(Price) FROM Products;
SELECT SUM(Quantity) FROM OrderDetails;`
    }
  },
  {
    id: "joins",
    title: "SQL Joins",
    description: "Menggabungkan baris dari dua tabel atau lebih.",
    content: `
      <h2 class="text-2xl font-bold mb-4">SQL JOIN</h2>
      <p class="mb-4">Klausa <code>JOIN</code> digunakan untuk menggabungkan baris dari dua atau lebih tabel, berdasarkan kolom terkait di antara mereka.</p>
      
      <h3 class="text-xl font-bold mb-2">Jenis JOIN:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>(INNER) JOIN</code>: Mengembalikan catatan yang memiliki nilai yang cocok di kedua tabel.</li>
        <li><code>LEFT (OUTER) JOIN</code>: Mengembalikan semua catatan dari tabel kiri, dan catatan yang cocok dari tabel kanan.</li>
        <li><code>RIGHT (OUTER) JOIN</code>: Mengembalikan semua catatan dari tabel kanan, dan catatan yang cocok dari tabel kiri.</li>
        <li><code>FULL (OUTER) JOIN</code>: Mengembalikan semua catatan bila ada kecocokan di tabel kiri atau kanan.</li>
      </ul>
    `,
    code: {
      lang: "sql",
      label: "Contoh Inner Join",
      value: `SELECT Orders.OrderID, Customers.CustomerName
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;`
    }
  },
  {
    id: "ddl",
    title: "CREATE & DROP",
    description: "Membuat dan menghapus database/tabel.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Data Definition Language (DDL)</h2>
      
      <h3 class="text-xl font-bold mb-2">CREATE DATABASE</h3>
      <p class="mb-4">Digunakan untuk membuat database SQL baru.</p>
      <code class="block bg-gray-100 p-2 rounded mb-4">CREATE DATABASE testDB;</code>

      <h3 class="text-xl font-bold mb-2">CREATE TABLE</h3>
      <p class="mb-4">Digunakan untuk membuat tabel baru dalam database.</p>
      
      <h3 class="text-xl font-bold mb-2">DROP DATABASE/TABLE</h3>
      <p class="mb-4">Digunakan untuk menghapus database atau tabel yang ada.</p>
    `,
    code: {
      lang: "sql",
      label: "Membuat Tabel",
      value: `CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`
    }
  }
];
