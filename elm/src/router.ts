import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

//views
import Search from './views/Search.vue';
import Cart from './views/Cart.vue';
import User from './views/User.vue';
//components
import Footeres from './components/Footeres.vue';
import TopBar from './components/TopBar.vue';
import Goods from './components/Goods.vue';
import More1 from './components/More1.vue';
import Swiper from './components/Swiper.vue';
import Intriduction from './components/Intriduction.vue';
import FoodsGood from './components/FoodsGood.vue';
import UserTop from './components/UserTop.vue';
import Information from './components/Information.vue';
import Demos from './components/Demos.vue';
import None from './components/None.vue';
import SearchTop from './components/SearchTop.vue';
import SomeTimes from './components/SomeTimes.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
     {
      path: '/search',
      name: 'search',
      component: Search,
    },{
      path: '/cart',
      name: 'cart',
      component: Cart,
    },{
      path: '/user',
      name: 'user',
      component: User,
    },{
      path: '/more1',
      name: 'more1',
      component: More1,
    },{
      path: '/swiper',
      name: 'swiper',
      component: Swiper,
    },{
      path: '/intriduction',
      name: 'intriduction',
      component: Intriduction,
    },{
      path: '/foodsgood',
      name: 'foodsgood',
      component: FoodsGood,
    },{
      path: '/usertop',
      name: 'usertop',
      component: UserTop,
    },{
      path: '/information',
      name: 'information',
      component: Information,
    },{
      path: '/demos',
      name: 'demos',
      component: Demos,
    },{
      path: '/none',
      name: 'none',
      component: None,
    },{
      path: '/searchtop',
      name: 'searchtop',
      component: SearchTop,
    },{
      path: '/sometimes',
      name: 'sometimes',
      component: SomeTimes,
    },
  ],
});
