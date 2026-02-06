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

export const reactChapters: Chapter[] = [
  {
    id: "pengenalan",
    title: "Pengenalan React",
    description: "Apa itu React dan mengapa ia mendominasi web?",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu React?</h2>
      <p class="mb-4">React adalah pustaka (library) JavaScript untuk membangun antarmuka pengguna (User Interface/UI).</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Dikembangkan oleh Facebook (Meta).</li>
        <li>Digunakan untuk membangun Single Page Applications (SPA).</li>
        <li>Berbasis komponen (Component-Based).</li>
      </ul>

      <h3 class="text-xl font-bold mb-2">Mengapa React?</h3>
      <p class="mb-4">React memungkinkan kita membuat UI yang kompleks dari potongan-potongan kecil kode yang disebut "komponen". React juga sangat cepat karena menggunakan Virtual DOM.</p>
    `,
    code: {
      lang: "javascript",
      label: "React Component",
      value: `import React from 'react';
import ReactDOM from 'react-dom/client';

function Hello() {
  return <h1>Hello React!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Hello />);`
    }
  },
  {
    id: "jsx",
    title: "Mengenal JSX",
    description: "Menulis HTML di dalam JavaScript.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu JSX?</h2>
      <p class="mb-4">JSX adalah singkatan dari JavaScript XML. JSX memungkinkan kita menulis kode HTML di dalam file JavaScript.</p>
      
      <div class="bg-gray-100 p-4 rounded mb-6 font-mono text-sm">
        const element = &lt;h1&gt;Saya Suka React&lt;/h1&gt;;
      </div>

      <p class="mb-4">Dengan JSX, menulis template di React menjadi jauh lebih mudah dan intuitif dibandingkan metode JavaScript murni.</p>
      <p class="mb-4"><strong>Aturan JSX:</strong></p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Harus memiliki satu elemen induk (parent element).</li>
        <li>Tag harus ditutup (misal <code>&lt;br /&gt;</code>).</li>
        <li>Gunakan <code>className</code> bukan <code>class</code> untuk atribut CSS.</li>
      </ul>
    `,
    code: {
      lang: "javascript",
      label: "Contoh JSX",
      value: `const nama = "Budi";
const elemen = <h1>Halo, {nama}</h1>;

// Tanpa JSX (Rumit)
const elemenLama = React.createElement('h1', {}, 'Halo, Budi');`
    }
  },
  {
    id: "components",
    title: "React Components",
    description: "Blok bangunan aplikasi React.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Komponen React</h2>
      <p class="mb-4">Komponen adalah seperti fungsi JavaScript yang mengembalikan elemen HTML.</p>
      <p class="mb-4">Ada dua jenis komponen utama:</p>
      
      <h3 class="text-xl font-bold mb-2">1. Functional Component</h3>
      <p class="mb-4">Cara modern dan paling umum digunakan. Sederhana dan ringkas.</p>
      
      <h3 class="text-xl font-bold mb-2">2. Class Component</h3>
      <p class="mb-4">Cara lama, menggunakan sintaks class ES6. Jarang digunakan di proyek baru sejak adanya Hooks.</p>
    `,
    code: {
      lang: "javascript",
      label: "Functional Component",
      value: `function Tombol() {
  return <button>Klik Saya</button>;
}

function App() {
  return (
    <div>
      <h1>Aplikasi Saya</h1>
      <Tombol />
    </div>
  );
}`
    }
  },
  {
    id: "props",
    title: "Props",
    description: "Mengirim data antar komponen.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Apa itu Props?</h2>
      <p class="mb-4">Props (singkatan dari Properties) adalah argumen yang dikirim ke komponen React.</p>
      <p class="mb-4">Props dikirim ke komponen melalui atribut HTML. Mirip seperti argumen fungsi di JavaScript.</p>
      
      <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
        <p class="font-bold text-blue-700">Ingat:</p>
        <p class="text-blue-600">Props bersifat <strong>Read-Only</strong> (tidak bisa diubah oleh komponen penerima).</p>
      </div>
    `,
    code: {
      lang: "javascript",
      label: "Menggunakan Props",
      value: `function Mobil(props) {
  return <h2>Saya adalah mobil {props.merk}!</h2>;
}

function Garasi() {
  return (
    <>
      <h1>Siapa yang ada di garasi?</h1>
      <Mobil merk="Ford" />
      <Mobil merk="Toyota" />
    </>
  );
}`
    }
  },
  {
    id: "state",
    title: "State & Hooks",
    description: "Menangani data yang berubah seiring waktu.",
    content: `
      <h2 class="text-2xl font-bold mb-4">React State</h2>
      <p class="mb-4">State adalah objek built-in React yang digunakan untuk menyimpan data atau informasi tentang komponen. State komponen dapat berubah seiring waktu (misalnya karena interaksi user).</p>
      
      <h3 class="text-xl font-bold mb-2">useState Hook</h3>
      <p class="mb-4">Di komponen fungsional, kita menggunakan hook <code>useState</code> untuk membuat state.</p>
    `,
    code: {
      lang: "javascript",
      label: "Counter dengan State",
      value: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Anda menekan {count} kali</p>
      <button onClick={() => setCount(count + 1)}>
        Tambah
      </button>
    </div>
  );
}`
    }
  },
  {
    id: "effects",
    title: "Effect Hook",
    description: "Menangani efek samping (side effects).",
    content: `
      <h2 class="text-2xl font-bold mb-4">useEffect Hook</h2>
      <p class="mb-4">Hook <code>useEffect</code> memungkinkan Anda melakukan efek samping dalam komponen fungsional.</p>
      <p class="mb-4">Contoh efek samping: mengambil data (fetching data), memanipulasi DOM langsung, dan timer.</p>
      
      <p class="mb-4"><code>useEffect</code> menerima dua argumen: fungsi efek dan array dependensi.</p>
    `,
    code: {
      lang: "javascript",
      label: "Contoh useEffect",
      value: `import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Dijalankan setiap kali render
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // [] artinya hanya jalan sekali saat mount

  return <h1>Saya sudah dirender {count} kali!</h1>;
}`
    }
  },
  {
    id: "events",
    title: "Handling Events",
    description: "Merespon interaksi pengguna.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Event di React</h2>
      <p class="mb-4">Menangani event dengan elemen React sangat mirip dengan menangani event pada elemen DOM, tetapi ada perbedaan sintaksis:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Event React diberi nama menggunakan camelCase (misal: <code>onClick</code> bukan <code>onclick</code>).</li>
        <li>Dengan JSX, Anda mengoper fungsi sebagai event handler, bukan string.</li>
      </ul>
    `,
    code: {
      lang: "javascript",
      label: "Event Handler",
      value: `function Form() {
  function handleSubmit(e) {
    e.preventDefault();    console.log('Anda mengklik submit.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}`
    }
  },
  {
    id: "conditionals",
    title: "Conditional Rendering",
    description: "Menampilkan elemen berdasarkan kondisi.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Rendering Bersyarat</h2>
      <p class="mb-4">Di React, Anda dapat membuat komponen berbeda yang merangkum perilaku yang Anda butuhkan. Kemudian, Anda dapat merender hanya beberapa dari mereka, tergantung pada status aplikasi Anda.</p>
      
      <h3 class="text-xl font-bold mb-2">Operator Logika &&</h3>
      <p class="mb-4">Cara umum untuk merender elemen secara kondisional inline.</p>
    `,
    code: {
      lang: "javascript",
      label: "Contoh Kondisi",
      value: `function Mailbox(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Halo!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          Anda memiliki {unreadMessages.length} pesan belum dibaca.
        </h2>
      }
    </div>
  );
}`
    }
  },
  {
    id: "lists",
    title: "Lists & Keys",
    description: "Merender daftar data.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Rendering List</h2>
      <p class="mb-4">Anda dapat membuat koleksi elemen dengan fungsi <code>map()</code> JavaScript.</p>
      
      <h3 class="text-xl font-bold mb-2">Pentingnya Keys</h3>
      <p class="mb-4">Key membantu React mengidentifikasi item mana yang telah diubah, ditambahkan, atau dihapus. Key harus diberikan ke elemen di dalam array untuk memberikan identitas yang stabil.</p>
    `,
    code: {
      lang: "javascript",
      label: "Contoh Map",
      value: `function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}`
    }
  },
  {
    id: "router",
    title: "React Router",
    description: "Navigasi halaman di React.",
    content: `
      <h2 class="text-2xl font-bold mb-4">Navigasi SPA</h2>
      <p class="mb-4">Karena React membangun Single Page Application, kita memerlukan library untuk menangani routing (pindah halaman) tanpa reload browser.</p>
      <p class="mb-4">Library standar industri adalah <strong>React Router</strong>.</p>
      
      <div class="space-y-4 mb-6">
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-blue-700 font-bold">&lt;BrowserRouter&gt;</code>
          <p class="text-sm mt-1">Komponen utama yang membungkus aplikasi.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-blue-700 font-bold">&lt;Routes&gt; & &lt;Route&gt;</code>
          <p class="text-sm mt-1">Mendefinisikan jalur URL dan komponen mana yang akan ditampilkan.</p>
        </div>
        <div class="p-4 bg-white border border-gray-200 rounded-lg">
          <code class="text-blue-700 font-bold">&lt;Link&gt;</code>
          <p class="text-sm mt-1">Pengganti tag &lt;a&gt; untuk navigasi tanpa reload.</p>
        </div>
      </div>
    `
  }
];
