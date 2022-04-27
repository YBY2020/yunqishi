import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store'
import dayjs from 'dayjs'
import ObjectSupport from 'dayjs/plugin/objectSupport'
import '@/assets/icons/index'

Vue.use(ElementUI);

Vue.prototype.dayjs = dayjs
dayjs.extend(ObjectSupport)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
