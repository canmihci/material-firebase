// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import firebaseApp from './firebase'
import 'vue-awesome/icons'
import store from './store'
import router from './router'
import Icon from 'vue-awesome/components/Icon.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
// import 'vue2-animate/dist/vue2-animate.min.css'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  duration: 2000,
  position: 'top-left'
})
Vue.config.productionTip = false
Vue.use(VueFire)
Vue.use(VueMaterial)
Vue.component('icon', Icon)

var db = firebaseApp.database()

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  store,
  router,
  firebase: {
    anArray: db.ref('url/to/my/collection')
  },
  template: '<App/>',
  components: { App }
})
