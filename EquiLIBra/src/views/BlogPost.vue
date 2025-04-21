<!-- src/views/BlogPost.vue -->
<template>
  <article class="blog-post__container">
    <div v-if="error" class="text-red-500 text-center">{{ error }}</div>
    <div v-else-if="!post" class="text-center text-gray-500">Cargando…</div>
    <div v-else>
      <img v-if="post.imageUrl" :src="post.imageUrl" class="blog-post__img" />
      <h1 class="blog-post__title">{{ post.title }}</h1>
      <p class="blog-post__date">{{ formattedDate }}</p>
      <div class="blog-post__content">
        <component
          v-for="(node, i) in post.content.content"
          :key="i"
          :is="node.nodeType"
          v-html="node.content.map(c => c.value).join('')"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute }                from 'vue-router'
import { fetchBlogPostBySlug }     from '../services/contentful.js'

const route = useRoute()
const slug  = route.params.slug
const post  = ref(null)
const error = ref('')

onMounted(async () => {
  try {
    post.value = await fetchBlogPostBySlug(slug)
  } catch (e) {
    error.value = e.message
  }
})

const formattedDate = computed(() =>
  post.value
    ? new Date(post.value.date).toLocaleDateString('es-ES',{ day:'numeric', month:'long', year:'numeric' })
    : ''
)
</script>
