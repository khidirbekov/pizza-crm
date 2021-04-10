import Vue from "vue"
import Vuesax from 'vuesax'
import App from "./App.vue"
import router from './routes'
import 'vue-file-agent/dist/vue-file-agent.css';
import 'vuesax/dist/vuesax.css' 
import './global.css'

Vue.use(Vuesax, {})
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
