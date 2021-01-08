import Vue from 'vue'
import App from './App.vue'
import index from './router'
import store from './store' //状态仓库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCompositionApi from '@vue/composition-api';


Vue.use(VueCompositionApi);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router: index,
  store,
  render: h => h(App)
}).$mount('#app')
