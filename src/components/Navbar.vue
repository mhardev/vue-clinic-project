<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from 'vue'
import logoImage from '@/assets/images/logo.png'

// Define reactive state for menu visibility
const isMenuOpen = ref(false)

// Toggle menu function
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Close menu when a link is clicked (for mobile)
const closeMenu = () => {
  isMenuOpen.value = false
}

// Navigation links
const Links = ref([
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Service', link: '#service' },
  { name: 'Contact', link: '#contact' },
])
</script>

<template>
  <nav
    class="bg-opacity-90 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="logoImage" class="h-8" alt="CVMC Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >CVMC</span
        >
      </a>

      <!-- Toggle Button for Mobile -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Navigation Menu -->
      <div
        :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
        class="justify-between w-full md:flex md:w-auto md:order-1"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="link in Links" :key="link.name">
            <a
              :href="link.link"
              @click="closeMenu"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
