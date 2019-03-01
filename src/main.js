// Import System requirements
import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './store'
import routes from './routes'
import AppView from './views/App.vue'
import fetch from './utils/request'

Vue.use(VueRouter)

// 定义全局变量
Vue.prototype.$fetch = fetch

// global
Vue.config.productionTip = false
if (process.env.NODE_ENV === 'development') {
  Vue.config.devtools = true
} else {
  Vue.config.devtools = false
}

const errorHandler = (err, vm, info) => {
  console.log(err)
  console.log(info)
}
Vue.config.errorHandler = errorHandler
Vue.prototype.$throw = (error) => errorHandler(error, this)

// Routing logic
var router = new VueRouter({
  // base: '/bureau/',  // 外网
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
  console.info(to)
  next()
})

sync(store, router)

// Start out app!
// eslint-disable-next-line no-new
new Vue({
  el: '#root',
  router: router,
  store: store,
  render: h => h(AppView),
  renderError: (h, err) => {
    console.err(JSON.stringify(err))
    return h('pre', {style: {color: 'red'}}, err.stack)
  }
})
