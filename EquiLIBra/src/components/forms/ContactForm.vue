<template>
    <form @submit.prevent="handleSubmit" class="max-w-xl mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 class="text-xl font-bold text-[#2c5e77] text-center">Formulario de contacto</h2>
  
      <div>
        <label for="name" class="block text-[#2c5e77]">Nombre</label>
        <input v-model="form.name" type="text" id="name" required class="w-full p-2 border rounded border-[#d0d3d3]" />
        <p v-if="errors.name" class="text-red-500 text-sm mt-1">{{ errors.name }}</p>
      </div>
  
      <div>
        <label for="email" class="block text-[#2c5e77]">Email</label>
        <input v-model="form.email" type="email" id="email" required class="w-full p-2 border rounded border-[#d0d3d3]" />
        <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
      </div>
  
      <div>
        <label for="message" class="block text-[#2c5e77]">Mensaje</label>
        <textarea v-model="form.message" id="message" rows="4" required class="w-full p-2 border rounded border-[#d0d3d3]"></textarea>
        <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
      </div>
  
      <button type="submit" class="bg-[#df5c43] text-white px-6 py-2 rounded">Enviar</button>
  
      <p v-if="successMessage" class="text-green-600 text-sm text-center mt-2">{{ successMessage }}</p>
    </form>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import * as yup from 'yup'
  import emailjs from '@emailjs/browser'

  
  const form = reactive({
    name: '',
    email: '',
    message: ''
  })
  
  const successMessage = ref('')
  const errors = reactive({
    name: '',
    email: '',
    message: ''
  })
  
  const schema = yup.object().shape({
    name: yup.string().required('El nombre es obligatorio'),
    email: yup.string().email('El email no es válido').required('El email es obligatorio'),
    message: yup.string().min(10, 'El mensaje debe tener al menos 10 caracteres').required('El mensaje es obligatorio')
  })
const publicKey = 'g6gu53mTarr8PB0rx'
  async function handleSubmit() {
  errors.name = ''
  errors.email = ''
  errors.message = ''
  successMessage.value = ''

  try {
    await schema.validate(form, { abortEarly: false })

    const templateParams = {
      name: form.name,
      email: form.email,
      message: form.message
    }

    await emailjs.send(
  'EquiLIBra_Mail',        // ← tu SERVICE ID
  'template_ymcppbr',       // ← tu TEMPLATE ID
  {
    name: form.name,
    email: form.email,
    message: form.message,
    title: 'Consulta desde EquiLIBra'
  },
  publicKey
)


    successMessage.value = 'Mensaje enviado correctamente.'
    form.name = ''
    form.email = ''
    form.message = ''

  } catch (err) {
    if (err.name === 'ValidationError') {
      err.inner.forEach((e) => {
        errors[e.path] = e.message
      })
    } else {
      successMessage.value = 'Hubo un error al enviar el mensaje.'
      console.error(err)
    }
  }
}

  </script>
  