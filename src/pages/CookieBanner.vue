<script setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance()

function acceptCookies() {
  proxy.$posthog.opt_in_capturing()
  proxy.$emit('hideBanner')
  console.log('Cookies accepted')
}
function declineCookies() {
  proxy.$posthog.opt_out_capturing()
  proxy.$emit('hideBanner')
  console.log('Cookies declined')
}
</script>
<template>
  <div class="banner">
    <p>
      We use our own cookies as well as third-party cookies on our websites to enhance your
      experience, analyze our traffic, and for security and marketing. Select "Accept All" to allow
      them to be used. Read our Cookie Policy.
    </p>
    <button @click="acceptCookies">Accept</button>
    <button @click="declineCookies">Decline</button>
  </div>
</template>

<style scoped>
.banner {
  background-color: #f1f1f1;
  padding: 20px;
  text-align: center;
}
</style>
