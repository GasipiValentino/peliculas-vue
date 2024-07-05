import './assets/main.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'  // Importa los íconos correctamente

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',  // Asegúrate de que 'mdi' esté configurado como el conjunto de íconos predeterminado
  },
})

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')
