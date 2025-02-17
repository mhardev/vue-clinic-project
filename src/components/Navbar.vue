<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import MenuButton from './MenuButton.vue'
import GetStartButton from './GetStartButton.vue'
import { ref, onMounted } from 'vue'
import { Collapse } from 'flowbite'

const Links = ref([
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Service', link: '#service' },
  { name: 'Contact', link: '#contact' },
])

let collapse

onMounted(() => {
  const $targetMenu = document.getElementById('targetMenu')
  const $openMenu = document.getElementById('openMenu')

  const options = {
    onCollapse: () => {
      console.log('element has been collapsed')
    },
    onExpand: () => {
      console.log('element has been expanded')
    },
    onToggle: () => {
      console.log('element has been toggled')
    },
  }

  collapse = new Collapse($targetMenu, $openMenu, options)
})
</script>

<template>
  <nav
    class="bg-opacity-90 bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
      </a>
      <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <GetStartButton />
        <MenuButton :collapse="collapse" />
      </div>
      <div
        @click="collapse.toggle()"
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="targetMenu"
      >
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <li v-for="link in Links" :key="link.name">
            <a
              :href="link.link"
              class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >{{ link.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
