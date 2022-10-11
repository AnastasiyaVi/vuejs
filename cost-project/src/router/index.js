import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/add/payment/',
      component: () => import('../components/AddPayment.vue'),
      name: 'addPayment',
    },
    {
      path: '/add/payment/:category',
      component: () => import('../components/AddPayment.vue'),
      name: 'addPayment',
    },
  ],

});

export default router;