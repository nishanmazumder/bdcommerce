// Main
require('./bootstrap')

// Import Vue
import Vue from 'vue'

// Import Vuex
//import Vuex from 'vuex'

import store from './store'

// Import Vue Router
import router from './routes'

// Import axios
import Common from './common'

// Import main app
import App from './App.vue'

// Import Bootstrap
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

//Uses
//window.Vue = require('vue')
Vue.mixin(Common)
Vue.use(ViewUI);

//Vue.component('mainapp', require('./components/mainapp.vue').default)

const app = new Vue({
    router,
    store,
    render: h => h(App)
    //el : '#app'
}).$mount('#app')
