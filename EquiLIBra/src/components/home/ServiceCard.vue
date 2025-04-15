// --- ServiceCard.vue ---
<template>
  <div class="bg-white shadow-md rounded p-6 text-center border border-[#d0d3d3]">
    <h3 class="text-xl font-semibold text-[#2c5e77] mb-2">{{ title }}</h3>
    <p class="text-[#2c5e77] text-sm">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String
})
</script>

<style scoped>
</style>