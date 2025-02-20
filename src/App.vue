<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ServicePage from './pages/ServicePage.vue'
import ContactPage from './pages/ContactPage.vue'
</script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <Navbar />
    <main class="mt-16">
      <HomePage />
      <AboutPage />
      <ServicePage />
      <ContactPage />
    </main>
    <Footer />
  </div>
</template>
