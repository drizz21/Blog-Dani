import "./style.css";
import moonIcon from "./assets/moon.svg";

const posts = [
  {
    year: "2025",
    month: "Des",
    title: "Membangun Konsistensi",
    available: true,
  },
  { year: "2026", month: "Apr", title: "Memulai Freelance", available: true },
  {
    year: "2026",
    month: "Mei",
    title: "Memahami Ekonomi Global",
    available: true,
  },
  { year: "2026", month: "Jun", title: "", available: false },
  { year: "2026", month: "Jul", title: "", available: false },
  { year: "2026", month: "Agu", title: "", available: false },
  { year: "2026", month: "Sep", title: "", available: false },
  { year: "2026", month: "Okt", title: "", available: false },
  { year: "2026", month: "Nov", title: "", available: false },
  { year: "2026", month: "Des", title: "", available: false },
];

const articleContent = `
  <p>Hampir setiap orang pernah merasakannya: minggu pertama penuh semangat, lalu perlahan menghilang begitu saja — dan riset ternyata punya penjelasan yang cukup jelas soal kenapa itu terjadi.</p>
  <p>Saya pernah mencoba ini berkali-kali — menulis jurnal setiap malam, belajar satu topik baru setiap hari, bangun lebih pagi dari biasanya. Semuanya dimulai dengan semangat yang sama: kali ini akan berbeda. Dan hampir selalu, semangat itu bertahan sekitar dua minggu sebelum akhirnya kalah oleh hari yang lebih sibuk, lebih lelah, atau sekadar lebih malas dari biasanya.</p>
  <p>Ada satu angka yang sering dijadikan patokan soal ini: dua puluh satu hari, waktu yang katanya dibutuhkan otak untuk membentuk kebiasaan baru. Masalahnya, angka itu tidak pernah berasal dari penelitian tentang kebiasaan sama sekali — asalnya dari catatan seorang dokter bedah plastik di tahun 1960-an tentang berapa lama pasiennya butuh untuk terbiasa dengan wajah baru mereka, jauh sebelum ada riset ilmiah soal pembentukan kebiasaan.</p>
  <p>Riset yang lebih serius datang dari Phillippa Lally dan timnya di University College London. Mereka meminta puluhan orang memilih satu kebiasaan baru — minum air putih saat makan siang, olahraga ringan sebelum sarapan — lalu mencatat setiap hari seberapa otomatis rasanya. Hasilnya jauh dari sederhana: rata-rata dibutuhkan 66 hari sebelum sebuah perilaku terasa otomatis, dengan rentang yang sangat lebar, dari 18 hari untuk kebiasaan ringan sampai lebih dari 250 hari untuk yang lebih berat. Satu temuan lain justru lebih melegakan: melewatkan satu hari ternyata tidak banyak mengganggu prosesnya. Konsistensi, dengan kata lain, tidak berarti tanpa cela.</p>

  <h2>Motivasi bukan fondasi yang bisa diandalkan</h2>
  <p>Kalau bukan soal niat yang kurang kuat, lalu apa yang sebenarnya menentukan sebuah kebiasaan bertahan atau tidak? BJ Fogg, peneliti di Stanford yang mendirikan Behavior Design Lab, punya jawaban yang cukup mengubah cara saya memandang ini. Menurutnya, sebuah perilaku baru terjadi ketika tiga hal bertemu di waktu yang sama: motivasi, kemampuan untuk melakukannya, dan pemicu yang mengingatkan. Dari ketiga hal itu, motivasi adalah yang paling tidak bisa diandalkan — naik turun tergantung mood, jam tidur, atau seberapa berat hari itu.</p>
  <p>Karena itu Fogg menyarankan untuk berhenti mengandalkan motivasi, dan mulai merancang perilaku yang begitu kecil sehingga hampir tidak membutuhkan motivasi sama sekali untuk dilakukan. Bukan "olahraga satu jam setiap pagi", tapi "pakai sepatu olahraga begitu bangun tidur". Resepnya sederhana: tempelkan perilaku baru pada rutinitas yang sudah pasti terjadi, buat perilakunya sekecil mungkin, lalu beri diri sendiri pengakuan kecil setiap kali berhasil melakukannya.</p>

  <h2>Menutup jarak antara niat dan tindakan</h2>
  <p>Ada jarak yang aneh antara apa yang ingin kita lakukan dan apa yang benar-benar kita lakukan. Psikolog Peter Gollwitzer menghabiskan sebagian besar kariernya meneliti jarak itu, dan menemukan cara sederhana untuk mempersempitnya: mengubah niat umum menjadi rencana yang sangat spesifik, dalam format "kalau situasi X terjadi, saya akan melakukan Y".</p>
  <p>Bedanya dengan niat biasa terasa kecil di atas kertas, tapi hasilnya tidak kecil. Tinjauan gabungan atas puluhan penelitian oleh Gollwitzer bersama Paschal Sheeran, yang mencakup ribuan partisipan, menemukan bahwa rencana semacam ini kira-kira menggandakan kemungkinan sebuah niat benar-benar dijalankan, dibandingkan sekadar berniat "akan lebih rutin melakukan sesuatu". Pikiran kita, ternyata, jauh lebih siap bertindak ketika sudah tahu persis kapan dan di mana harus mulai, dibanding ketika hanya diberi tujuan yang samar.</p>

  <h2>Konsistensi butuh alasan yang tahan lama</h2>
  <p>Bagian yang sering terlewat dari pembahasan soal kebiasaan adalah: kenapa kita melakukannya sama pentingnya dengan bagaimana kita melakukannya. Edward Deci dan Richard Ryan, lewat teori yang mereka kembangkan di University of Rochester, membedakan dua jenis motivasi. Yang satu datang dari tekanan luar — takut dinilai buruk, ingin dianggap produktif, mengejar target yang dipasang orang lain. Yang satu lagi datang dari dalam, ketika sebuah tindakan terasa seperti pilihan sendiri, terhubung dengan rasa mampu, dan punya makna pribadi.</p>
  <p>Riset mereka, yang sudah diuji di berbagai bidang selama puluhan tahun, terus menemukan hal yang sama: motivasi jenis kedua jauh lebih tahan lama. Tekanan dari luar bisa membuat kita bertahan untuk sementara, tapi begitu tekanan itu hilang, kebiasaan yang dibangun di atasnya biasanya ikut menghilang.</p>

  <h2>Ketekunan sebagai keterampilan, bukan bakat</h2>
  <p>Angela Duckworth, psikolog di University of Pennsylvania, menghabiskan bertahun-tahun meneliti sesuatu yang ia sebut grit — gabungan antara hasrat dan ketekunan untuk tujuan jangka panjang. Lewat pengujian pada ribuan orang, dari taruna akademi militer sampai peserta kompetisi mengeja kata, ia menemukan bahwa faktor ini kerap lebih menentukan siapa yang bertahan dibanding bakat atau kecerdasan semata.</p>
  <p>Yang menarik, grit bukan soal seberapa intens seseorang bekerja dalam satu hari, tapi seberapa mampu ia menjaga arah yang sama selama bertahun-tahun — termasuk di hari-hari yang biasa saja, bahkan membosankan. Ini sejalan dengan temuan Lally soal 66 hari itu: konsistensi bukan tentang momen dramatis, tapi tentang menunjukkan diri berulang kali, jauh setelah semangat awal memudar.</p>
  <p>Kalau menyatukan semua ini, ada empat hal sederhana yang bisa langsung dipraktikkan:</p>
  <ol>
    <li>Mulai dari versi paling kecil dari kebiasaan itu, bukan versi idealnya.</li>
    <li>Tentukan pemicu yang konkret — kapan dan di mana persisnya kebiasaan itu akan dilakukan.</li>
    <li>Cari alasan yang benar terasa milik sendiri, bukan sekadar target yang dipasang dari luar.</li>
    <li>Beri waktu setidaknya dua bulan, dan jangan jadikan satu hari yang terlewat sebagai alasan untuk berhenti.</li>
  </ol>
  <p>Saya masih jauh dari sempurna dalam hal ini. Tapi sejak berhenti menunggu motivasi datang dan mulai merancang hari-hari biasa saya sedikit lebih rapi, jarak antara niat dan kebiasaan yang benar-benar jadi terasa lebih pendek. Bukan karena saya berubah menjadi orang yang lebih disiplin — tapi karena saya berhenti mengandalkan disiplin sama sekali.</p>

  <h3>Referensi</h3>
  <ul class="references">
    <li>Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., &amp; Wardle, J. (2010). <em>How are habits formed: Modelling habit formation in the real world.</em> <i>European Journal of Social Psychology</i> — University College London.</li>
    <li>Fogg, B. J. (2019). <em>Tiny Habits: The Small Changes That Change Everything</em> — Behavior Design Lab, Stanford University.</li>
    <li>Gollwitzer, P. M., &amp; Sheeran, P. (2006). Implementation intentions and goal achievement: a meta-analysis of effects and processes — New York University &amp; University of Sheffield.</li>
    <li>Deci, E. L., &amp; Ryan, R. M. (2000). Self-determination theory and the facilitation of intrinsic motivation — University of Rochester.</li>
    <li>Duckworth, A. L., Peterson, C., Matthews, M. D., &amp; Kelly, D. R. (2007). Grit: perseverance and passion for long-term goals. <i>Journal of Personality and Social Psychology</i> — University of Pennsylvania.</li>
  </ul>
`;

const postMarkup = posts
  .map(
    (
      post,
      index,
    ) => `${post.available ? `<a href="#${post.title === "Membangun Konsistensi" ? "membangun-konsistensi" : ""}" class="post ${post.available ? "post--available" : "post--upcoming"}" style="--index: ${index}">` : `<article class="post ${post.available ? "post--available" : "post--upcoming"}" style="--index: ${index}">`}
    <div class="post-date">
      <span>${post.year}</span>
      <span>${post.month}</span>
    </div>
    <div class="post-content">
      <h2>${post.title || "Catatan bulan ini segera hadir"}</h2>
      ${post.available ? '<span class="post-status">Baca catatan <span aria-hidden="true">↗</span></span>' : '<span class="post-status">Segera ditulis</span>'}
    </div>
  </${post.available ? "a" : "article"}>
`,
  )
  .join("");

const archiveMarkup = `
  <div class="page-shell">
    <aside class="sidebar">
      <a class="signature montserrat-400" href="/" aria-label="Kembali ke beranda">Dani Sulaiman</a>
      <div class="sidebar-note">Catatan kecil<br />tentang bertumbuh.</div>
      <div class="sidebar-footer"><span class="status-dot"></span> Menulis dari Yogyakarta</div>
    </aside>
    <main class="main-content">
      <header class="intro">
        <div class="eyebrow">
          <span class="eyebrow-label"><span class="eyebrow-line"></span> Tulisanku 2025|2026</span>
          <button class="reading-toggle montserrat-400" type="button" aria-pressed="false" aria-label="Aktifkan Mode Baca" title="Mode Baca">
            <img src="${moonIcon}" alt="" aria-hidden="true" />
            <span>Mode Baca</span>
          </button>
        </div>
        <h1>Ruang untuk<br /><em>berpikir lebih jernih.</em></h1>
        <p class="intro-copy">Potongan gagasan, pelajaran, dan proses yang sedang saya jalani. Tidak selalu selesai, tapi selalu ingin lebih baik dari kemarin.</p>
      </header>
      <section class="archive" aria-labelledby="archive-title">
        <div class="archive-heading">
          <h2 id="archive-title">Arsip tulisan</h2>
          <span>${posts.filter((post) => post.available).length} tulisan</span>
        </div>
        <div class="post-list">${postMarkup}</div>
      </section>
      <footer class="main-footer"><span>© 2026 Dani Sulaiman</span><span>Terus berjalan, pelan-pelan.</span></footer>
    </main>
  </div>
`;

const articleMarkup = `
  <div class="page-shell">
    <aside class="sidebar">
      <a class="signature montserrat-400" href="#" aria-label="Kembali ke arsip">Dani Sulaiman</a>
      <div class="sidebar-note">Catatan kecil<br />tentang bertumbuh.</div>
      <div class="sidebar-footer"><span class="status-dot"></span> Menulis dari Yogyakarta</div>
    </aside>
    <main class="main-content article-page">
      <a class="back-link" href="#"><span aria-hidden="true">←</span> Kembali ke arsip</a>
      <header class="article-header">
        <div class="eyebrow">
          <span class="eyebrow-label"><span class="eyebrow-line"></span> ${posts[0].year} / ${posts[0].month}</span>
          <button class="reading-toggle montserrat-400" type="button" aria-pressed="false" aria-label="Aktifkan Mode Baca" title="Mode Baca">
            <img src="${moonIcon}" alt="" aria-hidden="true" />
            <span>Mode Baca</span>
          </button>
        </div>
        <h1>${posts[0].title}</h1>
        <p class="article-lead">Tentang membangun kebiasaan yang bertahan setelah motivasi awal menghilang.</p>
      </header>
      <article class="article-body">${articleContent}</article>
      <footer class="main-footer"><span>© 2026 Dani Sulaiman</span><span>Terus berjalan, pelan-pelan.</span></footer>
    </main>
  </div>
`;

const render = () => {
  document.querySelector("#app").innerHTML =
    window.location.hash === "#membangun-konsistensi"
      ? articleMarkup
      : archiveMarkup;
  const readingToggle = document.querySelector(".reading-toggle");
  if (readingToggle) {
    readingToggle.addEventListener("click", () => {
      const isReadingMode =
        document.documentElement.classList.toggle("reading-mode");
      readingToggle.setAttribute("aria-pressed", String(isReadingMode));
      readingToggle.setAttribute(
        "aria-label",
        `${isReadingMode ? "Nonaktifkan" : "Aktifkan"} Mode Baca`,
      );
    });
  }
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.addEventListener("hashchange", render);
render();
