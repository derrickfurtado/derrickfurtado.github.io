<template>
  <section id="contact" class="w-full py-24 px-8 bg-gray-50">
    <div class="max-w-2xl mx-auto">
      <h2 class="text-2xl font-semibold text-gray-900 mb-12 text-center tracking-tight">
        CONTACT ME
      </h2>
      <form 
        @submit.prevent="handleSubmit"
        class="bg-white p-8 rounded-lg border border-gray-200 shadow-sm"
      >
        <div class="mb-6">
          <input
            v-model="form.name"
            type="text"
            placeholder="Name"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
          >
        </div>
        <div class="mb-6">
          <input
            v-model="form.email"
            type="email"
            placeholder="Email"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
          >
        </div>
        <div class="mb-6">
          <input
            v-model="form.company"
            type="text"
            placeholder="Company"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
          >
        </div>
        <div class="mb-6">
          <textarea
            v-model="form.message"
            placeholder="Message"
            rows="5"
            required
            class="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-vertical"
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full px-6 py-3 bg-gray-900 text-white rounded hover:bg-gray-800 transition-all hover:-translate-y-0.5 hover:shadow-lg font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

const form = ref<FormData>({
  name: '',
  email: '',
  company: '',
  message: ''
})

const handleSubmit = async () => {
  const formData = new FormData()
  formData.append('name', form.value.name)
  formData.append('email', form.value.email)
  formData.append('company', form.value.company)
  formData.append('message', form.value.message)

  try {
    const response = await fetch('https://formspree.io/f/xvgpappr', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      alert('Thank you! Your message has been sent.')
      form.value = {
        name: '',
        email: '',
        company: '',
        message: ''
      }
    } else {
      alert('There was an error sending your message. Please try again.')
    }
  } catch (error) {
    alert('There was an error sending your message. Please try again.')
    console.error('Form submission error:', error)
  }
}
</script>

