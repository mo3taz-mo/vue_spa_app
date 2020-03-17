import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue' // IconsPlugin

Vue.config.productionTip = false

// Install Plugins
Vue.use(BootstrapVue)
//Vue.use(IconsPlugin)

// Import styles
//import './theme/main.scss'
localStorage.getItem('appLang') == 'en'
  || localStorage.getItem('appLang') == null
  || localStorage.getItem('appLang') == undefined ? import('./theme/main.scss') : import('./theme/main-rtl.scss')

// Layout 
import Default from '@/app/shared/layouts/default.vue'
Vue.component('default-layout', Default)

import NoNavbar from '@/app/shared/layouts/no-navbar.vue'
Vue.component('no-navbar-layout', NoNavbar)

//VueShortkey
// import vueShortKey from 'vue-shortkey'
// Vue.use(vueShortKey)

import i18n from './i18n'
Vue.use(require('vue-shortkey'))

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
