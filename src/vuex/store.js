/*
* @Author: Administrator
* @Date:   2017-06-03 15:54:32
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-03 16:17:23
*/
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    price:60,
    startTime: '',
    endTime: ''
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
    }
  },
  getters: {
  	getPrice(state) {
  		return state.price
  	},
  	getTime(state) {
  		return {
  			startTime: state.startTime,
  			endTime: state.endTime
  		}
  	}
  }
})
