<template>
  <div class="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#fefefe] to-[#F6F0E8] text-[#2c5e77] font-sans flex flex-col items-center justify-center">

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
