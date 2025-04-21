<template>
  <router-link :to="`/blog/${slug}`" class="blog-card">
    <div class="blog-card__img-wrapper">
      <img v-if="imageUrl" :src="imageUrl" alt="" class="blog-card__img" />
    </div>
    <div class="blog-card__content">
      <p class="blog-card__date">{{ formattedDate }}</p>
      <h3 class="blog-card__title">{{ title }}</h3>
      <p class="blog-card__subtitle">{{ subtitle }}</p>
      <span class="blog-card__link">Leer más →</span>
    </div>
  </router-link>
</template>

<script setup>
import { computed } from 'vue'
const { title, subtitle, imageUrl, date, slug } = defineProps({
  title:    String,
  subtitle: String,
  imageUrl: String,
  date:     String,
  slug:     String
})
const formattedDate = computed(() =>
  new Date(date).toLocaleDateString('es-ES',{ day:'numeric', month:'short', year:'numeric' })
)
</script>