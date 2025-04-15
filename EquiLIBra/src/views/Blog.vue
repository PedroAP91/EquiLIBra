// --- Blog.vue ---
<template>
  <section class="py-16 bg-[#fefefe] px-4">
    <h2 class="text-2xl text-center text-[#2c5e77] font-bold mb-10">Últimos artículos</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <BlogCard title="¿Qué es la autoestima?" excerpt="Descubre cómo se forma tu autoimagen y cómo mejorarla." />
      <BlogCard title="Gestionar la ansiedad" excerpt="Estrategias para afrontar los momentos de mayor tensión emocional." />
      <BlogCard title="Autocuidado realista" excerpt="Pequeños hábitos que pueden mejorar tu bienestar diario." />
    </div>
  </section>
</template>

<script setup>
import BlogCard from '../components/home/BlogCard.vue'

</script>

<style scoped>
</style>