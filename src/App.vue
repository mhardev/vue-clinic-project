<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import HomePage from './pages/HomePage.vue'
import AboutPage from './pages/AboutPage.vue'
import ServicePage from './pages/ServicePage.vue'
import ContactPage from './pages/ContactPage.vue'
import CookieBanner from './pages/CookieBanner.vue'
import { ref, getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()
const showBanner = ref(
  !(proxy.$posthog.has_opted_out_capturing() || proxy.$posthog.has_opted_in_capturing()),
)

console.log('Has opted out:', proxy.$posthog.has_opted_out_capturing())
console.log('Has opted in:', proxy.$posthog.has_opted_in_capturing())
console.log('Show banner:', showBanner.value)

function hideBanner() {
  showBanner.value = false
}
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
    <CookieBanner v-if="showBanner" @hideBanner="hideBanner" />
    <Footer />
  </div>
</template>
