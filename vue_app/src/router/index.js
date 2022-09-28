import Vue from 'vue'
import Router from 'vue-router'

import AddPayment from '../components/AddPayment'


Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/add/payment/',
      component: AddPayment,
      name: 'addPayment',
    },
    {
      path: '/add/payment/:category',
      component: AddPayment,
      name: 'addPayment',
    },
  ],

});

export default router;