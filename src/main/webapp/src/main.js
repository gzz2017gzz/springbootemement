// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import ElementUI from 'element-ui'
import http from './utils/http';
import 'element-ui/lib/theme-chalk/index.css'
import installFilter from './common/vue-filters';
installFilter(Vue);
Vue.config.productionTip = true
Vue.$http = http;
Vue.prototype.$http = http;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
