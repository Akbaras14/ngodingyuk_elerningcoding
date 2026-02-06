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

export const golangChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan Go",
    description: "Apa itu Go dan mengapa ia diciptakan?",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Go?</h2>
      <p class="mb-4">Go (juga dikenal sebagai Golang) adalah bahasa pemrograman open-source yang dikembangkan oleh Google pada tahun 2007.</p>
      
      <h3 class="text-xl font-bold mb-2">Karakteristik Go:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Sintaksnya mirip dengan C tapi lebih sederhana.</li>
        <li>Tipe data statis (Statically typed).</li>
        <li>Kompilasi sangat cepat.</li>
        <li>Mendukung konkurensi (concurrency) secara native.</li>
        <li>Memiliki Garbage Collection otomatis.</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Mengapa Menggunakan Go?</h3>
      <p class="mb-4">Go dirancang untuk menyelesaikan masalah pada sistem berskala besar di Google. Sangat cocok untuk pengembangan backend, cloud services, dan microservices karena ringan dan cepat.</p>
    `,
    code: {
      lang: "go",
      label: "Hello World Go",
      value: `package main

import "fmt"

func main() {
  fmt.Println("Hello, World!")
}`
    }
  },
  {
    id: "syntax",
    title: "Sintaks Dasar",
    description: "Struktur program Go.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Struktur Program Go</h2>
      <p class="mb-4">Setiap file sumber Go harus dimulai dengan deklarasi <code>package</code>.</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-blue-700 font-bold">package main</code>
          <p class="text-sm mt-1">Mendefinisikan nama paket. <code>main</code> adalah paket khusus untuk program yang dapat dieksekusi.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-blue-700 font-bold">import "fmt"</code>
          <p class="text-sm mt-1">Mengimpor paket eksternal. <code>fmt</code> digunakan untuk format input/output.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-blue-700 font-bold">func main()</code>
          <p class="text-sm mt-1">Fungsi utama yang akan dijalankan pertama kali.</p>
        </div>
      </div>
    `
  },
  {
    id: "variables",
    title: "Variables",
    description: "Menyimpan data di Go.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Deklarasi Variabel</h2>
      <p class="mb-4">Di Go, ada dua cara utama untuk mendeklarasikan variabel:</p>
      
      <h3 class="text-xl font-bold mb-2">1. Dengan kata kunci <code>var</code></h3>
      <p class="mb-4">Dapat digunakan di dalam atau di luar fungsi. Tipe data opsional jika nilai langsung diberikan.</p>
      <code class="block bg-gray-100 p-2 rounded mb-4">var nama string = "Budi"</code>

      <h3 class="text-xl font-bold mb-2">2. Dengan tanda <code>:=</code></h3>
      <p class="mb-4">Hanya dapat digunakan di dalam fungsi. Tipe data disimpulkan secara otomatis (type inference).</p>
      <code class="block bg-gray-100 p-2 rounded mb-4">umur := 25</code>
    `,
    code: {
      lang: "go",
      label: "Contoh Variabel",
      value: `package main
import "fmt"

func main() {
  var a int = 10
  var b = "Halo"
  c := 3.14

  fmt.Println(a)
  fmt.Println(b)
  fmt.Println(c)
}`
    }
  },
  {
    id: "datatypes",
    title: "Data Types",
    description: "Jenis data dasar di Go.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Tipe Data Dasar</h2>
      <p class="mb-4">Go adalah bahasa dengan tipe data statis, artinya tipe variabel diketahui saat kompilasi.</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Boolean:</strong> <code>true</code> atau <code>false</code>.</li>
        <li><strong>Numeric:</strong> Integer (<code>int</code>, <code>int64</code>), Float (<code>float32</code>, <code>float64</code>).</li>
        <li><strong>String:</strong> Kumpulan karakter dalam tanda kutip ganda.</li>
      </ul>
    `,
    code: {
      lang: "go",
      label: "Tipe Data",
      value: `package main
import "fmt"

func main() {
  var isActive bool = true
  var count int = 5
  var price float32 = 19.99
  var message string = "Success"

  fmt.Println(isActive, count, price, message)
}`
    }
  },
  {
    id: "arrays",
    title: "Arrays & Slices",
    description: "Koleksi data di Go.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Arrays vs Slices</h2>
      <p class="mb-4">Di Go, ada dua tipe data urutan utama:</p>
      
      <h3 class="text-xl font-bold mb-2">Array</h3>
      <p class="mb-4">Memiliki panjang tetap. Panjang adalah bagian dari tipenya.</p>
      <code class="block bg-gray-100 p-2 rounded mb-4">var arr [3]int = [3]int{1, 2, 3}</code>

      <h3 class="text-xl font-bold mb-2">Slice</h3>
      <p class="mb-4">Lebih umum digunakan. Panjangnya dinamis (bisa bertambah/berkurang).</p>
      <code class="block bg-gray-100 p-2 rounded mb-4">myslice := []int{10, 20, 30}</code>
    `,
    code: {
      lang: "go",
      label: "Contoh Slice",
      value: `package main
import "fmt"

func main() {
  fruits := []string{"Apel", "Jeruk", "Mangga"}
  
  // Menambah data (append)
  fruits = append(fruits, "Pisang")
  
  fmt.Println(fruits)
  fmt.Println(len(fruits)) // Panjang slice
}`
    }
  },
  {
    id: "conditions",
    title: "Conditions",
    description: "If, Else, dan Switch.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Kondisi If Else</h2>
      <p class="mb-4">Sintaks kondisi di Go mirip dengan C/Java, tapi tanpa tanda kurung <code>()</code> di sekitar kondisi.</p>
      
      <h2 class="text-2xl font-bold mb-4 mt-6">Switch Case</h2>
      <p class="mb-4">Digunakan untuk memilih satu dari banyak blok kode. Di Go, <code>break</code> otomatis dilakukan (implisit), jadi tidak perlu ditulis.</p>
    `,
    code: {
      lang: "go",
      label: "Contoh Kondisi",
      value: `package main
import "fmt"

func main() {
  x := 20
  
  if x > 10 {
    fmt.Println("x lebih besar dari 10")
  } else {
    fmt.Println("x kurang atau sama dengan 10")
  }
}`
    }
  },
  {
    id: "loops",
    title: "Loops",
    description: "Perulangan di Go.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Hanya Ada "For"</h2>
      <p class="mb-4">Go hanya memiliki satu kata kunci perulangan: <code>for</code>. Tidak ada <code>while</code> atau <code>do-while</code> (tapi <code>for</code> bisa berfungsi seperti mereka).</p>
      
      <h3 class="text-xl font-bold mb-2">For Loop Standar</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">for i := 0; i < 5; i++ { ... }</code>

      <h3 class="text-xl font-bold mb-2">While-style Loop</h3>
      <code class="block bg-gray-100 p-2 rounded mb-4">for i < 5 { ... }</code>
    `,
    code: {
      lang: "go",
      label: "Contoh Loop",
      value: `package main
import "fmt"

func main() {
  for i := 0; i < 5; i++ {
    fmt.Println(i)
  }
}`
    }
  },
  {
    id: "functions",
    title: "Functions",
    description: "Blok kode modular.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Fungsi di Go</h2>
      <p class="mb-4">Didefinisikan dengan kata kunci <code>func</code>.</p>
      <p class="mb-4">Go mendukung <strong>multiple return values</strong>, fitur unik yang jarang ada di bahasa seperti C/Java.</p>
    `,
    code: {
      lang: "go",
      label: "Contoh Fungsi",
      value: `package main
import "fmt"

func tambah(x int, y int) int {
  return x + y
}

func main() {
  hasil := tambah(5, 3)
  fmt.Println(hasil) // 8
}`
    }
  },
  {
    id: "structs",
    title: "Structs",
    description: "Membuat tipe data kustom.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Struct (Struktur)</h2>
      <p class="mb-4">Go tidak memiliki Class (OOP tradisional). Sebagai gantinya, Go menggunakan <code>struct</code> untuk mengelompokkan data.</p>
      <p class="mb-4">Struct adalah kumpulan field (properti).</p>
    `,
    code: {
      lang: "go",
      label: "Contoh Struct",
      value: `package main
import "fmt"

type Person struct {
  Name string
  Age  int
}

func main() {
  var p1 Person
  p1.Name = "Andi"
  p1.Age = 24

  fmt.Println("Nama:", p1.Name)
  fmt.Println("Umur:", p1.Age)
}`
    }
  },
  {
    id: "goroutines",
    title: "Goroutines",
    description: "Konkurensi ringan di Go.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Goroutine</h2>
      <p class="mb-4">Goroutine adalah thread ringan yang dikelola oleh Go runtime.</p>
      <p class="mb-4">Cukup tambahkan kata kunci <code>go</code> di depan pemanggilan fungsi untuk menjalankannya secara konkuren (bersamaan).</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p class="font-bold text-blue-700">Fitur Unggulan:</p>
        <p class="text-blue-600">Goroutines sangat hemat memori dibandingkan thread OS biasa, memungkinkan kita menjalankan ribuan proses sekaligus.</p>
      </div>
    `,
    code: {
      lang: "go",
      label: "Contoh Goroutine",
      value: `package main
import (
  "fmt"
  "time"
)

func say(s string) {
  for i := 0; i < 3; i++ {
    time.Sleep(100 * time.Millisecond)
    fmt.Println(s)
  }
}

func main() {
  go say("world") // Jalan di background
  say("hello")    // Jalan di main thread
}`
    }
  }
];
