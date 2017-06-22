// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Cell, Header, Switch, Radio ,Checklist ,Field, DatetimePicker, Actionsheet, Spinner, Picker, Popup  } from 'mint-ui'
import store from './vuex/store'
//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'
Vue.config.productionTip = false
//Vue.use(MintUI)
Vue.component(Button.name, Button)
Vue.component(Cell.name, Cell)
Vue.component(Header.name, Header)
Vue.component(Switch.name, Switch)
Vue.component(Radio.name, Radio)
Vue.component(Checklist.name, Checklist)
Vue.component(Field.name, Field)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(Spinner.name, Spinner)
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup)
/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
	document.title = to.meta.title
	next()
})
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
