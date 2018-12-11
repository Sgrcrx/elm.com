import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

//fa字体包及轮播图、weui
import './assets/css/font-awesome.min.css'
import './assets/css/swiper.min.css'
import './assets/css/weui.css'
import './assets/css/swiper.css'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import Vue from 'vue'
import * as uiv from 'uiv'

Vue.use(uiv)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
