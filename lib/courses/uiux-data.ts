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

export const uiuxChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan UI/UX",
    description: "Memahami perbedaan UI dan UX Design.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu UI vs UX?</h2>
      <p class="mb-4">Sering dianggap sama, namun UI dan UX adalah dua disiplin ilmu yang berbeda tetapi saling berkaitan.</p>
      
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-purple-50 p-4 rounded-lg border border-purple-100">
          <h3 class="font-bold text-purple-700 mb-2">UX (User Experience)</h3>
          <p class="text-sm">Fokus pada <strong>rasa</strong> dan <strong>pengalaman</strong> pengguna saat menggunakan produk. Tujuannya adalah kemudahan, efisiensi, dan kepuasan.</p>
          <ul class="list-disc pl-4 mt-2 text-sm">
            <li>Riset Pengguna</li>
            <li>User Flow</li>
            <li>Wireframing</li>
            <li>Information Architecture</li>
          </ul>
        </div>
        <div class="bg-pink-50 p-4 rounded-lg border border-pink-100">
          <h3 class="font-bold text-pink-700 mb-2">UI (User Interface)</h3>
          <p class="text-sm">Fokus pada <strong>tampilan</strong> visual produk. Tujuannya adalah keindahan, konsistensi, dan interaktivitas.</p>
          <ul class="list-disc pl-4 mt-2 text-sm">
            <li>Layout & Spacing</li>
            <li>Tipografi & Warna</li>
            <li>Iconography</li>
            <li>Design System</li>
          </ul>
        </div>
      </div>
    `,
    code: {
      lang: "text",
      label: "Analogi",
      value: `UX = Struktur bangunan, letak pintu, alur ruangan.
UI = Cat tembok, dekorasi, desain furnitur.

Produk yang bagus membutuhkan keduanya:
- UI Bagus + UX Buruk = Cantik tapi membingungkan.
- UX Bagus + UI Buruk = Mudah dipakai tapi terlihat kuno.`
    }
  },
  {
    id: "design-thinking",
    title: "Design Thinking",
    description: "Metodologi penyelesaian masalah.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Proses Design Thinking</h2>
      <p class="mb-4">Design thinking adalah pendekatan iteratif untuk memecahkan masalah yang berpusat pada pengguna.</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li><strong>Empathize (Empati):</strong> Memahami kebutuhan pengguna. Lakukan wawancara atau survei.</li>
        <li><strong>Define (Definisi):</strong> Menentukan masalah utama yang ingin diselesaikan berdasarkan data riset.</li>
        <li><strong>Ideate (Ideasi):</strong> Brainstorming solusi kreatif sebanyak mungkin tanpa batasan.</li>
        <li><strong>Prototype (Prototipe):</strong> Membuat model kasar dari solusi untuk diuji.</li>
        <li><strong>Test (Uji Coba):</strong> Menguji prototipe ke pengguna asli dan meminta umpan balik.</li>
      </ol>
    `
  },
  {
    id: "visual-hierarchy",
    title: "Visual Hierarchy",
    description: "Mengatur elemen agar mudah dipindai mata.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Hierarki Visual</h2>
      <p class="mb-4">Prinsip ini mengatur elemen desain dalam urutan kepentingan. Ini memandu mata pengguna ke mana harus melihat pertama kali.</p>
      
      <h3 class="text-xl font-bold mb-2">Cara Membangun Hierarki:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Ukuran:</strong> Elemen lebih besar lebih menarik perhatian (Judul vs Teks Body).</li>
        <li><strong>Warna:</strong> Warna cerah/kontras untuk elemen penting (Tombol CTA).</li>
        <li><strong>Whitespace (Ruang Kosong):</strong> Ruang kosong di sekitar elemen membuatnya menonjol.</li>
        <li><strong>Posisi:</strong> Elemen di bagian atas halaman mendapat perhatian lebih.</li>
      </ul>
    `,
    code: {
      lang: "css",
      label: "Implementasi CSS",
      value: `/* Heading Utama (Paling Penting) */
h1 {
  font-size: 32px;
  font-weight: bold;
  color: #1a1a1a;
  margin-bottom: 16px;
}

/* Teks Pendukung (Kurang Penting) */
p {
  font-size: 16px;
  color: #666666;
}`
    }
  },
  {
    id: "typography",
    title: "Typography",
    description: "Seni memilih dan mengatur huruf.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Dasar Tipografi</h2>
      <p class="mb-4">Tipografi yang baik meningkatkan keterbacaan (readability) dan memberikan karakter pada desain.</p>
      
      <h3 class="text-xl font-bold mb-2">Aturan Praktis:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Batasi Font:</strong> Gunakan maksimal 2-3 jenis font dalam satu desain.</li>
        <li><strong>Hierarchy:</strong> Gunakan variasi berat (Bold, Regular, Light) untuk membedakan judul dan isi.</li>
        <li><strong>Line Height:</strong> Jarak antar baris sebaiknya 1.2 - 1.5 kali ukuran font agar nyaman dibaca.</li>
        <li><strong>Kontras:</strong> Pastikan teks terbaca jelas di atas latar belakangnya.</li>
      </ul>
    `
  },
  {
    id: "color-theory",
    title: "Color Theory",
    description: "Psikologi warna dan harmoni.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Teori Warna</h2>
      <p class="mb-4">Warna membangkitkan emosi dan mengarahkan perhatian. Memilih palet warna yang tepat sangat krusial.</p>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div class="p-4 bg-blue-500 text-white rounded text-center">Trust (Biru)</div>
        <div class="p-4 bg-red-500 text-white rounded text-center">Urgency (Merah)</div>
        <div class="p-4 bg-green-500 text-white rounded text-center">Success (Hijau)</div>
        <div class="p-4 bg-yellow-400 text-black rounded text-center">Optimism (Kuning)</div>
      </div>

      <h3 class="text-xl font-bold mb-2">Aturan 60-30-10:</h3>
      <p class="mb-4">Sebuah pedoman klasik untuk keseimbangan warna:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>60% Warna Dominan:</strong> Biasanya warna netral/background.</li>
        <li><strong>30% Warna Sekunder:</strong> Brand color utama.</li>
        <li><strong>10% Warna Aksen:</strong> Untuk Call-to-Action (CTA) atau highlight.</li>
      </ul>
    `,
    code: {
      lang: "css",
      label: "Design Tokens (CSS)",
      value: `:root {
  /* 60% */
  --bg-primary: #ffffff;
  /* 30% */
  --brand-color: #6366f1;
  /* 10% */
  --accent-color: #f43f5e;
}`
    }
  },
  {
    id: "wireframing",
    title: "Wireframing",
    description: "Kerangka dasar desain (Low-Fidelity).",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Wireframe?</h2>
      <p class="mb-4">Wireframe adalah sketsa kasar layout halaman web atau aplikasi. Ini fokus pada struktur, bukan estetika.</p>
      <p class="mb-4">Bayangkan wireframe sebagai denah biru (blueprint) rumah sebelum dibangun.</p>
      
      <h3 class="text-xl font-bold mb-2">Mengapa Wireframing Penting?</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Cepat dibuat dan diubah.</li>
        <li>Fokus pada penempatan konten dan fungsi.</li>
        <li>Menghindari distraksi visual (warna, gambar) di tahap awal.</li>
      </ul>
    `
  },
  {
    id: "prototyping",
    title: "Prototyping",
    description: "Membuat desain interaktif.",
    content: `
      <h2 class="text-2xl font-bold mb-4">High-Fidelity Prototype</h2>
      <p class="mb-4">Setelah desain visual (mockup) selesai, tahap selanjutnya adalah membuat prototype yang bisa diklik.</p>
      
      <h3 class="text-xl font-bold mb-2">Manfaat Prototyping:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Mensimulasikan alur pengguna (User Flow) yang sebenarnya.</li>
        <li>Menguji interaksi dan animasi.</li>
        <li>Dapat diuji coba ke pengguna sebelum masuk tahap coding (Development).</li>
      </ul>
    `
  },
  {
    id: "figma",
    title: "Figma Basics",
    description: "Tools standar industri saat ini.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Mengapa Figma?</h2>
      <p class="mb-4">Figma adalah alat desain berbasis web yang memungkinkan kolaborasi real-time. Ini adalah standar industri saat ini untuk UI/UX Design.</p>
      
      <h3 class="text-xl font-bold mb-2">Fitur Kunci Figma:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Frames:</strong> Kanvas kerja (seperti Artboard).</li>
        <li><strong>Auto Layout:</strong> Fitur ajaib untuk membuat layout responsif otomatis.</li>
        <li><strong>Components:</strong> Elemen reusable (tombol, navbar) yang bisa digunakan berulang kali.</li>
        <li><strong>Variants:</strong> Variasi dari komponen (misal: tombol aktif, tombol non-aktif).</li>
      </ul>
    `,
    code: {
      lang: "text",
      label: "Shortcut Figma Penting",
      value: `F = Frame Tool
R = Rectangle Tool
T = Text Tool
Shift + A = Add Auto Layout
Ctrl + Alt + K = Create Component
V = Move Tool`
    }
  },
  {
    id: "design-system",
    title: "Design System",
    description: "Menjaga konsistensi produk.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Design System?</h2>
      <p class="mb-4">Design System adalah kumpulan komponen, panduan, dan standar yang dapat digunakan berulang kali untuk membangun produk secara konsisten dan efisien.</p>
      
      <h3 class="text-xl font-bold mb-2">Isi Design System:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Style Guide:</strong> Warna, tipografi, spacing.</li>
        <li><strong>Pattern Library:</strong> Komponen UI (Button, Card, Modal).</li>
        <li><strong>Content Guidelines:</strong> Tone of voice, gaya penulisan.</li>
      </ul>
    `
  },
  {
    id: "usability",
    title: "Usability Testing",
    description: "Menguji desain ke pengguna asli.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Pengujian Usabilitas</h2>
      <p class="mb-4">Usability testing adalah metode mengevaluasi produk dengan mengujinya pada pengguna yang representatif.</p>
      
      <h3 class="text-xl font-bold mb-2">Metode Testing:</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Moderated:</strong> Penguji memandu pengguna secara langsung (via Zoom atau tatap muka).</li>
        <li><strong>Unmoderated:</strong> Pengguna mengerjakan tugas sendiri menggunakan alat perekam.</li>
        <li><strong>A/B Testing:</strong> Membandingkan dua versi desain untuk melihat mana yang lebih efektif.</li>
      </ul>
    `
  }
];
