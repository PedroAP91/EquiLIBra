<template>
  <section class="py-16 bg-[#fefefe] px-4">
    <h2 class="text-3xl text-center text-[#2c5e77] font-bold mb-12">Últimos artículos</h2>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <BlogCard
        v-for="post in posts"
        :key="post.id"
        :slug="post.slug"
        :title="post.title"
        :subtitle="post.subtitle"
        :date="post.date"
        :imageUrl="post.imageUrl"
      />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// IMPORTA fetchBlogPosts, no fetchBlogPostBySlug, y ajusta la ruta relativa:
import { fetchBlogPosts } from '../../services/contentful.js'
import BlogCard from './BlogCard.vue'

const posts = ref([])

onMounted(async () => {
  posts.value = await fetchBlogPosts()
  console.log('📝 Posts cargados:', posts.value)
})
</script>
