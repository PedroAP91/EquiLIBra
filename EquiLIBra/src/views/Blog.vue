<!-- src/views/Blog.vue -->
<template>
  <main>
    <Navbar />
    <section class="py-16 bg-[#fefefe] px-4 max-w-7xl mx-auto">
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
    <Footer />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { fetchBlogPosts }        from '../services/contentful.js'
import Navbar                     from '../components/layout/Navbar.vue'
import BlogCard                   from '../components/home/BlogCard.vue'
import Footer                     from '../components/layout/Footer.vue'

const posts = ref([])

onMounted(async () => {
  posts.value = await fetchBlogPosts()
})
</script>
