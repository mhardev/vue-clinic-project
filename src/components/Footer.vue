<!-- eslint-disable vue/multi-word-component-names -->
<script setup></script>

<template>
  <footer class="p-4 bg-green-700 md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <a href="#" class="flex justify-center items-center text-2xl font-semibold text-white">
        <!-- <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        /> -->&nbsp; Medical Clinic
      </a>
      <br />
      <span class="text-sm text-white sm:text-center"
        >© {{ new Date().getFullYear() }} <a href="#" class="hover:underline">Medical Clinic</a>.
        All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
