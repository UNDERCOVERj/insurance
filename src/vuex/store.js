/*
* @Author: Administrator
* @Date:   2017-06-03 15:54:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-20 19:13:02
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    price: '',
    startTime: '',
    endTime: '',
    details: {},
    productPlanList: {}
  },
  mutations: {
    CHANGE_PRICE(state, num) {
    	state.price = num;
    },
    CHANGE_STARTTIME(state, start) {
    	state.startTime = start;
    },
    CHANGE_ENDTIME(state, end) {
    	state.endTime = end;
    },
    CHANGE_DETAILS(state, obj) {
      state.details = obj;
    },
    CHANGE_PRODUCTPLANLIST(state, index = 0) {
      console.log(state.details)
      state.productPlanList = state.details.productPlanList[index];
      state.price = state.productPlanList.productPlanPrice
    },
    CHANGE_PRODUCTPLANLISTanother(state, obj) {
      state.productPlanList = obj;
    }
  },
  getters: {
  	getPrice: (state) => state.price ,
  	getTime: (state) => ({
  			startTime: state.startTime,
  			endTime: state.endTime
  		}),
    getDetails: (state) => state.details ,
    getProductPlanList: (state) => state.productPlanList
  }
})
