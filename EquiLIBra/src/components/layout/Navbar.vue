<template>
  <nav class="bg-[#F6F0E8] border-b border-[#d0d3d3] shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">
      
      <!-- LOGO + NOMBRE -->
      <RouterLink to="/" class="flex items-center gap-3">
        <img
          src="/LogoEquiLIBra.png"
          alt="Logo EquiLIBra"
          class="block max-h-12 w-auto"
          style="height: auto; max-height: 240px;"
        />
        <span class="text-[#2c5e77] font-bold text-xl hidden sm:inline">EquiLIBra</span>
      </RouterLink>

      <!-- Botón hamburguesa + Menú desplegable -->
      <div
        class="relative md:hidden"
        @mouseenter="isMenuOpen = true"
        @mouseleave="isMenuOpen = false"
      >
        <!-- Botón -->
        <button class="text-[#2c5e77] p-2 rounded-md focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg"
               class="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <!-- Menú desplegable -->
        <div
          class="dropdown-menu"
  :class="isMenuOpen ? 'visible opacity-100 scale-100' : 'invisible opacity-0 scale-95'"
        >
          <ul class="py-2 flex flex-col gap-1 text-[#2c5e77] font-semibold">
            <li><RouterLink @click="closeMenu" to="/" class="block px-4 py-2 hover:bg-[#e8e0d6] rounded-md">Inicio</RouterLink></li>
            <li><RouterLink @click="closeMenu" to="/sobre-mi" class="block px-4 py-2 hover:bg-[#e8e0d6] rounded-md">Sobre mí</RouterLink></li>
            <li><RouterLink @click="closeMenu" to="/servicios" class="block px-4 py-2 hover:bg-[#e8e0d6] rounded-md">Servicios</RouterLink></li>
            <li><RouterLink @click="closeMenu" to="/blog" class="block px-4 py-2 hover:bg-[#e8e0d6] rounded-md">Blog</RouterLink></li>
            <li><RouterLink @click="closeMenu" to="/contacto" class="block px-4 py-2 hover:bg-[#e8e0d6] rounded-md">Contacto</RouterLink></li>
          </ul>
        </div>
      </div>

      <!-- Menú en escritorio -->
      <ul class="hidden md:flex md:items-center md:gap-6 text-[#2c5e77] font-medium">
        <li><RouterLink to="/">Inicio</RouterLink></li>
        <li><RouterLink to="/sobre-mi">Sobre mí</RouterLink></li>
        <li><RouterLink to="/servicios">Servicios</RouterLink></li>
        <li><RouterLink to="/blog">Blog</RouterLink></li>
        <li><RouterLink to="/contacto">Contacto</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)

function closeMenu() {
  isMenuOpen.value = false
}
</script>