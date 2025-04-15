// --- BlogCard.vue ---
<template>
  <div class="bg-white border border-[#d0d3d3] p-4 rounded shadow">
    <h3 class="text-lg font-semibold text-[#2c5e77] mb-2">{{ title }}</h3>
    <p class="text-[#2c5e77] text-sm">{{ excerpt }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  excerpt: String
})
</script>

<style scoped>
</style>