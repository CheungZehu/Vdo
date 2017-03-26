// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'

import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-carbon.css'

import App from './App'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(MuseUI)

Vue.filter('string', value => value.join('/'))
Vue.filter('fixNum', num => (num ? (Number(num).toFixed(1)) : '暂无评分'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
