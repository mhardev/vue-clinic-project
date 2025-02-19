<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import 'material-symbols'

const form = ref(null)

const resetForm = () => {
  form.value.reset()
}

const sendEmail = () => {
  emailjs
    .sendForm('service_buc16bi', 'template_4ql3lie', form.value, {
      publicKey: 'dZho8DDRbgRF61_80',
    })
    .then(
      () => {
        toast.success('Email sent successfully!', {
          autoClose: 2000,
        })
        resetForm()
      },
      (error) => {
        console.error('Email sending failed:', error)
        toast.error(`Error: ${error.text}`, {
          autoClose: 2000,
        })
      },
    )
}
</script>

<template>
  <section class="bg-white dark:bg-gray-900" id="contact">
    <div class="py-20 lg:pt-32 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
      >
        Contact Us
      </h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Have a medical concern? Need an appointment? Want to learn more about our services? Get in
        touch with us today, and our friendly staff will be happy to assist you.
      </p>
      <form ref="form" class="space-y-8" @submit.prevent="sendEmail">
        <div>
          <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Name</label
          >
          <input
            type="name"
            id="name"
            name="name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-600 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="john.doe@example.com"
            required
          />
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >Subject</label
          >
          <input
            type="text"
            name="subject"
            id="subject"
            class="block p-3 w-full text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >Your message</label
          >
          <textarea
            id="message"
            name="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-600 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="py-3 px-5 text-white text-sm font-medium text-center rounded-lg bg-green-700 sm:w-fit hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-700 dark:focus:green-blue-800"
          value="Send"
        >
          Send message
        </button>
      </form>
    </div>
  </section>
  <!-- borderline dotted -->
  <div class="mx-8 md:mx-32 lg:mx-64 xl:mx-64 border-t-4 border-dotted border-green-700"></div>
  <!-- end of borderline dotted -->
  <section class="bg-white dark:bg-gray-900 mb-8">
    <div class="pt-14 lg:pt-20 px-4 mx-auto max-w-screen-md">
      <h2
        class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
      >
        CV Medical Clinic
      </h2>
      <p class="mb-8 lg:mb-4 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        Visit our address at 123 Health Street, Medical City, CV 45678.
      </p>
      <div class="mapouter py-0 px-4 mx-auto max-w-screen-md mb-8 lg:mb-4">
        <div class="gmap_canvas">
          <iframe
            class="gmap_iframe"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.074006609081!2d121.03708787575009!3d14.708406785790816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b0e6dec442af%3A0xe6850fa9dfba5de6!2sPadron%20Medical%20Clinic!5e0!3m2!1sen!2sph!4v1739930536234!5m2!1sen!2sph&amp;output=embed"
          ></iframe>
        </div>
      </div>
      <p class="pt-0 lg:pt-6 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
        📞 <strong class="text-gray-900 dark:text-white">Phone:</strong> (123) 456-7890 <br />
        ✉️
        <strong class="text-gray-900 dark:text-white">Email:</strong> contact@cvmedicalclinic.com
        <br />
        🕒 <strong class="text-gray-900 dark:text-white">Opening Hours:</strong> Mon - Fri: 8 AM - 6
        PM | Sat: 9 AM - 3 PM | Sun: Closed
        <br />
      </p>
    </div>
  </section>
</template>

<style scoped>
.mapouter {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}
.gmap_canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.gmap_iframe {
  width: 100%;
  height: 100%;
}
</style>
