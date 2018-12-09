import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Search from './views/Search.vue';
import Cart from './views/Cart.vue';
import User from './views/User.vue';

//components
import Footeres from './components/Footeres.vue';

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
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
    },
  ],
});
