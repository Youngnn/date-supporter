import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios' // 가져온다
import VueAxios from 'vue-axios' //가져온다

Vue.use(VueAxios,axios) //동작시킨다.

Vue.config.productionTip = false //
Vue.prototype.$bus = new Vue() //event bus 생성 (아무 것도 없는 뷰 인스턴스를 만들어 쓴다.)


new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
