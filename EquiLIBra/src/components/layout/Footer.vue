<template>
  <footer class="footer">
    <div class="footer-content">
      
      <!-- Logo y eslogan -->
      <div class="footer-column">
        <img src="/LogoEquiLIBra.png" alt="Logo EquiLIBra" class="footer-logo" />
        <p class="footer-slogan">Encuentra tu equilibrio emocional</p>
      </div>

      <!-- Enlaces -->
      <div class="footer-column">
        <h3 class="footer-heading">Navegación</h3>
        <ul class="footer-links">
          <li><RouterLink to="/">Inicio</RouterLink></li>
          <li><RouterLink to="/sobre-mi">Sobre mí</RouterLink></li>
          <li><RouterLink to="/servicios">Servicios</RouterLink></li>
          <li><RouterLink to="/blog">Blog</RouterLink></li>
          <li><RouterLink to="/contacto">Contacto</RouterLink></li>
        </ul>
      </div>

      <!-- Contacto -->
      <div class="footer-column">
        <h3 class="footer-heading">Contacto</h3>
        <p>equilibraweb@outlook.es</p>
        <p>Calle Falsa 123</p>
        <p>Madrid, España</p>
      </div>
    </div>

    <div class="footer-bottom">
      © 2025 EquiLIBra. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
