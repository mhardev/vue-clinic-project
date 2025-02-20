import './assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
/* import posthogPlugin from './plugins/posthog' // Import plugin, not `posthog-js`

const app = createApp(App)

// Use PostHog plugin (ensures it's globally available)
app.use(posthogPlugin) */

createApp(App).mount('#app')
