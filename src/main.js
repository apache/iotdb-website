import Vue from 'vue'
import App from './App'
import router from './router'
import global_ from './components/Global'
import $ from 'jquery'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

Vue.config.productionTip = false;
Vue.prototype.GLOBAL = global_


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
