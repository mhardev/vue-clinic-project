<script setup>
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import homeImage from '@/assets/images/cvmc-home.jpg'

toast('Welcome to CV Medical Clinic', {
  autoClose: 5000,
})
</script>

<template>
  <section class="bg-white dark:bg-gray-900" id="home">
    <div class="grid max-w-screen-xl px-4 py-20 mx-8 lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1
          class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
        >
          CV Medical Clinic
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          Providing quality healthcare services with a commitment to excellence and patient care.
        </p>
        <a
          href="#about"
          class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
        >
          About Us
          <svg
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <img class="rounded-lg" :src="homeImage" alt="Home Image" />
      </div>
    </div>
  </section>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        At CV Medical Clinic, we are dedicated to providing top-quality healthcare services with a
        patient-centered approach. Our team of experienced professionals ensures personalized
        treatment in a comfortable and welcoming environment.
      </p>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Your health is our priority. With state-of-the-art medical technology and a compassionate
        team, we strive to deliver exceptional healthcare solutions tailored to your needs.
      </p>
    </div>
  </section>
  <!-- borderline dotted -->
  <div class="mx-8 md:mx-32 lg:mx-64 xl:mx-64 border-t-4 border-dotted border-green-700"></div>
  <!-- end of borderline dotted -->
</template>
