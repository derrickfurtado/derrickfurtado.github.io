<template>
  <nav class="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 transition-shadow duration-300"
       :class="{ 'shadow-md': scrolled }">
    <div class="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
      <div id="navLeft" class="flex gap-10">
        <a 
          v-for="link in navLinks" 
          :key="link.href"
          :href="link.href"
          @click.prevent="scrollToSection(link.href)"
          class="text-sm text-gray-600 hover:text-gray-900 transition-colors relative group"
        >
          {{ link.label }}
          <span class="absolute bottom-0 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
      <div id="navRight" class="flex items-center gap-6">
        <a 
          href="https://www.linkedin.com/in/derrick-furtado/" 
          target="_blank" 
          class="opacity-70 hover:opacity-100 transition-opacity"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg"
            alt="LinkedIn"
            class="w-5 h-5"
          >
        </a>
        <a 
          href="https://github.com/derrickfurtado" 
          target="_blank"
          class="opacity-70 hover:opacity-100 transition-opacity"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
            alt="GitHub"
            class="w-5 h-5"
          >
        </a>
        <a 
          href="https://docs.google.com/document/d/1dZe0KaliqaGGzGpDCGNp6epc-uN0wmfGmaNfcTG2aZI/edit?usp=sharing"
          target="_blank"
          class="text-sm px-4 py-2 border border-gray-200 rounded hover:border-gray-900 hover:bg-gray-50 transition-all"
        >
          Resume
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '#about', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
]

const scrolled = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 100
}

const scrollToSection = (href: string) => {
  const targetId = href.replace('#', '')
  const targetElement = document.getElementById(targetId)
  if (targetElement) {
    const navHeight = 80
    const targetPosition = targetElement.offsetTop - navHeight - 20
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

