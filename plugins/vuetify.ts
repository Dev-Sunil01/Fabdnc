import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@/assets/css/main.scss'

// import '@/assets/js/counter'
// import '@/assets/js/main'
// import '@/assets/js/progressbar'
// import '@/assets/js/vanilla-tilt'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
  })
  app.vueApp.use(vuetify)
  
 
})

