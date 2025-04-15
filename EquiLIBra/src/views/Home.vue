// --- Home.vue ---
<template>
  <div>
    <Navbar />
    <HeroBanner />
    <Services />
    <AboutPreview />
    <QuoteBanner />
    <BlogPreview />
    <ContactCTA />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/layout/Navbar.vue'
import HeroBanner from '../components/home/HeroBanner.vue'
import Services from '../components/home/Services.vue'
import AboutPreview from '../components/home/AboutPreview.vue'
import QuoteBanner from '../components/home/QuoteBanner.vue'
import BlogPreview from '../components/home/BlogPreview.vue'
import ContactCTA from '../components/home/ContactCTA.vue'
import Footer from '../components/layout/Footer.vue'
</script>

<style scoped>
</style>