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

export const androidChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan Android Studio",
    description: "IDE Resmi untuk pengembangan aplikasi Android.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Android Studio?</h2>
      <p class="mb-4">Android Studio adalah Integrated Development Environment (IDE) resmi untuk pengembangan aplikasi Android, yang didasarkan pada IntelliJ IDEA.</p>
      
      <h3 class="text-xl font-bold mb-2">Fitur Utama:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Editor Kode Cerdas:</strong> Menyediakan penyelesaian kode lanjutan, refactoring, dan analisis kode.</li>
        <li><strong>Emulator Cepat:</strong> Instal dan jalankan aplikasi Anda lebih cepat daripada dengan perangkat fisik.</li>
        <li><strong>Sistem Build Gradle:</strong> Sistem build yang fleksibel dan otomatis.</li>
        <li><strong>Layout Editor:</strong> Drag-and-drop UI builder untuk mendesain tampilan aplikasi.</li>
      </ul>
    `
  },
  {
    id: "instalasi",
    title: "Instalasi & Setup",
    description: "Cara menginstal Android Studio di komputer Anda.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Langkah Instalasi</h2>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Unduh Android Studio dari situs resmi developer.android.com.</li>
        <li>Jalankan file installer (.exe untuk Windows, .dmg untuk Mac).</li>
        <li>Ikuti petunjuk setup wizard. Pastikan mencentang "Android Virtual Device".</li>
        <li>Tunggu hingga proses pengunduhan komponen SDK selesai.</li>
      </ol>

      <h3 class="text-xl font-bold mb-2">Persyaratan Sistem Minimum (Windows):</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>OS: Microsoft Windows 10/11 (64-bit).</li>
        <li>RAM: Minimal 8 GB, disarankan 16 GB.</li>
        <li>Disk: Tersedia ruang kosong minimal 8 GB (IDE + Android SDK + Emulator).</li>
        <li>Layar: Resolusi minimum 1280 x 800.</li>
      </ul>
    `
  },
  {
    id: "project-structure",
    title: "Struktur Project",
    description: "Memahami file dan folder dalam project Android.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Struktur File Android</h2>
      <p class="mb-4">Saat Anda membuat project baru, Android Studio membuat struktur folder khusus. Berikut adalah folder-folder utamanya:</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">manifests/AndroidManifest.xml</h4>
          <p class="text-sm">File konfigurasi utama. Mendefinisikan nama aplikasi, icon, activity, dan permission.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">java/com.example.myapp</h4>
          <p class="text-sm">Folder ini berisi kode sumber Java/Kotlin (Activity, Fragment, Logic).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">res/layout</h4>
          <p class="text-sm">Berisi file XML yang mendefinisikan antarmuka pengguna (UI) aplikasi Anda.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">res/drawable</h4>
          <p class="text-sm">Tempat menyimpan aset gambar (PNG, JPG, XML Vector).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">res/values</h4>
          <p class="text-sm">Berisi resource nilai sederhana seperti <code>strings.xml</code> (teks), <code>colors.xml</code> (warna), dan <code>themes.xml</code> (tema).</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">Gradle Scripts</h4>
          <p class="text-sm">Skrip build yang menangani dependensi library dan konfigurasi versi aplikasi.</p>
        </div>
      </div>
    `
  },
  {
    id: "hello-world",
    title: "Aplikasi Pertama",
    description: "Membuat aplikasi Hello World sederhana.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Membuat Project Baru</h2>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Buka Android Studio, pilih <strong>New Project</strong>.</li>
        <li>Pilih template <strong>Empty Views Activity</strong> (atau Empty Activity).</li>
        <li>Beri nama project (misal: "HaloDunia"), pilih bahasa <strong>Kotlin</strong> atau <strong>Java</strong>.</li>
        <li>Klik <strong>Finish</strong> dan tunggu Gradle sync selesai.</li>
      </ol>

      <h3 class="text-xl font-bold mb-2">Menjalankan Aplikasi:</h3>
      <p class="mb-4">Hubungkan HP Android dengan kabel USB (aktifkan USB Debugging) atau buat Emulator baru di AVD Manager. Klik tombol <strong>Run (Play hijau)</strong> di toolbar.</p>
    `
  },
  {
    id: "layouts",
    title: "Layout XML",
    description: "Mendesain tampilan dengan XML.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Layout XML?</h2>
      <p class="mb-4">Di Android, UI (User Interface) dibangun menggunakan file XML. XML mendefinisikan struktur komponen visual seperti tombol, teks, dan gambar.</p>
      
      <h3 class="text-xl font-bold mb-2">Jenis Layout Populer:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>LinearLayout:</strong> Menyusun elemen secara berurutan (vertikal atau horizontal).</li>
        <li><strong>ConstraintLayout:</strong> Layout fleksibel yang memposisikan elemen relatif terhadap elemen lain atau parent.</li>
        <li><strong>FrameLayout:</strong> Menumpuk elemen satu di atas yang lain.</li>
      </ul>
    `,
    code: {
      lang: "xml",
      label: "activity_main.xml",
      value: `<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Hello World!"
        android:textSize="24sp" />

    <Button
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Klik Saya" />

</LinearLayout>`
    }
  },
  {
    id: "activity",
    title: "Activity & Lifecycle",
    description: "Memahami siklus hidup layar aplikasi.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Activity?</h2>
      <p class="mb-4">Activity adalah satu komponen yang menyediakan layar di mana pengguna dapat berinteraksi (misalnya menekan tombol).</p>
      
      <h3 class="text-xl font-bold mb-2">Activity Lifecycle (Siklus Hidup):</h3>
      <p class="mb-4">Activity melewati beberapa tahapan status:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><code>onCreate()</code>: Activity dibuat (inisialisasi UI).</li>
        <li><code>onStart()</code>: Activity menjadi terlihat.</li>
        <li><code>onResume()</code>: Activity siap berinteraksi dengan pengguna.</li>
        <li><code>onPause()</code>: Pengguna meninggalkan activity (misal: ada popup).</li>
        <li><code>onStop()</code>: Activity tidak lagi terlihat.</li>
        <li><code>onDestroy()</code>: Activity dihancurkan.</li>
      </ul>
    `,
    code: {
      lang: "java",
      label: "MainActivity.java",
      value: `public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        // Kode inisialisasi dijalankan di sini
    }
}`
    }
  },
  {
    id: "intent",
    title: "Intents",
    description: "Berpindah antar layar (Activity).",
    content: `
      <h2 class="text-2xl font-bold mb-4">Navigasi dengan Intent</h2>
      <p class="mb-4">Intent adalah objek pesan yang digunakan untuk meminta tindakan dari komponen aplikasi lain. Penggunaan paling umum adalah untuk memulai Activity baru.</p>
      
      <h3 class="text-xl font-bold mb-2">Explicit Intent:</h3>
      <p class="mb-4">Digunakan untuk berpindah ke Activity tertentu di dalam aplikasi kita sendiri.</p>
    `,
    code: {
      lang: "java",
      label: "Pindah Activity",
      value: `// Membuat Intent untuk pindah ke SecondActivity
Intent intent = new Intent(MainActivity.this, SecondActivity.class);

// Membawa data tambahan (opsional)
intent.putExtra("NAMA_USER", "Budi");

// Mulai activity
startActivity(intent);`
    }
  },
  {
    id: "views",
    title: "UI Components (Views)",
    description: "Komponen dasar antarmuka pengguna.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Common Views</h2>
      <p class="mb-4">Android menyediakan banyak komponen UI siap pakai:</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">TextView</h4>
          <p class="text-sm">Menampilkan teks label di layar.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">EditText</h4>
          <p class="text-sm">Kolom input teks yang dapat diedit pengguna.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">Button</h4>
          <p class="text-sm">Tombol tekan yang memicu event klik.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <h4 class="font-bold text-green-600">ImageView</h4>
          <p class="text-sm">Menampilkan gambar atau ikon.</p>
        </div>
      </div>
    `,
    code: {
      lang: "xml",
      label: "Contoh Komponen UI",
      value: `<EditText
    android:id="@+id/inputName"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:hint="Masukkan Nama Anda" />

<Button
    android:id="@+id/btnSubmit"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Kirim" />`
    }
  },
  {
    id: "event-handling",
    title: "Event Handling",
    description: "Menangani interaksi pengguna seperti klik.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Menangani Klik Tombol</h2>
      <p class="mb-4">Agar aplikasi interaktif, kita perlu menangkap event (kejadian) seperti saat tombol ditekan.</p>
      <p class="mb-4">Langkah-langkah:</p>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Beri ID pada tombol di XML (<code>android:id="@+id/myButton"</code>).</li>
        <li>Cari tombol di kode Java/Kotlin menggunakan <code>findViewById</code>.</li>
        <li>Set <code>OnClickListener</code> pada tombol tersebut.</li>
      </ol>
    `,
    code: {
      lang: "java",
      label: "MainActivity.java",
      value: `Button tombol = findViewById(R.id.myButton);

tombol.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        // Kode ini dijalankan saat tombol diklik
        Toast.makeText(MainActivity.this, "Tombol Diklik!", Toast.LENGTH_SHORT).show();
    }
});`
    }
  },
  {
    id: "resources",
    title: "Resources & Strings",
    description: "Mengelola aset non-kode seperti teks dan warna.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Mengapa Memisahkan Resources?</h2>
      <p class="mb-4">Jangan menulis teks keras (hardcoded) di dalam layout atau kode Java. Gunakan file resource.</p>
      <p class="mb-4">Keuntungan:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Memudahkan penerjemahan aplikasi ke bahasa lain.</li>
        <li>Konsistensi teks di seluruh aplikasi.</li>
        <li>Mudah diubah tanpa menyentuh logika kode.</li>
      </ul>
    `,
    code: {
      lang: "xml",
      label: "res/values/strings.xml",
      value: `<resources>
    <string name="app_name">Aplikasi Saya</string>
    <string name="welcome_message">Selamat Datang di Android!</string>
    <string name="btn_label">Klik Saya</string>
</resources>

<!-- Penggunaan di Layout: android:text="@string/welcome_message" -->`
    }
  }
];
