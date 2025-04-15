<!-- --- Navbar.vue --- -->
<template>
  <nav class="bg-white shadow-md p-4 flex justify-between items-center">
    <!-- Logo -->
    <div class="text-xl font-bold text-[#2c5e77]">
      <RouterLink to="/">EquiLIBra</RouterLink>
    </div>

    <!-- Botón menú / cerrar (solo en móviles) -->
    <button @click="toggleMenu" class="md:hidden text-[#2c5e77]">
      <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 6h15M4.5 12h15m-15 6h15" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- Menú de navegación -->
    <ul
      :class="[
        'flex flex-col md:flex-row gap-6 text-[#2c5e77] transition-all duration-300 ease-in-out',
        isMenuOpen ? 'max-h-96 opacity-100 pt-4' : 'max-h-0 opacity-0 overflow-hidden',
        'md:flex md:max-h-none md:opacity-100 md:pt-0'
      ]"
    >
      <li><RouterLink to="/" @click="closeMenu">Inicio</RouterLink></li>
      <li><RouterLink to="/sobre-mi" @click="closeMenu">Sobre mí</RouterLink></li>
      <li><RouterLink to="/servicios" @click="closeMenu">Servicios</RouterLink></li>
      <li><RouterLink to="/blog" @click="closeMenu">Blog</RouterLink></li>
      <li><RouterLink to="/contacto" @click="closeMenu">Contacto</RouterLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}
</script>

<style scoped>
</style>
