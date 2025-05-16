
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../src/assets/css/main.css'
import '@mdi/font/css/materialdesignicons.css'

import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messages from '../../questify/src/i18n'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'   
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi' 


const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'en',
  messages,
})

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(vuetify)
app.mount('#app')
