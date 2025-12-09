<template>
  <div class="min-h-screen bg-white">
    <Navigation />
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navigation from './components/Navigation.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
</script>

