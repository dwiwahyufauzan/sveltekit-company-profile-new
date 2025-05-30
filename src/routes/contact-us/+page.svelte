<script lang="ts">
    import '../../app.css';
    import { onMount } from 'svelte';
  
    let isDark = false;
  
    onMount(() => {
      const storedDark = localStorage.getItem('theme') === 'dark';
      isDark = storedDark;
  
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      isDark = isSystemDark || isDark;
  
      document.documentElement.classList.toggle('dark', isDark);
  
      // Dengarkan perubahan sistem
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        isDark = e.matches;
        document.documentElement.classList.toggle('dark', isDark);
      });
    });
  
    function toggleDarkMode() {
      isDark = !isDark;
      document.documentElement.classList.toggle('dark', isDark);
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    }
  </script>

<!-- Header -->
<div class="relative isolate overflow-hidden pt-6">
    <img src="https://img.freepik.com/free-photo/young-stylist-looking-through-set-shirts-fashion-shooting_1153-5249.jpg" alt="Stylish tailor working on shirts" class="absolute inset-0 -z-10 w-full h-full object-cover">
    <div class="absolute inset-0 -z-10 bg-black/50"></div>
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-24 text-center">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div class="relative rounded-full px-3 py-1 text-sm text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
            Kami siap membantu kebutuhan konveksi Anda.
            <a href="/" class="font-semibold text-white hover:text-indigo-400" aria-label="Kembali ke Beranda">
              <span class="absolute inset-0" aria-hidden="true"></span>Beranda <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <h1 class="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Hubungi Tim Glam Stitch</h1>
        <p class="mt-8 text-lg font-medium text-gray-200 sm:text-xl">
          Ada pertanyaan atau ingin memulai pemesanan? Kami dengan senang hati akan membantu Anda mendapatkan solusi terbaik.
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="/contact" class="rounded-md bg-indigo-500 px-6 py-3 text-sm font-semibold text-white hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" aria-label="Hubungi Kami">Hubungi Kami</a>
          <a href="/blog-list" class="text-sm font-semibold text-white hover:text-indigo-400" aria-label="Lihat Artikel Blog">Lihat Artikel <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </div>
  
  
<!-- Contact Us Section -->
<section class="bg-white dark:bg-gray-900 py-24 sm:py-20">
    <div class="mx-auto max-w-7xl px-6 lg:px-24">
  
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-6">
          Butuh Bantuan? Kami Siap Membantu!
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Ingin bikin kaos custom, konsultasi desain, atau sekadar tanya-tanya soal produksi? Tim <span class="font-semibold text-indigo-600 dark:text-indigo-400">Glam Stitch</span> siap jadi partner terbaik untuk kebutuhan Anda.
        </p>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
  
        <!-- Left: Form -->
        <div>
          <form class="grid grid-cols-1 gap-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Nama Lengkap</label>
              <input type="text" id="name" name="name" autocomplete="name"
                class="mt-2 w-full rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-3"
                required>
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
              <input type="email" id="email" name="email" autocomplete="email"
                class="mt-2 w-full rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-3"
                required>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 dark:text-gray-200">Pesan</label>
              <textarea id="message" name="message" rows="4"
                class="mt-2 w-full rounded-xl border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500 px-4 py-3"
                required></textarea>
            </div>
            <div>
              <button type="submit"
                class="w-full inline-flex justify-center items-center rounded-xl bg-indigo-600 px-6 py-3 text-white font-semibold hover:bg-indigo-700 transition">
                Kirim Pesan
              </button>
            </div>
          </form>
        </div>
  
        <!-- Right: Contact Info -->
        <div class="space-y-8">
          <!-- Email -->
          <div class="flex items-start gap-4">
            <div class="flex h-16 w-16 items-center justify-center">
              <img src="https://img.freepik.com/premium-vector/envelope-vector-illustration_1186366-13489.jpg" alt="Email Icon" class="h-16 w-16 object-contain">
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">E-mail</h3>
              <p><a href="mailto:glamstitch@gmail.com" class="text-indigo-600 dark:text-indigo-400 hover:underline">glamstitch@gmail.com</a></p>
            </div>
          </div>
  
          <!-- WhatsApp -->
          <div class="flex items-start gap-4">
            <div class="flex h-16 w-16 items-center justify-center">
              <img src="https://img.freepik.com/premium-photo/whatsapp-logo_1080029-96.jpg" alt="WhatsApp Icon" class="h-16 w-16 object-contain">
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Whatsapp</h3>
              <p><a href="https://wa.me/6288222885137" class="text-indigo-600 dark:text-indigo-400 hover:underline">+61-882-2288-5137</a></p>
            </div>
          </div>
  
          <!-- Instagram -->
          <div class="flex items-start gap-4">
            <div class="flex h-16 w-16 items-center justify-center">
              <img src="https://img.freepik.com/premium-vector/art-illustration_929495-37.jpg" alt="Instagram Icon" class="h-16 w-16 object-contain">
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Instagram</h3>
              <p><a href="https://www.instagram.com/kaospolosglamstitch/" target="_blank" class="text-indigo-600 dark:text-indigo-400 hover:underline">@glamstitch</a></p>
            </div>
          </div>
  
          <!-- Location -->
          <div class="flex items-start gap-4">
            <div class="flex h-16 w-16 items-center justify-center">
              <img src="https://img.freepik.com/free-vector/location-pin-map-glyph_78370-1576.jpg" alt="Location Icon" class="h-16 w-16 object-contain">
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Lokasi</h3>
              <p><a href="https://maps.app.goo.gl/yofiVrQbDJmkiRkY7" target="_blank" class="text-indigo-600 dark:text-indigo-400 hover:underline">Kabupaten Subang, Jawa Barat 41271</a></p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  </section>
  
  
<!-- FAQ Section with Image -->
<section class="bg-white dark:bg-gray-900 py-24 sm:py-32 relative overflow-hidden">
    <!-- Background Gradient -->
    <div class="absolute inset-0 -z-10 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"></div>
  
    <div class="max-w-7xl mx-auto px-6 lg:px-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- FAQ Content -->
        <div>
          <h2 class="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p class="mt-2 text-base text-gray-600 dark:text-gray-300">
            Jelajahi jawaban atas pertanyaan umum mengenai layanan konveksi kami.
          </p>
  
          <div class="mt-10 space-y-8">
            <!-- FAQ Item -->
            <div class="border-l-4 border-indigo-500 pl-4">
              <h3 class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                Apakah saya bisa memesan desain custom?
              </h3>
              <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Tentu! Kirimkan desain Anda, dan tim kami akan memproduksinya dengan kualitas terbaik sesuai permintaan Anda.
              </p>
            </div>
  
            <div class="border-l-4 border-indigo-500 pl-4">
              <h3 class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                Berapa minimal order?
              </h3>
              <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Minimal pemesanan adalah 12 pcs per desain. Untuk jumlah besar, kami siap bernegosiasi harga terbaik.
              </p>
            </div>
  
            <div class="border-l-4 border-indigo-500 pl-4">
              <h3 class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                Berapa lama proses produksinya?
              </h3>
              <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Proses produksi membutuhkan waktu sekitar 7–14 hari kerja, tergantung kompleksitas desain dan jumlah pesanan.
              </p>
            </div>
  
            <div class="border-l-4 border-indigo-500 pl-4">
              <h3 class="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                Apakah bisa kirim ke luar kota?
              </h3>
              <p class="mt-1 text-sm text-gray-700 dark:text-gray-300">
                Kami melayani pengiriman ke seluruh Indonesia dengan berbagai pilihan ekspedisi yang dapat disesuaikan.
              </p>
            </div>
          </div>
  
          <p class="mt-10 text-sm text-gray-700 dark:text-gray-300">
            Masih punya pertanyaan?
            <a href="/contact-us" class="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">Hubungi kami</a>.
          </p>
        </div>
  
        <!-- Image -->
        <div class="relative rounded-xl shadow-xl overflow-hidden">
          <img src="https://img.freepik.com/free-vector/flat-people-asking-questions-illustration_23-2148910850.jpg"
               alt="Produksi Konveksi"
               class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-indigo-600/30 dark:bg-indigo-500/20 mix-blend-multiply"></div>
        </div>
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
  
  
  <style type="text/tailwindcss"></style>
  

  