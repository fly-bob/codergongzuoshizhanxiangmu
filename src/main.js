import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from './components/common/toast'
import FastClick from 'fastclick'
FastClick.attach(document.body)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/xiaomai.jpg')
})

Vue.config.productionTip = false
Vue.use(Toast)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')