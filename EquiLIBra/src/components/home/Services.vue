// --- Services.vue ---
<template>
  <section class="py-16 bg-[#fefefe] px-4">
    <h2 class="text-2xl text-center text-[#2c5e77] font-bold mb-10">Servicios</h2>
    <div class="grid md:grid-cols-3 gap-6">
      <ServiceCard title="Terapia individual" description="Espacio seguro para explorar tu mundo interno." />
      <ServiceCard title="Ansiedad y estrés" description="Aprende a manejar tus emociones y pensamientos." />
      <ServiceCard title="Autoestima" description="Reconecta con tu valor personal y autoconfianza." />
    </div>
  </section>
</template>

<script setup>
import ServiceCard from './ServiceCard.vue'
</script>

<style scoped>
</style>