import Vue from "vue"
import Vuex from 'vuex'
import Vuesax from 'vuesax'
import App from "./App.vue"
import router from './routes'
import 'vue-file-agent/dist/vue-file-agent.css';
import 'vuesax/dist/vuesax.css' 
import './global.css'
import createStore from "./store"

Vue.use(Vuex)
const store = createStore()

Vue.use(Vuesax, {})
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
