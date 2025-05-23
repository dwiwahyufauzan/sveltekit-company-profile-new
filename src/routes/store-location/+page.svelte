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
<section class="relative isolate overflow-hidden bg-white dark:bg-gray-900 pt-32 sm:pt-36 pb-20 sm:pb-32">
    <!-- Background Image -->
    <img
      src="https://img.freepik.com/premium-photo/asian-seamstress-work-sewing-machine_50401-138.jpg?uid=R108872572&ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
      alt="Seamstress bekerja dengan mesin jahit"
      class="absolute inset-0 -z-10 w-full h-full object-cover object-center"
    />
  
    <!-- Overlay -->
    <div class="absolute inset-0 -z-10 bg-black/50"></div>
  
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        
        <!-- Badge -->
        <div class="mb-5 flex justify-center">
          <div class="inline-flex items-center rounded-full bg-gray-100/10 dark:bg-white/10 px-4 py-1.5 text-sm text-gray-200 dark:text-white ring-1 ring-black/10 dark:ring-white/20 hover:ring-black/20 dark:hover:ring-white/40 transition">
            Lokasi Toko Glam Stitch
            <a href="/" class="ml-2 font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
              Lihat di Maps <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
  
        <!-- Heading -->
        <h1 class="text-4xl font-bold tracking-tight text-white dark:text-white sm:text-5xl">
          Glam Stitch Mitra Konveksi Terpercaya Anda
        </h1>
  
        <!-- Description -->
        <p class="mt-6 text-lg text-gray-200 dark:text-gray-300 sm:text-xl">
          Kunjungi workshop dan toko kami di Desa Cijoged, Kecamatan Cisarua, Kabupaten Sumedang — mudah dijangkau dan siap melayani Anda secara langsung maupun online.
        </p>
  
        <!-- Buttons -->
        <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="/"
              class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 transition-all transform hover:scale-105">
              Mulai Sekarang
            </a>
            <a href="/" class="text-sm font-semibold text-white hover:text-indigo-400 transition-all transform hover:scale-105">Jelajahi Lebih Lanjut <span aria-hidden="true">→</span></a>
          </div>
      </div>
    </div>
  </section>
  
<!-- Location Section -->
<section class="bg-gray-50 dark:bg-gray-900 py-24 sm:py-32">
    <div class="max-w-7xl mx-auto px-6 lg:px-16">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-4">
          Lokasi Toko Glam Stitch
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Temukan toko kami di lokasi strategis yang mudah dijangkau. Kunjungi dan diskusikan langsung kebutuhan konveksi Anda bersama tim profesional kami!
        </p>
      </div>
  
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <!-- Map -->
        <div class="overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-200 dark:ring-gray-700">
            <!-- svelte-ignore a11y_missing_attribute -->
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.001924246237!2d107.63708791074282!3d-6.52143746372805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69157b1927e5a3%3A0x1182e42524259d7!2sKaos%20Polos%20Glam%20Stitch!5e0!3m2!1sid!2sid!4v1746449536701!5m2!1sid!2sid"
            width="100%" height="400" style="border:0;"
            allowfullscreen
            loading="lazy"
            class="w-full h-[400px] rounded-xl border-none transition-all transform hover:scale-105 duration-300 ease-in-out shadow-lg">
          </iframe>
        </div>
  
        <!-- Location Details -->
        <div class="space-y-6">
          <!-- Address -->
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <img src="https://img.freepik.com/free-vector/location-pin-map-glyph_78370-1576.jpg?ga=GA1.1.1868222757.1738365469&semt=ais_hybrid&w=740"
                alt="Icon Lokasi" class="h-14 w-14 object-contain rounded-xl shadow-md transition-transform transform hover:scale-105">
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Alamat</h3>
              <p class="text-gray-600 dark:text-gray-300">Kampung Dayacipta, Tanggulun Bar., Kec. Kalijati, Kabupaten Subang, Jawa Barat 41271</p>
            </div>
          </div>
  
          <!-- Operating Hours -->
          <div class="flex items-start gap-4">
            <div class="flex-shrink-0">
              <img src="https://media.istockphoto.com/id/1283403359/id/vektor/ikon-waktu-di-latar-belakang-transparan.jpg?s=612x612&w=0&k=20&c=foEv6n4528X0AkgcQZBX6TqWlZAOezpBEgoDRS-5LDo=" 
                alt="Icon Jam" class="h-14 w-14 object-contain rounded-xl shadow-md transition-transform transform hover:scale-105">
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Jam Operasional</h3>
              <p class="text-gray-600 dark:text-gray-300">Senin - Jum'at, 09.00 - 17.00 WIB</p>
              <p class="text-gray-600 dark:text-gray-300">Sabtu, 09.00 - 14.00 WIB</p>
              <p class="text-gray-600 dark:text-gray-300">Minggu, Tutup</p>
            </div>
          </div>
  
          <!-- Link Maps -->
          <div>
            <a href="https://maps.app.goo.gl/bHXM3HurzhfNRbENA" target="_blank"
              class="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline transition duration-300">
              Buka di Google Maps → 
            </a>
          </div>
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
  

  