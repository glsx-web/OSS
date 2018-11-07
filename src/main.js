// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'glsx-vue-components/dist/glsx-vue-components.css'
import 'glsx-vue-admin/dist/glsx-vue-admin.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import GlsxVueComponets from 'glsx-vue-components'
import GlsxVueAdmin from 'glsx-vue-admin'
import GlsxVueCommon from 'glsx-vue-common'
// import { admin, common } from '@/config'
import store from './store'
import i18n from './lang'
import router from './router'
import axios from 'axios'
import './assets/icons'
Vue.use(GlsxVueComponets)
Vue.config.productionTip = false;

(async () => {
  const URL = 'http://192.168.3.171:7300/mock/5be17454f31545347559d499/config'
  const admin = await axios.get(URL + '/admin')
  const common = await axios.get(URL + '/admin_common')
  Vue.use(GlsxVueAdmin, admin.data)
  Vue.use(GlsxVueCommon, common.data)
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router,
    i18n,
    store,
    render: h => h(App)
  })
})()
