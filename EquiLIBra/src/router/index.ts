import { createRouter, createWebHistory } from 'vue-router'

import Home         from '../views/Home.vue'
import About        from '../views/About.vue'
import ServicesPage from '../views/ServicesPage.vue'
import Blog         from '../views/Blog.vue'
import BlogPost     from '../views/BlogPost.vue'   
import Contact      from '../views/Contact.vue'

const routes = [
  { path: '/',           name: 'Home',     component: Home },
  { path: '/sobre-mi',   name: 'About',    component: About },
  { path: '/servicios',  name: 'Services', component: ServicesPage },
  { path: '/blog',       name: 'Blog',     component: Blog },
  {
    path: '/blog/:slug',      // ← ruta dinámica
    name: 'BlogPost',
    component: BlogPost,
    props: true               // ← pasa `route.params.slug` como prop
  },
  { path: '/contacto',  name: 'Contact',  component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
