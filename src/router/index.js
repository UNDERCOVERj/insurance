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
      component: Home,
      meta:{"name": "home","title": "首页"}
    },
    {
    	path:'/details',
    	component: Details,

    	children: [
    		{
    			 meta: {"title": "保险详情"}, path:'safeguard',component: Safeguard
    		},
    		{
    			 meta: {"title": "保险详情"}, path:'clause',component: Clause
    		},
    		{
    			meta: {"title": "保险详情"}, path:'notice',component: Notice
    		},
    		{
    			meta: {"title": "保险详情"}, path:'attention',component: Attention
    		}
    	]
    },
    {
    	path:'/order',
    	component: Order,
        meta:{title: '订单填写'}
    },
    {
    	path: '/payment',
    	component: Payment,
        meta:{title: '支付环节'}
    },
    {
    	path: '/success',
    	component: Success,
        meta:{title: '支付成功'}
    }
  ]
})
