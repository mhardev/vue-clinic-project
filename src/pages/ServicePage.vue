<script setup>
import 'material-symbols'
</script>

<template>
  <section class="bg-white dark:bg-gray-900" id="service">
    <div class="py-20 px-4 mx-8 max-w-screen-xl sm:py-20 lg:py-32 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Services
        </h2>
        <p class="text-gray-500 sm:text-xl dark:text-gray-400">
          Comprehensive medical care tailored to your needs, including general consultation, clinic
          checkups, specialized treatments, and more.
        </p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <span class="material-symbols-outlined dark:text-white"> clinical_notes </span>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">General Consultation</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Expert medical advice for all health concerns.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <span class="material-symbols-outlined dark:text-white"> stethoscope </span>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Clinic Checkup</h3>
          <p class="text-gray-500 dark:text-gray-400">
            A routine assessment of overall health, including vital signs, physical examination, and
            basic screenings.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <span class="material-symbols-outlined dark:text-white"> respiratory_rate </span>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Specialized Treatment</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Personalized healthcare solutions for your well-being.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <span class="material-symbols-outlined dark:text-white"> wc </span>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Women's/Men's Health Checkup</h3>
          <p class="text-gray-500 dark:text-gray-400">
            Gender-specific screenings, such as mammograms or prostate exams, for early disease
            detection.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <span class="material-symbols-outlined dark:text-white"> badge </span>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Pre-Employment Medical Exam</h3>
          <p class="text-gray-500 dark:text-gray-400">
            A health assessment required by employers to ensure fitness for work.
          </p>
        </div>
        <div>
          <div
            class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
          >
            <span class="material-symbols-outlined dark:text-white"> stethoscope_arrow </span>
          </div>
          <h3 class="mb-2 text-xl font-bold dark:text-white">Annual Physical Exam</h3>
          <p class="text-gray-500 dark:text-gray-400">
            A comprehensive yearly health assessment, including lab tests and lifestyle evaluations.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- borderline dotted -->
  <div class="mx-8 md:mx-32 lg:mx-64 xl:mx-64 border-t-4 border-dotted border-green-700"></div>
  <!-- end of borderline dotted -->
</template>
