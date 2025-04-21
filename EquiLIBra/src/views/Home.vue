<template>
  <main class="relative bg-[#fefefe] text-[#2c5e77] overflow-hidden">

    <!-- ✅ Celosías laterales -->
    <img
      src="/Celosia1.jpg"
      alt="Decoración izquierda"
      class="celosia-left"
    />
    <img
      src="/Celosia1.jpg"
      alt="Decoración derecha"
      class="celosia-right"
    />

    <Navbar />

    <!-- Contenido centrado -->
    <div class="relative z-10 max-w-7xl mx-auto px-4">
      <HeroBanner />
      <Services />
      <AboutPreview />
      <QuoteBanner />
      <BlogPreview />
      <ContactCTA />
    </div>

    <Footer />
  </main>
</template>

<script setup>
import Navbar       from '../components/layout/Navbar.vue'
import HeroBanner   from '../components/home/HeroBanner.vue'
import Services     from '../components/home/Services.vue'
import AboutPreview from '../components/home/AboutPreview.vue'
import QuoteBanner  from '../components/home/QuoteBanner.vue'
import BlogPreview  from '../components/home/BlogPreview.vue'
import ContactCTA   from '../components/home/ContactCTA.vue'
import Footer       from '../components/layout/Footer.vue'
</script>
