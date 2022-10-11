import Vue from 'vue'
import App from './App.vue'

import modal from './plugins/modal'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false
Vue.use(modal);

new Vue({
  render: h => h(App),
  store,
  vuetify,
  router
}).$mount('#app')