import { createApp } from './main'

const { app, router, store } = createApp()

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
  console.log('client router ready');
})

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

