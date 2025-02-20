import posthog from 'posthog-js'

export default {
  install(app) {
    posthog.init('phc_oGITdoIWt8KtmDXxfnolJcv1c1wvtncz1FKDXaXy94n', {
      api_host: 'https://us.i.posthog.com',
    })

    // Attach PostHog instance to Vue global properties
    app.config.globalProperties.$posthog = posthog

    // Provide PostHog for Vue's inject
    app.provide('$posthog', posthog)
  },
}
