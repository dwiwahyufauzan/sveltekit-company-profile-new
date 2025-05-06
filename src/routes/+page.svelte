<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';
    
    let isDark = false;
  
  onMount(() => {
    const storedDark = localStorage.getItem('theme') === 'dark';
    isDark = storedDark;

    const isSystemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    isDark = isSystemDarkMode || isDark; 
    document.documentElement.classList.toggle('dark', isDark);


    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      isDark = e.matches;
      document.documentElement.classList.toggle('dark', isDark);
    });
  });

  function toggleDarkMode() {
    isDark = !isDark;
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
  
</script>

<style type="text/tailwindcss"></style>

<!--header-->
<main>
  <section class="relative isolate overflow-hidden pt-6">
    <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
    alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24">
        <!-- Tagline Section -->
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm font-medium text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Konveksi Glam Stitch — Produksi pakaian berkualitas tinggi untuk merek Anda.
            <a href="/" class="font-semibold text-white">
              <span class="absolute inset-0" aria-hidden="true"></span>Selengkapnya <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
  
        <!-- Main Heading and Description with Animation -->
        <div class="text-center animate__animated animate__fadeIn animate__delay-1s">
          <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl animate__animated animate__fadeIn animate__delay-1s">
            Glam Stitch Mitra Konveksi Terpercaya Anda
          </h1>
          <p class="mt-8 text-lg font-medium text-gray-400 sm:text-xl animate__animated animate__fadeIn animate__delay-2s">
            Kami menyediakan layanan produksi pakaian yang terpercaya dan profesional untuk membantu pertumbuhan bisnis Anda — dengan kualitas tinggi, proses cepat, dan harga bersaing.
          </p>
  
          <!-- Call to Action Buttons with Animations -->
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/"
              class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all transform hover:scale-105">
              Mulai Sekarang
            </a>
            <a href="/" class="text-sm font-semibold text-white hover:text-indigo-400 transition-all transform hover:scale-105">Jelajahi Lebih Lanjut <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>

<!--why choose -->
<div class="bg-white dark:bg-gray-900">
    <section class="relative isolate overflow-hidden bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <!-- Decorative Background Shape -->
        <div
        class="absolute top-10 left-1/2 -z-10 transform -translate-x-1/2 blur-3xl sm:-translate-x-[18rem] lg:top-[calc(50%-30rem)] lg:left-48 xl:-translate-x-[24rem]"
        aria-hidden="true"
        >
        <div
            class="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)"
        ></div>
        </div>
    
        <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-24">
        <!-- Text Content -->
        <div class="max-w-2xl animate__animated animate__fadeIn animate__delay-600ms">
            <span class="inline-block rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
            Kenapa Memilih Kami?
            </span>
            <h2 class="mt-10 text-4xl sm:text-6xl font-bold tracking-tight text-pretty">
            Kenapa Harus Glam Stitch?
            </h2>
            <p class="mt-6 text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400">
            Kami menghadirkan layanan konveksi berkualitas tinggi dengan proses mudah, hasil presisi, dan pelayanan profesional.
            Glam Stitch adalah solusi terpercaya untuk kebutuhan pakaian custom Anda.
            </p>
            <ul class="mt-6 space-y-3 text-base leading-relaxed text-gray-600 dark:text-gray-400">
            <li>✅ Bahan Berkualitas Premium</li>
            <li>✅ Tim Desain dan Produksi Profesional</li>
            <li>✅ Waktu Pengerjaan Cepat dan Tepat Waktu</li>
            <li>✅ Harga Kompetitif dan Transparan</li>
            <li>✅ Dukungan Konsultasi dan Revisi Desain</li>
            </ul>
            <div class="mt-10 flex items-center gap-x-6">
            <a
                href="/contact-us"
                class="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 transition transform hover:scale-105"
            >
                Hubungi Kami
            </a>
            <a
                href="/blog"
                class="text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition transform hover:scale-105"
            >
                Lihat Portofolio <span aria-hidden="true">→</span>
            </a>
            </div>
        </div>
    
        <!-- Image Section -->
        <div class="mt-16 lg:mt-0 lg:ml-16 w-full max-w-md animate__animated animate__fadeIn animate__delay-1800ms">
            <img
            src="/assets/image/gambar2.png"
            alt="Tim produksi Glam Stitch sedang menjahit kaos custom"
            class="w-full rounded-xl shadow-xl object-cover transition duration-500 transform hover:scale-105 hover:shadow-2xl"
            />
        </div>
        </div>
    </section>
  </div>

<!--how to buy-->
<section class="bg-white dark:bg-gray-900 text-black dark:text-white">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-16">
      <h2 class="text-5xl font-semibold tracking-tight text-gray-900 dark:text-white text-center animate__animated animate__fadeIn animate__delay-300ms">Cara Pemesanan</h2>
      <p class="mt-4 text-base text-gray-500 text-center animate__animated animate__fadeIn animate__delay-600ms">Ikuti langkah mudah berikut untuk memesan produk dari Glam Stitch.</p>
      
      <div class="mt-16 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        <!-- Gambar -->
        <div class="w-full lg:w-1/2 animate__animated animate__fadeInUp animate__delay-900ms">
            <img 
              src="assets/image/gambar4.png" 
              alt="Ilustrasi cara pemesanan" 
              class="w-full max-w-2xl md:max-w-3xl lg:max-w-md rounded-xl shadow-xl object-cover transition duration-500 transform hover:scale-105 hover:shadow-2xl">
        </div>
          
          
  
        <!-- Langkah-langkah -->
        <div class="w-full lg:w-1/2 space-y-12">
          <div class="group block animate__animated animate__fadeInUp animate__delay-1200ms">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">1. Konsultasi</h3>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">Hubungi tim kami untuk berdiskusi mengenai desain, bahan, dan kebutuhan Anda. Kami siap memberikan saran terbaik untuk memenuhi permintaan Anda.</p>
          </div>
          <div class="group block animate__animated animate__fadeInUp animate__delay-1500ms">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">2. Produksi</h3>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">Setelah desain disetujui, kami akan memulai proses produksi dengan bahan berkualitas tinggi yang sesuai dengan standar kami. Proses ini dijalankan dengan teknologi modern untuk memastikan hasil yang optimal.</p>
          </div>
          <div class="group block animate__animated animate__fadeInUp animate__delay-1800ms">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">3. Pengiriman</h3>
            <p class="mt-2 text-sm text-gray-500 dark:text-gray-200">Produk jadi akan dikirim ke alamat Anda sesuai estimasi waktu yang telah disepakati. Kami memastikan pengiriman tepat waktu dengan layanan kurir yang terpercaya untuk pengalaman yang lebih nyaman.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  
<!--size chart-->
  <section class="bg-white dark:bg-gray-900 text-black dark:text-white py-6 sm:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-16">
      
      <!-- Judul dan deskripsi -->
      <div class="max-w-2xl lg:mx-0 text-left animate__animated animate__fadeInUp animate__delay-300ms">
        <h2 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl">
          Pilih Ukuran yang Tepat untuk Anda
        </h2>
        <p class="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
          Pilih ukuran pakaian yang sesuai dengan panduan ukuran kami untuk kenyamanan maksimal.
        </p>
      </div>      
  
      <!-- Card ukuran -->
      <div class="mx-auto mt-16 flex flex-col gap-8 lg:mt-20 lg:flex-row lg:items-center justify-center">
        
        <!-- T-Shirt -->
        <div class="flex flex-col justify-center items-center gap-4 rounded-2xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:scale-105 animate__animated animate__fadeInUp animate__delay-600ms">
          <p class="text-3xl font-bold text-gray-900">T-Shirt</p>
          <div class="text-center">
            <img src="assets/image/gambar5.png" alt="T-Shirt" class="rounded-2xl mb-4">
            <p class="text-lg font-semibold text-gray-900">Ukuran T-Shirt</p>
            <p class="mt-2 text-base leading-7 text-gray-600">Pilih ukuran sesuai dengan ukuran dada dan panjang badan Anda.</p>
          </div>
        </div>
  
        <!-- Jaket -->
        <div class="flex flex-col justify-center items-center gap-4 rounded-2xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:scale-105 animate__animated animate__fadeInUp animate__delay-900ms">
          <p class="text-3xl font-bold text-gray-900">Jaket</p>
          <div class="text-center">
            <img src="assets/image/gambar6.png" alt="Jacket" class="rounded-2xl mb-4">
            <p class="text-lg font-semibold text-gray-900">Ukuran Jaket</p>
            <p class="mt-2 text-base leading-7 text-gray-600">Pilih ukuran sesuai dengan ukuran dada dan panjang badan Anda.</p>
          </div>
        </div>
  
        <!-- Kemeja -->
        <div class="flex flex-col justify-center items-center gap-4 rounded-2xl bg-gray-50 p-8 shadow-lg transition-all duration-300 hover:scale-105 animate__animated animate__fadeInUp animate__delay-1200ms">
          <p class="text-3xl font-bold text-gray-900">Kemeja</p>
          <div class="text-center">
            <img src="assets/image/gambar7.png" alt="Shirt" class="rounded-2xl mb-4">
            <p class="text-lg font-semibold text-gray-900">Ukuran Kemeja</p>
            <p class="mt-2 text-base leading-7 text-gray-600">Pilih ukuran sesuai dengan ukuran dada dan panjang badan Anda.</p>
          </div>
        </div>
      </div>
    </div>  
  </section>

  <!--stats-->
  <section class="relative isolate overflow-hidden bg-white dark:bg-gray-900 text-black dark:text-white">
    <!-- Background Gradient Blob -->
    <div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-24">
      <div class="max-w-4xl mx-auto px-4 py-10">
        <!-- Heading -->
        <div class="text-center mb-12 animate__animated animate__fadeInDown animate__slow">
          <h2 class="text-4xl font-semibold text-gray-900 dark:text-white sm:text-5xl mb-4">Pencapaian Glam Stitch</h2>
          <p class="text-lg text-gray-600 dark:text-gray-200">Dedikasi kami tercermin dari data. Berikut pencapaian kami dalam melayani kebutuhan fashion Anda.</p>
        </div>
  
        <!-- Statistik Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center py-12 max-w-6xl mx-auto px-4">
          <!-- Pengguna -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate__animated animate__zoomIn animate__delay-1s">
            <div class="w-20 h-20 flex items-center justify-center bg-yellow-400/20 dark:bg-white  rounded-full text-yellow-600 text-4xl transition-transform duration-300 hover:scale-110">
              👤
            </div>
            <div>
              <p class="mt-4 text-4xl font-bold text-gray-900 dark:text-white">1000+</p>
              <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-200">Pengguna</p>
            </div>
          </div>
  
          <!-- Pesanan -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate__animated animate__zoomIn animate__delay-2s">
            <div class="w-20 h-20 flex items-center justify-center bg-yellow-400/20 dark:bg-white  rounded-full text-yellow-600 text-4xl transition-transform duration-300 hover:scale-110">
              📦
            </div>
            <div>
              <p class="mt-4 text-4xl font-bold text-gray-900 dark:text-white">45.000+</p>
              <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-200">Pesanan</p>
            </div>
          </div>
  
          <!-- Pengalaman -->
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 animate__animated animate__zoomIn animate__delay-3s">
            <div class="w-20 h-20 flex items-center justify-center bg-yellow-400/20 dark:bg-white rounded-full text-yellow-600 text-4xl transition-transform duration-300 hover:scale-110">
              📅
            </div>
            <div>
              <p class="mt-4 text-4xl font-bold text-gray-900 dark:text-white">5+ Tahun</p>
              <p class="text-lg sm:text-xl text-gray-500 dark:text-gray-200">Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
<!-- Logo Cloud Section -->
<section class="bg-gray-900 py-24 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Logo Grx`id -->
      <div class="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <!-- Logo Item -->
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate__animated animate__fadeInUp animate__delay-1s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg" alt="Transistor" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate__animated animate__fadeInUp animate__delay-1_5s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg" alt="Reform" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain lg:col-span-1 animate__animated animate__fadeInUp animate__delay-2s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg" alt="Tuple" width="158" height="48" />
        <img class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 animate__animated animate__fadeInUp animate__delay-2_5s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg" alt="SavvyCal" width="158" height="48" />
        <img class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 animate__animated animate__fadeInUp animate__delay-3s hover:scale-105 transition-transform duration-300"
          src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg" alt="Statamic" width="158" height="48" />
      </div>
  
      <!-- Caption -->
      <div class="mt-16 flex justify-center animate__animated animate__fadeIn animate__delay-4s">
        <p class="relative rounded-full bg-gray-800 px-4 py-1.5 text-sm/6 text-gray-300">
          <span class="hidden md:inline">Konveksi Glam Stitch dipercaya oleh banyak brand ternama.</span>
          <a href="/blog" class="font-semibold text-white hover:underline ml-2">
            <span class="absolute inset-0" aria-hidden="true"></span>
            Lihat cerita pelanggan kami <span aria-hidden="true">&rarr;</span>
          </a>
        </p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 dark:bg-white" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8 animate__animated animate__fadeInUp">
        
        <!-- Logo & Description -->
        <div class="space-y-6">
          <img class="h-24 w-24 animate__animated animate__zoomIn animate__delay-1s" src="assets/image/logo glint.png" alt="Glam Stitch Logo">
          <div class="flex space-x-6">
            
            <!-- Facebook -->
            <a href="/" class="text-gray-500 hover:text-gray-400 transition duration-300">
              <span class="sr-only">Facebook</span>
              <svg class="h-7 w-7 animate__animated animate__fadeIn animate__delay-2s" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.6 9.87v-6.99H8.1v-2.88h2.3V9.41c0-2.28 1.35-3.55 3.42-3.55.99 0 2.03.18 2.03.18v2.24h-1.14c-1.12 0-1.47.7-1.47 1.42v1.71h2.5l-.4 2.88h-2.1v6.99A10 10 0 0022 12z"/>
              </svg>
            </a>
            
            <!-- Instagram -->
            <a href="/" class="text-gray-500 hover:text-gray-400 transition duration-300">
              <span class="sr-only">Instagram</span>
              <svg class="h-7 w-7 animate__animated animate__fadeIn animate__delay-2_5s" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-1a1 1 0 100 2 1 1 0 000-2z"/>
              </svg>
            </a>
          </div>
        </div>
  
        <!-- Navigation Links -->
        <div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-3 xl:col-span-2 xl:mt-0">
          
          <!-- Navigasi -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white dark:text-gray-900">Navigasi</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Home</a></li>
              <li><a href="/product" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Products</a></li>
              <li><a href="/services" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Services</a></li>
            </ul>
          </div>
          
          <!-- Products -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white dark:text-gray-900">Products</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/tshirt" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">T-Shirts</a></li>
              <li><a href="/jacket" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Jacket</a></li>
              <li><a href="/shirts" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Shirts</a></li>
            </ul>
          </div>
          
          <!-- Discover Us -->
          <div>
            <h3 class="text-lg font-semibold leading-6 text-white dark:text-gray-900">Discover Us</h3>
            <ul class="mt-6 space-y-4">
              <li><a href="/about-us" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">About Us</a></li>
              <li><a href="/blog" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Blog</a></li>
              <li><a href="/contact-us" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Contact Us</a></li>
              <li><a href="/store-location" class="text-base text-gray-300 dark:text-gray-600 hover:text-blue-400 transition duration-200">Store Location</a></li>
            </ul>
          </div>
        </div>
      </div>
  
      <!-- Footer Bottom -->
      <div class="mt-16 border-t border-white/10 pt-8 text-center animate__animated animate__fadeInUp animate__delay-3s">
        <p class="text-sm leading-5 text-gray-400 dark:text-gray-900">&copy; 2025 Glam Stitch. All rights reserved.</p>
      </div>
    </div>
  </footer>
</main>
  
  
  