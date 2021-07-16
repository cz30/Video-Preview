import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button,Popup,Cell  } from 'vant'
import 'vant/lib/index.css';
import 'amfe-flexible/index.min.js'

Vue.use(Button)
Vue.use(Cell)
Vue.use(Popup)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
