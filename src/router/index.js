import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Details from '@/components/details'
import Safeguard from '@/components/safeguard'
import Clause from '@/components/clause'
import Notice from '@/components/notice'
import Attention from '@/components/attention'
import Order from '@/components/order'
import Payment from '@/components/payment'
import Success from '@/components/success'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
    	path:'/details',
    	component: Details,
    	children: [
    		{
    			path:'safeguard',component: Safeguard
    		},
    		{
    			path:'clause',component: Clause
    		},
    		{
    			path:'notice',component: Notice
    		},
    		{
    			path:'attention',component: Attention
    		}
    	]
    },
    {
    	path:'/order',
    	component: Order
    },
    {
    	path: '/payment',
    	component: Payment
    },
    {
    	path: '/success',
    	component: Success
    }
  ]
})
