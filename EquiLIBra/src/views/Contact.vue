<template>
  <section class="py-16 px-4">
    <h1 class="text-3xl font-bold text-[#2c5e77] text-center mb-6">Contacto</h1>
    <p class="text-center text-[#2c5e77] mb-8">
      Si tienes alguna duda o deseas agendar una sesión, completa el siguiente formulario:
    </p>
    <ContactForm />
  </section>
</template>

<script setup>
import ContactForm from '../components/forms/ContactForm.vue'
</script>
